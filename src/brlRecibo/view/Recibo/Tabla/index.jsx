import * as React from "react";
import TablaView from "./TablaView";
import { removeController } from "../../../controller";
import { useSelector } from "react-redux";

export default function Tabla() {
  console.log({ Tabla: "render" });
  const propsTablaView = {
    eliminar: removeController(),
    arrRecibo: useSelector((state) => state.reciboReducer.arrRecibo),
  };
  return <TablaView {...propsTablaView} />;
}
