var sequelize = require("sequelize");
const error = require("../../../utils/error");
const joi = require("joi");
const { schemaOsamenta, schemaOsamentaUpdate } = require("../../../auth/schemas");
const {
  Osamenta,
  SexoAdn,
  Estado,
  Usuario,
  Municipio,
  Departamento,
} = require("../../../store/mysql");

const insert = async (req) => {
  // const result = joi.validate(req.body, schemaOsamenta);
  // console.log(result.error);
  // if (result.error) {
  //   throw error(result.error.details[0].message);
  // }
  //console.log(`concat('CRIH-',${req.body.casoId},'-',${req.body.casoId},'-',${req.body.osamentaDet})`)
  const osamentaCheck = await Osamenta.findOne({
    where: sequelize.literal(
      `concat('CRIH-',casoId,'-',fosaDet,'-',osamentaDet) = concat('CRIH-','${req.body.casoId}','-','${req.body.fosaDet}','-','${req.body.osamentaDet}')`
    ),
  });
  if (osamentaCheck) {
    throw error("El código de la osamenta ya existe.", 400);
  } else {
    return (osamenta = await Osamenta.create(req.body));
  }
};

const list = async (req) => {
  const filtro = req.query.filtro ? req.query.filtro : "";
  const pagina = req.query.pagina ? parseInt(req.query.pagina) : 0;
  const limite = req.query.limite ? parseInt(req.query.limite) : 10;

  return (osamentas = await Osamenta.findAndCountAll({
    offset: pagina * limite,
    limit: limite,
    include: [
      {
        model: Municipio,
        as: "MuniExhumacion",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "departamentoId"],
        },
      },
      {
        model: Departamento,
        as: "DeptoExhumacion",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
        },
      },
      {
        model: SexoAdn,
        as: "SexoAdn",
        attributes: { exclude: ["estadoId", "fechaHoraIngreso"] },
      },
      {
        model: Estado,
        as: "Estado",
        attributes: { exclude: ["fechaHoraIngreso"] },
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
      `(casoId like '%${filtro}%')` + 
      ` or (fosaDet like '%${filtro}%')` +
      ` or (osamentaDet like '%${filtro}%')` +
      ` or (concat('CRIH','-',casoId,'-',fosaDet,'-',osamentaDet) like '%${filtro}%')` +
      ` or (exhumacionAldea like '%${filtro}%')` +
      ` or (coordenadasExhumacion like '%${filtro}%')` +
      ` or (MuniExhumacion.descripcion like '%${filtro}%')` +
      ` or (DeptoExhumacion.descripcion like '%${filtro}%')` +
      ` or (fechaIngresoLab like '%${filtro}%')` +
      ` or (fechaIngresoMFiSys like '%${filtro}%')` +
      ` or (fechaExhumacion like '%${filtro}%')` +
      ` or (SexoAdn.descripcion like '%${filtro}%')` 
    ),
    order: [["osamentaId", "DESC"]],
  }));
};

const searchById = async (req) => {
  const osamenta = await Osamenta.findOne({
    include: [
      {
        model: Municipio,
        as: "MuniExhumacion",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "departamentoId"],
        },
      },
      {
        model: Departamento,
        as: "DeptoExhumacion",
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
        },
      },
      {
        model: SexoAdn,
        as: "SexoAdn",
        attributes: { exclude: ["estadoId", "fechaHoraIngreso"] },
      },
      {
        model: Estado,
        as: "Estado",
        attributes: { exclude: ["fechaHoraIngreso"] },
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
            "firmaUsuario",
          ],
        },
      },
    ],
    where: {
      osamentaId: req.params.osamentaId,
    },
  });
  if (!osamenta) {
    throw error("No existe la Osamenta", 400);
  } else {
    return osamenta;
  }
};

const change = async (req) => {
  // const vals = joi.validate(req.body, schemaOsamentaUpdate);
  // //console.log(vals.error);
  // if (vals.error) {
  //   throw error(vals.error.details[0].message);
  // }

  const osamentaUpdate = await Osamenta.findOne({
    where: { osamentaId: req.params.osamentaId },
  });
  if (!osamentaUpdate) {
    throw error("No existe la Osamenta", 400);
  }


  const result = await Osamenta.update(req.body, {
    where: {
      osamentaId: req.params.osamentaId,
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
  list,
  change,
  searchById,
};
