import { eventEmitter, loadEvent } from "../../tools";
import { errorPeticion, msgEliminar } from "../../tools";
import { useDialogo } from "../common";

export default () => {
  const { msgAlert, msgConfirm } = useDialogo();

  return ({ callback, confirm, msgError, msgQuestion }) =>
    new Promise(async (resolve) => {
      try {
        if (confirm) {
          const result = await msgConfirm({
            description: msgQuestion || msgEliminar,
          });
          if (result === "confirm") {
            eventEmitter.emit(loadEvent, true);
            await callback();
          }
        } else {
          eventEmitter.emit(loadEvent, true);
          await callback();
        }
      } catch (err) {
        console.log(err);
        if (err.message) {
          msgAlert({ description: err.message });
        } else {
          msgAlert({ description: msgError || errorPeticion });
        }
      }
      eventEmitter.emit(loadEvent, false);
      resolve();
    });
};
