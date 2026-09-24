/*
 * Typographic stand-in for the DDA mark — the original is a raster PNG with
 * the letters graded orange → black, and that grade is kept here. Swap for
 * the client's vector logo when they send one.
 */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className={`flex h-10 w-10 items-center justify-center border ${light ? "border-white/25" : "border-ink/15"}`}
      >
        <span
          className="bg-clip-text text-[15px] font-medium tracking-[-0.02em] text-transparent"
          style={{
            backgroundImage: light
              ? "linear-gradient(90deg, #e8650f 0%, #ffffff 90%)"
              : "linear-gradient(90deg, #e8650f 0%, #0b1a2c 90%)",
          }}
        >
          DDA
        </span>
      </span>
      <span className={`mono leading-[1.35] ${light ? "text-white" : "text-ink"}`} style={{ fontSize: 10.5 }}>
        Detector Dogs
        <br />
        <span className={light ? "text-white/55" : "text-ink-3"}>Australia</span>
      </span>
    </span>
  );
}
