import { segReducer } from "../brlSeguridad/reducer";
import { loadingReducer } from "../components/common/Loading/redux";
import { dialogoReducer } from "../components/common/Dialogo/redux";

export default (state = {}, action) => {
  return {
    segReducer: segReducer(state.segReducer, action),
    loadingReducer: loadingReducer(state.loadingReducer, action),
    dialogoReducer: dialogoReducer(state.dialogoReducer, action),
  };
};
