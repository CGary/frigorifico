import * as React from "react";
import { MainForms, BigText, LinkText } from "../../styled";
// import Logo from "../../../images/cardon-iv.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useResetPass } from "../../../brlSeguridad/hook";

export default function Aresetpass(props) {
  const { sendMail } = useResetPass();
  const {
    history: { goBack },
  } = props;

  const handler_onSubmit = async (e) => {
    e.preventDefault();
    sendMail(document.getElementById("email").value);
  };

  const onClick_volver = () => goBack();

  return (
    <MainForms>
      {/* <img src={Logo} /> */}
      <div>logo</div>
      <BigText>Reiniciar Contraseña</BigText>
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
      <LinkText onClick={onClick_volver}>Volver</LinkText>
    </MainForms>
  );
}
