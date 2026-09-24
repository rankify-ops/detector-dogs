"use client";

import { useEffect, useRef } from "react";
import { asset } from "@/lib/basePath";

/** Fades a block up once it scrolls into view. */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "figure";
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

/** Photo from public/img, 640 + 1280 webp pair made by scripts/images.mjs. */
export function Photo({
  slug,
  alt,
  sizes = "100vw",
  className = "",
  priority = false,
}: {
  slug: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(`/img/${slug}-1280.webp`)}
      srcSet={`${asset(`/img/${slug}-640.webp`)} 640w, ${asset(`/img/${slug}-1280.webp`)} 1280w`}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={className}
    />
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className={`arrow ${className}`} aria-hidden>
      <path d="M0 5h12.5M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Brackets({ light = false }: { light?: boolean }) {
  return (
    <span className={`brackets ${light ? "light" : ""}`} aria-hidden>
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

export function SectionHead({
  index,
  kicker,
  title,
  aside,
}: {
  index: string;
  kicker: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <div className="grid gap-8 border-t border-ink/80 pt-6 lg:grid-cols-12">
      <div className="mono flex items-center justify-between text-ink-3 lg:col-span-3 lg:block">
        <span className="text-signal-ink">{index}</span>
        <span className="lg:mt-3 lg:block">{kicker}</span>
      </div>
      <Reveal className={aside ? "lg:col-span-6" : "lg:col-span-8"}>
        <h2 className="h2">{title}</h2>
      </Reveal>
      {aside && <Reveal className="text-[15px] leading-relaxed lg:col-span-3 lg:pt-2" delay={120}>{aside}</Reveal>}
    </div>
  );
}
