import "dotenv/config";
import "./services/logger";
import { app, initApp } from "./services/application";
import { appConfig } from "./tools";

const init = async () => {
  try {
    await initApp();
    appConfig(app);
    // const rutasApi = [];
    // app.use("/api-v1", rutasApi);

    console.log("servidor Inicializado");
  } catch (err) {
    console.log(err);
  }
};

init();
