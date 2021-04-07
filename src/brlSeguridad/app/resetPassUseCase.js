export default async ({ email, resetPass }) => {
  await resetPass({ email });
};
