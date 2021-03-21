import { setIngreso, setArrIngreso } from "../redux/actions";

export const initialState = {
  ingreso: {},
  arrIngreso: [],
};

export const ingresoReducer = (state = initialState, action) => {
  switch (action.type) {
    case setIngreso:
      return {
        ...state,
        ingreso: { ...action.payload },
      };
    case setArrIngreso:
      return {
        ...state,
        arrIngreso: [...action.payload],
      };
    default:
      return state;
  }
};
