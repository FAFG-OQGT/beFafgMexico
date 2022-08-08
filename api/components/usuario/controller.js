var sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const auth = require("../../../auth");
const error = require("../../../utils/error");
const {
  Usuario,
  UsuarioRol,
  Rol,
  Puesto,
  RolObjetoAcceso,
  ObjetoMenu,
  ObjetoAcceso,
  Modulo,
  Persona
} = require("../../../store/mysql");

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
        attributes: [
          "usuarioId",
          "personaId",
          "usuario",
          "email",
          "estadoId",
          "puestoId"
        ],
        include: [
          {
            model: Puesto,
            as: "Puesto",
            attributes: ["puestoId", "descripcion", "estadoId"]
          }
        ]
      },

      {
        model: Rol,
        as: "modulo",
        attributes: ["rolId", "descripcion", "moduloId", "aplicativoId"]
      }
    ],
    attributes: {exclude: ["password"]},
    where: sequelize.literal(
      `modulo.aplicativoId = 1 ` +
        `AND Usuario.usuarioId <> 1 ` +
        `and (Usuario.usuario like '%${filtro}%' or Usuario.email like '%${filtro}%' ) `
    )
  }));
};

const change = async (req) => {
  const userUpdate = await Usuario.findOne({
    where: {usuarioId: req.params.usuarioId}
  });
  if (!userUpdate) {
    throw error("No existe usuario", 400);
  }
  const result = await Usuario.update(req.body, {
    where: {
      usuarioId: req.params.usuarioId
    }
  });
  if (result > 0) {
    return "Cambio realizado con exito";
  } else {
    return "Los datos ingresados son iguales";
  }
};

const itemsMenu = async (usuarioId) => {
  const rolesUser = await UsuarioRol.findAll({
    include: [
      {
        model: Rol,
        as: "modulo",
        attributes: ["moduloId"],
        where: {
          aplicativoId: 1
        }
      }
    ],
    where: {usuarioId: usuarioId}
  });

  let listRolesUsuario = new Array();
  rolesUser.map((data) => {
    listRolesUsuario.push(data.rolId);
  });

  const rol_objetoAcceso = await RolObjetoAcceso.findAll({
    where: {rolId: listRolesUsuario, estadoId: 1}
  });

  let listObjetoAccesoId = new Array();
  rol_objetoAcceso.map((data) => {
    listObjetoAccesoId.push(data.objetoAccesoId);
  });

  const objeto_acceso = await ObjetoAcceso.findAll({
    where: {objetoAccesoId: listObjetoAccesoId}
  });

  let listObjetoMenu = new Array();
  let listAcceso = new Array();
  let accesosxMenu = new Array();
  objeto_acceso.map((data) => {
    listObjetoMenu.push(data.objetoId);
    listAcceso.push(data.accesoId);
    let acceso = {
      objetoId: data.objetoId,
      accesoId: data.accesoId
    };
    accesosxMenu.push(acceso);
  });

  const objetoMenu = await ObjetoMenu.findAll({
    where: {objetoId: listObjetoMenu}
  });

  let agregados = new Array();
  let miMenu = new Array();

  const obtenerAcceso = (objetoId) => {
    let actualizar = false;
    let ver = false;
    let agregar = false;
    let eliminar = false;
    let verArchivo = false;
    let agregarArchivo = false;
    let eliminarArchivo = false;
    let descargarArchivo = false;
    let verAnotaciones = false;
    let agregarAnotaciones = false;
    let verSeguimientoSolicitud = false;
    let agregarSeguimientoSolicitud = false;
    let verNotasLaboratorio = false;
    let agregarNotasLaboratorio = false;
    let verFio = false;
    let editarFio = false;
    let verDonantes = false;
    let editarDonantes = false;

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 1)
    ) {
      ver = true;
    }
    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 2)
    ) {
      agregar = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 3)
    ) {
      actualizar = true;
    }
    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 4)
    ) {
      eliminar = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 5)
    ) {
      verArchivo = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 6)
    ) {
      agregarArchivo = true;
    }
    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 7)
    ) {
      eliminarArchivo = true;
    }
    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 8)
    ) {
      descargarArchivo = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 9)
    ) {
      verAnotaciones = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 10)
    ) {
      agregarAnotaciones = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 11)
    ) {
      verSeguimientoSolicitud = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 12)
    ) {
      agregarSeguimientoSolicitud = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 13)
    ) {
      verNotasLaboratorio = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 14)
    ) {
      agregarNotasLaboratorio = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 15)
    ) {
      verFio = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 16)
    ) {
      editarFio = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 17)
    ) {
      verDonantes = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 18)
    ) {
      editarDonantes = true;
    }

    let permisos = {
      actualizar,
      ver,
      agregar,
      eliminar,
      verArchivo,
      agregarArchivo,
      eliminarArchivo,
      descargarArchivo,
      verAnotaciones,
      agregarAnotaciones,
      verSeguimientoSolicitud,
      agregarSeguimientoSolicitud,
      verNotasLaboratorio,
      agregarNotasLaboratorio,
      verFio,
      editarFio,
      verDonantes,
      editarDonantes
    };

    return permisos;
  };
  const obtenerHijos = async (d) => {
    let childens = new Array();

    d.map((data) => {
      let menuId = data.objetoId;
      if (!agregados.find((i) => i === menuId)) {
        let itemMenu = {
          id: menuId,
          title: data.descripcion,
          type: data.type,
          url: data.url,
          classes: "",
          icon: data.icon,
          accesos: obtenerAcceso(menuId)
        };
        agregados.push(menuId);
        childens.push(itemMenu);
      }
    });
    return childens;
  };

  const objetoAnidado = (idObjeto) => {
    let hijos = objetoMenu.filter((i) => i.objetoPadreId == idObjeto);
    var itemMenu = [];
    hijos.map((data) => {
      itemMenu.push({
        id: data.dataValues.objetoId,
        title: data.dataValues.descripcion,
        type: data.dataValues.type,
        url: data.dataValues.url,
        classes: data.dataValues.classes,
        icon: data.dataValues.icon,
        children: objetoAnidado(data.dataValues.objetoId),
        accesos: obtenerAcceso(data.dataValues.objetoId)
      });
    });

    return itemMenu;
  };
  objetoMenu.map(async (data) => {
    if (data.objetoPadreId === null) {
      miMenu.push({
        id: data.dataValues.objetoId,
        title: data.dataValues.descripcion,
        type: data.dataValues.type,
        url: data.dataValues.url,
        classes: data.dataValues.classes,
        icon: data.dataValues.icon,
        children: objetoAnidado(data.dataValues.objetoId),
        accesos: obtenerAcceso(data.objetoId)
      });
    }
  });
  return miMenu;
};

const itemAccesoXRol = async (rolId, objetoId) => {
  console.log(rolId, objetoId);
  let listRolesUsuario = new Array();
  listRolesUsuario.push(rolId);

  const rol_objetoAcceso = await RolObjetoAcceso.findAll({
    where: {rolId: listRolesUsuario, estadoId: 1}
  });

  let listObjetoAccesoId = new Array();
  rol_objetoAcceso.map((data) => {
    listObjetoAccesoId.push(data.objetoAccesoId);
  });

  const objeto_acceso = await ObjetoAcceso.findAll({
    where: {
      objetoAccesoId: listObjetoAccesoId,
      objetoId: objetoId
    }
  });

  let listObjetoMenu = new Array();
  let listAcceso = new Array();
  let accesosxMenu = new Array();
  objeto_acceso.map((data) => {
    listObjetoMenu.push(data.objetoId);
    listAcceso.push(data.accesoId);
    let acceso = {
      objetoId: data.objetoId,
      accesoId: data.accesoId
    };
    accesosxMenu.push(acceso);
  });

  const objetoMenu = await ObjetoMenu.findAll({
    where: {objetoId: listObjetoMenu}
  });

  let miMenu = new Array();

  const obtenerAcceso = (objetoId) => {
    let actualizar = false;
    let ver = false;
    let agregar = false;
    let eliminar = false;
    let verArchivo = false;
    let agregarArchivo = false;
    let eliminarArchivo = false;
    let descargarArchivo = false;
    let verAnotaciones = false;
    let agregarAnotaciones = false;
    let verSeguimientoSolicitud = false;
    let agregarSeguimientoSolicitud = false;
    let verNotasLaboratorio = false;
    let agregarNotasLaboratorio = false;
    let verFio = false;
    let editarFio = false;
    let verDonantes = false;
    let editarDonantes = false;

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 1)
    ) {
      ver = true;
    }
    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 2)
    ) {
      agregar = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 3)
    ) {
      actualizar = true;
    }
    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 4)
    ) {
      eliminar = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 5)
    ) {
      verArchivo = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 6)
    ) {
      agregarArchivo = true;
    }
    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 7)
    ) {
      eliminarArchivo = true;
    }
    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 8)
    ) {
      descargarArchivo = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 9)
    ) {
      verAnotaciones = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 10)
    ) {
      agregarAnotaciones = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 11)
    ) {
      verSeguimientoSolicitud = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 12)
    ) {
      agregarSeguimientoSolicitud = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 13)
    ) {
      verNotasLaboratorio = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 14)
    ) {
      agregarNotasLaboratorio = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 15)
    ) {
      verFio = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 16)
    ) {
      editarFio = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 17)
    ) {
      verDonantes = true;
    }

    if (
      accesosxMenu.find((it) => it.objetoId === objetoId && it.accesoId === 18)
    ) {
      editarDonantes = true;
    }

    let permisos = {
      actualizar,
      ver,
      agregar,
      eliminar,
      verArchivo,
      agregarArchivo,
      eliminarArchivo,
      descargarArchivo,
      verAnotaciones,
      agregarAnotaciones,
      verSeguimientoSolicitud,
      agregarSeguimientoSolicitud,
      verNotasLaboratorio,
      agregarNotasLaboratorio,
      verFio,
      editarFio,
      verDonantes,
      editarDonantes
    };

    return permisos;
  };
  objetoMenu.map(async (data) => {
    miMenu.push({
      id: data.dataValues.objetoId,
      title: data.dataValues.descripcion,
      type: data.dataValues.type,
      url: data.dataValues.url,
      accesos: obtenerAcceso(data.objetoId)
    });
  });
  return miMenu;
};

const accesoXObjeto = async (req) => {
  return (user = await UsuarioRol.findOne({
    include: [
      {
        model: Usuario,
        as: "Usuario",
        attributes: ["usuarioId", "personaId", "usuario", "password", "email"]
      },
      {
        model: Rol,
        as: "modulo",
        attributes: ["rolId", "descripcion", "moduloId", "aplicativoId"]
      }
    ],
    where: sequelize.literal(
      `Usuario.usuarioId = '${req.query.usuarioId}' ` +
        `AND Usuario.estadoId = 1 ` +
        `AND modulo.aplicativoId = 1 `
    )
  }).then(async (userRes) => {
    if (!userRes) {
      throw error("Usuario no existe o esta inactivo", 401);
    }

    const accesos = await itemAccesoXRol(userRes.rolId, req.query.objetoId);
    const data = {
      usuarioId: req.query.usuarioId,
      accesos: accesos
    };
    return data;
  }));
};
const listPermisos = async (req) => {
  return (user = await UsuarioRol.findOne({
    include: [
      {
        model: Usuario,
        as: "Usuario",
        attributes: ["usuarioId", "personaId", "usuario", "password", "email"]
      },
      {
        model: Rol,
        as: "modulo",
        attributes: ["rolId", "descripcion", "moduloId", "aplicativoId"]
      }
    ],
    where: sequelize.literal(
      `Usuario.usuarioId = '${req.query.usuarioId}' ` +
        `AND Usuario.estadoId = 1 ` +
        `AND modulo.aplicativoId = 1 `
    )
  }).then(async (userRes) => {
    if (!userRes) {
      throw error("Usuario no existe o esta inactivo", 401);
    }

    const menu = await itemsMenu(userRes.Usuario.usuarioId);
    const data = {
      usuarioId: userRes.Usuario.usuarioId,
      menu: menu
    };
    return data;
  }));
};

const changeRol = async (req) => {
  console.log(1, req.body.rolId, req.params.usuarioId);
  let usuarioId = req.params.usuarioId;
  let rolId = req.body.rolId;
  //valida que el usuario exista
  const userUpdate = await Usuario.findOne({
    where: {usuarioId: usuarioId}
  });
  if (!userUpdate) {
    throw error("No existe usuario", 400);
  }

  //valida si el rol a asignar existe o esta activo
  const roltoUpdate = await Rol.findOne({
    where: {rolId: rolId, estadoId: 1}
  });
  console.log(2, roltoUpdate);

  if (!roltoUpdate) {
    throw error("Rol no existe o esta inactivo", 400);
  }

  //valida si el usuario ya tiene un rol asignado
  const userRolupdate = await UsuarioRol.findOne({
    where: {usuarioId: usuarioId}
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
          usuarioId: usuarioId
        }
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
      estadoId: 1
    }));
  }
};

const insert = async (req) => {
  req.body.password = bcrypt.hashSync(req.body.password, 7);
  usuario = await Usuario.create(req.body);
  console.log(usuario);
  rol = {
    usuarioId: usuario.usuarioId,
    rolId: req.body.rolId,
    estadoId: 1
  };
  console.log(rol);

  rolUsuario = await UsuarioRol.create(rol);

  return usuario;
};

upsert = async (body) => {
  const user = {
    nombre: body.nombre,
    usuario: body.usuario
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
      password: body.password
    });
  }

  return "";
};

const getInfoUser = async (req) => {
  let {usuarioId} = req.user;
  let userRes = await UsuarioRol.findOne({
    include: [
      {
        model: Usuario,
        as: "Usuario",
        attributes: ["usuarioId", "personaId", "usuario", "password", "email"]
      },
      {
        model: Rol,
        as: "modulo",
        attributes: ["rolId", "descripcion", "moduloId", "aplicativoId"]
      }
    ],
    where: sequelize.literal(
      `Usuario.usuarioId =${usuarioId}
      AND Usuario.estadoId = 1
      AND modulo.aplicativoId = 1`
    )
  });

  const personas = await Persona.findOne({
    where: {personaId: userRes.Usuario.personaId}
  });

  let menuResponse = [
    {
      id: "support",
      title: "Navigation",
      type: "group",
      icon: "icon-support",
      children: await itemsMenu(userRes.Usuario.usuarioId)
    }
  ];

  const item = menuResponse;
  let userInfo = {};
  userInfo.usuarioId = userRes.Usuario.usuarioId;
  userInfo.username = userRes.Usuario.usuario;
  userInfo.nombre = userRes.Usuario.nombre;
  userInfo.forzar_cambio_password = false;
  const data = {
    userInfo,
    menu: item
  };

  return {
    code: 1,
    data
  };
};
module.exports = {
  list,
  change,
  insert,
  changeRol,
  listPermisos,
  accesoXObjeto,
  getInfoUser
};
