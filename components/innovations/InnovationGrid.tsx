"use client";

import InnovationCard from "./InnovationCard";
import { urlFor } from "@/sanity/image";
import type { InnovationImage } from "@/types/innovationImage";
import Image from "next/image";
import type { Innovation } from "@/types/innovation";

interface Props {
  innovations: Innovation[];
  innovationImages: InnovationImage[];
}

export default function InnovationsGrid({
  innovations,
  innovationImages,
}: Props) {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {innovations.map((innovation) => (
  <InnovationCard
    key={innovation._id}
    innovation={innovation}
  />
))}
        </div>

        {/* Images */}

<div className="mt-10 grid gap-8 md:grid-cols-2">

  {innovationImages.map((item) => (

    <div
      key={item._id}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-[#D7D2C8]
        bg-[#FAF8F4]
        shadow-md
        transition
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="relative h-[260px] bg-white p-3 sm:h-[320px]">
        <Image
          src={urlFor(item.image).url()}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#3D4F43]">
          {item.title}
        </h3>
      </div>
    </div>

  ))}

</div>
      </div>
    </section>
  );
}
