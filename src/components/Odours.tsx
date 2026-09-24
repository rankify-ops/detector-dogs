"use client";

import { useState } from "react";
import { odours } from "@/content/site";
import { Reveal, SectionHead } from "./ui";

const TABS = [
  { key: "explosives", label: "Explosives" },
  { key: "narcotics", label: "Narcotics" },
] as const;

export function Odours() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("explosives");
  const list = odours[tab];

  return (
    <section id="odours" className="border-t border-rule bg-white">
      <div className="wrap py-24 lg:py-36">
        <SectionHead
          index="04"
          kicker="Odours Our Dogs Detect"
          title={
            <>
              What Odours Can A Proficiently Trained Dog Detect? <span className="dim">Pure Odour is what they can detect, Not Pseudo</span>
            </>
          }
          aside={
            <p>
              Detector Dogs Australia utilises pure odour and not Pseudo odour from multiple global suppliers located in
              USA, Russia and Europe to ensure excellent coverage of all explosive odours readily available in our
              communities.
            </p>
          }
        />

        <Reveal className="mt-16 border border-rule">
          <div className="flex flex-col justify-between gap-4 border-b border-rule bg-paper p-3 sm:flex-row sm:items-center">
            <div role="tablist" aria-label="Odour class" className="grid grid-cols-2 gap-1 sm:flex">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  role="tab"
                  type="button"
                  aria-selected={tab === t.key}
                  aria-controls="odour-panel"
                  onClick={() => setTab(t.key)}
                  className={`mono h-10 px-5 transition-colors ${
                    tab === t.key ? "bg-ink text-paper" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {t.label}
                  
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
          <ul id="odour-panel" role="tabpanel" className="-mb-px -mr-px grid grid-cols-2 lg:grid-cols-4" key={tab}>
            {list.map((o, i) => (
              <li
                key={o}
                className="flex items-center gap-2 border-b border-r border-rule px-3 py-3.5 text-[13.5px] text-ink sm:gap-4 sm:px-5 sm:py-4 sm:text-[15px]"
                style={{ animation: `fadeIn .5s var(--ease) ${i * 22}ms both` }}
              >
                {o}
              </li>
            ))}
          </ul>
          </div>
        </Reveal>
        <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}`}</style>
      </div>
    </section>
  );
}
