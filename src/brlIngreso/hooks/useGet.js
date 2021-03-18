import firebase from "firebase/app";
import { useState, useEffect } from "react";
import { useLoading, useDialogo } from "../../components/common";
import { errorPeticion } from "../../tools/msg";
import { ingreso, desc } from "../../firebase/constants";

export default () => {
  const { setLoading } = useLoading();
  const { msgAlert, msgConfirm } = useDialogo();
  const [ingresos, setIngresos] = useState([]);

  const deleteIngreso = async (id) => {
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
        await firebase.firestore().collection(ingreso).doc(id).delete();
        setLoading(false);
      }
    } catch (err) {
      catchCallback(err);
    }
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection(ingreso)
      .orderBy("fecha", desc)
      .onSnapshot((result) => {
        setIngresos([
          ...result.docs.map((item) => ({ ...item.data(), id: item.id })),
        ]);
      });
  }, []);

  return {
    ingresos,
    deleteIngreso,
  };
};
