import { useEffect } from "react";
import firebase from "firebase/app";
import { useDispatch } from "react-redux";
import { setArrFaena } from "../brlFaena/redux";
import { faena, desc } from "./index";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
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

    return () => {
      unsubscribeFaena();
    };
  }, []);
};
