import firebase from "firebase/app";
import { recibo, desc } from "../../firebase";
import { getRefCliente } from "../../brlCliente/infrastructure";

export const addRecibo = async (query) => {
  const { idCliente, ...rest } = query;

  const refCliente = await getRefCliente({ idCliente });

  await firebase
    .firestore()
    .collection(recibo)
    .add({
      ...rest,
      refCliente,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
};

export const removeRecibo = async ({ idRecibo }) =>
  await firebase.firestore().collection(recibo).doc(idRecibo).delete();

export const getAllRecibo = (callback) =>
  firebase
    .firestore()
    .collection(recibo)
    .orderBy("fecha", desc)
    .onSnapshot((result) =>
      callback([
        ...result.docs.map((item) => ({ ...item.data(), id: item.id })),
      ])
    );
