"use client";

const filters = [
  "All",
  "Journal",
  "Conference",
  "Review",
  "Book Chapter",
] as const;

export type PublicationFilter =
  | "All"
  | "Journal"
  | "Conference"
  | "Review"
  | "Book Chapter";

interface Props {
  activeFilter: PublicationFilter;
  setActiveFilter: (filter: PublicationFilter) => void;
}

export default function PublicationFilters({
  activeFilter,
  setActiveFilter,
}: Props) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">

      {filters.map((filter) => {

        const active = activeFilter === filter;

        return (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
              rounded-full
              px-6
              py-3
              text-sm
              font-semibold
              transition-all
              duration-300

              ${
                active
                  ? `
                    bg-[var(--primary)]
                    text-white
                    shadow-lg
                  `
                  : `
                    border
                    border-[var(--border)]
                    bg-[var(--card)]
                    text-[var(--text-light)]
                    hover:-translate-y-1
                    hover:border-[var(--accent)]
                    hover:text-[var(--accent)]
                    hover:shadow-md
                  `
              }
            `}
          >
            {filter}
          </button>
        );

      })}

    </div>
  );
}