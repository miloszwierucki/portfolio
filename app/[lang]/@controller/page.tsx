import ControllerClient from "@/components/layout/controller-client";
import client from "@/tina/__generated__/client";

export default async function Controller({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const res = await client.queries.settings({
    relativePath: `${lang}/settings.json`,
  });

  return (
    <ControllerClient
      data={res.data}
      variables={res.variables}
      query={res.query}
    />
  );
}
