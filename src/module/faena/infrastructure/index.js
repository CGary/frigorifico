import firebase from "firebase/app";
import { faena, desc } from "../../../firebase";

export const addFaena = async (query) =>
  await firebase
    .firestore()
    .collection(faena)
    .add({ ...query, fecha: firebase.firestore.FieldValue.serverTimestamp() });

export const removeFaena = async ({ id }) =>
  firebase.firestore().collection(faena).doc(id).delete();

export const getAllFaena = (callback) =>
  firebase
    .firestore()
    .collection(faena)
    .orderBy("fecha", desc)
    .onSnapshot((result) =>
      callback([
        ...result.docs.map((item) => ({ ...item.data(), id: item.id })),
      ])
    );
