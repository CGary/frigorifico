import { login, logout, resetPass } from "../infrastructure";
import { loginUseCase, logoutUseCase, resetPassUseCase } from "../app";

export const loginRoute = async (query) =>
  await loginUseCase({ login, ...query });

export const logoutRoute = async () => await logoutUseCase({ logout });

export const resetPassRoute = async (query) =>
  await resetPassUseCase({ resetPass, ...query });
