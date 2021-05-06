const jwt = require("jsonwebtoken");
const config = require("../config");
const error = require("../utils/error");
const moment = require("moment");

const secret = config.jwt.secret;

const sign = (data) => {
  console.log("entre al token");
  console.log(data);
  const payload = {
    usuarioId: data,
    createdAt: moment().unix(),
    expireAt: moment().add(5, "minutes").unix(),
  };
  console.log(payload);

  return jwt.sign(payload, secret);
};

const verify = (token) => {
  return jwt.verify(token, secret);
};

const check = {
  own: (req, owner) => {
    const decoded = decodeHeader(req);
    console.log(decoded);

    if (decoded.usuarioId !== owner) {
      throw error("No posee autorizacion para esta operacion", 401);
    }
  },
};

const getToken = (auth) => {
  if (!auth) {
    throw error("No viene token", 401);
  }

  if (auth.indexOf("Bearer ") === -1) {
    throw error("Formato invalido", 401);
  }

  let token = auth.replace("Bearer ", "");

  return token;
};

const decodeHeader = (req) => {
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  const decoded = verify(token);

  req.usuario = decoded;

  return decoded;
};

module.exports = {
  sign,
};
