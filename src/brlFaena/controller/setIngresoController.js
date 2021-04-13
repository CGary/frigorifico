import { setFaena } from "../../brlFaena/redux";
import { useDispatch } from "react-redux";
import { eventEmitter, loadEvent } from "../../tools";
import { setIngresoUseCase } from "../app";
import { getClienteByRef } from "../../brlCliente/infrastructure";
import { getRefIngresoById } from "../../brlIngreso/infrastructure";

export default () => {
  const dispatch = useDispatch();

  return async (objIngreso) => {
    console.log({ objIngreso });
    eventEmitter.emit(loadEvent, true);
    try {
      const { refCliente, fecha, cliente, id } = objIngreso;

      const injection = {
        getRefIngresoById,
        getClienteByRef,
        idIngreso: id,
        refCliente,
      };

      const { refIngreso, nombre } = await setIngresoUseCase(injection);

      dispatch({
        type: setFaena,
        payload: { cliente, fecha, nombre, refIngreso },
      });
    } catch (err) {
      console.log(err);
    }
    eventEmitter.emit(loadEvent, false);
  };
};
