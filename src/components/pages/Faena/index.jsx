import * as React from "react";
import { useStyles } from "./styles";
import { Container, Grid } from "@material-ui/core";
import Form from "./Form";
import Listado from "./Listado";
import Toolbar from "./Toolbar";

export default function Faena() {
  console.log({ Faena: "render" });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <Form />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <Listado />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
