import * as React from "react";
import TablaView from "./TablaView";
import { removeReciboCtrl, getAllReciboCtrl } from "../../../controller";

export default function Tabla() {
  console.log({ Tabla: "render" });

  const propsTablaView = {
    eliminar: removeReciboCtrl(),
    arrRecibo: getAllReciboCtrl(),
  };
  return <TablaView {...propsTablaView} />;
}
