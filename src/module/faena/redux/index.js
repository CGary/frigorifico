const initialState = {
  faena: {},
  arrFaena: [],
};

const setFaena = "setFaena";
const setArrFaena = "setArrFaena";

const faenaReducer = (state = initialState, action) => {
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

export { setFaena, faenaReducer, setArrFaena };
