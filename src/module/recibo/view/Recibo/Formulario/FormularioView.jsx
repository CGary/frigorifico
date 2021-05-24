import * as React from "react";
import { TextField, Button, Card, Divider, Grid, Box } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { CardContent } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { SearchCliente } from "../../../../../components/common";

export default function FormularioView(props) {
  return (
    <Card>
      <CardHeader title="Registro de Recibo" />
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
                {...props.recibo}
              />
            </Grid>
            <Grid item xs={12}>
              <SearchCliente {...props.cliente} />
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
