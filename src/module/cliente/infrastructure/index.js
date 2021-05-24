import firebase from "firebase/app";
import { cliente, desc } from "../../../firebase";

export const addCliente = async (query) => {
  await firebase
    .firestore()
    .collection(cliente)
    .add({
      ...query,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
};

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

export const getAllCLiente = (callback) =>
  firebase
    .firestore()
    .collection(cliente)
    .orderBy("fecha", desc)
    .onSnapshot((result) =>
      callback([
        ...result.docs.map((item) => ({ ...item.data(), id: item.id })),
      ])
    );

export const getAllCliente = async () => {
  const { docs } = await firebase
    .firestore()
    .collection(cliente)
    .orderBy("fecha", desc)
    .get();
  return docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};
