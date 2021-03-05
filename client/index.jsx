import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux";
import App from "./components/App";
import firebase from "firebase/app";
import "firebase/auth";
import { login, logout } from "./redux/actions";

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
};
let flagRender = false;

const firebaseConfig = {
  apiKey: "AIzaSyCULVT0OJNT8ajZrA70JfpIf7nZ52olYLU",
  authDomain: "baseinicial.firebaseapp.com",
  projectId: "baseinicial",
  storageBucket: "baseinicial.appspot.com",
  messagingSenderId: "266787757316",
  appId: "1:266787757316:web:a20a669bf44fbccdd20451",
  measurementId: "G-V8ZE3635QB",
};
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const { displayName, email, uid } = user;
    store.dispatch({
      type: login,
      payload: { isLogin: true, displayName, email, uid },
    });
  } else {
    store.dispatch({ type: logout });
  }
  if (!flagRender) {
    render();
    flagRender = true;
  }
});

// eslint-disable-next-line
module.hot && module.hot.accept("./components/App", () => render());
