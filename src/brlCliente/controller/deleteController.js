import { eventEmitter, loadEvent } from "../../tools";
import { errorPeticion, msgEliminar } from "../../tools";
import { useDialogo } from "../../components/common";
import { remove } from "../infrastructure";

export default () => {
  const { msgAlert, msgConfirm } = useDialogo();

  return async (query) => {
    try {
      const result = await msgConfirm({
        description: msgEliminar,
      });
      if (result === "confirm") {
        eventEmitter.emit(loadEvent, true);
        await remove(query);
      }
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
