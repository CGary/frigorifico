import { setFaena } from "../../redux";
import { useDispatch } from "react-redux";
import { eventEmitter, loadEvent } from "../../tools";
import { getClientebyRef } from "../../brlCliente/infrastructure";
import { getRefIngreso } from "../../brlIngreso/infrastructure";

export default () => {
  const dispatch = useDispatch();

  return async (objIngreso) => {
    eventEmitter.emit(loadEvent, true);
    try {
      const { refCliente, fecha, cliente, id } = objIngreso;

      const refIngreso = getRefIngreso({ id });
      const { nombre } = await getClientebyRef(refCliente);

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
