import {
  getDateUTCToLocalShort,
  get2Digitos,
  getDateLocalToUTC,
  getesESfromDate,
} from "./formatDate";

describe("tests formatDate", () => {
  it("test getDateUTCToLocalShort", () => {
    const expectativa = "31/03/2021";
    const respuesta = getDateUTCToLocalShort("2021-03-31T00:00:00.000Z");
    expect(respuesta).toEqual(expectativa);
  });
  it("test get2Digitos with 1", () => {
    const expectativa = "01";
    const respuesta = get2Digitos(1);
    expect(respuesta).toEqual(expectativa);
  });
  it("test get2Digitos with 10", () => {
    const expectativa = "10";
    const respuesta = get2Digitos(10);
    expect(respuesta).toEqual(expectativa);
  });
  it("test getDateLocalToUTC", () => {
    const expectativa = "2021-03-31T00:00:00.000Z";
    const respuesta = getDateLocalToUTC(new Date(2021, 2, 31, 8, 25, 45));
    expect(respuesta).toEqual(expectativa);
  });
  it("test getesESfromDate", () => {
    const expectativa = "31/03/2021 08:25:45";
    const respuesta = getesESfromDate(new Date(2021, 2, 31, 8, 25, 45));
    expect(respuesta).toEqual(expectativa);
  });
});
