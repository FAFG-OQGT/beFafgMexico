module.exports = (sequelize, type) => {
  return sequelize.define(
    "coincidencia",
    {
      coincidenciaId: {
        type: type.INTEGER(5),
        primaryKey: true,
        autoIncrement: true,
      },
      fechaCoincidencia: {
        type: type.DATE,
        allowNull: false,
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
      baseInfoId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_base_info",
          key: "baseInfoId",
        },
      },
      programaIdentId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_programa_ident",
          key: "programaIdentId",
        },
      },
      lr: {
        type: type.STRING(50),
        allowNull: false,
      },
      apriori: {
        type: type.STRING(180),
      },
      posterior: {
        type: type.STRING(180),
      },
      estadoCoincidenciaId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "cat_estado_coincidencia",
          key: "estadoCoincidenciaId",
        },
      },
      fechaNotificacionDid: {
        type: type.DATE,
      },
      fechaConfExc: {
        type: type.DATE,
        allowNull: false,
      },
      estadoInvestigacionId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_estado_investigacion",
          key: "estadoInvestigacionId",
        },
      },
      cromosomaYId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_cromosomaY",
          key: "cromosomaYId",
        },
      },
      tipoCasoDidId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_tipo_caso_did",
          key: "tipoCasoDidId",
        },
      },
      tipoContextoId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_tipo_contexto",
          key: "tipoContextoId",
        },
      },
      marcadoresStr: {
        type: type.INTEGER(5),
      },
      calidadPerfilId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_calidad_perfil",
          key: "calidadPerfilId",
        },
      },
      muestrasAm: {
        type: type.STRING(500),
      },
      muestrasPM: {
        type: type.STRING(500),
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
      responsableId: {
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
