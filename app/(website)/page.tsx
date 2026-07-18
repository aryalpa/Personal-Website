import FeaturedResearch from "@/components/home/FeaturedResearch";
import Hero from "@/components/home/Hero";
import InTheNews from "@/components/home/InTheNews";

import { client } from "@/sanity/client";
import {
  HOME_QUERY,
  RESEARCH_QUERY,
  NEWS_QUERY,
} from "@/sanity/queries";

export const dynamic = "force-dynamic";

export default async function Home() {
  const home = await client.fetch(HOME_QUERY);

  const research = await client.fetch(RESEARCH_QUERY);

  const news = await client.fetch(NEWS_QUERY);

  return (
    <>
      <Hero home={home} />

      <FeaturedResearch research={research} />

      <InTheNews news={news} />
    </>
  );
}