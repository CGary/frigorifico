import { eventEmitter, loadEvent, errorPeticion } from "../../tools";
import { useDialogo } from "../common";

export default (callback) => {
  const { msgAlert } = useDialogo();

  return new Promise(async (resolve) => {
    eventEmitter.emit(loadEvent, true);
    try {
      await callback();
    } catch (err) {
      console.log(err);
      if (err.message) {
        msgAlert({ description: err.message });
      } else {
        msgAlert({ description: errorPeticion });
      }
    }
    eventEmitter.emit(loadEvent, false);
    resolve();
  });
};
