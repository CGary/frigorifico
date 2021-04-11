import firebase from "firebase/app";
import { faena } from "../../firebase";

import faenaReducer from "./reducer";

export { faenaReducer };

export const addFaena = async (query) =>
  firebase.firestore().collection(faena).add(query);

export const removeFaena = async ({ id }) =>
  firebase.firestore().collection(faena).doc(id).delete();
