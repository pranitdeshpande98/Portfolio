"use client";

import { useMemo, useState } from "react";

/* A small, honest model of two things I run at work:
   1. an inbound EDI 850 purchase order validated and mapped to an SAP ORDERS05 IDoc;
   2. a price check that alerts sales when the PO price differs from the system price.
   Customer, products and prices are invented. */

const SYSTEM_PRICES: Record<string, { name: string; price: number }> = {
  "CHK-BRST-10": { name: "Boneless breast, 10 lb case", price: 38.5 },
  "CHK-WING-15": { name: "Party wings, 15 lb case", price: 42.1 },
  "CHK-THGH-10": { name: "Thighs, 10 lb case", price: 29.75 },
  "CHK-TEND-05": { name: "Tenders, 5 lb case", price: 51.2 },
};
const UNITS = ["CA", "LB", "EA"];

const HEAD =
  "ISA*00*          *00*          *ZZ*LONESTARGRO    *ZZ*BACHOCO        *261120*0810*U*00401*000004512*0*P*>~\nGS*PO*LONESTARGRO*BACHOCO*20261120*0810*4512*X*004010~\nST*850*0001~\nBEG*00*SA*PO-88412**20261120~\nN1*ST*LONE STAR GROCERS DC 4*92*0044~\n";
const TAIL = "GE*1*4512~\nIEA*1*000004512~";

const PRESETS = [
  {
    id: "clean",
    label: "Clean order",
    text: HEAD + "PO1*1*120*CA*38.50**VP*CHK-BRST-10~\nPO1*2*80*CA*42.10**VP*CHK-WING-15~\nPO1*3*60*CA*29.75**VP*CHK-THGH-10~\nCTT*3~\nSE*8*0001~\n" + TAIL,
  },
  {
    id: "price",
    label: "Price mismatch",
    text: HEAD + "PO1*1*120*CA*38.50**VP*CHK-BRST-10~\nPO1*2*80*CA*39.90**VP*CHK-WING-15~\nPO1*3*40*CA*49.95**VP*CHK-TEND-05~\nCTT*3~\nSE*8*0001~\n" + TAIL,
  },
  {
    id: "broken",
    label: "Broken document",
    text: HEAD + "PO1*1*120*CA*38.50**VP*CHK-BRST-10~\nPO1*2*8O*BX*42.10**VP*CHK-WING-15~\nPO1*3*60*CA*29.75**VP*CHK-DRUM-10~\nCTT*2~\nSE*9*0001~\n" + TAIL,
  },
];

type Check = { ok: boolean; text: string };
type Line = { pos: string; qty: string; uom: string; price: number; sku: string };
type Mismatch = { sku: string; name: string; po: number; sys: number; qty: number };

function run(raw: string) {
  const segs = raw
    .split("~")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => s.split("*"));
  const checks: Check[] = [];
  const has = (id: string) => segs.find((s) => s[0] === id);

  checks.push({ ok: !!has("ISA") && !!has("IEA"), text: "Interchange envelope (ISA/IEA) present" });

  const st = segs.findIndex((s) => s[0] === "ST");
  const se = segs.findIndex((s) => s[0] === "SE");
  const isPO = st >= 0 && segs[st][1] === "850";
  checks.push({ ok: isPO, text: "Transaction set is an 850 purchase order" });

  if (st >= 0 && se > st) {
    const counted = se - st + 1;
    const declared = Number(segs[se][1]);
    checks.push({ ok: counted === declared, text: `Segment count: SE says ${segs[se][1]}, document has ${counted}` });
  } else {
    checks.push({ ok: false, text: "ST/SE pair found" });
  }

  const beg = has("BEG");
  const n1 = segs.find((s) => s[0] === "N1" && s[1] === "ST");
  checks.push({ ok: !!beg && !!beg[3], text: "PO number present in BEG" });
  checks.push({ ok: !!n1, text: "Ship-to party (N1*ST) present" });

  const lines: Line[] = segs
    .filter((s) => s[0] === "PO1")
    .map((s) => ({ pos: s[1], qty: s[2], uom: s[3], price: Number(s[4]), sku: s[7] ?? "" }));
  const ctt = has("CTT");
  checks.push({
    ok: !!ctt && Number(ctt[1]) === lines.length,
    text: `Line count: CTT says ${ctt ? ctt[1] : "nothing"}, document has ${lines.length}`,
  });

  const mismatches: Mismatch[] = [];
  lines.forEach((l) => {
    const qtyOk = /^\d+(\.\d+)?$/.test(l.qty);
    if (!qtyOk) checks.push({ ok: false, text: `Line ${l.pos}: quantity "${l.qty}" is not a number` });
    if (!UNITS.includes(l.uom)) checks.push({ ok: false, text: `Line ${l.pos}: unit "${l.uom}" is not mapped to an ERP unit` });
    const sys = SYSTEM_PRICES[l.sku];
    if (!sys) {
      checks.push({ ok: false, text: `Line ${l.pos}: material ${l.sku || "(blank)"} not found in the ERP` });
    } else if (Number.isFinite(l.price) && Math.abs(sys.price - l.price) > 0.004) {
      mismatches.push({ sku: l.sku, name: sys.name, po: l.price, sys: sys.price, qty: Number(l.qty) || 0 });
    }
  });

  const structuralOk = checks.every((c) => c.ok);
  return { checks, lines, beg, n1, structuralOk, mismatches };
}

export default function DockDemo() {
  const [preset, setPreset] = useState(PRESETS[1].id);
  const [text, setText] = useState(PRESETS[1].text);
  const [submitted, setSubmitted] = useState(PRESETS[1].text);
  const result = useMemo(() => run(submitted), [submitted]);

  function choose(id: string) {
    const p = PRESETS.find((x) => x.id === id)!;
    setPreset(id);
    setText(p.text);
    setSubmitted(p.text);
  }

  const status = result.structuralOk ? (result.mismatches.length ? "posted, sales alerted" : "posted") : "rejected";
  const exposure = result.mismatches.reduce((sum, m) => sum + Math.abs(m.sys - m.po) * m.qty, 0);

  return (
    <section id="playground" aria-labelledby="dock-title" className="border-t border-line py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <p className="text-sm font-semibold text-data">Integration playground</p>
          <h2 id="dock-title" className="wider mt-2 text-4xl font-extrabold leading-[1.12] md:text-[3.2rem] md:leading-[1.12]">
            Break an order. Watch it get caught.
          </h2>
        </div>
        <p className="text-mute md:text-right">
          A customer purchase order arrives as an EDI 850. It gets validated, mapped to an ERP order document and
          price-checked, the same steps my production interfaces run. Edit any price or quantity and run it again.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
        <div className="min-w-0 overflow-hidden rounded-2xl border border-line bg-panel">
          <div className="flex flex-wrap gap-2 border-b border-line p-4" role="group" aria-label="Sample documents">
            {PRESETS.map((p) => (
              <button
                key={p.id}
                onClick={() => choose(p.id)}
                aria-pressed={preset === p.id}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  preset === p.id ? "bg-volt text-night" : "bg-panel-up text-mute hover:text-snow"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
          <label htmlFor="edi" className="sr-only">
            EDI 850 document
          </label>
          <textarea
            id="edi"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setPreset("");
            }}
            spellCheck={false}
            rows={14}
            className="block w-full resize-y bg-night/60 p-4 font-mono text-[13px] leading-relaxed text-data outline-none"
          />
          <div className="flex items-center justify-between gap-4 border-t border-line p-4">
            <p className="text-sm text-mute">Sample data. The customer and prices are made up.</p>
            <button onClick={() => setSubmitted(text)} className="rounded-full bg-volt px-5 py-2.5 font-semibold text-night hover:bg-snow">
              Run the check
            </button>
          </div>
        </div>

        <div key={submitted} className="rise min-w-0 space-y-5">
          <div className="rounded-2xl border border-line bg-panel p-5">
            <div className="flex items-center justify-between gap-4">
              <h3 className="wide text-lg font-bold">Validation</h3>
              <span
                className={`rounded-full px-3 py-1 text-sm font-semibold text-night ${
                  !result.structuralOk ? "bg-bad" : result.mismatches.length ? "bg-warn" : "bg-ok"
                }`}
              >
                Order {status}
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-[15px]">
              {result.checks.map((c, i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden="true" className={`mt-0.5 font-bold ${c.ok ? "text-ok" : "text-bad"}`}>
                    {c.ok ? "✓" : "✕"}
                  </span>
                  <span className={c.ok ? "text-snow/90" : "font-semibold text-bad"}>
                    <span className="sr-only">{c.ok ? "Pass: " : "Fail: "}</span>
                    {c.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {result.structuralOk && (
            <div className="rounded-2xl border border-line bg-panel p-5">
              <h3 className="wide text-lg font-bold">Mapped to an ERP order (ORDERS05)</h3>
              <pre className="mt-3 overflow-x-auto font-mono text-[13px] leading-relaxed text-data">
{`E1EDK01  BELNR ${result.beg?.[3]}
E1EDKA1  PARVW WE  PARTN ${result.n1?.[4]}  ${result.n1?.[2]}
${result.lines
  .map((l) => `E1EDP01  POSEX ${l.pos.padStart(6, "0")}  MENGE ${l.qty}  MENEE ${l.uom}  VPREI ${l.price.toFixed(2)}\n  E1EDP19  QUALF 001  IDTNR ${l.sku}`)
  .join("\n")}`}
              </pre>
            </div>
          )}

          {result.structuralOk && result.mismatches.length > 0 && (
            <div className="rounded-2xl border border-warn/60 bg-warn/10 p-5">
              <h3 className="wide text-lg font-bold text-warn">Email to sales, before invoicing</h3>
              <p className="mt-2 text-[15px]">
                PO {result.beg?.[3]} from {result.n1?.[2]} has {result.mismatches.length} price{" "}
                {result.mismatches.length === 1 ? "difference" : "differences"}. Please confirm with the buyer.
              </p>
              <ul className="mt-3 space-y-1.5 text-[15px]">
                {result.mismatches.map((m) => (
                  <li key={m.sku}>
                    <span className="font-semibold">{m.name}</span>: PO ${m.po.toFixed(2)}, system ${m.sys.toFixed(2)} per case
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[15px] font-semibold">
                Difference to settle before invoicing: ${exposure.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          )}

          {!result.structuralOk && (
            <p className="rounded-2xl border border-bad/60 bg-bad/10 p-5 text-[15px]">
              In production this document is held in an error status with the failed checks attached, and the partner&apos;s owner
              gets the error the same night instead of the customer calling about a missing order.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
