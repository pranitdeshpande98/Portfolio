"use client";

import { useState } from "react";

/* Retrieval over a small, hand-written set of facts about my work.
   No model call: it scores passages by term overlap, answers only from what it finds,
   cites the source, and says so when it has no evidence. Same rule I give my agents. */

type Doc = { id: string; source: string; href: string; text: string; keys: string };

const DOCS: Doc[] = [
  { id: "hr", source: "Systems: AI HR assistant", href: "#systems", text: "I shipped an LLM HR assistant to production for all ~4,500 employees and the HR team. It answers handbook, leave and payday questions with retrieval over the official handbook, on open-source models (gpt-oss-120b with a Qwen fallback).", keys: "llm ai agent production assistant hr rag retrieval model genai generative chatbot users employees deployed shipped" },
  { id: "evals", source: "Evals: Roost eval suite", href: "#evals", text: "My Roost agent runs 102 eval cases across 26 scenarios in CI: 98% retrieval hit@5, 99% tool-call correctness, 94% faithfulness, 97% citation correctness, and 100% of held-out prompt injections blocked.", keys: "eval evals evaluation test testing metrics faithfulness hallucination quality ci accuracy benchmark" },
  { id: "guard", source: "Evals: agent architecture", href: "#evals", text: "Business rules never go through the model. Leave math and approvals run in deterministic Python, sensitive topics like harassment skip the LLM and route to HR, and tools only ever read the caller's own record, so an injected instruction has nothing to reach.", keys: "guardrails safety security injection prompt jailbreak sensitive harassment rules deterministic trust" },
  { id: "edi", source: "Systems: partner integration platform", href: "#systems", text: "I rebuilt all 60 EDI trading partners on standard ERP interfaces, about 50,000 records a day, and errors fell from about 100 a month to under 10. I also onboarded 7 new customers on the new path.", keys: "edi integration integrations api apis partners erp enterprise x12 orders customers systems" },
  { id: "data", source: "Systems: finance data pipelines", href: "#systems", text: "I run 15+ dbt models on Databricks that process 400K+ rows every weekly run for Accounts Receivable, a weekly credit report covering 500+ orders, and a SQL price check on 100 to 200 purchase orders a day.", keys: "data pipeline pipelines dbt databricks sql etl warehouse analytics scale rows big reporting" },
  { id: "payroll", source: "Systems: payroll integrations", href: "#systems", text: "I replaced Boomi with in-house SSIS and T-SQL interfaces that sync all 4,000 employee records 5 nights a week, saving about $80K a year.", keys: "payroll cost savings saved money boomi ssis integration vendor license" },
  { id: "fde", source: "Experience: Accenture", href: "#experience", text: "At Accenture I did three years of customer-facing delivery for the State of Michigan tax platform: 6 agency integrations, a call-center tool for about 6,000 calls a tax season, and 35% fewer post-release defects. I mentored 4 new developers.", keys: "customer facing consulting client forward deployed fde stakeholders delivery mentoring experience accenture" },
  { id: "drug", source: "Projects: Drug Interaction Checker", href: "#projects", text: "My Drug Interaction Checker runs 6 agents across 2 custom MCP servers. An LLM judge and human review reject any claim that can't be traced to a source, and the first verdict streams in about 3 seconds.", keys: "mcp multi-agent agents orchestration judge llm-as-judge claude nextjs typescript healthcare" },
  { id: "fuse", source: "Projects: Fuse", href: "#projects", text: "Fuse is my personal agent on Telegram. It reads Gmail and Calendar and drafts replies, but nothing is sent or changed until I approve it, with idempotency keys so no action can run twice.", keys: "human in the loop approval agent oauth gmail calendar telegram langgraph idempotency" },
  { id: "neuro", source: "Projects: Neuro Pipeline", href: "#projects", text: "Neuro Pipeline is an EEG processing platform designed around one Kubernetes Job per subject, with a reconciler that keeps run status correct even when a pod dies without reporting back. It's in progress.", keys: "kubernetes k8s jobs pods minio django distributed reconciler eeg infrastructure" },
  { id: "ngs", source: "Projects: Cancer NGS Pipeline", href: "#projects", text: "My Cancer NGS Pipeline aligns, variant-calls and annotates BRCA1 reads against ClinVar in 4 Dockerized stages, served through an API to a React dashboard, with a smoke test in CI on every push.", keys: "genomics bioinformatics docker gatk react flask healthcare pipeline ci" },
  { id: "stack", source: "Projects and systems", href: "#projects", text: "My daily stack is Python, TypeScript, SQL, LangGraph, LangChain, FastAPI, Django, React and Next.js, PostgreSQL with pgvector, dbt, Databricks, Docker and GitHub Actions.", keys: "stack languages tools python typescript react nextjs fastapi django langgraph langchain postgres docker skills tech" },
];

const STOP = new Set("a an the is are was were do does did i you your my me of to in on for with and or how what which who why when where can have has it this that about any tell much many".split(" "));

function terms(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9@+\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !STOP.has(w));
}

function search(q: string) {
  const qt = terms(q);
  if (!qt.length) return [];
  return DOCS.map((d) => {
    const bag = new Set(terms(d.text + " " + d.keys));
    const score = qt.reduce((s, t) => s + (bag.has(t) ? 1 : Array.from(bag).some((b) => b.startsWith(t) || t.startsWith(b)) && t.length > 3 ? 0.5 : 0), 0);
    return { d, score: score / qt.length };
  })
    .filter((r) => r.score >= 0.34)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);
}

const SUGGESTED = [
  "Have you shipped an LLM to production?",
  "How do you evaluate agents?",
  "What guardrails do you use?",
  "Any customer-facing experience?",
  "How much data do your pipelines handle?",
];

export default function AskBox() {
  const [q, setQ] = useState("");
  const [asked, setAsked] = useState<string | null>(null);
  const results = asked ? search(asked) : [];

  function ask(text: string) {
    setQ(text);
    setAsked(text);
  }

  return (
    <section id="ask" aria-labelledby="ask-title" className="border-t border-line py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="text-sm font-semibold text-data">Grounded Q&amp;A</p>
          <h2 id="ask-title" className="wider mt-2 text-4xl font-extrabold leading-[1.12] md:text-[3.2rem] md:leading-[1.12]">
            Ask about my work.
          </h2>
          <p className="mt-5 text-mute">
            Answers come only from a small set of facts on this page, each with its source. If nothing supports an answer, it
            says so instead of guessing. That&apos;s the same rule I give my agents.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {SUGGESTED.map((s) => (
              <li key={s}>
                <button onClick={() => ask(s)} className="rounded-full border border-line bg-panel px-3.5 py-2 text-left text-sm text-snow/90 hover:border-volt">
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="glow rounded-2xl bg-panel p-5 md:p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (q.trim()) setAsked(q.trim());
            }}
            className="flex gap-2"
          >
            <label htmlFor="ask-input" className="sr-only">
              Your question
            </label>
            <input
              id="ask-input"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ask anything about my experience"
              className="min-w-0 flex-1 rounded-full border border-line bg-night px-5 py-3 text-snow placeholder:text-mute focus:border-volt focus:outline-none"
            />
            <button type="submit" className="rounded-full bg-volt px-5 py-3 font-semibold text-night hover:bg-snow">
              Ask
            </button>
          </form>

          <div className="mt-5 min-h-[14rem]" aria-live="polite">
            {!asked && <p className="text-mute">Try one of the questions, or type your own.</p>}
            {asked && results.length === 0 && (
              <div className="step-in rounded-xl border border-warn/50 bg-warn/10 p-4">
                <p className="font-semibold text-warn">No evidence found</p>
                <p className="mt-1 text-snow/90">
                  Nothing on this page answers that, so I won&apos;t guess. Email me and I&apos;ll answer it myself.
                </p>
              </div>
            )}
            {results.map(({ d, score }, i) => (
              <article key={asked + d.id} className="step-in mt-3 rounded-xl border border-line bg-panel-up p-4 first:mt-0" style={{ animationDelay: `${i * 120}ms` }}>
                <p className="text-[16px] leading-relaxed">{d.text}</p>
                <p className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
                  <a href={d.href} className="font-semibold text-volt underline underline-offset-4 hover:text-snow">
                    Source: {d.source}
                  </a>
                  <span className="text-mute">match {Math.round(Math.min(score, 1) * 100)}%</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
