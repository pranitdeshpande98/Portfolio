const sources = [
  { label: "Payroll files", sub: "SFTP", y: 40 },
  { label: "ERP", sub: "SAP", y: 120 },
  { label: "EDI partners", sub: "60 partners", y: 200 },
  { label: "Gmail and Calendar", sub: "OAuth, read-only", y: 280 },
];

const AGENT = { x: 232, y: 130, w: 112, h: 100 };
const GATE = { cx: 418, cy: 180, r: 34 };
const ACTION = { x: 476, y: 150, w: 120, h: 60 };

export default function Schematic() {
  const wireToAgent = (y: number) =>
    `M 168 ${y + 22} C 205 ${y + 22}, 200 180, ${AGENT.x} 180`;

  return (
    <svg
      viewBox="0 0 610 340"
      className="h-auto w-full"
      role="img"
      aria-labelledby="schematic-title schematic-desc"
    >
      <title id="schematic-title">How I deploy an AI agent</title>
      <desc id="schematic-desc">
        Payroll files, the ERP, EDI partners and email feed an AI agent. Before the agent can act,
        a person approves the action, and only then is it carried out.
      </desc>

      {/* wires */}
      {sources.map((s) => (
        <path key={s.label} d={wireToAgent(s.y)} className="wire" />
      ))}
      <path d={`M ${AGENT.x + AGENT.w} 180 L ${GATE.cx - GATE.r} 180`} className="wire" />
      <path d={`M ${GATE.cx + GATE.r} 180 L ${ACTION.x} 180`} className="wire" />

      {/* signals travelling the wires: one sequence on load */}
      {sources.map((s, i) => (
        <path
          key={`p-${s.label}`}
          d={wireToAgent(s.y)}
          className="pulse"
          style={{ animationDelay: `${0.3 + i * 0.25}s` }}
        />
      ))}
      <path
        d={`M ${AGENT.x + AGENT.w} 180 L ${GATE.cx - GATE.r} 180`}
        className="pulse"
        style={{ animationDelay: "2.1s" }}
      />
      <path
        d={`M ${GATE.cx + GATE.r} 180 L ${ACTION.x} 180`}
        className="pulse"
        style={{ animationDelay: "3.4s" }}
      />

      {/* sources */}
      {sources.map((s) => (
        <g key={`n-${s.label}`}>
          <rect x="8" y={s.y} width="160" height="44" rx="3" fill="#ffffff" stroke="#A3ADB8" strokeWidth="1.5" />
          <text x="20" y={s.y + 19} className="font-cond" fontSize="14" fontWeight="600" fill="#15233A">
            {s.label}
          </text>
          <text x="20" y={s.y + 35} className="font-cond" fontSize="12" fill="#4B5563">
            {s.sub}
          </text>
        </g>
      ))}

      {/* agent */}
      <rect x={AGENT.x} y={AGENT.y} width={AGENT.w} height={AGENT.h} rx="3" fill="#15233A" />
      <text x={AGENT.x + 14} y={AGENT.y + 30} className="font-cond" fontSize="15" fontWeight="600" fill="#F1F3F2">
        Agent
      </text>
      <text x={AGENT.x + 14} y={AGENT.y + 52} className="font-cond" fontSize="12" fill="#C9D1DA">
        LangGraph
      </text>
      <text x={AGENT.x + 14} y={AGENT.y + 69} className="font-cond" fontSize="12" fill="#C9D1DA">
        tools and evals
      </text>

      {/* approval gate */}
      <rect
        x={GATE.cx - GATE.r}
        y={GATE.cy - GATE.r}
        width={GATE.r * 2}
        height={GATE.r * 2}
        rx="3"
        transform={`rotate(45 ${GATE.cx} ${GATE.cy})`}
        className="gate-shape"
      />
      <text x={GATE.cx} y={GATE.cy + 5} textAnchor="middle" className="font-cond" fontSize="13" fontWeight="600" fill="#15233A">
        Approve?
      </text>
      <text x={GATE.cx} y={GATE.cy + 70} textAnchor="middle" className="gate-wait font-cond" fontSize="12" fill="#8A6100">
        Waiting for a person
      </text>
      <text x={GATE.cx} y={GATE.cy + 70} textAnchor="middle" className="gate-ok font-cond" fontSize="12" fontWeight="600" fill="#0F7B5F">
        Approved
      </text>

      {/* action */}
      <rect x={ACTION.x} y={ACTION.y} width={ACTION.w} height={ACTION.h} rx="3" className="action-shape" />
      <text x={ACTION.x + 12} y={ACTION.y + 25} className="font-cond" fontSize="14" fontWeight="600" fill="#15233A">
        Action runs
      </text>
      <text x={ACTION.x + 12} y={ACTION.y + 43} className="action-done font-cond" fontSize="12" fill="#0F7B5F">
        once, and logged
      </text>
    </svg>
  );
}
