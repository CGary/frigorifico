import * as React from "react";
import { Grilla } from "../../../../../components/common";
import { MdCheck } from "react-icons/md";
import { getDateUTCToLocalShort } from "../../../../../tools";

export default function TablaView({ source, rowClick }) {
  const propsGrilla = {
    columns: [
      {
        visible: false,
      },
      {
        name: "Código Cliente",
      },
      {
        name: "Fecha Ingreso",
        align: "center",
      },
      {
        name: "Cantidad",
        align: "right",
      },
      {
        name: "Limpieza",
        align: "center",
      },
      {
        name: "Transporte",
        align: "center",
      },
    ],
    data: source.map((row) => [
      row.id,
      row.cliente,
      getDateUTCToLocalShort(row.fecha),
      row.cantidad,
      row.isLimpieza && <MdCheck size="28px" />,
      row.isTransporte && <MdCheck size="28px" />,
    ]),
    hover: true,
    rowClick,
  };
  return <Grilla {...propsGrilla} />;
}
