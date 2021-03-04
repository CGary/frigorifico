import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
// import { errorPeticion } from "../../msgGeneral";
const errorPeticion = "error general de peticion";

export default () => {
  const dispatch = useDispatch();

  const sendLogout = async () => {
    try {
      dispatch({
        type: logout,
      });
    } catch (err) {
      console.log(err);
      alert(errorPeticion);
    }
  };

  return {
    sendLogout,
  };
};
