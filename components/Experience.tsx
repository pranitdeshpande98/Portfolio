import { experience } from "@/data";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-rule py-16 md:py-24">
      <h2 id="experience-title" className="wide text-3xl font-bold md:text-[2.6rem]">
        Experience
      </h2>
      <ol className="mt-10 border-l-2 border-ink">
        {experience.map((e) => (
          <li key={e.org + e.role} className="relative pb-9 pl-8 last:pb-0">
            <span aria-hidden="true" className="absolute -left-[7px] top-2 h-3 w-3 rounded-[2px] bg-stamp" />
            <p className="text-sm text-steel">{e.dates}</p>
            <h3 className="wide mt-1 text-xl font-bold">
              {e.role}, {e.org}
            </h3>
            <p className="mt-2 max-w-3xl text-[16px] leading-relaxed text-steel">{e.note}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
