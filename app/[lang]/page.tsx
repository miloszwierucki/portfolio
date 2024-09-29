import Sidebar from "./@sidebar/page";
import About from "./about/page";

export default async function Home({ params }: { params: { lang: string } }) {
  return (
    <>
      <div className="md:hidden">
        <Sidebar params={params} />
      </div>
      <div className="hidden md:block">
        <About params={params} />
      </div>
    </>
  );
}
