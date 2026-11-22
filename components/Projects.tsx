import { extraProject, projects } from "@/data";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-line py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <h2 id="projects-title" className="wider text-4xl font-extrabold leading-[1.12] md:text-[3.2rem] md:leading-[1.12]">
          AI projects I build on my own
        </h2>
        <p className="text-mute md:text-right">Agents, evals and pipelines I build on my own time, each with the result that proves it works.</p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {[...projects, extraProject].map((p) => (
          <article key={p.name} className="rounded-2xl border border-line bg-panel p-7 transition-colors hover:border-volt/60">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="wide text-2xl font-bold">
                <a href={p.link} className="hover:text-volt">
                  {p.name}
                </a>
              </h3>
              {p.status && <span className="shrink-0 rounded-full bg-volt-soft px-3 py-1 text-sm font-semibold text-volt">{p.status}</span>}
            </div>
            <p className="mt-3 text-[16px] leading-relaxed text-mute">{p.summary}</p>
            <p className="mt-4 border-l-4 border-data pl-4 text-[16px] font-semibold leading-snug">{p.proof}</p>
            <p className="mt-4 text-sm text-mute">{p.stack.join(", ")}</p>
            <a href={p.link} className="mt-4 inline-block font-semibold text-volt underline underline-offset-4 hover:text-snow">
              Read the code on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
