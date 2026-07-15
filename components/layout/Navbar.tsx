"use client";

import Link from "next/link";
import { navigation } from "@/constants/navigation";
import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        border-b
        border-border
        bg-background/90
        backdrop-blur-md
      "
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex flex-col leading-none">

            <span className="text-2xl font-semibold tracking-tight text-text">
  Prakash{" "}
  <span className="font-bold text-[var(--accent)]">
    Aryal
  </span>
</span>

          </Link>

          {/* Navigation */}

          <ul className="hidden items-center gap-8 md:flex">

            {navigation.map((item) => (

              <li key={item.href}>

                <Link
                  href={item.href}
                  className="
                    relative
                    text-text-light
                    transition
                    duration-300
                    hover:text-primary

                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-primary
                    after:transition-all
                    after:duration-300

                    hover:after:w-full
                  "
                >
                  {item.title}
                </Link>

              </li>

            ))}

          </ul>

        </nav>
      </Container>
    </header>
  );
}