module.exports = (sequelize, type) => {
  return sequelize.define(
    "identificado_ost",
    {
      identificadoOstId: {
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
      },
      desaparicionMes: {
        type: type.INTEGER(5),
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
        type: type.STRING(700),
        allowNull: true,
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
