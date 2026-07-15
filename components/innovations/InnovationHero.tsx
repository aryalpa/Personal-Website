"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function InnovationsHero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-24 top-8 h-96 w-96 rounded-full bg-[#DDE7D8] blur-3xl opacity-60" />

        <div className="absolute right-0 top-10 h-[420px] w-[420px] rounded-full bg-[#F2E8D5] blur-3xl opacity-60" />

      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <div className="inline-flex items-center gap-3 rounded-full border border-[#D8C49B] bg-[#F8F7F2] px-5 py-2 shadow-sm">

            <Lightbulb
              size={18}
              className="text-[#C8A96A]"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#5F7665]">
              Innovation Showcase
            </span>

          </div>

          <h1 className="heading-font mt-8 text-6xl text-[#2F3B32] lg:text-7xl">
            Innovations
          </h1>

        </motion.div>

      </div>

    </section>
  );
}