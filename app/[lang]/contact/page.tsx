import { ContactPage } from "@/components/pages/contact-client";
import client from "@/tina/__generated__/client";

export const revalidate = 0;

export default async function Contact({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const res = await client.queries.contact({
    relativePath: `${lang}/contact.md`,
  });
  return (
    <ContactPage data={res.data} variables={res.variables} query={res.query} />
  );
}
