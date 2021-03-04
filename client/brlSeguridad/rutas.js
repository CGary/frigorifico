import { post } from "../../common";

export const rutaLogin = (...params) => post("login", ...params);

export const rutaResetPass = (...params) => post("resetpass", ...params);

export const rutaSetPass = (...params) => post("logged/setpass", ...params);

export const rutaLogout = (...params) => post("logged/logout", ...params);

export const rutaChangePass = (...params) =>
  post("logged/changepass", ...params);
