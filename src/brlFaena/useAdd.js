import firebase from "firebase/app";
import { eventEmitter, loadEvent } from "../tools";
import { useDialogo } from "../components/common";
import { useSelector } from "react-redux";
import { errorPeticion } from "../tools";
import { faena } from "../firebase";

export default () => {
  const { msgAlert } = useDialogo();
  const uidUser = useSelector((state) => state.segReducer.uid);

  return (query) => {
    query = {
      ...query,
      uidUser,
      fecha: firebase.firestore.FieldValue.serverTimestamp(),
    };
    return new Promise((resolve) => {
      const catchCallback = (err) => {
        eventEmitter.emit(loadEvent, false);
        console.log(err);
        if (err.message) {
          msgAlert({ description: err.message });
        } else {
          msgAlert({ description: errorPeticion });
        }
      };
      const then_add = () => {
        eventEmitter.emit(loadEvent, false);
        resolve();
      };

      eventEmitter.emit(loadEvent, true);
      firebase
        .firestore()
        .collection(faena)
        .add(query)
        .then(then_add)
        .catch(catchCallback);
    });
  };
};
