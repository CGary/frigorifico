import firebase from "firebase/app";
import { recibo } from "../../firebase";

export default async (query) =>
  await firebase.firestore().collection(recibo).add(query);
