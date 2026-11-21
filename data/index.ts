export const profile = {
  name: "Pranit Deshpande",
  role: "Forward Deployed Engineer and Software Engineer",
  location: "Dallas, Texas",
  email: "pranitvijaydeshpande@gmail.com",
  github: "https://github.com/pranitdeshpande98",
  linkedin: "https://www.linkedin.com/in/pranitdeshpande-jan98",
};

export const navItems = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
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
    name: "Fuse",
    summary:
      "A personal AI agent on Telegram that reads my Gmail and Calendar and drafts replies. It never sends, posts or changes anything until I approve it.",
    proof: "Approval gate with idempotency keys, so an action can never run twice",
    stack: ["Python", "LangGraph", "FastAPI", "PostgreSQL", "pgvector", "Docker"],
    link: "https://github.com/pranitdeshpande98/fuse",
    status: "Building now",
  },
  {
    name: "Roost",
    summary:
      "A multilingual HR assistant for plant-floor kiosks. It answers handbook questions in English, Spanish and Vietnamese with section citations, and routes sensitive issues to HR.",
    proof: "102 eval cases, 99% tool-call correctness, every prompt injection blocked on a held-out set",
    stack: ["Python", "LangGraph", "FastAPI", "PostgreSQL", "pgvector", "OpenTelemetry"],
    link: "https://github.com/pranitdeshpande98/roost-hr-assistant",
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
    name: "Concurrent Bank Account Manager",
    summary:
      "A multithreaded C++ TCP server that keeps balances correct under concurrent updates with per-account locks. Load-tested until it broke, then traced why.",
    proof: "1,800+ transactions a second at 100 clients, p95 latency near 1 ms",
    stack: ["C++", "Linux", "POSIX threads", "TCP"],
    link: "https://github.com/pranitdeshpande98/Centralized-Multi-User-Concurrent-Bank-Account-Manager",
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    org: "Bachoco USA",
    dates: "2025 to now",
    points: [
      "Shipped an LLM HR assistant to production for all ~4,500 employees and the HR team.",
      "Built T-SQL and SSIS pipelines and EDI integrations for 60 trading partners at 50,000 records a day.",
      "Replaced a paid integration platform with in-house pipelines over SFTP, saving about $80K a year.",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "VITG Corp",
    dates: "2024 to 2025",
    points: [
      "Built a monitoring platform (Django, PostgreSQL, React) with real-time alerting, cutting incident response 60%.",
    ],
  },
  {
    role: "Graduate Assistant",
    org: "University of Maryland, Baltimore County",
    dates: "2023 to 2024",
    points: [
      "Wrote an autograder that catches race conditions and memory leaks for 65 Operating Systems students.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Accenture",
    dates: "2019 to 2022",
    points: [
      "Delivered integrations and React forms for the State of Michigan's tax platform, cutting post-release defects 35%.",
    ],
  },
];

export const approach = [
  {
    title: "Find the real problem",
    text: "I start with the people doing the work: what breaks today, which systems hold the data, and what a win looks like.",
  },
  {
    title: "Build against real data",
    text: "Evals from day one, guardrails on what the model can touch, and a person approving anything it sends, posts or changes.",
  },
  {
    title: "Stay through go-live",
    text: "I ship, watch the traces, and keep iterating until the people using it rely on it every day.",
  },
];

export const skills = [
  { group: "Languages", items: "Python, TypeScript, C++, SQL (T-SQL), Java" },
  { group: "AI and agents", items: "LangGraph, LangChain, MCP servers, evals, guardrails, RAG with pgvector, OpenAI and Claude APIs" },
  { group: "Data and integration", items: "SQL Server, SSIS, dbt, Airflow, Databricks, SFTP, EDI, payroll and HRIS systems, ERP" },
  { group: "Web and delivery", items: "FastAPI, Django, React, Next.js, Docker, GitHub Actions" },
];
