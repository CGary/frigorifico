import { setCliente, setArrCliente } from "../../redux";

const initialState = {
  cliente: {},
  arrCliente: [],
};

export default (state = initialState, action) => {
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
