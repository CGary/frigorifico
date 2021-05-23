import firebase from "firebase/app";
import { ingreso, desc } from "../../firebase";
// import { getRefCliente } from "../../brlCliente/infrastructure";

export const addIngreso = async ({ idCliente, ...rest }) => {
  // const refCliente = getRefCliente({ idCliente });

  const query = {
    ...rest,
    idCliente,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // refCliente,
  };
  await firebase.firestore().collection(ingreso).add(query);
};

export const removeIngreso = async ({ idIngreso }) =>
  await firebase.firestore().collection(ingreso).doc(idIngreso).delete();

export const getRefIngresoById = ({ id }) =>
  firebase.firestore().collection(ingreso).doc(id);

export const getAllIngreso = async () => {
  const { docs } = await firebase
    .firestore()
    .collection(ingreso)
    .orderBy("fecha", desc)
    .get();
  return docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

// export const getAllIngreso = (callback) =>
//   firebase
//     .firestore()
//     .collection(ingreso)
//     .orderBy("fecha", desc)
//     .onSnapshot((result) =>
//       callback([
//         ...result.docs.map((item) => ({ ...item.data(), id: item.id })),
//       ])
//     );
