import * as React from "react";
import Form from "./Form";
import { useLogin } from "../../../brlSeguridad";

export default function Alogin({ history }) {
  console.log({ Alogin: "render" });
  const sendLogin = useLogin();

  const propsForm = {
    history,
    sendLogin,
  };
  return <Form {...propsForm} />;
}
