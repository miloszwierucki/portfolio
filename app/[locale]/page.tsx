import { cache } from "react";

import type { Metadata } from "next";

import { LeftSection } from "@/components/layout/left-section";
import { AboutPage } from "@/components/pages/about-client";
import { createPageMetadata } from "@/lib/seo";

import client from "@tina/__generated__/client";

const getAbout = cache((locale: string) =>
  client.queries.about({ relativePath: `${locale}/about.md` })
);

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const { data } = await getAbout(locale);

  return createPageMetadata({ locale, path: "", seo: data.about.seo });
}

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  const resAbout = await getAbout(locale);

  const resSidebar = await client.queries.sidebar({
    relativePath: `${locale}/sidebar.json`,
  });

  return (
    <>
      <LeftSection
        data={resSidebar.data}
        variables={resSidebar.variables}
        query={resSidebar.query}
        className="md:hidden"
      />

      <AboutPage
        data={resAbout.data}
        variables={resAbout.variables}
        query={resAbout.query}
        className="hidden md:flex"
      />
    </>
  );
}
