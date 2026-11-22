"use client";

import { useState } from "react";
import { navItems, profile, stations } from "@/data";

export default function Floor() {
  const [active, setActive] = useState(0);
  const s = stations[active];

  function onKey(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % stations.length);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + stations.length) % stations.length);
    }
  }

  return (
    <header id="top" className="bg-white">
      <nav className="mx-auto flex max-w-page items-center justify-between px-6 py-6 md:px-10" aria-label="Main">
        <a href="#top" className="wide text-lg font-bold">
          {profile.name}
        </a>
        <ul className="hidden gap-7 text-[15px] text-steel lg:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.link} className="hover:text-ink">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <a href={`mailto:${profile.email}`} className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-stamp lg:hidden">
          Email me
        </a>
      </nav>

      <div className="mx-auto max-w-page px-6 pb-10 pt-8 md:px-10 md:pt-14">
        <p className="text-[17px] text-steel">
          {profile.role} in {profile.location}
        </p>
        <h1 className="wider mt-4 max-w-5xl text-[2.6rem] font-extrabold md:text-[4.6rem]">
          I keep a food plant&apos;s systems running.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">
          At Bachoco I&apos;m the only US SAP developer for 4,500 employees. Orders come in over EDI, prices get
          checked, data lands in the warehouse, payroll goes out, and every employee can ask our AI assistant a
          question. This is that floor, one station at a time.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#dock" className="rounded-full bg-stamp px-6 py-3 font-semibold text-white transition-colors hover:bg-stamp-deep">
            Try the receiving dock
          </a>
          <a href={`mailto:${profile.email}`} className="rounded-full border border-ink/30 px-6 py-3 font-semibold transition-colors hover:border-ink">
            Email me
          </a>
        </div>
      </div>

      <section id="floor" aria-labelledby="floor-title" className="border-t border-rule bg-frost">
        <div className="mx-auto max-w-page px-6 py-14 md:px-10 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="floor-title" className="wide text-3xl font-bold md:text-[2.6rem]">
              The floor plan
            </h2>
            <p className="max-w-md text-steel">
              Data moves left to right, the way an order moves through the business. Pick a station to see what I built
              there.
            </p>
          </div>

          <div className="relative mt-10">
            {/* conveyor behind the bays */}
            <svg className="pointer-events-none absolute left-0 top-1/2 hidden h-4 w-full -translate-y-1/2 md:block" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 100 4">
              <line x1="0" y1="2" x2="100" y2="2" stroke="#CFD9E0" strokeWidth="4" vectorEffect="non-scaling-stroke" />
              <line x1="0" y1="2" x2="100" y2="2" stroke="#5B3FA6" strokeWidth="2" className="belt" vectorEffect="non-scaling-stroke" />
            </svg>

            <div role="tablist" aria-label="Stations" onKeyDown={onKey} className="relative grid gap-3 sm:grid-cols-2 md:grid-cols-5 md:gap-5">
              {stations.map((st, i) => {
                const on = i === active;
                return (
                  <button
                    key={st.id}
                    role="tab"
                    id={`tab-${st.id}`}
                    aria-selected={on}
                    aria-controls="station-panel"
                    tabIndex={on ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={`group flex flex-col items-start rounded-[3px] border-2 bg-white p-5 text-left transition-colors ${
                      on ? "border-stamp" : "border-rule hover:border-steel"
                    }`}
                  >
                    <span className="flex w-full items-center justify-between text-sm text-steel">
                      <span>Station {i + 1}</span>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${on ? "bg-stamp text-white" : "bg-frost text-steel"}`}>
                        {st.short}
                      </span>
                    </span>
                    <span className="wide mt-4 text-xl font-bold leading-tight">{st.name}</span>
                    <span className={`wider mt-5 text-[2rem] font-extrabold leading-none ${on ? "text-stamp" : "text-ink"}`}>{st.figure}</span>
                    <span className="mt-2 text-sm leading-snug text-steel">{st.figureLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div id="station-panel" role="tabpanel" aria-labelledby={`tab-${s.id}`} key={s.id} className="rise mt-6 grid gap-8 rounded-[3px] border-2 border-ink bg-white p-6 md:grid-cols-[1fr_1.3fr] md:gap-12 md:p-10">
            <div>
              <h3 className="wide text-2xl font-bold md:text-3xl">{s.name}</h3>
              <p className="mt-4 text-lg leading-relaxed text-steel">{s.what}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tools">
                {s.stack.map((t) => (
                  <li key={t} className="rounded-full bg-stamp-soft px-3 py-1 text-sm font-medium text-stamp-deep">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="space-y-4">
              {s.built.map((b) => (
                <li key={b} className="flex gap-3 text-[17px] leading-relaxed">
                  <svg className="mt-1.5 h-4 w-4 shrink-0 text-stamp" viewBox="0 0 16 16" aria-hidden="true">
                    <rect x="1" y="1" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M4.5 8.2 7 10.5l4.5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
}
