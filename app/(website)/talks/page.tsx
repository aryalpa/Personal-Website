import Container from "@/components/ui/Container";
import TalksHero from "@/components/talks/TalksHero";
import TalksSection from "@/components/talks/TalksSection";
import ConferenceGallery from "@/components/talks/ConferenceGallery";

import { client } from "@/sanity/client";
import { TALKS_QUERY } from "@/sanity/queries";
import { Talk } from "@/types/talk";
import { CONFERENCE_PHOTOS_QUERY } from "@/sanity/queries";
import type { ConferencePhoto } from "@/types/conferencePhoto";

export const metadata = {
  title: "Talks",
};

export default async function TalksPage() {
  const talks: Talk[] = await client.fetch(TALKS_QUERY);

  const conferencePhotos: ConferencePhoto[] =
  await client.fetch(CONFERENCE_PHOTOS_QUERY);

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero */}
      <TalksHero />

      {/* Conference Gallery */}
      <ConferenceGallery
  conferencePhotos={conferencePhotos}
/>

      {/* Talks */}
      <section className="pb-32">
        <Container>
          <TalksSection talks={talks} />
        </Container>
      </section>
    </main>
  );
}