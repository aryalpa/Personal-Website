"use client";

import { motion } from "framer-motion";
import {
  Mic,
} from "lucide-react";

export default function TalksHero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-15">

      {/* Background */}

      <div className="absolute inset-0">

        {/* Left Decoration */}

        <div
          className="
            absolute
            -left-24
            top-10
            h-96
            w-96
            rounded-full
            bg-[var(--primary)]/10
            blur-3xl
          "
        />

        {/* Right Decoration */}

        <div
          className="
            absolute
            right-0
            top-16
            h-[420px]
            w-[420px]
            rounded-full
            bg-[var(--accent)]/10
            blur-3xl
          "
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[var(--primary)]/20
              bg-[var(--primary)]/10
              max-w-full
              px-4
              py-2
              shadow-sm
              backdrop-blur-sm
            "
          >

            <Mic
              size={18}
              className="text-[var(--primary)]"
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[var(--primary)]
                sm:tracking-[0.35em]
              "
            >
              Scientific Presentations
            </span>

          </div>

          {/* Heading */}

          <h1
            className="
              heading-font
              mt-6
              text-4xl
              leading-tight
              text-[var(--text)]
              sm:text-5xl
              lg:text-7xl
            "
          >
            Talks & Presentations
          </h1>

        </motion.div>

      </div>

    </section>
  );
}
