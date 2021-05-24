import * as React from "react";
import LoginView from "./LoginView";
import { loginCtrl } from "../../controller";

export default function Login({ history }) {
  console.log({ Login: "render" });
  const sendLogin = loginCtrl();

  const propsLoginView = {
    history,
    sendLogin,
  };
  return <LoginView {...propsLoginView} />;
}
