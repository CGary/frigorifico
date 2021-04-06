import * as React from "react";
import { Card, CardHeader, Divider, CardContent } from "@material-ui/core";
import { TableContainer, Table, TableHead, TableRow } from "@material-ui/core";
import { TableCell, TableBody, Paper, IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { IoTrashOutline } from "react-icons/io5";
import { getDateUTCToLocalShort, getesESfromDate } from "../../../../tools";

export default function Tabla({ fecha, nombre, cliente, eliminar, arrSource }) {
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
              {arrSource.map((row) => (
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
                    {getesESfromDate(row.fecha?.toDate?.())}
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
  ) : null;
}
