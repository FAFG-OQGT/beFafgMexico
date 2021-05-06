const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const passport = require("passport");
const cors = require("cors");

require("../auth/strategies")(passport);
const usuario = require("../api/components/usuario/network");
const persona = require("../api/components/persona/network");
const catalogo = require("../api/components/catalogo/network");
const osamenta = require("../api/components/osamenta/network");
const victima = require("../api/components/victima/network");
const coincidencia = require("../api/components/coincidencia/network");
const identificadoSmih = require("../api/components/identificadoSmih/network");
const identificadoOst = require("../api/components/identificadoOst/network");
const reporte = require("../api/components/reporte/network");
const archivo = require("../api/components/archivo/network");
const graph = require("../api/components/graph/network");
const auth = require("../api/components/auth/network");
const swaggerDoc = require("../api/swagger.json");
const errors = require("../network/errors");

const routes = function (server) {
  server.use(bodyParser.json());
  server.use(passport.initialize());
  server.use(cors());
  server.use("/auth", auth);
  server.use(
    "/usuario",
    passport.authenticate("jwt", { session: false }),
    usuario
  );
  server.use(
    "/persona",
    passport.authenticate("jwt", { session: false }),
    persona
  );
  server.use(
    "/osamenta",
    passport.authenticate("jwt", { session: false }),
    osamenta
  );
  server.use(
    "/victima",
    passport.authenticate("jwt", { session: false }),
    victima
  );
  server.use(
    "/coincidencia",
    passport.authenticate("jwt", { session: false }),
    coincidencia
  );
  server.use(
    "/coincidencia",
    passport.authenticate("jwt", { session: false }),
    coincidencia
  );
  server.use(
    "/identificadoSmih",
    passport.authenticate("jwt", { session: false }),
    identificadoSmih
  );
  server.use(
    "/identificadoOst",
    passport.authenticate("jwt", { session: false }),
    identificadoOst
  );
  server.use(
    "/catalogo",
    passport.authenticate("jwt", { session: false }),
    catalogo
  );
  server.use(
    "/reporte",
    passport.authenticate("jwt", { session: false }),
    reporte
  );
  server.use(
    "/archivo",
    passport.authenticate("jwt", { session: false }),
    archivo
  );
  server.use(
    "/graph",
    passport.authenticate("jwt", { session: false }),
    graph
  );

  server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  server.use(errors);
};

module.exports = routes;
