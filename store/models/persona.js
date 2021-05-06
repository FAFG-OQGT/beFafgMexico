module.exports = (sequelize, type) => {
  const PersonaDef = sequelize.define(
    "persona",
    {
      personaId: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre1: {
        type: type.STRING(120),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      nombre2: type.STRING(120),
      nombreOtros: type.STRING(120),
      apellido1: {
        type: type.STRING(120),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      apellido2: type.STRING(120),
      apellidoCasada: type.STRING(120),
      fechaNacimiento: {
        type: type.DATE,
        allowNull: false,
      },
      generoId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "cat_genero",
          key: "generoId",
        },
      },
      paisId: {
        type: type.INTEGER(5),
        allowNull: false,
        references: {
          model: "cat_pais",
          key: "paisId",
        },
      },
      telefono: type.INTEGER(12),
      direccion: type.STRING(300),
      municipioId: {
        type: type.INTEGER(5),
        references: {
          model: "cat_municipio",
          key: "municipioId",
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

  return PersonaDef;
};
