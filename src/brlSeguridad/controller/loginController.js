import { useDialogo } from "../../components/common";
import { eventEmitter, loadEvent, errorPeticion } from "../../tools";
import { loginUseCase } from "../app";
import { login } from "../infrastructure";

export default () => {
  const { msgAlert } = useDialogo();

  return async ({ email, password }) => {
    eventEmitter.emit(loadEvent, true);
    try {
      await loginUseCase({ email, password, login });
    } catch (err) {
      console.log(err);
      if (err.message) {
        msgAlert({ description: err.message });
      } else {
        msgAlert({ description: errorPeticion });
      }
    }
    eventEmitter.emit(loadEvent, false);
  };
};
