module.exports = (sequelize, type) => {
  return sequelize.define(
    "victima",
    {
      victimaId: {
        type: type.INTEGER(5),
        primaryKey: true,
        autoIncrement: true,
      },
      codigoVictima: {
        type: type.STRING(180),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      nombreVictima: {
        type: type.STRING(500),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      residenciaAldea: {
        type: type.STRING(500),
      },
      residenciaMuniId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_municipio",
          key: "municipioId",
        },
      },
      residenciaDeptoId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_departamento",
          key: "departamentoId",
        },
      },
      lugarHechoAldea: {
        type: type.STRING(500),
      },
      lugarHechoMuniId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_municipio",
          key: "municipioId",
        },
      },
      lugarHechoDeptoId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_departamento",
          key: "departamentoId",
        },
      },
      diaHecho: {
        type: type.INTEGER(5),
      },
      mesHecho: {
        type: type.INTEGER(5),
      },
      anioHecho: {
        type: type.INTEGER(5),
      },
      noDocumento: {
        type: type.STRING(500),
      },
      tipoDocumentoId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_tipo_documento",
          key: "tipoDocumentoId",
        },
      },
      fechaNacimientoVictima: {
        type: type.DATE,
        defaultValue: type.NOW,
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
