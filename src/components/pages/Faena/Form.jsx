import * as React from "react";
import { TextField, Button, Card, Divider, Grid, Box } from "@material-ui/core";
import { CardHeader, CardContent } from "@material-ui/core";

export default function Form() {
  const handler_onSubmit = (e) => {
    e.preventDefault();
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
                variant="outlined"
                required
                fullWidth
                label="Peso Izquierda"
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Peso Derecha"
                type="number"
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
