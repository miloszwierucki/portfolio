import Sidebar from "./@sidebar/page";
import About from "./about/page";

export default async function Home({ params }: { params: { lang: string } }) {
  return (
    <>
      <Sidebar params={params} className="md:hidden" />
      <About params={params} className="hidden md:flex" />
    </>
  );
}
