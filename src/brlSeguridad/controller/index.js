import { useDialogoPromise } from "../../components/hooks";
import { useDialogo } from "../../components/common";
import { resetpass_mail } from "./message";
import { loginRoute, logoutRoute, resetPassRoute } from "../routes";

const loginCtrl = () => {
  const promise = useDialogoPromise();

  return (query) => {
    const callback = async () => await loginRoute(query);

    return promise({ callback });
  };
};

const logoutCtrl = () => {
  const promise = useDialogoPromise();

  return () => {
    const callback = async () => await logoutRoute();
    return promise({ callback });
  };
};

const resetPassController = ({ history }) => {
  const { msgAlert } = useDialogo();
  const promise = useDialogoPromise();

  return (query) => {
    const callback = async () => {
      await resetPassRoute(query);
      msgAlert({ description: resetpass_mail });
      history.goBack();
    };

    return promise({ callback });
  };
};

export { loginCtrl, logoutCtrl, resetPassController };
