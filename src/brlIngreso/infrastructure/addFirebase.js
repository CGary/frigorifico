import firebase from "firebase/app";
import { ingreso } from "../../firebase";

export default async (query) =>
  await firebase.firestore().collection(ingreso).add(query);
