import * as React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { TextField, Button, Card, Divider, Grid, Box } from "@material-ui/core";
import { CardContent, FormControlLabel, Checkbox } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { SearchCliente } from "../../common";
import useIngreso from "./useIngreso";

export default function Form() {
  console.log({ Form: "render" });
  const props = useIngreso();

  return (
    <Card>
      <CardHeader title="Ingreso de Servicio" />
      <Divider />
      <form autoComplete="off" {...props.form}>
        <CardContent>
          <Grid container spacing={3}>
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
                {...props.cantidad}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkedC"
                    color="primary"
                    {...props.isLimpieza}
                  />
                }
                label={props.isLimpieza.label}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkedC"
                    color="primary"
                    {...props.isTransporte}
                  />
                }
                label={props.isTransporte.label}
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
/* <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Cliente
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  readOnly
                  labelWidth={70}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton>
                        <MdSearch size="28px" />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl> */
