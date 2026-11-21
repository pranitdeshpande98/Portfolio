import { profile } from "@/data";

const now = [
  "Running an LLM HR assistant in production for about 4,500 people at Bachoco",
  "Building Fuse, a personal agent that asks before it acts",
  "Open to forward deployed and software engineering roles",
];

export default function Hero() {
  return (
    <section id="top" className="pb-16 pt-14 md:pb-24 md:pt-20">
      <h1 className="font-display text-[clamp(3.4rem,11.5vw,9.75rem)] font-extrabold leading-[0.88] tracking-[-0.045em]">
        Pranit
        <br />
        Deshpande
      </h1>

      <div className="mt-10 grid gap-12 border-t-2 border-ink pt-8 md:mt-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
        <div>
          <p className="max-w-2xl text-[1.45rem] leading-[1.45] md:text-[1.7rem]">
            {profile.role} in {profile.location}. I put AI agents into production and wire them into
            the systems a business already runs on: payroll files, ERP data, EDI partners and the
            pipelines between them.
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

        <div>
          <h2 className="font-display text-xl font-bold">Right now</h2>
          <ul className="mt-4 space-y-4">
            {now.map((item) => (
              <li key={item} className="flex gap-3 text-[17px] leading-relaxed text-graphite">
                <span aria-hidden="true" className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-approved" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
