import firebase from "firebase/app";
import { eventEmitter, loadEvent } from "../../tools";
import { errorPeticion } from "../../tools";
import { useDialogo } from "../../components/common";
import { useSelector } from "react-redux";
import { addFaena } from "../infrastructure";

export default () => {
  const { msgAlert } = useDialogo();
  const uidUser = useSelector((state) => state.segReducer.uid);

  return (query) => {
    return new Promise(async (resolve) => {
      eventEmitter.emit(loadEvent, true);
      query = {
        ...query,
        uidUser,
        fecha: firebase.firestore.FieldValue.serverTimestamp(),
      };
      try {
        await addFaena(query);
      } catch (err) {
        console.log(err);
        if (err.message) {
          msgAlert({ description: err.message });
        } else {
          msgAlert({ description: errorPeticion });
        }
      }
      eventEmitter.emit(loadEvent, false);
      resolve();
    });
  };
};
