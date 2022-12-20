var sequelize = require("sequelize");
var {Op} = require("sequelize");
const pdf = require("html-pdf-chrome");
const controllerArchivo = require("../archivo/controller");
const {getFileFromPath} = require("../../functions/fileFunction");
var fs = require("stream");
const error = require("../../../utils/error");
const email = require("../mail/controller");
const config = require("../../../config");
const moment = require("moment");
const correocreacionCoincidencia = config.correos.creacionCoincidencia;

const {
  Coincidencia,
  Osamenta,
  Victima,
  BaseInfo,
  ProgramaIdent,
  EstadoCoincidencia,
  EstadoInvestigacion,
  CromosomaY,
  Estado,
  Usuario,
  TipoContexto,
  TipoCasoDid,
  DonanteCoincidencia,
  Donante,
  NotaLabGenetica,
  AnotacionCoincidencia,
  SolicitudSeguimiento,
  IdentificadoSmih,
  CalidadPerfil,
  Documento,
  RepoDoc,
  CoincidenciaDocumento,
  SexoAdn,
  Genero,
  Fio,
  GrupoEtnolinguistico,
  Persona,
  TraumaCirc,
  CausaMuerte,
  Puesto
} = require("../../../store/mysql");

const cadenaCorreo = async (pUsuario, pVictima, pOsamenta) => {
  var htmlCreacionCoin = "";
  var path = require("path");
  var pathA = path.join(
    __dirname,
    "../../PlantillasHtml/Coincidencia/TokenCreaCoin.html"
  );
  htmlCreacionCoin = getFileFromPath(pathA);
  htmlCreacionCoin = htmlCreacionCoin.replace("PUSUARIO", pUsuario);
  htmlCreacionCoin = htmlCreacionCoin.replace("POSAMENTA", pOsamenta);
  htmlCreacionCoin = htmlCreacionCoin.replace("PVICTIMA", pVictima);

  return htmlCreacionCoin;
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

const getUsuario = async (pUsuarioId) => {
  const usuario = await Usuario.findOne({
    attributes: {
      exclude: ["estadoId", "fechaHoraIngreso", "firmaUsuario", "password"]
    },
    where: {usuarioId: pUsuarioId, estadoId: 1}
  });

  return usuario;
};

const nombreUsuario = async (pUsuarioId) => {
  const usuario = await Usuario.findOne({
    attributes: {
      exclude: ["estadoId", "fechaHoraIngreso", "firmaUsuario"]
    },
    where: {usuarioId: pUsuarioId, estadoId: 1}
  });

  return usuario.usuario;
};

const codigoVictima = async (pCodigoVictima) => {
  const victima = await Victima.findOne({
    where: {victimaId: pCodigoVictima, estadoId: 1}
  });

  return victima.codigoVictima;
};

const nombreVictima = async (pCodigoVictima) => {
  const victima = await Victima.findOne({
    where: {victimaId: pCodigoVictima, estadoId: 1}
  });

  return victima.nombreVictima;
};

const codigoOsamenta = async (pCodigoOsamenta) => {
  const osamenta = await Osamenta.findOne({
    where: {osamentaId: pCodigoOsamenta, estadoId: 1}
  });

  return (
    "CRIH-" +
    osamenta.casoId +
    "-" +
    osamenta.fosaDet +
    "-" +
    osamenta.osamentaDet
  );
};

const insert = async (req) => {
  const coincidencia = await Coincidencia.create(req.body);
  const user = await nombreUsuario(coincidencia.usuarioIngresoId);
  const codVictima = await codigoVictima(coincidencia.victimaId);
  const codOsamenta = await codigoOsamenta(coincidencia.osamentaId);
  const nomVictima = await nombreVictima(coincidencia.victimaId);

  var dataConfirmacion = {
    Usuario: user,
    Victima: codVictima,
    Osamenta: codOsamenta,
    pathReport: "../../PlantillasHtml/Coincidencia/TokenCreaCoin.html"
  };
  const cuerpo = await cadenaCorreoDinamica(dataConfirmacion);
  email.sendMail(
    correocreacionCoincidencia,
    "Creacion de Coincidencia",
    null,
    cuerpo
  );
  var fioReq = {
    coincidenciaId: coincidencia.coincidenciaId,
    nombreVictima: nomVictima,
    codigoAM: codVictima,
    codigoPM: codOsamenta,
    estadoId: 1
  };
  const fio = await Fio.create(fioReq);

  return coincidencia;
};

const insertDonante = async (req) => {
  return (donante = await DonanteCoincidencia.create(req.body));
};

const insertNotaLab = async (req) => {
  return (notaLab = await NotaLabGenetica.create(req.body));
};

const insertAnotacion = async (req) => {
  return (anotacion = await AnotacionCoincidencia.create(req.body));
};

const insertSolSeg = async (req) => {
  var solicitud = await SolicitudSeguimiento.create(req.body);

  const coincidencia = await Coincidencia.findOne({
    attributes: ["coincidenciaId", "victimaId", "osamentaId", "responsableId"],
    where: {
      coincidenciaId: req.body.coincidenciaId
    }
  });

  const user = await nombreUsuario(solicitud.usuarioIngresoId);
  const userData = await getUsuario(solicitud.usuarioIngresoId);
  const userResponsable = await getUsuario(coincidencia.responsableId);
  const codVictima = await codigoVictima(coincidencia.victimaId);
  const codOsamenta = await codigoOsamenta(coincidencia.osamentaId);
  const nomVictima = await nombreVictima(coincidencia.victimaId);

  var dataConfirmacion = {
    Usuario: user,
    Victima: codVictima,
    Osamenta: codOsamenta,
    Coincidencia: coincidencia.coincidenciaId,
    pathReport:
      "../../PlantillasHtml/Coincidencia/SolicitudSeguimientoInbox.html"
  };

  let emailsRecipient = [];
  var correos = config.correos
    ? config.correos.creacionSolicitudSeguimiento
    : config.correos.default;
  emailsRecipient.push(correos);

  if (userData) {
    emailsRecipient.push(userData.email);
  }
  if (userResponsable) {
    emailsRecipient.push(userResponsable.email);
  }

  const cuerpo = await cadenaCorreoDinamica(dataConfirmacion);

  email.sendMail(
    emailsRecipient.join(";"),
    "Creacion de Solicitud de seguimiento",
    null,
    cuerpo
  );
  return solicitud;
};

const insertCoincidenciaArchivo = async (vals) => {
  return (archivo = await CoincidenciaDocumento.create(vals));
};

const updateCoincidenciaArchivo = async (key, id) => {
  return (archivo = await CoincidenciaDocumento.update(
    {estadoId: 3},
    {
      where: {
        coincidenciaId: id,
        urlDocumento: key
      }
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
          exclude: ["fechaHoraIngreso"]
        }
      }
    ],
    where: {
      documentoId: pDocumentoId,
      estadoId: 1
    }
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
        estadoId: 1
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

const flagIndentificado = async (req) => {
  identificado = await IdentificadoSmih.findOne({
    where: {coincidenciaId: req.params.coincidenciaId}
  });
  let flag = false;
  if (identificado) {
    flag = true;
  }
  return flag;
};
const listResponsables = async (req) => {
  return (coincidencias = await Usuario.findAndCountAll({
    attributes: [
      ["usuarioId", "responsableId"],
      ["usuario", "responsable"]
    ],
    where: {
      usuarioId: {
        [Op.in]: [8,9,12]
      }
    }
  }));
};

const list = async (req) => {
  const filtro = req.query.filtro ? req.query.filtro : "";
  const pagina = req.query.pagina ? parseInt(req.query.pagina) : 0;
  const limite = req.query.limite ? parseInt(req.query.limite) : 10;

  return (coincidencias = await Coincidencia.findAndCountAll({
    // where: {
    //   [Op.or]: [
    //     {"$Victima.codigoVictima$": {[Op.like]: `%${filtro}%`}},
    //     {},
    //     {"$Victima.nombreVictima$": {[Op.like]: `%${filtro}%`}},
    //     {"$Osamenta.casoId$": {[Op.like]: `%${filtro}%`}},
    //     {"$Osamenta.fosaDet$": {[Op.like]: `%${filtro}%`}},
    //     {"$Osamenta.osamentaDet$": {[Op.like]: `%${filtro}%`}},
    //     {"fechaCoincidencia": {[Op.like]: `%${filtro}%`}},
    //     {"apriori": {[Op.like]: `%${filtro}%`}},
    //     {"posterior": {[Op.like]: `%${filtro}%`}},
    //     {"fechaNotificacionDid": {[Op.like]: `%${filtro}%`}},
    //     {"fechaConfExc": {[Op.like]: `%${filtro}%`}},
    //     {"marcadoresStr": {[Op.like]: `%${filtro}%`}},
    //   ],
    // },
    where: sequelize.literal(
      `(Victima.codigoVictima like '%${filtro}%')` +
        ` or (Victima.nombreVictima like '%${filtro}%')` +
        ` or (Osamenta.casoId like '%${filtro}%')` +
        ` or (Osamenta.fosaDet like '%${filtro}%')` +
        ` or (Osamenta.osamentaDet like '%${filtro}%')` +
        ` or (concat('CRIH','-',Osamenta.casoId,'-',Osamenta.fosaDet,'-',Osamenta.osamentaDet) like '%${filtro}%')` +
        ` or (fechaCoincidencia like '%${filtro}%')` +
        ` or (apriori like '%${filtro}%')` +
        ` or (posterior like '%${filtro}%')` +
        ` or (fechaNotificacionDid like '%${filtro}%')` +
        ` or (fechaConfExc like '%${filtro}%')` +
        ` or (coincidencia.coincidenciaId like '%${filtro}%')` +
        ` or (marcadoresStr like '%${filtro}%')` +
        ` or (Responsable.usuario like '%${filtro}%')`
    ),

    distinct: "coincidenciaId",
    offset: pagina * limite,
    limit: limite,
    include: [
      {
        model: Victima,
        as: "Victima",
        attributes: ["codigoVictima", "nombreVictima"],
        required: true
      },
      {
        model: Usuario,
        as: "Responsable",
        attributes: ["usuarioId", "usuario"],
        required: true
      },
      {
        model: Usuario,
        as: "Usuario",
        attributes: ["usuarioId", "usuario"],
        required: true
      },
      {
        model: Osamenta,
        as: "Osamenta",
        attributes: ["casoId", "fosaDet", "osamentaDet"],
        required: true
      },
      {
        model: BaseInfo,
        as: "BaseInfo",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },

      {
        model: ProgramaIdent,
        as: "ProgramaIdent",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: EstadoCoincidencia,
        as: "EstadoCoincidencia",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: EstadoInvestigacion,
        as: "EstadoInvestigacion",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: CromosomaY,
        as: "CromosomaY",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: TipoContexto,
        as: "TipoContexto",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: TipoCasoDid,
        as: "TipoCasoDid",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: CalidadPerfil,
        as: "CalidadPerfil",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: Estado,
        as: "Estado",
        attributes: {
          exclude: ["fechaHoraIngreso"]
        }
      },
      {
        model: DonanteCoincidencia,
        as: "DonanteCoincidencia",
        attributes: ["donanteCoincidenciaId", "donanteId", "cantidadDonantes"],
        include: [
          {
            model: Donante,
            as: "Donante",
            attributes: ["descripcion"]
          }
        ],
        required: false
      }
    ],
    required: true,
    order: [["coincidenciaId", "DESC"]]
  }));
};

const listDonante = async (req) => {
  return (donantes = await DonanteCoincidencia.findAll({
    include: [
      {
        model: Donante,
        as: "Donante",
        attributes: ["descripcion"]
      },
      {
        model: Estado,
        as: "Estado",
        attributes: {
          exclude: ["fechaHoraIngreso"]
        }
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
            "firmaUsuario"
          ]
        }
      }
    ],
    where: {
      coincidenciaId: req.body.coincidenciaId,
      estadoId: 1
    }
  }));
};

const listNotaLab = async (req) => {
  return (notasLab = await NotaLabGenetica.findAll({
    include: [
      {
        model: Estado,
        as: "Estado",
        attributes: {
          exclude: ["fechaHoraIngreso"]
        }
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
            "firmaUsuario"
          ]
        }
      }
    ],
    where: {
      coincidenciaId: req.params.coincidenciaId,
      estadoId: 1
    }
  }));
};

const listAnotacion = async (req) => {
  return (anotaciones = await AnotacionCoincidencia.findAll({
    include: [
      {
        model: Estado,
        as: "Estado",
        attributes: {
          exclude: ["fechaHoraIngreso"]
        }
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
            "firmaUsuario"
          ]
        }
      }
    ],
    where: {
      coincidenciaId: req.params.coincidenciaId,
      estadoId: 1
    }
  }));
};

const listSolicitud = async (req) => {
  return (solicitudes = await SolicitudSeguimiento.findAll({
    include: [
      {
        model: Estado,
        as: "Estado",
        attributes: {
          exclude: ["fechaHoraIngreso"]
        }
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
            "firmaUsuario"
          ]
        }
      }
    ],
    where: {
      coincidenciaId: req.params.coincidenciaId,
      estadoId: 1
    }
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
              exclude: ["fechaHoraIngreso"]
            }
          }
        ],
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: Estado,
        as: "Estado",
        attributes: {
          exclude: ["fechaHoraIngreso"]
        }
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
            "firmaUsuario"
          ]
        }
      }
    ],
    where: {
      coincidenciaId: req.params.coincidenciaId,
      estadoId: 1
    }
  }));
};

const searchById = async (req) => {
  const coincidencia = await Coincidencia.findOne({
    include: [
      {
        model: Osamenta,
        as: "Osamenta"
      },
      {
        model: Victima,
        as: "Victima"
      },
      {
        model: DonanteCoincidencia,
        as: "DonanteCoincidencia",
        attributes: ["donanteCoincidenciaId", "donanteId", "cantidadDonantes"],
        include: [
          {
            model: Donante,
            as: "Donante",
            attributes: ["descripcion"]
          }
        ],
        required: false
      },
      {
        model: BaseInfo,
        as: "BaseInfo",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: ProgramaIdent,
        as: "ProgramaIdent",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: EstadoCoincidencia,
        as: "EstadoCoincidencia",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: EstadoInvestigacion,
        as: "EstadoInvestigacion",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: CromosomaY,
        as: "CromosomaY",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: TipoContexto,
        as: "TipoContexto",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: TipoCasoDid,
        as: "TipoCasoDid",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: CalidadPerfil,
        as: "CalidadPerfil",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: Estado,
        as: "Estado",
        attributes: {
          exclude: ["fechaHoraIngreso"]
        }
      },
      {
        model: Usuario,
        as: "Usuario",
        attributes: ["usuarioId", "usuario"]
      }
    ],
    where: {
      coincidenciaId: req.params.coincidenciaId
    }
  });
  if (!coincidencia) {
    throw error("No existe la Coincidencia", 400);
  } else {
    return coincidencia;
  }
};

const getDataFio = async (req) => {
  const fio = await Fio.findOne({
    distinct: "coincidenciaId",
    include: [
      {
        model: Coincidencia,
        as: "Coincidencia",
        include: [
          {
            model: Usuario,
            as: "Usuario",
            attributes: ["usuarioId", "usuario", "firmaUsuario"],
            include: [
              {
                model: Persona,
                as: "Persona"
              },
              {
                model: Puesto,
                as: "Puesto",
                attributes: ["descripcion"]
              }
            ]
          }
        ]
      },
      {
        model: Genero,
        as: "Genero"
      },
      {
        model: SexoAdn,
        as: "SexoAdn"
      },
      {
        model: TraumaCirc,
        as: "TraumaCircAM"
      },
      {
        model: TraumaCirc,
        as: "TraumaCircPM"
      },
      {
        model: CausaMuerte,
        as: "CausaMuerteAM"
      },
      {
        model: CausaMuerte,
        as: "CausaMuertePM"
      },
      {
        model: GrupoEtnolinguistico,
        as: "GrupoEtnolinguistico"
      },
      {
        model: Estado,
        as: "Estado",
        attributes: {
          exclude: ["fechaHoraIngreso"]
        }
      }
    ],
    where: {coincidenciaId: req.params.coincidenciaId}
  });
  if (!fio) {
    throw error("La coincidencia no contiene Fio", 400);
  }

  return fio;
};
const getDataReporte = async (req) => {
  const coincidencia = await Coincidencia.findOne({
    include: [
      {
        model: Osamenta,
        as: "Osamenta"
      },
      {
        model: Victima,
        as: "Victima"
      },
      {
        model: DonanteCoincidencia,
        as: "DonanteCoincidencia",
        attributes: ["donanteCoincidenciaId", "donanteId", "cantidadDonantes"],
        include: [
          {
            model: Donante,
            as: "Donante",
            attributes: ["descripcion"]
          }
        ],
        required: false
      },
      {
        model: BaseInfo,
        as: "BaseInfo",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: ProgramaIdent,
        as: "ProgramaIdent",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: EstadoCoincidencia,
        as: "EstadoCoincidencia",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: EstadoInvestigacion,
        as: "EstadoInvestigacion",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: CromosomaY,
        as: "CromosomaY",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: TipoContexto,
        as: "TipoContexto",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: TipoCasoDid,
        as: "TipoCasoDid",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: CalidadPerfil,
        as: "CalidadPerfil",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"]
        }
      },
      {
        model: Estado,
        as: "Estado",
        attributes: {
          exclude: ["fechaHoraIngreso"]
        }
      },
      {
        model: Usuario,
        as: "Usuario",
        attributes: ["usuarioId", "usuario", "firmaUsuario"],
        include: [
          {
            model: Puesto,
            as: "Puesto",
            attributes: ["descripcion"]
          }
        ]
      }
    ],
    where: {
      coincidenciaId: req.params.coincidenciaId
    }
  });
  if (!coincidencia) {
    throw error("No existe la Coincidencia", 400);
  } else {
    return coincidencia;
  }
};

const getReporte = async (req) => {
  var coi = await getDataReporte(req);
  let lr, pap, pp, bdCoi;
  if (!coi.lr) {
    lr = "null";
  } else {
    lr = coi.lr;
  }
  if (!coi.apriori) {
    pap = "null";
  } else {
    pap = coi.apriori;
  }
  if (!coi.posterior) {
    pp = "null";
  } else {
    pp = coi.posterior;
  }
  if (!coi.BaseInfo) {
    bdCoi = "null";
  } else {
    bdCoi = coi.BaseInfo.descripcion;
  }

  var htmlRep = "";
  var path = require("path");
  var pathA = path.join(
    __dirname,
    "../../PlantillasHtml/Coincidencia/ReporteCoincidencia.html"
  );
  htmlRep = getFileFromPath(pathA);
  let donante = coi.DonanteCoincidencia;
  let htmlDonante = "";
  donante.map(({Donante: {descripcion}, cantidadDonantes}) => {
    htmlDonante += ` <tr>
    <td>${descripcion}</td>
    <td>${cantidadDonantes}</td>
  </tr>`;
  });
  let notasLab = await listNotaLab(req);
  let htmlNotasLab = "";
  for (let index = 0; index < notasLab.length; index++) {
    let usuario = notasLab[index].Usuario.usuario;
    let descripcion = notasLab[index].descripcion;
    let fechaHoraIngreso = notasLab[index].fechaHoraIngreso;
    htmlNotasLab += ` <tr>
    <td>${usuario}</td>
    <td>${descripcion}</td>
    <td>${moment(fechaHoraIngreso).format("DD/MM/YYYY")}</td>
  </tr>`;
  }

  let anotDid = await listAnotacion(req);
  let htmlAnotDid = "";
  for (let index = 0; index < anotDid.length; index++) {
    let usuario = anotDid[index].Usuario.usuario;
    let descripcion = anotDid[index].descripcion;
    let fechaHoraIngreso = anotDid[index].fechaHoraIngreso;
    htmlAnotDid += ` <tr>
    <td>${usuario}</td>
    <td>${descripcion}</td>
    <td>${moment(fechaHoraIngreso).format("DD/MM/YYYY")}</td>
  </tr>`;
  }

  let soliSeg = await listSolicitud(req);
  let htmlSoliSeg = "";
  for (let index = 0; index < soliSeg.length; index++) {
    let usuario = soliSeg[index].Usuario.usuario;
    let descripcion = soliSeg[index].descripcion;
    let fechaHoraIngreso = soliSeg[index].fechaHoraIngreso;
    htmlSoliSeg += ` <tr>
    <td>${usuario}</td>
    <td>${descripcion}</td>
    <td>${moment(fechaHoraIngreso).format("DD/MM/YYYY")}</td>
  </tr>`;
  }

  var htmlFirmaCoin = `<img src="data:image/jpg;base64,${coi.Usuario.firmaUsuario.toString(
    "base64"
  )}" width="200" height="160">`;

  htmlRep = htmlRep.replace(
    "@COINCIDENCIAID",
    coi.coincidenciaId.toString().padStart(6, "0")
  );
  htmlRep = htmlRep.replace(
    "@OSAMENTA",
    "CRIH-" +
      coi.Osamenta.casoId +
      "-" +
      coi.Osamenta.fosaDet +
      "-" +
      coi.Osamenta.osamentaDet
  );
  htmlRep = htmlRep.replace("@VICTIMAID", coi.Victima.codigoVictima);
  htmlRep = htmlRep.replace("@VICTIMANOMBRE", coi.Victima.nombreVictima);
  htmlRep = htmlRep.replace(
    "@FECHACOINCIDENCIA",
    moment(coi.fechaCoincidencia).format("DD/MM/YYYY")
  );
  htmlRep = htmlRep.replace(
    "@ESTADOCOINCIDENCIA",
    coi.EstadoCoincidencia.descripcion
  );
  htmlRep = htmlRep.replace("@LR", lr);
  htmlRep = htmlRep.replace("@PAP", pap);
  htmlRep = htmlRep.replace("@PP", pp);
  htmlRep = htmlRep.replace("@BASEDEDATOS", bdCoi);
  htmlRep = htmlRep.replace("@DONANTES", htmlDonante);
  htmlRep = htmlRep.replace("@NOTASLAB", htmlNotasLab);
  htmlRep = htmlRep.replace("@ANOTACIONESDID", htmlAnotDid);
  htmlRep = htmlRep.replace("@SOLICITUDESSEGUIMIENTO", htmlSoliSeg);
  htmlRep = htmlRep.replace(
    "@FECHA",
    moment(coi.fechaCoincidencia).format("DD/MM/YYYY")
  );
  htmlRep = htmlRep.replace("@FIRMA", htmlFirmaCoin);
  htmlRep = htmlRep.replace("@PERSONALDID", coi.Usuario.usuario);
  htmlRep = htmlRep.replace(
    "@PUESTO",
    coi.Usuario
      ? coi.Usuario.Puesto
        ? coi.Usuario.Puesto.descripcion
        : ""
      : ""
  );
  htmlRep = htmlRep.replace(/null/g, "");
  var port = config.optionsHtmlPdf;
  const pdfIdent = await pdf.create(htmlRep, port);
  //await pdfIdent.toFile("COI.pdf");

  const stream = await pdfIdent.toBuffer();

  var data = {
    AcceptRanges: "bytes",
    ContentType: "application/pdf",
    Body: stream
  };

  return data;
};

const getFioPDF = async (req) => {
  var fio = await getDataFio(req);
  console.log('aca  ')
  var grupoEt, genero, sexo, traumaAm, traumaPM, cauMueAM, cauMuePM;
  if (!fio.GrupoEtnolinguistico) {
    grupoEt = "null";
  } else {
    grupoEt = fio.GrupoEtnolinguistico.descripcion;
  }
  if (!fio.Genero) {
    genero = "null";
  } else {
    genero = fio.Genero.descripcion;
  }

  if (!fio.SexoAdn) {
    sexo = "null";
  } else {
    sexo = fio.SexoAdn.descripcion;
  }
  if (!fio.traumaCircAM) {
    traumaAm = "null";
  } else {
    traumaAm = fio.TraumaCircAM.descripcion;
  }
  if (!fio.traumaCircPM) {
    traumaPM = "null";
  } else {
    traumaPM = fio.TraumaCircPM.descripcion;
  }

  if (!fio.CausaMuerteAM) {
    cauMueAM = "null";
  } else {
    cauMueAM = fio.CausaMuerteAM.descripcion;
  }
  if (!fio.CausaMuertePM) {
    cauMuePM = "null";
  } else {
    cauMuePM = fio.CausaMuertePM.descripcion;
  }
 
  var htmlFirma = `<img src="data:image/jpg;base64,${fio.Coincidencia.Usuario.firmaUsuario.toString(
    "base64"
  )}" width="200" height="160">`;
  var htmlFio = "";
  var path = require("path");
  var pathA = path.join(
    __dirname,
    "../../PlantillasHtml/Coincidencia/ReporteFio.html"
  );
  console.log("paso aca");
  htmlFio = getFileFromPath(pathA);
  htmlFio = htmlFio.replace("@nombrevictima", fio.nombreVictima);
  htmlFio = htmlFio.replace("@AM", fio.codigoAM);
  htmlFio = htmlFio.replace("@PM", fio.codigoPM);
  htmlFio = htmlFio.replace("@SEXO1", genero);
  htmlFio = htmlFio.replace("@SEXO2", sexo);
  htmlFio = htmlFio.replace("@EDAD1_1", fio.edadAM);
  htmlFio = htmlFio.replace("@EDAD2", fio.edadPM);
  htmlFio = htmlFio.replace("@ESTATURA1_1", fio.estaturaAM);
  htmlFio = htmlFio.replace("@ESTATURA2", fio.estaturaPM);
  htmlFio = htmlFio.replace("@TRAUMA1", fio.traumaAntAM);
  htmlFio = htmlFio.replace("@TRAUMA2", fio.traumaAntPM);
  htmlFio = htmlFio.replace("@ENFERPATO1_1", fio.enfermedadAM);
  htmlFio = htmlFio.replace("@ENFERPATO2", fio.enfermedadPM);
  htmlFio = htmlFio.replace("@DENTICION1_1", fio.denticionAM);
  htmlFio = htmlFio.replace("@DENTICION2", fio.denticionPM);
  htmlFio = htmlFio.replace("@TRAUMACIRC1", traumaAm);
  htmlFio = htmlFio.replace("@TRAUMACIRC2", traumaPM);
  htmlFio = htmlFio.replace("@CAUSAMUERTE1", cauMueAM);
  htmlFio = htmlFio.replace("@CAUSAMUERTE2", cauMuePM);
  htmlFio = htmlFio.replace("@FORMAENTERRA1", fio.formaEntierroAM);
  htmlFio = htmlFio.replace("@FORMAENTERRA2", fio.formaEntierroPM);
  htmlFio = htmlFio.replace("@ELEMENTOSIDIV1", fio.elementosIndividAM);
  htmlFio = htmlFio.replace("@ELEMENTOSIDIV2", fio.elementosIndividPM);
  htmlFio = htmlFio.replace("@ADN1", fio.adnAM);
  htmlFio = htmlFio.replace("@ADN2", fio.adnPM);
  htmlFio = htmlFio.replace("@NOMBREPARENENTRE1", fio.nombreEntrevistado);
  htmlFio = htmlFio.replace("@NOMBREPARENENTRE2", fio.nombreReconocio);
  htmlFio = htmlFio.replace("@COINCIDENCIA1", fio.coincidencia);
  htmlFio = htmlFio.replace("@COINCIDENCIA2", fio.reconocimientoCampo);
  htmlFio = htmlFio.replace("@COINCIDENCIA3", fio.coincidenciaADN);
  htmlFio = htmlFio.replace("@IDENTIFINAL", fio.identificacionFinal);
  htmlFio = htmlFio.replace("@LRI", fio.indiceFiliacion);
  htmlFio = htmlFio.replace("@PRIORI", fio.apriori);
  htmlFio = htmlFio.replace("@POSTERIOR", fio.posterior);
  htmlFio = htmlFio.replace("@GRUPOETNOLINGUISTICO", grupoEt);
  htmlFio = htmlFio.replace(
    "@FECHALUGAREVENTO",
    fio.fechaEvento + " " + fio.lugarEvento
  );
  htmlFio = htmlFio.replace("@FECHAEXHUMACION", fio.fechaExhumacion);
  htmlFio = htmlFio.replace("@FECHAANALISIS", fio.fechaAnalisis);
  htmlFio = htmlFio.replace("@FECHACOINCIDENCIA", fio.fechaCoincidencia);
  htmlFio = htmlFio.replace("@FECHACONFIRMACION", fio.fechaConfirmacion);
  htmlFio = htmlFio.replace("@OBSERVACIONES", fio.observaciones);
  htmlFio = htmlFio.replace("@CONTEXTOIDENT", fio.contextoIdentificacion);
  htmlFio = htmlFio.replace("@TIPOEVENTO", fio.tipoEvento);
  htmlFio = htmlFio.replace("@FECHA", fio.fechaFio);
  htmlFio = htmlFio.replace(
    "@PUESTO",
    fio.Coincidencia
      ? fio.Coincidencia.Usuario
        ? fio.Coincidencia.Usuario.Puesto
          ? fio.Coincidencia.Usuario.Puesto.descripcion
          : ""
        : ""
      : ""
  );
  htmlFio = htmlFio.replace(
    "@PERSONALDID",
    fio.Coincidencia.Usuario.Persona.nombre1 +
      " " +
      fio.Coincidencia.Usuario.Persona.apellido1
  );
  htmlFio = htmlFio.replace("@FIRMA", htmlFirma);
  htmlFio = htmlFio.replace(/null/g, "");

  var options = config.optionsHtmlPdf;
  const pdfFio = await pdf.create(htmlFio, options);
  await pdfFio.toFile("FIO.pdf");

  const stream = await pdfFio.toBuffer();
  var data = {
    AcceptRanges: "bytes",
    ContentType: "application/pdf",
    Body: stream
  };

  return data;
};

const change = async (req) => {
  const coincidenciaUpdate = await Coincidencia.findOne({
    where: {coincidenciaId: req.params.coincidenciaId}
  });

  if (!coincidenciaUpdate) {
    throw error("No existe la Coincidencia", 400);
  }
  const result = await Coincidencia.update(req.body, {
    where: {
      coincidenciaId: req.params.coincidenciaId
    }
  });
  if (result > 0) {
    return "Cambio realizado con exito";
  } else {
    return "Los datos ingresados son iguales";
  }
};

const changeFio = async (req) => {
  const donanteUpdate = await Fio.findOne({
    where: {coincidenciaId: req.params.coincidenciaId}
  });
  if (!donanteUpdate) {
    throw error("No Existe Fio para esta coincidencia", 400);
  }
  const result = await Fio.update(req.body, {
    where: {
      coincidenciaId: req.params.coincidenciaId
    }
  });
  if (result > 0) {
    return "Fio guardado con exito";
  } else {
    return "No realizo ningun cambio en el FIO";
  }
};

const changeDonante = async (req) => {
  const donanteUpdate = await DonanteCoincidencia.findOne({
    where: {donanteCoincidenciaId: req.params.donanteCoincidenciaId}
  });
  if (!donanteUpdate) {
    throw error("No existe el donante", 400);
  }
  const result = await DonanteCoincidencia.update(req.body, {
    where: {
      donanteCoincidenciaId: req.params.donanteCoincidenciaId
    }
  });
  if (result > 0) {
    return "Cambio realizado con exito";
  } else {
    return "Los datos ingresados son iguales";
  }
};

const changeNotaLab = async (req) => {
  const notaLabUpdate = await NotaLabGenetica.findOne({
    where: {notaLabGeneticaId: req.params.notaLabGeneticaId}
  });
  if (!notaLabUpdate) {
    throw error("No existe la nota del laboratorio", 400);
  }
  const result = await NotaLabGenetica.update(req.body, {
    where: {
      notaLabGeneticaId: req.params.notaLabGeneticaId
    }
  });
  if (result > 0) {
    return "Cambio realizado con exito";
  } else {
    return "Los datos ingresados son iguales";
  }
};

const changeAnotacion = async (req) => {
  const anotacionUpdate = await AnotacionCoincidencia.findOne({
    where: {anotacionCoincidenciaId: req.params.anotacionCoincidenciaId}
  });
  if (!anotacionUpdate) {
    throw error("No existe la anotacion", 400);
  }
  const result = await AnotacionCoincidencia.update(req.body, {
    where: {
      anotacionCoincidenciaId: req.params.anotacionCoincidenciaId
    }
  });
  if (result > 0) {
    return "Cambio realizado con exito";
  } else {
    return "Los datos ingresados son iguales";
  }
};

const changeSolicitud = async (req) => {
  const solicitudUpdate = await SolicitudSeguimiento.findOne({
    where: {solicitudSeguimientoId: req.params.solicitudSeguimientoId}
  });
  if (!solicitudUpdate) {
    throw error("No existe la solicitud de seguimiento", 400);
  }
  const result = await SolicitudSeguimiento.update(req.body, {
    where: {
      solicitudSeguimientoId: req.params.solicitudSeguimientoId
    }
  });
  if (result > 0) {
    return "Cambio realizado con exito";
  } else {
    return "Los datos ingresados son iguales";
  }
};

module.exports = {
  insert,
  insertDonante,
  insertNotaLab,
  insertAnotacion,
  insertSolSeg,
  insertArchivo,
  getArchivo,
  getDataFio,
  getFioPDF,
  getReporte,
  flagIndentificado,
  list,
  listDonante,
  listNotaLab,
  listAnotacion,
  listSolicitud,
  listArchivo,
  searchById,
  change,
  changeDonante,
  changeNotaLab,
  changeAnotacion,
  changeSolicitud,
  changeFio,
  deleteArchivo,
  listResponsables
};
