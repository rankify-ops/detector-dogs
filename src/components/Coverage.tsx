import { CITIES, DOTS, MAP } from "@/content/map";
import { Reveal, SectionHead } from "./ui";

const HQ = CITIES.find((c) => c.hq)!;
const ROUTES = CITIES.filter((c) => !c.hq);
// Labels drawn to the left of their dot so the east coast doesn't run off the edge.
const LEFT = ["Perth", "Adelaide", "Brisbane"];
// Seconds between each route firing, and how long a signal takes to arrive (matches .route-signal).
const STAGGER = 0.45;
const TRAVEL = 1.4;

function MapLabel({ x, y, left, children }: { x: number; y: number; left?: boolean; children: React.ReactNode }) {
  return (
    <text
      x={x + (left ? -14 : 14)}
      y={y + 5}
      textAnchor={left ? "end" : "start"}
      className="text-[28px] sm:text-[17px]"
      letterSpacing="2"
      fill="#0b1a2c"
      stroke="#f6f6f3"
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
            <svg viewBox={`0 0 ${MAP.w} ${MAP.h}`} className="h-auto w-full" role="img" aria-label="Map of Australia: nationwide coverage from the Melbourne command centre">
              <g fill="#c3c9cc">
                {DOTS.map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r={3.1} />
                ))}
              </g>

              {/* Routes out of Melbourne: a faint dashed track, and a signal that runs along it on a loop. */}
              {ROUTES.map((c, i) => {
                const d = `M${HQ.x},${HQ.y} Q${(HQ.x + c.x) / 2},${Math.min(HQ.y, c.y) - 60} ${c.x},${c.y}`;
                const delay = `${i * STAGGER}s`;
                return (
                  <g key={c.name}>
                    <path d={d} pathLength={1} className="route-track" style={{ animationDelay: delay }} />
                    <path d={d} pathLength={1} className="route-signal" style={{ animationDelay: delay }} />
                  </g>
                );
              })}

              {ROUTES.map((c, i) => (
                <g key={c.name}>
                  {/* Ping as the signal lands. */}
                  <circle cx={c.x} cy={c.y} r="6" fill="none" stroke="#e8650f" strokeWidth="2" className="city-ping" style={{ animationDelay: `${i * STAGGER + TRAVEL}s` }} />
                  <circle cx={c.x} cy={c.y} r="5" fill="#0b1a2c" stroke="#f6f6f3" strokeWidth="2.5" />
                  <MapLabel x={c.x} y={c.y} left={LEFT.includes(c.name)}>
                    {c.name}
                  </MapLabel>
                </g>
              ))}

              <circle cx={HQ.x} cy={HQ.y} r="10" fill="#e8650f" className="pulse" />
              <circle cx={HQ.x} cy={HQ.y} r="8" fill="#e8650f" stroke="#f6f6f3" strokeWidth="2.5" />
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
