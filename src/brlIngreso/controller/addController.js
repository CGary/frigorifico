import firebase from "firebase/app";
import { eventEmitter, loadEvent } from "../../tools";
import { useDialogo } from "../../components/common";
import { useSelector } from "react-redux";
import { errorPeticion } from "../../tools";
import { getDateLocalToUTC } from "../../tools";
import { add } from "../infrastructure";
import { getRefCliente } from "../../brlCliente/infrastructure";

export default () => {
  const { msgAlert } = useDialogo();
  const uid = useSelector((state) => state.segReducer.uid);

  return (query) => {
    return new Promise(async (resolve) => {
      eventEmitter.emit(loadEvent, true);
      try {
        const { idCliente, fecha, ...rest } = query;

        const refCliente = getRefCliente({ idCliente });

        query = {
          ...rest,
          fecha: getDateLocalToUTC(fecha),
          uidUser: uid,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          refCliente,
        };

        await add(query);
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
