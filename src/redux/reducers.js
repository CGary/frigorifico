import { segReducer } from "../brlSeguridad/reducer";
import { loadingReducer } from "../components/common/Loading/reducer";
import { dialogoReducer } from "../components/common/Dialogo/reducer";
import { navMobileReducer } from "../components/layout/DashLayout/NavBar/reducer";

export default (state = {}, action) => {
  return {
    segReducer: segReducer(state.segReducer, action),
    loadingReducer: loadingReducer(state.loadingReducer, action),
    dialogoReducer: dialogoReducer(state.dialogoReducer, action),
    navMobileReducer: navMobileReducer(state.navMobileReducer, action),
  };
};
