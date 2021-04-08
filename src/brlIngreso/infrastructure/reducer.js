import { setIngreso, setArrIngreso } from "../../redux";

const initialState = {
  ingreso: {},
  arrIngreso: [],
};

export default (state = initialState, action) => {
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
