import { CITIES, DOTS, MAP } from "@/content/map";
import { Reveal, SectionHead } from "./ui";

const HQ = CITIES.find((c) => c.hq)!;
const ROUTES = CITIES.filter((c) => !c.hq);
// Labels drawn to the left of their dot so the east coast doesn't run off the edge.
const LEFT = ["Perth", "Adelaide", "Brisbane"];

function MapLabel({ x, y, left, children }: { x: number; y: number; left?: boolean; children: React.ReactNode }) {
  return (
    <text
      x={x + (left ? -14 : 14)}
      y={y + 5}
      textAnchor={left ? "end" : "start"}
      className="text-[28px] sm:text-[17px]"
      letterSpacing="2"
      fill="#0b1a2c"
      stroke="#ffffff"
      strokeWidth="6"
      paintOrder="stroke"
      style={{ fontFamily: "var(--font-mono-face), monospace", textTransform: "uppercase" }}
    >
      {children}
    </text>
  );
}

export function Coverage() {
  return (
    <section id="coverage" className="relative overflow-hidden border-t border-rule bg-white">
      <div className="wrap section-y">
        <SectionHead
          index="06"
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
            <svg viewBox={`0 0 ${MAP.w} ${MAP.h}`} className="h-auto w-full" role="img" aria-label="Map of Australia: nationwide coverage from the Melbourne command centre">
              <g fill="#c3c9cc">
                {DOTS.map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r={3.1} />
                ))}
              </g>

              {/* Lines out from Melbourne to each capital, flowing outward on a continuous loop. */}
              {ROUTES.map((c) => {
                const d = `M${HQ.x},${HQ.y} Q${(HQ.x + c.x) / 2},${Math.min(HQ.y, c.y) - 60} ${c.x},${c.y}`;
                return (
                  <g key={c.name} fill="none">
                    <path d={d} className="route-flow" />
                    <path d={d} className="route-pulse" />
                  </g>
                );
              })}

              {ROUTES.map((c) => (
                <g key={c.name}>
                  <circle cx={c.x} cy={c.y} r="5" fill="#0b1a2c" stroke="#ffffff" strokeWidth="2.5" />
                  <MapLabel x={c.x} y={c.y} left={LEFT.includes(c.name)}>
                    {c.name}
                  </MapLabel>
                </g>
              ))}

              <circle cx={HQ.x} cy={HQ.y} r="10" fill="#e8650f" className="pulse" />
              <circle cx={HQ.x} cy={HQ.y} r="8" fill="#e8650f" stroke="#ffffff" strokeWidth="2.5" />
              <MapLabel x={HQ.x} y={HQ.y + 30} left>
                Melbourne command centre
              </MapLabel>
            </svg>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
