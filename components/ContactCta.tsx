import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { contactInfo } from "@/lib/data";

export function ContactCta() {
  return (
    <section id="contact" className="bg-navy py-24 text-offwhite lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <Eyebrow tone="light">START A PROJECT</Eyebrow>
            <h2 className="text-balance mt-8 font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Let&rsquo;s solve
              <br />
              the right problem.
            </h2>
            <p className="mt-8 max-w-lg text-balance leading-relaxed text-slate-light">
              새로운 전략, 조직 변화, 시장 분석이 필요하다면 프로젝트의
              시작부터 함께하겠습니다.
            </p>

            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-10 inline-flex min-h-12 items-center justify-center border border-offwhite px-7 text-xs font-medium uppercase tracking-[0.18em] text-offwhite transition-colors hover:bg-offwhite hover:text-navy"
            >
              Start a Conversation
            </a>
          </div>

          <div className="flex flex-col justify-end gap-4 border-t border-white/15 pt-8 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-slate-light">
                Email
              </p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="mt-2 block text-lg text-offwhite hover:text-blue"
              >
                {contactInfo.email}
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-slate-light">
                Phone
              </p>
              <a
                href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
                className="mt-2 block text-lg text-offwhite hover:text-blue"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
