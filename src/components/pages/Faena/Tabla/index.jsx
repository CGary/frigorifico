import * as React from "react";
import Grilla from "./Grilla";
import { useSelector } from "react-redux";
import { useDelete } from "../../../../brlFaena";

export default function Tabla() {
  const { fecha, nombre, cliente, refIngreso } = useSelector(
    (state) => state.faenaReducer.faena
  );

  const propsGrilla = {
    fecha,
    nombre,
    cliente,
    eliminar: useDelete(),
    arrSource: useSelector((state) => state.faenaReducer.arrFaena).filter(
      (row) => row.refIngreso.id === refIngreso?.id
    ),
  };
  return cliente ? <Grilla {...propsGrilla} /> : null;
}
