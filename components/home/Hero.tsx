"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import type { Home } from "@/types/home";
import {
  Download,
  GraduationCap,
} from "lucide-react";
import { FiExternalLink, FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaOrcid } from "react-icons/fa6";
import { urlFor } from "@/sanity/image";
import { fileUrl } from "@/sanity/file";

interface HeroProps {
  home: Home;
}

export default function Hero({ home }: HeroProps) {
  return (
    <section className="relative flex min-h-[calc(85vh-80px)] items-center overflow-hidden">

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

      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-primary-light/60 blur-3xl" />

      <div className="absolute bottom-10 right-20 h-80 w-80 rounded-full bg-accent-light blur-3xl" />

      <Container className="relative z-10">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <h1 className="heading-font text-5xl lg:text-6xl pb-10 font-semibold leading-tight drop-shadow-2xl">
  <span className="text-white">{home.firstName} </span>
  <span className="text-[#D4AF37]">{home.lastName}</span>
  <span className="text-white">, {home.degree}</span>
</h1>


<p className="mt-8 max-w-xl text-lg leading-8 text-[var(--text)]">
  {home.description}
</p>

            <div className="mt-10 flex flex-wrap gap-4">
<a
  href={home.cv}
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex
    items-center
    gap-2
    rounded-full
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

            <div className="mt-8 flex items-center gap-8 text-sm font-medium">

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
            className="relative flex justify-end lg:-mt-10"
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
                  h-[520px]
                  w-[400px]
                  overflow-hidden
                  rounded-[32px]
                  bg-card
                  p-4
                  shadow-2xl
                "
              >
                <Image
  src={urlFor(home.profileImage).width(800).url()}
  alt={`${home.firstName} ${home.lastName}`}
  fill
  unoptimized
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