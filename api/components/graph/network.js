const express = require("express");
const response = require("../../../network/response");
const controller = require("./controller");


const router = express.Router();

const get = (req, res, next) =>{
    controller
    .list(req)
    .then((grafico) => {
      response.succes(req, res, grafico, 200);
    })
    .catch(next);
}

router.get("/:grafico", get);

module.exports = router;