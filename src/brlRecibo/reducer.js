import { setRecibo, setArrRecibo } from "../redux/actions";

export const initialState = {
  recibo: {},
  arrRecibo: [],
};

export const reciboReducer = (state = initialState, action) => {
  switch (action.type) {
    case setRecibo:
      return {
        ...state,
        recibo: { ...action.payload },
      };
    case setArrRecibo:
      return {
        ...state,
        arrRecibo: [...action.payload],
      };
    default:
      return state;
  }
};
