import { eventEmitter, loadEvent } from "../../tools";
import { useDialogo } from "../../components/common";
import { errorPeticion, msgEliminar } from "../../tools";
import { removeRecibo } from "../infrastructure";

export default () => {
  const { msgAlert, msgConfirm } = useDialogo();

  return async ({ id }) => {
    const catchCallback = (err) => {
      console.log(err);
      if (err.message) {
        msgAlert({ description: err.message });
      } else {
        msgAlert({ description: errorPeticion });
      }
    };

    try {
      const result = await msgConfirm({
        description: msgEliminar,
      });
      if (result === "confirm") {
        eventEmitter.emit(loadEvent, true);
        removeRecibo({ id });
      }
    } catch (err) {
      catchCallback(err);
    }
    eventEmitter.emit(loadEvent, false);
  };
};
