module.exports = (sequelize, type) => {
  return sequelize.define(
    "usuario",
    {
      usuarioId: {
        type: type.INTEGER(8),
        primaryKey: true,
        autoIncrement: true,
      },
      personaId: {
        type: type.INTEGER(8),
        allowNull: false,
        references: {
          model: "persona",
          key: "personaId",
        },
      },
      puestoId: {
        type: type.INTEGER(8),
        allowNull: true,
        references: {
          model: "cat_puesto",
          key: "puestoId",
        },
      },
      usuario: {
        type: type.STRING(30),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      password: {
        type: type.STRING(500),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: type.STRING(180),
        validate: {
          notEmpty: true,
        },
      },
      firmaUsuario: {
        type: type.BLOB('long'),
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
