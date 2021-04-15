import * as React from "react";
import TablaView from "./TablaView";
import { removeController, getListaIngresoCtrl } from "../../../controller";

export default function Tabla() {
  console.log({ Tabla: "render" });
  const propsTablaView = {
    eliminar: removeController(),
    arrIngreso: getListaIngresoCtrl(),
  };

  return <TablaView {...propsTablaView} />;
}
