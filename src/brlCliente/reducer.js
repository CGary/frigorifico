import { setCliente, setArrCliente } from "../redux/actions";

export const initialState = {
  cliente: {},
  arrCliente: [],
};

export const clienteReducer = (state = initialState, action) => {
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
