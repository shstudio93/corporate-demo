import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { expertiseAreas } from "@/lib/data";

export function Expertise() {
  return (
    <section id="expertise" className="border-b border-border bg-surface py-24 lg:py-32">
      <Container>
        <div className="mb-16 max-w-2xl">
          <Eyebrow>WHAT WE DO</Eyebrow>
          <h2 className="text-balance mt-8 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-navy sm:text-5xl">
            Four areas of expertise,
            <br />
            one integrated approach.
          </h2>
        </div>

        <div className="grid grid-cols-1 border-t border-l border-border sm:grid-cols-2">
          {expertiseAreas.map((area) => (
            <div
              key={area.index}
              className="border-r border-b border-border p-8 sm:p-10 lg:p-12"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-3xl text-blue">
                  {area.index}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-2xl font-medium text-navy sm:text-[1.75rem]">
                {area.title}
              </h3>
              <p className="mt-4 max-w-sm leading-relaxed text-ink">
                {area.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2 border-t border-border pt-5 text-xs uppercase tracking-[0.1em] text-muted">
                {area.items.map((item, i) => (
                  <li key={item} className="flex items-center gap-3">
                    {item}
                    {i < area.items.length - 1 && (
                      <span aria-hidden className="text-border-strong">
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
