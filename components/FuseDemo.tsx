"use client";

import { useState } from "react";

type State = "pending" | "approved" | "rejected";

export default function FuseDemo() {
  const [state, setState] = useState<State>("pending");

  return (
    <figure className="w-full rounded-[1.75rem] bg-white p-5 text-ink shadow-[0_24px_60px_-20px_rgba(8,18,80,0.55)] md:p-6">
      <figcaption className="flex items-center justify-between border-b border-line pb-4">
        <span className="font-display text-base font-bold">Fuse</span>
        <span className="text-sm text-slate">An example of my agent at work</span>
      </figcaption>

      <div className="mt-5 space-y-3 text-[15px] leading-relaxed">
        <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-cobalt px-4 py-2.5 text-white">
          What&apos;s on tomorrow, and do I owe anyone a reply?
        </p>
        <div className="max-w-[90%] rounded-2xl rounded-bl-md bg-cobalt-soft px-4 py-3">
          <p>Two meetings: a design review at 10:00 and a call with Maria at 2:30.</p>
          <p className="mt-2">Maria asked for the Q3 file on Thursday. I drafted a reply:</p>
          <blockquote className="mt-3 rounded-xl border border-line bg-white px-3 py-2 text-slate">
            Hi Maria, sorry for the delay. The Q3 file is attached. Happy to walk through it on our
            call tomorrow.
          </blockquote>
        </div>

        <div aria-live="polite">
          {state === "pending" && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="mr-1 text-sm text-slate">Save this draft?</span>
              <button
                type="button"
                onClick={() => setState("approved")}
                className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-cobalt"
              >
                Approve
              </button>
              <button
                type="button"
                onClick={() => setState("rejected")}
                className="rounded-full border border-line px-4 py-2 text-sm font-semibold transition-colors hover:border-ink"
              >
                Reject
              </button>
            </div>
          )}
          {state !== "pending" && (
            <div className="bubble-in max-w-[90%] rounded-2xl rounded-bl-md bg-cobalt-soft px-4 py-3">
              {state === "approved" ? (
                <p>
                  <span className="mark font-semibold">Saved to your Gmail drafts.</span> Logged once,
                  so it can&apos;t be saved twice.
                </p>
              ) : (
                <p>Discarded. Nothing was saved or sent.</p>
              )}
              <button
                type="button"
                onClick={() => setState("pending")}
                className="mt-2 text-sm font-semibold text-cobalt underline underline-offset-4"
              >
                Try it again
              </button>
            </div>
          )}
        </div>
      </div>
    </figure>
  );
}
