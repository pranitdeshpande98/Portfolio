export const profile = {
  name: "Pranit Deshpande",
  role: "AI engineer, software and forward deployed",
  location: "Dallas, Texas",
  email: "pranitvijaydeshpande@gmail.com",
  github: "https://github.com/pranitdeshpande98",
  linkedin: "https://www.linkedin.com/in/pranitdeshpande-jan98",
};

export const navItems = [
  { name: "Trace", link: "#top" },
  { name: "Evals", link: "#evals" },
  { name: "Ask", link: "#ask" },
  { name: "Systems", link: "#systems" },
  { name: "Projects", link: "#projects" },
  { name: "Playground", link: "#playground" },
  { name: "Incidents", link: "#incidents" },
];

/* Production systems I own, framed as constraint, decision, outcome. */
export type System = {
  name: string;
  tag: string;
  metric: string;
  metricLabel: string;
  constraint: string;
  decision: string;
  outcome: string;
  stack: string[];
};

export const systems: System[] = [
  {
    name: "AI HR assistant",
    tag: "LLM agent in production",
    metric: "~4,500",
    metricLabel: "employees use it",
    constraint: "A food producer with plant-floor staff and a small HR team answering the same handbook, leave and payday questions every day.",
    decision: "Retrieval over the official handbook on open-source models (gpt-oss-120b with a Qwen fallback), so answers cite policy instead of guessing.",
    outcome: "In production for every employee and the HR team since 09/2026.",
    stack: ["Python", "LLMs", "RAG", "pgvector"],
  },
  {
    name: "Partner integration platform",
    tag: "Enterprise integration",
    metric: "50,000",
    metricLabel: "records a day",
    constraint: "60 trading partners ran through a custom database outside the ERP. Every format change broke something.",
    decision: "Rebuilt every partner on standard interfaces with validation at ingestion, then onboarded 7 new customers on the new path.",
    outcome: "Errors fell from about 100 a month to under 10.",
    stack: ["EDI X12", "REST/SOAP", "Message mapping", "SQL"],
  },
  {
    name: "Finance data pipelines",
    tag: "Data engineering",
    metric: "400K+",
    metricLabel: "rows every weekly run",
    constraint: "Accounts Receivable and sales needed one trusted view of orders, deliveries, invoices and prices.",
    decision: "15+ dbt models on Databricks, a weekly credit report, and a SQL price check on 100–200 purchase orders a day.",
    outcome: "Price mismatches reach sales the same day, before a credit memo is needed.",
    stack: ["dbt", "Databricks", "SQL Server", "Power BI"],
  },
  {
    name: "Payroll integrations",
    tag: "Cost and reliability",
    metric: "$80K",
    metricLabel: "saved every year",
    constraint: "A licensed integration platform (Boomi) moved employee data to payroll on a schedule.",
    decision: "Rewrote the 4 interfaces in-house in SSIS and T-SQL, running 5 nights a week, with SFTP file delivery.",
    outcome: "All 4,000 employee records sync nightly with no license, about 1M records a year.",
    stack: ["SSIS", "T-SQL", "SFTP", "Scheduling"],
  },
];

export type Incident = {
  title: string;
  broke: string;
  fix: string;
  before: string;
  after: string;
  unit: string;
};

export const incidents: Incident[] = [
  {
    title: "EDI errors were a monthly ritual",
    broke: "Sixty partners flowed through a custom SQL Server database that sat outside the ERP. Every format change from a customer broke something, and fixes were manual.",
    fix: "Moved every partner onto standard ERP interfaces so mapping and validation live in one place.",
    before: "~100",
    after: "<10",
    unit: "EDI errors a month",
  },
  {
    title: "Price problems were found by the invoice",
    broke: "System prices change for many reasons, so most purchase orders disagreed with them. Nobody saw it until a credit memo was due.",
    fix: "A SQL check compares every incoming PO price with the system price and emails sales the same day.",
    before: "weeks",
    after: "same day",
    unit: "to catch a price mismatch",
  },
  {
    title: "A license paid for a nightly copy job",
    broke: "Boomi moved employee data from SuccessFactors to payroll. It worked, but cost a license for what was a scheduled sync.",
    fix: "Rebuilt the 4 interfaces in SSIS and T-SQL, running 5 nights a week in an 8 PM to midnight window.",
    before: "Boomi",
    after: "$80K",
    unit: "saved every year",
  },
];

export type Project = {
  name: string;
  summary: string;
  proof: string;
  stack: string[];
  link: string;
  status?: string;
};

export const projects: Project[] = [
  {
    name: "Roost",
    summary:
      "A multilingual HR assistant for plant-floor kiosks. It answers handbook questions in English, Spanish and Vietnamese with section citations, and routes sensitive issues to HR.",
    proof: "102 eval cases, 98% retrieval hit@5, every prompt injection blocked on a held-out set",
    stack: ["Python", "LangGraph", "FastAPI", "PostgreSQL", "pgvector", "OpenTelemetry"],
    link: "https://github.com/pranitdeshpande98/roost-hr-assistant",
  },
  {
    name: "Fuse",
    summary:
      "A personal AI agent on Telegram that reads my Gmail and Calendar and drafts replies. It never sends, posts or changes anything until I approve it.",
    proof: "Approval gate with idempotency keys, so an action can never run twice",
    stack: ["Python", "LangGraph", "FastAPI", "PostgreSQL", "Docker"],
    link: "https://github.com/pranitdeshpande98/fuse",
    status: "Building now",
  },
  {
    name: "Drug Interaction Checker",
    summary:
      "Six agents check a drug pair across two custom MCP servers. An LLM judge and a human review step reject any claim that can't be traced to a source.",
    proof: "First verdict streams in about 3 seconds",
    stack: ["Next.js", "TypeScript", "FastAPI", "LangGraph", "MCP", "Claude"],
    link: "https://github.com/pranitdeshpande98/drug-interaction-checker",
  },
  {
    name: "Cancer NGS Pipeline",
    summary:
      "Simulated sequencing reads for BRCA1 are aligned, variant-called and annotated against ClinVar, then served through an API to a React dashboard.",
    proof: "4 Dockerized stages run end to end, with a smoke test in CI on every push",
    stack: ["Python", "Docker", "GATK", "PostgreSQL", "Flask", "React"],
    link: "https://github.com/pranitdeshpande98/Cancer_NGS_Pipeline",
  },
  {
    name: "Neuro Pipeline",
    summary:
      "An EEG processing platform designed around one Kubernetes Job per subject, with a reconciler that keeps run status correct even when a pod dies without reporting back.",
    proof: "Built so far: the data model, idempotent ingestion into object storage, and a stage framework that rejects a misordered pipeline",
    stack: ["Python", "Django", "PostgreSQL", "MinIO", "Kubernetes"],
    link: "https://github.com/pranitdeshpande98/Neuro-Pipeline",
    status: "In progress",
  },
];

export const extraProject: Project = {
  name: "Knee Osteoarthritis Grading",
  summary:
    "A fine-tuned Xception CNN grades knee X-rays into 5 severity levels and explains itself with Grad-CAM heatmaps. A Django app turns each result into a PDF report written by GPT-4o.",
  proof: "Trained on 8,260 X-rays, correcting a 13:1 class imbalance with class weights",
  stack: ["Python", "TensorFlow", "Django", "PostgreSQL", "GPT-4o"],
  link: "https://github.com/pranitdeshpande98",
};

export const experience = [
  {
    role: "Senior Software Engineer",
    org: "Bachoco",
    dates: "2025 to now",
    note: "Sole US engineer at a 4,500-employee food producer. I own the company's first AI assistant, partner integrations, finance data pipelines and payroll systems.",
  },
  {
    role: "Software Developer Intern",
    org: "VITG Corp",
    dates: "2024 to 2025",
    note: "Built a federal contract tracker on the USAspending.gov API that posts awards to Slack, with Gemini Q&A on why bids were won.",
  },
  {
    role: "Graduate Assistant",
    org: "University of Maryland, Baltimore County",
    dates: "2023 to 2024",
    note: "Wrote an autograder that catches race conditions and memory leaks for 65 Operating Systems students.",
  },
  {
    role: "Software Engineer",
    org: "Accenture",
    dates: "2019 to 2022",
    note: "Customer-facing delivery for the State of Michigan tax platform: 6 agency integrations, a call-center tool for about 6,000 calls a tax season, and 35% fewer post-release defects.",
  },
];
