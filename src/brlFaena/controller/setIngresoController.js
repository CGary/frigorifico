import { setFaena } from "../../redux";
import { useDispatch } from "react-redux";
import { eventEmitter, loadEvent } from "../../tools";
import { setIngresoUseCase } from "../app";
import { getClientebyRef } from "../../brlCliente/infrastructure";
import { getRefIngresoById } from "../../brlIngreso/infrastructure";

export default () => {
  const dispatch = useDispatch();

  return async (objIngreso) => {
    eventEmitter.emit(loadEvent, true);
    try {
      const { refCliente, fecha, cliente, id } = objIngreso;

      const { refIngreso, nombre } = await setIngresoUseCase({
        getRefIngresoById,
        getClientebyRef,
        idIngreso: id,
        refCliente,
      });

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
