import firebase from "firebase/app";
import { useLoading, useDialogo } from "../components/common";
import { useSelector } from "react-redux";
import { errorPeticion } from "../tools/msg";
import { cliente } from "../firebase";
import { getDateLocalToUTC } from "../tools/formatDate";

export default () => {
  const setLoading = useLoading();
  const { msgAlert } = useDialogo();
  const uid = useSelector((state) => state.segReducer.uid);

  const add = (query) => {
    const { fecha, ...rest } = query;
    query = {
      ...rest,
      fecha: getDateLocalToUTC(fecha),
      uidUser: uid,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };
    return new Promise((resolve) => {
      const catchCallback = (err) => {
        setLoading(false);
        console.log(err);
        if (err.message) {
          msgAlert({ description: err.message });
        } else {
          msgAlert({ description: errorPeticion });
        }
      };
      const then_add = () => {
        setLoading(false);
        resolve();
      };

      setLoading(true);
      firebase
        .firestore()
        .collection(cliente)
        .add(query)
        .then(then_add)
        .catch(catchCallback);
    });
  };

  return add;
};
