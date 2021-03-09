import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import { login, logout } from "../../redux/actions";
import { useLoading } from "../../components/common";
import Routes from "./Routes";

export default function Init() {
  console.log({ Init: "render" });
  const { isLoading } = useSelector((state) => state.segReducer);
  const dispatch = useDispatch();
  const { setLoading } = useLoading();

  React.useEffect(() => {
    if (isLoading) {
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
      } catch (err) {
        console.log(err);
      }

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const { displayName, email, uid } = user;
          dispatch({
            type: login,
            payload: {
              isLoading: false,
              displayName,
              email,
              uid,
            },
          });
        } else {
          dispatch({
            type: logout,
            payload: {
              isLoading: false,
            },
          });
        }
        setLoading(false);
      });
    }
  }, []);

  return !isLoading && <Routes />;
}
