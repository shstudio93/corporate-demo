import { Container } from "./Container";
import { contactInfo } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy py-14 text-frost">
      <Container>
        <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-lg font-medium text-white">
              NEXUS
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-frost">
              Strategy Partners
            </p>
          </div>

          <div className="text-sm leading-relaxed text-frost">
            <p>{contactInfo.address}</p>
          </div>

          <div className="text-sm leading-relaxed text-frost">
            <a
              href={`mailto:${contactInfo.email}`}
              className="block transition-colors hover:text-blue-light"
            >
              {contactInfo.email}
            </a>
            <a
              href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
              className="mt-1 block transition-colors hover:text-blue-light"
            >
              {contactInfo.phone}
            </a>
          </div>

          <nav
            aria-label="Footer"
            className="flex gap-6 text-sm text-frost sm:justify-end"
          >
            <a href="#" className="transition-colors hover:text-blue-light">
              LinkedIn
            </a>
            <a href="#" className="transition-colors hover:text-blue-light">
              Privacy
            </a>
          </nav>
        </div>

        <p className="mt-8 text-xs text-frost/70">
          © {year} NEXUS Strategy Partners. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
