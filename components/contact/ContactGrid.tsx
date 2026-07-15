"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import type { Contact } from "@/types/contact";

interface Props {
  contact: Contact;
}

export default function ContactGrid({
  contact,
}: Props) {
  return (
    <section className="pb-6">
      <div className="mx-auto max-w-5xl">

        {/* Contact Information */}

        <div className="grid items-center py-10 md:grid-cols-2">

          {/* Email */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center px-10 text-center"
          >
            <div className="flex items-center gap-3">
              <Mail
                size={28}
                className="text-primary"
              />

              <h3 className="text-2xl font-semibold text-text">
                Email
              </h3>
            </div>

            <p className="mt-5 text-lg text-text-light break-all">
              {contact.email}
            </p>

            <Link
              href={`mailto:${contact.email}`}
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                font-medium
                text-primary
                transition-all
                hover:gap-3
              "
            >
              Send an Email
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>

          {/* Office */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              flex
              flex-col
              items-center
              justify-center
              border-l
              border-border
              px-10
              text-center
            "
          >
            <div className="flex items-center gap-3">
              <MapPin
                size={28}
                className="text-primary"
              />

              <h3 className="text-2xl font-semibold text-text">
                Office
              </h3>
            </div>

            <p className="mt-5 leading-7 text-text-light">
              {contact.department}
<br />
{contact.university}
<br />
{contact.location}
            </p>

            <Link
              href={contact.departmentLink}
              target="_blank"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                font-medium
                text-primary
                transition-all
                hover:gap-3
              "
            >
              Visit Department
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>

        </div>

        {/* Divider */}

        <div className="my-8 border-t border-border" />

        {/* Collaboration */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col items-center text-center"
        >
          <div className="h-1 w-16 rounded-full bg-primary" />

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {contact.collaborationTitle}
          </p>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-text-light
            "
          >
            {contact.collaborationDescription}
          </p>
        </motion.div>

      </div>
    </section>
  );
}