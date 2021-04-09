import firebase from "firebase/app";
import { cliente } from "../../firebase";

import clienteReducer from "./reducer";

export { clienteReducer };

export const add = async (query) =>
  await firebase.firestore().collection(cliente).add(query);

export const remove = async ({ id }) =>
  await firebase.firestore().collection(cliente).doc(id).delete();

export const getClientebyRef = async (refCliente) => {
  const docCliente = await refCliente.get();
  if (!docCliente.exists) {
    throw new Error("No existe el cliente en la bdd");
  }
  return docCliente.data();
};

export const getRefCliente = ({ idCliente }) =>
  firebase.firestore().collection(cliente).doc(idCliente);
