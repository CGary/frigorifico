import { setFaena, setArrFaena } from "../redux";

const initialState = {
  faena: {},
  arrFaena: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case setFaena:
      return {
        ...state,
        faena: { ...action.payload },
      };
    case setArrFaena:
      return {
        ...state,
        arrFaena: [...action.payload],
      };
    default:
      return state;
  }
};
