var sequelize = require("sequelize");
const error = require("../../../utils/error");
const {
  Coincidencia,
  Osamenta,
  Victima,
  DonanteCoincidencia,
  BaseInfo,
  ProgramaIdent,
  EstadoCoincidencia,
  EstadoInvestigacion,
  CromosomaY,
  TipoContexto,
  TipoCasoDid,
  Estado,
  Usuario,
  Donante,
  TipoIdent,
  Genero,
  GrupoEtario,
  GrupoEtnolinguistico,
  ValorEdad,
  TraumaCirc,
  DatosOdont,
  RegionAnatomica,
  SexoAdn,
  IdentificadoSmih,
  IdentificadoOst,
  Municipio,
  Departamento,
  CalidadPerfil,
  TipoDocumento,
  CausaMuerte,
} = require("../../../store/mysql");
const cat_sexo_adn = require("../../../store/models/cat_sexo_adn");

const repIdentificadoSmih = async (req) => {
  const pagina = req.body.pagina ? parseInt(req.body.pagina) : 0;
  const limite = req.body.limite ? parseInt(req.body.limite) : 10;
  var identificados = await IdentificadoSmih.findAndCountAll({
    offset: pagina * limite,
    limit: limite,
    include: [
      {
        model: Coincidencia,
        as: "Coincidencia",
        include: [
          {
            model: BaseInfo,
            as: "BaseInfo",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
          {
            model: ProgramaIdent,
            as: "ProgramaIdent",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
          {
            model: EstadoCoincidencia,
            as: "EstadoCoincidencia",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
          {
            model: EstadoInvestigacion,
            as: "EstadoInvestigacion",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
          {
            model: CromosomaY,
            as: "CromosomaY",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
          {
            model: TipoContexto,
            as: "TipoContexto",
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
            model: CalidadPerfil,
            as: "CalidadPerfil",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
        ],
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
        where: sequelize.literal(
          ` IFNULL(Coincidencia.fechaCoincidencia, '') >= IF(${req.body.fechaCoincidenciaIni} is null,IFNULL(Coincidencia.fechaCoincidencia, ''),${req.body.fechaCoincidenciaIni})` +
            ` AND IFNULL(Coincidencia.fechaCoincidencia, '') <= IF(${req.body.fechaCoincidenciaFin} is null,IFNULL(Coincidencia.fechaCoincidencia, ''),${req.body.fechaCoincidenciaFin})` +
            ` AND IFNULL(Coincidencia.lr,-2) like IF('${req.body.lr}' = '',IFNULL(Coincidencia.lr,-2), '%${req.body.lr}%')` +
            ` AND IFNULL(Coincidencia.posterior, '') like IF('${req.body.posterior}' = '',IFNULL(Coincidencia.posterior, ''), '%${req.body.posterior}%')`
        ),
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
              exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
            },
          },
          {
            model: SexoAdn,
            as: "SexoAdn",
            attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
          },
        ],
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
        where: sequelize.literal(
          `IFNULL(concat('FAFG-',casoId,'-',fosaDet,'-',osamentaDet),-2) like IF('${req.body.osamenta}' = '',IFNULL(concat('FAFG-',casoId,'-',fosaDet,'-',osamentaDet),-2), '%${req.body.osamenta}%')` +
            `AND IFNULL(concat('FAFG-',casoId,'-',fosaDet),-2) like IF('${req.body.fosa}' = '',IFNULL(concat('FAFG-',casoId,'-',fosaDet),-2), '%${req.body.fosa}%')` +
            `AND IFNULL(Osamenta.exhumacionAldea, '') like IF('${req.body.exhumacionAldea}' = '',IFNULL(Osamenta.exhumacionAldea, ''), '%${req.body.exhumacionAldea}%')` +
            ` AND IFNULL(Osamenta.exhumacionMuniId, -1) = IF(${req.body.exhumacionMuniId} = -1,IFNULL(Osamenta.exhumacionMuniId, -1),${req.body.exhumacionMuniId})` +
            ` AND IFNULL(Osamenta.exhumacionDeptoId, -1) = IF(${req.body.exhumacionDeptoId} = -1,IFNULL(Osamenta.exhumacionDeptoId, -1),${req.body.exhumacionDeptoId})` +
            ` AND IFNULL(Osamenta.fechaExhumacion, '') >= IF(${req.body.fechaExhumacionIni} is null,IFNULL(Osamenta.fechaExhumacion, ''),${req.body.fechaExhumacionIni})` +
            ` AND IFNULL(Osamenta.fechaExhumacion, '') <= IF(${req.body.fechaExhumacionFin} is null,IFNULL(Osamenta.fechaExhumacion, ''),${req.body.fechaExhumacionFin})` +
            `AND  IFNULL(Osamenta.coordenadasExhumacion, '') like IF('${req.body.coordenadasExhumacion}' = '',IFNULL(Osamenta.coordenadasExhumacion, ''), '%${req.body.coordenadasExhumacion}%')`
        ),
      },
      {
        model: Victima,
        as: "Victima",
        include: [
          {
            model: Municipio,
            as: "MuniResidencia",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso", "departamentoId"],
            },
          },
          {
            model: Departamento,
            as: "DeptoResidencia",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
            },
          },
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
              exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
            },
          },

          {
            model: TipoDocumento,
            as: "TipoDocumento",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
        ],
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
        where: sequelize.literal(
          `Victima.codigoVictima like IF('${req.body.codigoVictima}' = '',Victima.codigoVictima, '%${req.body.codigoVictima}%')` +
            `AND Victima.nombreVictima like IF('${req.body.nombreVictima}' = '',Victima.nombreVictima, '%${req.body.nombreVictima}%')` +
            `AND IFNULL(Victima.residenciaAldea, '') like IF('${req.body.residenciaAldea}' = '',IFNULL(Victima.residenciaAldea, ''), '%${req.body.residenciaAldea}%')` +
            ` AND IFNULL(Victima.residenciaDeptoId, -1) = IF(${req.body.residenciaDeptoId} = -1,IFNULL(Victima.residenciaDeptoId, -1),${req.body.residenciaDeptoId})` +
            ` AND IFNULL(Victima.residenciaMuniId, -1) = IF(${req.body.residenciaMuniId} = -1,IFNULL(Victima.residenciaMuniId, -1),${req.body.residenciaMuniId})`
        ),
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
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: Departamento,
        as: "DeptoDesap",
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
        model: TipoCasoDid,
        as: "TipoCasoDid",
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
        attributes: ["usuarioId", "usuario"],
      },
    ],
    where: sequelize.literal(
      ` identificado_smih.identificadoSmihId = IF(${req.body.identificadoSmihId} = -1,identificado_smih.identificadoSmihId,${req.body.identificadoSmihId})` +
        ` AND IFNULL(identificado_smih.sexoId, -1) = IF(${req.body.sexoId} = -1,IFNULL(identificado_smih.sexoId, -1),${req.body.sexoId})` +
        ` AND IFNULL(identificado_smih.grupoEtarioId, -1) = IF(${req.body.grupoEtarioId} = -1,IFNULL(identificado_smih.grupoEtarioId, -1),${req.body.grupoEtarioId})` +
        ` AND IFNULL(identificado_smih.grupoEtnolinguisticoId, -1) = IF(${req.body.grupoEtnolinguisticoId} = -1,IFNULL(identificado_smih.grupoEtnolinguisticoId, -1),${req.body.grupoEtnolinguisticoId})` +
        ` AND IFNULL(identificado_smih.entregado, -1) = IF(${req.body.entregado} = -1,IFNULL(identificado_smih.entregado, -1),${req.body.entregado})` +
        ` AND IFNULL(identificado_smih.tipoCasoDidId, -1) = IF(${req.body.tipoCasoDidId} = -1,IFNULL(identificado_smih.tipoCasoDidId, -1),${req.body.tipoCasoDidId})` +
        ` AND IFNULL(identificado_smih.edadAM, -1) >= IF(${req.body.edadAMIni} = -1,IFNULL(identificado_smih.edadAM, -1),${req.body.edadAMIni})` +
        ` AND IFNULL(identificado_smih.edadAM, -1) <= IF(${req.body.edadAMFin} = -1,IFNULL(identificado_smih.edadAM, -1),${req.body.edadAMFin})` +
        ` AND IFNULL(identificado_smih.valorEdadAM, -1) = IF(${req.body.valorEdadAM} = -1,IFNULL(identificado_smih.valorEdadAM, -1),${req.body.valorEdadAM})` +
        ` AND IFNULL(identificado_smih.rangoMinimoPM, -1) >= IF(${req.body.rangoMinimoPM} = -1,IFNULL(identificado_smih.rangoMinimoPM, -1),${req.body.rangoMinimoPM})` +
        ` AND IFNULL(identificado_smih.rangoMaximoPM, -1) <= IF(${req.body.rangoMaximoPM} = -1,IFNULL(identificado_smih.rangoMaximoPM, -1),${req.body.rangoMaximoPM})` +
        ` AND IFNULL(identificado_smih.valorEdadPM, -1) = IF(${req.body.valorEdadPM} = -1,IFNULL(identificado_smih.valorEdadPM, -1),${req.body.valorEdadPM})` +
        ` AND IFNULL(identificado_smih.traumaCircId, -1) = IF(${req.body.traumaCircId} = -1,IFNULL(identificado_smih.traumaCircId, -1),${req.body.traumaCircId})` +
        ` AND IFNULL(identificado_smih.datosOdontId, -1) = IF(${req.body.datosOdontId} = -1,IFNULL(identificado_smih.datosOdontId, -1),${req.body.datosOdontId})` +
        ` AND IFNULL(identificado_smih.regionAnatomicaId, -1) = IF(${req.body.regionAnatomicaId} = -1,IFNULL(identificado_smih.regionAnatomicaId, -1),${req.body.regionAnatomicaId})` +
        ` AND IFNULL(identificado_smih.causaMuerteId, -1) = IF(${req.body.causaMuerteId} = -1,IFNULL(identificado_smih.causaMuerteId, -1),${req.body.causaMuerteId})` +
        ` AND IFNULL(identificado_smih.desaparicionAldea, '') like IF('${req.body.desaparicionAldea}' = '',IFNULL(identificado_smih.desaparicionAldea, ''), '%${req.body.desaparicionAldea}%')` +
        ` AND IFNULL(identificado_smih.desaparicionMuniId, -1) = IF(${req.body.desaparicionMuniId} = -1,IFNULL(identificado_smih.desaparicionMuniId, -1),${req.body.desaparicionMuniId})` +
        ` AND IFNULL(identificado_smih.desaparicionDeptoId, -1)= IF(${req.body.desaparicionDeptoId} = -1,IFNULL(identificado_smih.desaparicionDeptoId, -1),${req.body.desaparicionDeptoId})` +
        ` AND IFNULL(identificado_smih.desaparicionDia, -1) = IF(${req.body.desaparicionDia} = -1,IFNULL(identificado_smih.desaparicionDia, -1),${req.body.desaparicionDia})` +
        ` AND IFNULL(identificado_smih.desaparicionMes, -1) = IF(${req.body.desaparicionMes} = -1,IFNULL(identificado_smih.desaparicionMes, -1),${req.body.desaparicionMes})` +
        ` AND IFNULL(identificado_smih.desaparicionAnio, -1) = IF(${req.body.desaparicionAnio} = -1,IFNULL(identificado_smih.desaparicionAnio, -1),${req.body.desaparicionAnio})` +
        ` AND IFNULL(identificado_smih.sesionIdentificacion, '') like IF('${req.body.sesionIdentificacion}' = '',IFNULL(identificado_smih.sesionIdentificacion, ''), '%${req.body.sesionIdentificacion}%')` +
        ` AND identificado_smih.estadoId = IF(${req.body.estadoId} = -1,identificado_smih.estadoId,${req.body.estadoId})` +
        ` AND identificado_smih.usuarioIngresoId = IF(${req.body.usuarioIngresoId} = -1,identificado_smih.usuarioIngresoId,${req.body.usuarioIngresoId})` +
        ` AND IFNULL(identificado_smih.fechaConfirmacion, '') >= IF(${req.body.fechaConfirmacionIni} is null,IFNULL(identificado_smih.fechaConfirmacion, ''),${req.body.fechaConfirmacionIni})` +
        ` AND IFNULL(identificado_smih.fechaConfirmacion, '') <= IF(${req.body.fechaConfirmacionFin} is null,IFNULL(identificado_smih.fechaConfirmacion, ''),${req.body.fechaConfirmacionFin})` +
        ` AND IFNULL(identificado_smih.fechaInfoFamilia, '') >= IF(${req.body.fechaInfoFamiliaIni} is null,IFNULL(identificado_smih.fechaInfoFamilia, ''),${req.body.fechaInfoFamiliaIni})` +
        ` AND IFNULL(identificado_smih.fechaInfoFamilia, '') <= IF(${req.body.fechaInfoFamiliaFin} is null,IFNULL(identificado_smih.fechaInfoFamilia, ''),${req.body.fechaInfoFamiliaFin})` +
        ` AND IFNULL(identificado_smih.fechaDictamen, '') >= IF(${req.body.fechaDictamenIni} is null,IFNULL(identificado_smih.fechaDictamen, ''),${req.body.fechaDictamenIni})` +
        ` AND IFNULL(identificado_smih.fechaDictamen, '') <= IF(${req.body.fechaDictamenFin} is null,IFNULL(identificado_smih.fechaDictamen, ''),${req.body.fechaDictamenFin})` +
        ` AND IFNULL(identificado_smih.fechaInhumacion, '') >= IF(${req.body.fechaInhumacionIni} is null,IFNULL(identificado_smih.fechaInhumacion, ''),${req.body.fechaInhumacionIni})` +
        ` AND IFNULL(identificado_smih.fechaInhumacion, '') <= IF(${req.body.fechaInhumacionFin} is null,IFNULL(identificado_smih.fechaInhumacion, ''),${req.body.fechaInhumacionFin})` +
        ` AND IFNULL(identificado_smih.fechaEntrevistaAM, '') >= IF(${req.body.fechaEntrevistaAMIni} is null,IFNULL(identificado_smih.fechaEntrevistaAM, ''),${req.body.fechaEntrevistaAMIni})` +
        ` AND IFNULL(identificado_smih.fechaEntrevistaAM, '') <= IF(${req.body.fechaEntrevistaAMFin} is null,IFNULL(identificado_smih.fechaEntrevistaAM, ''),${req.body.fechaEntrevistaAMFin})` +
        ` AND IFNULL(identificado_smih.fechaAnalisisOst, '') >= IF(${req.body.fechaAnalisisOstIni} is null,IFNULL(identificado_smih.fechaAnalisisOst, ''),${req.body.fechaAnalisisOstIni})` +
        ` AND IFNULL(identificado_smih.fechaAnalisisOst, '') <= IF(${req.body.fechaAnalisisOstFin} is null,IFNULL(identificado_smih.fechaAnalisisOst, ''),${req.body.fechaAnalisisOstFin})` +
        ` AND IFNULL(identificado_smih.fechaReporteDid, '') >= IF(${req.body.fechaReporteDidIni} is null,IFNULL(identificado_smih.fechaReporteDid, ''),${req.body.fechaReporteDidIni})` +
        ` AND IFNULL(identificado_smih.fechaReporteDid, '') <= IF(${req.body.fechaReporteDidFin} is null,IFNULL(identificado_smih.fechaReporteDid, ''),${req.body.fechaReporteDidFin})` +
        ` AND IFNULL(identificado_smih.fechaReporteGenetica, '') >= IF(${req.body.fechaReporteGeneticaIni} is null,IFNULL(identificado_smih.fechaReporteGenetica, ''),${req.body.fechaReporteGeneticaIni})` +
        ` AND IFNULL(identificado_smih.fechaReporteGenetica, '') <= IF(${req.body.fechaReporteGeneticaFin} is null,IFNULL(identificado_smih.fechaReporteGenetica, ''),${req.body.fechaReporteGeneticaFin})`
    ),
    order: [["identificadoSmihId", "ASC"]],
  });
  return identificados;
};

const repIdentificadoOst = async (req) => {
  const pagina = req.body.pagina ? parseInt(req.body.pagina) : 0;
  const limite = req.body.limite ? parseInt(req.body.limite) : 10;

  return (identificados = await IdentificadoOst.findAndCountAll({
    offset: pagina * limite,
    limit: limite,
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
              exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
            },
          },
          {
            model: SexoAdn,
            as: "SexoAdn",
            attributes: {exclude: ["estadoId", "fechaHoraIngreso"]},
          },
        ],
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
        where: sequelize.literal(
          `concat('FAFG-',casoId,'-',fosaDet,'-',osamentaDet) like IF('${req.body.osamenta}' = '',concat('FAFG-',casoId,'-',fosaDet,'-',osamentaDet), '%${req.body.osamenta}%')` +
            `AND IFNULL(concat('FAFG-',casoId,'-',fosaDet), -1) like IF('${req.body.fosa}' = '',IFNULL(concat('FAFG-',casoId,'-',fosaDet), -1), '%${req.body.fosa}%')` +
            `AND IFNULL(Osamenta.exhumacionAldea, '') like IF('${req.body.exhumacionAldea}' = '',IFNULL(Osamenta.exhumacionAldea, ''), '%${req.body.exhumacionAldea}%')` +
            ` AND IFNULL(Osamenta.exhumacionMuniId, -1) = IF(${req.body.exhumacionMuniId} = -1,IFNULL(Osamenta.exhumacionMuniId, -1),${req.body.exhumacionMuniId})` +
            ` AND IFNULL(Osamenta.exhumacionDeptoId, -1) = IF(${req.body.exhumacionDeptoId} = -1,IFNULL(Osamenta.exhumacionDeptoId, -1),${req.body.exhumacionDeptoId})` +
            ` AND IFNULL(Osamenta.fechaExhumacion, -1) >= IF(${req.body.fechaExhumacionIni} is null,IFNULL(Osamenta.fechaExhumacion, -1),${req.body.fechaExhumacionIni})` +
            ` AND IFNULL(Osamenta.fechaExhumacion, -1) <= IF(${req.body.fechaExhumacionFin} is null, IFNULL(Osamenta.fechaExhumacion, -1),${req.body.fechaExhumacionFin})` +
            `AND  IFNULL(Osamenta.coordenadasExhumacion, '') like IF('${req.body.coordenadasExhumacion}' = '',IFNULL(Osamenta.coordenadasExhumacion, ''), '%${req.body.coordenadasExhumacion}%')`
        ),
      },
      {
        model: Victima,
        as: "Victima",
        include: [
          {
            model: Municipio,
            as: "MuniResidencia",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso", "departamentoId"],
            },
          },
          {
            model: Departamento,
            as: "DeptoResidencia",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
            },
          },
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
              exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
            },
          },

          {
            model: TipoDocumento,
            as: "TipoDocumento",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
        ],
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
        where: sequelize.literal(
          `Victima.codigoVictima like IF('${req.body.codigoVictima}' = '',Victima.codigoVictima, '%${req.body.codigoVictima}%')` +
            `AND Victima.nombreVictima like IF('${req.body.nombreVictima}' = '',Victima.nombreVictima, '%${req.body.nombreVictima}%')` +
            `AND IFNULL(Victima.residenciaAldea,'') like IF('${req.body.residenciaAldea}' = '',IFNULL(Victima.residenciaAldea,''), '%${req.body.residenciaAldea}%')` +
            ` AND IFNULL(Victima.residenciaDeptoId, -1) = IF(${req.body.residenciaDeptoId} = -1,IFNULL(Victima.residenciaDeptoId, -1),${req.body.residenciaDeptoId})` +
            ` AND IFNULL(Victima.residenciaMuniId, -1) = IF(${req.body.residenciaMuniId} = -1,IFNULL(Victima.residenciaMuniId, -1),${req.body.residenciaMuniId})`
        ),
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
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: Departamento,
        as: "DeptoDesap",
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
        attributes: ["usuarioId", "usuario"],
      },
    ],
    where: sequelize.literal(
      ` identificado_ost.sexoId = IF(${req.body.sexoId} = -1,identificado_ost.sexoId,${req.body.sexoId})` +
        ` AND IFNULL(identificado_ost.grupoEtarioId, -1) = IF(${req.body.grupoEtarioId} = -1,IFNULL(identificado_ost.grupoEtarioId, -1),${req.body.grupoEtarioId})` +
        ` AND IFNULL(identificado_ost.grupoEtnolinguisticoId, -1) = IF(${req.body.grupoEtnolinguisticoId} = -1,IFNULL(identificado_ost.grupoEtnolinguisticoId, -1),${req.body.grupoEtnolinguisticoId})` +
        ` AND IFNULL(identificado_ost.tipoCasoDidId, -1) = IF(${req.body.tipoCasoDidId} = -1,IFNULL(identificado_ost.tipoCasoDidId, -1),${req.body.tipoCasoDidId})` +
        ` AND IFNULL(identificado_ost.desaparicionAldea, '') like IF('${req.body.desaparicionAldea}' = '',IFNULL(identificado_ost.desaparicionAldea, ''), '%${req.body.desaparicionAldea}%')` +
        ` AND IFNULL(identificado_ost.desaparicionMuniId, -1) = IF(${req.body.desaparicionMuniId} = -1,IFNULL(identificado_ost.desaparicionMuniId, -1),${req.body.desaparicionMuniId})` +
        ` AND IFNULL(identificado_ost.desaparicionDeptoId, -1) = IF(${req.body.desaparicionDeptoId} = -1,IFNULL(identificado_ost.desaparicionDeptoId, -1),${req.body.desaparicionDeptoId})` +
        ` AND IFNULL(identificado_ost.desaparicionDia, -1) = IF(${req.body.desaparicionDia} = -1,IFNULL(identificado_ost.desaparicionDia, -1),${req.body.desaparicionDia})` +
        ` AND IFNULL(identificado_ost.desaparicionMes, -1) = IF(${req.body.desaparicionMes} = -1,IFNULL(identificado_ost.desaparicionMes, -1),${req.body.desaparicionMes})` +
        ` AND IFNULL(identificado_ost.desaparicionAnio, -1) = IF(${req.body.desaparicionAnio} = -1,IFNULL(identificado_ost.desaparicionAnio, -1),${req.body.desaparicionAnio})` +
        ` AND IFNULL(identificado_ost.sesionIdentificacion, '') like IF('${req.body.sesionIdentificacion}' = '',IFNULL(identificado_ost.sesionIdentificacion, ''), '%${req.body.sesionIdentificacion}%')` +
        ` AND identificado_ost.estadoId = IF(${req.body.estadoId} = -1,identificado_ost.estadoId,${req.body.estadoId})` +
        ` AND identificado_ost.usuarioIngresoId = IF(${req.body.usuarioIngresoId} = -1,identificado_ost.usuarioIngresoId,${req.body.usuarioIngresoId})` +
        ` AND IFNULL(identificado_ost.fechaConfirmacion, '') >= IF(${req.body.fechaConfirmacionIni} is null,IFNULL(identificado_ost.fechaConfirmacion, ''),${req.body.fechaConfirmacionIni})` +
        ` AND IFNULL(identificado_ost.fechaConfirmacion, '') <= IF(${req.body.fechaConfirmacionFin} is null,IFNULL(identificado_ost.fechaConfirmacion, ''),${req.body.fechaConfirmacionFin})` +
        ` AND IFNULL(identificado_ost.fechaInfoFamilia, '') >= IF(${req.body.fechaInfoFamiliaIni} is null,IFNULL(identificado_ost.fechaInfoFamilia, ''),${req.body.fechaInfoFamiliaIni})` +
        ` AND IFNULL(identificado_ost.fechaInfoFamilia, '') <= IF(${req.body.fechaInfoFamiliaFin} is null,IFNULL(identificado_ost.fechaInfoFamilia, ''),${req.body.fechaInfoFamiliaFin})` +
        ` AND IFNULL(identificado_ost.fechaDictamen, '') >= IF(${req.body.fechaDictamenIni} is null,IFNULL(identificado_ost.fechaDictamen, ''),${req.body.fechaDictamenIni})` +
        ` AND IFNULL(identificado_ost.fechaDictamen, '') <= IF(${req.body.fechaDictamenFin} is null,IFNULL(identificado_ost.fechaDictamen, ''),${req.body.fechaDictamenFin})` +
        ` AND IFNULL(identificado_ost.fechaInhumacion, '') >= IF(${req.body.fechaInhumacionIni} is null,IFNULL(identificado_ost.fechaInhumacion, ''),${req.body.fechaInhumacionIni})` +
        ` AND IFNULL(identificado_ost.fechaInhumacion, '') <= IF(${req.body.fechaInhumacionFin} is null,IFNULL(identificado_ost.fechaInhumacion, ''),${req.body.fechaInhumacionFin})`
    ),
    order: [["identificadoOstId", "ASC"]],
  }));
};

const repCoincidencia = async (req) => {
  const pagina = req.body.pagina ? parseInt(req.body.pagina) : 0;
  const limite = req.body.limite ? parseInt(req.body.limite) : 10;

  const coincidencias = await Coincidencia.findAndCountAll({
    offset: pagina * limite,
    limit: limite,
    distinct: "coincidenciaId",
    include: [
      {
        model: Osamenta,
        as: "Osamenta",

        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
        include: [
          {
            model: SexoAdn,
            as: "SexoAdn",
            attributes: ["descripcion"],
          },
          {
            model: Departamento,
            as: "DeptoExhumacion",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
            },
          },
        ],
        where: sequelize.literal(
          `Osamenta.casoId = IF(${req.body.casoId} = -1,Osamenta.casoId,${req.body.casoId})` +
            `AND IFNULL(concat('FAFG-',casoId,'-',fosaDet,'-',osamentaDet),-2) like IF('${req.body.osamenta}' = '',IFNULL(concat('FAFG-',casoId,'-',fosaDet,'-',osamentaDet),-2), '%${req.body.osamenta}%')` +
            ` AND IFNULL(Osamenta.sexoAdnId,-1) = IF(${req.body.sexoAdnId} = -1,IFNULL(Osamenta.sexoAdnId,-1),${req.body.sexoAdnId})` +
            ` AND IFNULL(Osamenta.locisAlelosUtiles,-2) = IF(${req.body.locisAlelosUtiles} = -1,IFNULL(Osamenta.locisAlelosUtiles,-2),${req.body.locisAlelosUtiles})`
        ),
      },
      {
        model: Victima,
        as: "Victima",

        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
        include: [
          {
            model: Departamento,
            as: "DeptoLugarHecho",
            attributes: ["descripcion"],
          },
        ],
        where: sequelize.literal(
          `Victima.codigoVictima like IF('${req.body.codigoVictima}' = '',Victima.codigoVictima, '%${req.body.codigoVictima}%')` +
            `AND Victima.nombreVictima like IF('${req.body.nombreVictima}' = '',Victima.nombreVictima, '%${req.body.nombreVictima}%')`
        ),
      },
      {
        model: DonanteCoincidencia,
        as: "DonanteCoincidencia",
        attributes: ["donanteCoincidenciaId", "donanteId", "cantidadDonantes"],
        include: [
          {
            model: Donante,
            as: "Donante",
            attributes: ["descripcion"],
          },
        ],
      },
      {
        model: BaseInfo,
        as: "BaseInfo",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: ProgramaIdent,
        as: "ProgramaIdent",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: EstadoCoincidencia,
        as: "EstadoCoincidencia",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: EstadoInvestigacion,
        as: "EstadoInvestigacion",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: CromosomaY,
        as: "CromosomaY",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: TipoContexto,
        as: "TipoContexto",
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
        model: CalidadPerfil,
        as: "CalidadPerfil",
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
        attributes: ["usuarioId", "usuario"],
      },
    ],
    where: sequelize.literal(
      `coincidencia.coincidenciaId = IF(${req.body.coincidenciaId} = -1,coincidencia.coincidenciaId,${req.body.coincidenciaId})` +
        `AND IFNULL(coincidencia.baseInfoId,-2) = IF(${req.body.baseInfoId} = -1,IFNULL(coincidencia.baseInfoId,-2),${req.body.baseInfoId})` +
        ` AND IFNULL(coincidencia.programaIdentId,-2) = IF(${req.body.programaIdentId} = -1,IFNULL(coincidencia.programaIdentId,-2),${req.body.programaIdentId})` +
        ` AND IFNULL(coincidencia.estadoCoincidenciaId,-2) = IF(${req.body.estadoCoincidenciaId} = -1,IFNULL(coincidencia.estadoCoincidenciaId,-2),${req.body.estadoCoincidenciaId})` +
        ` AND IFNULL(coincidencia.estadoInvestigacionId,-2) = IF(${req.body.estadoInvestigacionId} = -1,IFNULL(coincidencia.estadoInvestigacionId,-2),${req.body.estadoInvestigacionId})` +
        ` AND IFNULL(coincidencia.tipoCasoDidId,-1) = IF(${req.body.tipoCasoDidId} = -1,IFNULL(coincidencia.tipoCasoDidId,-1),${req.body.tipoCasoDidId})` +
        ` AND IFNULL(coincidencia.tipoContextoId,-1) = IF(${req.body.tipoContextoId} = -1,IFNULL(coincidencia.tipoContextoId,-1),${req.body.tipoContextoId})` +
        ` AND IFNULL(coincidencia.calidadPerfilId,-2) = IF(${req.body.calidadPerfilId} = -1,IFNULL(coincidencia.calidadPerfilId,-2),${req.body.calidadPerfilId})` +
        ` AND IFNULL(coincidencia.lr,-2) like IF('${req.body.lr}' = '',IFNULL(coincidencia.lr,-2), '%${req.body.lr}%')` +
        ` AND IFNULL(coincidencia.posterior,-1) like IF('${req.body.posterior}' = '',IFNULL(coincidencia.posterior,-1), '%${req.body.posterior}%')` +
        ` AND IFNULL(coincidencia.estadoId,-2) = IF(${req.body.estadoId} = -1,IFNULL(coincidencia.estadoId,-2),${req.body.estadoId})` +
        ` AND IFNULL(coincidencia.usuarioIngresoId,-2) = IF(${req.body.usuarioIngresoId} = -1,IFNULL(coincidencia.usuarioIngresoId,-2),${req.body.usuarioIngresoId})` +
        ` AND IFNULL(coincidencia.fechaCoincidencia, '') >= IF(${req.body.fechaCoincidenciaIni} is null,IFNULL(coincidencia.fechaCoincidencia, ''),${req.body.fechaCoincidenciaIni})` +
        ` AND IFNULL(coincidencia.fechaCoincidencia, '') <= IF(${req.body.fechaCoincidenciaFin} is null,IFNULL(coincidencia.fechaCoincidencia, ''),${req.body.fechaCoincidenciaFin})` +
        ` AND IFNULL(coincidencia.fechaNotificacionDid, '') >= IF(${req.body.fechaNotificacionDidIni} is null,IFNULL(coincidencia.fechaNotificacionDid, ''),${req.body.fechaNotificacionDidIni})` +
        ` AND IFNULL(coincidencia.fechaNotificacionDid, '') <= IF(${req.body.fechaNotificacionDidFin} is null,IFNULL(coincidencia.fechaNotificacionDid, ''),${req.body.fechaNotificacionDidFin})` +
        ` AND IFNULL(coincidencia.fechaConfExc, '') >= IF(${req.body.fechaConfExcIni} is null,IFNULL(coincidencia.fechaConfExc, ''),${req.body.fechaConfExcIni})` +
        ` AND IFNULL(coincidencia.fechaConfExc, '') <= IF(${req.body.fechaConfExcFin} is null,IFNULL(coincidencia.fechaConfExc, ''),${req.body.fechaConfExcFin})`
    ),
    order: [["coincidenciaId", "ASC"]],
  });

  return coincidencias;
};

module.exports = {
  repCoincidencia,
  repIdentificadoSmih,
  repIdentificadoOst,
};
