import firebase from "firebase/app";
import { recibo } from "../../firebase";

import reciboReducer from "./reducer";

export { reciboReducer };

export const addRecibo = async (query) =>
  await firebase.firestore().collection(recibo).add(query);

export const removeRecibo = async ({ id }) =>
  await firebase.firestore().collection(recibo).doc(id).delete();
