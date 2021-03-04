import * as React from "react";
import { MainForms } from "../../styled";
// import Logo from "../../../images/cardon-iv.png";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
// import { useSetPass, useLogout } from "../../../brlSeguridad/hook";

export default function Asetpass() {
  // const { savePass } = useSetPass();
  // const { sendLogout } = useLogout();

  const handler_onSubmit = (e) => {
    e.preventDefault();
    // const pass1 = document.getElementById("pass1").value;
    // const pass2 = document.getElementById("pass2").value;
    // savePass(pass1, pass2);
  };

  const onClick_volver = () => {
    // sendLogout();
  };

  return (
    <MainForms>
      {/* <img src={Logo} /> */}
      <div>logo</div>
      <Typography component="h1" variant="h5">
        Establecer Contraseña
      </Typography>
      <form onSubmit={handler_onSubmit}>
        <TextField
          autoFocus
          variant="outlined"
          required
          fullWidth
          label="Escribe tu nueva contraseña"
          type="password"
          id="pass1"
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Vuelve a escribir tu nueva contraseña"
          type="password"
          id="pass2"
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
