import { eventEmitter, loadEvent } from "../../tools";
import { useDialogo } from "../../components/common";
import { resetpass_mail } from "./message";
import { errorPeticion } from "../../tools";
import { resetPassUseCase } from "../app";
import { resetPass } from "../infrastructure";

export default ({ history }) => {
  const { msgAlert } = useDialogo();

  return async ({ email }) => {
    eventEmitter.emit(loadEvent, true);
    try {
      await resetPassUseCase({ email, resetPass });
      msgAlert({ description: resetpass_mail });
      history.goBack();
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
