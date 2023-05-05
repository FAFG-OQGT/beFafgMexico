const AWS = require("aws-sdk");
const config = require("../../config");

const s3Params = config.s3Params;

const s3Client = new AWS.S3({
  accessKeyId: s3Params.accessKeyId,
  secretAccessKey: s3Params.secretAccessKey,
  Bucket: s3Params.Bucket,
  Region: s3Params.Region,
});

const uploadParams = {
  Bucket: s3Params.Bucket,
  Key: "", // Se pasa el id
  Body: null, // Se pasa el body
  ContentType: null, //pasamos el tipo de archivo
};

const getParams = {
  Bucket: s3Params.Bucket,
  Key: "", // Se pasa el id
};

const s3 = {};
s3.s3Client = s3Client;
s3.uploadParams = uploadParams;
s3.getParams = getParams;
s3.s3Params = s3Params;
module.exports = s3;
