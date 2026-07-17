"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import {urlFor} from "@/sanity/image";
import Container from "@/components/ui/Container";
import ResearchThumbnail from "./ResearchThumbnail";
import type { Research } from "@/types/research";

interface Props {
  research: Research[];
}

export default function FeaturedResearch({
  research,
}: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const current = research[active];

  useEffect(() => {
  if (paused || research.length === 0) return;

  const interval = setInterval(() => {
    setActive((prev) => (prev + 1) % research.length);
  }, 7000);

  return () => clearInterval(interval);
}, [paused, research.length]);

  const nextResearch = () => {
    setActive((prev) => (prev + 1) % research.length);
  };

  const previousResearch = () => {
    setActive((prev) =>
      prev === 0 ? research.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-10">
      <Container>

        {/* Heading */}

        <div className="text-center">

          <h2 className="heading-font text-5xl text-[var(--text)]">
            Featured Research
          </h2>

          <p className="mt-4 text-lg text-[var(--text-light)]">
            Explore the research areas shaping sustainable analytical chemistry.
          </p>

        </div>

        {/* Featured Card */}

        <div
          className="relative -mx-4 mt-12 flex max-w-[1250px] items-center justify-center px-0 sm:mx-auto sm:mt-16 sm:px-10 lg:mt-20 lg:px-24"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* Previous */}

          <button
            onClick={previousResearch}
            className="
              absolute
              left-0
              z-30
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border)]
              bg-[rgba(252,251,248,0.92)]
              text-[var(--text)]
              backdrop-blur-xl
              shadow-xl
              transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-110
                hover:border-[var(--accent)]
                hover:text-[var(--accent)]
                max-sm:h-10
                max-sm:w-10
              "
          >
            <ChevronLeft className="h-5 w-5 sm:h-7 sm:w-7" />
          </button>

          <AnimatePresence mode="wait">

            <motion.div
              key={current._id}
              initial={{
                opacity: 0,
                scale: .98,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: .98,
              }}
              transition={{
                duration: .45,
              }}
              className="w-full"
            >

              {/* <Link href={`/research/${current.slug.current}`}> */}

                <div className="group relative overflow-hidden rounded-[36px] shadow-[0_20px_50px_rgba(47,52,47,0.12)]">

                  {/* IMAGE AREA */}

                  <div className="relative h-[380px] w-full overflow-hidden rounded-[36px] bg-[var(--card)] sm:h-[440px] lg:h-[520px]">

                    {/* Blurred Background */}

                    <Image
                      src={urlFor(current.image).url()}
                      alt={current.title}
                      fill
                      priority
                      className="
                        object-cover
                        scale-125
                        blur-3xl
                        brightness-50
                      "
                    />

                    {/* Foreground Image */}

                    <div className="absolute inset-0 flex items-center justify-center px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:p-8">

                      <div
                        className="
                          rounded-3xl
                          bg-[rgba(252,251,248,0.95)]
                          p-2
                          shadow-[0_20px_50px_rgba(47,52,47,0.18)]
                          transition
                          duration-700
                          group-hover:scale-[1.02]
                          w-full
                          max-w-3xl
                          sm:p-4
                        "
                      >

                        <Image
                          src={urlFor(current.image).url()}
                          alt={current.title}
                          width={900}
                          height={650}
                          priority
                          className="
                            h-auto
                            max-h-[210px]
                            max-w-full
                            w-full
                            rounded-2xl
                            object-contain
                            sm:max-h-[300px]
                            lg:max-h-[420px]
                            lg:w-auto
                          "
                        />

                      </div>

                    </div>

                                        {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Badge */}

                    <div className="absolute left-10 top-10 z-20">

                      <div
                        className="
                          inline-flex
                          items-center
                          rounded-full
                          border
                          border-white/15
                          bg-[rgba(47,52,47,0.55)]
                          px-3
                          py-2
                          backdrop-blur-xl
                          shadow-lg
                          sm:px-5
                          sm:py-2.5
                        "
                      >

                        <span
                          className="
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-white
                            sm:text-[11px]
                            sm:tracking-[0.35em]
                          "
                        >
                          Featured Research
                        </span>

                      </div>

                    </div>

                    {/* Text Content */}

                    <div className="absolute bottom-10 left-10 z-20">

                      <div className="flex items-start gap-5">

                        {/* Accent Line */}

                        <div className="mt-1 h-16 w-1 rounded-full bg-[var(--accent)] sm:mt-2 sm:h-24 lg:h-28" />

                        <div className="max-w-xl">

                          <h3
                            className="
                              text-lg
                              sm:text-2xl
                              lg:text-[42px]
                              font-bold
                              leading-tight
                              tracking-tight
                              text-white
                              drop-shadow-[0_4px_12px_rgba(0,0,0,.45)]
                            "
                          >
                            {current.title}
                          </h3>

                          {/* <button
                            className="
                              group
                              mt-6
                              inline-flex
                              items-center
                              gap-3
                              rounded-full
                              border
                              border-white/20
                              bg-white/10
                              px-5
                              py-3
                              text-sm
                              font-medium
                              text-white
                              backdrop-blur-lg
                              transition-all
                              duration-300
                              hover:bg-[var(--card)]
                              hover:text-[var(--text)]
                              hover:shadow-xl
                            "
                          >
                            Read Full Article

                            <ArrowRight
                              size={16}
                              className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                              "
                            />

                          </button> */}

                          <a
  href={current.articleLink}
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    mt-4
    inline-flex
    items-center
    gap-3
    rounded-full
    border
    border-white/20
    bg-white/10
    px-4
    py-2.5
    text-xs
    font-medium
    text-white
    backdrop-blur-lg
    transition-all
    duration-300
    hover:bg-[var(--accent)]
    hover:text-[var(--primary-dark)]
    hover:shadow-xl
    sm:mt-5
    sm:text-sm
    lg:mt-6
    lg:px-5
    lg:py-3
  "
>
  Read Full Article

  <ArrowRight
    size={16}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</a>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              {/* </Link> */}

            </motion.div>

          </AnimatePresence>

          {/* Next Button */}

          <button
            onClick={nextResearch}
            className="
              absolute
              right-0
              z-30
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border)]
              bg-[rgba(252,251,248,0.92)]
              text-[var(--text)]
              backdrop-blur-xl
              shadow-xl
              transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-110
                hover:border-[var(--accent)]
                hover:text-[var(--accent)]
                max-sm:h-10
                max-sm:w-10
              "
          >
            <ChevronRight className="h-5 w-5 sm:h-7 sm:w-7" />
          </button>

        </div>

        {/* Research Thumbnails */}

        <div className="mt-10 flex justify-center gap-5 overflow-x-auto pb-2">

          {research.map((item, index) => (

            <ResearchThumbnail
              key={item._id}
              item={item}
              index={index}
              active={active}
              setActive={setActive}
            />

          ))}

        </div>

        {/* Progress Indicator */}

        <div className="mt-8 flex justify-center gap-3">

          {research.map((_, index) => (

            <button
              key={index}
              onClick={() => setActive(index)}
              className={`
                overflow-hidden
                rounded-full
                transition-all
                duration-500
                ${
                  active === index
                    ? "h-2.5 w-12 bg-[var(--accent)]"
                    : "h-2.5 w-2.5 bg-[var(--border)] hover:bg-[var(--primary)]"
                }
              `}
            />

          ))}

        </div>

      </Container>

    </section>
  );
}
