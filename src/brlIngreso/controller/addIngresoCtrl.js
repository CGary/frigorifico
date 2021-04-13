import { useSelector } from "react-redux";
import { getDateLocalToUTC } from "../../tools";
import { addIngreso } from "../infrastructure";
import { useDialogoPromise } from "../../components/hooks";

export default () => {
  const uidUser = useSelector((state) => state.segReducer.uid);
  const promise = useDialogoPromise();

  return ({ fecha, ...rest }) => {
    const callback = async () => {
      const query = {
        ...rest,
        uidUser,
        fecha: getDateLocalToUTC(fecha),
      };
      await addIngreso(query);
    };

    return promise({ callback });
  };
};
