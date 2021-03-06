import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const arrUnstoredReducers = ["segReducer", "loadingReducer"];

const saveToLocalStorage = (state) => {
  const storedState = { ...state };

  arrUnstoredReducers.map((reducer) => delete storedState[reducer]);

  const stringifyState = JSON.stringify(storedState);
  localStorage.setItem("state", stringifyState);
};

const loadFromLocalStorage = () => {
  try {
    let serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    serializedState = JSON.parse(serializedState);

    arrUnstoredReducers.map((reducer) => delete serializedState[reducer]);

    return serializedState;
  } catch (err) {
    console.log(err.message);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const arrComposes = [applyMiddleware(reduxThunk)];

if (window.__REDUX_DEVTOOLS_EXTENSION__)
  arrComposes.push(window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(reducers, persistedState, compose(...arrComposes));

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
