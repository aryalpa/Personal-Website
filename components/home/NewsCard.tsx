"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { News } from "@/types/news";
import { urlFor } from "@/sanity/image";

interface Props {
  article: News;
  reverse?: boolean;
}

export default function NewsCard({
  article,
  reverse = false,
}: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        grid
        items-center
        gap-10
        rounded-[32px]
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-8
        shadow-[0_10px_30px_rgba(47,52,47,0.08)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_20px_45px_rgba(47,52,47,0.15)]
        lg:grid-cols-2
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* Image */}

      <div className="group relative overflow-hidden rounded-[24px]">

        <div className="relative aspect-[4/3]">

          <Image
  src={urlFor(article.image).url()}
  alt={article.title}
  fill
  className="
    object-cover
    transition-transform
    duration-700
    group-hover:scale-105
  "
/>

        </div>

      </div>

      {/* Content */}

      <div>

        {/* Source */}

        <span
          className="
            inline-flex
            rounded-full
            bg-[var(--secondary)]
            px-4
            py-2
            text-sm
            font-semibold
            text-[var(--primary)]
          "
        >
          {article.source}
        </span>

        {/* Title */}

        <h3
          className="
            mt-6
            text-4xl
            font-bold
            leading-tight
            text-[var(--text)]
          "
        >
          {article.title}
        </h3>

        {/* Subtitle */}

        <p
          className="
            mt-5
            text-lg
            leading-8
            text-[var(--text-light)]
          "
        >
          {article.subtitle}
        </p>

        {/* Button */}

        <Link
          href={article.url}
          target="_blank"
          className="
            group
            mt-8
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-[var(--primary)]
            px-7
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-[var(--accent)]
            hover:shadow-lg
          "
        >
          Read Article

          <ArrowUpRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />

        </Link>

      </div>

    </motion.article>
  );
}