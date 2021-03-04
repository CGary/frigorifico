import * as React from "react";
import { MainForms } from "../../styled";
// import Logo from "../../../images/cardon-iv.png";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { useLogin } from "../../../brlSeguridad/hook";

export default function Alogin(props) {
  console.log({ Alogin: "render" });
  const { sendLogin } = useLogin();

  const onClick_pass = (e) => {
    e.preventDefault();
    props.history.push("/Aresetpass");
  };

  const handler_onSubmit = (e) => {
    e.preventDefault();
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    sendLogin(user, pass);
  };

  return (
    <MainForms>
      {/* <img src={Logo} /> */}
      <div>logo</div>
      <Typography component="h1" variant="h5">
        Inicio de Sesión
      </Typography>
      <form onSubmit={handler_onSubmit}>
        <TextField
          autoFocus
          variant="outlined"
          required
          fullWidth
          label="Usuario"
          id="user"
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
