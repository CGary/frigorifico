import { useEffect } from "react";
import firebase from "firebase/app";
import { useDispatch } from "react-redux";
import { setArrFaena, setArrCliente } from "../redux/actions";
import { cliente, faena, desc } from "./constants";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //cliente
    firebase
      .firestore()
      .collection(cliente)
      .orderBy("fecha", desc)
      .onSnapshot((result) => {
        dispatch({
          type: setArrCliente,
          payload: [
            ...result.docs.map((item) => ({ ...item.data(), id: item.id })),
          ],
        });
      });

    //faena
    firebase
      .firestore()
      .collection(faena)
      .orderBy("fecha", desc)
      .onSnapshot((result) => {
        dispatch({
          type: setArrFaena,
          payload: [
            ...result.docs.map((item) => ({ ...item.data(), id: item.id })),
          ],
        });
      });

    //ingreso

    //recibo
  }, []);
};
