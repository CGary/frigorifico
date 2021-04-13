import { useSelector } from "react-redux";
import { useDialogoPromise } from "../../components/hooks";
import { getDateLocalToUTC } from "../../tools";
import { addIngresoRoute, removeIngresoRoute } from "../routes";
import getAllIngresoCtrl from "./getAllIngresoCtrl";

const addIngresoCtrl = () => {
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
    };

    return promise({ callback });
  };
};

const removeController = () => {
  const promise = useDialogoPromise();

  return (query) => {
    const callback = async () => {
      await removeIngresoRoute(query);
    };

    return promise({ callback, confirm: true });
  };
};

export { addIngresoCtrl, removeController, getAllIngresoCtrl };
