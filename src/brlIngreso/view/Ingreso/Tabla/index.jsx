import * as React from "react";
import TablaView from "./TablaView";
import { removeIngresoCtrl, getAllIngresoCtrl } from "../../../controller";

export default function Tabla() {
  console.log({ Tabla: "render" });
  const { arrIngreso, getListaIngreso } = getAllIngresoCtrl();
  const propsTablaView = {
    eliminar: removeIngresoCtrl(),
    arrIngreso,
    onUpdate: () => () => getListaIngreso(),
  };

  return <TablaView {...propsTablaView} />;
}
