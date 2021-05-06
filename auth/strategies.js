const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy,
    ExtractJwt = passportJWT.ExtractJwt;

const config = require("../config");
const {Usuario}= require('../store/mysql');

var options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt.secret
};

const strategy = new JwtStrategy(options,(payload, next)=>{
    Usuario.findOne({
        attributes: {
            exclude: [
              "estadoId",
              "fechaHoraIngreso",
              "firmaUsuario"
            ],
          },
        where: {
            usuarioId: payload.usuarioId,
            estadoId: 1
        }
    }).then((userRes) => {
        next(null,userRes);
    });
   });

module.exports =(passport)=>{
    passport.use(strategy);
}