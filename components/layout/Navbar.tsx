"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/constants/navigation";
import Container from "../ui/Container";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

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

          <Link
            href="/"
            className="flex flex-col leading-none"
            onClick={() => setMenuOpen(false)}
          >

            <span className="text-xl font-semibold tracking-tight text-text sm:text-2xl">
  Prakash{" "}
  <span className="font-bold text-[var(--accent)]">
    Aryal
  </span>
</span>

          </Link>

          {/* Navigation */}

          <ul className="hidden items-center gap-8 md:flex">

            {navigation.map((item) => {
              const active = isActive(item.href);

              return (

              <li key={item.href}>

                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`
                    relative
                    font-medium
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
                    ${
                      active
                        ? "text-primary after:w-full"
                        : "text-text-light after:w-0"
                    }
                  `}
                >
                  {item.title}
                </Link>

              </li>

              );
            })}

          </ul>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="
              inline-flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-card
              text-text
              shadow-sm
              transition
              hover:border-primary
              hover:text-primary
              md:hidden
            "
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </nav>

        <div
          className={`
            grid
            overflow-hidden
            transition-[grid-template-rows,opacity]
            duration-300
            md:hidden
            ${menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
          `}
        >
          <ul className="min-h-0 space-y-2 pb-5">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      block
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-semibold
                      transition
                      ${
                        active
                          ? "bg-primary text-white shadow-sm"
                          : "text-text-light hover:bg-card hover:text-primary"
                      }
                    `}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </header>
  );
}
