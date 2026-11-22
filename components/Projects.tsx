import { projects } from "@/data";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-rule py-16 md:py-24">
      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <h2 id="projects-title" className="wide text-3xl font-bold md:text-[2.6rem]">
          After hours
        </h2>
        <p className="text-steel md:text-right">Projects I build on my own time, each with the result that proves it works.</p>
      </div>

      <div className="mt-10 grid gap-x-10 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className="border-t-2 border-ink py-7">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="wide text-2xl font-bold">
                <a href={p.link} className="hover:text-stamp">
                  {p.name}
                </a>
              </h3>
              {p.status && <span className="shrink-0 rounded-full bg-stamp-soft px-3 py-1 text-sm font-semibold text-stamp-deep">{p.status}</span>}
            </div>
            <p className="mt-3 text-[16px] leading-relaxed text-steel">{p.summary}</p>
            <p className="mt-4 border-l-4 border-stamp pl-4 text-[16px] font-semibold leading-snug">{p.proof}</p>
            <p className="mt-4 text-sm text-steel">{p.stack.join(", ")}</p>
            <a href={p.link} className="mt-4 inline-block font-semibold text-stamp underline underline-offset-4 hover:text-stamp-deep">
              Read the code on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
