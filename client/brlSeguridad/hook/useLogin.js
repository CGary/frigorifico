import { useDispatch } from "react-redux";
import { login /* , dialogoState */ } from "../../redux/actions";
// import axios from "axios";
// import { login_fail } from "../msg";
// import { errorPeticion } from "../../msgGeneral";
const errorPeticion = "error general de peticion";
//     email: "user@example.com",
//     emailVerified: false,
//     phoneNumber: "+11234567890",
//     password: "secretPassword",

export default () => {
  const dispatch = useDispatch();

  const sendLogin = async (dsUser, dsPass) => {
    try {
      // dispatch({
      //   type: dialogoState,
      //   payload: { isVisible: true, content: login_fail },
      // });

      // axios.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${response.token}`;
      // console.log({
      //   icLogin: true,
      //   displayName,
      //   email,
      //   emailVerified,
      //   phoneNumber,
      // });
      dispatch({
        type: login,
        payload: {
          icLogin: true,
          dsUser,
          dsPass,
        },
      });
    } catch (err) {
      console.log(err);
      if (err.message) {
        alert(err.message);
      } else {
        alert(errorPeticion);
      }
    }
  };

  return {
    sendLogin,
  };
};
