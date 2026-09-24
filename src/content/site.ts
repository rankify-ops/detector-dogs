/*
 * Every claim on the page comes from detectordogs.com.au (home, about-us,
 * services, our-dogs, drug-searches, read-testimonials, who-we-keep-safe),
 * rewritten for length. Nothing here is invented — if a fact isn't on their
 * site, it isn't on this page. See README for what still needs the client's OK.
 */

export const site = {
  name: "Detector Dogs Australia",
  short: "DDA",
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
  hours: [
    ["Monday – Friday", "9 am – 5 pm"],
    ["Saturday – Sunday", "9 am – 4 pm"],
    ["Emergency", "0418 348 804"],
  ],
};

export const nav = [
  ["Capabilities", "#capabilities"],
  ["Standards", "#standards"],
  ["Odour library", "#odours"],
  ["Coverage", "#coverage"],
  ["Clients", "#clients"],
] as const;

export const stats = [
  { value: "2000", label: "Established", note: "Australia’s longest-serving canine detection service" },
  { value: "80+", label: "Years", note: "Combined leadership experience in working service dogs" },
  { value: "U.S.", label: "Standard", note: "Detection-dog standards adopted as our minimum" },
  { value: "PD 038", label: "NPCA", note: "Certifying official number, international NPCA requirements" },
];

// Venues and organisations named on the "Who we keep safe" and testimonial pages.
export const clients = [
  "Melbourne Cricket Ground",
  "Australian Open",
  "Rod Laver Arena",
  "Marvel Stadium",
  "Qudos Bank Arena",
  "Port of Melbourne",
  "Patrick Stevedoring",
  "Westfield Sydney CBD",
  "Chadstone",
  "Queen Victoria Building",
  "Commonwealth Games 2006",
  "World Youth Day 2008",
  "Moonee Valley Racecourse",
  "Royal Melbourne Hospital",
  "St Vincent’s Hospital",
  "Austin Health",
  "ExxonMobil",
  "Bayer",
  "Cisco",
  "Bosch",
  "V/Line",
  "VicRoads",
];

export const capabilities = [
  {
    code: "EDD",
    title: "Explosive detection",
    body: "Passive-alert explosive detection dogs imprinted on commercial, military and homemade explosive families, for venue sweeps, VIP visits and threat response.",
    img: "mcg",
    alt: "Detector dog handler searching the stands at the MCG",
  },
  {
    code: "NDD",
    title: "Narcotic detection",
    body: "Illicit drugs, controlled medications and concealment materials, screened across lockers, vehicles, bags and shared areas with minimal disruption.",
    img: "garage",
    alt: "Detection dog screening boxes and bags in a garage",
  },
  {
    code: "EVT",
    title: "Major events & venues",
    body: "Stadiums, arenas, festivals and international tours. Pre-event sweeps and live screening that keep crowds moving and schedules intact.",
    img: "stadium",
    alt: "Two handlers and detection dogs walking onto a stadium",
  },
  {
    code: "TRN",
    title: "Ports, aviation & cargo",
    body: "Pallet and unit-load screening without stopping freight flow, plus vehicle and aircraft searches at wharves, terminals and hangars.",
    img: "aviation",
    alt: "Handler and dog searching a private jet in a hangar",
  },
  {
    code: "INS",
    title: "Institutions & industry",
    body: "Hospitals and mental health wards, schools, universities, mines, oil and gas sites and workplaces, integrated with existing drug and safety policy.",
    img: "wharf",
    alt: "K9 handler in hi-vis at a vehicle checkpoint",
  },
  {
    code: "PVT",
    title: "Private & confidential",
    body: "Discreet home searches of bedrooms, vehicles, garages and living areas. Clarity without confrontation — most homes screened in under an hour.",
    img: "bedroom",
    alt: "Golden retriever detection dog checking a backpack in a bedroom",
  },
];

// "What you should expect from a professional provider" — services page.
export const standards = [
  ["Single-purpose training", "Each dog is trained in one discipline — explosives or narcotics, never both — so every alert means exactly one thing."],
  ["Comprehensive imprinting", "Every major family of commercial and military explosive, plus homemade explosives, reflecting current global threat patterns."],
  ["Licensed explosive access", "Live training materials procured, stored and handled under licence for realistic conditioning and testing."],
  ["Daily sustainment training", "Structured maintenance training through every dog’s working career to hold peak detection accuracy."],
  ["Independent validation", "External testing and certification to confirm operational reliability and standards compliance."],
  ["Auditable records", "Secure training, transfer and certification records, supported by video verification, for a complete audit trail."],
];

export const odours = {
  explosives: [
    "Ammonia-Gel", "Ammonium Nitrate", "Hexogen (RDX)", "Octogen (HMX)", "PETN / Nitropenta", "TNT / Trotyl",
    "Tetryl", "TATP", "HMTD", "Nitroglycerine", "Nitrocellulose", "All dynamites",
    "Water gels", "Smokeless powder", "Black powder", "Gunpowder", "Chlorates", "Sodium chlorate",
    "Potassium chlorate", "Potassium nitrate", "Smell the shot",
  ],
  narcotics: [
    "Cocaine", "Crack cocaine", "Heroin", "Morphine", "Opium", "Speedball",
    "Amphetamines", "Methamphetamine", "Ecstasy (MDMA)", "GHB", "LSD", "Psilocybin",
    "Cannabis — indica", "Cannabis — sativa", "Cannabis — ruderalis", "Hashish",
  ],
};

export const process = [
  ["Consultation", "Detailed needs analysis with your security, operations or leadership team."],
  ["Planning", "Operational plan and risk assessment built around the site, event or program."],
  ["Deployment", "Specialised, single-discipline detection teams on site at short notice."],
  ["Benchmarking", "Performance measured continuously against industry benchmarks."],
  ["Reporting", "Clear reporting and improvement cycles after every deployment."],
];

// read-testimonials, shortened. Names and titles are as published.
export const testimonials = [
  {
    quote:
      "They worked tirelessly on the day, checking each and every vehicle entering the facility. The Office of Transport Security were on site on two separate instances and commented on both occasions how pleased they were.",
    name: "Paul Cudmore",
    role: "Business Unit Manager, Patrick Stevedoring — Melbourne",
    context: "Queen Mary II visit, Webb Dock East",
  },
  {
    quote:
      "The K-9 Detection Team you supplied significantly enhanced security arrangements pertaining to both physical assets and personnel during an exceptionally busy and potentially disruptive period.",
    name: "Trent Morrissey",
    role: "Security Manager, Westfield Sydney CBD Properties",
    context: "World Youth Day 2008",
  },
  {
    quote:
      "The whole service was conducted flawlessly and the team worked well with the SNP staff and management on site.",
    name: "Ken Jenkins",
    role: "Account Manager — Protective Services, SNP Security",
    context: "Royal visit, Queen Victoria Building, Sydney",
  },
];
