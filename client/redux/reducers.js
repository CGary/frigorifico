import { segReducer } from "../brl/seguridad/reducer";

export default (state = {}, action) => {
  return {
    segReducer: segReducer(state.segReducer, action),
  };
};
