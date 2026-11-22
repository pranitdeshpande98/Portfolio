import { navItems, profile } from "@/data";
import AgentConsole from "./AgentConsole";

const PROOF = [
  { n: "~4,500", l: "employees on my AI assistant" },
  { n: "102", l: "eval cases gate every agent change" },
  { n: "1.5M+", l: "records a month through my pipelines" },
  { n: "$80K", l: "a year saved by replacing a vendor tool" },
];

export default function Hero() {
  return (
    <header id="top" className="relative overflow-hidden border-b border-line">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-volt/20 blur-[120px]" aria-hidden="true" />

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

      <div className="relative mx-auto grid max-w-page items-center gap-12 px-6 pb-16 pt-8 md:px-10 md:pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-3.5 py-1.5 text-sm text-mute">
            <span className="h-2 w-2 rounded-full bg-ok" aria-hidden="true" />
            {profile.role}, {profile.location}
          </p>
          <h1 className="wider mt-6 text-[2.7rem] font-extrabold leading-[1.08] md:text-[4.3rem] md:leading-[1.06]">
            I build AI agents that <span className="text-volt">hold up in production.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
            Not demos. My LLM assistant answers questions for all 4,500 employees at a food producer, wired into real HR,
            ERP and finance systems, with evals, guardrails and a human in the loop where it matters.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#evals" className="rounded-full bg-volt px-6 py-3 font-semibold text-night transition-colors hover:bg-snow">
              See how I build agents
            </a>
            <a href="#ask" className="rounded-full border border-line bg-panel/60 px-6 py-3 font-semibold transition-colors hover:border-volt">
              Ask about my work
            </a>
          </div>
        </div>
        <AgentConsole />
      </div>

      <dl className="relative mx-auto grid max-w-page grid-cols-2 gap-px border-t border-line bg-line md:grid-cols-4">
        {PROOF.map((p) => (
          <div key={p.l} className="bg-night px-6 py-6 md:px-10">
            <dt className="sr-only">{p.l}</dt>
            <dd>
              <span className="wider block text-3xl font-extrabold text-snow md:text-[2.4rem]">{p.n}</span>
              <span className="mt-1 block text-sm text-mute">{p.l}</span>
            </dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
