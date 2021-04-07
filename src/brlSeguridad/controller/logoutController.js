import { useDialogo } from "../../components/common";
import { errorPeticion } from "../../tools";
import { logoutUseCase } from "../app";
import { logout } from "../infrastructure";

export default () => {
  const { msgAlert } = useDialogo();

  return () => {
    try {
      logoutUseCase({ logout });
    } catch (err) {
      console.log(err);
      msgAlert({ description: errorPeticion });
    }
  };
};
