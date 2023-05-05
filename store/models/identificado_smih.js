module.exports = (sequelize, type) => {
  return sequelize.define(
    "identificado_smih",
    {
      identificadoSmihId: {
        type: type.INTEGER(5),
        primaryKey: true,
        autoIncrement: true,
      },
      osamentaId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "osamenta",
          key: "osamentaId",
        },
      },
      victimaId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "victima",
          key: "victimaId",
        },
      },
      coincidenciaId: {
        type: type.INTEGER(5),
        references: {
          model: "coincidencia",
          key: "coincidenciaId",
        },
      },
      osamentaFosa: {
        type: type.INTEGER(5),
        allowNull: true,
      },
      fechaConfirmacion: {
        type: type.DATE,
        allowNull: true,
      },
      fechaInfoFamilia: {
        type: type.DATE,
      },
      fechaDictamen: {
        type: type.DATE,
      },
      sexoId: {
        type: type.INTEGER(5),
        allowNull: true,
        references: {
          model: "cat_genero",
          key: "generoId",
        },
      },
      grupoEtarioId: {
        type: type.INTEGER(5),
        allowNull: true,
        references: {
          model: "cat_grupo_etario",
          key: "grupoEtarioId",
        },
      },
      grupoEtnolinguisticoId: {
        type: type.INTEGER(5),
        allowNull: true,
        references: {
          model: "cat_grupo_etnolinguistico",
          key: "grupoEtnolinguisticoId",
        },
      },
      tipoCasoDidId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "cat_tipo_caso_did",
          key: "tipoCasoDidId",
        },
      },
      edadAM: {
        type: type.INTEGER(5),
        allowNull: true,
      },
      valorEdadAM: {
        type: type.INTEGER(5),
        allowNull: true,
        references: {
          model: "cat_valor_edad",
          key: "valorEdadId",
        },
      },
      anotacionAM: {
        type: type.STRING(500),
      },
      rangoMinimoPM: {
        type: type.INTEGER(5),
      },
      rangoMaximoPM: {
        type: type.INTEGER(5),
      },
      valorEdadPM: {
        type: type.INTEGER(5),
        allowNull: true,
        references: {
          model: "cat_valor_edad",
          key: "valorEdadId",
        },
      },
      anotacionPM: {
        type: type.STRING(500),
        validate: {
          notEmpty: true,
        },
      },
      traumaPM: {
        type: type.STRING(500),
      },
      datosOdontId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_datos_odont",
          key: "datosOdontId",
        },
      },
      anotacionDatosOdont: {
        type: type.STRING(500),
        validate: {
          notEmpty: true,
        },
      },
      regionAnatomicaId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_region_anatomica",
          key: "regionAnatomicaId",
        },
      },
      causaMuerteId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_causa_muerte",
          key: "causaMuerteId",
        },
      },
      fechaInhumacion: {
        type: type.DATE,
      },
      desaparicionAldea: {
        type: type.STRING(500),
        allowNull: true,
      },
      desaparicionMuniId: {
        type: type.INTEGER(5),
        allowNull: true,
        references: {
          model: "cat_municipio",
          key: "municipioId",
        },
      },
      desaparicionDeptoId: {
        type: type.INTEGER(5),
        allowNull: true,
        references: {
          model: "cat_departamento",
          key: "departamentoId",
        },
      },
      desaparicionDia: {
        type: type.INTEGER(5),
        allowNull: true,
      },
      desaparicionMes: {
        type: type.INTEGER(5),
        allowNull: true,
      },
      desaparicionAnio: {
        type: type.INTEGER(5),
        allowNull: true,
      },
      sesionIdentificacion: {
        type: type.STRING(180),
        allowNull: true,
      },
      resumenHecho: {
        type: type.STRING(800),
      },
      fechaEntrevistaAM: {
        type: type.DATE,
      },
      fechaAnalisisOst: {
        type: type.DATE,
      },
      observaciones: {
        type: type.STRING(800),
        validate: {
          notEmpty: true,
        },
      },
      fechaReporteDid: {
        type: type.DATE,
      },
      fechaReporteGenetica: {
        type: type.DATE,
      },
      traumaAntAM: {
        type: type.STRING(500),
      },
      traumaAntPM: {
        type: type.STRING(500),
      },
      entregado: {
        type: type.INTEGER(5),
        allowNull: true,
        defaultValue: null,
      },
      estadoId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "cat_estado",
          key: "estadoId",
        },
      },
      fechaHoraIngreso: {
        type: type.DATE,
        allowNull: false,
        defaultValue: type.NOW,
      },
      usuarioIngresoId: {
        type: type.INTEGER(8),
        allowNull: false,
        references: {
          model: "usuario",
          key: "usuarioId",
        },
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
