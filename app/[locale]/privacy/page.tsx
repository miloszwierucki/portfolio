import { cache } from "react";

import type { Metadata } from "next";

import { PrivacyPage } from "@/components/pages/privacy-client";
import { createPageMetadata } from "@/lib/seo";

import client from "@tina/__generated__/client";

const getPrivacy = cache((locale: string) =>
  client.queries.privacy({ relativePath: `${locale}/privacy.md` })
);

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale } = await params;
  const { data } = await getPrivacy(locale);

  const metadata = createPageMetadata({
    locale,
    path: "/privacy",
    seo: data.privacy.seo,
  });

  return {
    ...metadata,
    robots: { index: false, follow: true },
  };
}

export default async function Privacy({
  params,
}: PageProps<"/[locale]/privacy">) {
  const { locale } = await params;

  const res = await getPrivacy(locale);
  return (
    <PrivacyPage data={res.data} variables={res.variables} query={res.query} />
  );
}
