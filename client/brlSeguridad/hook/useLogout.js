import firebase from "firebase/app";
// import { errorPeticion } from "../../msgGeneral";
const errorPeticion = "error general de peticion";

export default () => {
  const sendLogout = async () => {
    try {
      firebase.auth().signOut();
    } catch (err) {
      console.log(err);
      alert(errorPeticion);
    }
  };

  return {
    sendLogout,
  };
};
