import * as React from "react";
import ResetpassView from "./ResetpassView";
import { resetPassController } from "../../controller";

export default function Resetpass({ history }) {
  const sendMail = resetPassController({ history });

  const propsResetpassView = {
    history,
    sendMail,
  };

  return <ResetpassView {...propsResetpassView} />;
}
