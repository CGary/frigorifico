import * as React from "react";
import { TextField, Button, Card, Divider, Grid, Box } from "@material-ui/core";
import { CardContent, FormControlLabel, Checkbox } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
// import { useAdd } from "../../../brlFaena/hooks";

export default function Form() {
  console.log({ Form: "render" });
  // const addFaena = useAdd();
  const handler_onSubmit = (e) => {
    e.preventDefault();
    const cliente = document.getElementById("cliente").value;
    const fecha = document.getElementById("fecha").value;
    const cantidad = document.getElementById("cantidad").value;
    const isLimpieza = document.getElementById("isLimpieza").checked;
    const isTransporte = document.getElementById("isTransporte").checked;
    console.log({ cliente, fecha, cantidad, isLimpieza, isTransporte });
    // addFaena({ izq, der }).then(() => {
    //   document.getElementById("der").value = "";
    //   const inputIzq = document.getElementById("izq");
    //   inputIzq.value = "";
    //   inputIzq.focus();
    // });
  };
  return (
    <Card>
      <CardHeader /* subheader="" */ title="Ingreso" />
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
                label="Cliente"
                id="cliente"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Fecha de Ingreso"
                id="fecha"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Cantidad"
                type="number"
                id="cantidad"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox name="checkedC" color="primary" id="isLimpieza" />
                }
                label="Limpieza"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox name="checkedC" color="primary" id="isTransporte" />
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
