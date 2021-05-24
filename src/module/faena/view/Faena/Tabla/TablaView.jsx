import * as React from "react";
import { Card, CardHeader, Divider, CardContent } from "@material-ui/core";
import { IconButton, Typography } from "@material-ui/core";
import { Grilla } from "../../../../../components/common";
import { IoTrashOutline } from "react-icons/io5";
import { getDateUTCToLocalShort, getesESfromDate } from "../../../../../tools";

export default function TablaView(props) {
  const { fecha, nombre, cliente, eliminar, arrSource } = props;

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
        name: "Fecha Hora",
        align: "center",
      },
      {
        name: "Peso Izquierda",
        align: "right",
      },
      {
        name: "Peso Derecha",
        align: "right",
      },
    ],
    data: arrSource.map((row) => [
      row.id,
      // eslint-disable-next-line
      <IconButton
        style={{ padding: "0" }}
        color="secondary"
        onClick={() => eliminar({ id: row.id })}
      >
        <IoTrashOutline size="28px" />
      </IconButton>,
      getesESfromDate(row.fecha?.toDate?.()),
      row.izq,
      row.der,
    ]),
  };
  return cliente ? (
    <Card>
      <CardHeader
        subheader={nombre}
        title={getDateUTCToLocalShort(fecha) + " - " + cliente}
      />
      <Divider />
      <CardContent>
        <Typography variant="body2" component="p">
          {"Cantidad de items: " + arrSource.length}
        </Typography>
        <Divider />
        <Grilla {...propsGrilla} />
      </CardContent>
    </Card>
  ) : null;
}
