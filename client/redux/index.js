import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const saveToLocalStorage = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
};

const loadFromLocalStorage = () => {
  try {
    let serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    serializedState = JSON.parse(serializedState);

    // delete serializedState.

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
