import axios from "axios";
import { toType } from ".";

const baseURL = process.env.BASE_URL;

//genera las peticiones GET POST
export const get = (...params) => request("get", ...params);

export const post = (...params) => request("post", ...params);

const request = (...params) => {
  const method = params.find((e, i) => i == 0);
  const route = params.find((e, i) => i == 1);
  const query = params.find((e, i) => i == 2);

  return new Promise((resolve, rejects) => {
    const thenCallback = (response) => {
      resolve(response.data);
    };

    const cathCallbak = (err) => {
      console.log(err);
      if (err?.response?.data) {
        switch (err.response.data.code) {
          case "TokenExpiredError":
          case "JsonWebTokenError":
          case "NotBeforeError":
          case "MissingToken":
          //removeAuth && removeAuth();
          //return;
          default:
            rejects(err.response.data);
            break;
        }
      } else if (err?.name == "Error") {
        switch (err.message) {
          case "Network Error":
          case "timeout of 0ms exceeded":
            err.code = "Error";
            err.message =
              "No se tiene conectividad con el servidor, intente nuevamente.";
            break;
          case "timeout of 60000ms exceeded":
            err.code = "Error";
            err.message =
              "Tiempo de espera agotado para la petición, intente nuevamente.";
            break;
        }
        rejects(err);
      } else {
        rejects(err);
      }
    };

    const config = {
      method: method,
      url: baseURL + route,
      //agrega un timeout
      timeout: 60000,
      //inserta los parametros segun el verbo
      ...(method == "get" ? { params: query } : { data: query }),
      headers: {
        Accept: "application/json",
        //agrega Json Web Token
        // ...(window.PF.jwt && { Authorization: "Bearer " + window.PF.jwt }),
        //agregar "Conten-Type" si el query del post no es formData
        ...(method == "post" &&
          toType(query) != "formdata" && {
            ["Content-Type"]: "application/json",
          }),
      },
    };

    const send = () => axios(config).then(thenCallback).catch(cathCallbak);

    if (navigator.connection?.type == "none") {
      var contador = 0;
      var intervalId = setInterval(() => {
        if (contador >= 10) {
          clearInterval(intervalId);
          rejects({
            code: "Error",
            message: "No se tiene conectividad a internet en el dispositivo.",
          });
        }
        if (navigator.connection.type != "none") {
          clearInterval(intervalId);
          send();
        }
        contador++;
      }, 400);
    } else {
      send();
    }
  });
};
