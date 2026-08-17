import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="border-b border-line py-24 lg:py-32">
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Eyebrow>SELECTED PROJECTS</Eyebrow>
            <h2 className="text-balance mt-8 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-navy sm:text-5xl">
              Work built to be
              <br />
              actually implemented.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate">
            실제 고객명 대신 프로젝트 유형과 산업 특성을 기준으로 수행 사례를
            소개합니다.
          </p>
        </div>

        <div className="border-t border-line">
          {projects.map((item) => (
            <div
              key={item.index}
              className="grid grid-cols-1 gap-6 border-b border-line py-8 sm:grid-cols-[3rem_1fr] sm:gap-8 lg:grid-cols-[4rem_1fr_1.1fr] lg:items-center lg:py-10"
            >
              <span className="font-serif text-2xl text-blue">
                {item.index}
              </span>

              <h3 className="font-serif text-xl font-medium leading-snug text-navy sm:text-2xl">
                {item.project}
              </h3>

              <div className="grid grid-cols-3 gap-4 sm:col-start-2 sm:pl-0 lg:col-start-3 lg:pl-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-light">
                    Client Type
                  </p>
                  <p className="mt-1.5 text-sm text-slate">
                    {item.clientType}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-light">
                    Service
                  </p>
                  <p className="mt-1.5 text-sm text-slate">{item.service}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-light">
                    Year
                  </p>
                  <p className="mt-1.5 text-sm tabular-nums text-slate">
                    {item.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
