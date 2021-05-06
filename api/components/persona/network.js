const express = require("express");

const response = require("../../../network/response");
const controller = require("./controller");

const router = express.Router();

const get = (req, res, next) => {
  controller
    .list(req)
    .then((persona) => {
      response.succes(req, res, persona, 200);
    })
    .catch(next);
};

const getCombo = (req, res, next) => {
  controller
  .combo(req)
  .then((persona) => {
    response.succes(req, res, persona, 200);
  })
  .catch(next);
}

const post = (req, res, next) => {
  controller
    .insert(req)
    .then((persona) => {
      response.succes(req, res, persona, 202);
    })
    .catch(next);
};

const put = (req, res, next) => {
  controller
    .change(req)
    .then((persona) => {
      response.succes(req, res, persona, 201);
    })
    .catch(next);
};

router.get("/", get);
router.get("/combo/:personaId", getCombo);
router.post("/", post);
router.put("/:personaId", put);

module.exports = router;
