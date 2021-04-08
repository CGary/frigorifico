import firebase from "firebase/app";
import { ingreso } from "../../firebase";

export default async ({ id }) =>
  await firebase.firestore().collection(ingreso).doc(id).delete();
