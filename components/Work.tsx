import { projects } from "@/data";

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-4xl font-bold tracking-[-0.01em] md:text-6xl">Selected work</h2>
        <p className="max-w-sm text-slate">Open a project for what it does, the result that proves it, and the code.</p>
      </div>

      <div className="mt-12 border-t border-ink">
        {projects.map((p, i) => (
          <details key={p.name} open={i === 0} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 [&::-webkit-details-marker]:hidden">
              <span className="font-display text-[1.7rem] font-bold leading-[1.15] tracking-[-0.01em] transition-colors group-hover:text-cobalt md:text-[2.6rem]">
                {p.name}
              </span>
              <span className="flex items-center gap-4">
                {p.status && (
                  <span className="hidden rounded-full bg-marker px-3 py-1 text-sm font-semibold sm:inline">{p.status}</span>
                )}
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink text-2xl leading-[1.1] transition-transform group-open:rotate-45 group-open:bg-ink group-open:text-white"
                >
                  +
                </span>
              </span>
            </summary>
            <div className="grid gap-8 pb-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
              <p className="max-w-2xl text-lg leading-relaxed">{p.summary}</p>
              <div className="space-y-5">
                <p className="flex gap-3 rounded-2xl bg-cobalt-soft px-4 py-3 text-[16px] font-semibold leading-snug text-cobalt">
                  <span aria-hidden="true" className="mt-[3px] grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cobalt text-[11px] text-white">✓</span>
                  <span>{p.proof}</span>
                </p>
                <ul className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-full border border-line px-3 py-1 text-sm text-slate">
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-semibold text-cobalt underline decoration-2 underline-offset-[6px] hover:text-ink"
                >
                  Read the code on GitHub
                </a>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
