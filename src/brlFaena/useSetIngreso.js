import firebase from "firebase/app";
import { ingreso } from "../firebase";
import { setFaena } from "../redux";
import { useDispatch } from "react-redux";
import { eventEmitter, loadEvent } from "../tools";

export default () => {
  const dispatch = useDispatch();

  return async (objIngreso) => {
    eventEmitter.emit(loadEvent, true);
    try {
      const { refCliente, fecha, cliente, id } = objIngreso;
      const refIngreso = firebase.firestore().collection(ingreso).doc(id);
      const docCliente = await refCliente.get();
      if (!docCliente.exists) {
        return;
      }
      const { nombre } = docCliente.data();

      dispatch({
        type: setFaena,
        payload: { cliente, fecha, nombre, refIngreso },
      });
    } catch (err) {
      console.log(err);
    }
    eventEmitter.emit(loadEvent, false);
  };
};
