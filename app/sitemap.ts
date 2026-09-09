import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/seo";

const paths = ["", "/about", "/portfolio", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) => {
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [locale, `${siteUrl}/${locale}${path}`])
    );

    return routing.locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      changeFrequency: path === "/portfolio" ? "monthly" : "yearly",
      priority: path === "" ? 1 : path === "/portfolio" ? 0.9 : 0.7,
      alternates: { languages },
    }));
  });
}
