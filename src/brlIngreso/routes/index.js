import { addIngreso, removeIngreso } from "../infrastructure";
import { addIngresoUseCase, removeIngresoUseCase } from "../app";

export const addIngresoRoute = (query) =>
  addIngresoUseCase({ ...query, addIngreso });

export const removeIngresoRoute = (query) =>
  removeIngresoUseCase({ ...query, removeIngreso });
