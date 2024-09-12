import { HomePage } from "@/components/home-page";
import client from "@/tina/__generated__/client";

export default async function Home() {
  const res = await client.queries.page({ relativePath: "homePage.json" });

  return (
    <HomePage data={res.data} variables={res.variables} query={res.query} />
  );
}
