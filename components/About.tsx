import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { coreValues } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-b border-line py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Eyebrow>ABOUT NEXUS</Eyebrow>
            <h2 className="text-balance mt-8 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-navy sm:text-5xl">
              From Insight
              <br />
              to Execution.
            </h2>
            <p className="mt-8 max-w-md text-balance leading-relaxed text-slate">
              NEXUS Strategy Partners는 보고서를 만드는 것에서 그치지 않습니다.
              문제 정의부터 분석, 전략 수립, 실행 체계 설계까지 하나의
              흐름으로 연결하여, 조직이 실제로 움직일 수 있는 전략을
              제공합니다.
            </p>
          </div>

          <div className="lg:col-span-7 lg:pt-1">
            <ul className="divide-y divide-line border-t border-line">
              {coreValues.map((value) => (
                <li
                  key={value.index}
                  className="grid grid-cols-[3rem_1fr] gap-x-6 gap-y-2 py-8 sm:grid-cols-[4rem_1fr]"
                >
                  <span className="font-serif text-2xl text-blue">
                    {value.index}
                  </span>
                  <div>
                    <p className="font-serif text-xl font-medium text-navy sm:text-2xl">
                      {value.title}
                    </p>
                    <p className="mt-2 max-w-md leading-relaxed text-slate">
                      {value.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
