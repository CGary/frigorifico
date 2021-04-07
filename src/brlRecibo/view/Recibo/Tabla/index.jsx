import * as React from "react";
import TablaView from "./TablaView";
import { useDelete } from "../../../../brlRecibo";
import { useSelector } from "react-redux";

export default function Tabla() {
  console.log({ Tabla: "render" });
  const propsTablaView = {
    eliminar: useDelete(),
    arrRecibo: useSelector((state) => state.reciboReducer.arrRecibo),
  };
  return <TablaView {...propsTablaView} />;
}
