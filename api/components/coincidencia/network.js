const express = require("express");

const response = require("../../../network/response");
const controller = require("./controller");
const upload = require('../../media/multer.config');

const router = express.Router();

const post = (req, res, next) => {
    controller
      .insert(req)
      .then((coincidencia) => {
        response.succes(req, res, coincidencia, 202);
      })
      .catch(next);
  };

  const postDonante = (req, res, next) => {
    controller
      .insertDonante(req)
      .then((donante) => {
        response.succes(req, res, donante, 202);
      })
      .catch(next);
  };

  const postNotaLab = (req, res, next) => {
    controller
      .insertNotaLab(req)
      .then((notaLab) => {
        response.succes(req, res, notaLab, 202);
      })
      .catch(next);
  };

  const postAnotacion = (req, res, next) => {
    controller
      .insertAnotacion(req)
      .then((anotacion) => {
        response.succes(req, res, anotacion, 202);
      })
      .catch(next);
  };

  const postSolSeg = (req, res, next) => {
    controller
      .insertSolSeg(req)
      .then((solicitud) => {
        response.succes(req, res, solicitud, 202);
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
      .then((coincidencia) => {
        response.succes(req, res, coincidencia, 200);
      })
      .catch(next);
  };

  const getDonante = (req, res, next) => {
    controller
      .listDonante(req)
      .then((donante) => {
        response.succes(req, res, donante, 200);
      })
      .catch(next);
  };

  const getNotaLab = (req, res, next) => {
 
    controller
      .listNotaLab(req)
      .then((donante) => {
        response.succes(req, res, donante, 200);
      })
      .catch(next);
  };

  const getAnotacion = (req, res, next) => {
    controller
      .listAnotacion(req)
      .then((anotacion) => {
        response.succes(req, res, anotacion, 200);
      })
      .catch(next);
  };

  const getSolSeg = (req, res, next) => {
    controller
      .listSolicitud(req)
      .then((solicitud) => {
        response.succes(req, res, solicitud, 200);
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

  const getById = (req, res, next) => {
    controller
      .searchById(req)
      .then((coincidencia) => {
        response.succes(req, res, coincidencia, 200);
      })
      .catch(next);
  };

  const getDataFio = (req, res, next) => {
    controller
      .getDataFio(req)
      .then((coincidencia) => {
        response.succes(req, res, coincidencia, 200);
      })
      .catch(next);
  };

  const getFioPDF = (req, res, next) => {
    controller
      .getFioPDF(req)
      .then((coincidencia) => {
        //res.setHeader('Content-Type', 'application/pdf');
        response.succes(req, res, coincidencia, 200);
      })
      .catch(next);
  };

  const getReportePDF = (req, res, next) => {
    controller
      .getReporte(req)
      .then((coincidencia) => {
        response.succes(req, res, coincidencia, 200);
      })
      .catch(next);
  };

  const getFlagIndentificado = (req, res, next) => {
    controller
      .flagIndentificado(req)
      .then((identificado) => {
        response.succes(req, res, identificado, 200);
      })
      .catch(next);
  };

  const put = (req, res, next) => {
    controller
      .change(req)
      .then((coincidencia) => {
        response.succes(req, res, coincidencia, 201);
      })
      .catch(next);
  };

  const putFio = (req, res, next) => {
    controller
      .changeFio(req)
      .then((fio) => {
        response.succes(req, res, fio, 201);
      })
      .catch(next);
  };

  const putDonante = (req, res, next) => {
    controller
      .changeDonante(req)
      .then((donante) => {
        response.succes(req, res, donante, 201);
      })
      .catch(next);
  };

  const putNotaLab = (req, res, next) => {
    controller
      .changeNotaLab(req)
      .then((notaLab) => {
        response.succes(req, res, notaLab, 201);
      })
      .catch(next);
  };

  const putAnotacion = (req, res, next) => {
    controller
      .changeAnotacion(req)
      .then((anotacion) => {
        response.succes(req, res, anotacion, 201);
      })
      .catch(next);
  };

  const putSolSeg = (req, res, next) => {
    controller
      .changeSolicitud(req)
      .then((solicitud) => {
        response.succes(req, res, solicitud, 201);
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

  router.post("/", post);
  router.post("/donante", postDonante);
  router.post("/notaLab", postNotaLab);
  router.post("/anotacion", postAnotacion);
  router.post("/solSeguimiento", postSolSeg);
  router.post("/archivo",upload.single("File"), postArchivo);
  router.post("/deleteArchivo", deleteArchivo);
  router.get("/", get);
  router.get("/donante", getDonante);
  router.get("/notaLab/:coincidenciaId", getNotaLab);
  router.get("/anotacion/:coincidenciaId", getAnotacion);
  router.get("/solSeguimiento/:coincidenciaId", getSolSeg);
  router.get("/documento/:coincidenciaId", getDocus);
  router.get("/archivo", getArchivo);
  router.get("/:coincidenciaId", getById);
  router.get("/dataFIO/:coincidenciaId", getDataFio);
  router.get("/pdfFio/:coincidenciaId", getFioPDF);
  router.get("/reporteCoin/:coincidenciaId", getReportePDF);
  router.get("/flag/:coincidenciaId", getFlagIndentificado);
  router.put("/:coincidenciaId", put);
  router.put("/fio/:coincidenciaId", putFio);
  router.put("/donante/:donanteCoincidenciaId", putDonante);
  router.put("/notaLab/:notaLabGeneticaId", putNotaLab);
  router.put("/anotacion/:anotacionCoincidenciaId", putAnotacion);
  router.put("/solSeguimiento/:solicitudSeguimientoId", putSolSeg);

module.exports = router;
