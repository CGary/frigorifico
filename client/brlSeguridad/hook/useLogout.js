import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
// import { errorPeticion } from "../../msgGeneral";
const errorPeticion = "error general de peticion";
import { useAuth, useUser } from "reactfire";

export default () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const user = useUser();
  console.log({ user });

  const { cdUsuario, dsUser } = useSelector((state) => state.segReducer);

  const sendLogout = async () => {
    try {
      auth.signOut();

      dispatch({
        type: logout,
      });
    } catch (err) {
      console.log(err);
      alert(errorPeticion);
    }
  };

  return {
    sendLogout,
    cdUsuario,
    dsUser,
  };
};
