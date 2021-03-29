import * as React from "react";
import Grilla from "./Grilla";
import { useDelete } from "../../../../brlCliente";
import { useSelector } from "react-redux";

export default function Tabla() {
  console.log({ Tabla: "render" });
  const eliminar = useDelete();
  const arrCliente = useSelector((state) => state.clienteReducer.arrCliente);

  const propsGrilla = {
    eliminar,
    arrCliente,
  };

  return <Grilla {...propsGrilla} />;
}
