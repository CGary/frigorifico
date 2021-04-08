import { segReducer } from "../brlSeguridad/infrastructure";
import { dialogoReducer } from "../components/common/Dialogo";
import { navMobileReducer } from "../components/layout/DashLayout/NavBar";
import { faenaReducer } from "../brlFaena";
import { clienteReducer } from "../brlCliente/infrastructure";
import { ingresoReducer } from "../brlIngreso";
import { reciboReducer } from "../brlRecibo/infrastructure";

export default (state = {}, action = "") => {
  return {
    segReducer: segReducer(state.segReducer, action),
    dialogoReducer: dialogoReducer(state.dialogoReducer, action),
    navMobileReducer: navMobileReducer(state.navMobileReducer, action),
    faenaReducer: faenaReducer(state.faenaReducer, action),
    clienteReducer: clienteReducer(state.clienteReducer, action),
    ingresoReducer: ingresoReducer(state.ingresoReducer, action),
    reciboReducer: reciboReducer(state.reciboReducer, action),
  };
};
