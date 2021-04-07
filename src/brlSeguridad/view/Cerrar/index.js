import * as React from "react";
import { useLogout } from "../..";

export default function Cerrar() {
  console.log({ Cerrar: "render" });
  const sendLogout = useLogout();

  React.useEffect(() => {
    sendLogout();
  }, []);

  return <div>Cerrando Sesión...</div>;
}
