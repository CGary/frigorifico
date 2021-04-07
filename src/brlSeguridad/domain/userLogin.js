import firebase from "firebase/app";
import { useDialogo } from "../../components/common";
import { eventEmitter, loadEvent, errorPeticion } from "../../tools";

export default () => {
  const { msgAlert } = useDialogo();

  return async (dsMail, dsPass) => {
    eventEmitter.emit(loadEvent, true);
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
    eventEmitter.emit(loadEvent, false);
  };
};
