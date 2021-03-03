import express from "express";
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
