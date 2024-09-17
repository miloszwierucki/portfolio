import BackgroundPattern from "@/components/background-pattern";
import ToogleButton from "@/components/toggle-theme";
import CustomCursor from "@/components/custom-cursor";
import type { Metadata } from "next";
import { satoshi } from "../fonts";
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
  params,
}: Readonly<{
  sidebar: React.ReactNode;
  children: React.ReactNode;
  params: LangParams;
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={`${satoshi.variable} bg-zinc-50 font-satoshi text-neutral-900 antialiased dark:bg-zinc-950 dark:text-neutral-200`}
      >
        <BackgroundPattern />
        <main className="grid h-screen w-screen grid-cols-13 gap-8 px-20 py-16">
          <ToogleButton />
          <section className="col-span-3 rounded-2xl bg-cod-gray-100/5 px-4 py-20 shadow-xl ring-1 ring-cod-gray-200/15 backdrop-blur-md">
            {sidebar}
          </section>
          <section className="col-span-10 rounded-2xl bg-cod-gray-100/5 px-4 py-8 shadow-xl ring-1 ring-cod-gray-200/15 backdrop-blur-md">
            {children}
          </section>
        </main>
        <CustomCursor />
      </body>
    </html>
  );
}