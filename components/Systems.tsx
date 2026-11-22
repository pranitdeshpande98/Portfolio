import { systems } from "@/data";

export default function Systems() {
  return (
    <section id="systems" aria-labelledby="systems-title" className="py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <h2 id="systems-title" className="wider text-4xl font-extrabold leading-[1.12] md:text-[3.2rem] md:leading-[1.12]">
          Systems in production
        </h2>
        <p className="text-mute md:text-right">
          What I own today. Each one started with a constraint, needed a decision, and has a number that proves it worked.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {systems.map((s, i) => (
          <article
            key={s.name}
            className={`group relative overflow-hidden rounded-2xl border border-line bg-panel p-7 transition-colors hover:border-volt/60 md:p-8 ${
              i === 0 ? "md:col-span-2 lg:col-span-3 md:grid md:grid-cols-[1fr_1.2fr] md:gap-10" : ""
            }`}
          >
            <div>
              <p className="text-sm font-semibold text-data">{s.tag}</p>
              <h3 className="wide mt-2 text-2xl font-bold md:text-[1.9rem]">{s.name}</h3>
              <p className="mt-5">
                <span className="wider block text-5xl font-extrabold text-volt">{s.metric}</span>
                <span className="mt-1 block text-mute">{s.metricLabel}</span>
              </p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                {s.stack.map((t) => (
                  <li key={t} className="rounded-md border border-line bg-panel-up px-2.5 py-1 text-sm text-snow/90">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <dl className={`space-y-4 text-[16px] leading-relaxed ${i === 0 ? "mt-8 md:mt-0" : "mt-7"}`}>
              <div>
                <dt className="font-semibold text-snow">Constraint</dt>
                <dd className="text-mute">{s.constraint}</dd>
              </div>
              <div>
                <dt className="font-semibold text-snow">Decision</dt>
                <dd className="text-mute">{s.decision}</dd>
              </div>
              <div className="rounded-xl bg-volt-soft px-4 py-3">
                <dt className="font-semibold text-volt">Outcome</dt>
                <dd className="text-snow">{s.outcome}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
