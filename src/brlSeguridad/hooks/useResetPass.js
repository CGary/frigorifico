import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import { useLoading, useDialogo } from "../../components/common";
import { resetpass_mail } from "../msg";
import { errorPeticion } from "../../tools/msg";

export default () => {
  const { goBack } = useHistory();
  const setLoading = useLoading();
  const { msgAlert } = useDialogo();

  const sendMail = async (email) => {
    try {
      setLoading(true);
      await firebase.auth().sendPasswordResetEmail(email);
      msgAlert({ description: resetpass_mail });
      setLoading(false);
      goBack();
    } catch (err) {
      console.log(err);
      if (err.message) {
        msgAlert({ description: err.message });
      } else {
        msgAlert({ description: errorPeticion });
      }
    }
  };

  return {
    sendMail,
  };
};
