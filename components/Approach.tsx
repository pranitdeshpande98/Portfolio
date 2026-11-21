import { approach } from "@/data";

export default function Approach() {
  return (
    <section id="approach" className="border-t border-ink py-16 md:py-20">
      <h2 className="font-display text-4xl font-bold tracking-[-0.02em] md:text-5xl">How I run a deployment</h2>
      <ol className="mt-10 grid gap-10 md:grid-cols-3">
        {approach.map((step, i) => (
          <li key={step.title} className="border-t-2 border-ink pt-5">
            <span className="font-display text-5xl font-extrabold leading-none text-wire">{i + 1}</span>
            <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
            <p className="mt-3 text-[17px] leading-relaxed text-graphite">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
