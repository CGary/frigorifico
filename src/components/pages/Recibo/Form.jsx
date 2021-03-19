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
import { useAdd } from "../../../brlRecibo/hooks";

export default function Form() {
  console.log({ Form: "render" });
  const add = useAdd();

  const [recibo, setrecibo] = useState("");
  const [cliente, setcliente] = useState("");
  const [fecha, setfecha] = useState(null);
  const [monto, setmonto] = useState("");

  const props = {
    recibo: {
      label: "Nro de Recibo",
      value: recibo,
      onChange: (e) => {
        setrecibo(e.target.value);
      },
    },
    cliente: {
      label: "Cliente",
      value: cliente,
      onChange: (e) => {
        setcliente(e.target.value);
      },
    },
    fecha: {
      label: "Fecha",
      value: fecha,
      onChange: (date) => {
        setfecha(date);
      },
    },
    monto: {
      type: "number",
      label: "Monto",
      value: monto,
      onChange: (e) => {
        setmonto(e.target.value);
      },
    },
  };

  const resetValues = () => {
    setrecibo;
    setcliente("");
    setfecha(null);
    setmonto("");
  };

  const handler_onSubmit = (e) => {
    e.preventDefault();
    const query = {
      recibo,
      cliente,
      fecha,
      monto,
    };

    add(query).then(() => {
      resetValues();
    });
  };
  return (
    <Card>
      <CardHeader title="Registro de Recibo" />
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
                {...props.recibo}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                {...props.cliente}
              />
            </Grid>
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  fullWidth
                  required
                  disableToolbar
                  autoOk
                  variant="inline"
                  inputVariant="outlined"
                  format="dd/MM/yyyy"
                  {...props.fecha}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                {...props.monto}
              />
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
