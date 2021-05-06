var sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const auth = require("../../../auth");
const error = require("../../../utils/error");
const {Usuario, UsuarioRol, Rol, Puesto} = require("../../../store/mysql");

const list = async (req) => {
  const limite = req.query.limite ? parseInt(req.query.limite) : 10;
  const pagina = req.query.pagina ? parseInt(req.query.pagina) : 1;
  const filtro = req.query.filtro;

  return (usuarios = await UsuarioRol.findAndCountAll({
    offset: pagina * limite,
    limit: limite,
    include: [
      {
        model: Usuario,
        as: "Usuario",
        attributes: ["usuarioId", "personaId", "usuario", "email", "estadoId","puestoId"],
        include: [
          {
            model: Puesto,
            as: "Puesto",
            attributes: ["puestoId", "descripcion", "estadoId"],
          },
        ],
      },

      {
        model: Rol,
        as: "modulo",
        attributes: ["rolId", "descripcion", "moduloId", "aplicativoId"],
      },
    ],
    attributes: {exclude: ["password"]},
    where: sequelize.literal(
      `modulo.aplicativoId = 1 ` +
        `AND Usuario.usuarioId <> 1 ` +
        `and (Usuario.usuario like '%${filtro}%' or Usuario.email like '%${filtro}%' ) `
    ),
  }));
};

const change = async (req) => {
  const userUpdate = await Usuario.findOne({
    where: {usuarioId: req.params.usuarioId},
  });
  if (!userUpdate) {
    throw error("No existe usuario", 400);
  }
  const result = await Usuario.update(req.body, {
    where: {
      usuarioId: req.params.usuarioId,
    },
  });
  if (result > 0) {
    return "Cambio realizado con exito";
  } else {
    return "Los datos ingresados son iguales";
  }
};
const changeRol = async (req) => {
  console.log(1, req.body.rolId, req.params.usuarioId);
  let usuarioId = req.params.usuarioId;
  let rolId = req.body.rolId;
  //valida que el usuario exista
  const userUpdate = await Usuario.findOne({
    where: {usuarioId: usuarioId},
  });
  if (!userUpdate) {
    throw error("No existe usuario", 400);
  }

  //valida si el rol a asignar existe o esta activo
  const roltoUpdate = await Rol.findOne({
    where: {rolId: rolId, estadoId: 1},
  });
  console.log(2, roltoUpdate);

  if (!roltoUpdate) {
    throw error("Rol no existe o esta inactivo", 400);
  }

  //valida si el usuario ya tiene un rol asignado
  const userRolupdate = await UsuarioRol.findOne({
    where: {usuarioId: usuarioId},
  });

  //si tiene rol asignado updatea
  if (userRolupdate) {
    //valida si el usuario tiene el rol ya asignado
    if (userRolupdate.rolId === rolId) {
      throw error("El usuario ya tiene el rol asignado", 400);
    }
    const result = await UsuarioRol.update(
      {rolId: rolId},
      {
        where: {
          usuarioId: usuarioId,
        },
      }
    );

    if (result > 0) {
      return "Cambio realizado con exito";
    } else {
      return "El usuario ya tiene el rol asignado";
    }
  } else {
    //de lo contrario crea el usuario rol
    return (usuarioRol = await UsuarioRol.create({
      usuarioId: usuarioId,
      rolId: rolId,
      estadoId: 1,
    }));
  }
};

const insert = async (req) => {
  req.body.password = bcrypt.hashSync(req.body.password, 7);
  usuario = await Usuario.create(req.body);
  console.log(usuario);
  rol = {
    usuarioId: usuario.usuarioId,
    rolId : req.body.rolId,
    estadoId : 1
  }
  console.log(rol);

  rolUsuario = await UsuarioRol.create(rol);

  return usuario;
};

upsert = async (body) => {
  const user = {
    nombre: body.nombre,
    usuario: body.usuario,
  };
  if (body.usuarioId) {
    user.usuarioId = body.usuarioId;
  } else {
    user.usuarioId = nanoid();
  }

  if (body.password || body.usuario) {
    await auth.upsert({
      usuarioId: user.usuarioId,
      usuario: user.usuario,
      password: body.password,
    });
  }

  return "";
};

module.exports = {
  list,
  change,
  insert,
  changeRol,
};
