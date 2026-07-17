"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function InnovationsHero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-28 top-8 h-64 w-64 rounded-full bg-[#DDE7D8] blur-3xl opacity-60 sm:-left-24 sm:h-96 sm:w-96" />

        <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-[#F2E8D5] blur-3xl opacity-60 sm:h-[420px] sm:w-[420px]" />

      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-[#D8C49B] bg-[#F8F7F2] px-4 py-2 shadow-sm sm:px-5">

            <Lightbulb
              size={18}
              className="text-[#C8A96A]"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5F7665] sm:tracking-[0.35em]">
              Innovation Showcase
            </span>

          </div>

          <h1 className="heading-font mt-8 text-4xl text-[#2F3B32] sm:text-5xl lg:text-7xl">
            Innovations
          </h1>

        </motion.div>

      </div>

    </section>
  );
}
