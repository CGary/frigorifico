import { useDispatch } from "react-redux";
import { login /* , dialogoState */ } from "../../redux/actions";
import firebase from "firebase/app";
const errorPeticion = "error general de peticion";
//     email: "user@example.com",
//     password: "secretPassword",
export default () => {
  const dispatch = useDispatch();

  const sendLogin = async (dsUser, dsPass) => {
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(dsUser, dsPass);

      const { displayName, email, uid } = result.user;

      dispatch({
        type: login,
        payload: {
          icLogin: true,
          displayName,
          email,
          uid,
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
