import firebase from "firebase/app";
import segReducer from "../infrastructure/reducer";

export { segReducer };

export const login = async ({ email, password }) => {
  await firebase.auth().signInWithEmailAndPassword(email, password);
};

export const logout = () => firebase.auth().signOut();

export const resetPass = async ({ email }) =>
  await firebase.auth().sendPasswordResetEmail(email);
