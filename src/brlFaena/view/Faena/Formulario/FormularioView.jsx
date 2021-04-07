import * as React from "react";
import { TextField, Button, Card, Divider, Grid, Box } from "@material-ui/core";
import { CardHeader, CardContent } from "@material-ui/core";
import { getDateUTCToLocalShort } from "../../../../tools";

export default function FormularioView({
  fecha,
  nombre,
  cliente,
  izq,
  der,
  form,
}) {
  return cliente ? (
    <Card>
      <CardHeader
        subheader={nombre}
        title={getDateUTCToLocalShort(fecha) + " - " + cliente}
      />
      <Divider />
      <form autoComplete="off" {...form}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                variant="outlined"
                required
                fullWidth
                {...izq}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth {...der} />
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
  ) : null;
}
