import { slugToTitle as _s } from "@/lib/seo";

export const metadata = {
  title: `Tender Services in ${_s("bhiwandi")}, ${_s("maharashtra")}`,
  description: `Get local tender support in ${_s("bhiwandi")}, ${_s("maharashtra")}: tender search, GeM registration, bid preparation and submission by Tender Elite.`,
  alternates: { canonical: "/locations/maharashtra/bhiwandi" },
};

import Link from "next/link";
import type { ReactNode } from "react";

const serifFont = "Georgia, 'Times New Roman', serif";
const sansFont = "Arial, Helvetica, sans-serif";

const NAVY = "#071B3B";
const GOLD = "#D4A017";
const RED = "#B71432";

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about-us" },
];

/* =========================================================
   CITY SNAPSHOT
========================================================= */

const snapshotRows = [
  ["City", "Bhiwandi"],
  ["State", "Maharashtra"],
  ["Population", "12+ Lakh"],
  ["Economic Importance", "Logistics & Warehousing Hub"],
  ["Total Road Network", "1,700+ KM"],
  ["Highway Connectivity", "Mumbai–Nashik Highway Connectivity"],
  ["Major Logistics Importance", "India’s Major Warehousing Corridor"],
  ["Railway Connectivity", "Central Railway Regional Connectivity"],
  [
    "Smart Infrastructure Growth",
    "Rapid Logistics & Urban Infrastructure Expansion",
  ],
  [
    "Major Industrial Ecosystem",
    "Warehousing, Textile & Logistics Infrastructure",
  ],
  [
    "Strategic Connectivity",
    "Mumbai, Thane, Navi Mumbai & Gujarat Corridors",
  ],
];

/* =========================================================
   ECONOMIC OVERVIEW
   3 CARDS — UPDATED
========================================================= */

const economicCards = [
  {
    title: "Bhiwandi has emerged as one of India’s most important:",
    items: [
      "Warehousing ecosystems",
      "Logistics corridors",
      "Freight movement hubs",
      "Industrial support infrastructure regions",
      "E-commerce distribution centers",
    ],
    extraTitle: "The city contributes significantly to Maharashtra’s logistics economy through:",
    extraItems: [
      "Supply chain ecosystem",
      "Industrial transportation",
      "Warehousing infrastructure",
      "Freight movement network",
    ],
  },
  {
    title: "Large-scale investments in:",
    items: [
      "Logistics parks",
      "Transport infrastructure",
      "Warehouse automation",
      "Commercial infrastructure",
      "Utility modernization",
      "Industrial connectivity",
    ],
    footer:
      "Continue driving rapid infrastructure growth across the region.",
  },
  {
    title: "Because of its strategic location near:",
    items: [
      "Mumbai",
      "JNPT",
      "Thane",
      "Navi Mumbai",
      "National highway corridors",
    ],
    footer:
      "Bhiwandi has become one of India’s most important freight distribution ecosystems.",
  },
];

/* =========================================================
   TIMELINE
========================================================= */

const timeline = [
  {
    year: "2020–21",
    growth:
      "Logistics stabilization, healthcare infrastructure support, utility upgrades",
    spending: "₹6,000+ Crore",
  },
  {
    year: "2021–22",
    growth: "Warehousing expansion, transport infrastructure modernization",
    spending: "₹10,000+ Crore",
  },
  {
    year: "2022–23",
    growth:
      "E-commerce logistics growth, industrial warehousing ecosystem expansion",
    spending: "₹15,000+ Crore",
  },
  {
    year: "2023–24",
    growth:
      "Smart logistics parks, road infrastructure upgrades, freight modernization",
    spending: "₹22,000+ Crore",
  },
  {
    year: "2024–25",
    growth:
      "Large-scale warehousing infrastructure & utility modernization investments",
    spending: "₹30,000+ Crore",
  },
  {
    year: "2025–26",
    growth:
      "Massive logistics ecosystem expansion & industrial corridor modernization",
    spending: "₹40,000+ Crore (Projected)",
  },
  {
    year: "2026 & Beyond",
    growth:
      "Integrated freight, warehousing & smart logistics infrastructure ecosystem",
    spending: "₹55,000+ Crore Expected Long-Term Investment Pipeline",
  },
];

/* =========================================================
   MEGA PROJECTS
========================================================= */

const megaProjects = [
  {
    title: "Warehousing & Logistics Expansion",
    intro: "Bhiwandi has become one of India’s largest:",
    items: [
      "Warehousing ecosystems",
      "E-commerce fulfillment corridors",
      "Freight distribution hubs",
      "Smart warehouses",
      "Automated logistics infrastructure",
      "Industrial storage facilities",
      "Transport ecosystems",
    ],
  },
  {
    title: "Highway & Freight Connectivity",
    intro: "Strategic connectivity with:",
    items: [
      "Mumbai–Nashik Highway",
      "JNPT",
      "Mumbai Metropolitan Region",
      "Gujarat freight corridors",
      "Logistics investments",
      "Industrial transportation",
      "Commercial infrastructure growth",
    ],
  },
  {
    title: "Industrial Infrastructure Development",
    intro:
      "Rapid industrial ecosystem expansion is generating procurement opportunities across:",
    items: [
      "HVAC systems",
      "Electrical infrastructure",
      "Fire fighting systems",
      "Warehouse automation",
      "Utility infrastructure",
    ],
  },
  {
    title: "Urban Utility Modernization",
    intro: "Continuous investments in:",
    items: [
      "Water infrastructure",
      "Sewage modernization",
      "Civic infrastructure",
      "Road redevelopment",
      "Transport management",
    ],
    footer: "Are creating government tender opportunities.",
  },
];

/* =========================================================
   AUTHORITIES
========================================================= */

const authorities = [
  "Bhiwandi Nizampur Municipal Corporation",
  "MMRDA",
  "Maharashtra PWD",
  "MIDC",
  "Logistics & Infrastructure Authorities",
  "Industrial Development Departments",
  "Utility Departments",
  "Water Resource Authorities",
  "Public Infrastructure Agencies",
];

/* =========================================================
   TENDER CATEGORIES
========================================================= */

const tenderCategories = [
  "Civil Construction",
  "Warehouse Infrastructure",
  "Logistics Infrastructure",
  "HVAC Works",
  "Electrical Engineering",
  "Fire Fighting Systems",
  "Smart Infrastructure",
  "Water Supply & Drainage",
  "Security & Surveillance",
  "Industrial Automation",
  "Utility Infrastructure",
  "Facility Management",
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    name: "GeM Registration Services",
    link: "/services/tender-portal-registration",
  },
  {
    name: "Tender Submission Services",
    link: "/services/tender-submission",
  },
  {
    name: "Tender Portal Registration",
    link: "/services/tender-portal-registration",
  },
  {
    name: "BOQ Preparation & Verification",
    link: "/services/boq-preparation-cost-estimation",
  },
  {
    name: "Bid Documentation Support",
    link: "/services/bid-management-support",
  },
  {
    name: "Technical Tender Assistance",
    link: "/services/tender-documentation-compliance",
  },
  {
    name: "OEM Authorization Support",
    link: "/services/brand-approval-assistance",
  },
  {
    name: "Reverse Auction Support",
    link: "/services/reverse-auction-support",
  },
];

/* =========================================================
   WHY BHIWANDI
========================================================= */

const whyBhiwandiCards = [
  {
    title: "Strong Industrial & Commercial Expansion",
    intro: "Rapid growth in:",
    items: [
      "Warehousing",
      "Commercial logistics",
      "Industrial support infrastructure",
      "E-commerce fulfillment centers",
      "Freight management systems",
    ],
    footer: "Continues driving tender opportunities across sectors.",
  },
  {
    title: "Strategic Freight Connectivity",
    text: "Bhiwandi acts as a major logistics gateway connecting:",
    items: [
      "Mumbai",
      "Thane",
      "Navi Mumbai",
      "Gujarat",
      "Nashik corridor",
      "JNPT",
    ],
    footer:
      "Making it one of India’s most important logistics ecosystems.",
  },
  {
    title: "Massive Warehousing & Logistics Growth",
    intro: "Continuous investments in:",
    items: [
      "Logistics parks",
      "Freight corridors",
      "Warehousing infrastructure",
      "Transport modernization",
      "Industrial storage systems",
    ],
    footer:
      "Are generating large-scale procurement opportunities.",
  },
];

/* =========================================================
   AREAS
========================================================= */

const areas = [
  "Bhiwandi City",
  "Kalyan Bypass Region",
  "Mankoli",
  "Anjurphata",
  "Narpoli",
  "Kalher",
  "Kasheli",
  "Padgha",
  "Temghar",
  "Val Village",
  "Saravali",
  "Kongaon",
  "Warehousing Corridors",
  "Dapode",
];

/* =========================================================
   INDUSTRIAL AREAS
========================================================= */

const industrialAreas = [
  "Bhiwandi Warehousing Ecosystem",
  "Mankoli Logistics Zone",
  "Anjurphata Industrial Belt",
  "Narpoli Warehousing Cluster",
  "Kalher Logistics Corridor",
  "Padgha Industrial Region",
  "Temghar Industrial Ecosystem",
  "Saravali Industrial Area",
  "Kongaon Logistics Zone",
  "Dapode Warehousing Corridor",
];

/* =========================================================
   INDUSTRIAL SECTORS
========================================================= */

const industrialSectors = [
  "Logistics & Warehousing",
  "Industrial Manufacturing",
  "Freight Transportation",
  "Construction & Infrastructure",
  "HVAC Systems",
  "Electrical Equipment",
  "Industrial Automation",
  "Commercial Infrastructure",
  "Facility Management",
  "Utility Infrastructure",
];

/* =========================================================
   TENDER OPPORTUNITIES
========================================================= */

const tenderOpportunities = [
  "Warehouse Construction",
  "HVAC Systems",
  "Electrical Infrastructure",
  "Fire Fighting Systems",
  "Smart Warehousing",
  "Industrial Automation",
  "Solar Projects",
  "Water Infrastructure",
  "Facility Management Contracts",
  "Logistics Infrastructure Projects",
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industries = [
  {
    name: "Infrastructure",
    image: "/images/infrastructure.png",
    link: "/industries/construction-infrastructure"
  },
  {
    name: "IT & Software",
    image: "/images/itsoftware.png",
    link: "/industries/information-technology"
  },
  {
    name: "Pharmaceuticals",
    image: "/images/pharmaceuticals.png",
    link: "/industries/pharmaceutical"
  },
  {
    name: "Engineering",
    image: "/images/engineering.png",
    link: "/industries/mechanical-engineering"
  },
  {
    name: "Security Services",
    image: "/images/securityservices.png",
    link: "/industries/security-surveillance"
  },
  {
    name: "Facility Management",
    image: "/images/facilitymanagement.png",
    link: "/industries/facility-management"
  },
  {
    name: "Logistics",
    image: "/images/logistics.png",
    link: "/industries/logistics"
  },
  {
    name: "Healthcare",
    image: "/images/healthcare.png",
    link: "/industries/healthcare-medical"
  },
];

/* =========================================================
   LOCATIONS
========================================================= */

const locations = [
  {
    name: "Maharashtra",
    image: "/images/maharashtracard.png",
    link: "/states/maharashtra",
  },
  {
    name: "Karnataka",
    image: "/images/karnatakacard.png",
    link: "/states/karnataka",
  },
  {
    name: "Kerala",
    image: "/images/keralacard.png",
    link: "/states/kerala",
  },
  {
    name: "Gujarat",
    image: "/images/gujaratcard.png",
    link: "/states/gujarat",
  },
  {
    name: "Tamil Nadu",
    image: "/images/tamilnaducard.png",
    link: "/states/tamil-nadu",
  },
  {
    name: "Uttar Pradesh",
    image: "/images/uttarpradeshcard.png",
    link: "/states/uttar-pradesh",
  },
  {
    name: "Punjab",
    image: "/images/punjabcard.png",
    link: "/states/punjab",
  },
  {
    name: "Rajasthan",
    image: "/images/rajasthancard.png",
    link: "/states/rajasthan",
  },
];
/* =========================================================
   FUTURE OUTLOOK
========================================================= */

const futureGrowth = [
  "Smart logistics ecosystem expansion",
  "Warehousing modernization",
  "Industrial infrastructure growth",
  "Freight corridor development",
  "Utility modernization",
  "Transport infrastructure projects",
  "Warehouse automation",
  "Logistics technology investments",
];

const futureBeneficiaries = [
  "Contractors",
  "OEMs",
  "MSMEs",
  "Infrastructure Companies",
  "EPC Firms",
  "Consultants",
  "Logistics Operators",
  "Technology Providers",
];

/* =========================================================
   HEADER
========================================================= */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-[5px] border-[#D4A017] bg-white">
      <div className="mx-auto flex min-h-[90px] max-w-[1440px] items-center gap-4 px-5 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <img src="/images/logo-mark.png" alt="Tender Elite Logo" className="h-16 w-20 object-contain" />
          <img src="/images/logo-wordmark.png" alt="Tender Elite" className="hidden w-44 object-contain sm:block md:w-48" />
        </Link>

        <nav className="ml-auto hidden items-center gap-3 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-[20px] border border-white bg-[#D4A017] px-5 py-3 text-sm font-semibold text-black shadow-[0_6px_14px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_12px_22px_rgba(7,27,59,0.20)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-[20px] border border-[#D4A017] bg-[#B71432] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#8F0F29]"
          >
            Contact Us
          </Link>
        </nav>

        <details className="relative ml-auto lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl bg-[#D4A017] text-xl font-bold text-[#071B3B]">
            ☰
          </summary>
          <div className="absolute right-0 top-14 w-56 rounded-2xl border bg-white p-3 shadow-2xl">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-xl px-4 py-3 font-semibold text-[#071B3B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4A017] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 block rounded-xl bg-[#B71432] px-4 py-3 text-center font-semibold text-white">
              Contact Us
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <h2
      className="text-center text-3xl font-bold leading-tight text-[#D4A017] sm:text-4xl lg:text-5xl"
      style={{ fontFamily: serifFont }}
    >
      {children}
    </h2>
  );
}

/* =========================================================
   DARK BOX
========================================================= */

function DarkBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 shadow-[0_10px_25px_rgba(0,0,0,0.12)] sm:p-7">
      <h3
        className="mb-5 text-2xl font-bold leading-tight text-[#D4A017]"
        style={{ fontFamily: serifFont }}
      >
        {title}
      </h3>

      <div className="text-[15px] leading-7 text-white sm:text-base">
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="bg-[#071B3B] text-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 lg:min-h-[610px] lg:grid-cols-2 lg:px-12 lg:py-14">
        <div className="min-w-0">
          <h1
            className="text-4xl font-bold leading-[1] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: serifFont }}
          >
            Tender Consultant in
            <br />
            <span className="text-[#D4A017]">Bhiwandi</span>
          </h1>

          <div className="my-6 h-[3px] w-full max-w-[580px] bg-[#D4A017]" />

          <p
            className="mb-5 max-w-[600px] text-base font-bold leading-7"
            style={{ fontFamily: serifFont }}
          >
            Maharashtra’s Largest Logistics, Warehousing & Industrial
            Infrastructure Hub
          </p>

          <p className="max-w-[620px] text-[15px] leading-7 sm:text-base">
            Bhiwandi is one of India’s fastest-growing logistics,
            warehousing, industrial, and transport infrastructure
            ecosystems. Strategically located within the Mumbai
            Metropolitan Region (MMR), Bhiwandi connects Mumbai,
            Thane, Navi Mumbai, Gujarat, Nashik, and major industrial
            corridors across western India.
          </p>

          <p className="mt-5 max-w-[620px] text-[15px] leading-7 sm:text-base">
            Traditionally known for its textile and power loom industry,
            Bhiwandi has rapidly transformed into one of India’s largest
            warehousing and e-commerce infrastructure destinations with
            major investments across logistics, transport, industrial and
            commercial infrastructure.
          </p>

          <p className="mt-5 font-bold text-[#D4A017]">
            Bhiwandi is widely known for:
          </p>

          <p className="mt-2 max-w-[620px] text-[15px] leading-7 sm:text-base">
            Warehousing & Logistics Parks, Industrial Infrastructure,
            Smart Logistics Ecosystems, Transport Corridors, E-Commerce
            Supply Chain Infrastructure, Commercial Infrastructure,
            Utility Modernization, Freight & Distribution Networks
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/Bhiwandihero.png"
            alt="Bhiwandi"
            className="h-[280px] w-full max-w-[663px] rounded-[20px] border-[3px] border-[#D4A017] object-cover shadow-[0_0_30px_rgba(0,0,0,0.75)] sm:h-[350px] lg:h-[432px]"
          />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DEVELOPMENT INTRO
========================================================= */

function DevelopmentIntro() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto grid max-w-[1100px] gap-7 px-5 md:grid-cols-2">
        <DarkBox title="Current Infrastructure Growth">
          <p className="mb-5 text-[#D4A017]">
            Bhiwandi today hosts major warehousing and logistics ecosystems
            with increasing investments across:
          </p>

          <ul className="space-y-2">
            {[
              "E-commerce companies",
              "Logistics operators",
              "FMCG brands",
              "Industrial manufacturers",
              "Distribution networks",
              "Transport companies",
            ].map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </DarkBox>

        <DarkBox title="Tender Ecosystem">
          <p className="mb-5 text-[#D4A017]">
            The city has emerged as one of Maharashtra’s most important
            procurement and infrastructure growth corridors with continuous
            government and private-sector tender opportunities generated
            through:
          </p>

          <ul className="space-y-2">
            {authorities.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <p className="mt-5">
            Tender Elite provides complete government tender consultancy,
            GeM registration, BOQ preparation, bid management, and tender
            submission services across Bhiwandi.
          </p>
        </DarkBox>
      </div>
    </section>
  );
}

/* =========================================================
   SNAPSHOT
========================================================= */

function SnapshotSection() {
  return (
    <section className="bg-[#071B3B] py-12 sm:py-14">
      <div className="mx-auto max-w-[1160px] px-5">
        <SectionTitle>
          Bhiwandi Infrastructure & Connectivity Overview
        </SectionTitle>

        <h3
          className="mt-5 text-center text-2xl font-bold text-white sm:text-3xl"
          style={{ fontFamily: serifFont }}
        >
          Bhiwandi City Snapshot
        </h3>

        <div className="mx-auto mt-8 overflow-hidden rounded-[20px] bg-white shadow-xl">
          <div className="grid grid-cols-1 border-b border-slate-300 sm:grid-cols-[42%_58%]">
            <div className="border-slate-300 px-4 py-4 text-center font-bold text-[#071B3B] sm:border-r">
              Category
            </div>

            <div className="px-4 py-4 text-center font-bold text-[#071B3B]">
              Details
            </div>
          </div>

          {snapshotRows.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-1 border-b border-slate-300 last:border-b-0 sm:grid-cols-[42%_58%]"
            >
              <div className="border-slate-300 px-4 py-3 text-center text-sm text-[#071B3B] sm:border-r">
                {label}
              </div>

              <div className="px-4 py-3 text-center text-sm text-[#071B3B]">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ECONOMIC OVERVIEW
   UPDATED TO 3 CARDS
========================================================= */

function EconomicOverview() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>
          Bhiwandi Economic Growth & Development Overview
        </SectionTitle>

        <h3
          className="mt-4 text-center text-2xl font-bold text-[#071B3B] sm:text-3xl"
          style={{ fontFamily: serifFont }}
        >
          Bhiwandi – India’s Emerging Logistics & Warehousing Powerhouse
        </h3>

        <div className="mt-9 grid items-stretch gap-7 lg:grid-cols-3">
          {economicCards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[430px] flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 shadow-[0_10px_25px_rgba(0,0,0,0.12)] sm:p-7"
            >
              <h3
                className="mb-5 text-2xl font-bold leading-tight text-[#D4A017]"
                style={{ fontFamily: serifFont }}
              >
                {card.title}
              </h3>

              <ul className="space-y-2.5 text-[15px] leading-6 text-white">
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              {card.extraTitle && (
                <>
                  <p className="mt-6 font-bold text-[#D4A017]">
                    {card.extraTitle}
                  </p>

                  <ul className="mt-3 space-y-2 text-[15px] leading-6 text-white">
                    {card.extraItems?.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </>
              )}

              {card.footer && (
                <p className="mt-auto border-t border-[#D4A017]/40 pt-5 text-[15px] leading-7 text-white/90">
                  {card.footer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TIMELINE
========================================================= */

function Timeline() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-[1340px] px-5">
        <SectionTitle>
          Bhiwandi Economic & Development Growth Timeline
        </SectionTitle>

        <h3
          className="mt-5 text-center text-2xl font-bold text-[#071B3B]"
          style={{ fontFamily: serifFont }}
        >
          Economic Growth, Infrastructure Expansion & Public Investment
        </h3>

        <div className="mt-8 overflow-x-auto pb-2">
          <div className="min-w-[950px] overflow-hidden rounded-[20px] border-[3px] border-[#071B3B] bg-[#071B3B]">
            <div className="grid grid-cols-[170px_1fr_320px] border-b border-white/30 text-white">
              <div className="border-r border-white/30 p-5 font-semibold">
                Financial Year
              </div>

              <div className="border-r border-white/30 p-5 font-semibold">
                Major Growth & Infrastructure Highlights
              </div>

              <div className="p-5 font-semibold">
                Estimated Public Infrastructure & Development Spending
              </div>
            </div>

            {timeline.map((item) => (
              <div
                key={item.year}
                className="grid grid-cols-[170px_1fr_320px] border-b border-white/30 text-white last:border-b-0"
              >
                <div className="border-r border-white/30 p-5">
                  {item.year}
                </div>

                <div className="border-r border-white/30 p-5 leading-7">
                  {item.growth}
                </div>

                <div className="p-5 font-bold leading-7 text-[#D4A017]">
                  {item.spending}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MEGA PROJECTS
========================================================= */

function MegaProjects() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-[1350px] px-5">
        <SectionTitle>
          Major Mega Projects Driving Bhiwandi’s Growth
        </SectionTitle>

        <div className="mt-9 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {megaProjects.map((project) => (
            <div
              key={project.title}
              className="flex min-h-[320px] flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
            >
              <h3
                className="text-xl font-bold leading-tight text-[#D4A017]"
                style={{ fontFamily: serifFont }}
              >
                {project.title}
              </h3>

              <p className="mt-5 font-bold text-[#D4A017]">
                {project.intro}
              </p>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-white">
                {project.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              {project.footer && (
                <p className="mt-auto border-t border-white/20 pt-4 text-sm leading-6 text-white/90">
                  {project.footer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   GOVERNMENT DEVELOPMENT
========================================================= */

function GovernmentDevelopment() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-[1150px] px-5">
        <SectionTitle>
          Government Development Spending & Tender Ecosystem
        </SectionTitle>

        <div className="mt-9 grid items-stretch gap-7 lg:grid-cols-2">
          <DarkBox title="Major Tender Generating Authorities">
            <ul className="space-y-3">
              {authorities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkBox>

          <DarkBox title="Major Tender Categories">
            <ul className="space-y-3">
              {tenderCategories.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkBox>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SERVICES
========================================================= */

function ServicesSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>Services Offered by Tender Elite in Ahmednagar</SectionTitle>
        <div className="mx-auto mt-8 grid max-w-[1160px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
{services.map((service) => (
  <Link
    key={service.name}
    href={service.link}
    className="flex min-h-[145px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-5 py-6 text-center text-lg font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(7,27,59,0.28)]"
    style={{ fontFamily: serifFont }}
  >
    {service.name}
  </Link>
))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/services" className="rounded-[20px] bg-[#D4A017] px-9 py-3 font-bold text-[#071B3B] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WHY BHIWANDI
   NAVY BACKGROUND
   WHITE CARDS
========================================================= */

function WhyBhiwandi() {
  return (
    <section className="bg-[#071B3B] py-12 sm:py-14">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>
          Why Bhiwandi Is One of Maharashtra’s Fastest Growing
          Tender Markets
        </SectionTitle>

        <div className="mt-9 grid items-stretch gap-7 lg:grid-cols-3">
          {whyBhiwandiCards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[430px] flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-white p-6 shadow-[0_10px_25px_rgba(0,0,0,0.18)] sm:p-7"
            >
              <h3
                className="mb-5 text-2xl font-bold leading-tight text-[#D4A017]"
                style={{ fontFamily: serifFont }}
              >
                {card.title}
              </h3>

              {card.text && (
                <p className="mb-4 text-base leading-7 text-[#071B3B]">
                  {card.text}
                </p>
              )}

              {card.intro && (
                <p className="mb-4 text-base font-bold text-[#D4A017]">
                  {card.intro}
                </p>
              )}

              <ul className="space-y-3 text-[15px] leading-6 text-[#071B3B]">
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              <p className="mt-auto border-t border-[#071B3B]/20 pt-5 text-[15px] leading-7 text-[#071B3B]">
                {card.footer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   AREAS WE SERVE
========================================================= */

function AreasSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>Areas We Serve in Ahmednagar</SectionTitle>
        <p className="mt-5 text-center text-lg font-bold text-[#071B3B]">Tender Elite provides services across:</p>
        <div className="mx-auto mt-9 flex max-w-[1250px] flex-wrap justify-center gap-4">
          {areas.map((area) => (
            <Link
              key={area}
              href="/locations/maharashtra/"
              className="flex min-h-[80px] w-full max-w-[260px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-4 py-3 text-center font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2"
              style={{ fontFamily: serifFont }}
            >
              {area}
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/locations/maharashtra/" className="rounded-[20px] bg-[#D4A017] px-9 py-3 font-bold text-[#071B3B] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INDUSTRIAL AREAS
   LAST ROW CENTERED
========================================================= */

function IndustrialAreasSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>
          Industrial Areas & MIDC We Serve Near Bhiwandi
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1060px] text-center text-base font-bold leading-7 text-[#071B3B]">
          Tender Elite provides consultancy services across major
          industrial ecosystems, commercial manufacturing zones, and
          logistics corridors near Bhiwandi.
        </p>

        {/* IMPORTANT:
            flex-wrap + justify-center makes the final 2 cards
            automatically center on desktop.
        */}
        <div className="mx-auto mt-8 flex max-w-[1200px] flex-wrap justify-center gap-5">
          {industrialAreas.map((area) => (
            <div
              key={area}
              className="flex min-h-[105px] w-full max-w-[280px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-5 py-5 text-center text-[17px] font-semibold leading-6 text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
            >
              {area}
            </div>
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <Link
            href="/locations"
            className="rounded-[20px] bg-[#D4A017] px-9 py-3 font-bold text-[#071B3B] shadow-[0_6px_15px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-1"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INDUSTRIAL SECTORS
========================================================= */

function IndustrialSectors() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1150px] px-5">
        <div className="grid items-stretch gap-7 lg:grid-cols-2">
          <div className="flex min-h-[500px] flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 sm:p-7">
            <h3
              className="mb-5 text-2xl font-bold text-[#D4A017]"
              style={{ fontFamily: serifFont }}
            >
              Key Industrial Sectors
            </h3>

            <p className="mb-4 text-[15px] text-[#D4A017]">
              These ecosystems support:
            </p>

            <ul className="space-y-3 text-[15px] leading-6 text-white">
              {industrialSectors.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="flex min-h-[500px] flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 sm:p-7">
            <h3
              className="mb-5 text-2xl font-bold leading-tight text-[#D4A017]"
              style={{ fontFamily: serifFont }}
            >
              Tender Opportunities Across Infrastructure Zones
            </h3>

            <p className="mb-4 text-[15px] text-[#D4A017]">
              Major tender opportunities include:
            </p>

            <ul className="grid gap-x-8 gap-y-3 text-[15px] leading-6 text-white sm:grid-cols-2">
              {tenderOpportunities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INDUSTRIES WE SERVE
========================================================= */

function IndustriesSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>Industries We Serve</SectionTitle>
        <p className="mx-auto mt-5 max-w-[900px] text-center font-bold leading-7 text-[#071B3B]">
          Empowering businesses across diverse sectors with expert tender consultancy, bid management, and strategic procurement support.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1140px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
{industries.map((industry) => (
  <Link
    key={industry.name}
    href={industry.link}
    className="group relative flex h-[195px] items-end justify-center overflow-hidden rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-2"
  >
    <img
      src={industry.image}
      alt={industry.name}
      className="absolute inset-0 h-full w-full object-cover opacity-100 transition-transform duration-500 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-black/10" />

    <div className="relative z-10 min-w-[150px] rounded-full border-2 border-[#D4A017] bg-[#071B3B] px-5 py-2 text-center text-sm font-bold text-white transition-all duration-300 group-hover:bg-[#D4A017] group-hover:text-[#071B3B]">
      {industry.name}
    </div>
  </Link>
))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/industries" className="rounded-[20px] bg-[#D4A017] px-9 py-3 font-bold text-[#071B3B] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   LOCATIONS
========================================================= */

function LocationsSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>Locations We Serve</SectionTitle>

        <div className="mx-auto mt-9 grid max-w-[1230px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
{locations.map((location) => (
  <Link
    key={location.name}
    href={location.link}
    className="group relative flex h-[210px] items-end justify-center overflow-hidden rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-4 shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_32px_rgba(0,0,0,0.24)]"
  >
    <img
      src={location.image}
      alt={location.name}
      className="absolute inset-0 h-full w-full object-cover opacity-100 transition-transform duration-500 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-[#071B3B]/20 transition-all duration-300 group-hover:bg-[#071B3B]/15" />

    <div
      className="relative z-10 min-w-[145px] rounded-full border-2 border-[#D4A017] bg-[#071B3B] px-6 py-2 text-center text-sm font-bold text-white shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:bg-[#D4A017] group-hover:text-[#071B3B]"
      style={{ fontFamily: serifFont }}
    >
      {location.name}
    </div>
  </Link>
))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/locations"
            className="rounded-[20px] bg-[#D4A017] px-9 py-3 font-bold text-[#071B3B] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FUTURE OUTLOOK
========================================================= */

function FutureOutlook() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>
          Future Outlook of Bhiwandi Infrastructure & Tender Market
        </SectionTitle>

        <div className="mx-auto mt-9 max-w-[1280px] rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 sm:p-8 lg:p-10">
          <h3
            className="text-2xl font-bold leading-tight text-[#D4A017] sm:text-3xl"
            style={{ fontFamily: serifFont }}
          >
            Bhiwandi is expected to witness massive future growth through:
          </h3>

          <div className="mt-6 grid gap-x-14 gap-y-4 md:grid-cols-2">
            {futureGrowth.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-base leading-7 text-white sm:text-lg"
              >
                <span className="text-[#D4A017]">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h3
            className="mt-9 text-2xl font-bold leading-tight text-[#D4A017] sm:text-3xl"
            style={{ fontFamily: serifFont }}
          >
            This will continue generating high-value government tender
            opportunities across multiple sectors for:
          </h3>

          <div className="mt-6 grid gap-x-14 gap-y-4 md:grid-cols-2">
            {futureBeneficiaries.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-base leading-7 text-white sm:text-lg"
              >
                <span className="text-[#D4A017]">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CTA
========================================================= */

function CTA() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[900px] px-5">
        <div className="rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-6 py-10 text-center sm:px-10">
          <h2
            className="text-3xl font-bold leading-tight text-[#D4A017] sm:text-4xl"
            style={{ fontFamily: serifFont }}
          >
            Looking for Tender Consultant Services in Bhiwandi?
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-base leading-7 text-white/85">
            Get professional tender consultancy, GeM registration, BOQ
            preparation, bid management and tender submission support
            across Bhiwandi.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-[20px] border border-[#D4A017] bg-[#B71432] px-10 py-4 font-bold text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#8F1027]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="bg-[#071B3B] px-5 py-12 text-white sm:px-8 sm:py-14 xl:px-24">

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">

        <div>

          <img
            src="/images/footer.png"
            alt="Tender Elite"
            className="mb-5 w-[225px] object-contain"
          />

          <p className="max-w-xs text-sm leading-6 tracking-wider text-white/80">
            Empowering businesses through premium tender consultancy. We
            don&apos;t just process tenders – we build opportunities for
            business growth.
          </p>

        </div>

    {/* QUICK LINKS */}
    <div>
      <h3 className="mb-5 font-semibold tracking-wider">
        Quick Links
      </h3>

      <Link
        href="/"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Home
      </Link>

      <Link
        href="/services"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Services
      </Link>

      <Link
        href="/industries"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Industries
      </Link>

      <Link
        href="/insights"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Insights
      </Link>

      <Link
        href="/about-us"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        About Us
      </Link>

      <Link
        href="/contact"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Contact Us
      </Link>
    </div>

    {/* SERVICES */}
    <div>
      <h3 className="mb-5 font-semibold tracking-wider">
        Services
      </h3>

      <Link
        href="/services/tender-submission"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Tender Submission Services
      </Link>

      <Link
        href="/services/gem-catalogue-management"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        GeM Catalogue Management
      </Link>

      <Link
        href="/services/tender-portal-registration"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Tender Portal Registration
      </Link>

      <Link
        href="/services/bid-management-support"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Bid Management
      </Link>

      <Link
        href="/services/vendor-assessment-support"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Vendor Assessment
      </Link>

      <Link
        href="/services/joint-venture-consortium-formation"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Joint Venture Support
      </Link>
    </div>

        <div>

          <h3 className="mb-5 font-semibold tracking-wider">
            Contact Info.
          </h3>

          <p className="text-sm leading-8 tracking-wider text-white/80">
        +91 7045060062
        <br />
        sales@tenderelite.com
        <br />
        Mumbai, Maharashtra, India
          </p>

        </div>

      </div>

      <div className="mx-auto mt-10 flex max-w-[1240px] flex-col justify-between gap-4 border-t border-white/20 pt-6 text-xs tracking-wider text-white/60 sm:flex-row sm:items-center">

        <span>
          © 2025 Tender Elite Consultancy. All rights reserved.
        </span>

        <div className="flex flex-wrap gap-6">

          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-[#D4A017]"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="transition-colors hover:text-[#D4A017]"
          >
            Terms of Service
          </Link>

        </div>

      </div>

    </footer>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function BhiwandiPage() {
  return (
    <main
      className="min-h-screen w-full overflow-x-hidden bg-white"
      style={{ fontFamily: sansFont }}
    >
      <Header />

      <Hero />

      <DevelopmentIntro />

      <SnapshotSection />

      <EconomicOverview />

      <Timeline />

      <MegaProjects />

      <GovernmentDevelopment />

      <ServicesSection />

      <WhyBhiwandi />

      <AreasSection />

      <IndustrialAreasSection />

      <IndustrialSectors />

      <IndustriesSection />

      <LocationsSection />

      <FutureOutlook />

      <CTA />

      <Footer />
    </main>
  );
}