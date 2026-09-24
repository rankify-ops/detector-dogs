"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Arrow, Reveal } from "./ui";

/*
 * Posts to Web3Forms once the client's access key is set as the
 * NEXT_PUBLIC_WEB3FORMS_KEY build env (add it to deploy.yml too). Until then
 * the form opens a pre-filled email to info@ instead, so it is never a dead end.
 */
const KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

// Service names as titled on their services + drug-searches pages.
const SERVICES = [
  "Canine Detection Unit",
  "Emergency Response Teams",
  "Hospitals – Mental Health",
  "Programs For Schools",
  "Private Home Searches",
  "Mining / Transport",
  "Workplace Integrity",
  "Canine Training",
  "Detector Dog Sales",
];

export function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;

    if (!KEY) {
      const body = Object.entries(data)
        .filter(([, v]) => v)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Enquiry — ${data.service || "General"}`,
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setState("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: KEY, subject: `Enquiry — ${data.service}`, ...data }),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contact" className="border-t border-rule bg-white">
      <div className="wrap section-y grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="mono flex justify-between text-ink-3 lg:block">
            <span className="text-signal-ink">10</span>
            <span className="lg:ml-6">Contact Us</span>
          </p>
          <Reveal>
            <h2 className="h2 mt-8">
              How Fast Can You Deploy ? <span className="dim">Call Us Today for Immediate Assistance</span>
            </h2>
          </Reveal>
          <p className="mt-8 max-w-[440px] text-[16px] leading-relaxed">
            A quick phone call is the fastest way to discuss your requirements and determine the best solution. Our expert
            detection teams can tailor a response to meet your needs immediately, ensuring fast, reliable, and
            professional service anywhere in Australia.
          </p>

          <dl className="mt-12 border-t border-ink/80">
            {[
              ["Call Now", site.phone, site.phoneHref],
              ["Emergency", site.emergency, site.emergencyHref],
              ["Email", site.email, `mailto:${site.email}`],
            ].map(([k, v, href]) => (
              <div key={k} className="flex items-baseline justify-between gap-4 border-b border-rule py-5">
                <dt className="mono text-ink-3">{k}</dt>
                <dd>
                  <a href={href} className="text-[18px] tracking-tight text-ink transition-colors hover:text-signal-ink sm:text-[22px]">
                    {v}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 grid grid-cols-1 gap-2 text-[14px] sm:grid-cols-2">
            {site.hours.map(([d, h]) => (
              <p key={d} className="flex justify-between gap-4 sm:block">
                <span className="mono mr-3 text-[10.5px] text-ink-3">{d}</span>
                <span className="text-ink">{h}</span>
              </p>
            ))}
          </div>
        </div>

        <Reveal className="lg:col-span-6 lg:col-start-7">
          {state === "sent" ? (
            <div className="border border-rule bg-paper p-10">
              <p className="text-[28px] leading-tight tracking-tight text-ink">Thank you. Your enquiry has been sent.</p>
              <p className="mt-4 text-[15px]">Emergency: {site.emergency}</p>
            </div>
          ) : (
            <form onSubmit={submit} className="border border-rule bg-paper p-6 sm:p-10">
              <div className="flex items-center justify-between border-b border-rule pb-5">
                <p className="mono text-ink">Ask a question</p>
                <p className="mono flex items-center gap-2 text-[10.5px] text-ink-3">
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden>
                    <rect x="0.6" y="5" width="8.8" height="6.4" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M2.5 5V3.5a2.5 2.5 0 015 0V5" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  All enquiries handled confidentially
                </p>
              </div>
              <div className="mt-4 grid gap-x-8 sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Name</span>
                  <input name="name" required placeholder="Full name" autoComplete="name" className="field" />
                </label>
                <label className="block">
                  <span className="sr-only">Organisation</span>
                  <input name="organisation" placeholder="Organisation / agency" autoComplete="organization" className="field" />
                </label>
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input name="email" type="email" required placeholder="Email" autoComplete="email" className="field" />
                </label>
                <label className="block">
                  <span className="sr-only">Phone</span>
                  <input name="phone" type="tel" placeholder="Phone" autoComplete="tel" className="field" />
                </label>
                <label className="relative block">
                  <span className="sr-only">Service</span>
                  <select name="service" required defaultValue="" className="field pr-6">
                    <option value="" disabled>
                      Service required
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  <svg className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-ink-3" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </label>
                <label className="block">
                  <span className="sr-only">Location</span>
                  <input name="location" placeholder="Location / site" className="field" />
                </label>
              </div>
              <label className="block">
                <span className="sr-only">Details</span>
                <textarea name="details" rows={4} placeholder="Your question" className="field resize-none" />
              </label>
              <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <span />
                <button type="submit" disabled={state === "sending"} className="btn btn-primary w-full sm:w-auto">
                  {state === "sending" ? "Sending…" : "Enquire Now"} <Arrow />
                </button>
              </div>
              {state === "error" && (
                <p className="mt-4 text-[14px] text-signal-ink">
                  The form could not be sent. Call Now {site.phone} or email {site.email}.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
