import { LeftSection } from "@/components/layout/left-section";
import { AboutPage } from "@/components/pages/about-client";
import client from "@/tina/__generated__/client";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const resAbout = await client.queries.about({
    relativePath: `${lang}/about.md`,
  });

  const resSidebar = await client.queries.sidebar({
    relativePath: `${lang}/sidebar.json`,
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
