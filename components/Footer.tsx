import { Container } from "./Container";
import { contactInfo } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-offwhite py-14">
      <Container>
        <div className="grid grid-cols-1 gap-10 border-b border-line pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-lg font-medium text-navy">
              NEXUS
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate">
              Strategy Partners
            </p>
          </div>

          <div className="text-sm leading-relaxed text-slate">
            <p>{contactInfo.address}</p>
          </div>

          <div className="text-sm leading-relaxed text-slate">
            <a
              href={`mailto:${contactInfo.email}`}
              className="block hover:text-navy"
            >
              {contactInfo.email}
            </a>
            <a
              href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
              className="mt-1 block hover:text-navy"
            >
              {contactInfo.phone}
            </a>
          </div>

          <nav
            aria-label="Footer"
            className="flex gap-6 text-sm text-slate sm:justify-end"
          >
            <a href="#" className="hover:text-navy">
              LinkedIn
            </a>
            <a href="#" className="hover:text-navy">
              Privacy
            </a>
          </nav>
        </div>

        <p className="mt-8 text-xs text-slate-light">
          © {year} NEXUS Strategy Partners. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
