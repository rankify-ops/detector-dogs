# Detector Dogs Australia — home page rebuild

A concept rebuild of the [detectordogs.com.au](https://detectordogs.com.au/) home page (WordPress /
Elementor today). Rankify stack: Next.js App Router + Tailwind v4, **static export** to GitHub Pages.

```bash
npm install
npm run dev -- --port 3063
node scripts/images.mjs      # re-generate public/img from assets-raw/
node scripts/map.mjs         # re-generate the dot map (src/content/map.ts)
```

## Direction

Light and institutional — the register of a defence contractor, not a security flyer. Paper ground,
deep navy ink, hairline rules, Inter 400 display with Fragment Mono labels. DDA orange (from their
logo gradient) is a signal colour only: index numerals, status dots, the hero target lock. Primary
buttons are ink. Only the footer is dark.

Sections: utility strip · frosted header · hero (port photo with scan line + target lock) ·
credentials strip · "Deployed at" marquee · 6 capabilities · standards (U.S. standard as minimum,
NPCA PD 038, six professional standards) · why canine · odour library (tabbed) · coverage dot map ·
engagement process · testimonials + media · scope ("not a security guarding company") · enquiry form.
Home page only — every nav link is an in-page anchor.

## Content

Every claim is from their own site (home, about-us, services, our-dogs, drug-searches,
read-testimonials, who-we-keep-safe), rewritten for length — see `src/content/site.ts`. Nothing is
invented. Raw scrape is in `_source/` (git-ignored).

## Needs the client

- **Vector logo.** The header uses a typographic stand-in (`src/components/Logo.tsx`); theirs is a raster PNG.
- **Better photography.** Their images are small (most ≤ 1000px). The hero photo is 984px wide and is
  only shown at that size. Anything high-res of teams at work would lift the page most.
- **Confirm the "Deployed at" list** — taken from their "Who we keep safe" gallery. Celebrity/tour
  photos there were deliberately not used (not theirs to license).
- **Phone number:** the site uses 1300 360 171 everywhere except the About page, which says 1300 361 171.
- **Odour list corrections:** "Potassium Chloride" → potassium chlorate, "Ammonia-Nitrate" → ammonium
  nitrate. Worth a quick OK.
- **Web3Forms key** → `NEXT_PUBLIC_WEB3FORMS_KEY` in `deploy.yml`. Until then the form opens a
  pre-filled email to info@.
- **Domain cutover:** delete the `NEXT_PUBLIC_BASE_PATH` line in `deploy.yml` AND add `public/CNAME`,
  together.
