module.exports = (sequelize, type) => {
  return sequelize.define(
    "pariente_victima",
    {
      parienteVictimaId: {
        type: type.INTEGER(5),
        primaryKey: true,
        autoIncrement: true,
      },
      victimaId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "victima",
          key: "victimaId",
        },
      },
      codigoPariente: {
        type: type.STRING(180),
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
