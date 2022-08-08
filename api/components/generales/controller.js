var sequelize = require("sequelize");
const pdf = require("html-pdf-chrome");
const moment = require("moment");
const controllerArchivo = require("../archivo/controller");
var stream = require("stream");
const { getFileFromPath } = require("../../functions/fileFunction");
const error = require("../../../utils/error");
const email = require("../mail/controller");
const config = require("../../../config");
const {
    IdentificadoOst,
    Genero,
    GrupoEtario,
    GrupoEtnolinguistico,
    Estado,
    Usuario,
    Osamenta,
    Victima,
    TipoCasoDid,
    Municipio,
    Departamento,
    Documento,
    RepoDoc,
    IdentificadoOstDocumento,
    Token,
    Puesto,
} = require("../../../store/mysql");


/*
const insertIdentificadoOstArchivo = async (vals) => {
    return (archivo = await IdentificadoOstDocumento.create(vals));
};

const updateIdentificadoOstArchivo = async (key, id) => {
    return (archivo = await IdentificadoOstDocumento.update(
        { estadoId: 3 },
        {
            where: {
                identificadoOstId: id,
                urlDocumento: key,
            },
        }
    ));
};


const deleteArchivo = async (req) => {
    console.log(req.body.key);
    return controllerArchivo
        .doDeleteFile(req.body.key)
        .then((file) => {
            return updateIdentificadoOstArchivo(
                req.body.key,
                req.body.identificadoOstId
            );
        })
        .catch((err) => {
            throw error(err, 400);
        });
};


const getArchivo = async (req) => {
    console.log(req.query.key);
    return controllerArchivo
        .doGetFile(req.query.key)
        .then((file) => {
            return file;
        })
        .catch((err) => {
            throw error(err, 400);
        });
};


const listArchivo = async (req) => {
    return (archivos = await IdentificadoOstDocumento.findAll({
        include: [
            {
                model: Documento,
                as: "Documento",
                include: [
                    {
                        model: RepoDoc,
                        as: "RepoDoc",
                        attributes: {
                            exclude: ["fechaHoraIngreso"],
                        },
                    },
                ],
                attributes: {
                    exclude: ["estadoId", "fechaHoraIngreso"],
                },
            },
            {
                model: Estado,
                as: "Estado",
                attributes: {
                    exclude: ["fechaHoraIngreso"],
                },
            },
            {
                model: Usuario,
                as: "Usuario",
                attributes: {
                    exclude: [
                        "estadoId",
                        "fechaHoraIngreso",
                        "password",
                        "personaId",
                        "email",
                        "firmaUsuario",
                    ],
                },
            },
        ],
        where: {
            identificadoOstId: req.params.identificadoOstId,
            estadoId: 1,
        },
    }));
};

*/


const getFolder = async (pDocumentoId) => {
    const folder = await Documento.findAll({
        include: [
            {
                model: RepoDoc,
                as: "RepoDoc",
                attributes: {
                    exclude: ["fechaHoraIngreso"],
                },
            },
        ],
        where: {
            documentoId: pDocumentoId,
            estadoId: 1,
        },
    });
    var path;
    folder.map((data) => {
        path = data.RepoDoc.path;
    });

    return path;
};

const insertArchivo = async (req) => {
    const folder = await getFolder(req.body.documentoId);
    return controllerArchivo
        .doUpload(folder, req.file.originalname, req.file.mimetype, req.file.buffer)
        .then((bucket) => {
            const valores = {
                identificadoOstId: req.body.identificadoOstId,
                documentoId: req.body.documentoId,
                urlDocumento: bucket.Key,
                eTag: bucket.ETag,
                mimetype: req.file.mimetype,
                usuarioIngresoId: req.body.usuarioIngresoId,
                estadoId: 1,
            };
            return insertIdentificadoOstArchivo(valores);
        })
        .catch((err) => {
            throw error(err, 400);
        });
};





module.exports = {

    insertArchivo,
    getArchivo,
    listArchivo,
    deleteArchivo,
};
