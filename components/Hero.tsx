import { Eyebrow } from "./Eyebrow";
import { Container } from "./Container";
import { HeroGraphic } from "./HeroGraphic";

export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <Container className="grid grid-cols-1 items-center gap-16 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-32">
        <div>
          <Eyebrow>STRATEGY · TRANSFORMATION · PERFORMANCE</Eyebrow>
          <h1 className="text-balance mt-8 font-serif text-[2.5rem] font-medium leading-[1.08] tracking-tight text-navy sm:text-6xl lg:text-[4rem]">
            We turn complexity
            <br />
            into clear direction.
          </h1>
          <p className="mt-8 max-w-lg text-balance text-base leading-relaxed text-slate sm:text-lg">
            기업과 공공조직이 더 나은 의사결정을 내리고, 실행 가능한 전략을
            설계할 수 있도록 돕습니다.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#expertise"
              className="flex min-h-12 items-center justify-center bg-navy px-7 text-xs font-medium uppercase tracking-[0.18em] text-offwhite transition-colors hover:bg-navy-light"
            >
              Our Expertise
            </a>
            <a
              href="#contact"
              className="flex min-h-12 items-center justify-center border border-navy px-7 text-xs font-medium uppercase tracking-[0.18em] text-navy transition-colors hover:bg-navy hover:text-offwhite"
            >
              Discuss a Project
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroGraphic />
        </div>
      </Container>
    </section>
  );
}
