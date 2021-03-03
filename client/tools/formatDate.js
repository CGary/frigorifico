export const getDateShortES_UTC = (fechaISO) => {
  const date = new Date(fechaISO);
  const año = date.getUTCFullYear();
  const mes = date.getUTCMonth() + 1;
  const dia = date.getUTCDate();
  return `${get2Digitos(dia)}/${get2Digitos(mes)}/${año}`;
};

const get2Digitos = (digito) => {
  if (digito < 10) {
    return "0" + digito;
  }
  return digito;
};
