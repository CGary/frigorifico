import firebase from "firebase/app";
import { recibo } from "../../firebase";

import reciboReducer from "./reducer";

export { reciboReducer };

export const add = async (query) =>
  await firebase.firestore().collection(recibo).add(query);

export const remove = async ({ id }) =>
  await firebase.firestore().collection(recibo).doc(id).delete();
