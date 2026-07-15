"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

import type { Award as AwardType } from "@/types/award";

interface Props {
  award: AwardType;
  index: number;
}

export default function AwardCard({
  award,
  index,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:border-amber-300
        hover:shadow-2xl
      "
    >
      {/* Decorative Glow */}

      <div
        className="
          absolute
          -right-16
          -top-16
          h-44
          w-44
          rounded-full
          bg-amber-200/20
          blur-3xl
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Icon */}

      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-amber-100
          transition-transform
          duration-300
          group-hover:rotate-6
          group-hover:scale-110
        "
      >
        <Award
          size={30}
          className="text-amber-600"
        />
      </div>

      {/* Title */}

      <h3
        className="
          mt-7
          text-2xl
          font-bold
          leading-snug
          text-slate-900
        "
      >
        {award.title}
      </h3>

      {/* Organization */}

      <p
        className="
          mt-3
          text-lg
          font-medium
          text-slate-600
        "
      >
        {award.organization}
      </p>

      {/* Date */}

      <span
        className="
          mt-5
          inline-flex
          rounded-full
          bg-amber-50
          px-4
          py-2
          text-sm
          font-semibold
          text-amber-700
        "
      >
        {award.period}
      </span>

      {/* Divider */}

      <div className="my-6 h-px bg-slate-200" />

      {/* Description */}

      <p
        className="
          leading-7
          text-slate-600
        "
      >
        {award.description}
      </p>
    </motion.div>
  );
}