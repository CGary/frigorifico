import "dotenv/config";
import "./services/logger";
import { app, initApp } from "./services/application";
import rutasLogin from "./brlSeguridad/rutas";

const init = async () => {
  try {
    await initApp();
    const rutasApi = [rutasLogin];
    app.use("/api-v1", rutasApi);

    console.log("servidor Inicializado");
  } catch (err) {
    console.log(err);
  }
};

init();
