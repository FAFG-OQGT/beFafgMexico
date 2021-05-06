const express = require("express");

const response = require("../../../network/response");
const controller = require("./controller");

const router = express.Router();

const postCoincidencia = (req, res, next) => {
    controller
      .repCoincidencia(req)
      .then((coincidencia) => {
        response.succes(req, res, coincidencia, 202);
      })
      .catch(next);
  };

  const postIdentificadoSmih = (req, res, next) => {
    controller
      .repIdentificadoSmih(req)
      .then((identificado) => {
        response.succes(req, res, identificado, 202);
      })
      .catch(next);
  };

  const postIdentificadoOst = (req, res, next) => {
    controller
      .repIdentificadoOst(req)
      .then((identificado) => {
        response.succes(req, res, identificado, 202);
      })
      .catch(next);
  };

router.post("/coincidencia", postCoincidencia);
router.post("/identificadoSmih", postIdentificadoSmih);
router.post("/identificadoOst", postIdentificadoOst);

module.exports = router;