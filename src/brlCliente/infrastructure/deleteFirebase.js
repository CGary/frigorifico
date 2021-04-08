import firebase from "firebase/app";
import { cliente } from "../../firebase";

export default async ({ id }) =>
  await firebase.firestore().collection(cliente).doc(id).delete();
