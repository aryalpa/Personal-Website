import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import { client } from "@/sanity/client";
import { EXPERIENCE_QUERY } from "@/sanity/queries";

export const metadata = {
  title: "Experience",
};

const experiences = await client.fetch(EXPERIENCE_QUERY);

export const dynamic = "force-dynamic";

export default function ExperiencePage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">

      {/* Hero */}
      <ExperienceHero />

      <ExperienceTimeline experiences={experiences} />

    </main>
  );
}