import * as React from "react";
import { Card, CardHeader, Divider, CardContent } from "@material-ui/core";
import { TableContainer, Table, TableHead, TableRow } from "@material-ui/core";
import { TableCell, TableBody, Paper, IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { IoTrashOutline } from "react-icons/io5";
// import { MdEdit } from "react-icons/md";
import { useGet } from "../../../brlFaena/hooks";

export default function Listado() {
  const { faenas, deleteFaena } = useGet();
  console.log({
    Listado: "render",
    pepe: faenas.map((item) => {
      console.log(item);
      console.log(item.fecha?.toDate().toLocaleString());
    }),
  });
  return (
    <Card>
      <CardHeader subheader="Mario Cronenmbol" title="RVX1" />
      <Divider />
      <CardContent>
        <Typography variant="body2" component="p">
          {"Cantidad de items: " + faenas.length}
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
              {faenas.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <IconButton
                      style={{ padding: "0" }}
                      color="secondary"
                      onClick={() => deleteFaena(row.id)}
                    >
                      <IoTrashOutline size="28px" />
                    </IconButton>
                  </TableCell>
                  <TableCell>{row.fecha?.toDate().toLocaleString()}</TableCell>
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
