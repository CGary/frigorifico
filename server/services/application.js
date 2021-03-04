import express from "express";
import cors from "cors";
// import https from "https";
// import fs from "fs";
// import path from "path";

//Inicia express.js
export const app = express();

//certificado para https
// const pfx = path.join(
//   __dirname,
//   "../../https/wildcard_nacionalseguros_com_bo.pfx"
// );
//puerto del servidor
const port = process.env.PORT;

export const initApp = () => {
  return new Promise((resolve) => {
    //inicia el servidor https
    // https
    //   .createServer(
    //     {
    //       pfx: fs.readFileSync(pfx),
    //       passphrase: "a1234567*",
    //     },
    app
      // )
      .listen(port, () => {
        console.log(`https en el puerto: ${port}`);
        resolve();
      });
  });
};

//Permite conexión entrantes de cualquier origen "CORS"
const corsOptions = {
  allowedHeaders: ["Authorization", "Content-Type"],
};
app.options("*", cors(corsOptions));
app.use(cors(corsOptions));

//permite recibir json en el body del POST
app.use(express.json());

//muestra los headers de los usuarios que se conectan al servidor
app.use((req, res, next) => {
  const {
    url,
    headers: { "user-agent": userAgent },
    method,
    query,
    body,
  } = req;
  global.log("tools/appConfig.js", "info", {
    url,
    method,
    query,
    body,
    userAgent,
  });
  next();
});

//raiz
app.get("/", (req, res) => {
  res.status(200).json({
    name: "Servidor Middleware",
    date: new Date().toISOString(),
  });
});
