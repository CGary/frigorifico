export const addIngresoUseCase = async ({ addIngreso, ...query }) =>
  addIngreso(query);

export const removeIngresoUseCase = async ({ removeIngreso, ...query }) =>
  removeIngreso(query);
