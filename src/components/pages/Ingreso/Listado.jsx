import * as React from "react";
import { Card, CardHeader, Divider, CardContent } from "@material-ui/core";
import { TableContainer, Table, TableHead, TableRow } from "@material-ui/core";
import { TableCell, TableBody, Paper, IconButton } from "@material-ui/core";
// import { Typography } from "@material-ui/core";
import { IoTrashOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
// import { useGet } from "../../../brlFaena/hooks";

export default function Listado() {
  // const { faenas, deleteFaena } = useGet();
  const clientes = [];
  console.log({
    Listado: "render",
  });
  return (
    <Card>
      <CardHeader title="Clientes" />
      <Divider />
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Eliminar</TableCell>
                <TableCell>Editar</TableCell>
                <TableCell>Código</TableCell>
                <TableCell>Fecha Ingreso</TableCell>
                <TableCell>Cantidad</TableCell>
                <TableCell>Limpieza</TableCell>
                <TableCell>Transporte</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clientes.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <IconButton style={{ padding: "0" }} color="secondary">
                      <IoTrashOutline size="28px" />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton style={{ padding: "0" }} color="primary">
                      <MdEdit size="28px" />
                    </IconButton>
                  </TableCell>
                  <TableCell>{row.fecha?.toDate().toLocaleString()}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
