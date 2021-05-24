import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setArrRecibo } from "../redux";
import { getAllRecibo } from "../infrastructure";

export default () => {
  const dispatch = useDispatch();
  const arrRecibo = useSelector((state) => state.reciboReducer.arrRecibo);

  useEffect(() => {
    const callback = (arr) =>
      dispatch({
        type: setArrRecibo,
        payload: arr,
      });

    const unsubscribeRecibo = getAllRecibo(callback);
    return () => {
      unsubscribeRecibo();
    };
  }, []);

  return arrRecibo;
};
