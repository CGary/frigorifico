import { makeStyles } from "@material-ui/core";
import useLoadPromise from "./useLoadPromise";

export const useStylesPageMain = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F4F6F8",
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

export { useLoadPromise };
