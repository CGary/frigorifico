const initialState = {
  recibo: {},
  arrRecibo: [],
};

const setRecibo = "setRecibo";
const setArrRecibo = "setArrRecibo";

const reciboReducer = (state = initialState, action) => {
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

export { setRecibo, setArrRecibo, reciboReducer };
