import { login, setPass, logout } from "../redux/actions";

export const initialState = {
  icLogin: false,
};

export const segReducer = (state = initialState, action) => {
  switch (action.type) {
    case login:
      return {
        ...state,
        ...action.payload,
      };
    case setPass:
      return {
        ...state,
        ...action.payload,
      };
    case logout:
      return initialState;
    default:
      return state;
  }
};
