import * as React from "react";
import { Card, CardHeader, Divider, CardContent } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Grilla } from "../../../../../components/common";
import { IoTrashOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { getDateUTCToLocalShort } from "../../../../../tools";

export default function TablaView({ eliminar, arrCliente }) {
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
        name: "Código Cliente",
      },
      {
        name: "Nombre",
      },
      {
        name: "Fecha Ingreso",
        align: "center",
      },
    ],
    data: arrCliente.map((row) => [
      row.id,
      // eslint-disable-next-line
      <IconButton
        style={{ padding: "0" }}
        color="secondary"
        onClick={() => eliminar({ idCliente: row.id })}
      >
        <IoTrashOutline size="28px" />
      </IconButton>,
      // eslint-disable-next-line
      <IconButton style={{ padding: "0" }} color="primary">
        <MdEdit size="28px" />
      </IconButton>,
      row.codigo,
      row.nombre,
      getDateUTCToLocalShort(row.fecha),
    ]),
  };
  return (
    <Card>
      <CardHeader title="Listado de Clientes" />
      <Divider />
      <CardContent>
        <Grilla {...propsGrilla} />
      </CardContent>
    </Card>
  );
}
