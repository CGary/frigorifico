import firebase from "firebase/app";
import { useLoading, useDialogo } from "../components/common";
import { useSelector } from "react-redux";
import { errorPeticion } from "../tools/msg";
import { faena } from "../firebase";

export default () => {
  const { setLoading } = useLoading();
  const { msgAlert } = useDialogo();
  const { uid } = useSelector((state) => state.segReducer);

  const add = (query) => {
    query = {
      ...query,
      uidUser: uid,
      fecha: firebase.firestore.FieldValue.serverTimestamp(),
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
        .collection(faena)
        .add(query)
        .then(then_add)
        .catch(catchCallback);
    });
  };

  return add;
};
