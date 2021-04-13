import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setArrIngreso } from "../redux";
import { getAllIngreso } from "../infrastructure";

export default () => {
  const dispatch = useDispatch();
  const arrIngreso = useSelector((state) => state.ingresoReducer.arrIngreso);

  useEffect(() => {
    const callback = (arr) =>
      dispatch({
        type: setArrIngreso,
        payload: arr,
      });

    const unsubscribeCliente = getAllIngreso(callback);
    return () => {
      unsubscribeCliente();
    };
  }, []);

  return arrIngreso;
};
