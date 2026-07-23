"use client";

import { Sparkles } from "lucide-react";

import type { Award } from "@/types/award";
import AwardCard from "./AwardCard";

interface Props {
  awards: Award[];
}

export default function AwardGrid({ awards }: Props) {
  return (
    <section className="relative pb-32">

      <div className="relative mx-auto max-w-6xl">
        <div
          className="
            absolute
            bottom-8
            left-1/2
            top-8
            hidden
            w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-transparent
            via-[var(--border)]
            to-transparent
            md:block
          "
          aria-hidden="true"
        />

        <div className="space-y-5 md:space-y-[-1rem]">
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
