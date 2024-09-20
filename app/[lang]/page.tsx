import { HomePage } from "@/components/pages/home-page";
import client from "@/tina/__generated__/client";

export const revalidate = 30;

export default async function Home() {
  const res = await client.queries.page({ relativePath: "cos.md" });

  return (
    <HomePage data={res.data} variables={res.variables} query={res.query} />
  );
}
