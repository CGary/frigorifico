import * as React from "react";
import { useLogout } from "../../../brlSeguridad/hook";

export default function Cerrar() {
  console.log({ Cerrar: "render" });
  const { sendLogout } = useLogout();

  React.useEffect(() => {
    sendLogout();
  });

  return null;
}
