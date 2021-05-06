var sequelize = require("sequelize");
const pdf = require("html-pdf-chrome");
const moment = require("moment");
const controllerArchivo = require("../archivo/controller");
var stream = require("stream");
const {getFileFromPath} = require("../../functions/fileFunction");
const error = require("../../../utils/error");
const email = require("../mail/controller");
const config = require("../../../config");
const {
  IdentificadoOst,
  Genero,
  GrupoEtario,
  GrupoEtnolinguistico,
  Estado,
  Usuario,
  Osamenta,
  Victima,
  TipoCasoDid,
  Municipio,
  Departamento,
  Documento,
  RepoDoc,
  IdentificadoOstDocumento,
  Token,
  Puesto,
} = require("../../../store/mysql");

const cadenaCorreo = async (pTipo, pToken) => {
  var htmlToken = ``;

  var htmlToken = "";
  var path = require("path");
  var pathA = path.join(
    __dirname,
    "../../PlantillasHtml/Osteologico/TokenCreaIdent.html"
  );
  htmlToken = getFileFromPath(pathA);

  htmlToken = htmlToken.replace("PTOKEN", pToken);
  htmlToken = htmlToken.replace("POPERACION", pTipo);

  return htmlToken;
};

const correoUsuario = async (pUsuarioId) => {
  const usuario = await Usuario.findOne({
    attributes: {
      exclude: ["estadoId", "fechaHoraIngreso", "firmaUsuario"],
    },
    where: {usuarioId: pUsuarioId, estadoId: 1},
  });

  return usuario.email;
};

const generateToken = async () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const insert = async (req) => {
  const token = await generateToken();
  const cuerpo = await cadenaCorreo("CREACIÓN IDENTIFICADO OSTEOLÓGICO", token);
  const valores = {
    operacion: "CREACIONIDENTIFICADOOST",
    valorToken: token,
    estadoId: 1,
    usuarioIngresoId: req.body.usuarioIngresoId,
  };
  const emailUser = await correoUsuario(req.body.usuarioIngresoId);
  const tokenIns = Token.create(valores);
  console.log(token);
  email.sendMail(emailUser, "Autorizacion Creacion Identificado", null, cuerpo);
  return "Se ha enviado un token a su correo electronico";
  //
};

const confirmInsert = async (req) => {
  const valida = await Token.findOne({
    where: {
      valorToken: req.body.token,
      estadoId: 1,
      usuarioIngresoId: req.body.usuarioIngresoId,
    },
  });

  if (!valida) {
    throw error("Token Ingresado no valido", 400);
  }
  return (identificadoOst = await IdentificadoOst.create(req.body));
  //return valida;
};

const insertIdentificadoOstArchivo = async (vals) => {
  return (archivo = await IdentificadoOstDocumento.create(vals));
};

const updateIdentificadoOstArchivo = async (key, id) => {
  return (archivo = await IdentificadoOstDocumento.update(
    {estadoId: 3},
    {
      where: {
        identificadoOstId: id,
        urlDocumento: key,
      },
    }
  ));
};

const getFolder = async (pDocumentoId) => {
  const folder = await Documento.findAll({
    include: [
      {
        model: RepoDoc,
        as: "RepoDoc",
        attributes: {
          exclude: ["fechaHoraIngreso"],
        },
      },
    ],
    where: {
      documentoId: pDocumentoId,
      estadoId: 1,
    },
  });
  var path;
  folder.map((data) => {
    path = data.RepoDoc.path;
  });

  return path;
};

const insertArchivo = async (req) => {
  const folder = await getFolder(req.body.documentoId);
  return controllerArchivo
    .doUpload(folder, req.file.originalname, req.file.mimetype, req.file.buffer)
    .then((bucket) => {
      const valores = {
        identificadoOstId: req.body.identificadoOstId,
        documentoId: req.body.documentoId,
        urlDocumento: bucket.Key,
        eTag: bucket.ETag,
        mimetype: req.file.mimetype,
        usuarioIngresoId: req.body.usuarioIngresoId,
        estadoId: 1,
      };
      return insertIdentificadoOstArchivo(valores);
    })
    .catch((err) => {
      throw error(err, 400);
    });
};

const deleteArchivo = async (req) => {
  console.log(req.body.key);
  return controllerArchivo
    .doDeleteFile(req.body.key)
    .then((file) => {
      return updateIdentificadoOstArchivo(
        req.body.key,
        req.body.identificadoOstId
      );
    })
    .catch((err) => {
      throw error(err, 400);
    });
};

const getArchivo = async (req) => {
  console.log(req.query.key);
  return controllerArchivo
    .doGetFile(req.query.key)
    .then((file) => {
      return file;
    })
    .catch((err) => {
      throw error(err, 400);
    });
};

const list = async (req) => {
  const filtro = req.query.filtro ? req.query.filtro : "";
  const pagina = req.query.pagina ? parseInt(req.query.pagina) : 0;
  const limite = req.query.limite ? parseInt(req.query.limite) : 10;

  return (identificadoOsts = await IdentificadoOst.findAndCountAll({
    offset: pagina * limite,
    limit: limite,
    include: [
      {
        model: Osamenta,
        as: "Osamenta",
        attributes: ["casoId", "fosaDet", "osamentaDet"],
      },
      {
        model: Victima,
        as: "Victima",
        attributes: ["codigoVictima", "nombreVictima"],
      },
      {
        model: Genero,
        as: "Sexo",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: GrupoEtario,
        as: "GrupoEtario",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: GrupoEtnolinguistico,
        as: "GrupoEtnolinguistico",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: TipoCasoDid,
        as: "TipoCasoDidOst",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: Municipio,
        as: "MuniDesap",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "departamentoId"],
        },
      },
      {
        model: Departamento,
        as: "DeptoDesap",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
        },
      },
      {
        model: Estado,
        as: "Estado",
        attributes: {
          exclude: ["fechaHoraIngreso"],
        },
      },
      {
        model: Usuario,
        as: "Usuario",
        attributes: ["usuarioId", "usuario"],
      },
    ],
    where: sequelize.literal(
      `(identificadoOstId like '%${filtro}%')` +
        ` or (desaparicionDia like '%${filtro}%')` +
        ` or (desaparicionMes like '%${filtro}%')` +
        ` or (desaparicionAnio like '%${filtro}%')` +
        ` or (sesionIdentificacion like '%${filtro}%')` +
        ` or (concat('FAFG','-',Osamenta.casoId,'-',Osamenta.fosaDet,'-',Osamenta.osamentaDet) like '%${filtro}%')` +
        ` or (Victima.codigoVictima like '%${filtro}%')` +
        ` or (Victima.nombreVictima like '%${filtro}%')` +
        ` or (Sexo.descripcion like '%${filtro}%')` +
        ` or (GrupoEtario.descripcion like '%${filtro}%')` +
        ` or (GrupoEtnolinguistico.descripcion like '%${filtro}%')` +
        ` or (TipoCasoDidOst.descripcion like '%${filtro}%')` +
        ` or (MuniDesap.descripcion like '%${filtro}%')` +
        ` or (DeptoDesap.descripcion like '%${filtro}%')`
    ),

    order: [["identificadoOstId", "DESC"]],
  }));
};

const listArchivo = async (req) => {
  return (archivos = await IdentificadoOstDocumento.findAll({
    include: [
      {
        model: Documento,
        as: "Documento",
        include: [
          {
            model: RepoDoc,
            as: "RepoDoc",
            attributes: {
              exclude: ["fechaHoraIngreso"],
            },
          },
        ],
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: Estado,
        as: "Estado",
        attributes: {
          exclude: ["fechaHoraIngreso"],
        },
      },
      {
        model: Usuario,
        as: "Usuario",
        attributes: {
          exclude: [
            "estadoId",
            "fechaHoraIngreso",
            "password",
            "personaId",
            "email",
            "firmaUsuario",
          ],
        },
      },
    ],
    where: {
      identificadoOstId: req.params.identificadoOstId,
      estadoId: 1,
    },
  }));
};

const getArchivoB64 = async (key) => {
  const buffer = await controllerArchivo
    .doGetFile(key)
    .then((file) => {
      return file;
    })
    .catch((err) => {
      return (Body = "");
    });
  console.log(buffer);
  return buffer.Body.toString("base64");
};

const getGenogramaRep = async (id) => {
  let genograma = IdentificadoOstDocumento.findOne({
    where: {identificadoOstId: id, documentoId: 2, estadoId: 1},
  });

  return genograma;
};

const getFotos = async (id, pDocumentoId) => {
  let fotosExhu = IdentificadoOstDocumento.findAll({
    where: {identificadoOstId: id, documentoId: pDocumentoId, estadoId: 1},
  });

  return fotosExhu;
};
const getDataReporte = async (req) => {
  return (identificado = IdentificadoOst.findOne({
    distinct: "identificadoOstId",
    include: [
      {
        model: Osamenta,
        as: "Osamenta",
        include: [
          {
            model: Municipio,
            as: "MuniExhumacion",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso", "departamentoId"],
            },
          },
          {
            model: Departamento,
            as: "DeptoExhumacion",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
        ],
      },
      {
        model: Victima,
        as: "Victima",
        include: [
          {
            model: Municipio,
            as: "MuniLugarHecho",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso", "departamentoId"],
            },
          },
          {
            model: Departamento,
            as: "DeptoLugarHecho",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
        ],
      },
      {
        model: Genero,
        as: "Sexo",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: GrupoEtario,
        as: "GrupoEtario",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: GrupoEtnolinguistico,
        as: "GrupoEtnolinguistico",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: TipoCasoDid,
        as: "TipoCasoDidOst",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: Municipio,
        as: "MuniDesap",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "departamentoId"],
        },
      },
      {
        model: Departamento,
        as: "DeptoDesap",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
        },
      },
      {
        model: Estado,
        as: "Estado",
        attributes: {
          exclude: ["fechaHoraIngreso"],
        },
      },
      {
        model: Usuario,
        as: "Usuario",
        attributes: ["usuarioId", "usuario", "firmaUsuario"],
        include: [
          {
            model: Puesto,
            as: "Puesto",
            attributes: ["descripcion"],
          },
        ],
      },
    ],
    where: {identificadoOstId: req.params.identificadoOstId},
  }));
};

const getReportePDF = async (req) => {
  var ost = await getDataReporte(req);

  var htmlRep = "";
  var path = require("path");
  var pathA = path.join(
    __dirname,
    "../../PlantillasHtml/Osteologico/ReporteIdent_Ost.html"
  );
  htmlRep = getFileFromPath(pathA);

  let rutaGenograma = await getGenogramaRep(ost.identificadoOstId); //ost.identificadoOstId
  var htmlGeno = "";
  if (rutaGenograma) {
    const valGenograma = await getArchivoB64(rutaGenograma.urlDocumento);
    htmlGeno = `<tr><td><img src="data:image/png;base64,${valGenograma}" width="200" height="160"></td> </tr>`;
  } else {
    htmlGeno = `<tr><td>No posee Genograma</td> </tr>`;
  }

  let htmlExhumacion,
    valExhuma = "";
  let rutaFotosExh = await getFotos(ost.identificadoOstId, 11);
  if (rutaFotosExh.length > 0) {
    console.log("entre exhuma");
    for (let index = 0; index < rutaFotosExh.length; index++) {
      let ruta = rutaFotosExh[index].urlDocumento;
      valExhuma = await getArchivoB64(ruta);
      htmlExhumacion += `<tr><td><img src="data:image/png;base64,${valExhuma}" width="200" height="160"></td></tr> `;
    }
  } else {
    htmlExhumacion = `<tr><td>No posee Fotos Exhumacion</td> </tr>`;
  }

  let htmlExtendido,
    valExtend = "";
  let rutaFotosExtend = await getFotos(ost.identificadoOstId, 29);
  if (rutaFotosExtend.length > 0) {
    console.log(rutaFotosExtend);
    for (let index = 0; index < rutaFotosExtend.length; index++) {
      let ruta = rutaFotosExtend[index].urlDocumento;
      valExtend = await getArchivoB64(ruta);
      htmlExtendido += `<tr><td><img src="data:image/png;base64,${valExtend}" width="200" height="160"></td></tr> `;
    }
  } else {
    htmlExtendido = `<tr><td>No posee Fotos Extendido</td> </tr>`;
    console.log(htmlExtendido);
  }

  let htmlTrauma,
    valTrauma = "";
  let rutaFotosTrauma = await getFotos(ost.identificadoOstId, 28);
  if (rutaFotosTrauma.length > 0) {
    for (let index = 0; index < rutaFotosTrauma.length; index++) {
      let ruta = rutaFotosTrauma[index].urlDocumento;
      valTrauma = await getArchivoB64(ruta);
      htmlTrauma += `<tr><td><img src="data:image/png;base64,${valTrauma}" width="200" height="160"></td></tr> `;
    }
  } else {
    htmlTrauma = `<tr><td>No posee Fotos de Trauma</td> </tr>`;
  }

  let htmlDent,
    valDent = "";
  let rutaFotosDent = await getFotos(ost.identificadoOstId, 30);
  if (rutaFotosDent.length > 0) {
    for (let index = 0; index < rutaFotosDent.length; index++) {
      let ruta = rutaFotosDent[index].urlDocumento;
      valDent = await getArchivoB64(ruta);
      htmlDent += `<tr><td><img src="data:image/png;base64,${valDent}" width="200" height="160"></td></tr> `;
    }
  } else {
    htmlDent = `<tr><td>No posee Fotos de Dentinción</td> </tr>`;
  }

  let htmlRopa,
    valRopa = "";
  let rutaFotosRopa = await getFotos(ost.identificadoOstId, 31);
  if (rutaFotosRopa.length > 0) {
    for (let index = 0; index < rutaFotosRopa.length; index++) {
      let ruta = rutaFotosRopa[index].urlDocumento;
      valRopa = await getArchivoB64(ruta);
      htmlRopa += `<tr><td><img src="data:image/png;base64,${valRopa}" width="200" height="160"></td></tr> `;
    }
  } else {
    htmlRopa = `<tr><td>No posee Fotos de Ropa</td> </tr>`;
  }

  var htmlFirmaIdent = `<img src="data:image/jpg;base64,${ost.Usuario.firmaUsuario.toString(
    "base64"
  )}" width="200" height="160">`;

  var fechaConf,
    muniHecho,
    deptoHecho,
    diahecho,
    mesHecho,
    anioHecho,
    causaMuerte,
    muniExhu,
    deptoExhu,
    fechaExhu,
    TipoCasoDid,
    grupoEtno,
    sexo = "";

  if (!ost.fechaConfirmacion) {
    fechaConf = "null";
  } else {
    fechaConf = moment(ost.fechaConfirmacion).format("DD/MM/YYYY");
  }
  if (!ost.Victima.MuniLugarHecho) {
    muniHecho = "null";
  } else {
    muniHecho = ost.Victima.MuniLugarHecho.descripcion;
  }
  if (!ost.Victima.DeptoLugarHecho) {
    deptoHecho = "null";
  } else {
    deptoHecho = ost.Victima.DeptoLugarHecho.descripcion;
  }
  if (!ost.Victima.diaHecho) {
    diahecho = "XX";
  } else {
    diahecho = ost.Victima.diaHecho;
  }
  if (!ost.Victima.mesHecho) {
    mesHecho = "XX";
  } else {
    mesHecho = ost.Victima.mesHecho;
  }
  if (!ost.Victima.anioHecho) {
    anioHecho = "XXXX";
  } else {
    anioHecho = ost.Victima.anioHecho;
  }
  if (!ost.TipoCasoDidOst) {
    causaMuerte = "null";
  } else {
    causaMuerte = ost.TipoCasoDidOst.descripcion;
  }

  if (!ost.Osamenta.MuniExhumacion) {
    muniExhu = "null";
  } else {
    muniExhu = ost.Osamenta.MuniExhumacion.descripcion;
  }
  if (!ost.Osamenta.DeptoExhumacion) {
    deptoExhu = "null";
  } else {
    deptoExhu = ost.Osamenta.DeptoExhumacion.descripcion;
  }
  if (!ost.Osamenta.fechaExhumacion) {
    fechaExhu = "null";
  } else {
    fechaExhu = moment(ost.Osamenta.fechaExhumacion).format("DD/MM/YYYY");
  }
  if (!ost.Sexo) {
    sexo = "null";
  } else {
    sexo = ost.Sexo.descripcion;
  }
  if (!ost.TipoCasoDidOst) {
    TipoCasoDid = "null";
  } else {
    TipoCasoDid = ost.TipoCasoDidOst.descripcion;
  }
  if (!ost.GrupoEtnolinguistico) {
    grupoEtno = "null";
  } else {
    grupoEtno = ost.GrupoEtnolinguistico.descripcion;
  }

  htmlRep = htmlRep.replace("@XXX", "FAFG-" + ost.identificadoOstId);
  htmlRep = htmlRep.replace(
    "@OSAMENTA",
    "FAFG-" +
      ost.Osamenta.casoId +
      "-" +
      ost.Osamenta.fosaDet +
      "-" +
      ost.Osamenta.osamentaDet
  );
  htmlRep = htmlRep.replace("@VICTIMAID", ost.Victima.codigoVictima);
  htmlRep = htmlRep.replace("@VICTIMANOMBRE", ost.Victima.nombreVictima);
  htmlRep = htmlRep.replace("@FECONFIRMACION", fechaConf);
  htmlRep = htmlRep.replace("@TIPOCASO", TipoCasoDid);
  htmlRep = htmlRep.replace(/@EDAD/g, "");
  htmlRep = htmlRep.replace("@GRUPOETNOLINGUISTICO", grupoEtno);
  htmlRep = htmlRep.replace(
    "@LUGARHECHO",
    ost.Victima.lugarHechoAldea + ", " + muniHecho + ", " + deptoHecho
  );
  htmlRep = htmlRep.replace(
    "@FECHAHECHO",
    diahecho + "/" + mesHecho + "/" + anioHecho
  );
  htmlRep = htmlRep.replace("@RESUMENHECHO", "");
  htmlRep = htmlRep.replace(
    "@LUGAREXHUMACION",
    ost.Osamenta.exhumacionAldea + ", " + muniExhu + ", " + deptoExhu
  );
  htmlRep = htmlRep.replace("@FECHAEXHUMACION", fechaExhu);
  htmlRep = htmlRep.replace("@SEXO", sexo);
  htmlRep = htmlRep.replace("@DENTICION", "");
  htmlRep = htmlRep.replace("@TRAUMAS", "");
  htmlRep = htmlRep.replace("@CAUSAMUERTE", causaMuerte);
  htmlRep = htmlRep.replace("@OBSERVACIONES", "");
  htmlRep = htmlRep.replace("@IMAGEGENO", htmlGeno);
  htmlRep = htmlRep.replace("@FOTOEXHUMACION", htmlExhumacion);
  htmlRep = htmlRep.replace("@FOTOEXTENDIDO", htmlExtendido);
  htmlRep = htmlRep.replace("@FOTOTRAUMA", htmlTrauma);
  htmlRep = htmlRep.replace("@FOTODENTICION", htmlDent);
  htmlRep = htmlRep.replace("@FOTOROPA", htmlRopa);
  htmlRep = htmlRep.replace(
    "@FECHAFIN",
    moment(ost.fechaHoraIngreso).format("DD/MM/YYYY")
  );
  htmlRep = htmlRep.replace("@FIRMA", htmlFirmaIdent);
  htmlRep = htmlRep.replace("@PERSONALDID", ost.Usuario.usuario);
  htmlRep = htmlRep.replace(
    "@PUESTO",
    ost.Usuario
      ? ost.Usuario.Puesto
        ? ost.Usuario.Puesto.descripcion
        : ""
      : ""
  );
  htmlRep = htmlRep.replace(/null/g, "");
  htmlRep = htmlRep.replace(/undefined/g, "");

  var options = config.optionsHtmlPdf;
  const pdfOst = await pdf.create(htmlRep, options);
  //await pdfOst.toFile("OST.pdf");

  const stream = await pdfOst.toBuffer();

  var data = {
    AcceptRanges: "bytes",
    ContentType: "application/pdf",
    Body: stream,
  };

  return data;
};

const searchById = async (req) => {
  const identificadoOst = await IdentificadoOst.findOne({
    include: [
      {
        model: Osamenta,
        as: "Osamenta",
        attributes: ["casoId", "fosaDet", "osamentaDet"],
      },
      {
        model: Victima,
        as: "Victima",
        attributes: ["codigoVictima", "nombreVictima"],
      },
      {
        model: Genero,
        as: "Sexo",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: GrupoEtario,
        as: "GrupoEtario",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: GrupoEtnolinguistico,
        as: "GrupoEtnolinguistico",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: TipoCasoDid,
        as: "TipoCasoDidOst",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: Municipio,
        as: "MuniDesap",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "departamentoId"],
        },
      },
      {
        model: Departamento,
        as: "DeptoDesap",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
        },
      },
      {
        model: Estado,
        as: "Estado",
        attributes: {
          exclude: ["fechaHoraIngreso"],
        },
      },
      {
        model: Usuario,
        as: "Usuario",
        attributes: ["usuarioId", "usuario"],
      },
    ],
    where: {
      identificadoOstId: req.params.identificadoOstId,
    },
  });
  if (!identificadoOst) {
    throw error("No existe el Identificado Ost", 400);
  } else {
    return identificadoOst;
  }
};

const change = async (req) => {
  const identificadoOstUpdate = await IdentificadoOst.findOne({
    where: {identificadoOstId: req.params.identificadoOstId},
  });
  if (!identificadoOstUpdate) {
    throw error("No existe el Identificado Ost", 400);
  }
  const result = await IdentificadoOst.update(req.body, {
    where: {
      identificadoOstId: req.params.identificadoOstId,
    },
  });
  if (result > 0) {
    return "Cambio realizado con exito";
  } else {
    return "Los datos ingresados son iguales";
  }
};

module.exports = {
  insert,
  list,
  getDataReporte,
  getReportePDF,
  searchById,
  change,
  insertArchivo,
  getArchivo,
  listArchivo,
  confirmInsert,
  deleteArchivo,
};
