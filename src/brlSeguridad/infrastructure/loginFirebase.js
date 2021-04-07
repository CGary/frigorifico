import firebase from "firebase/app";

export default async (dsMail, dsPass) => {
  await firebase.auth().signInWithEmailAndPassword(dsMail, dsPass);
};
