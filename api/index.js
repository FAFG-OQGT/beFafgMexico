const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
require("../store/mysql");
const router = require('../network/routes');

const app = express();
//SETTINGS
router(app);



app.set("AppName", "FAFG Backend");
app.set("port", process.env.PORT || "3100");

app.use(bodyParser.json());
app.use('/app', express.static('public'));
app.use(cors());
app.listen(app.get("port"), () => {
  console.log(app.get("AppName"), app.get("port"));
  console.log("Servidor en linea!");
});
