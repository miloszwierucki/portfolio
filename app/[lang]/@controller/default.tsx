import Controller from "./page";

export default async function Default({
  params,
}: {
  params: { lang: string };
}) {
  return <Controller params={params} />;
}
