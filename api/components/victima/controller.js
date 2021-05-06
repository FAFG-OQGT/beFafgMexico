var sequelize = require("sequelize");
const error = require("../../../utils/error");
const joi = require("joi");
const { schemaVictima, schemaVictimaUpdate } = require("../../../auth/schemas");
const {
  Victima,
  ParienteVictima,
  Municipio,
  Departamento,
  TipoDocumento,
  Estado,
  Usuario,
} = require("../../../store/mysql");

const insert = async (req) => {
  
  // const result = joi.validate(req.body, schemaVictima);
  // console.log(result.error);
  // if (result.error) {
  //   throw error(result.error.details[0].message);
  // }
  const victimaCheck = await Victima.findOne({
    where: { codigoVictima: req.body.codigoVictima },
  });
  if (victimaCheck) {
    throw error("El código de la víctima ya existe.", 400);
  }
  else{
    return (victima = await Victima.create(req.body));
  }
  
};

const insertPariente = async (req) => {
  return (pariente = await ParienteVictima.create(req.body));
};

const list = async (req) => {
  const filtro = req.query.filtro ? req.query.filtro : "";
  const pagina = req.query.pagina ? parseInt(req.query.pagina) : 0;
  const limite = req.query.limite ? parseInt(req.query.limite) : 10;

  return (victimas = await Victima.findAndCountAll({
    offset: pagina * limite,
    limit: limite,
    include: [
      {
        model: Municipio,
        as: "MuniResidencia",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "departamentoId"],
        },
      },
      {
        model: Departamento,
        as: "DeptoResidencia",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
        },
      },
      {
        model: Municipio,
        as: "MuniLugarHecho",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "departamentoId"],
        },
      },
      {
        model: Departamento,
        as: "DeptoLugarHecho",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
        },
      },
      
      {
        model: TipoDocumento,
        as: "TipoDocumento",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: Estado,
        as: "Estado",
        attributes: {
          exclude: ["fechaHoraIngreso"],
        },
      },
      {
        model: Usuario,
        as: "Usuario",
        attributes: {
          exclude: [
            "estadoId",
            "fechaHoraIngreso",
            "password",
            "personaId",
            "email",
            "firmaUsuario"
          ],
        },
      },
    ],
    where: sequelize.literal(
      `(codigoVictima like '%${filtro}%')` + 
      ` or (nombreVictima like '%${filtro}%')` +
      ` or (diaHecho like '%${filtro}%')` +
      ` or (mesHecho like '%${filtro}%')` +
      ` or (anioHecho like '%${filtro}%')` +
      ` or (MuniLugarHecho.descripcion like '%${filtro}%')` +
      ` or (DeptoLugarHecho.descripcion like '%${filtro}%')` +
      ` or (MuniResidencia.descripcion like '%${filtro}%')` +
      ` or (DeptoResidencia.descripcion like '%${filtro}%')` 

    ),
    order: [["victimaId", "DESC"]],
  }));
};

const listPariente = async (req) => {
  return (parientes = await ParienteVictima.findAll({
    include: [
      {
        model: Victima,
        as: "Victima",
        attributes: ["codigoVictima"],
      },
      {
        model: Estado,
        as: "Estado",
        attributes: {
          exclude: ["fechaHoraIngreso"],
        },
      },
      {
        model: Usuario,
        as: "Usuario",
        attributes: {
          exclude: [
            "estadoId",
            "fechaHoraIngreso",
            "password",
            "personaId",
            "email",
            "firmaUsuario"
          ],
        },
      },
    ],
    where: {
      victimaId: req.body.victimaId,
      estadoId: 1,
    },
  }));
};

const searchById = async (req) => {
  const victima = await Victima.findOne({
    include: [
      {
        model: Municipio,
        as: "MuniResidencia",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "departamentoId"],
        },
      },
      {
        model: Departamento,
        as: "DeptoResidencia",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
        },
      },
      {
        model: Municipio,
        as: "MuniLugarHecho",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "departamentoId"],
        },
      },
      {
        model: Departamento,
        as: "DeptoLugarHecho",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
        },
      },
      {
        model: TipoDocumento,
        as: "TipoDocumento",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso"],
        },
      },
      {
        model: Estado,
        as: "Estado",
        attributes: {
          exclude: ["fechaHoraIngreso"],
        },
      },
      {
        model: Usuario,
        as: "Usuario",
        attributes: {
          exclude: [
            "estadoId",
            "fechaHoraIngreso",
            "password",
            "personaId",
            "email",
            "firmaUsuario"
          ],
        },
      },
    ],
    where: {
      victimaId: req.params.victimaId,
    },
  });

  if (!victima) {
    throw error("No existe la Victima", 400);
  } else {
    return victima;
  }
};

const change = async (req) => {
  // const vals = joi.validate(req.body, schemaVictimaUpdate);
  // console.log(vals.error);
  // if (vals.error) {
  //   throw error(vals.error.details[0].message);
  // }

  const victimaUpdate = await Victima.findOne({
    where: { victimaId: req.params.victimaId },
  });
  if (!victimaUpdate) {
    throw error("No existe la Victima", 400);
  }
  const result = await Victima.update(req.body, {
    where: {
      victimaId: req.params.victimaId,
    },
  });
  if (result > 0) {
    return "Cambio realizado con exito";
  } else {
    return "Los datos ingresados son iguales";
  }
};

module.exports = {
  insert,
  insertPariente,
  list,
  listPariente,
  searchById,
  change,
};
