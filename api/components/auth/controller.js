const bcrypt = require("bcrypt");
var sequelize = require("sequelize");
const auth = require("../../../auth");
const joi = require("joi");
const moment = require('moment');
const error = require("../../../utils/error");
const {
  Usuario,
  Persona,
  UsuarioRol,
  RolObjetoAcceso,
  ObjetoMenu,
  ObjetoAcceso,
  Modulo,
  Rol,
  Token,
} = require("../../../store/mysql");
const { schemaLogin } = require("../../../auth/schemas");
const usuario = require("../../../store/models/usuario");
const email = require("../mail/controller");

const cadenaCorreo = async (pTipo, pToken) => {
  var htmlToken = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
   <head> 
    <meta charset="UTF-8"> 
    <meta content="width=device-width, initial-scale=1" name="viewport"> 
    <meta name="x-apple-disable-message-reformatting"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta content="telephone=no" name="format-detection"> 
    <title>Nuevo correo electrónico 2</title> 
    <!--[if (mso 16)]>
      <style type="text/css">
      a {text-decoration: none;}
      </style>
      <![endif]--> 
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
    <!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  <![endif]--> 
    <!--[if !mso]><!-- --> 
    <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"> 
    <!--<![endif]--> 
    <style type="text/css">
  @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important; line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:30px!important } h2 a { font-size:26px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button { font-size:20px!important; display:block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
  #outlook a {
    padding:0;
  }
  .ExternalClass {
    width:100%;
  }
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
    line-height:100%;
  }
  .es-button {
    mso-style-priority:100!important;
    text-decoration:none!important;
  }
  a[x-apple-data-detectors] {
    color:inherit!important;
    text-decoration:none!important;
    font-size:inherit!important;
    font-family:inherit!important;
    font-weight:inherit!important;
    line-height:inherit!important;
  }
  .es-desk-hidden {
    display:none;
    float:left;
    overflow:hidden;
    width:0;
    max-height:0;
    line-height:0;
    mso-hide:all;
  }
  </style> 
   </head> 
   <body style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
    <div class="es-wrapper-color" style="background-color:#F4F4F4"> 
     <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#f4f4f4"></v:fill>
        </v:background>
      <![endif]--> 
     <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
       <tr class="gmail-fix" height="0" style="border-collapse:collapse"> 
        <td style="padding:0;Margin:0"> 
         <table cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:600px"> 
           <tr style="border-collapse:collapse"> 
            <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px" height="0"><img src="https://esputnik.com/repository/applications/images/blank.gif" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:600px;width:600px" alt width="600" height="1"></td> 
           </tr> 
         </table></td> 
       </tr> 
       <tr style="border-collapse:collapse"> 
        <td valign="top" style="padding:0;Margin:0"> 
         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
           <tr style="border-collapse:collapse"> 
            <td style="padding:0;Margin:0;background-color:#fd7e14" bgcolor="#fd7e14" align="center"> 
             <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
               <tr style="border-collapse:collapse"> 
                <td align="left" style="padding:0;Margin:0"> 
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                   <tr style="border-collapse:collapse"> 
                    <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                     <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#FFFFFF;border-radius:4px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                       <tr style="border-collapse:collapse"> 
                        <td align="center" style="Margin:0;padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:35px"><h1 style="Margin:0;line-height:58px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:48px;font-style:normal;font-weight:normal;color:#111111">Se ha generado un Token de seguridad.<br></h1></td> 
                       </tr> 
                       <tr style="border-collapse:collapse"> 
                        <td style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;font-size:0" bgcolor="#ffffff" align="center"> 
                         <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                           <tr style="border-collapse:collapse"> 
                            <td style="padding:0;Margin:0;border-bottom:1px solid #FFFFFF;background:#FFFFFFnone repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td> 
                           </tr> 
                         </table></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                 </table></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table> 
         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
           <tr style="border-collapse:collapse"> 
            <td align="center" style="padding:0;Margin:0"> 
             <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
               <tr style="border-collapse:collapse"> 
                <td align="left" style="padding:0;Margin:0"> 
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                   <tr style="border-collapse:collapse"> 
                    <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                     <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                       <tr style="border-collapse:collapse"> 
                        <td class="es-m-txt-l" bgcolor="#ffffff" align="left" style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">Se ha creado un token de seguridad para <strong>POPERACION</strong>, ingresa los 6 dígitos en la aplicacion para confirmar la creación, recuerda este token expira en 2 minutos. El token es el siguiente: <br></p></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                 </table></td> 
               </tr> 
               <tr style="border-collapse:collapse"> 
                <td align="left" style="padding:0;Margin:0;padding-bottom:20px;padding-left:30px;padding-right:30px"> 
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                   <tr style="border-collapse:collapse"> 
                    <td valign="top" align="center" style="padding:0;Margin:0;width:540px"> 
                     <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                       <tr style="border-collapse:collapse"> 
                        <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:24px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:36px;color:#666666"><strong>PTOKEN</strong></p></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                 </table></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table> 
         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
           <tr style="border-collapse:collapse"> 
            <td align="center" style="padding:0;Margin:0"> 
             <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
               <tr style="border-collapse:collapse"> 
                <td align="left" style="padding:0;Margin:0"> 
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                   <tr style="border-collapse:collapse"> 
                    <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                     <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#111111" width="100%" cellspacing="0" cellpadding="0" bgcolor="#111111" role="presentation"> 
                       <tr style="border-collapse:collapse"> 
                        <td class="es-m-txt-l" bgcolor="#111111" align="left" style="padding:0;Margin:0;padding-left:30px;padding-right:30px;padding-top:35px"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:24px;font-style:normal;font-weight:normal;color:#FFFFFF">¿No reconoces esta operación?<br></h2></td> 
                       </tr> 
                       <tr style="border-collapse:collapse"> 
                        <td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#FFFFFF">Comunícate con el área de informática para darle seguimiento.<br><br></p></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                 </table></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table> 
         <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
           <tr style="border-collapse:collapse"> 
            <td align="center" style="padding:0;Margin:0"> 
             <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"> 
               <tr style="border-collapse:collapse"> 
                <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:30px;padding-right:30px"> 
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                   <tr style="border-collapse:collapse"> 
                    <td valign="top" align="center" style="padding:0;Margin:0;width:540px"> 
                     <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                       <tr style="border-collapse:collapse"> 
                        <td align="center" style="padding:0;Margin:0;padding-top:25px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#666666">La identificación de las y los desaparecidos es nuestra prioridad.<br></p></td> 
                       </tr> 
                       <tr style="border-collapse:collapse"> 
                        <td align="center" style="padding:0;Margin:0;padding-top:25px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#666666">© 2020 CRIH COAHUILA<br></p></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                 </table></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table> 
         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
           <tr style="border-collapse:collapse"> 
            <td align="center" style="padding:0;Margin:0"> 
             <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
               <tr style="border-collapse:collapse"> 
                <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px"> 
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                   <tr style="border-collapse:collapse"> 
                    <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                     <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                       <tr style="border-collapse:collapse"> 
                        <td style="padding:0;Margin:0;font-size:0px" align="center"><img class="adapt-img" src="https://hvpqyj.stripocdn.email/content/guids/CABINET_b75ba3044dee17bff461f09a9aecd704/images/21591620279475625.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                 </table></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table></td> 
       </tr> 
     </table> 
    </div>  
   </body>
  </html>`;

  htmlToken = htmlToken.replace("PTOKEN", pToken);
  htmlToken = htmlToken.replace("POPERACION", pTipo);

  return htmlToken;
};

const generateToken = async () =>{
  return Math.floor(100000 + Math.random() * 900000);
}

const moduloUser = async (usuarioIdP) => {
  console.log("entre");
  return (modulos = await UsuarioRol.findAll({
    attributes: ["rolId"],
    include: [
      {
        model: Rol,
        as: "modulo",
        attributes: ["moduloId"],
        where: {
          aplicativoId: 1,
        }
      },
    ],
    where: {
      usuarioId: usuarioIdP,
      estadoId: 1,
     
    },
  }));
};

const items = async (usuarioId) => {
  const rolesUser = await UsuarioRol.findAll({
    include: [
      {
        model: Rol,
        as: "modulo",
        attributes: ["moduloId"],
        where: {
          aplicativoId: 1,
        }
      },
    ],
    where: { usuarioId: usuarioId },
  });

  let listRolesUsuario = new Array();
  rolesUser.map((data) => {
    listRolesUsuario.push(data.rolId);
  });

  const rol_objetoAcceso = await RolObjetoAcceso.findAll({
    where: { rolId: listRolesUsuario, estadoId: 1 },
  });

  let listObjetoAccesoId = new Array();
  rol_objetoAcceso.map((data) => {
    listObjetoAccesoId.push(data.objetoAccesoId);
  });

  const objeto_acceso = await ObjetoAcceso.findAll({
    where: { objetoAccesoId: listObjetoAccesoId },
  });

  let listObjetoMenu = new Array();
  let listAcceso = new Array();
  let accesosxMenu = new Array();
  objeto_acceso.map((data) => {
    listObjetoMenu.push(data.objetoId);
    listAcceso.push(data.accesoId);
    let acceso = {
      objetoId: data.objetoId,
      accesoId: data.accesoId,
    };
    accesosxMenu.push(acceso);
  });

  const objetoMenu = await ObjetoMenu.findAll({
    where: { objetoId: listObjetoMenu },
  });

  let agregados = new Array();
  let miMenu = new Array();

  const obtenerAcceso = (objetoId) => {
    let actualizar = false;
    let ver = false;
    let agregar = false;
    let eliminar = false;
    let agregarArchivo = false;

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 1)
    ) {
      actualizar = true;
    }
    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 2)
    ) {
      ver = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 3)
    ) {
      agregar = true;
    }
    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 4)
    ) {
      eliminar = true;
    }
    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 5)
    ) {
      agregarArchivo = true;
    }
    let permisos = {
      actualizar,
      ver,
      agregar,
      eliminar,
      agregarArchivo,
    };

    return permisos;
  };

  const obtenerHijos = async (d) => {
    let childens = new Array();

    d.map((data) => {
      let menuId = data.objetoId;
      if (!agregados.find((i) => i === menuId)) {
        let itemMenu = {
          id: menuId,
          title: data.descripcion,
          type: data.type,
          url: data.url,
          classes: "",
          icon: data.icon,
          accesos: obtenerAcceso(menuId),
        };
        agregados.push(menuId);
        childens.push(itemMenu);
      }
    });
    return childens;
  };

  const objetoAnidado = (idObjeto) => {
    let hijos = objetoMenu.filter((i) => i.objetoPadreId == idObjeto);
    var itemMenu = [];
    hijos.map((data) => {
      itemMenu.push({
        id: data.dataValues.objetoId,
        title: data.dataValues.descripcion,
        type: data.dataValues.type,
        url: data.dataValues.url,
        classes: data.dataValues.classes,
        icon: data.dataValues.icon,
        children: objetoAnidado(data.dataValues.objetoId),
        accesos: obtenerAcceso(data.dataValues.objetoId),
      });
    });

    return itemMenu;
  };
  objetoMenu.map(async (data) => {
    if (data.objetoPadreId === null) {
      miMenu.push({
        id: data.dataValues.objetoId,
        title: data.dataValues.descripcion,
        type: data.dataValues.type,
        url: data.dataValues.url,
        classes: data.dataValues.classes,
        icon: data.dataValues.icon,
        children: objetoAnidado(data.dataValues.objetoId),
        accesos: obtenerAcceso(data.objetoId),
      });
    }
  });
  return miMenu;
};

const logToken = async(req) => {
  const result = joi.validate(req.body, schemaLogin);
  if (result.error) {
    throw error("Formato no valido");
  }

  return (user = await UsuarioRol.findOne({
    include: [
      {
        model: Usuario,
        as: "Usuario",
        attributes: ["usuarioId","personaId", "usuario", "password", "email"],
      },
      {
        model: Rol,
        as: "modulo",
        attributes: ["rolId", "descripcion", "moduloId", "aplicativoId"],
      },
    ],
    where: sequelize.literal(
      `Usuario.usuario = '${req.body.usuario}' `+
      `AND Usuario.estadoId = 1 ` +
      `AND modulo.aplicativoId = 1 `
    )
    
  }).then(async (userRes) => {
    if (!userRes) {
      throw error("Usuario no existe o esta inactivo", 401);
    }
    console.log(userRes);
    const pwdComp = bcrypt.compareSync(req.body.password, userRes.Usuario.password);
    if (pwdComp) {
      const personas = await Persona.findOne({
        where: { personaId: userRes.Usuario.personaId },
      });
      const token = await generateToken();
      const cuerpo = await cadenaCorreo("INGRESO SISTEMA DID - CRIH COAHUILA", token);
      const valores = {
        operacion: 'LOGIN',
        valorToken: token,
        estadoId: 1,
        usuarioIngresoId : userRes.Usuario.usuarioId,
        
      }
      const tokenIns = Token.create(valores);
      email.sendMail(userRes.Usuario.email, "INGRESO SISTEMA DID - CRIH COAHUILA", null, cuerpo);
      return "Se ha enviado un token a su correo electronico";
    } else {
      throw error("Contraseña invalida");
    }
  }));
}

const login = async (req) => {
  
  

  return (user = await UsuarioRol.findOne({
    include: [
      {
        model: Usuario,
        as: "Usuario",
        attributes: ["usuarioId","personaId", "usuario", "password", "email"],
      },
      {
        model: Rol,
        as: "modulo",
        attributes: ["rolId", "descripcion", "moduloId", "aplicativoId"],
      },
    ],
    where: sequelize.literal(
      `Usuario.usuario = '${req.body.usuario}' `+
      `AND Usuario.estadoId = 1 ` +
      `AND modulo.aplicativoId = 1 `
    )
    
  }).then(async (userRes) => {
    if (!userRes) {
      throw error("Usuario no existe o esta inactivo", 401);
    }

    const valida = await Token.findOne({
      where: { valorToken: req.body.token, estadoId: 1, usuarioIngresoId : userRes.Usuario.usuarioId},
    });
    var CurrentDate = moment();
    console.log(CurrentDate)
    if (!valida) {
      throw error("Token Ingresado no valido", 400);
    }

      const personas = await Persona.findOne({
        where: { personaId: userRes.Usuario.personaId },
      });
      const item = await items(userRes.Usuario.usuarioId);
      const modulo = await moduloUser(1);
      const data = {
        usuario: userRes.Usuario.usuario,
        usuarioId: userRes.Usuario.usuarioId,
        nombre: personas.nombre1 + " " + personas.apellido1,
        rol: modulo,
        token: auth.sign(userRes.Usuario.usuarioId),
        items: item,
      };
      return data;
    
  }));
};

const changePass = async (req) => {
  if (req.body.passNew != req.body.confirm) {
    throw error("Las contraseñas no coinciden", 401);
  }
  if (req.body.passNew === req.body.password) {
    throw error("La contraseña nueva no puede ser igual a la anterior", 401);
  }
  return (user = await Usuario.findOne({
    where: {
      usuarioId: req.body.usuarioId,
      estadoId: 1,
    },
  }).then(async (userRes) => {
    if (!userRes) {
      throw error("Usuario no existe o esta inactivo", 401);
    }
    const pwdComp = bcrypt.compareSync(req.body.password, userRes.password);
    if (!pwdComp) {
      throw error("La contraseña actual no es la correcta", 401);
    }

    return (updatePass = await Usuario.update(
      {
        password: bcrypt.hashSync(req.body.passNew, 7),
      },
      {
        where: {
          usuarioId: req.body.usuarioId,
        },
      }
    ).then((result) => {
      if (!result) {
        throw error("Error al actualizar contraseña", 401);
      }
      if (result > 0) {
        return "Contraseña actualizada con exito";
      } else {
        return "No se actualizo la contraseña";
      }
    }));
  }));
};

const changePassAdmin = async (req) => {
      return (updatePass = await Usuario.update(
      {
        password: bcrypt.hashSync(req.body.passNew, 7),
      },
      {
        where: {
          usuarioId: req.body.usuarioId,
        },
      }
    ).then((result) => {
      if (!result) {
        throw error("Error al actualizar contraseña", 401);
      }
      if (result > 0) {
        return "Contraseña actualizada con exito";
      } else {
        return "No se actualizo la contraseña";
      }
    }));
};

module.exports = {
  login,
  changePass,
  logToken,
  changePassAdmin
};
