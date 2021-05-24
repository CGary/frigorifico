import * as React from "react";
import { useStylesPageMain } from "../../../../components/hooks";
import { Container, Grid } from "@material-ui/core";
import Formulario from "./Formulario";
import Tabla from "./Tabla";
import Toolbar from "./Toolbar";

export default function Faena() {
  console.log({ Faena: "render" });
  const classes = useStylesPageMain();

  return (
    <div className={classes.root}>
      <Toolbar />
      <Container maxWidth="lg" style={{ padding: "0" }}>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <Formulario />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <Tabla />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
