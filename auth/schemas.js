const joi = require("joi");

const schemaUsuario = joi.object().keys({
  usuario: joi.string().alphanum().min(3).max(30).required(),
  password: joi.string().alphanum().min(3).max(30).required(),
  personaId: joi.number().required(),
  correo: joi.string().required(), //.email()
  estadoId: joi.number().required(),
});

const schemaLogin = joi.object().keys({
  usuario: joi.string().min(3).required(),
  password: joi.string().required(),
});

const schemaVictima = joi.object().keys({
  codigoVictima: joi
    .string()
    .min(5)
    .max(180)
    .required()
    .error(() => {
      return {
        message: "El codigo de la victima tiene un formato incorrecto.",
      };
    }),
  nombreVictima: joi
    .string()
    .min(3)
    .max(500)
    .required()
    .error(() => {
      return {
        message: "El nombre de la victima tiene un formato incorrecto.",
      };
    }),
  residenciaAldea: joi
    .string()
    .min(1)
    .max(500)
    .error(() => {
      return {
        message: "La aldeda de residencia tiene un formato incorrecto.",
      };
    }),
  residenciaMuniId: joi.number(),
  residenciaDeptoId: joi.number(),
  lugarHechoAldea: joi
    .string()
    .min(1)
    .max(500)
    .error(() => {
      return {
        message: "La aldeda de el lugar de hecho tiene un formato incorrecto.",
      };
    }),
  lugarHechoMuniId: joi.number(),
  lugarHechoDeptoId: joi.number(),
  diaHecho: joi
    .number()
    .min(1)
    .max(31)
    .error(() => {
      return {
        message: "El dia del hecho tiene un formato incorrecto.",
      };
    }),
  mesHecho: joi
    .number()
    .min(1)
    .max(12)
    .error(() => {
      return {
        message: "El mes del hecho tiene un formato incorrecto.",
      };
    }),
  anioHecho: joi
    .number()
    .min(1900)
    .max(2100)
    .error(() => {
      return {
        message: "El año del hecho tiene un formato incorrecto.",
      };
    }),
  noDocumento: joi
    .string()
    .min(1)
    .max(500)
    .error(() => {
      return {
        message: "El numero de documento tiene un formato incorrecto.",
      };
    }),
  tipoDocumentoId: joi.number(),
  estadoId: joi.number(),
  usuarioIngresoId: joi.number(),
});

const schemaVictimaUpdate = joi.object().keys({
  codigoVictima: joi
    .string()
    .min(5)
    .max(180)
    .error(() => {
      return {
        message: "El codigo de la victima tiene un formato incorrecto.",
      };
    }),
  nombreVictima: joi
    .string()
    .min(3)
    .max(500)
    .error(() => {
      return {
        message: "El nombre de la victima tiene un formato incorrecto.",
      };
    }),
  residenciaAldea: joi
    .string()
    .min(1)
    .max(500)
    .error(() => {
      return {
        message: "La aldeda de residencia tiene un formato incorrecto.",
      };
    }),
  residenciaMuniId: joi.number(),
  residenciaDeptoId: joi.number(),
  lugarHechoAldea: joi
    .string()
    .min(1)
    .max(500)
    .error(() => {
      return {
        message: "La aldeda de el lugar de hecho tiene un formato incorrecto.",
      };
    }),
  lugarHechoMuniId: joi.number(),
  lugarHechoDeptoId: joi.number(),
  diaHecho: joi
    .number()
    .min(1)
    .max(31)
    .error(() => {
      return {
        message: "El dia del hecho tiene un formato incorrecto.",
      };
    }),
  mesHecho: joi
    .number()
    .min(1)
    .max(12)
    .error(() => {
      return {
        message: "El mes del hecho tiene un formato incorrecto.",
      };
    }),
  anioHecho: joi
    .number()
    .min(1900)
    .max(2100)
    .error(() => {
      return {
        message: "El año del hecho tiene un formato incorrecto.",
      };
    }),
  noDocumento: joi
    .string()
    .min(1)
    .max(500)
    .error(() => {
      return {
        message: "El numero de documento tiene un formato incorrecto.",
      };
    }),
  tipoDocumentoId: joi.number(),
  estadoId: joi.number(),
  usuarioIngresoId: joi.number(),
});

const schemaOsamenta = joi.object().keys({
  casoId: joi
    .number()
    .required()
    .error(() => {
      return {
        message: "El numero de caso tiene un formato incorrecto.",
      };
    }),
  fosaDet: joi
    .string()
    .min(1)
    .max(180)
    .required()
    .error(() => {
      return {
        message: "El detalle de la fosa tiene un formato incorrecto.",
      };
    }),
  osamentaDet: joi
    .string()
    .min(1)
    .max(180)
    .required()
    .error(() => {
      return {
        message: "El detalle de la osamenta tiene un formato incorrecto.",
      };
    }),
  sexoAdnId: joi.number(),
  locisAlelosUtiles: joi.number().error(() => {
    return {
      message: "El detalle de la fosa tiene un formato incorrecto.",
    };
  }),
  fechaIngresoLab: joi.date().error(() => {
    return {
      message: "La fecha de ingreso a laboratorio tiene un formato incorrecto.",
    };
  }),
  fechaIngresoMFiSys: joi.date().error(() => {
    return {
      message: "La fecha de ingreso MFiSys tiene un formato incorrecto.",
    };
  }),
  exhumacionAldea: joi
    .string()
    .min(1)
    .max(500)
    .error(() => {
      return {
        message: "La aldeda de exhumacion tiene un formato incorrecto.",
      };
    }),
  exhumacionMuniId: joi.number(),
  exhumacionDeptoId: joi.number(),
  fechaExhumacion: joi.date().error(() => {
    return {
      message: "La fecha de exhumacion tiene un formato incorrecto.",
    };
  }),
  coordenadasExhumacion: joi
    .string()
    .min(1)
    .max(500)
    .error(() => {
      return {
        message: "Las coordenandas de exhumacion tienen un formato incorrecto.",
      };
    }),
  estadoId: joi.number(),
  usuarioIngresoId: joi.number(),
});

const schemaOsamentaUpdate = joi.object().keys({
  casoId: joi.number().error(() => {
    return {
      message: "El numero de caso tiene un formato incorrecto.",
    };
  }),
  fosaDet: joi
    .string()
    .min(1)
    .max(180)
    .error(() => {
      return {
        message: "El detalle de la fosa tiene un formato incorrecto.",
      };
    }),
  osamentaDet: joi
    .string()
    .min(1)
    .max(180)
    .error(() => {
      return {
        message: "El detalle de la osamenta tiene un formato incorrecto.",
      };
    }),
  sexoAdnId: joi.number(),
  locisAlelosUtiles: joi.number().error(() => {
    return {
      message: "El detalle de la fosa tiene un formato incorrecto.",
    };
  }),
  fechaIngresoLab: joi.date().error(() => {
    return {
      message: "La fecha de ingreso a laboratorio tiene un formato incorrecto.",
    };
  }),
  fechaIngresoMFiSys: joi.date().error(() => {
    return {
      message: "La fecha de ingreso MFiSys tiene un formato incorrecto.",
    };
  }),
  exhumacionAldea: joi
    .string()
    .min(1)
    .max(500)
    .error(() => {
      return {
        message: "La aldeda de exhumacion tiene un formato incorrecto.",
      };
    }),
  exhumacionMuniId: joi.number(),
  exhumacionDeptoId: joi.number(),
  fechaExhumacion: joi.date().error(() => {
    return {
      message: "La fecha de exhumacion tiene un formato incorrecto.",
    };
  }),
  coordenadasExhumacion: joi
    .string()
    .min(1)
    .max(500)
    .error(() => {
      return {
        message: "Las coordenandas de exhumacion tienen un formato incorrecto.",
      };
    }),
  estadoId: joi.number(),
  usuarioIngresoId: joi.number(),
});

module.exports = {
  schemaUsuario,
  schemaLogin,
  schemaOsamenta,
  schemaOsamentaUpdate,
  schemaVictima,
  schemaVictimaUpdate,
};
