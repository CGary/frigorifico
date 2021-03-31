import * as React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import loadingReducer from "./reducer";
import event from "../../../tools/event";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Loading = (props) => {
  console.log({ Loading: "render", props });
  const classes = useStyles();
  React.useEffect(() => {
    const listener = event.addListener("showLoading", () => {
      console.log("show loading event fbemitter");
    });
    return () => {
      listener.remove();
    };
  }, []);
  return (
    <Backdrop className={classes.backdrop} open={props.isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

const mapStateToProps = (reducers) => reducers.loadingReducer;
export default connect(mapStateToProps)(Loading);
export { loadingReducer };
