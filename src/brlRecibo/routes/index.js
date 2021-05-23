import { addRecibo, removeRecibo } from "../infrastructure";
import { addReciboUseCase, removeReciboUseCase } from "../app";

export const addReciboRoute = async (query) =>
  await addReciboUseCase({ addRecibo, ...query });

export const removeReciboRoute = async (query) =>
  removeReciboUseCase({ removeRecibo, ...query });
