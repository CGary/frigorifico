import store from "./store";
import reducers from "./reducers";
import { setFaena } from ".";
import { arrUnstoredReducers, loadFromLocalStorage } from "./storage";

describe("Tests redux", () => {
  it("Test getstore vs reducers", () => {
    const expectativa = JSON.stringify(reducers());
    const respuesta = JSON.stringify(store.getState());
    expect(expectativa).toEqual(respuesta);
  });

  it("Test redux to localStorage", () => {
    const props = { propiedad: "contenido de la propiedad" };

    const storedState = store.getState();
    arrUnstoredReducers.map((reducer) => delete storedState[reducer]);

    const expectativa = JSON.stringify({
      ...storedState,
      faenaReducer: {
        faena: props,
        arrFaena: [],
      },
    });

    store.dispatch({
      type: setFaena,
      payload: props,
    });
    const respuesta = JSON.stringify(loadFromLocalStorage());

    expect(expectativa).toEqual(respuesta);
  });
});
