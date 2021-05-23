export const addReciboUseCase = async ({ addRecibo, ...query }) =>
  await addRecibo(query);

export const removeReciboUseCase = async ({ removeRecibo, ...query }) =>
  await removeRecibo(query);
