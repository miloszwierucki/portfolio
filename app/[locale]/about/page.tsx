import { getLocale } from "next-intl/server";

import { AboutPage } from "@/components/pages/about-client";

import client from "@tina/__generated__/client";

export default async function About() {
  const locale = await getLocale();

  const res = await client.queries.about({
    relativePath: `${locale}/about.md`,
  });
  return (
    <AboutPage data={res.data} variables={res.variables} query={res.query} />
  );
}
