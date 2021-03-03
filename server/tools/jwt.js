import jwt from "jsonwebtoken";
const jwtKey =
  "esta_es_mi_clave_ultrasecreta_para_encriptar_los_mensajes_json_web_token";

export const getJsonWebToken = (obj) =>
  jwt.sign(obj, jwtKey, {
    expiresIn: "7d",
  });

export const verifyJsonWebToken = (bearerHeader) => {
  return new Promise((resolve, reject) => {
    const catchCallback = (err) => reject(err);

    //INICIO******************
    //iniciar la verificacion del jwt y el usuario
    if (typeof bearerHeader !== "undefined") {
      const bearerArray = bearerHeader.split(" ");
      const bearerToken = bearerArray[1];
      //verfica el token
      jwt.verify(bearerToken, jwtKey, (err, jwtData) => {
        if (err) {
          catchCallback(err);
        } else {
          resolve(jwtData);
        }
      });
    } else {
      const errorCode = "MissingToken";
      catchCallback({ code: errorCode });
    }
  });
};
