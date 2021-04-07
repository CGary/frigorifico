import * as React from "react";
import TablaView from "./TablaView";
import { useDelete } from "../../../../brlIngreso";
import { useSelector } from "react-redux";

export default function Tabla() {
  console.log({ Tabla: "render" });
  const propsTablaView = {
    eliminar: useDelete(),
    arrIngreso: useSelector((state) => state.ingresoReducer.arrIngreso),
  };

  return <TablaView {...propsTablaView} />;
}
