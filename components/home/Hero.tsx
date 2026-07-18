"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import type { Home } from "@/types/home";
import {
  Download,
  GraduationCap,
} from "lucide-react";
import { FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaOrcid } from "react-icons/fa6";
import { urlFor } from "@/sanity/image";
import { fileUrl } from "@/sanity/file";

interface HeroProps {
  home: Home;
}

export default function Hero({ home }: HeroProps) {
  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden py-12 sm:min-h-[680px] lg:min-h-[700px] lg:py-16 xl:min-h-[720px]">

      {/* Magazine Banner Video */}

      <div className="absolute left-0 top-0 h-[320px] w-full overflow-hidden">

        <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover opacity-100"
>
  <source
    src={fileUrl(home.backgroundVideo)}
    type="video/mp4"
  />
</video>

        {/* Gradient Overlay */}

        <div
  className="absolute inset-0
    bg-gradient-to-r
    from-black/65
    via-black/35
    to-transparent"
/>

<div
  className="absolute inset-x-0 bottom-0 h-40
    bg-gradient-to-b
    from-transparent
    to-background"
/>

      </div>

      {/* Decorative Background */}

      <div className="absolute left-4 top-20 h-48 w-48 rounded-full bg-primary-light/60 blur-3xl sm:left-20 sm:h-72 sm:w-72" />

      <div className="absolute bottom-10 right-4 h-52 w-52 rounded-full bg-accent-light blur-3xl sm:right-20 sm:h-80 sm:w-80" />

      <Container className="relative z-10">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <h1 className="heading-font pb-6 text-4xl font-semibold leading-tight drop-shadow-2xl sm:text-5xl lg:pb-10 lg:text-6xl">
  <span className="text-white">{home.firstName} </span>
  <span className="text-[#D4AF37]">{home.lastName}</span>
  <span className="text-white">, {home.degree}</span>
</h1>


<p className="mt-6 max-w-xl text-base font-medium leading-8 text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] sm:mt-8 sm:text-lg lg:text-[var(--text)] lg:drop-shadow-none">
  {home.description}
</p>

            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap">
<a
  href={home.cv}
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex
    items-center
    gap-2
    rounded-full
    justify-center
    px-7
    py-3
    font-medium
    text-white
    transition-all
    duration-300
    hover:-translate-y-1
    bg-primary
    hover:bg-[var(--accent)]
    hover:text-white
    hover:shadow-xl
  "
>
  <Download size={18} />
  <span>Download CV</span>
</a>

<a href={home.googleScholar}
target="_blank"
rel="noopener noreferrer"
className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-border
                  bg-[var(--card)]
                  px-7
                  py-3
                  font-medium
                  text-text
                  transition
                  duration-300
                  hover:border-primary
                  hover:text-primary
                "
                >
    <GraduationCap size={18} />
                <span>Google Scholar</span>
</a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium">

  {/* ORCID */}
  <a
    href={home.orcid}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center gap-2
      text-[var(--text-light)]
      transition-all duration-300
      hover:text-[var(--accent)]
    "
  >
    <FaOrcid className="text-base" />
    ORCID
  </a>

  {/* LinkedIn */}
  <a
    href={home.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center gap-2
      text-[var(--text-light)]
      transition-all duration-300
      hover:text-[var(--accent)]
    "
  >
    <FaLinkedinIn className="text-base" />
    LinkedIn
  </a>

  {/* Email */}
  <a
    href={`mailto:${home.email}`}
    className="
      flex items-center gap-2
      text-[var(--text-light)]
      transition-all duration-300
      hover:text-[var(--accent)]
    "
  >
    <FiMail className="text-base" />
    Email
  </a>

</div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:mt-3 lg:justify-end xl:mt-5"
          >

            <div className="relative">

              <div
                className="
                  absolute
                  -inset-4
                  rounded-[40px]
                  bg-[var(--primary-light)]
                  opacity-70
                  blur-xl
                "
              />

              <div
                className="
                  relative
                  h-[420px]
                  w-[min(92vw,340px)]
                  overflow-hidden
                  rounded-[32px]
                  bg-card
                  p-4
                  shadow-2xl
                  sm:h-[460px]
                  sm:w-[360px]
                  lg:h-[520px]
                  lg:w-[400px]
                "
              >
                <Image
  src={urlFor(home.profileImage).width(800).url()}
  alt={`${home.firstName} ${home.lastName}`}
  fill
  unoptimized
  sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 400px"
  className="rounded-2xl object-cover"
/>
              </div>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}
