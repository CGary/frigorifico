import { useSelector, useDispatch } from "react-redux";
import { logout, dialogoState } from "../../../redux/actions";
import { rutaLogout } from "../rutas";
import axios from "axios";
import { errorPeticion } from "../../msgGeneral";

export default () => {
  const dispatch = useDispatch();
  const { cdUsuario, dsUser } = useSelector((state) => state.segReducer);

  const sendLogout = async () => {
    try {
      const response = await rutaLogout({ cdUsuario });

      if (!response.icLogin) {
        delete axios.defaults.headers.common.Authorization;
      }

      dispatch({
        type: logout,
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
    sendLogout,
    cdUsuario,
    dsUser,
  };
};
