/* How my HR agent is wired: request in, router, tools, guardrails, answer out.
   Static SVG with one animated flow; respects reduced motion via the .flow class. */

const NODES = [
  { id: "in", x: 40, y: 150, w: 150, label: "Employee", sub: "kiosk, chat, Slack" },
  { id: "router", x: 250, y: 150, w: 170, label: "Intent router", sub: "LangGraph state" },
  { id: "rag", x: 490, y: 40, w: 190, label: "Handbook RAG", sub: "bge-m3, pgvector" },
  { id: "tools", x: 490, y: 150, w: 190, label: "HR tools", sub: "leave, pay, cases" },
  { id: "rules", x: 490, y: 260, w: 190, label: "Policy engine", sub: "deterministic Python" },
  { id: "guard", x: 750, y: 150, w: 170, label: "Guardrails", sub: "injection, sensitive topics" },
  { id: "out", x: 980, y: 150, w: 150, label: "Cited answer", sub: "or route to HR" },
];

const EDGES: [string, string][] = [
  ["in", "router"],
  ["router", "rag"],
  ["router", "tools"],
  ["router", "rules"],
  ["rag", "guard"],
  ["tools", "guard"],
  ["rules", "guard"],
  ["guard", "out"],
];

const H = 64;
const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

function path(a: string, b: string) {
  const s = byId[a];
  const t = byId[b];
  const x1 = s.x + s.w;
  const y1 = s.y + H / 2;
  const x2 = t.x;
  const y2 = t.y + H / 2;
  const mx = (x1 + x2) / 2;
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
}

export default function AgentArch() {
  return (
    <figure className="mt-10 overflow-x-auto rounded-2xl border border-line bg-panel p-4 md:p-6">
      <svg viewBox="0 0 1170 360" className="h-auto w-full min-w-[760px]" role="img" aria-labelledby="arch-title arch-desc">
        <title id="arch-title">Agent architecture</title>
        <desc id="arch-desc">
          An employee request goes to an intent router, which calls handbook retrieval, HR tools, or a deterministic policy engine.
          Every result passes guardrails before a cited answer goes back, or the request is routed to HR.
        </desc>
        {EDGES.map(([a, b]) => (
          <g key={a + b}>
            <path d={path(a, b)} fill="none" stroke="#26314F" strokeWidth="2" />
            <path d={path(a, b)} fill="none" stroke="#8C7CFF" strokeWidth="2" className="flow" />
          </g>
        ))}
        {NODES.map((n) => {
          const accent = n.id === "guard" ? "#FFB547" : n.id === "out" ? "#3DDC97" : n.id === "in" ? "#3DD6F5" : "#8C7CFF";
          return (
            <g key={n.id}>
              <rect x={n.x} y={n.y} width={n.w} height={H} rx="12" fill="#18223B" stroke={accent} strokeOpacity="0.7" />
              <text x={n.x + 16} y={n.y + 27} fill="#E9EDF7" fontSize="16" fontWeight="700" fontFamily="var(--font-archivo)">
                {n.label}
              </text>
              <text x={n.x + 16} y={n.y + 48} fill="#97A3BF" fontSize="13" fontFamily="var(--font-archivo)">
                {n.sub}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-3 text-sm text-mute">
        Business rules never go through the model: leave math and approvals run in plain Python, so the LLM can explain a
        decision but can&apos;t make one.
      </figcaption>
    </figure>
  );
}
