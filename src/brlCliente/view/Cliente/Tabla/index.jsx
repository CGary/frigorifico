import * as React from "react";
import TablaView from "./TablaView";
import { deleteController } from "../../../controller";
import { useSelector } from "react-redux";

export default function Tabla() {
  console.log({ Tabla: "render" });
  const eliminar = deleteController();
  const arrCliente = useSelector((state) => state.clienteReducer.arrCliente);

  const propsTablaView = {
    eliminar,
    arrCliente,
  };

  return <TablaView {...propsTablaView} />;
}
