"use client";

import { useState } from "react";
import { odours } from "@/content/site";
import { Reveal, SectionHead } from "./ui";

const TABS = [
  { key: "explosives", label: "Explosives", prefix: "EX" },
  { key: "narcotics", label: "Narcotics", prefix: "NC" },
] as const;

export function Odours() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("explosives");
  const active = TABS.find((t) => t.key === tab)!;
  const list = odours[tab];

  return (
    <section id="odours" className="border-t border-rule bg-white">
      <div className="wrap py-24 lg:py-36">
        <SectionHead
          index="04"
          kicker="Odour library"
          title={
            <>
              Pure odour. <span className="dim">Never pseudo.</span>
            </>
          }
          aside={
            <p>
              Training odours are sourced from multiple international suppliers in the USA, Europe and Russia, and
              complemented with real materials — broad coverage of every odour readily available in our communities.
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
                  <span className={`ml-2 ${tab === t.key ? "text-white/50" : "text-ink-3"}`}>{odours[t.key].length}</span>
                </button>
              ))}
            </div>
            <p className="mono px-2 text-[10.5px] text-ink-3">
              Single-purpose dogs · {tab === "explosives" ? "passive alert" : "active alert"}
            </p>
          </div>

          <div className="overflow-hidden">
          <ul id="odour-panel" role="tabpanel" className="-mb-px -mr-px grid grid-cols-2 lg:grid-cols-4" key={tab}>
            {list.map((o, i) => (
              <li
                key={o}
                className="flex items-center gap-2 border-b border-r border-rule px-3 py-3.5 text-[13.5px] text-ink sm:gap-4 sm:px-5 sm:py-4 sm:text-[15px]"
                style={{ animation: `fadeIn .5s var(--ease) ${i * 22}ms both` }}
              >
                <span className="mono hidden w-11 shrink-0 text-[10.5px] text-ink-3 sm:inline">
                  {active.prefix}-{String(i + 1).padStart(2, "0")}
                </span>
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
