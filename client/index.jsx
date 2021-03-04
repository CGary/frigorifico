import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux";
import App from "./components/App";
import axios from "axios";

window.plataforma = {
  device: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "movil"
    : "web",
};

const {
  segReducer: { icLogin, token },
} = store.getState();
if (icLogin) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
};

render();

// eslint-disable-next-line
module.hot && module.hot.accept("./components/App", () => render());
