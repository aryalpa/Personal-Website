"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Mic,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

import type { Talk } from "@/types/talk";

interface Props {
  talk: Talk;
}

export default function TalkCard({ talk }: Props) {
  return (
    <motion.article
      whileHover={{
        y: -3,
      }}
      transition={{ duration: 0.25 }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        shadow-[0_6px_20px_rgba(47,52,47,0.07)]
        transition-all
        duration-300
        hover:shadow-[0_12px_28px_rgba(47,52,47,0.13)]
      "
    >
      {/* Hover Accent */}

      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-1
          bg-transparent
          transition-all
          duration-300
          group-hover:bg-[var(--accent)]
        "
      />

      <div className="p-4 sm:p-5">

        {/* Header */}

        <div className="flex flex-wrap items-center justify-between gap-2">

          <span
            className={`
              rounded-full
              px-2.5
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-wider

              ${
                talk.type === "Invited"
                  ? "bg-[var(--accent)]/15 text-[var(--accent)]"

                  : talk.type === "Oral"

                  ? "bg-[var(--primary)]/10 text-[var(--primary)]"

                  : "bg-[var(--secondary)] text-[var(--primary)]"
              }
            `}
          >
            {talk.type}
          </span>

          <span
            className="
              text-xs
              font-semibold
              text-[var(--text-light)]
            "
          >
            {talk.year}
          </span>

        </div>

        {/* Title */}

        <h2
          className="
            mt-3
            text-base
            font-bold
            leading-tight
            text-[var(--text)]
            transition-colors
            duration-300
            group-hover:text-[var(--accent)]
            sm:text-lg
          "
        >
          {talk.title}
        </h2>

        {/* Event */}

        <div className="mt-3 flex items-start gap-2 text-xs sm:text-sm">

          <Mic
            size={15}
            className="mt-0.5 shrink-0 text-[var(--primary)]"
          />

          <span
            className="
              font-semibold
              text-[var(--text)]
            "
          >
            {talk.event}
          </span>

        </div>

        {/* Location */}

        <div className="mt-2 flex items-start gap-2 text-xs sm:text-sm">

          <MapPin
            size={14}
            className="mt-0.5 shrink-0 text-[var(--text-light)]"
          />

          <span className="text-[var(--text-light)]">
            {talk.location}
          </span>

        </div>

        {/* Date */}

        <div className="mt-2 flex items-start gap-2 text-xs sm:text-sm">

          <Calendar
            size={14}
            className="mt-0.5 shrink-0 text-[var(--text-light)]"
          />

          <span className="text-[var(--text-light)]">
            {talk.date}
          </span>

        </div>

        {/* Description */}

        <p
          className="
            mt-3
            text-xs
            leading-5
            text-[var(--text-light)]
            sm:text-sm
            sm:leading-5
          "
        >
          {talk.description}
        </p>

        {/* Button */}

        {talk.link && (

          <div className="mt-3">

            <Link
              href={talk.link}
              target="_blank"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[var(--primary)]
                px-3.5
                py-1.5
                text-xs
                font-medium
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[var(--accent)]
                hover:shadow-lg
              "
            >
              Learn More

              <ExternalLink size={14} />

            </Link>

          </div>

        )}

      </div>

    </motion.article>
  );
}
