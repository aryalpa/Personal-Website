"use client";

import { motion } from "framer-motion";

import { fileUrl } from "@/sanity/file";
import type { Innovation } from "@/types/innovation";

interface Props {
  innovation: Innovation;
}

export default function InnovationCard({
  innovation,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: .25 }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-[#E6E2D6]
        bg-[#F8F7F2]
        shadow-md
        transition-all
        hover:shadow-xl
      "
    >
      <video
        controls
        className="aspect-video w-full"
      >
        <source
  src={fileUrl(innovation.video)}
  type="video/mp4"
/>
      </video>

      <div className="p-6">

        {innovation.link ? (
          <a
            href={innovation.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-xl font-semibold text-[#2F3B32] transition-colors hover:text-[var(--accent)]"
          >
            {innovation.title}
          </a>
        ) : (
          <h2 className="text-xl font-semibold text-[#2F3B32]">
           {innovation.title}
          </h2>
        )}

      </div>

    </motion.div>
  );
}
