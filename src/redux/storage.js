export const arrUnstoredReducers = [
  "segReducer",
  "loadingReducer",
  "dialogoReducer",
];

export const saveToLocalStorage = (state) => {
  const storedState = { ...state };

  arrUnstoredReducers.map((reducer) => delete storedState[reducer]);

  const stringifyState = JSON.stringify(storedState);
  localStorage.setItem("state", stringifyState);
};

export const loadFromLocalStorage = () => {
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
