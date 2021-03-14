import * as React from "react";
import { Card, CardHeader, Divider, CardContent } from "@material-ui/core";
import { TableContainer, Table, TableHead, TableRow } from "@material-ui/core";
import { TableCell, TableBody, Paper, IconButton } from "@material-ui/core";
import { IoTrashOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";

const rows = [
  {
    name: 1,
    izq: 120,
    der: 130,
  },
  {
    name: 2,
    izq: 110,
    der: 130,
  },
  {
    name: 3,
    izq: 100,
    der: 140,
  },
  {
    name: 4,
    izq: 120,
    der: 140,
  },
];

export default function Listado() {
  return (
    <Card>
      <CardHeader subheader="Mario Cronenmbol" title="RVX1" />
      <Divider />
      <CardContent>
        <TableContainer component={Paper}>
          <Table css={{ minWidth: "350px" }}>
            <TableHead>
              <TableRow>
                <TableCell>Eliminar</TableCell>
                <TableCell>Editar</TableCell>
                <TableCell align="right">Peso Izquierda</TableCell>
                <TableCell align="right">Peso Derecha</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <IconButton color="secondary">
                      <IoTrashOutline size="28px" />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary">
                      <MdEdit size="28px" />
                    </IconButton>
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
