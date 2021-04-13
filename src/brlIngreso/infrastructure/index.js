import firebase from "firebase/app";
import { ingreso } from "../../firebase";
import { getRefCliente } from "../../brlCliente/infrastructure";

export const addIngreso = async ({ idCliente, ...rest }) => {
  const refCliente = getRefCliente({ idCliente });

  const query = {
    ...rest,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    refCliente,
  };
  await firebase.firestore().collection(ingreso).add(query);
};

export const removeIngreso = async ({ idIngreso }) =>
  await firebase.firestore().collection(ingreso).doc(idIngreso).delete();

export const getRefIngresoById = ({ id }) =>
  firebase.firestore().collection(ingreso).doc(id);
