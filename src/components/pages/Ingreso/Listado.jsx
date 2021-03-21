import * as React from "react";
import { Card, CardHeader, Divider, CardContent } from "@material-ui/core";
import { TableContainer, Table, TableHead, TableRow } from "@material-ui/core";
import { TableCell, TableBody, Paper, IconButton } from "@material-ui/core";
// import { Typography } from "@material-ui/core";
import { IoTrashOutline } from "react-icons/io5";
import { MdEdit, MdCheck } from "react-icons/md";
import { getDateUTCToLocalShort } from "../../../tools/formatDate";
import { useDelete } from "../../../brlIngreso/hooks";
import { useSelector } from "react-redux";

export default function Listado() {
  const eliminar = useDelete();
  const { arrIngreso } = useSelector((state) => state.ingresoReducer);
  console.log({ Listado: "render", arrIngreso });
  return (
    <Card>
      <CardHeader title="Listado de Ingresos de Servicios" />
      <Divider />
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Eliminar</TableCell>
                <TableCell>Editar</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell align="center">Fecha Ingreso</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="center">Limpieza</TableCell>
                <TableCell align="center">Transporte</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrIngreso.map((row) => (
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
      </CardContent>
    </Card>
  );
}
