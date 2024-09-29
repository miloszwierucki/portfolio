import { AboutPage } from "@/components/pages/about-client";
import client from "@/tina/__generated__/client";

export default async function About({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const res = await client.queries.about({
    relativePath: `${lang}/about.md`,
  });
  return (
    <AboutPage data={res.data} variables={res.variables} query={res.query} />
  );
}
