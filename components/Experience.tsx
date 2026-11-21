import { experience, skills } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink py-16 md:py-20">
      <h2 className="font-display text-4xl font-bold tracking-[-0.02em] md:text-5xl">Experience</h2>
      <ol className="mt-10">
        {experience.map((job) => (
          <li
            key={job.org}
            className="grid gap-2 border-b border-wire/70 py-7 first:pt-0 last:border-b-0 md:grid-cols-[14rem_1fr] md:gap-10"
          >
            <p className="text-[15px] text-graphite">{job.dates}</p>
            <div className="max-w-3xl">
              <h3 className="text-xl font-semibold">
                {job.role}, {job.org}
              </h3>
              <ul className="mt-3 space-y-2 text-[17px] leading-relaxed">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mt-14 text-xl font-semibold">What I work with</h3>
      <dl className="mt-6 grid gap-x-10 gap-y-5 md:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group}>
            <dt className="font-medium">{s.group}</dt>
            <dd className="mt-1 text-[15px] leading-relaxed text-graphite">{s.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
