import { PrivacyPage } from "@/components/pages/privacy-client";
import client from "@/tina/__generated__/client";

export default async function Privacy({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const res = await client.queries.privacy({
    relativePath: `${lang}/privacy.md`,
  });
  return (
    <PrivacyPage data={res.data} variables={res.variables} query={res.query} />
  );
}
