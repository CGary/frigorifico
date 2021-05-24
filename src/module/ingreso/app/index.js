export const addIngresoUseCase = async ({ addIngreso, ...query }) =>
  await addIngreso(query);

export const removeIngresoUseCase = async ({ removeIngreso, ...query }) =>
  await removeIngreso(query);

export const getListaIngresoUseCase = async ({
  getAllIngreso,
  getAllCliente,
}) => {
  const [arrIngreso, arrCliente] = await Promise.all([
    getAllIngreso(),
    getAllCliente(),
  ]);
  return arrIngreso.map(({ idCliente, ...rest }) => ({
    ...rest,
    cliente: arrCliente.find(({ id }) => id === idCliente).codigo,
  }));
};
