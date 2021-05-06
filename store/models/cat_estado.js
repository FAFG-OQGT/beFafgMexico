module.exports = (sequelize, type) => {
  return sequelize.define(
    "cat_estado",
    {
      estadoId: {
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
