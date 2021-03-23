import * as React from "react";
import { Button, Box, Dialog, DialogContent, Divider } from "@material-ui/core";
import { Grid, useMediaQuery, IconButton, Typography } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { useTheme } from "@material-ui/core/styles";
import { MdClear } from "react-icons/md";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useStyles } from "./styles";
import IngresoGrid from "./IngresoGrid";
import useSearch from "./useSearch";
import { SearchCliente } from "../../../common";

export default function Toolbar() {
  console.log({ Toolbar: "render" });
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const props = useSearch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSelectedRow = (a) => {
    setOpen(false);
    console.log({ a });
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
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <MdClear size="28px" />
          </IconButton>
        </MuiDialogTitle>
        <Divider />
        <DialogContent style={{ paddingTop: "24px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <SearchCliente {...props.cliente} />
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
                  {...props.desde}
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
                  {...props.hasta}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <IngresoGrid {...{ ...props, onSelectedRow }} />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
