module.exports = (sequelize, type) => {
  return sequelize.define(
    "cat_departamento",
    {
      departamentoId: {
        type: type.INTEGER(5),
        primaryKey: true,
        autoIncrement: true,
      },
      paisId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "cat_pais",
          key: "paisId",
        },
      },
      descripcion: {
        type: type.STRING(180),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      codigoMapa: {
        type: type.STRING(180),
        allowNull: true,
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
