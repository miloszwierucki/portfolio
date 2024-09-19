import BackgroundPattern from "@/components/background-pattern";
import ToogleButton from "@/components/toggle-theme";
import CustomCursor from "@/components/custom-cursor";

export default function RootLayout({
  sidebar,
  children,
}: Readonly<{
  sidebar: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <>
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
    </>
  );
}
