module.exports = (sequelize, type) => {
  return sequelize.define(
    "cat_municipio",
    {
      municipioId: {
        type: type.INTEGER(5),
        primaryKey: true,
        autoIncrement: true,
      },
      departamentoId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "cat_departamento",
          key: "departamentoId",
        },
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
