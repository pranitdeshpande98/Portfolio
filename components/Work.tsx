import { projects } from "@/data";

export default function Work() {
  return (
    <section id="work" className="border-t border-ink py-16 md:py-20">
      <h2 className="text-3xl font-semibold tracking-tight">Selected work</h2>
      <ul className="mt-10">
        {projects.map((p) => (
          <li
            key={p.name}
            className="grid gap-4 border-b border-wire/70 py-8 first:pt-0 last:border-b-0 md:grid-cols-[14rem_1fr] md:gap-10"
          >
            <div>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              {p.status && (
                <p className="mt-2 inline-block rounded-[3px] bg-[#FFF2CC] px-2 py-0.5 text-sm text-[#7A5400]">
                  {p.status}
                </p>
              )}
            </div>
            <div className="max-w-3xl">
              <p className="text-[17px] leading-relaxed">{p.summary}</p>
              <p className="mt-3 border-l-2 border-approved pl-3 text-[15px] font-medium text-approved">
                {p.proof}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                <p className="text-[15px] text-graphite">{p.stack.join(", ")}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline decoration-wire underline-offset-4 hover:decoration-ink"
                >
                  Code on GitHub
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
