import * as React from "react";
import { Card, CardHeader, Divider, CardContent } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Grilla } from "../../../../components/common";
import { IoTrashOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { getDateUTCToLocalShort } from "../../../../tools";

export default function TablaView({ eliminar, arrRecibo }) {
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
        name: "Nro Recibo",
        align: "right",
      },
      {
        name: "Código Cliente",
      },
      {
        name: "Fecha Recibo",
        align: "center",
      },
      {
        name: "Monto",
        align: "right",
      },
    ],
    data: arrRecibo.map((row) => [
      row.id,
      // eslint-disable-next-line
      <IconButton
        style={{ padding: "0" }}
        color="secondary"
        onClick={() => eliminar({ id: row.id })}
      >
        <IoTrashOutline size="28px" />
      </IconButton>,
      // eslint-disable-next-line
      <IconButton style={{ padding: "0" }} color="primary">
        <MdEdit size="28px" />
      </IconButton>,
      row.recibo,
      row.cliente,
      getDateUTCToLocalShort(row.fecha),
      row.monto,
    ]),
  };
  return (
    <Card>
      <CardHeader title="Listado de Recibos" />
      <Divider />
      <CardContent>
        <Grilla {...propsGrilla} />
      </CardContent>
    </Card>
  );
}
