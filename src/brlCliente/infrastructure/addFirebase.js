import firebase from "firebase/app";
import { cliente } from "../../firebase";

export default async (query) =>
  await firebase.firestore().collection(cliente).add(query);
