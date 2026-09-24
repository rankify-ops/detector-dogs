import { faqs, site } from "@/content/site";
import { Reveal, SectionHead } from "./ui";

// Home page toggles + drug-searches questions, verbatim. Native <details>, so it works without JS.
export function Faq() {
  return (
    <section id="faq" className="border-t border-rule">
      <div className="wrap section-y">
        <SectionHead index="09" kicker="FAQ" title={<>Are You Ready To Take Control ?</>} />
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
        <Reveal className="border-t border-ink/80 lg:col-span-9 lg:col-start-4">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[19px] tracking-tight text-ink sm:text-[22px] [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="relative h-4 w-4 shrink-0" aria-hidden>
                  <span className="absolute left-0 top-1/2 h-px w-4 bg-ink" />
                  <span className="absolute left-1/2 top-0 h-4 w-px bg-ink transition-transform duration-300 group-open:rotate-90" />
                </span>
              </summary>
              <div className="max-w-[720px] space-y-3 pb-8 text-[15px] leading-relaxed">
                {f.a.map((line, i) =>
                  line.startsWith("## ") ? (
                    <p key={i} className="mono pt-2 text-ink">
                      {line.slice(3)}
                    </p>
                  ) : line.startsWith("- ") ? (
                    <p key={i} className="flex gap-3">
                      <span className="mt-[11px] h-px w-3 shrink-0 bg-ink-3" />
                      {line.slice(2)}
                    </p>
                  ) : (
                    <p key={i}>{line}</p>
                  ),
                )}
                {f.callNow && (
                  <a href={site.phoneHref} className="mono inline-block pt-2 text-signal-ink">
                    Call Now {site.phone}
                  </a>
                )}
              </div>
            </details>
          ))}
        </Reveal>
        </div>
      </div>
    </section>
  );
}
