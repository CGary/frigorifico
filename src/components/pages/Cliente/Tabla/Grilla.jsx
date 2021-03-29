import * as React from "react";
import { Card, CardHeader, Divider, CardContent } from "@material-ui/core";
import { TableContainer, Table, TableHead, TableRow } from "@material-ui/core";
import { TableCell, TableBody, Paper, IconButton } from "@material-ui/core";
import { IoTrashOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { getDateUTCToLocalShort } from "../../../../tools/formatDate";

export default function Grilla({ eliminar, arrCliente }) {
  return (
    <Card>
      <CardHeader title="Listado de Clientes" />
      <Divider />
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Eliminar</TableCell>
                <TableCell>Editar</TableCell>
                <TableCell>Código Cliente</TableCell>
                <TableCell>Nombres</TableCell>
                <TableCell align="center">Fecha Ingreso</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrCliente.map((row) => (
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
                    <IconButton style={{ padding: "0" }} color="primary">
                      <MdEdit size="28px" />
                    </IconButton>
                  </TableCell>
                  <TableCell>{row.codigo}</TableCell>
                  <TableCell>{row.nombre}</TableCell>
                  <TableCell align="center">
                    {getDateUTCToLocalShort(row.fecha)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
