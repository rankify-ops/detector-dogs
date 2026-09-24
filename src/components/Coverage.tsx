import { CITIES, DOTS, MAP } from "@/content/map";
import { Reveal, SectionHead } from "./ui";

const HQ = CITIES.find((c) => c.hq)!;
// Labels drawn to the left of their dot, so the east coast doesn't run off the edge.
const LEFT = ["Perth", "Adelaide", "Brisbane"];

export function Coverage() {
  return (
    <section id="coverage" className="relative overflow-hidden">
      <div className="wrap py-24 lg:py-36">
        <SectionHead
          index="05"
          kicker="Coverage"
          title={
            <>
              A national capability, <span className="dim">coordinated from Melbourne.</span>
            </>
          }
        />
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-[17px] leading-relaxed text-ink">
              Rapid-response detection teams deploy at short notice anywhere in Australia. Every deployment is backed by
              structured protocols, quality control and continuous performance evaluation.
            </p>
            <dl className="mt-10 border-t border-rule">
              {[
                ["Command centre", "Melbourne, VIC"],
                ["Deployment", "Nationwide, short notice"],
                ["Operating", "7 days"],
                ["Ownership", "Wholly Australian-owned"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-rule py-4">
                  <dt className="mono text-ink-3">{k}</dt>
                  <dd className="text-right text-[15px] text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="relative lg:col-span-8" delay={120}>
            <svg viewBox={`0 0 ${MAP.w} ${MAP.h}`} className="h-auto w-full" role="img" aria-label="Map of Australia showing nationwide coverage from Melbourne">
              <g fill="#c3c9cc">
                {DOTS.map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r={3.1} />
                ))}
              </g>
              {/* Lines out from Melbourne to each capital. */}
              <g stroke="#0b1a2c" strokeWidth="1" strokeDasharray="3 5" fill="none" opacity="0.45">
                {CITIES.filter((c) => !c.hq).map((c) => (
                  <path key={c.name} d={`M${HQ.x},${HQ.y} Q${(HQ.x + c.x) / 2},${Math.min(HQ.y, c.y) - 60} ${c.x},${c.y}`} />
                ))}
              </g>
              {CITIES.map((c) => (
                <g key={c.name}>
                  {c.hq && <circle cx={c.x} cy={c.y} r="10" fill="#e8650f" className="pulse" />}
                  <circle cx={c.x} cy={c.y} r={c.hq ? 8 : 5} fill={c.hq ? "#e8650f" : "#0b1a2c"} stroke="#f6f6f3" strokeWidth="2.5" />
                  <text
                    x={c.x + (LEFT.includes(c.name) ? -14 : 14)}
                    y={c.y + 5}
                    textAnchor={LEFT.includes(c.name) ? "end" : "start"}
                    className="text-[28px] sm:text-[17px]"
                    letterSpacing="2"
                    fill="#0b1a2c"
                    stroke="#f6f6f3"
                    strokeWidth="6"
                    paintOrder="stroke"
                    style={{ fontFamily: "var(--font-mono-face), monospace", textTransform: "uppercase" }}
                  >
                    {c.name}
                    {c.hq ? " · HQ" : ""}
                  </text>
                </g>
              ))}
            </svg>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
