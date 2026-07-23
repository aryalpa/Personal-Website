"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  Trophy,
} from "lucide-react";

import type { Award as AwardType } from "@/types/award";

interface Props {
  award: AwardType;
  index: number;
}

export default function AwardCard({ award, index }: Props) {
  const isEven = index % 2 === 0;
  const position = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, x: isEven ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.3) }}
      className={`
        group
        relative
        md:w-[calc(50%-2.75rem)]
        ${isEven ? "md:mr-auto md:text-right" : "md:ml-auto"}
      `}
    >
      {/* Timeline marker */}
      <div
        className={`
          absolute
          top-8
          z-10
          hidden
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          border-4
          border-[var(--background)]
          bg-[var(--accent)]
          shadow-[0_0_0_1px_var(--accent)]
          md:flex
          ${isEven ? "-right-[3.4rem]" : "-left-[3.4rem]"}
        `}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
      </div>

      <div
        className="
          relative
          overflow-hidden
          rounded-[1.75rem]
          border
          border-[var(--border)]
          bg-[var(--card)]
          px-5
          pb-6
          pt-5
          shadow-[0_12px_40px_rgba(47,52,47,0.07)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[var(--accent)]/60
          hover:shadow-[0_20px_50px_rgba(47,52,47,0.13)]
          sm:px-7
          sm:pb-7
        "
      >
        <div
          className={`
            absolute
            inset-y-0
            w-1.5
            bg-gradient-to-b
            from-[var(--accent)]
            via-[var(--primary)]
            to-transparent
            ${isEven ? "right-0" : "left-0"}
          `}
        />

        <div
          className={`
            flex
            items-start
            gap-4
            ${isEven ? "md:flex-row-reverse" : ""}
          `}
        >
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-[var(--primary)]
              text-white
              shadow-[0_8px_18px_rgba(90,110,81,0.25)]
              transition-transform
              duration-300
              group-hover:-rotate-6
              group-hover:scale-105
            "
          >
            <Trophy size={22} strokeWidth={1.8} />
          </div>

          <div className="min-w-0 flex-1">
            <span
              className="
                heading-font
                block
                text-3xl
                leading-none
                text-[var(--accent)]
                opacity-55
              "
              aria-hidden="true"
            >
              {position}
            </span>

            {award.link ? (
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-2
                  inline-flex
                  items-start
                  gap-2
                  text-left
                  text-xl
                  font-bold
                  leading-snug
                  text-[var(--text)]
                  transition-colors
                  hover:text-[var(--accent)]
                  md:text-2xl
                "
              >
                <span className={isEven ? "md:text-right" : ""}>
                  {award.title}
                </span>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0" />
              </a>
            ) : (
              <h2 className="mt-2 text-xl font-bold leading-snug text-[var(--text)] md:text-2xl">
                {award.title}
              </h2>
            )}
          </div>
        </div>

        <div
          className={`
            mt-5
            flex
            flex-wrap
            gap-2
            text-xs
            font-semibold
            ${isEven ? "md:justify-end" : ""}
          `}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary)]/10 px-3 py-1.5 text-[var(--primary)]">
            <Building2 size={13} />
            {award.organization}
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)]/12 px-3 py-1.5 text-[var(--text)]">
            <CalendarDays size={13} className="text-[var(--accent)]" />
            {award.period}
          </span>
        </div>

        <p className="mt-5 text-sm leading-6 text-[var(--text-light)] sm:text-base sm:leading-7">
          {award.description}
        </p>
      </div>
    </motion.article>
  );
}
