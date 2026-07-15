import Container from "@/components/ui/Container";

import AwardHero from "@/components/awards/AwardHero";
import AwardGrid from "@/components/awards/AwardGrid";
import { client } from "@/sanity/client";
import { AWARDS_QUERY } from "@/sanity/queries";

export const metadata = {
  title: "Awards",
};

const awards = await client.fetch(AWARDS_QUERY);

export default function AwardsPage() {
  return (
    <main className="pt-5 pb-24">

      <Container>

        <AwardHero />

        <AwardGrid awards={awards} />

      </Container>

    </main>
  );
}