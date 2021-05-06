module.exports = (sequelize, type) => {
  return sequelize.define(
    "cat_rol",
    {
      rolId: {
        type: type.INTEGER(5),
        primaryKey: true,
        autoIncrement: true,
      },
      descripcion: {
        type: type.STRING(180),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      moduloId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "cat_modulo",
          key: "moduloId",
        },
      },
      aplicativoId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "cat_aplicativo",
          key: "aplicativoId",
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
