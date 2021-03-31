import firebase from "firebase/app";
import { useLoading, useDialogo } from "../components/common";
import { errorPeticion } from "../tools/msg";
import event from "../tools/event";

export default () => {
  const setLoading = useLoading();
  const { msgAlert } = useDialogo();

  return async (dsMail, dsPass) => {
    event.emit("showLoading");
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
};
