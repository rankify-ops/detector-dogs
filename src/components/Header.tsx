"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { Logo } from "./Logo";
import { Arrow } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <>
      {/* Utility strip — scrolls away; the main bar sticks. */}
      <div className="hidden border-b border-rule bg-paper lg:block">
        <div className="wrap mono flex h-9 items-center justify-between text-[10.5px] text-ink-3">
          <span className="flex items-center gap-6">
            <span>Community</span>
            <span className="h-3 w-px bg-rule-2" />
            <span>Business</span>
            <span className="h-3 w-px bg-rule-2" />
            <span>Government</span>
          </span>
          <span className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="blink h-1.5 w-1.5 rounded-full bg-signal" />
              Rapid-Response Detection Teams Nationwide
            </span>
            <a href={site.emergencyHref} className="text-ink hover:text-signal-ink">
              Emergency {site.emergency}
            </a>
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
          scrolled || open ? "glass border-rule" : "border-transparent bg-paper"
        }`}
      >
        <div className="wrap flex h-[72px] items-center justify-between gap-6">
          <a href="#top" aria-label="Detector Dogs Australia — home" onClick={() => setOpen(false)}>
            <Logo />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="mono text-ink-2 transition-colors hover:text-ink">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={site.phoneHref} className="mono hidden text-ink md:block xl:mr-3">
              {site.phone}
            </a>
            <a href="#contact" className="btn btn-primary h-11 gap-2.5 px-3 text-[10.5px] tracking-[0.1em] sm:gap-3 sm:px-[22px] sm:text-[12px] sm:tracking-[0.14em]">
              Enquire Now <Arrow />
            </a>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center border border-rule-2 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 h-px w-5 bg-ink transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-1.5 h-px w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 h-px w-5 bg-ink transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed inset-x-0 bottom-0 top-[73px] bg-paper transition-opacity duration-300 lg:hidden ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <nav aria-label="Mobile" className="wrap flex h-full flex-col pb-8 pt-4">
            {nav.map(([label, href], i) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-rule py-5 text-[28px] tracking-tight text-ink"
              >
                <span className="mono text-signal-ink">0{i + 1}</span>
                {label}
              </a>
            ))}
            <div className="mt-auto grid gap-3">
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Enquire Now <Arrow />
              </a>
              <a href={site.phoneHref} className="btn btn-ghost w-full">
                Call Now {site.phone} <Arrow />
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
