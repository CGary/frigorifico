import * as React from "react";
import AloginView from "./AloginView";
import { loginController } from "../../controller";

export default function Alogin({ history }) {
  console.log({ Alogin: "render" });
  const sendLogin = loginController();

  const propsAloginView = {
    history,
    sendLogin,
  };
  return <AloginView {...propsAloginView} />;
}
