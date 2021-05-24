import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setArrFaena } from "../redux";
import { getAllFaena } from "../infrastructure";

export default () => {
  const dispatch = useDispatch();
  const { fecha, nombre, cliente, refIngreso } = useSelector(
    (state) => state.faenaReducer.faena
  );
  const arrFaena = useSelector((state) => state.faenaReducer.arrFaena).filter(
    (row) => row.refIngreso.id === refIngreso?.id
  );
  useEffect(() => {
    const callback = (arr) =>
      dispatch({
        type: setArrFaena,
        payload: arr,
      });

    const unsubscribeCliente = getAllFaena(callback);
    return () => {
      unsubscribeCliente();
    };
  }, []);

  return {
    fecha,
    nombre,
    cliente,
    arrFaena,
  };
};
