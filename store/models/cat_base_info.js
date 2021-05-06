module.exports = (sequelize, type) => {
  return sequelize.define(
    "cat_base_info",
    {
      baseInfoId: {
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
