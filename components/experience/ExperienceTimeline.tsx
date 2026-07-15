"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  FlaskConical,
} from "lucide-react";

import type { Experience } from "@/types/experience";

const badgeColor = {
  Research:
    "bg-primary-light text-primary",

  Teaching:
    "bg-accent-light text-accent",

  Professional:
    "bg-[var(--secondary-light)] text-[var(--secondary)]",
};

const badgeIcon = {
  Research: FlaskConical,
  Teaching: GraduationCap,
  Professional: Briefcase,
};

interface Props {
  experiences: Experience[];
}

export default function ExperienceTimeline({
  experiences,
}: Props) {
  return (
    <section className="pb-32">

      <div className="mx-auto max-w-6xl px-6">

        <div className="relative">

          {/* Timeline Line */}

          <div className="absolute left-[180px] top-0 bottom-0 w-[3px] -translate-x-1/2 rounded-full bg-border" />

          {experiences.map((item, index) => {

            const Icon = badgeIcon[item.category];

            return (

              <motion.div
                key={item._id}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.55,
                }}
                className="relative flex gap-10 pb-20"
              >

                {/* Timeline */}

                <div className="w-[160px] shrink-0 pr-12 text-right">

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-light">
                    Timeline
                  </p>

                  <p className="mt-2 whitespace-nowrap text-base font-semibold text-text">
                    {item.duration}
                  </p>

                </div>

                {/* Timeline Dot */}

                <div
                  className="
                    absolute
                    left-[180px]
                    top-4
                    h-5
                    w-5
                    -translate-x-1/2
                    rounded-full
                    border-4
                    border-card
                    bg-primary
                    shadow-lg
                  "
                />

                {/* Content */}

                <div className="flex-1 pb-2">

                  {/* Category */}

                  <div
                    className={`
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      ${badgeColor[item.category]}
                    `}
                  >

                    <Icon size={16} />

                    {item.category}

                  </div>

                  {/* Position */}

                  <h3 className="mt-5 text-3xl font-bold text-text">
                    {item.position}
                  </h3>

                  {/* Institution */}

                  <p className="mt-2 text-xl font-medium text-text-light">
                    {item.institution}
                  </p>

                  {/* Description */}

                  <ul className="mt-6 space-y-3 text-text-light">

                    {item.highlights.map((point) => (

                      <li
                        key={point}
                        className="flex items-start gap-3 leading-7"
                      >

                        <span className="mt-2 h-2 w-2 rounded-full bg-primary" />

                        <span>{point}</span>

                      </li>

                    ))}

                  </ul>

                  {/* Skills */}

                  <div className="mt-6 flex flex-wrap gap-3">

                    {item.skills.map((skill) => (

                      <span
                        key={skill}
                        className="
                          rounded-full
                          bg-card
                          border
                          border-border
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-text-light
                          transition-all
                          duration-300
                          hover:border-primary
                          hover:bg-primary-light
                          hover:text-primary
                        "
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}