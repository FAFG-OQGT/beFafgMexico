module.exports = (sequelize, type) => {
  return sequelize.define(
    "usuario_rol",
    {
      usuarioRolId: {
        type: type.INTEGER(8),
        primaryKey: true,
        autoIncrement: true,
      },
      usuarioId: {
        type: type.INTEGER(8),
        allowNull: false,
        references: {
          model: "usuario",
          key: "usuarioId",
        },
      },
      rolId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "cat_rol",
          key: "rolId",
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
