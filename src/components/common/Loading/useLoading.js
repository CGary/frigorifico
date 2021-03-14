import { loading } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const setLoading = (flag) => {
    dispatch({ type: loading, payload: { isLoading: flag } });
  };
  return { setLoading };
};
