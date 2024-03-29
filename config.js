module.exports = {
  api: {
    port: process.env.API_PORT || 3100
  },
  jwt: {
    secret:
      process.env.JWT_SECRET ||
      "f1d6894d4c79347d8dc6370d59b700fc1afea9c18a2bab99284d409affee07b4"
  },
  mysql: {
    database: "dbMexicopreprodu",
    username: "admin",
    password: "OQSolutionsTest",
    host: "oqdbtest.com7uudac4ow.us-east-2.rds.amazonaws.com",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  resetPass: {
    emisor: "oqsolutionsgt@gmail.com",
    nombreEmpresa: "CRIH Mexico",
    direccionEmpresa: "MEXICO",

    urlLogoEmpresa: "https://crih.qosolutionsgt.com/CRIHLOGO.png",
    urlImgFooter: "https://crih.qosolutionsgt.com/imagePassword.jpg",
    urlWebResetPassWord: "https://crih.qosolutionsgt.com/auth/update-password/",
    minutosVigenciaEnlace: 10,
    emailDefault: "oqsolutionsgt@gmail.com"
  },
  correos: {
    creacionCoincidencia: "bertoni.giron@fafg.org",
    creacionSolicitudSeguimiento:
      "bertoni.giron@fafg.org;marco.garcia@fafg.org;",
    default: "bertoni.giron@fafg.org"
  },
  emailConfig: {
    email: "oqsolutionsgt@gmail.com",
    passEmail: "sxwokrvgzdpkdiqr"
  },
  optionsHtmlPdf: {
    //port: 9222,
    //chromeFlags: [
    //  "--disable-web-security",
    //  "--user-data-dir",
    //  "https://google.com"
    //]
  },
  s3Params: {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    Bucket: "crihproducoahuila",
    Region: "us-east-1"
  }
};
