import type { Metadata } from "next";
import { satoshi } from "./fonts";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}