import { useDialogo } from "../../components/common";
import { eventEmitter, loadEvent, errorPeticion } from "../../tools";
import { login } from "../infrastructure";

export default () => {
  const { msgAlert } = useDialogo();

  return async (query) => {
    eventEmitter.emit(loadEvent, true);
    try {
      await login(query);
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
