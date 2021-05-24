import { addIngreso, removeIngreso, getAllIngreso } from "../infrastructure";
import { addIngresoUseCase, removeIngresoUseCase } from "../app";
import { getListaIngresoUseCase } from "../app";
import { getAllCliente } from "../../cliente/infrastructure";

export const addIngresoRoute = async (query) =>
  await addIngresoUseCase({ ...query, addIngreso });

export const removeIngresoRoute = async (query) =>
  await removeIngresoUseCase({ ...query, removeIngreso });

export const getListaIngresoRoute = async () => {
  return await getListaIngresoUseCase({ getAllIngreso, getAllCliente });
};
