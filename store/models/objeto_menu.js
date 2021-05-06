module.exports = (sequelize, type) => {
  return sequelize.define(
    "objeto_menu",
    {
      objetoId: {
        type: type.INTEGER(8),
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
      url: type.STRING(100),
      type: type.STRING(100),
      icon: type.STRING(100),
      classes: type.STRING(100),
      objetoPadreId: {
        type: type.INTEGER(8),
        references: {
          model: "objeto_menu",
          key: "objetoId",
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
