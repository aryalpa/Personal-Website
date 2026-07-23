"use client";

import { motion, AnimatePresence } from "framer-motion";

import PublicationCard from "./PublicationCard";
import { PublicationFilter } from "./PublicationFilter";
import type { Publication } from "@/types/publication";

interface Props {
  publications: Publication[];

  search: string;

  activeFilter: PublicationFilter;
}

export default function PublicationsList({
  publications,
  search,
  activeFilter,
}: Props) {
  // ------------------------
  // Filter Publications
  // ------------------------

  const filtered = publications.filter((publication) => {
    const keyword = search.toLowerCase();

    const matchesSearch =
      publication.title.toLowerCase().includes(keyword) ||
      publication.authors.toLowerCase().includes(keyword) ||
      publication.journal.toLowerCase().includes(keyword) ||
      publication.keywords.some((k) =>
        k.toLowerCase().includes(keyword)
      );

    const matchesFilter =
      activeFilter === "All" ||
      publication.type === activeFilter;

    return matchesSearch && matchesFilter;
  });

  // ------------------------
  // Group by Year
  // ------------------------

  const grouped = filtered.reduce((acc, publication) => {
    if (!acc[publication.year]) {
      acc[publication.year] = [];
    }

    acc[publication.year].push(publication);

    return acc;
  }, {} as Record<number, typeof filtered>);

  const years = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="mt-20">

      <AnimatePresence>

        {years.length === 0 && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              rounded-3xl
              border
              border-[var(--border)]
              bg-[var(--card)]
              p-20
              text-center
              shadow-md
            "
          >

            <h3
              className="
                text-3xl
                font-bold
                text-[var(--text)]
              "
            >
              No publications found
            </h3>

            <p
              className="
                mt-3
                text-[var(--text-light)]
              "
            >
              Try searching another keyword.
            </p>

          </motion.div>

        )}

      </AnimatePresence>

      <div className="space-y-24">

        {years.map((year) => (

          <motion.section
            key={year}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >

            {/* Year Heading */}

            <div className="mb-5 flex items-center gap-4">

              <div className="h-px flex-1 bg-[var(--border)]" />

              <div
                className="
                  rounded-full
                  bg-[var(--primary)]
                  px-5
                  py-1.5
                  shadow-md
                "
              >

                <h2
                  className="
                    text-lg
                    font-bold
                    text-white
                  "
                >
                  {year}
                </h2>

              </div>

              <div className="h-px flex-1 bg-[var(--border)]" />

            </div>

            {/* Cards */}

            <div className="space-y-3">

              {grouped[year].map((publication, index) => (

                <motion.div
                  key={publication._id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >

                  <PublicationCard
                    publication={publication}
                  />

                </motion.div>

              ))}

            </div>

          </motion.section>

        ))}

      </div>

    </div>
  );
}
