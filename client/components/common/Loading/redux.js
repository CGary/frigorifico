import { loading } from "../../../redux/actions";

export const initialState = {
  isLoading: false,
};

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case loading:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
