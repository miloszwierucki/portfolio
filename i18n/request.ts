import { locale as getLocale } from "next/root-params";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";

import { routing } from "./routing";

export default getRequestConfig(async () => {
  const locale = await getLocale();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return {
    locale,
  };
});
