import firebase from "firebase/app";
import { useDialogo } from "../components/common";
import { errorPeticion } from "../tools/msg";
import event, {loadingEvent} from "../tools/event";

export default () => {
  //const setLoading = useLoading();
  const { msgAlert } = useDialogo();

  return async (dsMail, dsPass) => {
    event.emit(loadingEvent, true);
    //setLoading(true);
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
    event.emit(loadingEvent, false);
    //setLoading(false);
  };
};
