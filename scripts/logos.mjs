/*
 * assets-raw/logos/ → public/logos/
 * Official logos, unaltered: SVGs copied as-is, rasters trimmed of empty
 * margin and saved as PNG. Sources: Wikimedia/Wikipedia file pages and each
 * organisation's own website (see README).
 *
 * Run: node scripts/logos.mjs
 */
import sharp from "sharp";
import { copyFileSync, readdirSync, mkdirSync } from "node:fs";

const RAW = "assets-raw/logos";
const OUT = "public/logos";
mkdirSync(OUT, { recursive: true });

for (const f of readdirSync(RAW)) {
  const slug = f.replace(/\.[a-z]+$/, "").replace(/-og$/, "");
  if (f.endsWith(".svg")) copyFileSync(`${RAW}/${f}`, `${OUT}/${slug}.svg`);
  else await sharp(`${RAW}/${f}`).trim({ threshold: 10 }).png().toFile(`${OUT}/${slug}.png`);
}
console.log(readdirSync(OUT).join(" "));
