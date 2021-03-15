import * as React from "react";
import { TextField, Button, Card, Divider, Grid, Box } from "@material-ui/core";
import { CardHeader, CardContent } from "@material-ui/core";
import { useAdd } from "../../../brlFaena/hooks";

export default function Form() {
  console.log({ Form: "render" });
  const addFaena = useAdd();
  const handler_onSubmit = (e) => {
    e.preventDefault();
    const inputIzq = document.getElementById("izq");
    const inputDer = document.getElementById("der");
    const izq = inputIzq.value;
    const der = inputDer.value;
    addFaena({ izq, der }).then(() => {
      inputDer.value = "";
      inputIzq.value = "";
      inputIzq.focus();
    });
  };
  return (
    <Card>
      <CardHeader subheader="Mario Cronenmbol" title="RVX1" />
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
                label="Peso Izquierda"
                type="number"
                id="izq"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Peso Derecha"
                type="number"
                id="der"
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
