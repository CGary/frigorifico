import * as React from "react";
import { TextField, Button, Card, Divider, Grid, Box } from "@material-ui/core";
import { CardHeader, CardContent } from "@material-ui/core";
import useFaena from "./useFaena";

export default function Form() {
  console.log({ Form: "render" });
  const props = useFaena();

  return (
    <Card>
      <CardHeader subheader="Mario Cronenmbol" title="RVX1" />
      <Divider />
      <form autoComplete="off" {...props.form}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                variant="outlined"
                required
                fullWidth
                {...props.izq}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth {...props.der} />
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
