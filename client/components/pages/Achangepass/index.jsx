import * as React from "react";
import { MainForms, BigText, LinkText } from "../../styled";
// import Logo from "../../../images/cardon-iv.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useChangePass } from "../../../brlSeguridad/hook";

export default function Achangepass(props) {
  const { history } = props;
  const { sendPass } = useChangePass();

  const onSubmit = async (e) => {
    e.preventDefault();
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;
    const pass3 = document.getElementById("pass3").value;
    sendPass(pass1, pass2, pass3);
  };

  const onClick_volver = () => history.goBack();

  return (
    <MainForms>
      {/* <img src={Logo} /> */}
      <div>logo</div>
      <BigText>Cambiar Contraseña</BigText>
      <form onSubmit={onSubmit}>
        <TextField
          autoFocus
          variant="outlined"
          required
          fullWidth
          label="Actual Contraseña"
          type="password"
          id="pass1"
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Nueva contraseña"
          type="password"
          id="pass2"
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Repite tu nueva contraseña"
          type="password"
          id="pass3"
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Cambiar Contraseña
        </Button>
      </form>
      <LinkText onClick={onClick_volver}>Volver</LinkText>
    </MainForms>
  );
}
