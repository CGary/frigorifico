import { useHistory } from "react-router-dom";
import { eventEmitter, loadEvent } from "../../tools";
import { useDialogo } from "../../components/common";
import { resetpass_mail } from "../msg";
import { errorPeticion } from "../../tools";
import { resetPassUseCase } from "../app";
import { resetPass } from "../infrastructure";

export default () => {
  const { goBack } = useHistory();
  const { msgAlert } = useDialogo();

  return async (dsMail) => {
    eventEmitter.emit(loadEvent, true);
    try {
      await resetPassUseCase({ dsMail, resetPass });
      msgAlert({ description: resetpass_mail });
      goBack();
    } catch (err) {
      console.log(err);
      if (err.message) {
        msgAlert({ description: err.message });
      } else {
        msgAlert({ description: errorPeticion });
      }
    }
    eventEmitter.emit(loadEvent, false);
  };
};
