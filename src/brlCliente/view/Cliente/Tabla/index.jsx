import * as React from "react";
import TablaView from "./TablaView";
import { removeClienteCtrl, getAllClienteCtrl } from "../../../controller";

export default function Tabla() {
  console.log({ Tabla: "render" });

  const propsTablaView = {
    eliminar: removeClienteCtrl(),
    arrCliente: getAllClienteCtrl(),
  };

  return <TablaView {...propsTablaView} />;
}
