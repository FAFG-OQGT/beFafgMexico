module.exports = (sequelize, type) => {
  return sequelize.define(
    "fio",
    {
      fioId: {
        type: type.INTEGER(8),
        primaryKey: true,
        autoIncrement: true,
      },
      coincidenciaId: {
        type: type.INTEGER(8),
        allowNull: false,
        references: {
          model: "coincidencia",
          key: "coincidenciaId",
        },
      },
      nombreVictima: {
        type: type.STRING(300),
      },
      codigoAM: {
        type: type.STRING(500),
      },
      codigoPM: {
        type: type.STRING(500),
      },
      sexoAM: {
        type: type.INTEGER(8),
        references: {
          model: "cat_genero",
          key: "generoId",
        },
      },
      sexoPM: {
        type: type.INTEGER(8),
        references: {
          model: "cat_sexo_adn",
          key: "sexoAdnId",
        },
      },
      edadAM: {
        type: type.INTEGER(8),
      },
      edadPM: {
        type: type.STRING(500),
      },
      estaturaAM: {
        type: type.STRING(8),
      },
      estaturaPM: {
        type: type.STRING(8),
      },
      observacionesEstatura: {
        type: type.STRING(500),
      },
      traumaAntAM: {
        type: type.STRING(500),
      },
      traumaAntPM: {
        type: type.STRING(500),
      },
      enfermedadAM: {
        type: type.STRING(500),
      },
      enfermedadPM: {
        type: type.STRING(500),
      },
      denticionAM: {
        type: type.STRING(500),
      },
      denticionPM: {
        type: type.STRING(500),
      },
      traumaCircAM: {
        type: type.INTEGER(8),
        references: {
          model: "cat_trauma_circ",
          key: "traumaCircId",
        },
      },
      traumaCircPM: {
        type: type.INTEGER(8),
        references: {
          model: "cat_trauma_circ",
          key: "traumaCircId",
        },
      },
      causaMuerteAM: {
        type: type.INTEGER(8),
        references: {
          model: "cat_causa_muerte",
          key: "causaMuerteId",
        },
      },
      causaMuertePM: {
        type: type.INTEGER(8),
        references: {
          model: "cat_causa_muerte",
          key: "causaMuerteId",
        },
      },
      formaEntierroAM: {
        type: type.STRING(500),
      },
      formaEntierroPM: {
        type: type.STRING(500),
      },
      elementosIndividAM: {
        type: type.STRING(500),
      },
      elementosIndividPM: {
        type: type.STRING(500),
      },
      adnAM: {
        type: type.STRING(500),
      },
      adnPM: {
        type: type.STRING(500),
      },
      nombreEntrevistado: {
        type: type.STRING(500),
      },
      nombreReconocio: {
        type: type.STRING(500),
      },
      coincidencia: {
        type: type.STRING(500),
      },
      reconocimientoCampo: {
        type: type.STRING(500),
      },
      identificacionFinal: {
        type: type.STRING(500),
      },
      indiceFiliacion: {
        type: type.STRING(500),
      },
      apriori: {
        type: type.STRING(500),
      },
      posterior: {
        type: type.STRING(500),
      },
      grupoEtnolinguisticoId: {
        type: type.INTEGER(8),
        references: {
          model: "cat_grupo_etnolinguistico",
          key: "grupoEtnolinguisticoId",
        },
      },
      fechaEvento: {
        type: type.DATE,
      },
      lugarEvento: {
        type: type.STRING(500),
      },
      fechaExhumacion: {
        type: type.DATE,
      },
      fechaAnalisis: {
        type: type.DATE,
      },
      fechaCoincidencia: {
        type: type.DATE,
      },
      fechaConfirmacion: {
        type: type.DATE,
      },
      observaciones: {
        type: type.STRING(500),
      },
      contextoIdentificacion: {
        type: type.STRING(500),
      },
      tipoEvento: {
        type: type.STRING(500),
      },
      observacionesTrauma: {
        type: type.STRING(500),
      },
      fechaFio: {
        type: type.DATE,
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
