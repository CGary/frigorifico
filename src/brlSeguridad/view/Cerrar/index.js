import * as React from "react";
import { logoutController } from "../../controller";

export default function Cerrar() {
  console.log({ Cerrar: "render" });
  const sendLogout = logoutController();

  React.useEffect(() => {
    sendLogout();
  }, []);

  return <div>Cerrando Sesión...</div>;
}
