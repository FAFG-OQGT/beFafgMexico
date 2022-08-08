const moment = require('moment');
const bcrypt = require('bcrypt')
const { v4 } = require("uuid");
const Correo = require('../mail/controller');
const { ResetPassWord, Cliente, Usuario } = require('../../../store/mysql');
const config = require('../../../config');
const enviarCorreo = async (req) => {
    let { htmlResetPassword } = require('../../PlantillasHtml/plantillasCorreo/ResetPassword');
    let htmlResetPasswordTemplate = htmlResetPassword
    let response = {};
    let ipCliente = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const { email:correoUsuario } = req.body;
    const itemUsuario = await Usuario.findOne({ where: { email:correoUsuario }, attributes: ['usuarioId', 'personaId','email'] });
    const { usuarioId = 0, personaId = 0,email='' } = !!itemUsuario && itemUsuario;
    if (usuarioId > 0) {
            let solicitudExistente = false;
            let infoResetPass = await ResetPassWord.findOne({
                where: { usuarioId, estadoId:1 },
                attributes: ['codigo', 'messageId', 'fechaHoraVencimiento', 'estadoId'],
                order: [
                    ['codigo', 'DESC']
                ]
            });

            if (infoResetPass) {
                const { fechaHoraVencimiento } = infoResetPass;
                let minutosParaVencer = moment.duration(moment(fechaHoraVencimiento, 'YYYY-MM-DD').diff(moment(new Date()))).asMinutes();
                if (minutosParaVencer > 0) {
                    solicitudExistente = true;
                }
            }
            
            if (!solicitudExistente) {
                const { minutosVigenciaEnlace = 10, emisor = "" } = config.resetPass;
                const { nombreEmpresa = "NO CONFIGURADO", direccionEmpresa = "NO CONFIGURADO", urlLogoEmpresa = "#", urlWebResetPassWord = "#",urlImgFooter ="#"} = config.resetPass;
                let uuidReset = v4();
                const infoReset = {
                    codigo:uuidReset,
                    emisor,
                    receptor: email,
                    ipSolicitud: ipCliente
                };
                infoReset.usuarioId = usuarioId;
                infoReset.fechaHoraVencimiento = moment(new Date(), 'YYYY/MM/DD HH:mm').add(minutosVigenciaEnlace, "minutes");
                const data = await ResetPassWord.create(infoReset);
                const { codigo } = !!data && data;
                htmlResetPasswordTemplate = htmlResetPasswordTemplate.replace("[urlLogoEmpresa]", urlLogoEmpresa);
                htmlResetPasswordTemplate = htmlResetPasswordTemplate.replace("[tituloCorreo]", "Restablece tu Contraseña");
                htmlResetPasswordTemplate = htmlResetPasswordTemplate.replace("[descripcionCorta]", "Toque el botón de abajo para restablecer la contraseña de su cuenta. Si no solicitó una nueva contraseña, puede eliminar este correo de forma segura.");
                htmlResetPasswordTemplate = htmlResetPasswordTemplate.replace("[contenidoCorreo]", "¿Olvidaste tu contraseña? ¡No hay problema! <br> Simplemente haz clic en el boton a continuación para crear una nueva contraseña.<br><br><b>Si no has solicitado una nueva contraseña ignora este correo. </b>");
                htmlResetPasswordTemplate = htmlResetPasswordTemplate.replace("[tituloBoton]", "Restablecer contraseña");
                htmlResetPasswordTemplate = htmlResetPasswordTemplate.replace("[informacionExtra]", `Este enlace vence en <b>${minutosVigenciaEnlace} minutos.</b>`);
                htmlResetPasswordTemplate = htmlResetPasswordTemplate.replace("[urlImgFooter]", urlImgFooter);
                htmlResetPasswordTemplate = htmlResetPasswordTemplate.replace("[footer]", "");
                htmlResetPasswordTemplate = htmlResetPasswordTemplate.replace("[nombreEmpresa]", "");
                htmlResetPasswordTemplate = htmlResetPasswordTemplate.replace("[direccionEmpresa]", "");
               // let params = `${uuidReset}|${usuarioId}`;
                //params =Buffer.from(params).toString("base64");
                let hrefBoton = `${urlWebResetPassWord}${codigo}`;
                console.log(hrefBoton);
                htmlResetPasswordTemplate = htmlResetPasswordTemplate.replace("[hrefBoton]", hrefBoton);
                const resultEmail = await Correo.sendMail(email, "Restablecer Contraseña", null,htmlResetPasswordTemplate);
                let messageId =resultEmail.messageId;
                messageId = messageId.replace("<", "").replace(">", "");
                const resultadoUpdateResetPass = await ResetPassWord.update({ messageId,estadoId: 1 }, {
                    where: {
                        codigo
                    }
                });
                response.code = 1;
                response.data = "Se ha enviado un enlace a su correo electrónico, por favor revise su bandeja de entrada.";
            } else {
                response.code = 0;
                response.data = "Ya existe una solicitud para restablecer su contraseña, por favor revise su correo electrónico.";
            }
     
    } else {
        response.code = -1;
        response.data = `El email ${correoUsuario} no esta asociado a ningún usuario, por favor verifique`;
    }

    return response;
}

const updatePass = async (req) => {
    let ipCliente = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let response = {};
    const { id, password = "" } = req.body;
    if (String(password).trim().length > 0) {
        if (id) {
            // let parametros =Buffer.from(id, 'base64').toString().split('|');
            // if (parametros.length === 2) {
                let uuidReset =String(id).trim();
                // let usuarioId = parametros[1];
                let infoResetPass = await ResetPassWord.findOne({
                    where: { codigo:uuidReset},
                    attributes: ['codigo','usuarioId', 'messageId', 'fechaHoraVencimiento', 'estadoId'],
                    order: [
                        ['codigo', 'DESC']
                    ]
                });
                if (infoResetPass) {
                    const { fechaHoraVencimiento, estadoId,usuarioId } = infoResetPass;
                    if (estadoId === 1) {
                        let minutosParaVencer = moment.duration(moment(fechaHoraVencimiento).diff(moment(new Date()))).asMinutes();
                        if (minutosParaVencer > 0) {
                            let encript_pass = bcrypt.hashSync(password, 10);
                            const resultadoUpdateUser = await Usuario.update({ password: encript_pass }, {
                                where: {
                                    usuarioId
                                }
                            });
                            if (resultadoUpdateUser > 0) {
                                const resultadoUpdateResetPass = await ResetPassWord.update({ ipUpdate: ipCliente, fechaHoraUpdate: new Date(), estadoId: 2 }, {
                                    where: {
                                        codigo:uuidReset
                                    }
                                });
                                response.code = 1;
                                response.data = "Contraseña actualizada exitosamente.";
                            } else {
                                response.code = -1;
                                response.data = "Ocurrió un error al intentar actualizar la contraseña, por favor comuniquese con el administrador de la aplicación.";
                            }
                        } else {
                            response.code = -1;
                            response.data = "La solicitud para restablecer contraseña ya venció.";
                        }
                    } else {
                        response.code = -1;
                        response.data = "La solicitud para restablecer contraseña ya fue utilizada.";
                    }
                } else {
                    response.code = -1;
                    response.data = "No existe solicitud para restablecer contraseña.";
                }

            // } else {
            //     response.code = -1;
            //     response.data = "Los parametros enviados son corruptos.";
            // }
        } else {
            response.code = -1;
            response.data = "Los parametros enviados no son válidos.";
        }
    } else {
        response.code = -1;
        response.data = "La contraseña enviado no es válida.";
    }

    return response;
}

module.exports = {
    enviarCorreo,
    updatePass
}