"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Arrow } from "./ui";

/*
 * Mobile-only floating Enquire / Call bar. Slides up once the hero has
 * scrolled away and steps aside while the contact section is on screen, so
 * there is never a second Enquire button next to the form.
 */
export function MobileBar() {
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const contact = document.getElementById("contact");
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) setPastHero(!e.isIntersecting);
        if (e.target === contact) setAtContact(e.isIntersecting);
      }
    });
    if (hero) io.observe(hero);
    if (contact) io.observe(contact);
    return () => io.disconnect();
  }, []);

  const show = pastHero && !atContact;

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-30 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:hidden ${
        show ? "translate-y-0" : "pointer-events-none translate-y-[120%]"
      }`}
    >
      <div className="glass grid grid-cols-2 gap-2 border border-ink/10 p-2 shadow-[0_10px_40px_rgba(11,26,44,0.16)]">
        <a href="#contact" tabIndex={show ? 0 : -1} className="btn btn-primary h-12 gap-2 px-3 text-[11px] tracking-[0.1em]">
          Enquire Now <Arrow />
        </a>
        <a href={site.phoneHref} tabIndex={show ? 0 : -1} className="btn btn-ghost h-12 gap-2 px-3 text-[11px] tracking-[0.1em]">
          Call Now <Arrow />
        </a>
      </div>
    </div>
  );
}
