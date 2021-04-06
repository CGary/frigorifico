import { saveToLocalStorage, loadFromLocalStorage } from "./storage";

describe("Test localStorage", () => {
  const state = { propiedad: "contenido de la propiedad" };

  it("test saveToLocalStorage", () => {
    const expectativa = JSON.stringify(state);
    saveToLocalStorage(state);
    const respuesta = localStorage.getItem("state");
    expect(expectativa).toEqual(respuesta);
  });

  it("test loadFromLocalStorage", () => {
    const expectativa = JSON.stringify(state);
    localStorage.setItem("state", expectativa);
    const respuesta = JSON.stringify(loadFromLocalStorage());
    expect(expectativa).toEqual(respuesta);
  });
});
