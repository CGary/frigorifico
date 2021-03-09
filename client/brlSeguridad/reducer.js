import { login, logout } from "../redux/actions";

export const initialState = {
  isLogin: false,
  isLoading: true,
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
