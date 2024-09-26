import { PortfolioPage } from "@/components/pages/portfolio-client";
import client from "@/tina/__generated__/client";

export default async function Portfolio({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const res = await client.queries.portfolio({
    relativePath: `${lang}/portfolio.md`,
  });
  return (
    <PortfolioPage
      data={res.data}
      variables={res.variables}
      query={res.query}
    />
  );
}
