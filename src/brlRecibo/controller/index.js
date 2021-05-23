import { useDialogoPromise } from "../../components/hooks";
import { useSelector } from "react-redux";
import { getDateLocalToUTC } from "../../tools";
import { addReciboRoute, removeReciboRoute } from "../routes";
import getAllReciboCtrl from "./getAllReciboCtrl";

const addReciboCtrl = () => {
  const promise = useDialogoPromise();
  const uidUser = useSelector((state) => state.segReducer.uid);

  return (query) => {
    const callback = async () => {
      const { fecha, ...rest } = query;

      query = {
        ...rest,
        fecha: getDateLocalToUTC(fecha),
        uidUser,
      };

      await addReciboRoute(query);
    };

    return promise({ callback });
  };
};

const removeReciboCtrl = () => {
  const promise = useDialogoPromise();

  return (query) => {
    const callback = async () => {
      await removeReciboRoute(query);
    };

    return promise({ callback, confirm: true });
  };
};

export { addReciboCtrl, removeReciboCtrl, getAllReciboCtrl };
