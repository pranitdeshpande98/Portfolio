import { profile } from "@/data";
import Schematic from "./Schematic";

export default function Hero() {
  return (
    <section id="top" className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1.1fr]">
      <div className="max-w-xl">
        <p className="text-[15px] text-graphite">
          {profile.role}, {profile.location}
        </p>
        <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.08] tracking-[-0.02em] md:text-[3.4rem]">
          I put AI agents into production, wired into the systems a business already runs on.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-graphite">
          My agent work ships with evals, guardrails and a person approving every action. My day job
          is the plumbing those agents need: payroll files, ERP data, EDI partners and the pipelines
          between them. One of those agents now answers HR questions for about 4,500 employees.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-[3px] bg-ink px-5 py-3 font-medium text-paper transition-colors hover:bg-[#22385c]"
          >
            See my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-[3px] border border-ink px-5 py-3 font-medium transition-colors hover:bg-white"
          >
            Email me
          </a>
        </div>
      </div>
      <div className="rounded-[3px] border border-wire/70 bg-white/60 p-4 md:p-6">
        <Schematic />
      </div>
    </section>
  );
}
