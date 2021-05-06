const express = require("express");
const passport = require('passport');
const response = require("../../../network/response");
const controller = require("./controller");
const { compareSync } = require("bcrypt");
const router = express.Router();
require('../../../auth/strategies')(passport);

router.post("/loginFirst", (req, res) => {
  controller
    .logToken(req)
    .then((token) => {
      response.succes(req, res, token, 200);
    })
    .catch((e) => {
      response.error(req, res, e.message, 400);
    });
});

router.post("/login", (req, res) => {
  controller
    .login(req)
    .then((token) => {
      response.succes(req, res, token, 200);
    })
    .catch((e) => {
      response.error(req, res, e.message, 400);
    });
});

router.put("/changePass",passport.authenticate('jwt',{session: false}),(req,res)=>{
  controller.changePass(req)
  .then((change)=>{
    response.succes(req, res, change,201);
  })
  .catch((e) => {
    response.error(req, res, e.message, 400);
  });
});

router.put("/changePassAdmin",passport.authenticate('jwt',{session: false}),(req,res)=>{
  controller.changePassAdmin(req)
  .then((change)=>{
    response.succes(req, res, change,201);
  })
  .catch((e) => {
    response.error(req, res, e.message, 400);
  });
});

module.exports = router;
