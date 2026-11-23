import AgentArch from "./AgentArch";
import AgentConsole from "./AgentConsole";

/* Numbers from the Roost eval suite (github.com/pranitdeshpande98/roost-hr-assistant). */
const METRICS = [
  { label: "Retrieval hit@5", value: 98 },
  { label: "Tool-call correctness", value: 99 },
  { label: "Faithfulness", value: 94 },
  { label: "Citation correctness", value: 97 },
  { label: "Language match (EN, ES, VI)", value: 100 },
  { label: "Sensitive-topic recall", value: 100 },
  { label: "Prompt injections blocked", value: 100 },
];

export default function Evals() {
  return (
    <section id="evals" aria-labelledby="evals-title" className="py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <div>
          <p className="text-sm font-semibold text-data">How I build agents</p>
          <h2 id="evals-title" className="wider mt-2 text-4xl font-extrabold leading-[1.12] md:text-[3.2rem] md:leading-[1.12]">
            Evals first. Then the model.
          </h2>
        </div>
        <p className="text-mute md:text-right">
          Every change to my HR agent runs against 102 cases across 26 scenarios in CI before it ships, so a better
          prompt can&apos;t quietly break an old answer.
        </p>
      </div>

      <AgentArch />

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-line bg-panel p-6 md:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="wide text-xl font-bold">Roost eval suite, last run</h3>
            <p className="text-sm text-mute">102 cases, 26 scenarios, ~1 s median latency</p>
          </div>
          <ul className="mt-6 space-y-4">
            {METRICS.map((m) => (
              <li key={m.label}>
                <div className="flex justify-between text-[15px]">
                  <span>{m.label}</span>
                  <span className="font-semibold text-ok">{m.value}%</span>
                </div>
                <div className="mt-2 h-2.5 rounded-full bg-panel-up" aria-hidden="true">
                  <div className="h-full rounded-full bg-gradient-to-r from-volt-deep to-volt" style={{ width: `${m.value}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <AgentConsole />
          <p className="mt-3 text-sm text-mute">
            A replay of the agent&apos;s three paths: answer with a citation, route to HR, or refuse. The employee and values are invented.
          </p>
        </div>
      </div>
    </section>
  );
}
