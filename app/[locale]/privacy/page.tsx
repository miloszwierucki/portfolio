import { getLocale } from "next-intl/server";

import { PrivacyPage } from "@/components/pages/privacy-client";

import client from "@tina/__generated__/client";

export default async function Privacy() {
  const locale = await getLocale();

  const res = await client.queries.privacy({
    relativePath: `${locale}/privacy.md`,
  });
  return (
    <PrivacyPage data={res.data} variables={res.variables} query={res.query} />
  );
}
