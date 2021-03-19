import firebase from "firebase/app";
import { useState, useEffect } from "react";
import { useLoading, useDialogo } from "../../components/common";
import { errorPeticion } from "../../tools/msg";
import { recibo, desc } from "../../firebase/constants";

export default () => {
  const { setLoading } = useLoading();
  const { msgAlert, msgConfirm } = useDialogo();
  const [recibos, setRecibos] = useState([]);

  const eliminar = async (id) => {
    const catchCallback = (err) => {
      console.log(err);
      if (err.message) {
        msgAlert({ description: err.message });
      } else {
        msgAlert({ description: errorPeticion });
      }
    };

    try {
      const result = await msgConfirm({
        description: "¿Desea eliminar este registro?",
      });
      if (result === "confirm") {
        setLoading(true);
        await firebase.firestore().collection(recibo).doc(id).delete();
        setLoading(false);
      }
    } catch (err) {
      catchCallback(err);
    }
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection(recibo)
      .orderBy("fecha", desc)
      .onSnapshot((result) => {
        setRecibos([
          ...result.docs.map((item) => ({ ...item.data(), id: item.id })),
        ]);
      });
  }, []);

  return {
    recibos,
    eliminar,
  };
};
