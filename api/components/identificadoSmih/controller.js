var sequelize = require("sequelize");
var moment = require("moment");
const controllerArchivo = require("../archivo/controller");
var stream = require("stream");
const { getFileFromPath } = require("../../functions/fileFunction");
const error = require("../../../utils/error");
const email = require("../mail/controller");
const config = require("../../../config");
const pdf = require("html-pdf-chrome");
const correocreacionIdent = config.correos.creacionCoincidencia;
const {
  IdentificadoSmih,
  Coincidencia,
  Genero,
  GrupoEtario,
  GrupoEtnolinguistico,
  ValorEdad,
  TraumaCirc,
  DatosOdont,
  RegionAnatomica,
  Estado,
  Usuario,
  Osamenta,
  Victima,
  TipoCasoDid,
  CausaMuerte,
  Municipio,
  Departamento,
  CoincidenciaDocumento,
  Documento,
  RepoDoc,
  Token,
  TipoContexto,
  Puesto,
} = require("../../../store/mysql");

const cadenaCorreo = async (pTipo, pToken) => {
  var htmlToken = "";
  var path = require("path");
  var pathA = path.join(
    __dirname,
    "../../PlantillasHtml/SmIh/TokenCreaIdent.html"
  );
  htmlToken = getFileFromPath(pathA);
  htmlToken = htmlToken.replace("PTOKEN", pToken);
  htmlToken = htmlToken.replace("POPERACION", pTipo);

  return htmlToken;
};

const generateToken = async () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const cadenaCorreoDinamica = async (data) => {
  var html = "";
  var path = require("path");
  var pathA = path.join(__dirname, data.pathReport);
  html = getFileFromPath(pathA);
  html = html.replace("PUSUARIO", data.Usuario);
  html = html.replace("POSAMENTA", data.Osamenta);
  html = html.replace("PVICTIMA", data.Victima);
  html = html.replace("PCOINCIDENCIA", data.Coincidencia);

  return html;
};

const nombreUsuario = async (pUsuarioId) => {
  const usuario = await Usuario.findOne({
    attributes: {
      exclude: ["estadoId", "fechaHoraIngreso", "firmaUsuario"],
    },
    where: { usuarioId: pUsuarioId, estadoId: 1 },
  });

  return usuario.usuario;
};

const codigoVictima = async (pCodigoVictima) => {
  const victima = await Victima.findOne({
    where: { victimaId: pCodigoVictima, estadoId: 1 },
  });

  return victima.codigoVictima;
};

const nombreVictima = async (pCodigoVictima) => {
  const victima = await Victima.findOne({
    where: { victimaId: pCodigoVictima, estadoId: 1 },
  });

  return victima.nombreVictima;
};

const codigoOsamenta = async (pCodigoOsamenta) => {
  const osamenta = await Osamenta.findOne({
    where: { osamentaId: pCodigoOsamenta, estadoId: 1 },
  });

  return (
    "FAFG-" +
    osamenta.casoId +
    "-" +
    osamenta.fosaDet +
    "-" +
    osamenta.osamentaDet
  );
};

const correoUsuario = async (pUsuarioId) => {
  const usuario = await Usuario.findOne({
    attributes: {
      exclude: ["estadoId", "fechaHoraIngreso", "firmaUsuario"],
    },
    where: { usuarioId: pUsuarioId, estadoId: 1 },
  });

  return usuario.email;
};

const insert = async (req) => {
  const token = await generateToken();
  const cuerpo = await cadenaCorreo("CREACIÓN IDENTIFICADO SmIh", token);
  const valores = {
    operacion: "CREACIONIDENTIFICADOSMIH",
    valorToken: token,
    estadoId: 1,
    usuarioIngresoId: req.body.usuarioIngresoId,
  };
  const emailUser = await correoUsuario(req.body.usuarioIngresoId);
  const tokenIns = Token.create(valores);
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

  identificadoSmih = await IdentificadoSmih.create(req.body);
  const user = await nombreUsuario(identificadoSmih.usuarioIngresoId);
  const codVictima = await codigoVictima(identificadoSmih.victimaId);
  const codOsamenta = await codigoOsamenta(identificadoSmih.osamentaId);

  var dataConfirmacion = {
    Usuario: user,
    Victima: codVictima,
    Osamenta: codOsamenta,
    Coincidencia: identificadoSmih.coincidenciaId,
    pathReport: "../../PlantillasHtml/SmIh/CreaIdent.html",
  };
  const cuerpo = await cadenaCorreoDinamica(dataConfirmacion);
  email.sendMail(
    correocreacionIdent,
    "Creacion de Identificado Smih",
    null,
    cuerpo
  );
  return identificadoSmih;
};

const insertCoincidenciaArchivo = async (vals) => {
  return (archivo = await CoincidenciaDocumento.create(vals));
};

const updateCoincidenciaArchivo = async (key, id) => {
  return (archivo = await CoincidenciaDocumento.update(
    { estadoId: 3 },
    {
      where: {
        coincidenciaId: id,
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
        coincidenciaId: req.body.coincidenciaId,
        documentoId: req.body.documentoId,
        urlDocumento: bucket.Key,
        eTag: bucket.ETag,
        mimetype: req.file.mimetype,
        usuarioIngresoId: req.body.usuarioIngresoId,
        estadoId: 1,
      };
      return insertCoincidenciaArchivo(valores);
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
      return updateCoincidenciaArchivo(req.body.key, req.body.coincidenciaId);
    })
    .catch((err) => {
      throw error(err, 400);
    });
};

const getArchivo = async (req) => {
  console.log("entre");
  return controllerArchivo
    .doGetFile(req.query.key)
    .then((file) => {
      return file;
    })
    .catch((err) => {
      throw error(err, 400);
    });
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
  let genograma = CoincidenciaDocumento.findOne({
    where: { coincidenciaId: id, documentoId: 2, estadoId: 1 },
  });

  return genograma;
};

const getFotos = async (id, pDocumentoId) => {
  let fotosExhu = CoincidenciaDocumento.findAll({
    where: { coincidenciaId: id, documentoId: pDocumentoId, estadoId: 1 },
  });

  return fotosExhu;
};

const getReporte = async (req) => {
  var ident = await searchById(req);
  var fechaConf,
    contexto,
    grupoEtno,
    muniHecho,
    deptoHecho,
    diaHecho,
    mesHecho,
    anioHecho,
    muniExhu,
    deptoExhu,
    fechaExhu,
    sexo,
    trauma,
    apriori,
    posterior,
    edadPmIni,
    edadPmFin,
    tipoCaso,
    valEdadAm,
    catEdadAM,
    catEdadPm,
    resumenH = "";
  if (!ident.fechaConfirmacion) {
    fechaConf = "null";
  } else {
    fechaConf = moment(ident.fechaConfirmacion).format("DD/MM/YYYY");
  }
  if (!ident.Coincidencia.TipoContexto) {
    contexto = "null";
  } else {
    contexto = ident.Coincidencia.TipoContexto.descripcion;
  }
  if (!ident.GrupoEtnolinguistico) {
    grupoEtno = "null";
  } else {
    grupoEtno = ident.GrupoEtnolinguistico.descripcion;
  }
  if (!ident.Victima.MuniLugarHecho) {
    muniHecho = "null";
  } else {
    muniHecho = ident.Victima.MuniLugarHecho.descripcion;
  }
  if (!ident.Victima.DeptoLugarHecho) {
    deptoHecho = "null";
  } else {
    deptoHecho = ident.Victima.DeptoLugarHecho.descripcion;
  }
  if (!ident.Victima.diaHecho) {
    diaHecho = "XX";
  } else {
    diaHecho = ident.Victima.diaHecho;
  }
  if (!ident.Victima.mesHecho) {
    mesHecho = "XX";
  } else {
    mesHecho = ident.Victima.mesHecho;
  }
  if (!ident.Victima.anioHecho) {
    anioHecho = "XXXX";
  } else {
    anioHecho = ident.Victima.anioHecho;
  }
  if (!ident.Osamenta.MuniExhumacion) {
    muniExhu = "null";
  } else {
    muniExhu = ident.Osamenta.MuniExhumacion.descripcion;
  }
  if (!ident.Osamenta.DeptoExhumacion) {
    deptoExhu = "null";
  } else {
    deptoExhu = ident.Osamenta.DeptoExhumacion.descripcion;
  }
  if (!ident.Osamenta.fechaExhumacion) {
    fechaExhu = "null";
  } else {
    fechaExhu = moment(ident.Osamenta.fechaExhumacion).format("DD/MM/YYYY");
  }
  if (!ident.Sexo) {
    sexo = "null";
  } else {
    sexo = ident.Sexo.descripcion;
  }
  if (!ident.TraumaCirc) {
    trauma = "null";
  } else {
    trauma = ident.TraumaCirc.descripcion;
  }
  if (!ident.Coincidencia.apriori) {
    apriori = "null";
  } else {
    apriori = ident.Coincidencia.apriori;
  }
  if (!ident.ValorEdadAM) {
    catEdadAM = "null";
  } else {
    catEdadAM = ident.ValorEdadAM.descripcion;
  }
  if (!ident.ValorPM) {
    catEdadPm = "null";
  } else {
    catEdadPm = ident.ValorPM.descripcion;
  }
  if (!ident.edadAM) {
    valEdadAm = "null";
  } else {
    valEdadAm = ident.edadAM;
  }
  if (!ident.rangoMinimoPM) {
    edadPmIni = "null";
  } else {
    edadPmIni = ident.rangoMinimoPM + "-";
  }
  if (!ident.rangoMaximoPM) {
    edadPmFin = "null";
  } else {
    edadPmFin = ident.rangoMaximoPM;
  }
  if (!ident.Coincidencia.posterior) {
    posterior = "null";
  } else {
    posterior = ident.Coincidencia.posterior;
  }
  if (!ident.TipoCasoDid.descripcion) {
    tipoCaso = "null";
  } else {
    tipoCaso = ident.TipoCasoDid.descripcion;
  }
  if (!ident.resumenHecho) {
    resumenH = "null";
  } else {
    resumenH = ident.resumenHecho;
  }

  var htmlRep = "";
  var path = require("path");
  var pathA = path.join(
    __dirname,
    "../../PlantillasHtml/SmIh/ReporteIdent_SmIh.html"
  );
  htmlRep = getFileFromPath(pathA);

  let rutaGenograma = await getGenogramaRep(ident.Coincidencia.coincidenciaId);
  var htmlGeno = "";
  if (rutaGenograma) {
    const valGenograma = await getArchivoB64(rutaGenograma.urlDocumento);
    htmlGeno = `<tr><td><img src="data:image/png;base64,${valGenograma}" width="200" height="160"></td> </tr>`;
  } else {
    htmlGeno = `<tr><td>No posee Genograma</td> </tr>`;
  }
  let htmlExhumacion,
    valExhuma = "";
  let rutaFotosExh = await getFotos(ident.Coincidencia.coincidenciaId, 11);
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
  let rutaFotosExtend = await getFotos(ident.Coincidencia.coincidenciaId, 29);
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
  let rutaFotosTrauma = await getFotos(ident.Coincidencia.coincidenciaId, 28);
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
  let rutaFotosDent = await getFotos(ident.Coincidencia.coincidenciaId, 30);
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
  let rutaFotosRopa = await getFotos(ident.Coincidencia.coincidenciaId, 31);
  if (rutaFotosRopa.length > 0) {
    for (let index = 0; index < rutaFotosRopa.length; index++) {
      let ruta = rutaFotosRopa[index].urlDocumento;
      valRopa = await getArchivoB64(ruta);
      htmlRopa += `<tr><td><img src="data:image/png;base64,${valRopa}" width="200" height="160"></td></tr> `;
    }
  } else {
    htmlRopa = `<tr><td>No posee Fotos de Ropa</td> </tr>`;
  }

  var htmlFirmaIdent = `<img src="data:image/jpg;base64,${ident.Usuario.firmaUsuario.toString(
    "base64"
  )}" width="200" height="160">`;

  htmlRep = htmlRep.replace(
    "@IDENTIFICADOID",
    "FAFG-" + ident.identificadoSmihId
  );
  htmlRep = htmlRep.replace(
    "@OSAMENTA",
    "FAFG-" +
      ident.Osamenta.casoId +
      "-" +
      ident.Osamenta.fosaDet +
      "-" +
      ident.Osamenta.osamentaDet
  );
  //   //console.log(ident.ValorEdadAM.descripcion);
  //   //console.log(ident.edadAM);
  let edadPostMortem = edadPmIni + edadPmFin + " " + catEdadPm;
  let edadAnteMortem = valEdadAm + " " + catEdadAM;
  htmlRep = htmlRep.replace("@VICTIMAID", ident.Victima.codigoVictima);
  htmlRep = htmlRep.replace("@VICTIMANOMBRE", ident.Victima.nombreVictima);
  htmlRep = htmlRep.replace("@FECHACONFIRMACION", fechaConf);
  htmlRep = htmlRep.replace("@TIPOCASO", tipoCaso);
  htmlRep = htmlRep.replace("@CONTEXTO", contexto);
  htmlRep = htmlRep.replace("@EDAD", edadAnteMortem);
  htmlRep = htmlRep.replace("@EDADPOST", edadPostMortem);
  htmlRep = htmlRep.replace("@GRUPOETNOLINGUISTICO", grupoEtno);
  htmlRep = htmlRep.replace(
    "@LUGARHECHO",
    ident.Victima.lugarHechoAldea + ", " + muniHecho + ", " + deptoHecho
  );
  htmlRep = htmlRep.replace(
    "@FECHAHECHO",
    diaHecho + "/" + mesHecho + "/" + anioHecho
  );
  htmlRep = htmlRep.replace("@RESUMENHECHO", resumenH);
  htmlRep = htmlRep.replace(
    "@LUGAREXHUMACION",
    ident.Osamenta.exhumacionAldea + ", " + muniExhu + ", " + deptoExhu
  );
  htmlRep = htmlRep.replace("@FECHAEXHUMACION", fechaExhu);
  htmlRep = htmlRep.replace("@SEXOPOST", sexo);
  htmlRep = htmlRep.replace("@DENTICION", "");
  htmlRep = htmlRep.replace("@TRAUMAS", trauma);
  htmlRep = htmlRep.replace("@CAUSAMUERTE", tipoCaso);
  htmlRep = htmlRep.replace("@OBSERVACIONES", ident.observaciones);
  htmlRep = htmlRep.replace("@LRI", ident.Coincidencia.lr);
  htmlRep = htmlRep.replace("@PAP", apriori);
  htmlRep = htmlRep.replace("@PP", posterior);
  htmlRep = htmlRep.replace("@IMAGEGENO", htmlGeno);
  htmlRep = htmlRep.replace("@FOTOEXHUMACION", htmlExhumacion);
  htmlRep = htmlRep.replace("@FOTOEXTENDIDO", htmlExtendido);
  htmlRep = htmlRep.replace("@FOTOTRAUMA", htmlTrauma);
  htmlRep = htmlRep.replace("@FOTODENTICION", htmlDent);
  htmlRep = htmlRep.replace("@FOTOROPA", htmlRopa);
  htmlRep = htmlRep.replace("@FOTOROPA", htmlRopa);
  htmlRep = htmlRep.replace(
    "@FECHA",
    moment(ident.fechaHoraIngreso).format("DD/MM/YYYY")
  );
  htmlRep = htmlRep.replace("@FIRMA", htmlFirmaIdent);
  htmlRep = htmlRep.replace("@PERSONALDID", ident.Usuario.usuario);
  htmlRep = htmlRep.replace(
    "@PUESTO",
    ident.Usuario
      ? ident.Usuario.Puesto
        ? ident.Usuario.Puesto.descripcion
        : ""
      : ""
  );
  htmlRep = htmlRep.replace(/null/g, "");
  htmlRep = htmlRep.replace(/undefined/g, "");

  var options = config.optionsHtmlPdf;
  const pdfIdent = await pdf.create(htmlRep, options);
  //await pdfIdent.toFile("Ident.pdf");

  const stream = await pdfIdent.toBuffer();
  pdfIdent;
  var data = {
    AcceptRanges: "bytes",
    ContentType: "application/pdf",
    Body: stream,
  };

  return data;
};

const list = async (req) => {
  const filtro = req.query.filtro ? req.query.filtro : "";
  const pagina = req.query.pagina ? parseInt(req.query.pagina) : 0;
  const limite = req.query.limite ? parseInt(req.query.limite) : 10;

  return (identificadoSmihs = await IdentificadoSmih.findAndCountAll({
    offset: pagina * limite,
    limit: limite,
    include: [
      {
        model: Osamenta,
        as: "Osamenta",
        exclude: ["estadoId", "fechaHoraIngreso"],
      },
      {
        model: Victima,
        as: "Victima",
        exclude: ["estadoId", "fechaHoraIngreso"],
      },
      {
        model: Coincidencia,
        as: "Coincidencia",
        exclude: ["estadoId", "fechaHoraIngreso"],
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
        as: "TipoCasoDid",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: ValorEdad,
        as: "ValorEdadAM",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: ValorEdad,
        as: "ValorPM",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: TraumaCirc,
        as: "TraumaCirc",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: DatosOdont,
        as: "DatosOdont",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: RegionAnatomica,
        as: "RegionAnatomica",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: CausaMuerte,
        as: "CausaMuerte",
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
      `(identificadoSmihId like '%${filtro}%')` +
        ` or (osamentaFosa like '%${filtro}%')` +
        ` or (edadAM like '%${filtro}%')` +
        ` or (rangoMinimoPM like '%${filtro}%')` +
        ` or (rangoMaximoPM like '%${filtro}%')` +
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
        ` or (TipoCasoDid.descripcion like '%${filtro}%')` +
        ` or (TraumaCirc.descripcion like '%${filtro}%')` +
        ` or (RegionAnatomica.descripcion like '%${filtro}%')` +
        ` or (MuniDesap.descripcion like '%${filtro}%')` +
        ` or (DeptoDesap.descripcion like '%${filtro}%')`
    ),

    order: [["identificadoSmihId", "DESC"]],
  }));
};

const listArchivo = async (req) => {
  return (archivos = await CoincidenciaDocumento.findAll({
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
      coincidenciaId: req.params.coincidenciaId,
      estadoId: 1,
    },
  }));
};

const searchById = async (req) => {
  console.log("entre a este");
  const identificadoSmih = await IdentificadoSmih.findOne({
    include: [
      {
        model: Coincidencia,
        as: "Coincidencia",
        include: [
          {
            model: TipoContexto,
            as: "TipoContexto",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
        ],
      },
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
        as: "TipoCasoDid",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: ValorEdad,
        as: "ValorEdadAM",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: ValorEdad,
        as: "ValorPM",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: TraumaCirc,
        as: "TraumaCirc",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: DatosOdont,
        as: "DatosOdont",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: RegionAnatomica,
        as: "RegionAnatomica",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: CausaMuerte,
        as: "CausaMuerte",
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
    where: {
      identificadoSmihId: req.params.identificadoSmihId,
    },
  });
  if (!identificadoSmih) {
    throw error("No existe el Identificado SmIh", 400);
  } else {
    return identificadoSmih;
  }
};

const change = async (req) => {
  const identificadoSmihUpdate = await IdentificadoSmih.findOne({
    where: { identificadoSmihId: req.params.identificadoSmihId },
  });
  if (!identificadoSmihUpdate) {
    throw error("No existe el Identificado SmIh", 400);
  }
  const result = await IdentificadoSmih.update(req.body, {
    where: {
      identificadoSmihId: req.params.identificadoSmihId,
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
  insertArchivo,
  getArchivo,
  getReporte,
  list,
  listArchivo,
  searchById,
  change,
  confirmInsert,
  deleteArchivo,
};
