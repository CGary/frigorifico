import firebase from "firebase/app";
import { faena } from "../../firebase";

import faenaReducer from "./reducer";

export { faenaReducer };

export const add = async (query) =>
  firebase.firestore().collection(faena).add(query);

export const remove = async ({ id }) =>
  firebase.firestore().collection(faena).doc(id).delete();
