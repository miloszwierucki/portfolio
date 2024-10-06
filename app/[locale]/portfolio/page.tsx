import { PortfolioPage } from "@/components/pages/portfolio-client";
import client from "@/tina/__generated__/client";

export default async function Portfolio({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const res = await client.queries.portfolio({
    relativePath: `${locale}/portfolio.md`,
  });
  return (
    <PortfolioPage
      data={res.data}
      variables={res.variables}
      query={res.query}
    />
  );
}
