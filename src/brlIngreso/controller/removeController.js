import { eventEmitter, loadEvent } from "../../tools";
import { errorPeticion, msgEliminar } from "../../tools";
import { useDialogo } from "../../components/common";
import { removeIngreso } from "../infrastructure";

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
        await removeIngreso({ id });
        eventEmitter.emit(loadEvent, false);
      }
    } catch (err) {
      catchCallback(err);
    }
  };
};
