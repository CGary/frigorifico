import { useDialogo } from "../../components/common";
import { errorPeticion } from "../../tools";
import { logout } from "../infrastructure";

export default () => {
  const { msgAlert } = useDialogo();

  return () => {
    try {
      logout();
    } catch (err) {
      console.log(err);
      msgAlert({ description: errorPeticion });
    }
  };
};
