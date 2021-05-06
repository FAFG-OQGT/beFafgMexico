var sequelize = require("sequelize");
const error = require("../../../utils/error");
const { Persona, Usuario } = require("../../../store/mysql");

const combo = async (req) => {
  Persona.hasMany(Usuario, { foreignKey: "personaId" });
  return (personas = await Persona.findAll({
    attributes: [
      "personaId",
      [
        sequelize.fn(
          "concat",
          sequelize.col("nombre1"),
          " ",
          sequelize.col("apellido1")
        ),
        "nombre",
      ],
    ],
    where: sequelize.literal(
      "usuarios.usuarioId IS NULL AND persona.estadoId = 1 or persona.personaId="+(req.params.personaId)
    ),

    include: [
      {
        model: Usuario,
        attributes: {
          exclude: ["estadoId", "fechaHoraIngreso", "firmaUsuario"],
        },
      },
    ],
  }));
};

const list = async (req) => {
  const limite = req.query.limite ? parseInt(req.query.limite) : 10;
  const pagina = req.query.pagina ? parseInt(req.query.pagina) : 1;
  const filtro = req.query.filtro;

  return (personas = await Persona.findAndCountAll({
    offset: pagina * limite,
    limit: limite,
    where: {
      [sequelize.Op.or]: {
        namesQuery: sequelize.where(
          sequelize.fn(
            "concat",
            sequelize.fn("IFNULL", sequelize.col("nombre1"), ""),
            " ",
            sequelize.fn("IFNULL", sequelize.col("nombre2"), ""),
            " ",
            sequelize.fn("IFNULL", sequelize.col("apellido1"), ""),
            " ",
            sequelize.fn("IFNULL", sequelize.col("apellido2"), "")
          ),
          {
            [sequelize.Op.like]: `%${filtro}%`,
          }
        ),
      },
    },
  }));
};

const insert = async (req) => {
  return (persona = await Persona.create(req.body));
};

const change = async (req) => {
  const personaUpdate = await Persona.findOne({
    where: { personaId: req.params.personaId },
  });
  if (!personaUpdate) {
    throw error("No existe la persona", 400);
  }
  const result = await Persona.update(req.body, {
    where: {
      personaId: req.params.personaId,
    },
  });
  if (result > 0) {
    return "Cambio realizado con exito";
  } else {
    return "Los datos ingresados son iguales";
  }
};

module.exports = {
  list,
  insert,
  change,
  combo,
};
