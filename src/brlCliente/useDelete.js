import firebase from "firebase/app";
import { useLoading, useDialogo } from "../components/common";
import { errorPeticion, msgEliminar } from "../tools/msg";
import { cliente } from "../firebase";

export default () => {
  const { setLoading } = useLoading();
  const { msgAlert, msgConfirm } = useDialogo();

  const eliminar = async (id) => {
    const catchCallback = (err) => {
      console.log(err);
      if (err.message) {
        msgAlert({ description: err.message });
      } else {
        msgAlert({ description: errorPeticion });
      }
    };

    try {
      const result = await msgConfirm({
        description: msgEliminar,
      });
      if (result === "confirm") {
        setLoading(true);
        await firebase.firestore().collection(cliente).doc(id).delete();
        setLoading(false);
      }
    } catch (err) {
      catchCallback(err);
    }
  };

  return eliminar;
};
