import Sidebar from "./page";

export default async function Default({
  params,
}: {
  params: { lang: string };
}) {
  return <Sidebar params={params} />;
}
