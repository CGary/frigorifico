export default async ({ dsMail, dsPass, login }) => {
  await login(dsMail, dsPass);
};
