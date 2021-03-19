import { setFaena, setArrFaena } from "../redux/actions";

export const initialState = {
  faena: {},
  arrFaena: [],
};

export const faenaReducer = (state = initialState, action) => {
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
