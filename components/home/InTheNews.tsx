"use client";

import { motion } from "framer-motion";

import NewsCard from "./NewsCard";
import type { News } from "@/types/news";

interface Props {
  news: News[];
}

export default function InTheNews({ news }: Props) {
  return (
    <section className="py-20">

      <div className="mx-auto max-w-7xl">

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
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          {/* Badge */}

          <span
            className="
              inline-flex
              rounded-full
              border
              border-[var(--primary)]/20
              bg-[var(--primary)]/10
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[var(--primary)]
              shadow-sm
            "
          >
            Featured Stories
          </span>

          {/* Title */}

          <h2
            className="
              heading-font
              mt-6
              text-5xl
              text-[var(--text)]
            "
          >
            In the News
          </h2>

          {/* Description */}

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-[var(--text-light)]
            "
          >
            Research discoveries, scientific achievements and
            academic milestones featured by universities,
            professional societies and research organizations.
          </p>

        </motion.div>

        {/* Articles */}

        <div className="space-y-16">

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