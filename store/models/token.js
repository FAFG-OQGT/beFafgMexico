module.exports = (sequelize, type) => {
  return sequelize.define(
    "token",
    {
      tokenId: {
        type: type.INTEGER(5),
        primaryKey: true,
        autoIncrement: true,
      },
      operacion: {
        type: type.STRING(180),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      valorToken: {
        type: type.INTEGER(6),
        allowNull: false,
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
