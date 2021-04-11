import { addClienteUseCase, removeClienteUseCase } from "../app";
import { addCliente, removeCliente } from "../infrastructure";

export const addClienteRoute = async (query) => {
  query = {
    addCliente,
    ...query,
  };
  await addClienteUseCase(query);
};

export const removeClienteRoute = async ({ idCliente }) =>
  await removeClienteUseCase({ removeCliente, idCliente });
