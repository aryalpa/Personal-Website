"use client";

import { useState } from "react";

import Container from "@/components/ui/Container";
import PublicationsHero from "@/components/publications/PublicationHero";
import PublicationFilters, {
  PublicationFilter,
} from "@/components/publications/PublicationFilter";
import PublicationsList from "@/components/publications/PublicationsList";
import type { Publication } from "@/types/publication";

interface Props {
  publications: Publication[];
  citationCount: number;
}

export default function PublicationsClient({
  publications,
  citationCount,
}: Props) {
  const search = "";

  const [activeFilter, setActiveFilter] =
    useState<PublicationFilter>("All");

  return (
    <main className="pb-20">
      <PublicationsHero
        publications={publications}
        citationCount={citationCount}
      />

      <section className="pb-2">
        <Container>
          <PublicationFilters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <PublicationsList
            publications={publications}
            search={search}
            activeFilter={activeFilter}
          />
        </Container>
      </section>
    </main>
  );
}
