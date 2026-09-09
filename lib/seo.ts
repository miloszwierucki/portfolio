import type { Metadata } from "next";

import { routing } from "@/i18n/routing";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://wierucki.com"
).replace(/\/$/, "");

type PageSeo = {
  title: string;
  description: string;
  image?: string | null;
};

export function createPageMetadata({
  locale,
  path,
  seo,
}: {
  locale: string;
  path: `/${string}` | "";
  seo: PageSeo;
}): Metadata {
  const localizedPath = `/${locale}${path}`;
  const languages = Object.fromEntries(
    routing.locales.map((supportedLocale) => [
      supportedLocale,
      `/${supportedLocale}${path}`,
    ])
  );

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: localizedPath,
      languages: {
        ...languages,
        "x-default": `/en${path}`,
      },
    },
    openGraph: {
      type: "website",
      url: localizedPath,
      title: seo.title,
      description: seo.description,
      siteName: "Miłosz Wierucki",
      locale: locale === "pl" ? "pl_PL" : "en_US",
      alternateLocale: locale === "pl" ? ["en_US"] : ["pl_PL"],
      ...(seo.image && { images: [{ url: seo.image, alt: seo.title }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      ...(seo.image && { images: [seo.image] }),
    },
  };
}
