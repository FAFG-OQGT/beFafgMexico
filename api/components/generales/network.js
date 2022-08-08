const express = require("express");

const response = require("../../../network/response");
const controller = require("./controller");
const upload = require('../../media/multer.config');

const router = express.Router();



const postArchivo = (req, res, next) => {
    controller
        .insertArchivo(req)
        .then((archivo) => {
            response.succes(req, res, archivo, 202);
        })
        .catch(next);
};

const deleteArchivo = (req, res, next) => {
    controller
        .deleteArchivo(req)
        .then((archivo) => {
            response.succes(req, res, archivo, 201);
        })
        .catch(next);
}
const getArchivo = (req, res, next) => {
    controller
      .getArchivo(req)
      .then((archivo) => {
        response.succes(req, res, archivo, 200);
      })
      .catch(next);
  };


  const getDocus = (req, res, next) => {
    controller
      .listArchivo(req)
      .then((documentos) => {
        response.succes(req, res, documentos, 200);
      })
      .catch(next);
  };

router.post("/archivo", upload.single("File"), postArchivo);
router.get("/archivo", getArchivo);
router.post("/deleteArchivo", deleteArchivo);
router.get("/documento/:identificadoOstId", getDocus);
module.exports = router;
