import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import { eventEmitter, loadEvent } from "../tools";
import { useDialogo } from "../components/common";
import { resetpass_mail } from "./msg";
import { errorPeticion } from "../tools/msg";

export default () => {
  const { goBack } = useHistory();
  const { msgAlert } = useDialogo();

  return async (email) => {
    try {
      eventEmitter.emit(loadEvent, true);
      await firebase.auth().sendPasswordResetEmail(email);
      msgAlert({ description: resetpass_mail });
      eventEmitter.emit(loadEvent, false);
      goBack();
    } catch (err) {
      console.log(err);
      if (err.message) {
        msgAlert({ description: err.message });
      } else {
        msgAlert({ description: errorPeticion });
      }
    }
  };
};
