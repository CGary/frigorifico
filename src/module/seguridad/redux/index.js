const initialState = {
  isLogin: false,
  isInitializingUser: true,
};

const login = "login";
const logout = "logout";

const segReducer = (state = initialState, action) => {
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

export { segReducer, login, logout };
