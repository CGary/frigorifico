import express from "express";
import cors from "cors";

export default (app) => {
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
};
