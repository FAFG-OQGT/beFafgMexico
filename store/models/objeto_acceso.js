module.exports = (sequelize, type) => {
  return sequelize.define(
    "objeto_acceso",
    {
      objetoAccesoId: {
        type: type.INTEGER(8),
        primaryKey: true,
        autoIncrement: true,
      },
      objetoId: {
        type: type.INTEGER(8),
        allowNull: false,
        references: {
          model: "objeto_menu",
          key: "objetoId",
        },
      },
      accesoId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "cat_acceso",
          key: "accesoId",
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
