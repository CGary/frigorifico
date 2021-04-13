import { useSelector } from "react-redux";
import { useDialogoPromise } from "../../components/hooks";
import { addClienteRoute, removeClienteRoute } from "../routes";
import { getDateLocalToUTC } from "../../tools";
import getAllClienteCtrl from "./getAllClienteCtrl";

const addClienteCtrl = () => {
  const uidUser = useSelector((state) => state.segReducer.uid);
  const promise = useDialogoPromise();

  return ({ fecha, ...rest }) => {
    const callback = async () => {
      const query = {
        ...rest,
        fecha: getDateLocalToUTC(fecha),
        uidUser,
      };
      await addClienteRoute(query);
    };

    return promise({ callback });
  };
};

const removeClienteCtrl = () => {
  const promise = useDialogoPromise();

  return (query) => {
    const callback = async () => await removeClienteRoute(query);

    return promise({ callback, confirm: true });
  };
};

export { addClienteCtrl, removeClienteCtrl, getAllClienteCtrl };
