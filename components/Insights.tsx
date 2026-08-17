import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { insights } from "@/lib/data";

export function Insights() {
  return (
    <section id="insights" className="border-b border-line py-24 lg:py-32">
      <Container>
        <div className="mb-16 max-w-2xl">
          <Eyebrow>INSIGHTS</Eyebrow>
          <h2 className="text-balance mt-8 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-navy sm:text-5xl">
            Perspectives from
            <br />
            our practice.
          </h2>
        </div>

        <ul className="border-t border-line">
          {insights.map((post) => (
            <li key={post.title} className="group border-b border-line">
              <a
                href="#insights"
                className="flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:py-10"
              >
                <div className="flex items-center gap-4 sm:w-52 sm:shrink-0">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-blue">
                    {post.category}
                  </span>
                  <span className="text-xs tabular-nums text-slate-light">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-balance flex-1 font-serif text-xl font-medium leading-snug text-navy transition-colors group-hover:text-blue sm:text-2xl">
                  {post.title}
                </h3>
                <span
                  aria-hidden
                  className="hidden text-navy transition-transform group-hover:translate-x-1 sm:block"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
