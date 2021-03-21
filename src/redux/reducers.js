import { segReducer } from "../brlSeguridad/reducer";
import { loadingReducer } from "../components/common/Loading/reducer";
import { dialogoReducer } from "../components/common/Dialogo/reducer";
import { navMobileReducer } from "../components/layout/DashLayout/NavBar/reducer";
import { faenaReducer } from "../brlFaena/reducer";
import { clienteReducer } from "../brlCliente/reducer";
import { ingresoReducer } from "../brlIngreso/reducer";
import { reciboReducer } from "../brlRecibo/reducer";

export default (state = {}, action) => {
  return {
    segReducer: segReducer(state.segReducer, action),
    loadingReducer: loadingReducer(state.loadingReducer, action),
    dialogoReducer: dialogoReducer(state.dialogoReducer, action),
    navMobileReducer: navMobileReducer(state.navMobileReducer, action),
    faenaReducer: faenaReducer(state.faenaReducer, action),
    clienteReducer: clienteReducer(state.clienteReducer, action),
    ingresoReducer: ingresoReducer(state.ingresoReducer, action),
    reciboReducer: reciboReducer(state.reciboReducer, action),
  };
};
