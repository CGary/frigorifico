import { addFaena, removeFaena } from "../infrastructure";
import { addIngresoUseCase, removeIngresoCase } from "../app";

export const addFaenaRoute = async (query) =>
  await addIngresoUseCase({ addFaena, ...query });

export const removeFaenaRoute = async (query) =>
  await removeIngresoCase({ removeFaena, ...query });
