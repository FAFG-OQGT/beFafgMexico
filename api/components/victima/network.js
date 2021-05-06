const express = require("express");
const response = require("../../../network/response");
const controller = require("./controller");

const router = express.Router();

const get = (req, res, next) => {
    controller
      .list(req)
      .then((victima) => {
        response.succes(req, res, victima, 200);
      })
      .catch(next);
  };

  const getById = (req, res, next) => {
    controller
      .searchById(req)
      .then((victima) => {
        response.succes(req, res, victima, 200);
      })
      .catch(next);
  };

  const getPariente = (req, res, next) => {
    controller
      .listPariente(req)
      .then((pariente) => {
        response.succes(req, res, pariente, 200);
      })
      .catch(next);
  };

const post = (req, res, next) => {
  controller
    .insert(req)
    .then((victima) => {
      response.succes(req, res, victima, 202);
    })
    .catch(next);
};

const postPariente = (req, res, next) => {
    controller
      .insertPariente(req)
      .then((pariente) => {
        response.succes(req, res, pariente, 202);
      })
      .catch(next);
  };

  const put = (req, res, next) => {
    controller
      .change(req)
      .then((victima) => {
        response.succes(req, res, victima, 201);
      })
      .catch(next);
  };
  

router.post("/", post);
router.post("/pariente", postPariente);
router.get("/", get);
router.get("/pariente", getPariente);
router.get("/:victimaId", getById);
router.put("/:victimaId", put);

module.exports = router;
