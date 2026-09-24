import { site, stats } from "@/content/site";
import { Arrow, Brackets, Photo, Reveal } from "./ui";

// Copy: about-us ("Detector Dogs Australia - Est 2000" and its intro paragraph).
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden />

      <div className="wrap relative pb-14 pt-10 sm:pt-16 lg:pb-28 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p className="kicker mono">Detector Dogs Australia · Est 2000</p>
            <h1 className="display mt-7">
              Australia’s longest-serving
              <span className="dim"> Canine Detection Service.</span>
            </h1>
            <p className="mt-8 max-w-[540px] text-[17px] leading-relaxed text-ink-2">
              From narcotics and prohibited substances to specialist scent detection, our teams deliver accurate,
              discreet, and highly reliable detection outcomes for government, corporate, and private clients.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn btn-primary w-full sm:w-auto">
                Enquire Now <Arrow />
              </a>
              <a href={site.phoneHref} className="btn btn-ghost w-full sm:w-auto">
                Call Now {site.phone} <Arrow />
              </a>
            </div>
            <p className="mono mt-6 text-[10.5px] text-ink-3">All enquiries handled confidentially</p>
          </div>

          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[3/2] overflow-hidden bg-mist">
              <Photo
                slug="port"
                alt="Detector dog handler and detection dog screening a truck at a wharf"
                sizes="(min-width: 1024px) 620px, 100vw"
                className="h-full w-full object-cover [filter:saturate(0.6)_contrast(1.05)]"
                priority
              />
              <div className="scan" aria-hidden />
              <div className="lock" style={{ left: "8%", top: "66%", width: "23%", height: "32%" }} aria-hidden>
                <span className="mono absolute -top-6 left-0 whitespace-nowrap bg-signal px-1.5 py-0.5 text-[9.5px] text-ink">
                  K9 · Search active
                </span>
              </div>
              <Brackets light />
            </div>
          </Reveal>
        </div>

        <dl className="mt-16 grid grid-cols-2 border-t border-ink/80 lg:mt-24 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className={`border-rule py-6 pr-4 ${i % 2 ? "border-l pl-5" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${
                i === 2 ? "lg:border-l lg:pl-5" : ""
              }`}
            >
              <dt className="mono text-ink-3">{s.label}</dt>
              <dd className="mt-5 text-[36px] leading-none tracking-[-0.03em] text-ink sm:text-[48px]">{s.value}</dd>
              <dd className="mt-3 max-w-[260px] text-[13.5px] leading-snug">{s.note}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
