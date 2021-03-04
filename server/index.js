import "dotenv/config";
import "./services/logger";
import { app, initApp } from "./services/application";
import rutasLogin from "./brlSeguridad/rutas";

import * as admin from "firebase-admin";
// import serviceAccount from "../serviceAccountKey.json";

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
const serviceAccount = { pepe: "true" };
try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
  });
} catch (error) {
  console.log({ error });
}

// admin
//   .auth()
//   .createUser({
//     email: "user@example.com",
//     emailVerified: false,
//     phoneNumber: "+11234567890",
//     password: "secretPassword",
//     displayName: "John Doe",
//     disabled: false,
//   })
//   .then((userRecord) => {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log("Successfully created new user:", userRecord);
//   })
//   .catch((error) => {
//     console.log("Error creating new user:", error);
//   });
