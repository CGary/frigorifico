import * as React from "react";
import { useLogout } from "../../../brlSeguridad/hook";

export default function Home() {
  console.log({ Home: "render" });
  const { sendLogout } = useLogout();

  const handlerClick_logout = () => {
    sendLogout();
  };

  return <button onClick={handlerClick_logout}>Logout</button>;
}
