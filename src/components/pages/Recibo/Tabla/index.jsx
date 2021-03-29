import * as React from "react";
import Grilla from "./Grilla";
import { useDelete } from "../../../../brlRecibo";
import { useSelector } from "react-redux";

export default function Tabla() {
  console.log({ Tabla: "render" });
  const propsGrilla = {
    eliminar: useDelete(),
    arrRecibo: useSelector((state) => state.reciboReducer.arrRecibo),
  };
  return <Grilla {...propsGrilla} />;
}
