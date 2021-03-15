import * as React from "react";
import { useStylesPageMain } from "../../hooks";
import { Container, Grid } from "@material-ui/core";
import Form from "./Form";

export default function Ingreso() {
  console.log({ Ingreso: "render" });
  const classes = useStylesPageMain();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" style={{ padding: "0" }}>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <Form />
          </Grid>
          {/* <Grid item lg={8} md={6} xs={12}>
            <Listado />
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}
