import firebase from "firebase/app";

export const getServerTimestamp = () =>
  firebase.firestore.FieldValue.serverTimestamp();
