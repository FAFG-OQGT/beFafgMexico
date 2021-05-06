const express = require("express");
const response = require("../../../network/response");
const controller = require("./controller");
const upload = require("../../media/multer.config");

const router = express.Router();

const post = (req, res, next) => {
  controller
    .doUpload(req)
    .then((bucket) => {
      console.log(bucket);
      response.succes(req, res, bucket, 200);
    })
    .catch(next);
};

const get = (req, res, next) => {
  controller
    .doGetFile(req)
    .then((file) => {
      console.log(file);
      response.succes(req, res, file, 200);
    })
    .catch(next);
};

const deleteFile = (req, res, next) => {
  controller
  .doDeleteFile(req)
  .then((file) => {
    console.log(file);
    response.succes(req, res, file, 200);
  })
  .catch(next);
};

router.post("/upload", upload.single("File"), post);
router.post("/delete", deleteFile)
router.get("/getFile", get);

module.exports = router;
