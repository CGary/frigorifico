export default async ({ email, password, login }) => {
  await login({ email, password });
};
