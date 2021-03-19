import * as React from "react";
import { useState } from "react";
import { TextField, Button, Card, Divider, Grid, Box } from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { CardContent } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { useAdd } from "../../../brlCliente/hooks";

export default function Form() {
  console.log({ Form: "render" });
  const add = useAdd();

  const [codigo, setcodigo] = useState("");
  const [nombre, setnombre] = useState("");
  const [fecha, setfecha] = useState(null);

  const props = {
    codigo: {
      label: "Código Cliente",
      value: codigo,
      onChange: (e) => {
        setcodigo(e.target.value);
      },
    },
    nombre: {
      label: "Nombres",
      value: nombre,
      onChange: (e) => {
        setnombre(e.target.value);
      },
    },
    fecha: {
      label: "Fecha de Ingreso",
      value: fecha,
      onChange: (date) => {
        setfecha(date);
      },
    },
  };

  const resetValues = () => {
    setcodigo("");
    setfecha(null);
    setnombre("");
  };

  const handler_onSubmit = (e) => {
    e.preventDefault();
    const query = {
      codigo,
      nombre,
      fecha,
    };
    // console.log({ query });
    add(query).then(() => {
      resetValues();
    });
  };
  return (
    <Card>
      <CardHeader title="Cliente" />
      <Divider />
      <form autoComplete="off" onSubmit={handler_onSubmit}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                variant="outlined"
                required
                fullWidth
                {...props.codigo}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                {...props.nombre}
              />
            </Grid>
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  fullWidth
                  required
                  autoOk
                  variant="inline"
                  inputVariant="outlined"
                  format="dd/MM/yyyy"
                  {...props.fecha}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-start" p={2}>
          <Button type="submit" variant="contained" color="primary">
            Agregar
          </Button>
        </Box>
      </form>
    </Card>
  );
}
