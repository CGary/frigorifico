import { segReducer } from "../brlSeguridad/redux";
import { faenaReducer } from "../brlFaena/redux";
import { clienteReducer } from "../brlCliente/redux";
import { ingresoReducer } from "../brlIngreso/redux";
import { reciboReducer } from "../brlRecibo/redux";
import { dialogoReducer } from "../components/common/Dialogo/redux";

export default (state = {}, action = "") => {
  return {
    segReducer: segReducer(state.segReducer, action),
    faenaReducer: faenaReducer(state.faenaReducer, action),
    clienteReducer: clienteReducer(state.clienteReducer, action),
    ingresoReducer: ingresoReducer(state.ingresoReducer, action),
    reciboReducer: reciboReducer(state.reciboReducer, action),
    dialogoReducer: dialogoReducer(state.dialogoReducer, action),
  };
};
