"use client";

import { useState } from "react";
import { videos } from "@/content/site";
import { Photo, Reveal } from "./ui";

/*
 * Click-to-play: each card is a poster until pressed, then swaps in the
 * YouTube player (privacy-enhanced domain, autoplay). Nothing from YouTube
 * loads until someone asks for it.
 */
export function Videos() {
  const [playing, setPlaying] = useState<string | null>(null);
  return (
    <section id="videos" className="border-t border-rule">
      <div className="wrap py-24 lg:py-32">
        <div className="flex items-baseline gap-6 border-t border-ink/80 pt-6">
          <span className="mono text-signal-ink">02</span>
          <h2 className="mono text-ink-3">Videos</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {videos.map((v, i) => (
            <Reveal
              key={v.id}
              delay={i * 110}
              className="flex flex-col border border-rule bg-white"
            >
              <div className="relative aspect-video overflow-hidden bg-ink">
                {playing === v.id ? (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(v.id)}
                    className="group absolute inset-0 h-full w-full"
                    aria-label={`Play video: ${v.title}`}
                  >
                    <Photo
                      slug={v.poster}
                      alt=""
                      sizes="(min-width:768px) 420px, 100vw"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-0 bg-ink/25 transition-colors duration-500 group-hover:bg-ink/10" />
                    <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition-transform duration-500 group-hover:scale-110">
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        aria-hidden
                      >
                        <path d="M3 1.5v17L17 10z" fill="#0b1a2c" />
                      </svg>
                    </span>
                  </button>
                )}
              </div>
              <p className="p-6 text-[16px] leading-snug tracking-tight text-ink">
                {v.title}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
