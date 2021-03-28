import * as React from "react";
import { MainForms } from "../../styled";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

export default function Form({ history, sendLogin }) {
  const onClick_pass = (e) => {
    e.preventDefault();
    history.push("/resetpass");
  };

  const handler_onSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    sendLogin(email, pass);
  };

  return (
    <MainForms>
      <Typography component="h1" variant="h5">
        Inicio de Sesión
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
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Contraseña"
          type="password"
          id="pass"
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Iniciar Sesión
        </Button>
      </form>
      <Link href="#" variant="body1" onClick={onClick_pass}>
        ¿Olvidaste tu Contraseña?
      </Link>
    </MainForms>
  );
}
