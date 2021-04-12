const initialState = {
  ingreso: {},
  arrIngreso: [],
};

const setIngreso = "setIngreso";
const setArrIngreso = "setArrIngreso";

const ingresoReducer = (state = initialState, action) => {
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

export { setIngreso, setArrIngreso, ingresoReducer };
