import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { approachSteps } from "@/lib/data";

export function Approach() {
  return (
    <section className="border-b border-border bg-surface py-24 lg:py-32">
      <Container>
        <div className="mb-16 max-w-2xl">
          <Eyebrow>METHODOLOGY</Eyebrow>
          <h2 className="text-balance mt-8 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-navy sm:text-5xl">
            How We Work
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4">
          {approachSteps.map((step) => (
            <li key={step.index}>
              <span className="font-serif text-sm text-blue">
                {step.index}
              </span>
              <h3 className="mt-3 text-lg font-semibold uppercase tracking-[0.08em] text-navy">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[16rem] leading-relaxed text-ink">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
