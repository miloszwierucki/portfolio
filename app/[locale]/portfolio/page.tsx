import { cache } from "react";

import type { Metadata } from "next";

import { PortfolioPage } from "@/components/pages/portfolio-client";
import { createPageMetadata } from "@/lib/seo";

import client from "@tina/__generated__/client";

const getPortfolio = cache((locale: string) =>
  client.queries.portfolio({ relativePath: `${locale}/portfolio.md` })
);

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/portfolio">): Promise<Metadata> {
  const { locale } = await params;
  const { data } = await getPortfolio(locale);

  return createPageMetadata({
    locale,
    path: "/portfolio",
    seo: data.portfolio.seo,
  });
}

export default async function Portfolio({
  params,
}: PageProps<"/[locale]/portfolio">) {
  const { locale } = await params;

  const res = await getPortfolio(locale);
  return (
    <PortfolioPage
      data={res.data}
      variables={res.variables}
      query={res.query}
    />
  );
}
