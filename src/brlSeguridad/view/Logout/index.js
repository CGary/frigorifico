import * as React from "react";
import { logoutController } from "../../controller";

export default function Logout() {
  console.log({ Alogout: "render" });
  const sendLogout = logoutController();

  React.useEffect(() => {
    sendLogout();
  }, []);

  return <div>Cerrando Sesión...</div>;
}
