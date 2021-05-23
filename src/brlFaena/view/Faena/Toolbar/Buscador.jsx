import * as React from "react";
import { Dialog, DialogContent, Divider } from "@material-ui/core";
import { Grid, useMediaQuery, IconButton, Typography } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { useTheme } from "@material-ui/core/styles";
import { MdClear } from "react-icons/md";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useStyles } from "./styles";

export default function Buscador(props) {
  const {
    searchCliente,
    fieldDesde,
    fieldHasta,
    ingresoGrid,
    handleClose,
    open,
  } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen={fullScreen}
      fullWidth
      maxWidth={false}
    >
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h6">Buscar Ingreso</Typography>
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <MdClear size="28px" />
        </IconButton>
      </MuiDialogTitle>
      <Divider />
      <DialogContent style={{ paddingTop: "24px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            {searchCliente()}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                fullWidth
                required
                autoOk
                variant="inline"
                inputVariant="outlined"
                format="dd/MM/yyyy"
                {...fieldDesde}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                fullWidth
                required
                autoOk
                variant="inline"
                inputVariant="outlined"
                format="dd/MM/yyyy"
                {...fieldHasta}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12}>
            {ingresoGrid()}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
