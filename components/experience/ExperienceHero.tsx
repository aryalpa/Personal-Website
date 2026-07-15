"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  FlaskConical,
  Globe,
} from "lucide-react";


export default function ExperienceHero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[var(--secondary)] via-[var(--background)] to-[var(--background)]" />

      {/* Decorative Blobs */}

      <div
        className="
          absolute
          left-20
          top-16
          h-72
          w-72
          rounded-full
          bg-[var(--primary)]
          opacity-10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          right-20
          bottom-10
          h-80
          w-80
          rounded-full
          bg-[var(--accent)]
          opacity-10
          blur-3xl
        "
      />

      {/* Grid Pattern */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(var(--text)_1px,transparent_1px),linear-gradient(to_right,var(--text)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
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
            Journey
          </span>

          {/* Title */}

          <h1
            className="
              heading-font
              mt-8
              text-6xl
              lg:text-7xl
              text-[var(--text)]
            "
          >
            Experience
          </h1>

        </motion.div>

      </div>

    </section>
  );
}