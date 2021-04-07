import firebase from "firebase/app";

export default async (dsMail) =>
  await firebase.auth().sendPasswordResetEmail(dsMail);
