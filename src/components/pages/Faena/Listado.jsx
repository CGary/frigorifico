import * as React from "react";
import { Card, CardHeader, Divider, CardContent } from "@material-ui/core";
import { TableContainer, Table, TableHead, TableRow } from "@material-ui/core";
import { TableCell, TableBody, Paper, IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { IoTrashOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useDelete } from "../../../brlFaena";

export default function Listado() {
  const eliminar = useDelete();
  const { arrFaena } = useSelector((state) => state.faenaReducer);
  console.log({ Listado: "render" });

  return (
    <Card>
      <CardHeader subheader="Mario Cronenmbol" title="RVX1" />
      <Divider />
      <CardContent>
        <Typography variant="body2" component="p">
          {"Cantidad de items: " + arrFaena.length}
        </Typography>
        <Divider />
        <TableContainer component={Paper}>
          <Table css={{ minWidth: "340px" }}>
            <TableHead>
              <TableRow>
                <TableCell>Eliminar</TableCell>
                <TableCell>Fecha Hora</TableCell>
                <TableCell align="right">Peso Izquierda</TableCell>
                <TableCell align="right">Peso Derecha</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrFaena.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <IconButton
                      style={{ padding: "0" }}
                      color="secondary"
                      onClick={() => eliminar(row.id)}
                    >
                      <IoTrashOutline size="28px" />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    {row.fecha?.toDate?.().toLocaleString("es-ES")}
                  </TableCell>
                  <TableCell align="right">{row.izq}</TableCell>
                  <TableCell align="right">{row.der}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
