import { site, stats } from "@/content/site";
import { Arrow, Brackets, Photo, Reveal } from "./ui";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden />

      <div className="wrap relative pb-14 pt-10 sm:pt-16 lg:pb-16 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6 xl:col-span-6">
            <p className="kicker mono">Est. 2000 · Canine detection specialists</p>
            <h1 className="display mt-7">
              Canine detection,
              <span className="dim"> held to an international standard.</span>
            </h1>
            <p className="mt-8 max-w-[520px] text-[17px] leading-relaxed text-ink-2">
              Explosive and narcotic detection teams for government, industry and Australia’s largest venues.
              Trained to U.S. detection-dog standards as a minimum, and deployed nationwide at short notice.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn btn-primary w-full sm:w-auto">
                Request a deployment <Arrow />
              </a>
              <a href={site.phoneHref} className="btn btn-ghost w-full sm:w-auto">
                Call {site.phone}
              </a>
            </div>
            <p className="mono mt-6 text-[10.5px] text-ink-3">All enquiries handled confidentially</p>
          </div>

          <Reveal className="lg:col-span-6">
            <figure className="relative">
              <div className="relative aspect-[3/2] overflow-hidden bg-mist">
                <Photo
                  slug="port"
                  alt="Detector Dogs Australia handler and explosive detection dog screening a truck at the Port of Melbourne"
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
                <div className="mono absolute left-5 top-5 flex items-center gap-2 bg-white/85 px-2.5 py-1.5 text-[10px] text-ink backdrop-blur">
                  <span className="blink h-1.5 w-1.5 rounded-full bg-signal" />
                  EDD · Vehicle screening
                </div>
              </div>
              <figcaption className="mono mt-3 flex justify-between text-[10px] text-ink-3">
                <span>Port of Melbourne</span>
                <span>37.84° S · 144.93° E</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Credentials strip */}
        <dl className="mt-16 grid grid-cols-2 border-t border-ink/80 lg:mt-24 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className={`border-rule py-6 pr-4 ${i % 2 ? "border-l pl-5" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${
                i === 2 ? "lg:border-l lg:pl-5" : ""
              }`}
            >
              <dt className="mono flex justify-between text-ink-3">
                <span>{s.label}</span>
                <span className="text-signal-ink">0{i + 1}</span>
              </dt>
              <dd className="mt-5 text-[40px] leading-none tracking-[-0.03em] text-ink sm:text-[52px]">{s.value}</dd>
              <dd className="mt-3 max-w-[260px] text-[13.5px] leading-snug">{s.note}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
