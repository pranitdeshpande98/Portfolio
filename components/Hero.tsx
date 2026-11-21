import { navItems, profile } from "@/data";
import FuseDemo from "./FuseDemo";

export default function Hero() {
  return (
    <header id="top" className="rounded-b-[2.5rem] bg-cobalt text-white md:rounded-b-[4rem]">
      <nav className="mx-auto flex max-w-page items-center justify-between px-6 py-6 md:px-10" aria-label="Main">
        <a href="#top" className="font-display text-lg font-bold">
          {profile.name}
        </a>
        <ul className="hidden gap-8 text-[15px] text-white/80 sm:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.link} className="hover:text-white">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto grid max-w-page items-center gap-12 px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="text-[17px] text-white/75">
            {profile.role}, {profile.location}
          </p>
          <h1 className="mt-5 font-display text-[2.7rem] font-bold leading-[1.12] tracking-[-0.01em] md:text-[4.1rem]">
            I build AI agents that people trust with real work.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/85">
            Evals, guardrails and a human approval step come standard. So does the plumbing:
            payroll files, ERP data and EDI partners are where I spend my days at Bachoco, where my
            HR assistant now answers questions for about 4,500 employees.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-white px-6 py-3 font-semibold text-cobalt transition-colors hover:bg-mint hover:text-ink">
              See my work
            </a>
            <a href={`mailto:${profile.email}`} className="rounded-full border border-white/60 px-6 py-3 font-semibold transition-colors hover:border-white hover:bg-white/10">
              Email me
            </a>
          </div>
        </div>
        <FuseDemo />
      </div>
    </header>
  );
}
