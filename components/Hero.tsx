import { navItems, profile } from "@/data";
import CareerTrace from "./CareerTrace";

export default function Hero() {
  return (
    <header id="top" className="relative overflow-hidden border-b border-line">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />

      <nav className="relative mx-auto flex max-w-page items-center justify-between px-6 py-6 md:px-10" aria-label="Main">
        <a href="#top" className="wide text-lg font-bold">
          {profile.name}
        </a>
        <ul className="hidden gap-7 text-[15px] text-mute lg:flex">
          {navItems.slice(1).map((item) => (
            <li key={item.name}>
              <a href={item.link} className="hover:text-snow">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <a href={`mailto:${profile.email}`} className="rounded-full bg-snow px-5 py-2.5 text-sm font-semibold text-night hover:bg-volt">
          Email me
        </a>
      </nav>

      <div className="relative mx-auto max-w-page px-6 pb-16 pt-6 md:px-10 md:pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <h1 className="wider text-[2.7rem] font-extrabold leading-[1.06] md:text-[4.6rem] md:leading-[1.04]">
            I build AI agents that <span className="text-volt">hold up in production.</span>
          </h1>
          <div>
            <p className="text-lg leading-relaxed text-mute">
              Not demos. My LLM assistant answers questions for all 4,500 employees at a food producer, wired into real HR,
              ERP and finance systems. Below is my career the way I&apos;d debug it: as a trace. Click any span.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#evals" className="rounded-full bg-volt px-6 py-3 font-semibold text-night transition-colors hover:bg-snow">
                See how I build agents
              </a>
              <a href="#ask" className="rounded-full border border-line bg-panel/60 px-6 py-3 font-semibold transition-colors hover:border-volt">
                Ask about my work
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <CareerTrace />
        </div>
      </div>
    </header>
  );
}
