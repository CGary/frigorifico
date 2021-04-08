import * as React from "react";
import TablaView from "./TablaView";
import { useSelector } from "react-redux";
import { removeController } from "../../../controller";

export default function Tabla() {
  const { fecha, nombre, cliente, refIngreso } = useSelector(
    (state) => state.faenaReducer.faena
  );

  const propsTablaView = {
    fecha,
    nombre,
    cliente,
    eliminar: removeController(),
    arrSource: useSelector((state) => state.faenaReducer.arrFaena).filter(
      (row) => row.refIngreso.id === refIngreso?.id
    ),
  };
  return cliente ? <TablaView {...propsTablaView} /> : null;
}
