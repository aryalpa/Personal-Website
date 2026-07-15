"use client";

import type { Award } from "@/types/award";
import AwardCard from "./AwardCard";

interface Props {
  awards: Award[];
}

export default function AwardGrid({
  awards,
}: Props) {
  return (
    <section className="bg-background pb-32">

      <div className="mx-auto max-w-7xl">

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
          "
        >
          {awards.map((award, index) => (
            <AwardCard
              key={award._id}
              award={award}
              index={index}
            />
          ))}
        </div>

      </div>

    </section>
  );
}