export const loginUseCase = async ({ login, ...query }) => await login(query);

export const logoutUseCase = async ({ logout }) => await logout();

export const resetPassUseCase = async ({ resetPass, ...query }) =>
  await resetPass(query);
