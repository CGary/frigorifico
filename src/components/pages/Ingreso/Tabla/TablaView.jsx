import * as React from "react";
import { Card, CardHeader, Divider, CardContent } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Grilla } from "../../../common";
import { IoTrashOutline } from "react-icons/io5";
import { MdEdit, MdCheck } from "react-icons/md";
import { getDateUTCToLocalShort } from "../../../../tools";

export default function TablaView({ eliminar, arrIngreso }) {
  const propsGrilla = {
    columns: [
      {
        visible: false,
      },
      {
        name: "Eliminar",
        align: "center",
      },
      {
        name: "Editar",
        align: "center",
      },
      {
        name: "Cliente",
      },
      {
        name: "Ingreso",
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
    data: arrIngreso.map((row) => [
      row.id,
      // eslint-disable-next-line
      <IconButton
        style={{ padding: "0" }}
        color="secondary"
        onClick={() => eliminar(row.id)}
      >
        <IoTrashOutline size="28px" />
      </IconButton>,
      // eslint-disable-next-line
      <IconButton style={{ padding: "0" }} color="primary">
        <MdEdit size="28px" />
      </IconButton>,
      row.cliente,
      getDateUTCToLocalShort(row.fecha),
      row.cantidad,
      row.isLimpieza && <MdCheck size="28px" />,
      row.isTransporte && <MdCheck size="28px" />,
    ]),
  };
  return (
    <Card>
      <CardHeader title="Listado de Ingresos de Servicios" />
      <Divider />
      <CardContent>
        <Grilla {...propsGrilla} />
      </CardContent>
    </Card>
  );
}
