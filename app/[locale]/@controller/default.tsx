import Controller from "./page";

export default async function Default({
  params,
}: {
  params: { locale: string };
}) {
  return <Controller params={params} />;
}
