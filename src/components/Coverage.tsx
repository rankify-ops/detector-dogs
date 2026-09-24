import { CITIES, DOTS, MAP } from "@/content/map";
import { Reveal, SectionHead } from "./ui";

const HQ = CITIES.find((c) => c.hq)!;
const LEFT = ["Melbourne"];

export function Coverage() {
  return (
    <section id="coverage" className="relative overflow-hidden">
      <div className="wrap py-24 lg:py-36">
        <SectionHead
          index="05"
          kicker="What Locations Do We Cover?"
          title={
            <>
              A Professional Scent Detection Service <span className="dim">Without Borders</span>
            </>
          }
        />
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-[17px] leading-relaxed text-ink">
              Operating from our Melbourne command centre, Detector Dogs Australia coordinates projects nationwide using a
              network of global canine experts and elite operational teams.
            </p>
            <dl className="mt-10 border-t border-rule">
              {[
                ["Command centre", "Melbourne"],
                ["Coverage", "Nationwide"],
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
            <svg viewBox={`0 0 ${MAP.w} ${MAP.h}`} className="h-auto w-full" role="img" aria-label="Map of Australia marking the Melbourne command centre">
              <g fill="#c3c9cc">
                {DOTS.map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r={3.1} />
                ))}
              </g>
              {[HQ].map((c) => (
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
                    {" command centre"}
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
