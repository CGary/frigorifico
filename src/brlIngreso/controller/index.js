import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDialogoPromise } from "../../components/hooks";
import { getDateLocalToUTC } from "../../tools";
import { setArrIngreso } from "../redux";
import { addIngresoRoute, removeIngresoRoute } from "../routes";
import { getListaIngresoRoute } from "../routes";
import { eventEmitter, loadEvent } from "../../tools";

const addIngresoCtrl = () => {
  const dispatch = useDispatch();
  const uidUser = useSelector((state) => state.segReducer.uid);
  const promise = useDialogoPromise();

  return ({ fecha, ...rest }) => {
    const callback = async () => {
      const query = {
        ...rest,
        uidUser,
        fecha: getDateLocalToUTC(fecha),
      };
      await addIngresoRoute(query);

      const ingresoResult = await getListaIngresoRoute();
      dispatch({
        type: setArrIngreso,
        payload: ingresoResult,
      });
    };

    return promise({ callback });
  };
};

const removeIngresoCtrl = () => {
  const dispatch = useDispatch();
  const promise = useDialogoPromise();

  return (query) => {
    const callback = async () => {
      await removeIngresoRoute(query);

      const ingresoResult = await getListaIngresoRoute();
      dispatch({
        type: setArrIngreso,
        payload: ingresoResult,
      });
    };

    return promise({ callback, confirm: true });
  };
};

const getAllIngresoCtrl = () => {
  const dispatch = useDispatch();
  const arrIngreso = useSelector((state) => state.ingresoReducer.arrIngreso);

  const getListaIngreso = async () => {
    eventEmitter.emit(loadEvent, true);
    const ingresoResult = await getListaIngresoRoute();
    dispatch({
      type: setArrIngreso,
      payload: ingresoResult,
    });
    eventEmitter.emit(loadEvent, false);
  };

  useEffect(() => {
    getListaIngreso();
  }, []);

  return { arrIngreso, getListaIngreso };
};

export { addIngresoCtrl, removeIngresoCtrl, getAllIngresoCtrl };
