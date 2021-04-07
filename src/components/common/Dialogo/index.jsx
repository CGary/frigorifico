import * as React from "react";
import { connect } from "react-redux";
import { dialogoClose } from "../../../redux";
import dialogoReducer from "./reducer";
import DialogoView from "./DialogoView";

const ConfirmationDialog = (props) => {
  const { dispatch, ...rest } = props;

  const propsDialogoView = {
    ...rest,
    onClose: () => {
      dispatch({ type: dialogoClose });
    },
  };

  return <DialogoView {...propsDialogoView} />;
};

const mapStateToProps = (reducers) => reducers.dialogoReducer;
export default connect(mapStateToProps)(ConfirmationDialog);

export { dialogoReducer };
