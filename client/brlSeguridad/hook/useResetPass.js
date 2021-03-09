import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import useLoading from "../../components/common/Loading/useLoading";
import { resetpass_mail } from "../msg";
const errorPeticion = "error general de peticion";

export default () => {
  const { goBack } = useHistory();
  const { setLoading } = useLoading();

  const sendMail = async (email) => {
    try {
      setLoading(true);
      await firebase.auth().sendPasswordResetEmail(email);
      alert(resetpass_mail);
      setLoading(false);
      goBack();
    } catch (err) {
      console.log(err);
      if (err.message) {
        alert(err.message);
      } else {
        alert(errorPeticion);
      }
    }
  };

  return {
    sendMail,
  };
};
