"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="pb-20">

      <div className="mx-auto max-w-4xl text-center">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-border
            bg-primary-light
            px-5
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-primary
            shadow-sm
          "
        >
          <Mail size={18} />

          Contact
        </motion.div>

        {/* Heading */}

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
            text-5xl
            text-text
            md:text-6xl
          "
        >
          Let's Collaborate
        </motion.h1>

      </div>

    </section>
  );
}