const express = require("express");

const response = require("../../../network/response");
const controller = require("./controller");
const upload = require("../../media/multer.config");

const router = express.Router();

const post = (req, res, next) => {
  controller
    .insert(req)
    .then((identificado) => {
      response.succes(req, res, identificado, 202);
    })
    .catch(next);
};

const postConfirm = (req, res, next) => {
  controller
    .confirmInsert(req)
    .then((identificado) => {
      response.succes(req, res, identificado, 202);
    })
    .catch(next);
};

const postArchivo = (req, res, next) => {
  controller
    .insertArchivo(req)
    .then((archivo) => {
      response.succes(req, res, archivo, 202);
    })
    .catch(next);
};

const getArchivo = (req, res, next) => {
  console.log("pasa");
  controller
    .getArchivo(req)
    .then((archivo) => {
      response.succes(req, res, archivo, 200);
    })
    .catch(next);
};

const get = (req, res, next) => {
  controller
    .list(req)
    .then((identificado) => {
      response.succes(req, res, identificado, 200);
    })
    .catch(next);
};

const getById = (req, res, next) => {
  controller
    .searchById(req)
    .then((identificado) => {
      response.succes(req, res, identificado, 200);
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

const getReportePDF = (req, res, next) => {
  controller
    .getReporte(req)
    .then((identificado) => {
      response.succes(req, res, identificado, 200);
    })
    .catch(next);
};

const put = (req, res, next) => {
  controller
    .change(req)
    .then((identificado) => {
      response.succes(req, res, identificado, 201);
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
};

router.post("/", post);
router.post("/confirmInsert", postConfirm);
router.post("/archivo", upload.single("File"), postArchivo);
router.post("/deleteArchivo", deleteArchivo);
router.get("/", get);
router.get("/archivo", getArchivo);
router.get("/:identificadoSmihId", getById);
router.get("/reporteIdent/:identificadoSmihId", getReportePDF);
router.get("/documento/:coincidenciaId", getDocus);
router.put("/:identificadoSmihId", put);

module.exports = router;
