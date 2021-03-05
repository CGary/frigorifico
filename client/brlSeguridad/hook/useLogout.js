import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import firebase from "firebase/app";
// import { errorPeticion } from "../../msgGeneral";
const errorPeticion = "error general de peticion";

export default () => {
  const dispatch = useDispatch();

  const sendLogout = async () => {
    try {
      firebase.auth().signOut();
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
