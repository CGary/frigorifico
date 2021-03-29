import * as React from "react";
import { useStylesPageMain } from "../../hooks";
import { Container, Grid } from "@material-ui/core";
import Formulario from "./Formulario";
import Tabla from "./Tabla";

export default function Cliente() {
  console.log({ Cliente: "render" });
  const classes = useStylesPageMain();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" style={{ padding: "0" }}>
        <Grid container spacing={3}>
          <Grid item lg={5} md={8} xs={12}>
            <Formulario />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xs={12}>
            <Tabla />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
