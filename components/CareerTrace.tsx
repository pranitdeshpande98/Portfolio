"use client";

import { useState } from "react";

/* My career as a distributed trace: each role is a span, each system I built a child span.
   Children without their own dates run for the length of the role. */

type Span = {
  id: string;
  name: string;
  service: keyof typeof SERVICE;
  start: number; // fractional year
  end: number | null; // null = still running
  depth: number;
  title: string;
  attrs: [string, string][];
  events?: string[];
};

const SERVICE = {
  career: { color: "#E9EDF7", label: "career" },
  accenture: { color: "#FF8A65", label: "accenture" },
  umbc: { color: "#4FC3F7", label: "umbc" },
  vitg: { color: "#FFD54F", label: "vitg" },
  bachoco: { color: "#8C7CFF", label: "bachoco" },
};

const NOW = 2026 + 10.7 / 12;
const START = 2019.3;
const END = 2027.3;
const y = (year: number, month: number) => year + (month - 1) / 12;

const SPANS: Span[] = [
  {
    id: "root", name: "pranit.career", service: "career", start: y(2019, 7), end: null, depth: 0,
    title: "Software and forward deployed engineer",
    attrs: [["years.shipping", "5+"], ["languages", "Python, TypeScript, SQL, Java, C++"], ["focus", "AI agents, integrations, data"], ["location", "Dallas, Texas"]],
  },
  {
    id: "acc", name: "accenture.delivery", service: "accenture", start: y(2019, 7), end: y(2022, 7), depth: 1,
    title: "Software Engineer, Accenture",
    attrs: [["client", "State of Michigan tax platform"], ["mode", "customer-facing delivery"], ["mentored", "4 developers"]],
  },
  {
    id: "acc-int", name: "agency.integrations", service: "accenture", start: y(2019, 7), end: y(2022, 7), depth: 2,
    title: "Agency integrations",
    attrs: [["integrations", "6 SOAP/REST"], ["accounts.per_cycle", "~2,500"]],
  },
  {
    id: "acc-cc", name: "callcenter.tool", service: "accenture", start: y(2019, 7), end: y(2022, 7), depth: 2,
    title: "Call-center tool",
    attrs: [["calls.per_tax_season", "~6,000"], ["replaced", "manual lookups behind a toll-free line"]],
  },
  {
    id: "acc-q", name: "release.quality", service: "accenture", start: y(2019, 7), end: y(2022, 7), depth: 2,
    title: "Release quality",
    attrs: [["post_release_defects", "-35%"], ["method", "static analysis, two-step code review"]],
  },
  {
    id: "umbc", name: "umbc.ms_computer_science", service: "umbc", start: y(2022, 8), end: y(2024, 5), depth: 1,
    title: "MS Computer Science, UMBC",
    attrs: [["gpa", "3.67"], ["leetcode", "1,000+ problems in C++"]],
  },
  {
    id: "ga", name: "os.autograder", service: "umbc", start: y(2023, 8), end: y(2024, 5), depth: 2,
    title: "Graduate Assistant, Operating Systems",
    attrs: [["students", "65"], ["catches", "race conditions, memory leaks"], ["grading.time", "-40%"]],
  },
  {
    id: "vitg", name: "vitg.contract_tracker", service: "vitg", start: y(2024, 7), end: y(2025, 2), depth: 1,
    title: "Software Developer Intern, VITG Corp",
    attrs: [["source", "USAspending.gov API"], ["fields.per_award", "15"], ["delivery", "Slack"], ["llm", "Gemini Q&A on 4 bid criteria"]],
  },
  {
    id: "bach", name: "bachoco.production", service: "bachoco", start: y(2025, 2), end: null, depth: 1,
    title: "Senior Software Engineer, Bachoco",
    attrs: [["company.size", "4,500 employees"], ["role", "sole US engineer"], ["owns", "AI, integrations, data, payroll systems"]],
  },
  {
    id: "edi", name: "partner.integrations", service: "bachoco", start: y(2025, 2), end: null, depth: 2,
    title: "Partner integration platform",
    attrs: [["partners", "60"], ["records.per_day", "~50,000"], ["new_customers.onboarded", "7"]],
    events: ["errors.per_month  ~100 → <10"],
  },
  {
    id: "pay", name: "payroll.integrations", service: "bachoco", start: y(2025, 2), end: null, depth: 2,
    title: "Payroll integrations",
    attrs: [["employee.records", "4,000 nightly, 5 nights a week"], ["records.per_year", "~1M"], ["replaced", "Boomi"]],
    events: ["cost.saved  $80K a year"],
  },
  {
    id: "dbt", name: "finance.pipelines", service: "bachoco", start: y(2025, 2), end: null, depth: 2,
    title: "Finance data pipelines",
    attrs: [["dbt.models", "15+ on Databricks"], ["rows.per_week", "400K+"], ["purchase_orders.checked", "100–200 a day"]],
    events: ["price mismatches reach sales the same day"],
  },
  {
    id: "hr", name: "hr_agent.llm", service: "bachoco", start: y(2026, 9), end: null, depth: 2,
    title: "AI HR assistant in production",
    attrs: [["users", "~4,500 employees + HR"], ["models", "gpt-oss-120b, Qwen fallback"], ["grounding", "official handbook"]],
    events: ["deployed to production 09/2026"],
  },
];

const pct = (v: number) => ((v - START) / (END - START)) * 100;
const YEARS = Array.from({ length: 8 }, (_, i) => 2020 + i).filter((yr) => yr < END);
const fmt = (v: number) => {
  const yr = Math.floor(v + 1e-6);
  const m = Math.round((v - yr) * 12) + 1;
  return `${String(m).padStart(2, "0")}/${yr}`;
};
const dur = (s: number, e: number) => {
  const months = Math.round((e - s) * 12);
  const yr = Math.floor(months / 12);
  const m = months % 12;
  return [yr ? `${yr}y` : "", m ? `${m}mo` : ""].filter(Boolean).join(" ") || "<1mo";
};

export default function CareerTrace() {
  const [sel, setSel] = useState("hr");
  const s = SPANS.find((x) => x.id === sel)!;
  const end = s.end ?? NOW;

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-panel">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3.5">
        <p className="font-mono text-[13px] text-mute">
          trace <span className="text-snow">pranit.career</span>, {SPANS.length} spans, still running
        </p>
        <ul className="flex flex-wrap gap-3 text-[13px] text-mute" aria-label="Services">
          {Object.entries(SERVICE)
            .slice(1)
            .map(([k, v]) => (
              <li key={k} className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-sm" style={{ background: v.color }} aria-hidden="true" />
                {v.label}
              </li>
            ))}
        </ul>
      </div>

      <div className="grid lg:grid-cols-[1fr_22rem]">
        <div className="min-w-0 overflow-x-auto">
          <div className="sm:min-w-[680px]">
            {/* year axis */}
            <div className="relative mx-4 h-8 border-b border-line sm:ml-[13.5rem] sm:mr-0">
              {YEARS.map((yr) => (
                <span key={yr} className="absolute top-2 -translate-x-1/2 font-mono text-[11px] text-mute" style={{ left: `${pct(yr)}%` }}>
                  {yr}
                </span>
              ))}
            </div>
            <ul role="listbox" aria-label="Career spans" className="py-1.5">
              {SPANS.map((sp) => {
                const on = sp.id === sel;
                const c = SERVICE[sp.service].color;
                const e = sp.end ?? NOW;
                return (
                  <li key={sp.id} role="option" aria-selected={on}>
                    <button
                      onClick={() => setSel(sp.id)}
                      className={`group flex w-full flex-col items-stretch px-4 pb-2 text-left transition-colors sm:flex-row sm:items-center sm:px-0 sm:pb-0 ${on ? "bg-panel-up" : "hover:bg-panel-up/60"}`}
                    >
                      <span className="shrink-0 truncate pt-2 font-mono text-[12.5px] sm:w-[13.5rem] sm:py-2 sm:pl-[var(--pl)]" style={{ ["--pl" as string]: `${1 + sp.depth * 0.9}rem` } as React.CSSProperties}>
                        <span className={on ? "text-snow" : "text-mute group-hover:text-snow"}>{sp.name}</span>
                      </span>
                      <span className="relative mt-1.5 block h-4 flex-1 sm:mt-0 sm:h-9">
                        {YEARS.map((yr) => (
                          <span key={yr} className="absolute inset-y-0 w-px bg-line/60" style={{ left: `${pct(yr)}%` }} aria-hidden="true" />
                        ))}
                        <span
                          className="absolute top-1/2 h-3.5 -translate-y-1/2 rounded-[3px]"
                          style={{
                            left: `${pct(sp.start)}%`,
                            width: `${Math.max(pct(e) - pct(sp.start), 0.8)}%`,
                            background: c,
                            opacity: sp.depth === 2 ? 0.75 : 1,
                            boxShadow: on ? `0 0 0 2px #0B1020, 0 0 0 4px ${c}` : undefined,
                          }}
                        />
                        {sp.end === null && (
                          <span className="absolute top-1/2 h-2 w-2 -translate-y-1/2 animate-pulse rounded-full motion-reduce:animate-none" style={{ left: `calc(${pct(NOW)}% + 6px)`, background: c }} aria-hidden="true" />
                        )}
                        <span className="sr-only">
                          {fmt(sp.start)} to {sp.end ? fmt(sp.end) : "now"}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <aside key={s.id} className="step-in border-t border-line p-5 lg:border-l lg:border-t-0" aria-live="polite">
          <p className="font-mono text-[12.5px]" style={{ color: SERVICE[s.service].color }}>
            {s.name}
          </p>
          <h3 className="wide mt-1.5 text-xl font-bold leading-snug">{s.title}</h3>
          <p className="mt-1 text-sm text-mute">
            {fmt(s.start)} to {s.end ? fmt(s.end) : "now"}, {dur(s.start, end)}
          </p>
          <dl className="mt-4 divide-y divide-line border-y border-line font-mono text-[12.5px]">
            {s.attrs.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[9.5rem_1fr] gap-3 py-2">
                <dt className="text-mute">{k}</dt>
                <dd className="text-snow">{v}</dd>
              </div>
            ))}
          </dl>
          {s.events && (
            <ul className="mt-4 space-y-1.5" aria-label="Events">
              {s.events.map((ev) => (
                <li key={ev} className="flex items-start gap-2 font-mono text-[12.5px] text-ok">
                  <span aria-hidden="true">◆</span>
                  {ev}
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
    </div>
  );
}
