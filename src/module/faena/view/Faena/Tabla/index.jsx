import * as React from "react";
import TablaView from "./TablaView";
import { removeFaenaCtrl, getFaenaByIngresoCtrl } from "../../../controller";

export default function Tabla() {
  const { fecha, nombre, cliente, arrFaena } = getFaenaByIngresoCtrl();

  const propsTablaView = {
    fecha,
    nombre,
    cliente,
    eliminar: removeFaenaCtrl(),
    arrSource: arrFaena,
  };
  return cliente ? <TablaView {...propsTablaView} /> : null;
}
