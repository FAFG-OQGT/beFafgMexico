const express = require("express");
const response = require("../../../network/response");
const controller = require("./controller");

const router = express.Router();

const get = (req, res, next) => {
  controller
    .list(req)
    .then((usuario) => {
      response.succes(req, res, usuario, 200);
    })
    .catch(next);
};

const getPermisos = (req, res, next) => {
  controller
    .listPermisos(req)
    .then((usuario) => {
      response.succes(req, res, usuario, 200);
    })
    .catch(next);
};
const getAccesoXObjetoId = (req, res, next) => {
  controller
    .accesoXObjeto(req)
    .then((usuario) => {
      response.succes(req, res, usuario, 200);
    })
    .catch(next);
};
const put = (req, res, next) => {
  controller
    .change(req)
    .then((usuario) => {
      response.succes(req, res, usuario, 201);
    })
    .catch(next);
};

const post = (req, res, next) => {
  controller
    .insert(req)
    .then((usuario) => {
      response.succes(req, res, usuario, 202);
    })
    .catch(next);
};

function upsert(req, res, next) {
  controller
    .upsert(req.body)
    .then((usuario) => {
      response.succes(req, res, usuario, 201);
    })
    .catch(next);
}
const putCambioRol = (req, res, next) => {
  controller
    .changeRol(req)
    .then((respose) => {
      response.succes(req, res, respose, 201);
    })
    .catch(next);
};
const getInfo = (req, res, next) => {
  controller
    .getInfoUser(req)
    .then((respose) => {
      response.succes(req, res, respose, 201);
    })
    .catch(next);
};

router.get("/", get);
router.get("/permisos", getPermisos);
router.get("/accesoXId", getAccesoXObjetoId);
router.get("/getInfo", getInfo);
router.put("/:usuarioId", put);
router.put("/cambioRol/:usuarioId", putCambioRol);
router.post("/", post);

module.exports = router;
