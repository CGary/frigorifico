import firebase from "firebase/app";
import { useState, useEffect } from "react";
import { useLoading, useDialogo } from "../../components/common";
import { errorPeticion } from "../../tools/msg";

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
        description: "¿desea eliminar este registro?",
      });
      console.log({ result });
      if (result === "confirm") {
        setLoading(true);
        await firebase.firestore().collection("faena").doc(id).delete();
      }
    } catch (err) {
      catchCallback(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("faena")
      .orderBy("fecha", "desc")
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
