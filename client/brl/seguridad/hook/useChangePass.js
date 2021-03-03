import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { dialogoState } from "../../../redux/actions";
import { rutaChangePass } from "../rutas";
import md5 from "md5";
import { changepass_nomath, changepass_same, changepass_fail } from "../msg";
import { changepass_ok } from "../msg";
import { errorPeticion } from "../../msgGeneral";

export default () => {
  const dispatch = useDispatch();
  const cdUsuario = useSelector((state) => state.segReducer.cdUsuario);
  const { goBack } = useHistory();

  const sendPass = async (dsPass1, dsPass2, dsPass3) => {
    try {
      if (dsPass2 != dsPass3) {
        dispatch({
          type: dialogoState,
          payload: { isVisible: true, content: changepass_nomath },
        });
        return;
      }

      if (dsPass1 === dsPass2) {
        dispatch({
          type: dialogoState,
          payload: { isVisible: true, content: changepass_same },
        });
        return;
      }

      const response = await rutaChangePass({
        cdUsuario,
        dsPassOld: md5(dsPass1),
        dsPassNew: md5(dsPass2),
      });

      if (response.icPassChange) {
        dispatch({
          type: dialogoState,
          payload: { isVisible: true, content: changepass_ok },
        });
        goBack();
      } else {
        dispatch({
          type: dialogoState,
          payload: { isVisible: true, content: changepass_fail },
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
    sendPass,
  };
};
