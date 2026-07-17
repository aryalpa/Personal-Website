"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { urlFor } from "@/sanity/image";
import type { ConferencePhoto } from "@/types/conferencePhoto";

interface Props {
  conferencePhotos: ConferencePhoto[];
}

export default function ConferenceGallery({
  conferencePhotos,
}: Props) {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % conferencePhotos.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [conferencePhotos.length, paused]);

  const current = conferencePhotos[selected];

  return (
    <section className="mb-14 sm:mb-20 lg:mb-24">

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* Heading */}

        <div className="mb-6 text-center sm:mb-10">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-[var(--primary)]/20
              bg-[var(--primary)]/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[var(--primary)]
              sm:px-5
              sm:text-sm
              sm:tracking-[0.3em]
            "
          >
            Conference Highlights
          </span>

          <h2
            className="
              heading-font
              mt-5
              text-2xl
              text-[var(--text)]
              sm:text-3xl
              lg:text-4xl
            "
          >
            Selected Moments from Research Conferences
          </h2>

        </div>

        {/* Featured Image */}

        <motion.div
          key={current._id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-[var(--border)]
            bg-[var(--card)]
            shadow-[0_20px_45px_rgba(47,52,47,0.12)]
          "
        >

          <div className="relative h-[320px] overflow-hidden rounded-[32px] sm:h-[420px] lg:h-[500px]">

            {/* Blurred Background */}

            <Image
              src={urlFor(current.image).url()}
              alt=""
              fill
              unoptimized
              className="object-cover scale-110 blur-xl brightness-75"
            />

            {/* Main Image */}

            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
              <Image
                src={urlFor(current.image).url()}
                alt={current.title}
                width={900}
                height={600}
                unoptimized
                className="max-h-full max-w-full w-auto rounded-2xl object-contain shadow-2xl"
              />
            </div>

            {/* Title Overlay — always bottom-right, on top */}

            <div
              className="
                absolute
                bottom-6
                right-6
                z-10
                max-w-md
                rounded-xl
                bg-black/55
                px-5
                py-3
                backdrop-blur-md
              "
            >
              <p
                className="
                  text-right
                  text-sm
                  font-semibold
                  leading-snug
                  text-white
                  sm:text-lg
                "
              >
                {current.title}
              </p>
            </div>

          </div>

        </motion.div>

        {/* Thumbnails */}

        <div className="mt-8 flex gap-4 overflow-x-auto pb-2">

          {conferencePhotos.map((photo, index) => (

            <button
              key={photo._id}
              onClick={() => setSelected(index)}
              className={`
                shrink-0
                w-48
                overflow-hidden
                rounded-2xl
                border
                transition-all
                duration-300
                ${
                  selected === index
                    ? "scale-105 border-[var(--accent)] ring-2 ring-[var(--accent)] shadow-xl"
                    : "border-[var(--border)] opacity-75 hover:opacity-100 hover:shadow-lg"
                }
              `}
            >

              <div className="relative h-28 bg-[var(--card)]">

                <Image
                  src={urlFor(photo.image).url()}
                  alt={photo.title}
                  fill
                  unoptimized
                  className="object-cover"
                />

              </div>

            </button>

          ))}

        </div>

      </div>

    </section>
  );
}
