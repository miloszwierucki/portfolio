import { setRequestLocale } from "next-intl/server";

import ControllerClient from "@/components/layout/controller-client";
import client from "@/tina/__generated__/client";

export default async function Controller({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const res = await client.queries.settings({
    relativePath: `${locale}/settings.json`,
  });

  return (
    <ControllerClient
      data={res.data}
      variables={res.variables}
      query={res.query}
    />
  );
}
