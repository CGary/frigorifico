import { loading } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const setLoading = (flag) => {
    console.log({ flag, isLoading });
    // flag != isLoading &&
    dispatch({ type: loading, payload: { isLoading: flag } });
  };
  return { setLoading, isLoading };
};
