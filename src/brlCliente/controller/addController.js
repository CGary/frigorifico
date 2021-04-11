import firebase from "firebase/app";
import { eventEmitter, loadEvent, errorPeticion } from "../../tools";
import { getDateLocalToUTC } from "../../tools";
import { useDialogo } from "../../components/common";
import { useSelector } from "react-redux";
import { addCliente } from "../infrastructure";

export default () => {
  const { msgAlert } = useDialogo();
  const uid = useSelector((state) => state.segReducer.uid);

  return (query) =>
    new Promise(async (resolve) => {
      eventEmitter.emit(loadEvent, true);
      const { fecha, ...rest } = query;
      query = {
        ...rest,
        fecha: getDateLocalToUTC(fecha),
        uidUser: uid,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      try {
        await addCliente(query);
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
