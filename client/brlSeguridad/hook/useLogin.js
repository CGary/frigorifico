import { useDispatch } from "react-redux";
import { login, dialogoState } from "../../redux/actions";
import { rutaLogin } from "../rutas";
import axios from "axios";
import { login_fail } from "../msg";
// import { errorPeticion } from "../../msgGeneral";
import md5 from "md5";
const errorPeticion = "error general de peticion";

export default () => {
  const dispatch = useDispatch();

  const sendLogin = async (dsUser, dsPass) => {
    const query = {
      dsUser,
      dsPass: md5(dsPass),
    };
    try {
      const response = await rutaLogin(query);
      if (!response.icLogin) {
        dispatch({
          type: dialogoState,
          payload: { isVisible: true, content: login_fail },
        });
      } else {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.token}`;
      }
      dispatch({
        type: login,
        payload: response,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: dialogoState,
        payload: { isVisible: true, content: errorPeticion },
      });
    }
  };

  return {
    sendLogin,
  };
};
