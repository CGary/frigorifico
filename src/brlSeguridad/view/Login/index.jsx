import * as React from "react";
import LoginView from "./LoginView";
import { loginController } from "../../controller";

export default function Login({ history }) {
  console.log({ Login: "render" });
  const sendLogin = loginController();

  const propsLoginView = {
    history,
    sendLogin,
  };
  return <LoginView {...propsLoginView} />;
}
