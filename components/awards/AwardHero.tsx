"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function AwardHero() {
  return (
    <section className="pb-16 pt-8 sm:pb-20">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-border
            bg-[var(--primary-light)]
            max-w-full
            px-4
            py-2
            shadow-sm
          "
        >
          <Award
            size={18}
            className="text-primary"
          />

          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.16em]
              text-text
              sm:tracking-[0.25em]
            "
          >
            Awards & Accomplishments
          </span>
        </motion.div>

        {/* Title */}

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.6,
          }}
          className="
            heading-font
            mt-8
            text-4xl
            leading-tight
            text-text
            sm:text-5xl
            md:text-6xl
          "
        >
          Recognitions Along
          <br />
          My Journey
        </motion.h1>
      </div>
    </section>
  );
}
