module.exports = (sequelize, type) => {
  return sequelize.define(
    "identificacion_persona",
    {
      identificacionId: {
        type: type.INTEGER(8),
        primaryKey: true,
        autoIncrement: true,
      },
      personaId: {
        type: type.INTEGER(8),
        allowNull: false,
        references: {
          model: "persona",
          key: "personaId",
        },
      },
      tipoDocumentoId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "cat_tipo_documento",
          key: "tipoDocumentoId",
        },
      },
      identificacion: {
        type: type.STRING(40),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
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
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
