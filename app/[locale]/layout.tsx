import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import type { Metadata } from "next";

import BackgroundPattern from "@/components/layout/background-pattern";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import CustomCursor from "@/components/layout/custom-cursor";
import VercelAnalytics from "@/components/vercel-analytics";
import { plus_jakarta_sans, satoshi } from "@/app/fonts";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/seo";

import "@/app/globals.css";

// export const revalidate = 0;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Miłosz Wierucki - Full-Stack Developer",
  description:
    "My focus is frontend development with React, Next.js and TypeScript, complemented by Node.js on the backend.",
  applicationName: "Miłosz Wierucki Portfolio",
  authors: [{ name: "Miłosz Wierucki", url: siteUrl }],
  creator: "Miłosz Wierucki",
  publisher: "Miłosz Wierucki",
  category: "technology",
};

const customCursorEnabled = process.env.CUSTOM_CURSOR !== "false";

export default async function RootLayout({
  sidebar,
  children,
  controller,
}: LayoutProps<"/[locale]">) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${satoshi.variable} ${plus_jakarta_sans.variable} bg-background text-foreground font-satoshi grid min-h-screen w-screen scrollbar-none grid-cols-1 place-content-center overflow-x-hidden antialiased md:h-screen md:overflow-y-hidden`}
      >
        <NextIntlClientProvider messages={{}}>
          <BackgroundPattern />

          <div className="container mx-auto grid grid-cols-1 gap-4 p-4 md:grid-cols-13 md:gap-6 md:pt-16 md:pb-24 xl:px-10 2xl:gap-8 2xl:px-16">
            <aside className="bg-surface ring-border rounded-panel relative hidden h-[calc(100vh-10rem)] flex-col overflow-hidden px-4 pt-10 pb-6 shadow-lg ring-1 backdrop-blur-md md:col-span-3 md:flex lg:pb-8 2xl:pt-20">
              {sidebar}
            </aside>

            <main className="bg-surface ring-border rounded-panel relative flex h-[calc(100vh-4rem)] flex-col overflow-hidden px-4 py-6 shadow-lg ring-1 backdrop-blur-md md:col-span-10 md:h-[calc(100vh-10rem)] lg:p-8">
              {children}
            </main>

            {controller}
          </div>
          {customCursorEnabled && <CustomCursor />}
          <div className="fixed right-0 bottom-0 flex h-16 w-40 items-center p-3">
            <TextHoverEffect text="為了生存我擺脫了感情" />
          </div>

          <VercelAnalytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
