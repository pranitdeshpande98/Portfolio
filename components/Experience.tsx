import { experience } from "@/data";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line py-20 md:py-28">
      <h2 id="experience-title" className="wider text-4xl font-extrabold leading-[1.12] md:text-[3.2rem] md:leading-[1.12]">
        Experience
      </h2>
      <ol className="mt-10 border-l-2 border-line">
        {experience.map((e) => (
          <li key={e.org + e.role} className="relative pb-9 pl-8 last:pb-0">
            <span aria-hidden="true" className="absolute -left-[7px] top-2 h-3 w-3 rounded-[2px] bg-volt" />
            <p className="text-sm text-mute">{e.dates}</p>
            <h3 className="wide mt-1 text-xl font-bold">
              {e.role}, {e.org}
            </h3>
            <p className="mt-2 max-w-3xl text-[16px] leading-relaxed text-mute">{e.note}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
