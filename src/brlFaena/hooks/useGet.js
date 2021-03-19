import firebase from "firebase/app";
import { useState, useEffect } from "react";
import { useLoading, useDialogo } from "../../components/common";
import { errorPeticion, msgEliminar } from "../../tools/msg";
import { faena, desc } from "../../firebase/constants";

export default () => {
  const { setLoading } = useLoading();
  const { msgAlert, msgConfirm } = useDialogo();
  const [faenas, setFaenas] = useState([]);

  const deleteFaena = async (id) => {
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
        description: msgEliminar,
      });
      if (result === "confirm") {
        setLoading(true);
        await firebase.firestore().collection(faena).doc(id).delete();
        setLoading(false);
      }
    } catch (err) {
      catchCallback(err);
    }
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection(faena)
      .orderBy("fecha", desc)
      .onSnapshot((result) => {
        setFaenas([
          ...result.docs.map((item) => ({ ...item.data(), id: item.id })),
        ]);
      });
  }, []);

  return {
    faenas,
    deleteFaena,
  };
};
