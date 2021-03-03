import * as React from "react";
import { MainForms, BigText, LinkText } from "../../styled";
// import Logo from "../../../images/cardon-iv.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useLogin } from "../../../brlSeguridad/hook";

export default function Alogin(props) {
  const { sendLogin } = useLogin();

  const onClick_pass = () => {
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
      <BigText>Inicio de Sesión</BigText>
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
      <LinkText onClick={onClick_pass}>¿Olvidaste tu Contraseña?</LinkText>
    </MainForms>
  );
}
