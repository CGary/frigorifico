export const getDateUTCToLocalShort = (fechaISO) => {
  const date = new Date(fechaISO);
  const año = date.getUTCFullYear();
  const mes = date.getUTCMonth() + 1;
  const dia = date.getUTCDate();
  return `${get2Digitos(dia)}/${get2Digitos(mes)}/${año}`;
};

export const get2Digitos = (digito) => {
  if (digito < 10) {
    return "0" + digito;
  }
  return digito.toString();
};

export const getDateLocalToUTC = (date) => {
  const año = date.getFullYear();
  const mes = date.getMonth() + 1;
  const dia = date.getDate();
  return `${año}-${get2Digitos(mes)}-${get2Digitos(dia)}T00:00:00.000Z`;
};

export const getesESfromDate = (date) =>
  date?.toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
