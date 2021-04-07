import * as React from "react";
import { MainForms } from "../../styled";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

export default function AresetpassView({ history, sendMail }) {
  const handler_onSubmit = async (e) => {
    e.preventDefault();
    sendMail(document.getElementById("email").value);
  };

  const onClick_volver = () => history.goBack();

  return (
    <MainForms>
      <Typography component="h1" variant="h5">
        Reiniciar Contraseña
      </Typography>
      <form onSubmit={handler_onSubmit}>
        <TextField
          autoFocus
          variant="outlined"
          required
          fullWidth
          label="Correo Electrónico"
          type="email"
          id="email"
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Enviar
        </Button>
      </form>
      <Link href="#" variant="body1" onClick={onClick_volver}>
        Volver
      </Link>
    </MainForms>
  );
}
