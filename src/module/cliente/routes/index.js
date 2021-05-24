import { addClienteUseCase, removeClienteUseCase } from "../app";
import { addCliente, removeCliente } from "../infrastructure";

export const addClienteRoute = async (query) =>
  await addClienteUseCase({
    addCliente,
    ...query,
  });

export const removeClienteRoute = async (query) =>
  await removeClienteUseCase({ removeCliente, ...query });
