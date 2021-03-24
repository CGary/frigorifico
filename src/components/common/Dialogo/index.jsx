import * as React from "react";
import { connect } from "react-redux";
import { dialogoClose } from "../../../redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import dialogoReducer from "./reducer";

const ConfirmationDialog = (props) => {
  const {
    open,
    title,
    description,
    confirmationText,
    cancellationText,
    type,
    resolve,
    dispatch,
  } = props;

  const handlerClose = () => {
    console.log("close");
    dispatch({ type: dialogoClose });
  };
  const handlerClick_cancel = () => {
    resolve?.("cancel");
    handlerClose();
  };
  const handlerClick_confirm = () => {
    resolve?.("confirm");
    handlerClose();
  };

  return (
    <Dialog fullWidth open={open} onClose={handlerClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {description && (
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        {type === "confirm" && (
          <Button onClick={handlerClick_cancel}>{cancellationText}</Button>
        )}
        <Button color="primary" onClick={handlerClick_confirm}>
          {confirmationText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (reducers) => reducers.dialogoReducer;
export default connect(mapStateToProps)(ConfirmationDialog);
export { dialogoReducer };
