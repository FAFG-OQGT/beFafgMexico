const express = require("express");
const response = require("../../../network/response");
const controller = require("./controller");

const router = express.Router();

const getById = (req, res, next) => {
    controller
      .searchById(req)
      .then((osamenta) => {
        response.succes(req, res, osamenta, 200);
      })
      .catch(next);
  };

  const get = (req, res, next) => {
    controller
      .list(req)
      .then((osamenta) => {
        response.succes(req, res, osamenta, 200);
      })
      .catch(next);
  };

const post = (req, res, next) => {
  controller
    .insert(req)
    .then((osamenta) => {
      response.succes(req, res, osamenta, 202);
    })
    .catch(next);
};

const put = (req, res, next) => {
  controller
    .change(req)
    .then((osamenta) => {
      response.succes(req, res, osamenta, 201);
    })
    .catch(next);
};

router.post("/", post);
router.get("/", get);
router.get("/:osamentaId", getById);
router.put("/:osamentaId", put);

module.exports = router;
