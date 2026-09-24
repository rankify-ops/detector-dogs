/*
 * assets-raw/ → public/img/
 *
 * Originals pulled from detectordogs.com.au (WordPress uploads). Most are
 * small, so each photo gets widths no larger than its source and is only
 * ever shown in a slot about that size.
 *
 * Run: node scripts/images.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const RAW = "assets-raw";
const OUT = "public/img";
mkdirSync(OUT, { recursive: true });

// [source, slug, optional crop {left, top, width, height}]
const PHOTOS = [
  ["Detector-Dogs-Australia-Port-Of-Melbourne-Neville-Williams.jpg", "port"],
  ["Detector-Dogs-MCG-search.jpg", "mcg"],
  ["stadium-detection.jpg", "stadium"],
  ["garage_detection.jpg", "garage"],
  ["bedroom_detection.jpg", "bedroom"],
  ["plane-detection-search.jpg", "aviation"],
  ["wharf_detection-bw-oeha466pehdxt21bkb6ecfjyxw2wmzd8vcs2nj3jq8.jpg", "wharf"],
  ["Detector-Dogs-Australia-Malinois-bw.jpg", "malinois"],
  ["DDA-Melbourne-Ports-Kris-Kotsopoulos-oea505wj60o8pnybltbbeuigsr9sg73euqnhi5w4mq.jpg", "handler"],
  ["SBS-Interview-_-Kris-Kotsopolous.jpg", "sbs", { left: 0, top: 110, width: 1700, height: 720 }],
];

for (const [src, slug, crop] of PHOTOS) {
  const meta = await sharp(`${RAW}/${src}`).metadata();
  const srcW = crop ? crop.width : meta.width;
  for (const w of [640, 1280]) {
    let img = sharp(`${RAW}/${src}`).rotate();
    if (crop) img = img.extract(crop);
    await img
      .resize({ width: Math.min(w, srcW), withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(`${OUT}/${slug}-${w}.webp`);
  }
}

// OG card: the port photo with a plain type panel.
await sharp(`${RAW}/Detector-Dogs-Australia-Port-Of-Melbourne-Neville-Williams.jpg`)
  .resize(1200, 630, { fit: "cover" })
  .jpeg({ quality: 82 })
  .toFile(`${OUT}/og.jpg`);

// Favicons from the DDA square.
for (const s of [32, 180, 192]) {
  await sharp(`${RAW}/cropped-DDA-1.png`).resize(s, s).png().toFile(`${OUT}/icon-${s}.png`);
}
console.log("done");
