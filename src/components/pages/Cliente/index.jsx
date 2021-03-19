import * as React from "react";
import { useStylesPageMain } from "../../hooks";
import { Container, Grid } from "@material-ui/core";
import Form from "./Form";
import Listado from "./Listado";

export default function Cliente() {
  console.log({ Cliente: "render" });
  const classes = useStylesPageMain();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" style={{ padding: "0" }}>
        <Grid container spacing={3}>
          <Grid item lg={5} md={8} xs={12}>
            <Form />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xs={12}>
            <Listado />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
