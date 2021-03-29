import * as React from "react";
import Grilla from "./Grilla";
import { useDelete } from "../../../../brlIngreso";
import { useSelector } from "react-redux";

export default function Tabla() {
  console.log({ Tabla: "render" });
  const propsGrilla = {
    eliminar: useDelete(),
    arrIngreso: useSelector((state) => state.ingresoReducer.arrIngreso),
  };

  return <Grilla {...propsGrilla} />;
}
