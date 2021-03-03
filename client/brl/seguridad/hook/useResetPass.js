import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dialogoState } from "../../../redux/actions";
import { rutaResetPass } from "../rutas";
import { resetpass_mail, resetpass_nohay } from "../msg";
import { errorPeticion } from "../../msgGeneral";

export default () => {
  const { goBack } = useHistory();
  const dispatch = useDispatch();

  const sendMail = async (dsCorreo) => {
    try {
      const response = await rutaResetPass({ dsCorreo });
      if (response.icCorreoEnviado) {
        dispatch({
          type: dialogoState,
          payload: { isVisible: true, content: resetpass_mail },
        });
        goBack();
      } else {
        dispatch({
          type: dialogoState,
          payload: { isVisible: true, content: resetpass_nohay },
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: dialogoState,
        payload: { isVisible: true, content: errorPeticion },
      });
    }
  };

  return {
    sendMail,
  };
};
