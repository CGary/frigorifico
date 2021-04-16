import * as React from "react";
import TablaView from "./TablaView";
import { useSelector } from "react-redux";
import { removeClienteCtrl } from "../../../controller";

export default function Tabla() {
  console.log({ Tabla: "render" });

  const propsTablaView = {
    eliminar: removeClienteCtrl(),
    arrCliente: useSelector((state) => state.clienteReducer.arrCliente),
  };

  return <TablaView {...propsTablaView} />;
}
