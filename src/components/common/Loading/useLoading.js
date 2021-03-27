import { loading } from "../../../redux";
import { useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();

  return (flag) => {
    dispatch({ type: loading, payload: { isLoading: flag } });
  };
};
