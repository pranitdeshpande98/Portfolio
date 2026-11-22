export const profile = {
  name: "Pranit Deshpande",
  role: "Software and data engineer",
  location: "Dallas, Texas",
  email: "pranitvijaydeshpande@gmail.com",
  github: "https://github.com/pranitdeshpande98",
  linkedin: "https://www.linkedin.com/in/pranitdeshpande-jan98",
};

export const navItems = [
  { name: "The floor", link: "#floor" },
  { name: "Try the dock", link: "#dock" },
  { name: "Incidents", link: "#incidents" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

/* Stations on the plant floor, in the order data moves through the business. */
export type Station = {
  id: string;
  name: string;
  short: string;
  figure: string;
  figureLabel: string;
  what: string;
  built: string[];
  stack: string[];
};

export const stations: Station[] = [
  {
    id: "dock",
    name: "Receiving dock",
    short: "EDI",
    figure: "60",
    figureLabel: "trading partners moved into native SAP",
    what: "Customer orders, invoices and ship notices arrive as EDI documents. I moved every partner off a custom SQL Server database and into SAP.",
    built: [
      "Migrated all 60 EDI trading partners into SAP through IDocs, SAP PI and ABAP proxies, about 50,000 records a day.",
      "Errors fell from about 100 a month to under 10.",
      "Onboarded 7 new EDI customers in Cleo Clarify Studio in 2025.",
    ],
    stack: ["IDocs", "SAP PI", "ABAP proxies", "ANSI X12", "Cleo"],
  },
  {
    id: "pricing",
    name: "Pricing desk",
    short: "PO",
    figure: "100–200",
    figureLabel: "purchase orders checked every day",
    what: "Our system prices change often, so incoming purchase orders rarely match. Before, that surfaced weeks later as a credit memo.",
    built: [
      "A SQL alert compares every incoming PO price with the system-determined price and emails sales the same day.",
      "Mismatches show up on roughly 90% of orders, so sales can call the buyer before invoicing instead of issuing a credit memo afterwards.",
    ],
    stack: ["T-SQL", "SQL Server Agent", "Database Mail"],
  },
  {
    id: "warehouse",
    name: "Warehouse",
    short: "dbt",
    figure: "400K+",
    figureLabel: "rows in every weekly run",
    what: "Accounts Receivable and sales need one version of the truth about orders, deliveries and invoices.",
    built: [
      "15+ dbt models on Databricks feed Accounts Receivable reporting, 400K+ rows each weekly run.",
      "A Friday credit report follows each week's orders from delivery to invoice and flags over- and under-deliveries by storage location and destination.",
      "15+ T-SQL validation procedures run as SQL Server Agent jobs and alert the owner of each feed when a step fails.",
    ],
    stack: ["dbt", "Databricks", "SQL Server", "T-SQL", "Power BI"],
  },
  {
    id: "payroll",
    name: "Payroll office",
    short: "HCM",
    figure: "$80K",
    figureLabel: "a year saved by retiring Boomi",
    what: "US payroll, benefits and Year-End run on SAP HCM and Employee Central Payroll, and I own them end to end.",
    built: [
      "Replaced Boomi with in-house SSIS and T-SQL interfaces that sync all 4,000 employee records 5 nights a week.",
      "Configure wage types, schemas, infotypes, tax rates, benefits plans and open enrollment across 7 payroll areas.",
      "Close Year-End for 8,000 W-2s and ACA filings, and administer ECP access for about 20 payroll, benefits and HR users.",
      "An ABAP benefits report now lands a 400K+-row file on HR's shared drive over SFTP, halving work they used to do by hand in Excel.",
    ],
    stack: ["SAP HCM", "SuccessFactors", "ECP", "SSIS", "SFTP", "ABAP"],
  },
  {
    id: "kiosk",
    name: "HR kiosk",
    short: "AI",
    figure: "~4,500",
    figureLabel: "employees using the HR assistant",
    what: "Plant employees had handbook, leave and payday questions and one small HR team to ask.",
    built: [
      "Shipped an LLM HR assistant to production for every employee and the HR team, answering from the official handbook.",
      "Built on open-source models with retrieval over the handbook, the same design as my Roost project.",
      "Prototyping an LLM that reconciles GL data across 5,000+ cost centers for the finance close.",
    ],
    stack: ["Python", "gpt-oss-120b", "Qwen", "pgvector", "LangChain"],
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
    broke: "Sixty partners flowed through a custom SQL Server database that sat outside SAP. Every format change from a customer broke something, and fixes were manual.",
    fix: "Moved every partner onto standard SAP interfaces (IDocs, SAP PI, ABAP proxies) so mapping and validation live in one place.",
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

export const experience = [
  {
    role: "Senior SAP ABAP Developer",
    org: "Bachoco",
    dates: "2025 to now",
    note: "The only US SAP developer at a 4,500-employee food producer: EDI, payroll, data and the company's first AI assistant.",
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
    role: "SAP ABAP Developer",
    org: "Accenture",
    dates: "2019 to 2022",
    note: "State of Michigan tax platform: 6 agency interfaces, a call-center screen for about 6,000 calls a tax season, and 35% fewer post-release defects.",
  },
];
