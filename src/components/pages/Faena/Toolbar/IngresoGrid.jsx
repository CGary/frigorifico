import * as React from "react";
import { TableRow, Table, Paper, TableCell } from "@material-ui/core";
import { TableContainer, TableHead, TableBody } from "@material-ui/core";
import { MdCheck } from "react-icons/md";
import { getDateUTCToLocalShort } from "../../../../tools/formatDate";

export default function IngresoGrid({ source, handlerClickRow }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Código Cliente</TableCell>
            <TableCell align="center">Fecha Ingreso</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="center">Limpieza</TableCell>
            <TableCell align="center">Transporte</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {source.map((row) => (
            <TableRow key={row.id} hover onClick={handlerClickRow(row.id)}>
              <TableCell>{row.cliente}</TableCell>
              <TableCell align="center">
                {getDateUTCToLocalShort(row.fecha)}
              </TableCell>
              <TableCell align="right">{row.cantidad}</TableCell>
              <TableCell align="center">
                {row.isLimpieza && <MdCheck size="28px" />}
              </TableCell>
              <TableCell align="center" color="primary">
                {row.isTransporte && <MdCheck size="28px" />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
