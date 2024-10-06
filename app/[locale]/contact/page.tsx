import { unstable_setRequestLocale } from "next-intl/server";

import { ContactPage } from "@/components/pages/contact-client";
import client from "@/tina/__generated__/client";

export default async function Contact({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const res = await client.queries.contact({
    relativePath: `${locale}/contact.md`,
  });
  return (
    <ContactPage data={res.data} variables={res.variables} query={res.query} />
  );
}
