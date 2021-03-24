import * as React from "react";
import { useSelector } from "react-redux";
import { TableRow, Table, Paper, TableCell } from "@material-ui/core";
import { TableContainer, TableHead, TableBody } from "@material-ui/core";
import { MdCheck } from "react-icons/md";
import { getDateUTCToLocalShort } from "../../../../tools/formatDate";
import { getDateLocalToUTC } from "../../../../tools/formatDate";
import { useSetIngreso } from "../../../../brlFaena";

export default function IngresoGrid({ cliente, desde, hasta, onSelectedRow }) {
  const setIngreso = useSetIngreso();
  const arrIngreso = useSelector((state) => state.ingresoReducer.arrIngreso);
  console.log({ IngresoGrid: "render", desde });

  let matrix = [
    ...arrIngreso.filter((item) => {
      let flagRow = true;

      if (cliente.value != null) {
        flagRow = item.cliente == cliente.value;
      }

      const fDesde = new Date(getDateLocalToUTC(desde.value)).getTime();
      const fHasta = new Date(getDateLocalToUTC(hasta.value)).getTime();
      const fRow = new Date(item.fecha).getTime();
      if (fRow < fDesde || fRow > fHasta) {
        flagRow = false;
      }

      return flagRow;
    }),
  ];

  const handlerClickRow = (idIngreso) => () => {
    onSelectedRow?.();
    setIngreso(arrIngreso.find((row) => row.id === idIngreso));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Código Cliente</TableCell>
            {/* <TableCell>Nombre Cliente</TableCell> */}
            <TableCell align="center">Fecha Ingreso</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="center">Limpieza</TableCell>
            <TableCell align="center">Transporte</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matrix.map((row) => (
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
