import * as React from "react";
import Form from "./Form";
import { useResetPass } from "../../../brlSeguridad";

export default function Aresetpass({ history }) {
  const sendMail = useResetPass();

  const propsForm = {
    history,
    sendMail,
  };

  return <Form {...propsForm} />;
}
