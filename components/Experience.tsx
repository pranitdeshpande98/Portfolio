import { experience, skills } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="grid gap-10 border-t border-line py-20 md:py-28 lg:grid-cols-[23rem_1fr] lg:gap-16">
      <div className="lg:sticky lg:top-10 lg:self-start">
        <h2 className="font-display text-4xl font-bold tracking-[-0.01em] md:text-6xl">Experience</h2>
        <p className="mt-5 max-w-xs text-slate">
          Five years of shipping software into production, from state government to manufacturing.
        </p>
      </div>
      <div>
        <ol className="space-y-12">
          {experience.map((job) => (
            <li key={job.org}>
              <p className="text-[15px] font-medium text-cobalt">{job.dates}</p>
              <h3 className="mt-1 font-display text-2xl font-bold tracking-[-0.01em]">
                {job.role}, {job.org}
              </h3>
              <ul className="mt-3 space-y-2 text-[17px] leading-relaxed text-slate">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <dl className="mt-16 grid gap-6 rounded-[1.75rem] bg-cobalt-soft p-7 md:grid-cols-2 md:p-9">
          {skills.map((s) => (
            <div key={s.group}>
              <dt className="font-display font-bold">{s.group}</dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-slate">{s.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
