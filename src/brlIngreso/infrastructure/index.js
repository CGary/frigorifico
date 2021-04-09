import firebase from "firebase/app";
import { ingreso } from "../../firebase";

import ingresoReducer from "./reducer";

export { ingresoReducer };

export const add = async (query) =>
  await firebase.firestore().collection(ingreso).add(query);

export const remove = async ({ id }) =>
  await firebase.firestore().collection(ingreso).doc(id).delete();

export const getRefIngreso = ({ id }) =>
  firebase.firestore().collection(ingreso).doc(id);
