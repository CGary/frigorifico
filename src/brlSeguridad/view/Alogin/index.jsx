import * as React from "react";
import AloginView from "./AloginView";
import { userLogin } from "../../domain";

export default function Alogin({ history }) {
  console.log({ Alogin: "render" });
  const sendLogin = userLogin();

  const propsAloginView = {
    history,
    sendLogin,
  };
  return <AloginView {...propsAloginView} />;
}
