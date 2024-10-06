import Sidebar from "./page";

export default async function Default({
  params,
}: {
  params: { locale: string };
}) {
  return <Sidebar params={params} />;
}
