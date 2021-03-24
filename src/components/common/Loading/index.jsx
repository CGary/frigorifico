import * as React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import loadingReducer from "./reducer";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Loading = (props) => {
  console.log({ Loading: "render", props });
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={props.isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

const mapStateToProps = (reducers) => reducers.loadingReducer;
export default connect(mapStateToProps)(Loading);
export { loadingReducer };
