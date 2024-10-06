import { LeftSection } from "@/components/layout/left-section";
import { AboutPage } from "@/components/pages/about-client";
import client from "@/tina/__generated__/client";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const resAbout = await client.queries.about({
    relativePath: `${locale}/about.md`,
  });

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
