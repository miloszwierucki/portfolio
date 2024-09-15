import { LeftSection } from "@/components/left-section/left-section";
import client from "@/tina/__generated__/client";

export default async function Sidebar({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const res = await client.queries.sidebar({
    relativePath: `${lang}/sidebar.json`,
  });

  return (
    <LeftSection data={res.data} variables={res.variables} query={res.query} />
  );
}
