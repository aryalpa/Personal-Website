"use client";

import { motion } from "framer-motion";

import NewsCard from "./NewsCard";
import type { News } from "@/types/news";

interface Props {
  news: News[];
}

export default function InTheNews({ news }: Props) {
  return (
    <section className="py-12 sm:py-16 lg:py-20">

      <div className="mx-auto max-w-7xl px-6 lg:px-0">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-20"
        >

          {/* Badge */}

          <span
            className="
              inline-flex
              rounded-full
              border
              border-[var(--primary)]/20
              bg-[var(--primary)]/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[var(--primary)]
              shadow-sm
              sm:px-5
              sm:text-sm
              sm:tracking-[0.25em]
            "
          >
            Featured Stories
          </span>

          {/* Title */}

          <h2
            className="
              heading-font
              mt-6
              text-3xl
              text-[var(--text)]
              sm:text-4xl
              lg:text-5xl
            "
          >
            In the News
          </h2>

          {/* Description */}

          <p
            className="
              mt-6
              text-sm
              leading-6
              text-[var(--text-light)]
              sm:text-base
              sm:leading-7
              lg:text-lg
              lg:leading-8
            "
          >
            Research discoveries, scientific achievements and
            academic milestones featured by universities,
            professional societies and research organizations.
          </p>

        </motion.div>

        {/* Articles */}

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">

          {news.map((article, index) => (

            <NewsCard
              key={article._id}
              article={article}
              reverse={index % 2 === 1}
            />

          ))}

        </div>

      </div>

    </section>
  );
}
