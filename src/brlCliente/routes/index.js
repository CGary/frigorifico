import { addClienteUseCase, removeClienteUseCase } from "../app";
import { addCliente, removeCliente } from "../infrastructure";

export const addClienteRoute = async (query) =>
  await addClienteUseCase({
    ...query,
    addCliente,
  });

export const removeClienteRoute = async ({ idCliente }) =>
  await removeClienteUseCase({ removeCliente, idCliente });
