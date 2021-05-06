module.exports = (sequelize, type) => {
  return sequelize.define(
    "datos_persona",
    {
      datosPersonaId: {
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
      estadoCivilid: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "cat_estado_civil",
          key: "estadoCivilid",
        },
      },
      tipoSangreId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_tipo_sangre",
          key: "tipoSangreId",
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
