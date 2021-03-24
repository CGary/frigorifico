import { loading } from "../../../redux";
import { useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const setLoading = (flag) => {
    dispatch({ type: loading, payload: { isLoading: flag } });
  };
  return { setLoading };
};
