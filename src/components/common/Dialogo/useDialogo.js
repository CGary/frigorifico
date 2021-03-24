import { useDispatch } from "react-redux";
import { dialogoOpen } from "../../../redux";
export default () => {
  const dispatch = useDispatch();
  const msgConfirm = (options = {}) => {
    return new Promise((resolve) => {
      dispatch({
        type: dialogoOpen,
        payload: {
          ...options,
          type: "confirm",
          resolve,
        },
      });
    });
  };
  const msgAlert = (options = {}) =>
    dispatch({
      type: dialogoOpen,
      payload: {
        ...options,
        type: "alert",
      },
    });
  return {
    msgConfirm,
    msgAlert,
  };
};
