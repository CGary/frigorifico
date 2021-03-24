import { dialogoOpen, dialogoClose } from "../../../redux";

const initialState = {
  open: false,
  title: "Frigoríficos de Carne",
  description: "",
  confirmationText: "Aceptar",
  cancellationText: "Cancelar",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case dialogoOpen:
      return {
        ...state,
        open: true,
        ...action.payload,
      };
    case dialogoClose:
      return initialState;
    default:
      return state;
  }
};
