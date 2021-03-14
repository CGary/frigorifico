import * as React from "react";
import { Button, Box } from "@material-ui/core";

export default function Toolbar() {
  return (
    <Box display="flex" justifyContent="flex-start" pl={3} pb={3}>
      <Button color="primary" variant="contained">
        Buscar Ingreso
      </Button>
    </Box>
  );
}
