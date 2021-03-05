import { login, logout } from "../redux/actions";

export const initialState = {
  isLogin: false,
};

export const segReducer = (state = initialState, action) => {
  switch (action.type) {
    case login:
      return {
        ...action.payload,
      };
    case logout:
      return initialState;
    default:
      return state;
  }
};
