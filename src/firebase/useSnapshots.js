import { useEffect } from "react";
import firebase from "firebase/app";
import { useDispatch } from "react-redux";
import { setArrFaena, setArrCliente } from "../redux";
import { setArrIngreso, setArrRecibo } from "../redux";
import { cliente, faena, ingreso, recibo, desc } from "./index";

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

    //faena
    const unsubscribeFaena = firebase
      .firestore()
      .collection(faena)
      .orderBy("fecha", desc)
      .onSnapshot((result) =>
        dispatch({
          type: setArrFaena,
          payload: [
            ...result.docs.map((item) => ({ ...item.data(), id: item.id })),
          ],
        })
      );

    //ingreso
    const unsubscribeIngreso = firebase
      .firestore()
      .collection(ingreso)
      .orderBy("fecha", desc)
      .onSnapshot((result) =>
        dispatch({
          type: setArrIngreso,
          payload: [
            ...result.docs.map((item) => ({ ...item.data(), id: item.id })),
          ],
        })
      );

    //recibo
    const unsubscribeRecibo = firebase
      .firestore()
      .collection(recibo)
      .orderBy("fecha", desc)
      .onSnapshot((result) =>
        dispatch({
          type: setArrRecibo,
          payload: [
            ...result.docs.map((item) => ({ ...item.data(), id: item.id })),
          ],
        })
      );
    return () => {
      unsubscribeCliente();
      unsubscribeFaena();
      unsubscribeIngreso();
      unsubscribeRecibo();
    };
  }, []);
};
