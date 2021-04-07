import * as React from "react";
import AresetpassView from "./AresetpassView";
import { resetPassController } from "../../controller";

export default function Aresetpass({ history }) {
  const sendMail = resetPassController();

  const propsAresetpassView = {
    history,
    sendMail,
  };

  return <AresetpassView {...propsAresetpassView} />;
}
