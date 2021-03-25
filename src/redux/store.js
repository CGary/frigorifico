import { createStore, compose } from "redux";
import reducers from "./reducers";

const arrUnstoredReducers = ["segReducer", "loadingReducer", "dialogoReducer"];

const saveToLocalStorage = (state) => {
  const storedState = { ...state };

  arrUnstoredReducers.map((reducer) => delete storedState[reducer]);

  const stringifyState = JSON.stringify(storedState);
  localStorage.setItem("state", stringifyState);
};

const loadFromLocalStorage = () => {
  try {
    let stringState = localStorage.getItem("state");
    if (stringState === null) return {};
    const serializedState = JSON.parse(stringState);

    arrUnstoredReducers.map((reducer) => delete serializedState[reducer]);

    return serializedState;
  } catch (err) {
    console.log(err.message);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const arrComposes = [];

if (window.__REDUX_DEVTOOLS_EXTENSION__)
  arrComposes.push(window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(reducers, persistedState, compose(...arrComposes));

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
