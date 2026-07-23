"use client";

import { motion } from "framer-motion";
import { BookOpen, FlaskConical } from "lucide-react";
import type { Publication } from "@/types/publication";

interface Props {
  publications: Publication[];
  citationCount: number;
}

export default function PublicationsHero({
  publications,
  citationCount,
}: Props) {
    const publicationCount = publications.length;
  return (
    <section className="relative overflow-hidden pt-8 pb-5">

      {/* Background */}

      <div className="absolute inset-0">

        <div
          className="
            absolute
            -left-32
            top-10
            h-96
            w-96
            rounded-full
            bg-[var(--primary)]
            opacity-10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-0
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-[var(--accent)]
            opacity-10
            blur-3xl
          "
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* Small Label */}


          <div
  className="
    inline-flex
    items-center
    gap-3
    rounded-full
    border
    border-[var(--primary)]/20
    bg-[var(--primary)]/8
    max-w-full
    px-4
    py-2
    shadow-sm
    backdrop-blur-sm
  "
>

            <BookOpen
              size={18}
              className="text-[var(--primary)]"
            />

            <span
  className="
    text-xs
    font-semibold
    uppercase
    tracking-[0.2em]
    text-[var(--primary)]
    sm:tracking-[0.35em]
  "
>
              Research Archive
            </span>

          </div>

          {/* Title */}

          <h1
            className="
              heading-font
              mt-8
              text-4xl
              leading-tight
              text-[var(--text)]
              sm:text-5xl
              lg:text-7xl
            "
          >
            Publications
          </h1>

          {/* Stats */}

          <div className="mt-10 grid gap-5 sm:mt-16 sm:grid-cols-3 sm:gap-8">

            {/* Publications */}

            <div
              className="
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-6
                shadow-[0_10px_30px_rgba(47,52,47,0.08)]
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_20px_40px_rgba(47,52,47,0.15)]
                sm:p-8
              "
            >

              <h2
  className="
    text-3xl
    font-bold
    text-[var(--primary)]
    sm:text-4xl
  "
>
  {publicationCount}
</h2>

              <p
                className="
                  mt-3
                  text-[var(--text-light)]
                "
              >
                Publications
              </p>

            </div>

            {/* Citations */}

            <div
              className="
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-6
                shadow-[0_10px_30px_rgba(47,52,47,0.08)]
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_20px_40px_rgba(47,52,47,0.15)]
                sm:p-8
              "
            >

              <h2
                className="
                  text-3xl
                  font-bold
                  text-[var(--accent)]
                  sm:text-4xl
                "
              >
                {citationCount}
              </h2>

              <p
                className="
                  mt-3
                  text-[var(--text-light)]
                "
              >
                Citations
              </p>

            </div>

            {/* Research Area */}

            <div
              className="
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-6
                shadow-[0_10px_30px_rgba(47,52,47,0.08)]
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_20px_40px_rgba(47,52,47,0.15)]
                sm:p-8
              "
            >

              <div className="flex justify-center">

                <FlaskConical
                  size={38}
                  className="text-[var(--primary)]"
                />

              </div>

              <p
                className="
                  mt-4
                  text-lg
                  font-semibold
                  text-[var(--text)]
                "
              >
                Analytical Chemistry
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
