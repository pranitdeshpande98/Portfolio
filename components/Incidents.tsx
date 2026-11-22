import { incidents } from "@/data";

export default function Incidents() {
  return (
    <section id="incidents" aria-labelledby="incidents-title" className="border-t border-line py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <h2 id="incidents-title" className="wider text-4xl font-extrabold leading-[1.12] md:text-[3.2rem] md:leading-[1.12]">
          Incident log
        </h2>
        <p className="text-mute md:text-right">
          Three problems I inherited, what was actually broken, and what changed after I fixed it.
        </p>
      </div>

      <ol className="mt-10 divide-y divide-line border-y border-line">
        {incidents.map((x, i) => (
          <li key={x.title} className="grid gap-6 py-8 md:grid-cols-[3rem_1.2fr_1.4fr_auto] md:gap-10">
            <span className="wider text-2xl font-extrabold text-volt">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="wide text-xl font-bold leading-snug md:text-2xl">{x.title}</h3>
            <div className="space-y-3 text-[16px] leading-relaxed">
              <p>
                <span className="font-semibold">What broke. </span>
                <span className="text-mute">{x.broke}</span>
              </p>
              <p>
                <span className="font-semibold">What I changed. </span>
                <span className="text-mute">{x.fix}</span>
              </p>
            </div>
            <div className="min-w-[11rem] md:text-right">
              <p className="text-sm text-mute line-through decoration-bad decoration-2">{x.before}</p>
              <p className="wider text-[2.2rem] font-extrabold leading-none text-ok">{x.after}</p>
              <p className="mt-1 text-sm text-mute">{x.unit}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
