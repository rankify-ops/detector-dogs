import { capabilities, clients, process, standards, testimonials, site } from "@/content/site";
import { Arrow, Brackets, Photo, Reveal, SectionHead } from "./ui";

/* ── Deployed at ─────────────────────────────────────────────────────── */
export function Clients() {
  const row = [...clients, ...clients];
  return (
    <section aria-label="Venues and organisations" className="border-y border-rule bg-white">
      <div className="wrap flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:gap-10">
        <p className="mono shrink-0 text-ink-3">Deployed at</p>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <ul className="marquee">
            {row.map((c, i) => (
              <li key={i} className="flex items-center whitespace-nowrap text-[15px] text-ink">
                {c}
                <span className="mx-7 h-1 w-1 bg-rule-2" aria-hidden />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ── Capabilities ────────────────────────────────────────────────────── */
export function Capabilities() {
  return (
    <section id="capabilities" className="wrap py-24 lg:py-36">
      <SectionHead
        index="01"
        kicker="Capabilities"
        title={
          <>
            Six detection disciplines. <span className="dim">One operating standard.</span>
          </>
        }
        aside={
          <p>
            From stadium sweeps to cargo terminals, every team is single-discipline, certified and supervised by
            directors who stay involved in day-to-day operations.
          </p>
        }
      />
      <ul className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <Reveal as="li" key={c.code} delay={(i % 3) * 100} className="group">
            <div className="relative aspect-[4/3] overflow-hidden bg-mist">
              <Photo slug={c.img} alt={c.alt} sizes="(min-width:1024px) 400px, (min-width:640px) 50vw, 100vw" className="photo h-full w-full object-cover" />
              <Brackets light />
              <span className="mono absolute bottom-4 left-4 bg-white/90 px-2 py-1 text-[10px] text-ink backdrop-blur">
                {c.code}
              </span>
            </div>
            <div className="mt-5 flex items-baseline gap-4 border-b border-rule pb-5">
              <span className="mono text-signal-ink">0{i + 1}</span>
              <h3 className="text-[22px] tracking-tight">{c.title}</h3>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed">{c.body}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ── Standards ───────────────────────────────────────────────────────── */
export function Standards() {
  return (
    <section id="standards" className="border-t border-rule bg-white">
      <div className="wrap py-24 lg:py-36">
        <SectionHead
          index="02"
          kicker="The standard"
          title={
            <>
              Trained to U.S. standards. <span className="dim">As the floor, not the ceiling.</span>
            </>
          }
        />
        <div className="mt-16 grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-3 lg:col-start-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-mist">
              <Photo slug="malinois" alt="Belgian Malinois detection dog" sizes="(min-width:1024px) 300px, 100vw" className="h-full w-full object-cover grayscale" />
              <Brackets light />
            </div>
            <p className="mono mt-4 text-[10.5px] leading-relaxed text-ink-3">
              Selection, training &amp; certification to international NPCA requirements — certifying official no. PD 038
            </p>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <p className="max-w-[640px] text-[19px] leading-relaxed text-ink">
                Australia has no formal national standard for explosive detection dogs. U.S. standards are the de facto international benchmark, so Detector Dogs Australia adopts them as the minimum, then trains beyond them — because reliable outcomes depend on two inseparable
                things: exceptional animals, and an equally rigorous training and support system.
              </p>
            </Reveal>
            <ol className="mt-12 grid border-t border-rule sm:grid-cols-2">
              {standards.map(([t, b], i) => (
                <Reveal
                  as="li"
                  key={t}
                  delay={(i % 2) * 90}
                  className={`border-b border-rule py-7 ${i % 2 ? "sm:border-l sm:pl-8" : "sm:pr-8"}`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="mono text-signal-ink">S-{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-[19px] tracking-tight">{t}</h3>
                  </div>
                  <p className="mt-3 pl-[52px] text-[14.5px] leading-relaxed">{b}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Why canine ──────────────────────────────────────────────────────── */
export function WhyCanine() {
  const figures = [
    ["ppt", "Parts per trillion", "Trained dogs identify odour concentrations at parts-per-trillion levels — screening at pallet or unit-load level without interrupting cargo flow."],
    ["20×", "Faster than machines", "Industry observations show dogs screening freight at more than twenty times the speed of mechanical systems in cargo and maritime environments."],
    ["2", "Alert protocols", "Passive alerts — sit, stare, freeze — for explosives, so nothing is disturbed. Active alerts for narcotics. Clear, calm, never aggressive."],
  ];
  return (
    <section className="wrap py-24 lg:py-36">
      <SectionHead
        index="03"
        kicker="Why canine"
        title={
          <>
            Technology has yet to match <span className="dim">a properly trained detection team.</span>
          </>
        }
        aside={<p>X-ray needs every item through a machine. Trace detection needs every item swabbed. A dog team moves freely around the freight.</p>}
      />
      <div className="mt-16 grid gap-px bg-rule sm:grid-cols-3">
        {figures.map(([n, t, b], i) => (
          <Reveal key={t} delay={i * 110} className="bg-paper py-8 sm:px-8 sm:first:pl-0">
            <p className="text-[64px] leading-none tracking-[-0.04em] text-ink lg:text-[88px]">{n}</p>
            <p className="mono mt-6 text-ink">{t}</p>
            <p className="mt-3 text-[14.5px] leading-relaxed">{b}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Process ─────────────────────────────────────────────────────────── */
export function Process() {
  return (
    <section className="border-t border-rule bg-white">
      <div className="wrap py-24 lg:py-32">
        <SectionHead
          index="06"
          kicker="Engagement"
          title={
            <>
              A structured engagement, <span className="dim">from first call to final report.</span>
            </>
          }
        />
        <ol className="mt-16 grid gap-px bg-rule md:grid-cols-5">
          {process.map(([t, b], i) => (
            <Reveal as="li" key={t} delay={i * 90} className="relative bg-white py-8 md:px-6 md:first:pl-0">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center border border-ink text-[13px] text-ink">{i + 1}</span>
                <span className="h-px flex-1 bg-rule-2" />
              </div>
              <h3 className="mt-6 text-[20px] tracking-tight">{t}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed">{b}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── Testimonials ────────────────────────────────────────────────────── */
export function Testimonials() {
  return (
    <section id="clients" className="wrap py-24 lg:py-36">
      <SectionHead
        index="07"
        kicker="On the record"
        title={
          <>
            Trusted by the teams <span className="dim">responsible for Australia’s most sensitive days.</span>
          </>
        }
      />
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal as="figure" key={t.name} delay={i * 110} className="flex flex-col border border-rule bg-white p-8">
            <p className="mono text-[10.5px] text-signal-ink">{t.context}</p>
            <blockquote className="mt-6 flex-1 text-[18px] leading-[1.5] tracking-[-0.01em] text-ink">“{t.quote}”</blockquote>
            <figcaption className="mt-8 border-t border-rule pt-5">
              <p className="text-[15px] text-ink">{t.name}</p>
              <p className="mt-1 text-[13px] text-ink-3">{t.role}</p>
            </figcaption>
          </Reveal>
        ))}
      </div>

      {/* Media */}
      <Reveal className="mt-6 grid overflow-hidden border border-rule bg-white md:grid-cols-2">
        <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[340px]">
          <Photo slug="sbs" alt="Kris Kotsopoulos of Detector Dogs Australia interviewed on SBS World News" sizes="(min-width:768px) 50vw, 100vw" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center p-8 lg:p-12">
          <p className="mono text-ink-3">In the media</p>
          <p className="mt-5 text-[26px] leading-tight tracking-tight text-ink lg:text-[32px]">
            Called on by SBS World News and Nine News for expert comment on explosive and narcotic detection.
          </p>
          <a href={site.youtube} target="_blank" rel="noopener" className="btn btn-ghost mt-8 w-full sm:w-auto sm:self-start">
            Watch the interviews <Arrow />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ── Scope ───────────────────────────────────────────────────────────── */
export function Scope() {
  return (
    <section className="border-t border-rule bg-mist">
      <div className="wrap grid gap-10 py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="kicker mono">Scope</p>
          <h2 className="h2 mt-6">
            Detection only. <span className="dim">By design.</span>
          </h2>
        </div>
        <div className="grid gap-8 text-[15px] leading-relaxed sm:grid-cols-2 lg:col-span-7 lg:pt-3">
          <p>
            Detector Dogs Australia is a wholly Australian-owned specialist canine detection provider —{" "}
            <span className="text-ink">not a security guarding company</span>. We do not undertake activities governed by
            the Private Security Act 2004. We focus on one thing, and do it to a standard others are measured against.
          </p>
          <div>
            <p className="mono text-ink-3">Outside our scope</p>
            <ul className="mt-4 border-t border-rule-2">
              {["Searches for lost or missing pets", "Searches for currency, cash or financial instruments", "Security guarding services"].map((x) => (
                <li key={x} className="flex items-center gap-3 border-b border-rule-2 py-3 text-ink">
                  <span className="h-px w-3 bg-ink-3" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
