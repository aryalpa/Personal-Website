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
        y: -8,
      }}
      transition={{ duration: 0.25 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        shadow-[0_10px_30px_rgba(47,52,47,0.08)]
        transition-all
        duration-300
        hover:shadow-[0_20px_45px_rgba(47,52,47,0.15)]
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

      <div className="p-5 sm:p-6 lg:p-8">

        {/* Header */}

        <div className="flex flex-wrap items-center justify-between gap-4">

          <span
            className={`
              rounded-full
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]

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
              text-sm
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
            mt-4
            text-xl
            font-bold
            leading-tight
            text-[var(--text)]
            transition-colors
            duration-300
            group-hover:text-[var(--accent)]
            sm:text-2xl
            lg:mt-6
            lg:text-3xl
          "
        >
          {talk.title}
        </h2>

        {/* Event */}

        <div className="mt-5 flex items-center gap-3 text-sm sm:text-base lg:mt-8">

          <Mic
            size={20}
            className="text-[var(--primary)]"
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

        <div className="mt-3 flex items-center gap-3 text-sm sm:text-base lg:mt-4">

          <MapPin
            size={18}
            className="text-[var(--text-light)]"
          />

          <span className="text-[var(--text-light)]">
            {talk.location}
          </span>

        </div>

        {/* Date */}

        <div className="mt-3 flex items-center gap-3 text-sm sm:text-base">

          <Calendar
            size={18}
            className="text-[var(--text-light)]"
          />

          <span className="text-[var(--text-light)]">
            {talk.date}
          </span>

        </div>

        {/* Description */}

        <p
          className="
            mt-5
            text-sm
            leading-6
            text-[var(--text-light)]
            sm:text-base
            sm:leading-7
            lg:mt-8
            lg:leading-8
          "
        >
          {talk.description}
        </p>

        {/* Button */}

        {talk.link && (

          <div className="mt-5 lg:mt-8">

            <Link
              href={talk.link}
              target="_blank"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[var(--primary)]
                px-6
                py-3
                text-sm
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

              <ExternalLink size={18} />

            </Link>

          </div>

        )}

      </div>

    </motion.article>
  );
}
