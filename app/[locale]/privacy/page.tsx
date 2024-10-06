import { PrivacyPage } from "@/components/pages/privacy-client";
import client from "@/tina/__generated__/client";

export default async function Privacy({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const res = await client.queries.privacy({
    relativePath: `${locale}/privacy.md`,
  });
  return (
    <PrivacyPage data={res.data} variables={res.variables} query={res.query} />
  );
}
