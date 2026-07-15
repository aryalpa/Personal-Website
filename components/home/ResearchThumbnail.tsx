"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { urlFor } from "@/sanity/image";
import type { Research } from "@/types/research";

interface Props {
  item: Research;
  index: number;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

export default function ResearchThumbnail({
  item,
  index,
  active,
  setActive,
}: Props) {
  const isActive = active === index;

  return (
    <motion.button
      whileHover={{
        y: -5,
        scale: 1.04,
      }}
      onClick={() => setActive(index)}
      className={`
        relative overflow-hidden rounded-2xl transition-all duration-300
        ${
          isActive
            ? "h-28 w-44 ring-4 ring-[var(--accent)] shadow-[0_15px_35px_rgba(47,52,47,0.18)]"
            : "h-24 w-36 opacity-70 hover:opacity-100"
        }
      `}
    >
      <Image
        src={urlFor(item.image).url()}
        alt={item.title}
        fill
        className="object-contain transition duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Title */}
      <div className="absolute bottom-2 left-2 right-2">
        <p className="line-clamp-2 text-left text-xs font-medium text-white drop-shadow-md">
          {item.title}
        </p>
      </div>
    </motion.button>
  );
}