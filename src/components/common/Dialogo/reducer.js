import { dialogoOpen, dialogoClose } from "../../../redux/actions";

export const initialState = {
  open: false,
  title: "Frigorificos de Carne",
  description: "",
  confirmationText: "Aceptar",
  cancellationText: "Cancelar",
};

export const dialogoReducer = (state = initialState, action) => {
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
