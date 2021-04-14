const initialState = {
  open: false,
  title: "Frigoríficos de Carne",
  description: "",
  confirmationText: "Aceptar",
  cancellationText: "Cancelar",
};

const dialogoOpen = "dialogoOpen";
const dialogoClose = "dialogoClose";

const dialogoReducer = (state = initialState, action) => {
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

export { dialogoOpen, dialogoClose, dialogoReducer };
