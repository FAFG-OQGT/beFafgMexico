module.exports = (sequelize, type) => {
  return sequelize.define(
    "osamenta",
    {
      osamentaId: {
        type: type.INTEGER(5),
        primaryKey: true,
        autoIncrement: true,
      },
      casoId: {
        type: type.INTEGER(5),
        allowNull: false,
      },
      fosaDet: {
        type: type.STRING(180),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      osamentaDet: {
        type: type.STRING(180),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      sexoAdnId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_sexo_adn",
          key: "sexoAdnId",
        },
      },
      locisAlelosUtiles: {
        type: type.INTEGER(5),
      },
      fechaIngresoLab: {
        type: type.DATE,
      },
      fechaIngresoMFiSys: {
        type: type.DATE,
      },
      exhumacionAldea: {
        type: type.STRING(500),
      },
      exhumacionMuniId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_municipio",
          key: "municipioId",
        },
      },
      exhumacionDeptoId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_departamento",
          key: "departamentoId",
        },
      },
      fechaExhumacion: {
        type: type.DATE,
      },
      coordenadasExhumacion: {
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
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
