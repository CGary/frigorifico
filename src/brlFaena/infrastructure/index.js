import firebase from "firebase/app";
import { faena } from "../../firebase";

export const addFaena = async (query) =>
  await firebase
    .firestore()
    .collection(faena)
    .add({ ...query, fecha: firebase.firestore.FieldValue.serverTimestamp() });

export const removeFaena = async ({ id }) =>
  firebase.firestore().collection(faena).doc(id).delete();
