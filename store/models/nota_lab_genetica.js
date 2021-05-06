module.exports = (sequelize, type) => {
  return sequelize.define(
    "nota_lab_genetica",
    {
      notaLabGeneticaId: {
        type: type.INTEGER(5),
        primaryKey: true,
        autoIncrement: true,
      },
      coincidenciaId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "coincidencia",
          key: "coincidenciaId",
        },
      },
      descripcion: {
        type: type.STRING(500),
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
      usuarioIngresoId: {
        type: type.INTEGER(8),
        allowNull: false,
        references: {
          model: "usuario",
          key: "usuarioId",
        },
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
