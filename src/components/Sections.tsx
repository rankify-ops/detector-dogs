/*
 * Every heading and sentence below is the client's own wording from
 * detectordogs.com.au — the page it comes from is noted on each section.
 */
import { keepSafe, services, process, standards, testimonials } from "@/content/site";
import { asset } from "@/lib/basePath";
import { Brackets, Photo, Reveal, SectionHead } from "./ui";

/* ── Who We Keep Safe (who-we-keep-safe) — logo carousel ───────────── */
export function KeepSafe() {
  // Two copies back to back; the track slides exactly one copy (-50%) and loops.
  const track = [...keepSafe, ...keepSafe];
  return (
    <section aria-labelledby="keep-safe" className="border-y border-rule bg-white">
      <div className="wrap flex flex-col justify-between gap-3 pt-12 sm:flex-row sm:items-end">
        <h2 id="keep-safe" className="mono text-ink">Who We Keep Safe</h2>
        <p className="mono text-[10.5px] text-ink-3">Thank You For Choosing Detector Dogs Australia</p>
      </div>
      <div className="mt-8 overflow-hidden border-t border-rule [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        <ul className="marquee logo-marquee">
          {track.map((k, i) => (
            <li
              key={i}
              aria-hidden={i >= keepSafe.length || undefined}
              className="flex h-[120px] w-[180px] shrink-0 items-center justify-center border-r border-rule px-6 sm:h-[140px] sm:w-[220px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(`/logos/${k.logo}`)}
                alt={i < keepSafe.length ? k.name : ""}
                title={k.name}
                className="max-h-[56px] w-auto max-w-[140px] object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Our Services (services + drug-searches) ─────────────────────────── */
export function Services() {
  return (
    <section id="services" className="wrap py-24 lg:py-36">
      <SectionHead
        index="01"
        kicker="Our Services"
        title={
          <>
            We do not compete on volume. <span className="dim">We compete on precision, reliability, and outcomes.</span>
          </>
        }
      />
      <ul className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((c, i) => (
          <Reveal as="li" key={c.title} delay={(i % 3) * 100} className="group">
            <div className="relative aspect-[4/3] overflow-hidden bg-mist">
              <Photo slug={c.img} alt={c.alt} sizes="(min-width:1024px) 400px, (min-width:640px) 50vw, 100vw" className="photo h-full w-full object-cover" />
              <Brackets light />
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

/* ── Industry Standards and Beyond (services / our-dogs) ─────────────── */
export function Standards() {
  return (
    <section id="standards" className="border-t border-rule bg-white">
      <div className="wrap py-24 lg:py-36">
        <SectionHead index="02" kicker="Industry Standards" title={<>Industry Standards <span className="dim">and Beyond</span></>} />
        <div className="mt-16 grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <div className="relative aspect-[4/5] overflow-hidden bg-mist">
              <Photo slug="malinois" alt="Belgian Malinois" sizes="(min-width:1024px) 300px, 100vw" className="h-full w-full object-cover grayscale" />
              <Brackets light />
            </div>
            <p className="mono mt-4 text-[10.5px] leading-relaxed text-ink-3">
              Our selection, training, and certification standards meet international NPCA requirements under certifying
              official number PD 038
            </p>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <p className="max-w-[680px] text-[19px] leading-relaxed text-ink">
                American detection dog standards have become the de facto international benchmark. In the absence of
                formal national standards for explosive detection dogs in Australia, Detector Dogs Australia adopts U.S.
                standards as a minimum requirement to maintain international competency.
              </p>
            </Reveal>
            <h3 className="mono mt-14 text-ink-3">What You Should Expect From a Professional Provider</h3>
            <ol className="mt-6 grid border-t border-rule sm:grid-cols-2">
              {standards.map(([t, b], i) => (
                <Reveal
                  as="li"
                  key={t}
                  delay={(i % 2) * 90}
                  className={`border-b border-rule py-7 ${i % 2 ? "sm:border-l sm:pl-8" : "sm:pr-8"}`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="mono text-signal-ink">0{i + 1}</span>
                    <h4 className="text-[19px] tracking-tight">{t}</h4>
                  </div>
                  <p className="mt-3 pl-[34px] text-[14.5px] leading-relaxed">{b}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Technology vs dogs (services — "What You Should Expect…" + "How Sniffer Dogs Are Trained") ── */
export function WhyCanine() {
  const figures = [
    ["ppt", "Parts-per-trillion", "Detection dogs are capable of identifying odour concentrations at parts-per-trillion levels."],
    ["20×", "More than twenty times the speed", "Within cargo and maritime environments, industry observations show that detection dogs can screen freight at more than twenty times the speed of mechanical systems due to their mobility and adaptability."],
    ["2", "Two primary alert styles", "Active alerts, commonly used for narcotics detection, where the dog may scratch or paw near the source of the odour. Passive alerts, used in sensitive environments such as explosives detection, where the dog indicates the scent by sitting, staring, or freezing at the location to avoid disturbing the area."],
  ];
  return (
    <section className="wrap py-24 lg:py-36">
      <SectionHead
        index="03"
        kicker="Our Dogs"
        title={
          <>
            Technology has yet to match <span className="dim">the speed and efficiency of a properly trained detection dog team.</span>
          </>
        }
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

/* ── How We Work With Clients (about-us) ─────────────────────────────── */
export function Process() {
  return (
    <section className="border-t border-rule bg-white">
      <div className="wrap py-24 lg:py-32">
        <SectionHead
          index="06"
          kicker="How We Work With Clients"
          title={
            <>
              We build long-term partnerships <span className="dim">grounded in transparency, integrity, and performance.</span>
            </>
          }
        />
        <ol className="mt-16 grid gap-px bg-rule md:grid-cols-5">
          {process.map((t, i) => (
            <Reveal as="li" key={t} delay={i * 90} className="bg-white py-8 md:px-6 md:first:pl-0">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center border border-ink text-[13px] text-ink">{i + 1}</span>
                <span className="h-px flex-1 bg-rule-2" />
              </div>
              <h3 className="mt-6 text-[19px] leading-snug tracking-tight">{t}</h3>
            </Reveal>
          ))}
        </ol>
        <p className="mt-10 max-w-[680px] text-[15px] leading-relaxed">
          We invest upfront in personnel, equipment, and technology to ensure we deliver contract outcomes without
          compromise.
        </p>
      </div>
    </section>
  );
}

/* ── Testimonials (read-testimonials) + media (home, services) ───────── */
export function Testimonials() {
  return (
    <section id="testimonials" className="wrap py-24 lg:py-36">
      <SectionHead index="07" kicker="Testimonials" title={<>Read some of our <span className="dim">testimonials.</span></>} />
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal as="figure" key={t.name} delay={i * 110} className="flex flex-col border border-rule bg-white p-8">
            <p className="mono text-[10.5px] text-signal-ink">{t.heading}</p>
            <blockquote className="mt-6 flex-1 text-[17px] leading-[1.55] tracking-[-0.01em] text-ink">“{t.quote}”</blockquote>
            <figcaption className="mt-8 border-t border-rule pt-5">
              <p className="text-[15px] text-ink">{t.name}</p>
              <p className="mt-1 text-[13px] text-ink-3">{t.role}</p>
            </figcaption>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6 grid overflow-hidden border border-rule bg-white md:grid-cols-2">
        <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[300px]">
          <Photo slug="sbs" alt="SBS World News Interview" sizes="(min-width:768px) 50vw, 100vw" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center gap-6 p-8 lg:p-12">
          <p className="text-[26px] leading-tight tracking-tight text-ink lg:text-[30px]">SBS World News Interview</p>
          <p className="text-[18px] leading-snug text-ink-2">Ch 9 News Interview with Kris Kotsopolous – Explosives Detection</p>
        </div>
      </Reveal>
    </section>
  );
}

/* ── What We Do — and What We Don’t Do (home, services, about-us) ────── */
export function Scope() {
  return (
    <section className="border-t border-rule bg-mist">
      <div className="wrap grid gap-10 py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="kicker mono">What We Can’t Do</p>
          <h2 className="h2 mt-6">
            What We Do — <span className="dim">and What We Don’t Do</span>
          </h2>
        </div>
        <div className="grid gap-8 text-[15px] leading-relaxed sm:grid-cols-2 lg:col-span-7 lg:pt-3">
          <div className="space-y-4">
            <p>
              Detector Dogs Australia is a wholly Australian-owned specialist canine provider delivering advanced scent
              detection search capabilities through highly trained detection teams. We operate strictly within the scope
              of detection services and do not undertake activities governed by the Private Security Act 2004.
            </p>
            <p className="text-ink">
              Important: Detector Dogs Australia is a specialised canine detection service and not a security guarding
              company.
            </p>
          </div>
          <div>
            <p className="mono text-ink-3">We Do Not Provide:</p>
            <ul className="mt-4 border-t border-rule-2">
              {["Searches for lost or missing pets", "Searches for currency, cash, or financial instruments"].map((x) => (
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
