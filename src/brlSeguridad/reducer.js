import { login, logout } from "../redux";

export const initialState = {
  isLogin: false,
  isInitializingUser: true,
};

export const segReducer = (state = initialState, action) => {
  switch (action.type) {
    case login:
      return {
        ...state,
        isLogin: true,
        ...action.payload,
      };
    case logout:
      return {
        ...state,
        isLogin: false,
        ...action.payload,
      };
    default:
      return state;
  }
};
