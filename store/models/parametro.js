module.exports = (sequelize, type) => {
    return sequelize.define(
      "parametro",
      {
        parametroId: {
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
        valor: {
            type: type.STRING(300),
          allowNull: false,
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
  