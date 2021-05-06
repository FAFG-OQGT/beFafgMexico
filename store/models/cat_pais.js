module.exports = (sequelize, type) => {
  return sequelize.define(
    "cat_pais",
    {
      paisId: {
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
      nacionalidad: {
        type: type.STRING(100),
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
