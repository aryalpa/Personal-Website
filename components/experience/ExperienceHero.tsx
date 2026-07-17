"use client";

import { motion } from "framer-motion";


export default function ExperienceHero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[var(--secondary)] via-[var(--background)] to-[var(--background)]" />

      {/* Decorative Blobs */}

      <div
        className="
          absolute
          left-4
          top-16
          h-48
          w-48
          rounded-full
          bg-[var(--primary)]
          opacity-10
          blur-3xl
          sm:left-20
          sm:h-72
          sm:w-72
        "
      />

      <div
        className="
          absolute
          right-4
          bottom-10
          h-52
          w-52
          rounded-full
          bg-[var(--accent)]
          opacity-10
          blur-3xl
          sm:right-20
          sm:h-80
          sm:w-80
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
              px-4
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
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
              text-4xl
              sm:text-5xl
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
