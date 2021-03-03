import { segReducer } from "../brlSeguridad/reducer";

export default (state = {}, action) => {
  return {
    segReducer: segReducer(state.segReducer, action),
  };
};
