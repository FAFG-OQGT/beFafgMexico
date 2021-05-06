const express = require("express");
const response = require("../../../network/response");
const controller = require("./controller");

const router = express.Router();

const get = (req, res, next) =>{
    controller
    .list(req)
    .then((catalogo) => {
      response.succes(req, res, catalogo, 200);
    })
    .catch(next);
}

router.get("/:catalogo", get);
//router.put("/:catalogo/:pk", put);
//router.post("/:catalogo", post);

module.exports = router;