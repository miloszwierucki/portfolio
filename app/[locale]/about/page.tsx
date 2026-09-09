import { cache } from "react";

import type { Metadata } from "next";

import { AboutPage } from "@/components/pages/about-client";
import { createPageMetadata } from "@/lib/seo";

import client from "@tina/__generated__/client";

const getAbout = cache((locale: string) =>
  client.queries.about({ relativePath: `${locale}/about.md` })
);

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  const { data } = await getAbout(locale);

  return createPageMetadata({ locale, path: "/about", seo: data.about.seo });
}

export default async function About({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;

  const res = await getAbout(locale);
  return (
    <AboutPage data={res.data} variables={res.variables} query={res.query} />
  );
}
