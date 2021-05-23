import * as React from "react";
import { logoutCtrl } from "../../controller";

export default function Logout() {
  console.log({ Alogout: "render" });
  const sendLogout = logoutCtrl();

  React.useEffect(() => {
    sendLogout();
  }, []);

  return <div>Cerrando Sesión...</div>;
}
