import InnovationsHero from "@/components/innovations/InnovationHero";
import InnovationsGrid from "@/components/innovations/InnovationGrid";
import { client } from "@/sanity/client";
import { INNOVATION_IMAGES_QUERY, INNOVATIONS_QUERY } from "@/sanity/queries";

export const metadata = {
  title: "Innovations",
};

const innovations = await client.fetch(INNOVATIONS_QUERY);

const innovationImages = await client.fetch(
  INNOVATION_IMAGES_QUERY
);

export default function InnovationsPage() {
  return (
    <main>

      <InnovationsHero />

      <InnovationsGrid innovations={innovations} innovationImages={innovationImages}/>

    </main>
  );
}