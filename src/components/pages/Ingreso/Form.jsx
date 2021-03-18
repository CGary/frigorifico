import * as React from "react";
import { useState } from "react";
import { TextField, Button, Card, Divider, Grid, Box } from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { CardContent, FormControlLabel, Checkbox } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { useAdd } from "../../../brlIngreso/hooks";

export default function Form() {
  console.log({ Form: "render" });
  const addIngreso = useAdd();

  const [cliente, setcliente] = useState("");
  const [fecha, setfecha] = useState(null);
  const [cantidad, setcantidad] = useState("");
  const [isLimpieza, setisLimpieza] = useState(false);
  const [isTransporte, setisTransporte] = useState(false);

  const props = {
    cliente: {
      label: "Cliente",
      value: cliente,
      onChange: (e) => {
        setcliente(e.target.value);
      },
    },
    cantidad: {
      type: "number",
      label: "Cantidad",
      value: cantidad,
      onChange: (e) => {
        setcantidad(e.target.value);
      },
    },
    fecha: {
      label: "Fecha",
      value: fecha,
      onChange: (date) => {
        setfecha(date);
      },
    },
    isLimpieza: {
      onChange: (e) => {
        setisLimpieza(e.target.checked);
      },
    },
    isTransporte: {
      onChange: (e) => {
        setisTransporte(e.target.checked);
      },
    },
  };

  const resetValues = () => {
    setcliente("");
    setfecha(null);
    setcantidad("");
    setisLimpieza(false);
    setisTransporte(false);
  };

  const handler_onSubmit = (e) => {
    e.preventDefault();
    const query = {
      cliente,
      fecha,
      cantidad,
      isLimpieza,
      isTransporte,
    };
    // console.log({ query });
    addIngreso(query).then(() => {
      resetValues();
    });
  };
  return (
    <Card>
      <CardHeader title="Ingreso de Servicio" />
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
                {...props.cantidad}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkedC"
                    color="primary"
                    id="isLimpieza"
                    {...props.isLimpieza}
                  />
                }
                label="Limpieza"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkedC"
                    color="primary"
                    id="isTransporte"
                    {...props.isTransporte}
                  />
                }
                label="Transporte"
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
