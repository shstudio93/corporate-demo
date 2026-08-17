import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { impactStats } from "@/lib/data";

export function Impact() {
  return (
    <section className="border-b border-line bg-navy py-20 text-offwhite lg:py-24">
      <Container>
        <Eyebrow tone="light">TRACK RECORD</Eyebrow>

        <div className="mt-14 grid grid-cols-2 gap-y-12 border-t border-white/15 lg:grid-cols-4 lg:gap-y-0">
          {impactStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`border-white/15 pt-8 pr-6 ${
                i % 2 === 0 ? "" : "border-l"
              } lg:border-l lg:pl-10 lg:pr-0 ${i === 0 ? "lg:border-l-0 lg:pl-0" : ""}`}
            >
              <p className="font-serif text-5xl font-medium tabular-nums leading-none sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
