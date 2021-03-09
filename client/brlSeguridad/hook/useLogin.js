import { useDispatch } from "react-redux";
import { login /* , dialogoState */ } from "../../redux/actions";
import firebase from "firebase/app";
import useLoading from "../../components/common/Loading/useLoading";
const errorPeticion = "error general de peticion";

//     email: "user@example.com",
//     password: "secretPassword",

export default () => {
  const dispatch = useDispatch();
  const { setLoading } = useLoading();

  const sendLogin = async (dsMail, dsPass) => {
    setLoading(true);
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(dsMail, dsPass);

      const { displayName, email, uid } = result.user;

      dispatch({
        type: login,
        payload: {
          isLogin: true,
          displayName,
          email,
          uid,
        },
      });
    } catch (err) {
      console.log(err);
      if (err.message) {
        alert(err.message);
      } else {
        alert(errorPeticion);
      }
    }
    setLoading(false);
  };

  return {
    sendLogin,
  };
};
