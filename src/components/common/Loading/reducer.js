import { loading } from "../../../redux";

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case loading:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
