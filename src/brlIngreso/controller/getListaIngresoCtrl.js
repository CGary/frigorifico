import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListaIngresoRoute } from "../routes";
import { setArrIngreso } from "../redux";
// import { getAllIngreso } from "../infrastructure";

export default () => {
  const dispatch = useDispatch();
  const arrIngreso = useSelector((state) => state.ingresoReducer.arrIngreso);

  useEffect(() => {
    const initAsync = async () => {
      const ingresoResult = await getListaIngresoRoute();
      console.log({ ingresoResult });
      dispatch({
        type: setArrIngreso,
        payload: ingresoResult,
      });
    };
    initAsync();
    // const callback = (arr) =>
    //   dispatch({
    //     type: setArrIngreso,
    //     payload: arr,
    //   });

    // const unsubscribeCliente = getAllIngreso(callback);
    // return () => {
    //   unsubscribeCliente();
    // };
  }, []);

  return arrIngreso;
};
