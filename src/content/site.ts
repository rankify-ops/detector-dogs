/*
 * ALL COPY IS THE CLIENT'S OWN WORDS, taken from detectordogs.com.au
 * (home, about-us, services, our-dogs, drug-searches, read-testimonials,
 * who-we-keep-safe). Do not reword, "correct" or add to it — spelling and
 * odour names are exactly as they publish them. Page source for each block
 * is noted alongside it.
 */

export const site = {
  name: "Detector Dogs Australia",
  url: "https://detectordogs.com.au",
  phone: "1300 360 171",
  phoneHref: "tel:1300360171",
  emergency: "0418 348 804",
  emergencyHref: "tel:+61418348804",
  email: "info@detectordogs.com.au",
  postal: "PO Box 372, Whittlesea VIC 3757",
  facebook: "https://www.facebook.com/detectordogsaustralia/",
  linkedin: "https://www.linkedin.com/in/detector-dogs-australia-a28072a8/",
  youtube: "https://www.youtube.com/user/TheVonforell",
  training: "https://www.vonforellprecisiontraining.com/",
  // Footer, home page.
  hours: [
    ["Monday-Friday", "9 am – 5 pm"],
    ["Saturday", "9 am – 4 pm"],
    ["Sunday", "9 am – 4 pm"],
  ],
};

export const nav = [
  ["Services", "#services"],
  ["Standards", "#standards"],
  ["Odours", "#odours"],
  ["Locations", "#coverage"],
  ["Testimonials", "#testimonials"],
] as const;

// about-us + services.
export const stats = [
  { value: "Est 2000", label: "Established", note: "Australia’s longest-serving Canine Detection Service." },
  { value: "80+", label: "Years", note: "Years of combined leadership experience in working service dogs." },
  { value: "U.S.", label: "Standards", note: "Detector Dogs Australia adopts U.S. standards as a minimum requirement." },
  { value: "PD 038", label: "NPCA", note: "International NPCA requirements under certifying official number PD 038." },
];

// who-we-keep-safe gallery captions / file names, plus Patrick (read-testimonials).
// Official logos in public/logos (scripts/logos.mjs). NFL added at Tom's request.
export const keepSafe: { name: string; logo: string }[] = [
  { name: "MCG", logo: "mcg.png" },
  { name: "Australian Open", logo: "australian-open.svg" },
  { name: "Rod Laver Arena", logo: "rod-laver-arena.svg" },
  { name: "Marvel Stadium", logo: "marvel-stadium.svg" },
  { name: "Patrick Stevedoring", logo: "patrick.png" },
  { name: "Chadstone Shopping Centre", logo: "chadstone.svg" },
  { name: "Westfield Shopping Centre", logo: "westfield.png" },
  { name: "Royal Melbourne Hospital", logo: "rmh.svg" },
  { name: "St Vincents Hospital", logo: "svhm.png" },
  { name: "Austin Hospital Melbourne", logo: "austin.png" },
  { name: "Northern Hospital Melbourne", logo: "northern-health.svg" },
  { name: "Forensicare", logo: "forensicare.png" },
  { name: "Commonwealth Games 2006", logo: "commonwealth-games-2006.svg" },
  { name: "Falls Music Festival", logo: "falls.png" },
  { name: "Vicroads", logo: "vicroads.png" },
  { name: "Bayer", logo: "bayer.svg" },
  { name: "CISCO", logo: "cisco.svg" },
  { name: "Exxon Mobil", logo: "exxonmobil.svg" },
  { name: "Bosch", logo: "bosch.svg" },
  { name: "UFC", logo: "ufc.svg" },
  { name: "Wrestlemania", logo: "wrestlemania.svg" },
  { name: "Moonee Valley Racecourse", logo: "moonee-valley.png" },
  { name: "Football Grand Final Parade", logo: "afl.png" },
  { name: "NFL", logo: "nfl.svg" },
];

// services (tab panels) + drug-searches. Titles and text are theirs.
export const services = [
  {
    title: "Canine Detection Unit",
    body: "High-profile event organisers, manufacturing facilities, transport operators, service providers, airlines, and educational institutions regularly seek our expertise in detection services.",
    img: "stadium",
    alt: "Two handlers with detection dogs walking into a stadium",
  },
  {
    title: "Emergency Response Teams",
    body: "Our teams are highly adaptable, able to respond immediately to changing circumstances, and capable of designing customised solutions to meet the unique challenges your organisation may face.",
    img: "mcg",
    alt: "Handler with a detection dog in empty stadium seating",
  },
  {
    title: "Hospitals – Mental Health",
    body: "Many hospitals are also taking steps to create safer environments for staff and patients by engaging the services of Detector Dogs Australia.",
    img: "wharf",
    alt: "K9 handler in a hi-vis vest with a detection dog",
  },
  {
    title: "Programs For Schools",
    body: "Detector Dogs Australia is proud to provide services to both public and private school campuses across Australia.",
    img: "schools",
    alt: "Students with backpacks walking into a school",
  },
  {
    title: "Private Home Searches",
    body: "Discreet home drug searches using trained detection dogs. Peace of mind for families across Australia. Confidential and respectful service.",
    img: "bedroom",
    alt: "Detection dog checking a backpack in a bedroom",
  },
  {
    title: "Mining / Transport",
    body: "Our canine teams are trained to operate in high-risk and industrial environments, providing fast, accurate detection that integrates smoothly into your safety processes.",
    img: "aviation",
    alt: "Handler and detection dog searching beside a private jet",
  },
];

// services — "What You Should Expect From a Professional Provider".
export const standards = [
  ["Single-purpose training", "Dogs should be trained for one detection discipline only (e.g., explosives or narcotics). Cross-training can dilute focus and reduce clarity of alerts, increasing the risk of handler misinterpretation."],
  ["Comprehensive explosive imprinting", "Dogs should be trained on all major families of commercial and military explosives, as well as homemade explosive materials (HMEs). Recent global threat patterns demonstrate increasing use of HMEs due to accessibility and concealment advantages."],
  ["Licensed explosive access", "A professional provider must be appropriately licensed to procure, store, and handle live training explosives for realistic conditioning and testing."],
  ["Daily sustainment training", "Structured, ongoing maintenance training is essential to preserve peak detection accuracy across the dog’s working career."],
  ["Independent validation", "Providers should undergo external testing and certification to confirm operational reliability and standards compliance."],
  ["Robust record systems", "Professional providers maintain secure documentation systems for audit trails, transfer certifications, and training records, often supported by video verification."],
];

// services — exactly as listed, same order, same spelling.
export const odours = {
  explosives: [
    "Ammonia- Gel", "Ammonia-Nitrate", "Hexogen (RDX)", "Potassium Chloride", "Potassium Nitrate", "Sodium Chlorate",
    "Nitro-Glycerine", "Nitro-Cellulose", "TNT", "All Dynamites", "Tetryl", "Water Gels",
    "Octogen (HMX)", "Smokeless Powder", "Black Powder", "Gun Powder", "Chlorates", "PETN = Nitropenta",
    "TATP", "HMTD", "Smell The Shot", "Trotyl",
  ],
  narcotics: [
    "Cocaine ( Koka, Pflanza, Peru)", "Morphine", "Crack (Cocaine + Sodium Hydrogen Carbonate Backpulver)", "Opium",
    "Heroin", "LSD", "Amphetamines", "Psilocybin Mushrooms",
    "Ecstasy (Methamphetamine)", "Liquid Ecstasy GHB", "Thai-Pillen (Methamphetamine)", "Hemp Cannabis Indica, Sativa, Ruderalis",
    "Marijuana", "Cannabis", "Hash", "Speedball",
  ],
};

// about-us — "How We Work With Clients".
export const process = [
  "Detailed consultation and needs analysis",
  "Operational planning and risk assessment",
  "Deployment of specialised detection teams",
  "Continuous performance benchmarking",
  "Reporting and improvement cycles",
];

// read-testimonials — exact sentences, names and titles as published.
export const testimonials = [
  {
    heading: "Patrick Stevedoring – Queen Mary II",
    quote:
      "They worked tirelessly on the day, checking each and every vehicle entering the facility. The Office of Transport Security were on site on two separate instances and commented on both occasions how pleased they were with our adoption of this additional security measure and how well it was implemented on the day.",
    name: "Paul Cudmore",
    role: "Business Unit Manager, Patrick Stevedoring – Melbourne",
  },
  {
    heading: "Westfield Shopping Centre",
    quote:
      "The ‘K-9 Detection Team’ you supplied significantly enhanced security arrangements pertaining to both physical assets and personnel at Westfield CBD during an exceptionally busy and potentially disruptive period.",
    name: "Trent Morrissey",
    role: "Security Manager, Westfield CBD Properties",
  },
  {
    heading: "SNP Security",
    quote: "The whole service was conducted flawlessly and the team worked well with the SNP staff and management on site.",
    name: "Ken Jenkins",
    role: "Account Manager – Protective Services, SNP Security",
  },
];
