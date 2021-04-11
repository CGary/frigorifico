export const addClienteUseCase = async (props) => {
  const { addCliente, ...query } = props;
  await addCliente(query);
};

export const removeClienteUseCase = async ({ removeCliente, ...query }) =>
  removeCliente(query);
