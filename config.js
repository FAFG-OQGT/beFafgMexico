module.exports = {
  api: {
    port: process.env.API_PORT || 3100,
  },
  jwt: {
    secret:
      process.env.JWT_SECRET ||
      "f1d6894d4c79347d8dc6370d59b700fc1afea9c18a2bab99284d409affee07b4",
  },
  mysql: {
    database: "dbTestMexico",
    username: "admin",
    password: "OQSolutionsTest",
    host: "oqdbtest.com7uudac4ow.us-east-2.rds.amazonaws.com",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  correos: {
    creacionCoincidencia: 'oqsolutionsgt@gmail.com',
    creacionSolicitudSeguimiento: 'oqsolutionsgt@gmail.com',
    default: 'oqsolutionsgt@gmail.com',
  },
  optionsHtmlPdf : {
    
    //port:9222
  },
  s3Params :  {
    accessKeyId: "AKIAYKVW644AWZL5WJHVabc",
    secretAccessKey: "SgTKjssXlXXltT89zKEHrDqqFYxkN77cV/P2DQTZdef",
    Bucket: "oqsolutionstest",
    Region: "us-east-1",
  }
};
