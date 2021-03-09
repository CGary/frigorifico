import * as React from "react";
import { MainForms } from "../../styled";
// import Logo from "../../../images/cardon-iv.png";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { useResetPass } from "../../../brlSeguridad/hook";

export default function Aresetpass(props) {
  const { sendMail } = useResetPass();

  const handler_onSubmit = async (e) => {
    e.preventDefault();

    sendMail(document.getElementById("email").value);
  };

  const onClick_volver = () => props.history.goBack();

  return (
    <MainForms>
      {/* <img src={Logo} /> */}
      <div>logo</div>
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
