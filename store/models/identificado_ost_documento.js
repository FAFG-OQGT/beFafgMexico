module.exports = (sequelize, type) => {
    return sequelize.define(
      "identificado_ost_documento",
      {
        identificadoDocumentoId: {
          type: type.INTEGER(5),
          primaryKey: true,
          autoIncrement: true,
        },
        identificadoOstId: {
          type: type.INTEGER(5),
          allowNull: false,
          references: {
            model: "identificado_ost",
            key: "identificadoOstId",
          },
        },
        documentoId: {
          type: type.INTEGER(5),
          allowNull: false,
          references: {
            model: "cat_documento",
            key: "documentoId",
          },
        },
        urlDocumento: {
          type: type.STRING(500),
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        mimetype: {
          type: type.STRING(100),
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        eTag: {
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
  