import { useDispatch } from "react-redux";
import { login /* , dialogoState */ } from "../../redux/actions";
// import axios from "axios";
// import { login_fail } from "../msg";
// import { errorPeticion } from "../../msgGeneral";
import { useAuth, useUser } from "reactfire";
const errorPeticion = "error general de peticion";
//     email: "user@example.com",
//     emailVerified: false,
//     phoneNumber: "+11234567890",
//     password: "secretPassword",

export default () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const user = useUser();
  console.log({ user });

  const sendLogin = async (dsUser, dsPass) => {
    try {
      const response = await auth.signInWithEmailAndPassword(dsUser, dsPass);
      // console.log(response);
      const { displayName, email, emailVerified, phoneNumber } = response.user;
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
          displayName,
          email,
          emailVerified,
          phoneNumber,
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
