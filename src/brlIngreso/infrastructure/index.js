import firebase from "firebase/app";
import { ingreso } from "../../firebase";

export const addIngreso = async (query) =>
  await firebase.firestore().collection(ingreso).add(query);

export const removeIngreso = async ({ id }) =>
  await firebase.firestore().collection(ingreso).doc(id).delete();

export const getRefIngresoById = ({ id }) =>
  firebase.firestore().collection(ingreso).doc(id);
