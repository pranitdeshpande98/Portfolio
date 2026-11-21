export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const contactEmail = "pranitvijaydeshpande@gmail.com";

export const socialLinks = [
  { name: "GitHub", link: "https://github.com/pranitdeshpande98" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/pranitdeshpande-jan98" },
];

export const gridItems = [
  {
    id: 1,
    title: "I work with the people who use what I build, from the first conversation to go-live",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Dallas, flexible across time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "What I ship with",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Building Fuse, a personal AI agent that asks before it acts",
    description: "Currently building",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to build something together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const techStack = {
  left: ["Python", "TypeScript", "C++"],
  right: ["LangGraph", "MCP", "SQL"],
};

export const projects = [
  {
    id: 1,
    title: "Fuse: Personal AI Agent",
    des: "A LangGraph agent on Telegram that reads my Gmail and Calendar and drafts replies, with every write gated behind my approval.",
    img: "/project-fuse.svg",
    tags: ["Python", "LangGraph", "FastAPI", "Postgres", "Docker"],
    link: "https://github.com/pranitdeshpande98/fuse",
    linkLabel: "View on GitHub",
  },
  {
    id: 2,
    title: "Roost: AI HR Assistant",
    des: "Multilingual HR agent for plant kiosks. 102 eval cases, 99% tool-call correctness, and guardrails that blocked every prompt injection on a held-out set.",
    img: "/project-roost.svg",
    tags: ["Python", "LangGraph", "pgvector", "FastAPI"],
    link: "https://github.com/pranitdeshpande98/roost-hr-assistant",
    linkLabel: "View on GitHub",
  },
  {
    id: 3,
    title: "Drug Interaction Checker",
    des: "6 agents across 2 custom MCP servers, with LLM-as-judge and human review. Rejects any claim it cannot trace to a source.",
    img: "/project-drug.svg",
    tags: ["Next.js", "TypeScript", "FastAPI", "MCP", "Claude"],
    link: "https://github.com/pranitdeshpande98/drug-interaction-checker",
    linkLabel: "View on GitHub",
  },
  {
    id: 4,
    title: "Concurrent Bank Account Manager",
    des: "Multithreaded C++ TCP server handling 1,800+ transactions/sec at 100 clients with p95 latency near 1 ms.",
    img: "/project-bank.svg",
    tags: ["C++", "Linux", "POSIX threads", "TCP"],
    link: "https://github.com/pranitdeshpande98/Centralized-Multi-User-Concurrent-Bank-Account-Manager",
    linkLabel: "View on GitHub",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Senior Software Engineer, Bachoco USA",
    desc: "Shipped an LLM HR assistant to production for ~4,500 employees. Built T-SQL and SSIS pipelines and EDI integrations for 60 trading partners at 50,000 records/day.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Developer Intern, VITG Corp",
    desc: "Built a full-stack monitoring platform (Django, PostgreSQL, React) with real-time alerting, cutting incident response 60%.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Graduate Assistant, UMBC",
    desc: "Wrote an autograder that detects race conditions and memory leaks for 65 Operating Systems students, cutting grading time 40%.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Engineer, Accenture",
    desc: "Delivered integrations and React forms for the State of Michigan's tax platform, cutting post-release defects 35%.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];
