"use client";

import { useEffect, useState } from "react";
import { Container } from "./Container";
import { navLinks } from "@/lib/data";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between py-4 sm:h-20">
        <a
          href="#top"
          className="flex flex-col leading-none"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-serif text-lg font-medium tracking-tight text-navy sm:text-xl">
            NEXUS
          </span>
          <span className="text-[10px] uppercase tracking-[0.24em] text-muted">
            Strategy Partners
          </span>
        </a>

        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:text-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden shrink-0 items-center border border-navy px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-navy transition-colors hover:border-blue hover:bg-blue hover:text-white lg:inline-flex"
        >
          Project Inquiry
        </a>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`h-px w-6 bg-navy transition-transform ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-navy transition-transform ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-border bg-surface transition-[max-height] duration-300 ease-in-out lg:hidden ${
          menuOpen ? "max-h-[420px]" : "max-h-0 border-t-0"
        }`}
        inert={!menuOpen}
      >
        <Container className="flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-12 items-center border-b border-border text-sm font-medium uppercase tracking-[0.18em] text-navy transition-colors hover:text-blue last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex min-h-12 items-center justify-center border border-navy text-xs font-medium uppercase tracking-[0.18em] text-navy transition-colors hover:border-blue hover:bg-blue hover:text-white"
          >
            Project Inquiry
          </a>
        </Container>
      </div>
    </header>
  );
}
