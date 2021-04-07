import * as React from "react";
import { TableContainer, Table, TableHead, TableRow } from "@material-ui/core";
import { TableCell, TableBody, Paper } from "@material-ui/core";

export default function Grilla({ columns = [], data = [], hover, rowClick }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(
              ({ name, visible = true, ...rest }, i) =>
                visible && (
                  <TableCell key={"tableCell-" + i} {...rest}>
                    {name}
                  </TableCell>
                )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row[0]} hover={hover} onClick={rowClick?.(row[0])}>
              {columns.map(
                // eslint-disable-next-line
                ({ name, visible = true, ...rest }, i) =>
                  visible && (
                    <TableCell key={"tableCell-" + i} {...rest}>
                      {row[i]}
                    </TableCell>
                  )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
