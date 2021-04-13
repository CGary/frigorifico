import { addFaena, removeFaena } from "../infrastructure";
import { addIngresoUseCase, removeIngresoCase } from "../app";

export const addFaenaRoute = async (query) =>
  await addIngresoUseCase({ ...query, addFaena });

export const removeFaenaRoute = async (query) =>
  await removeIngresoCase({ ...query, removeFaena });
