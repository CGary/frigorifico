import { mobileOpen, mobileClose } from "../../../../redux/actions";

export const initialState = {
  isMobileOpen: false,
};

export const navMobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case mobileOpen:
      return {
        ...state,
        isMobileOpen: true,
        ...action.payload,
      };
    case mobileClose:
      return {
        ...state,
        isMobileOpen: false,
        ...action.payload,
      };
    default:
      return state;
  }
};
