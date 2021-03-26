import { createStore, compose } from "redux";
import reducers from "./reducers";
import { saveToLocalStorage, loadFromLocalStorage } from "./storage";

const persistedState = loadFromLocalStorage();

const arrComposes = [];

if (window.__REDUX_DEVTOOLS_EXTENSION__)
  arrComposes.push(window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(reducers, persistedState, compose(...arrComposes));

store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage(state);
});

export default store;
