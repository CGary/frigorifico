import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { login, logout } from "../../redux/actions";
import { useLoading } from "../../components/common";
import Routes from "./Routes";

export default function Init() {
  console.log({ Init: "render" });
  const { isInitializingUser } = useSelector((state) => state.segReducer);
  const dispatch = useDispatch();
  const { setLoading } = useLoading();

  React.useEffect(() => {
    if (isInitializingUser) {
      setLoading(true);
      const firebaseConfig = {
        apiKey: "AIzaSyCULVT0OJNT8ajZrA70JfpIf7nZ52olYLU",
        authDomain: "baseinicial.firebaseapp.com",
        projectId: "baseinicial",
        storageBucket: "baseinicial.appspot.com",
        messagingSenderId: "266787757316",
        appId: "1:266787757316:web:a20a669bf44fbccdd20451",
        measurementId: "G-V8ZE3635QB",
      };

      try {
        firebase.initializeApp(firebaseConfig);
        firebase.firestore().settings({ timestampsInSnapshots: true });
      } catch (err) {
        console.log(err);
      }

      firebase.auth().onAuthStateChanged((user) => {
        console.log("onAuthStateChanged");
        isInitializingUser && setLoading(false);

        if (user) {
          const { displayName, email, uid } = user;
          dispatch({
            type: login,
            payload: {
              isInitializingUser: false,
              displayName,
              email,
              uid,
            },
          });
        } else {
          dispatch({
            type: logout,
            payload: {
              isInitializingUser: false,
            },
          });
        }
      });
    }
  }, []);

  return !isInitializingUser && <Routes />;
}
