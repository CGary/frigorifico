import * as React from "react";
import AloginView from "./AloginView";
import { useLogin } from "../../../brlSeguridad";

export default function Alogin({ history }) {
  console.log({ Alogin: "render" });
  const sendLogin = useLogin();

  const propsAloginView = {
    history,
    sendLogin,
  };
  return <AloginView {...propsAloginView} />;
}
