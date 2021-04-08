import firebase from "firebase/app";
import { recibo } from "../../firebase";

export default async ({ id }) =>
  await firebase.firestore().collection(recibo).doc(id).delete();
