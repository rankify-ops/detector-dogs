import { asset } from "@/lib/basePath";

// Their DDA mark (assets-raw/cropped-DDA-1.png, trimmed) with the company name.
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className={`flex h-10 items-center px-1.5 ${light ? "bg-white" : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/img/dda-logo.png")} alt="DDA" className="h-6 w-auto" />
      </span>
      <span className={`mono whitespace-nowrap leading-[1.35] ${light ? "text-white" : "hidden min-[420px]:inline text-ink"}`} style={{ fontSize: 10.5 }}>
        Detector Dogs
        <br />
        <span className={light ? "text-white/55" : "text-ink-3"}>Australia</span>
      </span>
    </span>
  );
}
