import firebase from "firebase/app";
const errorPeticion = "error general de peticion";
import { useDialogo } from "../../components/common";

export default () => {
  const { msgAlert } = useDialogo();
  const sendLogout = async () => {
    try {
      firebase.auth().signOut();
    } catch (err) {
      console.log(err);
      msgAlert({ description: errorPeticion });
    }
  };

  return {
    sendLogout,
  };
};
