import { setRecibo, setArrRecibo } from "../../redux";

const initialState = {
  recibo: {},
  arrRecibo: [],
};

export default (state = initialState, action) => {
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
