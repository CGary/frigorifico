import { useEffect } from "react";
import firebase from "firebase/app";
import { useDispatch } from "react-redux";
import { cliente, desc } from "./";
import { setArrCliente } from "../brlCliente/redux";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //cliente
    const unsubscribeCliente = firebase
      .firestore()
      .collection(cliente)
      .orderBy("fecha", desc)
      .onSnapshot((result) =>
        dispatch({
          type: setArrCliente,
          payload: [
            ...result.docs.map((item) => ({ ...item.data(), id: item.id })),
          ],
        })
      );

    return () => {
      unsubscribeCliente();
    };
  }, []);
};
