import { eventEmitter, loadEvent, errorPeticion } from "../../tools";
import { msgEliminar } from "../../tools";
import { useDialogo } from "../../components/common";
import { useSelector } from "react-redux";
import { addCliente, removeCliente } from "../infrastructure";
import { getServerTimestamp } from "../../common/infrastructure";
import { addClienteUseCase, removeClienteUseCase } from "../app";

export const addClienteCtrl = () => {
  const { msgAlert } = useDialogo();
  const uid = useSelector((state) => state.segReducer.uid);

  return (query) =>
    new Promise(async (resolve) => {
      eventEmitter.emit(loadEvent, true);
      query = {
        addCliente,
        getServerTimestamp,
        uidUser: uid,
        ...query,
      };
      try {
        await addClienteUseCase(query);
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

export const removeClienteCtrl = () => {
  const { msgAlert, msgConfirm } = useDialogo();

  return async ({ idCliente }) => {
    try {
      const result = await msgConfirm({
        description: msgEliminar,
      });
      if (result === "confirm") {
        eventEmitter.emit(loadEvent, true);
        await removeClienteUseCase({ removeCliente, idCliente });
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
