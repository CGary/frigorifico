import * as React from "react";
import { connect } from "react-redux";
import { dialogoClose } from "../../../redux";
import dialogoReducer from "./reducer";
import Mssg from "./Mssg";

const ConfirmationDialog = (props) => {
  const { dispatch, ...rest } = props;

  const propsMssg = {
    ...rest,
    onClose: () => {
      dispatch({ type: dialogoClose });
    },
  };

  return <Mssg {...propsMssg} />;
};

const mapStateToProps = (reducers) => reducers.dialogoReducer;
export default connect(mapStateToProps)(ConfirmationDialog);

export { dialogoReducer };
