import firebase from "firebase/app";
import { useDialogo } from "../components/common";
import { errorPeticion } from "../tools/msg";

export default () => {
  const { msgAlert } = useDialogo();

  return async () => {
    try {
      firebase.auth().signOut();
    } catch (err) {
      console.log(err);
      msgAlert({ description: errorPeticion });
    }
  };
};
