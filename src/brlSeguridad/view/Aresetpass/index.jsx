import * as React from "react";
import AresetpassView from "./AresetpassView";
import { useResetPass } from "../..";

export default function Aresetpass({ history }) {
  const sendMail = useResetPass();

  const propsAresetpassView = {
    history,
    sendMail,
  };

  return <AresetpassView {...propsAresetpassView} />;
}
