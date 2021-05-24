import { useDialogoPromise } from "../../../components/hooks";
import { useSelector } from "react-redux";
import { addFaenaRoute, removeFaenaRoute } from "../routes";
import SearchIngresoCtrl from "./SearchIngresoCtrl";
import getFaenaByIngresoCtrl from "./getFaenaByIngresoCtrl";

const addFaenaCtrl = () => {
  const uidUser = useSelector((state) => state.segReducer.uid);
  const promise = useDialogoPromise();

  return (query) => {
    const callback = async () => {
      await addFaenaRoute({ ...query, uidUser });
    };

    return promise({ callback });
  };
};

const removeFaenaCtrl = () => {
  const promise = useDialogoPromise();

  return (query) => {
    const callback = async () => {
      await removeFaenaRoute(query);
    };

    return promise({ callback, confirm: true });
  };
};

export {
  addFaenaCtrl,
  removeFaenaCtrl,
  SearchIngresoCtrl,
  getFaenaByIngresoCtrl,
};
