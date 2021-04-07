import firebase from "firebase/app";

export default async ({ email }) =>
  await firebase.auth().sendPasswordResetEmail(email);
