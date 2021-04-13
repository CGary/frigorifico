import * as React from "react";
import TablaView from "./TablaView";
import { removeController, getAllIngresoCtrl } from "../../../controller";

export default function Tabla() {
  console.log({ Tabla: "render" });
  const propsTablaView = {
    eliminar: removeController(),
    arrIngreso: getAllIngresoCtrl(),
  };

  return <TablaView {...propsTablaView} />;
}
