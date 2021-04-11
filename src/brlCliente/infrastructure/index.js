import firebase from "firebase/app";
import { cliente } from "../../firebase";

import clienteReducer from "./reducer";

export { clienteReducer };

export const addCliente = async (query) =>
  await firebase.firestore().collection(cliente).add(query);

export const removeCliente = async ({ idCliente }) =>
  await firebase.firestore().collection(cliente).doc(idCliente).delete();

export const getClienteByRef = async (refCliente) => {
  const docCliente = await refCliente.get();
  if (!docCliente.exists) {
    throw new Error("No existe el cliente en la bdd");
  }
  return docCliente.data();
};

export const getRefCliente = ({ idCliente }) =>
  firebase.firestore().collection(cliente).doc(idCliente);
