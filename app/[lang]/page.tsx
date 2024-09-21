import { HomePage } from "@/components/pages/home-client";
import client from "@/tina/__generated__/client";

export const revalidate = 30;

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const res = await client.queries.about({
    relativePath: `${lang}/about.md`,
  });
  return (
    <HomePage data={res.data} variables={res.variables} query={res.query} />
  );
}
