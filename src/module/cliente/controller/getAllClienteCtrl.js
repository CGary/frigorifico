import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setArrCliente } from "../redux";
import { getAllCLiente } from "../infrastructure";

export default () => {
  const dispatch = useDispatch();
  const arrCliente = useSelector((state) => state.clienteReducer.arrCliente);

  useEffect(() => {
    const callback = (arr) =>
      dispatch({
        type: setArrCliente,
        payload: arr,
      });
    const unsubscribeCliente = getAllCLiente(callback);
    return () => {
      unsubscribeCliente();
    };
  }, []);

  return arrCliente;
};
