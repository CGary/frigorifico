import * as React from "react";
import { Button, Box, Dialog, makeStyles } from "@material-ui/core";
import { DialogContent, Grid, TextField } from "@material-ui/core";
import { useMediaQuery, IconButton, Paper } from "@material-ui/core";
import { TableContainer, Table, TableHead, TableRow } from "@material-ui/core";
import { TableCell, TableBody, Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { useTheme } from "@material-ui/core/styles";
import { MdClear, MdCheck } from "react-icons/md";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useSelector } from "react-redux";
import { getDateUTCToLocalShort } from "../../../tools/formatDate";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

export default function Toolbar() {
  console.log({ Toolbar: "render" });
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const { arrIngreso } = useSelector((state) => state.ingresoReducer);
  console.log({ arrIngreso });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [desde, setDesde] = React.useState(null);
  const props = {
    desde: {
      label: "Fecha desde",
      value: desde,
      onChange: (date) => {
        console.log(date);
        setDesde(date);
      },
    },
  };

  return (
    <Box display="flex" justifyContent="flex-start" pl={3} pb={3}>
      <Button color="primary" variant="contained" onClick={handleClickOpen}>
        Buscar Ingreso
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        fullWidth
        maxWidth={false}
      >
        <MuiDialogTitle disableTypography className={classes.root}>
          <Typography variant="h6">Buscar Ingreso</Typography>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <MdClear size="28px" />
          </IconButton>
        </MuiDialogTitle>
        <Divider />
        <DialogContent style={{ paddingTop: "24px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <TextField
                autoFocus
                variant="outlined"
                required
                fullWidth
                label="Cliente"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  fullWidth
                  required
                  // disableToolbar
                  autoOk
                  variant="inline"
                  inputVariant="outlined"
                  format="dd/MM/yyyy"
                  {...props.desde}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  fullWidth
                  required
                  // disableToolbar
                  autoOk
                  variant="inline"
                  inputVariant="outlined"
                  format="dd/MM/yyyy"
                  label="Fecha hasta"
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Código Cliente</TableCell>
                      {/* <TableCell>Nombre Cliente</TableCell> */}
                      <TableCell align="center">Fecha Ingreso</TableCell>
                      <TableCell align="right">Cantidad</TableCell>
                      <TableCell align="center">Limpieza</TableCell>
                      <TableCell align="center">Transporte</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {arrIngreso.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.cliente}</TableCell>
                        <TableCell align="center">
                          {getDateUTCToLocalShort(row.fecha)}
                        </TableCell>
                        <TableCell align="right">{row.cantidad}</TableCell>
                        <TableCell align="center">
                          {row.isLimpieza && <MdCheck size="28px" />}
                        </TableCell>
                        <TableCell align="center" color="primary">
                          {row.isTransporte && <MdCheck size="28px" />}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions> */}
      </Dialog>
    </Box>
  );
}
