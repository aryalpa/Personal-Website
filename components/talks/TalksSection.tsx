"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Mic,
  ImageIcon,
} from "lucide-react";

import type { Talk } from "@/types/talk";
import TalkCard from "./TalkCard";

interface Props {
  talks: Talk[];
}

export default function TalksSection({
  talks,
}: Props) {
  const invited = talks.filter(
    (talk) => talk.type === "Invited"
  );

  const oral = talks.filter(
    (talk) => talk.type === "Oral"
  );

  const poster = talks.filter(
    (talk) => talk.type === "Poster"
  );

  return (
    <div className="space-y-28">

      {/* ================================= */}
      {/* INVITED LECTURE */}
      {/* ================================= */}

      <section>

        <div className="mb-10 flex items-center gap-4">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-[var(--accent)]
              text-white
              shadow-lg
            "
          >
            <GraduationCap size={28} />
          </div>

          <div>

            <h2
              className="
                text-4xl
                font-bold
                text-[var(--text)]
              "
            >
              Invited Lecture
            </h2>

            <p
              className="
                mt-2
                text-[var(--text-light)]
              "
            >
              Distinguished invited seminar and keynote presentation.
            </p>

          </div>

        </div>

        <div className="space-y-8">

          {invited.map((talk, index) => (

            <motion.div
              key={talk._id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
            >

              <TalkCard talk={talk} />

            </motion.div>

          ))}

        </div>

      </section>

      {/* ================================= */}
      {/* ORAL PRESENTATIONS */}
      {/* ================================= */}

      <section>

        <div className="mb-10 flex items-center gap-4">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-[var(--primary)]
              text-white
              shadow-lg
            "
          >
            <Mic size={28} />
          </div>

          <div>

            <h2
              className="
                text-4xl
                font-bold
                text-[var(--text)]
              "
            >
              Oral Presentations
            </h2>

            <p
              className="
                mt-2
                text-[var(--text-light)]
              "
            >
              Conference talks delivered at national and international meetings.
            </p>

          </div>

        </div>

        <div className="space-y-8">

          {oral.map((talk, index) => (

            <motion.div
              key={talk._id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
            >

              <TalkCard talk={talk} />

            </motion.div>

          ))}

        </div>

      </section>

      {/* ================================= */}
      {/* POSTER PRESENTATIONS */}
      {/* ================================= */}

      <section>

        <div className="mb-10 flex items-center gap-4">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-[var(--accent)]
              text-white
              shadow-lg
            "
          >
            <ImageIcon size={28} />
          </div>

          <div>

            <h2
              className="
                text-4xl
                font-bold
                text-[var(--text)]
              "
            >
              Poster Presentations
            </h2>

            <p
              className="
                mt-2
                text-[var(--text-light)]
              "
            >
              Research posters presented at scientific conferences and symposia.
            </p>

          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {poster.map((talk, index) => (

            <motion.div
              key={talk._id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
            >

              <TalkCard talk={talk} />

            </motion.div>

          ))}

        </div>

      </section>

    </div>
  );
}