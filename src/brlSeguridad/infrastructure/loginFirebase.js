import firebase from "firebase/app";

export default async ({ email, password }) => {
  await firebase.auth().signInWithEmailAndPassword(email, password);
};
