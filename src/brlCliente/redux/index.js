const initialState = {
  cliente: {},
  arrCliente: [],
};

const setCliente = "setCliente";
const setArrCliente = "setArrCliente";

const clienteReducer = (state = initialState, action) => {
  switch (action.type) {
    case setCliente:
      return {
        ...state,
        cliente: { ...action.payload },
      };
    case setArrCliente:
      return {
        ...state,
        arrCliente: [...action.payload],
      };
    default:
      return state;
  }
};

export { setCliente, setArrCliente, clienteReducer };
