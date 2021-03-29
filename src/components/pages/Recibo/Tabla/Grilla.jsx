import * as React from "react";
import { Card, CardHeader, Divider, CardContent } from "@material-ui/core";
import { TableContainer, Table, TableHead, TableRow } from "@material-ui/core";
import { TableCell, TableBody, Paper, IconButton } from "@material-ui/core";
import { IoTrashOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { getDateUTCToLocalShort } from "../../../../tools/formatDate";

export default function Grilla({ eliminar, arrRecibo }) {
  return (
    <Card>
      <CardHeader title="Listado de Recibos" />
      <Divider />
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Eliminar</TableCell>
                <TableCell>Editar</TableCell>
                <TableCell align="right">Nro Recibo</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell align="center">Fecha</TableCell>
                <TableCell align="right">Monto</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrRecibo.map((row) => (
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
                  <TableCell align="right">{row.recibo}</TableCell>
                  <TableCell>{row.cliente}</TableCell>
                  <TableCell align="center">
                    {getDateUTCToLocalShort(row.fecha)}
                  </TableCell>
                  <TableCell align="right">{row.monto}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
