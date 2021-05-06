var sequelize = require("sequelize");
const error = require("../../../utils/error");
var stream = require('stream');
const s3 = require('../../media/s3.config');

const doUpload = async (folder, originalname, mimetype, buffer ) => {
    const s3Client = s3.s3Client;
    const params = s3.uploadParams;
    params.Bucket = params.Bucket + "/"+ folder;
    params.Key = originalname;
    params.Body = buffer;
    params.ContentType = mimetype;
    console.log(params);
    
    const s3Upload = s3Client.upload(params).promise();
    return s3Upload
    .then(data =>{
        params.Bucket = s3.s3Params.Bucket
        return data;
    })
    .catch(err => {
        params.Bucket = s3.s3Params.Bucket
        console.error(err);
        throw error("No se pudo subir el archivo", 400);
    })

     
}

const doGetFile = async (key) => {
    console.log('entre');
    const s3Client = s3.s3Client;
    const params = s3.getParams;
    //console.log(req.query);
    params.Key = key;
    console.log(params);
    const s3GetFile = s3Client.getObject(params).promise();

    return s3GetFile
    .then(data =>{
        return data;
    })
    .catch(err => {
        console.error(err);
        throw error("No se pudo cargar archivo", 400);
    })
}

const doDeleteFile = async (key) => {
    console.log('entre Delete');
    const s3Client = s3.s3Client;
    const params = s3.getParams;
    params.Key = key;
    console.log(params);

    const s3DeleteFile = s3Client.deleteObject(params).promise();

    return s3DeleteFile
    .then(data =>{
        return data;
    })
    .catch(err => {
        console.error(err);
        throw error("No se pudo eliminar el archivo", 400);
    })
}


module.exports = {
    doUpload ,
    doGetFile,
    doDeleteFile,

}