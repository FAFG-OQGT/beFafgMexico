var sequelize = require("sequelize");
const {Op, DataTypes} = require("sequelize");
const error = require("../../../utils/error");
const {
  Estado,
  Departamento,
  Pais,
  Municipio,
  Genero,
  EstadoCivil,
  Rol,
  Acceso,
  TipoDocumento,
  TipoSangre,
  BaseInfo,
  CromosomaY,
  Donante,
  EstadoCoincidencia,
  EstadoInvestigacion,
  ProgramaIdent,
  SexoAdn,
  TipoCasoDid,
  TipoContexto,
  TraumaCirc,
  GrupoEtario,
  GrupoEtnolinguistico,
  RegionAnatomica,
  CausaMuerte,
  ValorEdad,
  DatosOdont,
  TipoIdent,
  CalidadPerfil,
  Documento,
  RepoDoc,
  Puesto,
  Usuario,
} = require("../../../store/mysql");

const list = async (req) => {
  const tabla = req.params.catalogo;
  const valor = req.query.valor ? parseInt(req.query.valor) : 1;
  switch (tabla) {
    case "estado":
      return (valores = await Estado.findAll({
        attributes: {exclude: ["fechaHoraIngreso"]},
      }));
    case "pais":
      return (valores = await Pais.findAll({
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "nacionalidad"],
        },
      }));
    case "departamento":
      return (valores = await Departamento.findAll({
        attributes: {exclude: ["estadoId", "paisId", "fechaHoraIngreso"]},
      }));
    case "municipioDepa":
      return (valores = await Municipio.findAll({
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },

        where: sequelize.literal(`cat_municipio.departamentoId = ${valor}`),
      }));
    case "municipio":
      return (valores = await Municipio.findAll({
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      }));
    case "genero":
      return (valores = await Genero.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "puesto":
      return (valores = await Puesto.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "estadoCivil":
      return (valores = await EstadoCivil.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "rol":
      return (valores = await Rol.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
        where: {aplicativoId: 1},
      }));
    case "acceso":
      return (valores = await Acceso.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "tipoDocumento":
      return (valores = await TipoDocumento.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "tipoSangre":
      return (valores = await TipoSangre.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "baseInfo":
      return (valores = await BaseInfo.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "cromosomaY":
      return (valores = await CromosomaY.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "donante":
      return (valores = await Donante.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "estadoCoincidencia":
      return (valores = await EstadoCoincidencia.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "estadoInvestigacion":
      return (valores = await EstadoInvestigacion.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "programaIdent":
      return (valores = await ProgramaIdent.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "sexoAdn":
      return (valores = await SexoAdn.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "tipoCasoDid":
      return (valores = await TipoCasoDid.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "tipoContexto":
      return (valores = await TipoContexto.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "traumaCirc":
      return (valores = await TraumaCirc.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "grupoEtario":
      return (valores = await GrupoEtario.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "grupoEtnolinguistico":
      return (valores = await GrupoEtnolinguistico.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "regionAnatomica":
      return (valores = await RegionAnatomica.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "causaMuerte":
      return (valores = await CausaMuerte.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "valorEdad":
      return (valores = await ValorEdad.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "datosOdont":
      return (valores = await DatosOdont.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "tipoIdent":
      return (valores = await TipoIdent.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "calidadPerfil":
      return (valores = await CalidadPerfil.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "documentoCoincidencia":
      return (valores = await Documento.findAll({
        where: {
          documentoId: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 18, 19, 27, 28, 29,
            30, 31,
          ],
        },
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "documentoIdentificadoOst":
      return (valores = await Documento.findAll({
        where: {
          documentoId: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16, 17, 18, 20, 21, 22, 23,
            24, 25, 26, 27, 28, 29, 30, 31, 32,
          ],
        },
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "documentoIdentificadoSmih":
      return (valores = await Documento.findAll({
        where: {
          documentoId: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
          ],
        },
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "documentosGeneral":
      return (valores = await Documento.findAll({
        include: {
          model: RepoDoc,
          as: "RepoDoc",
          where: {
            aplicativoId: {
              [Op.eq]: 0,
            },
          },
          attributes: {
            exclude: [
              "aplicativoId",
              "repoDocId",
              "estadoId",
              "fechaHoraIngreso",
            ],
          },
        },
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
      }));
    case "repoDoc":
      return (valores = await RepoDoc.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
        where: {aplicativoId: 1},
      }));
    case "repoDocGeneral":
      return (valores = await RepoDoc.findAll({
        attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
        where: {aplicativoId: 0},
      }));
    case "responsablesSOD":
      return (valores = await Usuario.findAll({
        attributes: [
          ["usuarioId", "responsableId"],
          ["usuario", "responsable"],
        ],
        where: {
          usuarioId: {
            [Op.in]: [8, 9, 12],
          },
        },
      }));
    default:
      throw error("No existe el catalogo", 400);
  }
};

module.exports = {
  list,
};
