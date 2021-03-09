import firebase from "firebase/app";
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
