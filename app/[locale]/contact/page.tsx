import { cache } from "react";

import type { Metadata } from "next";

import { ContactPage } from "@/components/pages/contact-client";
import { createPageMetadata } from "@/lib/seo";

import client from "@tina/__generated__/client";

const getContact = cache((locale: string) =>
  client.queries.contact({ relativePath: `${locale}/contact.md` })
);

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  const { data } = await getContact(locale);

  return createPageMetadata({
    locale,
    path: "/contact",
    seo: data.contact.seo,
  });
}

export default async function Contact({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;

  const res = await getContact(locale);
  return (
    <ContactPage data={res.data} variables={res.variables} query={res.query} />
  );
}
