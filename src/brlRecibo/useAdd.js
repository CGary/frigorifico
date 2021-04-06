import firebase from "firebase/app";
import { eventEmitter, loadEvent } from "../tools";
import { useDialogo } from "../components/common";
import { useSelector } from "react-redux";
import { errorPeticion } from "../tools";
import { recibo, cliente } from "../firebase";
import { getDateLocalToUTC } from "../tools";

export default () => {
  const { msgAlert } = useDialogo();
  const uid = useSelector((state) => state.segReducer.uid);

  return (query) => {
    const { fecha, ...rest } = query;
    query = {
      ...rest,
      fecha: getDateLocalToUTC(fecha),
      uidUser: uid,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
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

      const { idCliente, ...rest } = query;
      const refCliente = firebase
        .firestore()
        .collection(cliente)
        .doc(idCliente);

      eventEmitter.emit(loadEvent, true);
      firebase
        .firestore()
        .collection(recibo)
        .add({
          ...rest,
          refCliente,
        })
        .then(then_add)
        .catch(catchCallback);
    });
  };
};
