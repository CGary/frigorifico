import store from "../src/redux/store";
import reducers from "../src/redux/reducers";
import { setFaena } from "../src/redux";
import {
  arrUnstoredReducers,
  loadFromLocalStorage,
} from "../src/redux/storage";

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
