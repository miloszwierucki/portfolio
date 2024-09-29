import type { Metadata } from "next";

import BackgroundPattern from "@/components/layout/background-pattern";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import CustomCursor from "@/components/layout/custom-cursor";
import VercelAnalytics from "@/components/vercel-analytics";
import { plus_jakarta_sans, satoshi } from "../fonts";
import "../globals.css";

interface LangParams {
  lang: string;
}
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pl" }];
}

export const metadata: Metadata = {
  title: "Miłosz Wierucki",
  description: "Generated by create next app",
};

export default function RootLayout({
  sidebar,
  children,
  controller,
  params,
}: Readonly<{
  sidebar: React.ReactNode;
  children: React.ReactNode;
  controller: React.ReactNode;
  params: LangParams;
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={`${satoshi.variable} ${plus_jakarta_sans.variable} grid min-h-screen w-screen place-content-center overflow-x-hidden bg-zinc-50 font-satoshi text-neutral-900 antialiased scrollbar-none md:h-screen md:overflow-y-hidden dark:bg-zinc-900 dark:text-neutral-200`}
      >
        <BackgroundPattern />

        <div className="container grid grid-cols-1 gap-4 p-4 md:grid-cols-13 md:gap-8 md:px-20 md:pb-24 md:pt-16">
          <aside className="hidden h-[calc(100vh-10rem)] flex-col overflow-hidden rounded-2xl bg-cod-gray-100/5 px-4 py-20 shadow-lg ring-1 ring-cod-gray-200/20 backdrop-blur-md md:col-span-3 md:flex dark:ring-cod-gray-200/15">
            {sidebar}
          </aside>
          <main className="relative flex h-[calc(100vh-4rem)] overflow-hidden rounded-2xl bg-cod-gray-100/5 px-4 py-6 shadow-lg ring-1 ring-cod-gray-200/20 backdrop-blur-md md:col-span-10 md:h-[calc(100vh-10rem)] md:p-8 dark:ring-cod-gray-200/15">
            {children}
            {/* Gradient to bottom */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 w-full bg-zinc-50 [mask-image:linear-gradient(transparent,#000000DD_55%,#000000)] md:h-28 dark:bg-zinc-800" />
          </main>

          {controller}
        </div>
        <CustomCursor />
        <div className="fixed bottom-0 right-0 flex h-16 w-40 items-center p-3">
          <TextHoverEffect text="為了生存我擺脫了感情" />
        </div>

        <VercelAnalytics />
      </body>
    </html>
  );
}
