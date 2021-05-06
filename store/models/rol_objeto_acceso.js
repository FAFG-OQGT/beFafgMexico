module.exports = (sequelize, type) => {
  return sequelize.define(
    "rol_objeto_acesso",
    {
      rolAccesoId: {
        type: type.INTEGER(8),
        primaryKey: true,
        autoIncrement: true,
      },
      rolId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "cat_rol",
          key: "rolId",
        },
      },
      objetoAccesoId: {
        type: type.INTEGER(8),
        allowNull: false,
        references: {
          model: "objeto_acceso",
          key: "objetoAccesoId",
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
