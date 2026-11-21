import { approach } from "@/data";

export default function Approach() {
  return (
    <section id="approach" className="border-t border-line py-20 md:py-28">
      <h2 className="font-display text-4xl font-bold tracking-[-0.03em] md:text-6xl">How I run a deployment</h2>
      <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
        {approach.map((step, i) => (
          <li key={step.title}>
            <span className="font-display text-7xl font-extrabold leading-none text-cobalt">{i + 1}</span>
            <h3 className="mt-4 font-display text-xl font-bold">{step.title}</h3>
            <p className="mt-3 text-[17px] leading-relaxed text-slate">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
