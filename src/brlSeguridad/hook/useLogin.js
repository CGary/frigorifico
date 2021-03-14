import firebase from "firebase/app";
import { useLoading, useDialogo } from "../../components/common";
const errorPeticion = "error general de peticion";

//     email: "user@example.com",
//     password: "secretPassword",

export default () => {
  const { setLoading } = useLoading();
  const { msgAlert } = useDialogo();

  const sendLogin = async (dsMail, dsPass) => {
    setLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(dsMail, dsPass);
    } catch (err) {
      console.log(err);
      if (err.message) {
        msgAlert({ description: err.message });
      } else {
        msgAlert({ description: errorPeticion });
      }
    }
    setLoading(false);
  };

  return {
    sendLogin,
  };
};
