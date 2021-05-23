import { setFaena } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { eventEmitter, loadEvent } from "../../tools";
import { setIngresoUseCase } from "../app";
import { getClienteByRef } from "../../brlCliente/infrastructure";
import { getRefIngresoById } from "../../brlIngreso/infrastructure";

export default () => {
  const dispatch = useDispatch();
  const arrIngreso = useSelector((state) => state.ingresoReducer.arrIngreso);

  const setIngreso = async (objIngreso) => {
    console.log({ objIngreso });
    eventEmitter.emit(loadEvent, true);
    try {
      const { idCliente, fecha, cliente, id } = objIngreso;

      const injection = {
        getRefIngresoById,
        getClienteByRef,
        idIngreso: id,
        idCliente,
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

  return {
    setIngreso,
    arrIngreso,
  };
};
