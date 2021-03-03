import { useSelector, useDispatch } from "react-redux";
import { setPass, dialogoState } from "../../redux/actions";
import { rutaSetPass } from "../rutas";
import md5 from "md5";
import { setpass_fail, setpass_same, setpass_ok } from "../msg";
// import { errorPeticion } from "../../msgGeneral";
const errorPeticion = "error general de peticion";

export default () => {
  const dispatch = useDispatch();
  const cdUsuario = useSelector((state) => state.segReducer.cdUsuario);

  const savePass = async (dsPass1, dsPass2) => {
    try {
      if (dsPass1 != dsPass2) {
        dispatch({
          type: dialogoState,
          payload: { isVisible: true, content: setpass_same },
        });
        return;
      }

      const response = await rutaSetPass({ cdUsuario, dsPass: md5(dsPass1) });
      if (response.icPassReset) {
        dispatch({
          type: dialogoState,
          payload: { isVisible: true, content: setpass_fail },
        });
      } else {
        dispatch({
          type: dialogoState,
          payload: { isVisible: true, content: setpass_ok },
        });
        dispatch({
          type: setPass,
          payload: response,
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
    savePass,
  };
};
