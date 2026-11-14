import { withYoast } from "@/lib/yoast-seo";
import { slugToTitle as _s } from "@/lib/seo";

const baseMetadata = {
  title: `Tender Services in ${_s("kalyan-dombivli")}, ${_s("maharashtra")}`,
  description: `Get local tender support in ${_s("kalyan-dombivli")}, ${_s("maharashtra")}: tender search, GeM registration, bid preparation and submission by Tender Elite.`,
  alternates: { canonical: "/locations/maharashtra/kalyan-dombivli" },
};

import Link from "next/link";
import type { ReactNode } from "react";

const serifFont = "Georgia, 'Times New Roman', serif";
const sansFont = "Arial, Helvetica, sans-serif";

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
  ["City", "Kalyan-Dombivli"],
  ["State", "Maharashtra"],
  ["Population", "17+ Lakh"],
  ["Economic Importance", "Urban Infrastructure & Residential Growth Hub"],
  ["Total Road Network", "1,800+ KM"],
  ["Railway Connectivity", "Central Railway Connectivity"],
  ["Total Railway Stations", "10+ Major Stations"],
  ["Metro Connectivity", "Metro Expansion Under Development"],
  ["Coastal Connectivity", "Mumbai Coastal Connectivity Region"],
  ["Major Connectivity", "Mumbai–Nashik Corridor & MMR Connectivity"],
  ["Major Industrial Ecosystem", "Dombivli MIDC, Ambernath Industrial Belt"],
  ["Logistics Importance", "MMR Logistics & Warehousing Corridor"],
];

/* =========================================================
   ECONOMIC OVERVIEW
========================================================= */

const economicCards = [
  {
    title: "Rapid Infrastructure Expansion",
    intro: "The city is witnessing continuous investments across:",
    items: [
      "Smart Infrastructure",
      "Residential Townships",
      "Commercial Development",
      "Metro Rail Projects",
      "Urban Mobility",
      "Water Infrastructure",
      "Logistics & Warehousing",
      "Road Modernization",
      "Industrial Support Infrastructure",
    ],
  },
  {
    title: "Strong Regional Economic Contribution",
    intro: "Kalyan-Dombivli contributes significantly to:",
    items: [
      "MMR housing ecosystem",
      "Logistics movement",
      "Regional infrastructure development",
      "Commercial expansion",
      "Industrial support services",
    ],
    footerTitle: "Because of its strategic connectivity with:",
    footerItems: [
      "Mumbai",
      "Thane",
      "Navi Mumbai",
      "Nashik corridor",
      "Industrial belts",
    ],
  },
];

/* =========================================================
   TIMELINE
========================================================= */

const timeline = [
  {
    year: "2020–21",
    growth:
      "Healthcare upgrades, civic utility stabilization, urban infrastructure support",
    spending: "₹7,000+ Crore",
  },
  {
    year: "2021–22",
    growth:
      "Road redevelopment, housing infrastructure, smart mobility planning",
    spending: "₹11,000+ Crore",
  },
  {
    year: "2022–23",
    growth:
      "Urban redevelopment, drainage modernization, logistics ecosystem expansion",
    spending: "₹16,000+ Crore",
  },
  {
    year: "2023–24",
    growth:
      "Metro planning, township growth, transport infrastructure upgrades",
    spending: "₹22,000+ Crore",
  },
  {
    year: "2024–25",
    growth:
      "Large-scale investments in roads, utilities, housing & mobility infrastructure",
    spending: "₹30,000+ Crore",
  },
  {
    year: "2025–26",
    growth:
      "Major smart infrastructure modernization & regional connectivity expansion",
    spending: "₹38,000+ Crore (Projected)",
  },
  {
    year: "2026 & Beyond",
    growth:
      "Integrated urban infrastructure & logistics ecosystem growth",
    spending: "₹50,000+ Crore Expected Long-Term Investment Pipeline",
  },
];

/* =========================================================
   MEGA PROJECTS
========================================================= */

const megaProjects = [
  {
    title: "Metro Rail Connectivity",
    intro:
      "Upcoming metro expansion projects are expected to improve:",
    items: [
      "Urban mobility",
      "Regional transportation",
      "Infrastructure connectivity",
      "Commercial ecosystem growth",
    ],
    footer:
      "Across Kalyan-Dombivli and nearby MMR regions.",
  },
  {
    title: "Smart Urban Infrastructure Development",
    intro: "Large-scale investments in:",
    items: [
      "Digital governance",
      "Smart surveillance",
      "Public utility modernization",
      "Traffic infrastructure",
      "Civic infrastructure",
    ],
    footer:
      "Are driving major procurement opportunities.",
  },
  {
    title: "Township & Real Estate Expansion",
    intro:
      "Rapid residential and commercial development is creating large-scale demand for:",
    items: [
      "HVAC systems",
      "Electrical infrastructure",
      "Fire fighting systems",
      "Security systems",
      "Facility management",
    ],
  },
  {
    title: "Logistics & Connectivity Growth",
    intro: "Strategic connectivity with:",
    items: [
      "Mumbai",
      "Navi Mumbai",
      "Thane",
      "Nashik corridor",
    ],
    subIntro: "Is accelerating:",
    subItems: [
      "Warehousing",
      "Logistics infrastructure",
      "Industrial support ecosystem",
    ],
  },
];

/* =========================================================
   AUTHORITIES
========================================================= */

const authorities = [
  "Kalyan-Dombivli Municipal Corporation",
  "MMRDA",
  "Maharashtra PWD",
  "Metro Rail Authorities",
  "MIDC",
  "Smart City Authorities",
  "Railways",
  "Urban Development Departments",
  "Housing Authorities",
  "Water Resource Departments",
];

const tenderCategories = [
  "Civil Construction",
  "Smart City Infrastructure",
  "Metro Rail Infrastructure",
  "HVAC Works",
  "Electrical Engineering",
  "Fire Fighting Systems",
  "Water Supply & Drainage",
  "Security & Surveillance",
  "Facility Management",
  "Urban Redevelopment",
  "Road Infrastructure",
  "Utility Infrastructure",
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
   WHY KALYAN-DOMBIVLI
========================================================= */

const whyCards = [
  {
    title: "Massive Urban Infrastructure Expansion",
    intro: "Continuous investments in:",
    items: [
      "Roads",
      "Housing",
      "Metro connectivity",
      "Logistics infrastructure",
      "Utilities",
      "Urban redevelopment",
    ],
    footer:
      "Are generating large-scale procurement opportunities.",
  },
  {
    title: "Strategic Mumbai Metropolitan Region Location",
    intro:
      "Kalyan-Dombivli acts as a major connectivity corridor between:",
    items: [
      "Mumbai",
      "Thane",
      "Navi Mumbai",
      "Nashik region",
      "Industrial corridors",
    ],
    footer:
      "Making it an important infrastructure growth zone.",
  },
  {
    title: "Strong Residential & Commercial Development",
    intro: "Rapid growth in:",
    items: [
      "Townships",
      "Residential projects",
      "Commercial infrastructure",
      "Warehousing",
      "Logistics support services",
    ],
    footer:
      "Continues driving tender opportunities across sectors.",
  },
];

/* =========================================================
   AREAS
========================================================= */

const areas = [
  "Kalyan West",
  "Kalyan East",
  "Dombivli East",
  "Dombivli West",
  "Khadakpada",
  "Palava",
  "Manpada",
  "Titwala",
  "Ambernath",
  "Ulhasnagar",
  "Shahad",
  "Mumbra",
  "Diva",
  "Nilje",
  "Bhiwandi Bypass Region",
];

/* =========================================================
   INDUSTRIAL AREAS
========================================================= */

const industrialAreas = [
  "Kalyan-Dombivli Municipal Corporation",
  "MMRDA",
  "Maharashtra PWD",
  "Metro Rail Authorities",
  "Smart City Authorities",
  "Urban Development Departments",
  "Housing Authorities",
  "Railways",
  "MIDC",
  "Water Resource Departments",
];

/* =========================================================
   INDUSTRIAL SECTORS
========================================================= */

const industrialSectors = [
  "Engineering & Manufacturing",
  "Logistics & Warehousing",
  "Industrial Machinery",
  "Construction & Infrastructure",
  "HVAC Systems",
  "Electrical Equipment",
  "Industrial Automation",
  "Commercial Infrastructure",
  "Renewable Energy",
  "Facility Management",
];

const tenderOpportunities = [
  "Industrial Construction",
  "HVAC Systems",
  "Electrical Infrastructure",
  "Fire Fighting Systems",
  "Warehouse Infrastructure",
  "Water Treatment Plants",
  "Solar Projects",
  "Industrial Automation",
  "Smart Infrastructure",
  "Facility Management Contracts",
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
  "Metro connectivity expansion",
  "Smart urban modernization",
  "Township development",
  "Logistics ecosystem growth",
  "Road infrastructure projects",
  "Warehousing expansion",
  "Utility modernization",
  "Regional transport connectivity",
];

const futureBeneficiaries = [
  "Contractors",
  "OEMs",
  "MSMEs",
  "Infrastructure Companies",
  "EPC Firms",
  "Consultants",
  "Technology Providers",
  "Facility Management Companies",
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
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <h2
      className={`text-center text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
        dark ? "text-[#D4A017]" : "text-[#D4A017]"
      }`}
      style={{ fontFamily: serifFont }}
    >
      {children}
    </h2>
  );
}

/* =========================================================
   DARK CARD
========================================================= */

function DarkCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      className="
        relative
        z-10
        flex
        h-full
        flex-col
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-[#071B3B]
        p-6
        shadow-[0_10px_25px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-[0_20px_35px_rgba(0,0,0,0.22)]
        sm:p-7
      "
    >
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

        <div>

          <h1
            className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: serifFont }}
          >
            Tender Consultant in
            <br />

            <span className="text-[#D4A017]">
              Kalyan-Dombivli
            </span>
          </h1>

          <div className="my-6 h-[3px] w-full max-w-[581px] bg-[#D4A017]" />

          <p
            className="max-w-[590px] font-bold leading-7"
            style={{ fontFamily: serifFont }}
          >
            Maharashtra’s Rapidly Expanding Residential, Infrastructure &
            Industrial Growth Corridor
          </p>

          <p className="mt-5 max-w-[620px] text-[15px] leading-7 sm:text-base">
            Kalyan-Dombivli is one of the fastest-growing urban infrastructure
            and residential development regions within the Mumbai Metropolitan
            Region (MMR). Strategically located between Mumbai, Thane, Navi
            Mumbai, and major industrial corridors, Kalyan-Dombivli has emerged
            as a major center for infrastructure expansion, urban redevelopment,
            logistics connectivity, industrial support services, and smart
            mobility projects.
          </p>

        </div>

        {/* HERO IMAGE PLACEHOLDER */}

       <div className="flex justify-center lg:justify-end">
  <img
    src="/images/Kalyan-Dombivlihero.png"
    alt="Kalyan-Dombivli"
    className="h-[280px] w-full max-w-[709px] rounded-[20px] border-[3px] border-[#D4A017] object-cover shadow-[0_0_30px_rgba(0,0,0,0.75)] sm:h-[340px] lg:h-[360px]"
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

        <DarkCard title="Kalyan-Dombivli — Mumbai Metropolitan Region’s Expanding Infrastructure Ecosystem">

          <p className="mb-5 text-[#D4A017]">
            Over the past decade, Kalyan-Dombivli has witnessed massive public
            and private investments across:
          </p>

          <ul className="space-y-2">
            {[
              "Metro Rail Infrastructure",
              "Smart City Development",
              "Urban Redevelopment",
              "Residential & Township Projects",
              "Road & Flyover Expansion",
              "Water Infrastructure",
              "Industrial Connectivity",
              "Logistics & Warehousing",
              "Railway Modernization",
              "Public Utility Infrastructure",
            ].map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

        </DarkCard>

        <DarkCard title="Infrastructure Growth Drivers">

          <p className="mb-5 text-[#D4A017]">
            The region is becoming one of Maharashtra’s important
            infrastructure growth corridors because of continuous development
            activities driven by:
          </p>

          <ul className="space-y-2">
            {authorities.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <p className="mt-5">
            Large-scale projects including metro connectivity, road expansion,
            township development, logistics infrastructure, and smart urban
            modernization continue generating significant government tender
            opportunities across multiple sectors.
          </p>

        </DarkCard>

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

        <SectionTitle dark>
          Kalyan-Dombivli Infrastructure & Connectivity Overview
        </SectionTitle>

        <h3
          className="mt-5 text-center text-2xl font-bold text-white sm:text-3xl"
          style={{ fontFamily: serifFont }}
        >
          Kalyan-Dombivli City Snapshot
        </h3>

        <div className="mt-8 overflow-hidden rounded-[20px] bg-white shadow-xl">

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
              className="
                grid
                grid-cols-1
                border-b
                border-slate-300
                last:border-b-0
                sm:grid-cols-[42%_58%]
              "
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
========================================================= */

function EconomicOverview() {
  return (
    <section className="bg-white py-12 sm:py-14">

      <div className="mx-auto max-w-[1280px] px-5">

        <SectionTitle>
          Kalyan-Dombivli Economic Growth & Development Overview
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1000px] text-center font-bold leading-7 text-[#071B3B]">
          Kalyan-Dombivli continues to witness rapid urbanization,
          infrastructure modernization, and logistics ecosystem expansion.
        </p>

        <div className="mx-auto mt-9 grid max-w-[1100px] items-stretch gap-7 md:grid-cols-2">

          {economicCards.map((card) => (
            <DarkCard key={card.title} title={card.title}>

              <p className="mb-4 text-[#D4A017]">
                {card.intro}
              </p>

              <ul className="space-y-2.5">
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              {card.footerTitle && (
                <>
                  <p className="mt-6 text-[#D4A017]">
                    {card.footerTitle}
                  </p>

                  <ul className="mt-3 space-y-2">
                    {card.footerItems?.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </>
              )}

            </DarkCard>
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
    <section className="bg-white py-12">

      <div className="mx-auto max-w-[1340px] px-5">

        <SectionTitle>
          Kalyan-Dombivli Economic & Development Growth Timeline
        </SectionTitle>

        <h3
          className="mt-5 text-center text-2xl font-bold text-[#071B3B]"
          style={{ fontFamily: serifFont }}
        >
          Economic Growth, Infrastructure Expansion & Public Investment
        </h3>

        <div className="mt-8 overflow-x-auto pb-2">

          <div className="min-w-[950px] overflow-hidden rounded-[20px] border-[3px] border-[#071B3B] bg-[#071B3B]">

            <div className="grid grid-cols-[170px_minmax(0,1fr)_300px] border-b border-white/30 text-white">

              <div className="border-r border-white/30 p-5 font-semibold">
                Financial Year
              </div>

              <div className="border-r border-white/30 p-5 font-semibold">
                Major Growth & Infrastructure Highlights
              </div>

              <div className="p-5 text-center font-semibold">
                Estimated Public Infrastructure & Development Spending
              </div>

            </div>

            {timeline.map((item) => (
              <div
                key={item.year}
                className="grid grid-cols-[170px_minmax(0,1fr)_300px] border-b border-white/30 text-white last:border-b-0"
              >

                <div className="border-r border-white/30 p-5">
                  {item.year}
                </div>

                <div className="border-r border-white/30 p-5 leading-7">
                  {item.growth}
                </div>

                <div className="p-5 text-center font-bold leading-7 text-[#D4A017]">
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
    <section className="bg-white py-12">

      <div className="mx-auto max-w-[1350px] px-5">

        <SectionTitle>
          Major Mega Projects Driving Kalyan-Dombivli’s Growth
        </SectionTitle>

        <div className="mt-9 grid items-stretch gap-5 xl:grid-cols-4">

          {megaProjects.map((project) => (
            <div
              key={project.title}
              className="
                flex
                min-h-[360px]
                flex-col
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-[#071B3B]
                p-6
                shadow-[0_10px_25px_rgba(0,0,0,0.12)]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_20px_35px_rgba(0,0,0,0.24)]
              "
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

              {project.subIntro && (
                <>
                  <p className="mt-5 font-bold text-[#D4A017]">
                    {project.subIntro}
                  </p>

                  <ul className="mt-2 space-y-2 text-sm text-white">
                    {project.subItems?.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </>
              )}

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
    <section className="bg-white py-12">

      <div className="mx-auto max-w-[1150px] px-5">

        <SectionTitle>
          Government Development Spending & Tender Ecosystem
        </SectionTitle>

        <div className="mt-9 grid items-stretch gap-7 lg:grid-cols-2">

          <DarkCard title="Major Tender Generating Authorities">

            <ul className="space-y-3">
              {authorities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

          </DarkCard>

          <DarkCard title="Major Tender Categories">

            <ul className="space-y-3">
              {tenderCategories.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

          </DarkCard>

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
   WHY KALYAN-DOMBIVLI
========================================================= */

function WhyKalyanDombivli() {
  return (
    <section className="bg-[#071B3B] py-12 sm:py-14">

      <div className="mx-auto max-w-[1280px] px-5">

        <SectionTitle dark>
          Why Kalyan-Dombivli Is an Emerging Tender Market
        </SectionTitle>

        <div className="mt-9 grid items-stretch gap-7 lg:grid-cols-3">

          {whyCards.map((card) => (
            <div
              key={card.title}
              className="
                flex
                min-h-[450px]
                flex-col
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-white
                p-7
                shadow-[0_10px_25px_rgba(0,0,0,0.18)]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_20px_35px_rgba(0,0,0,0.28)]
              "
            >

              <h3
                className="mb-5 text-2xl font-bold leading-tight text-[#D4A017]"
                style={{ fontFamily: serifFont }}
              >
                {card.title}
              </h3>

              <p className="mb-4 font-bold text-[#D4A017]">
                {card.intro}
              </p>

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
   AREAS
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
========================================================= */

function IndustrialAreasSection() {
  return (
    <section className="bg-white py-12">

      <div className="mx-auto max-w-[1280px] px-5">

        <SectionTitle>
          Industrial Areas & Industrial Ecosystems We Serve Near Kalyan-Dombivli
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1065px] text-center font-bold leading-7 text-[#071B3B]">
          Tender Elite provides consultancy services across major industrial
          belts and logistics ecosystems near Kalyan-Dombivli.
        </p>

        <div className="mx-auto mt-8 flex max-w-[1200px] flex-wrap justify-center gap-5">

          {industrialAreas.map((area) => (
            <div
              key={area}
              className="
                flex
                min-h-[105px]
                w-full
                max-w-[280px]
                items-center
                justify-center
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-[#071B3B]
                px-5
                text-center
                text-[17px]
                font-semibold
                leading-6
                text-white
                shadow-[0_8px_18px_rgba(0,0,0,0.12)]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_18px_30px_rgba(7,27,59,0.24)]
              "
            >
              {area}
            </div>
          ))}

        </div>

        <div className="mt-7 flex justify-center">

          <Link
            href="/locations"
            className="
              rounded-[20px]
              bg-[#D4A017]
              px-9
              py-3
              font-bold
              text-[#071B3B]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
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

          <DarkCard title="Key Industrial Sectors">

            <p className="mb-4 text-[#D4A017]">
              These ecosystems support:
            </p>

            <ul className="space-y-3">
              {industrialSectors.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

          </DarkCard>

          <DarkCard title="Tender Opportunities Across Infrastructure Zones">

            <p className="mb-4 text-[#D4A017]">
              Major tender opportunities include:
            </p>

            <ul className="space-y-3">
              {tenderOpportunities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

          </DarkCard>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   INDUSTRIES
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
          Future Outlook of Kalyan-Dombivli Infrastructure & Tender Market
        </SectionTitle>

        <div
          className="
            mx-auto
            mt-9
            max-w-[1280px]
            rounded-[20px]
            border-[3px]
            border-[#D4A017]
            bg-[#071B3B]
            p-7
            md:p-10
          "
        >

          <h3
            className="text-2xl font-bold leading-tight text-[#D4A017] md:text-3xl"
            style={{ fontFamily: serifFont }}
          >
            Kalyan-Dombivli is expected to witness massive future growth
            through:
          </h3>

          <div className="mt-6 grid gap-x-14 gap-y-4 md:grid-cols-2">

            {futureGrowth.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-base leading-7 text-white md:text-lg"
              >
                <span className="text-[#D4A017]">•</span>
                <span>{item}</span>
              </div>
            ))}

          </div>

          <h3
            className="mt-9 text-2xl font-bold leading-tight text-[#D4A017] md:text-3xl"
            style={{ fontFamily: serifFont }}
          >
            This will continue generating high-value government tender
            opportunities across multiple sectors for:
          </h3>

          <div className="mt-6 grid gap-x-14 gap-y-4 md:grid-cols-2">

            {futureBeneficiaries.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-base leading-7 text-white md:text-lg"
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

        <div className="rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-6 py-10 text-center">

          <h2
            className="text-3xl font-bold leading-tight text-[#D4A017] sm:text-4xl"
            style={{ fontFamily: serifFont }}
          >
            Looking for Tender Consultant Services in Kalyan-Dombivli?
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] leading-7 text-white/85">
            Get professional tender consultancy, GeM registration, BOQ
            preparation, bid management and tender submission support across
            Kalyan-Dombivli.
          </p>

          <Link
            href="/contact"
            className="
              mt-7
              inline-flex
              rounded-[20px]
              border
              border-[#D4A017]
              bg-[#B71432]
              px-10
              py-4
              font-bold
              text-white
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_15px_28px_rgba(183,20,50,0.35)]
            "
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
            href="app/privacy-policy"
            className="transition-colors hover:text-[#D4A017]"
          >
            Privacy Policy
          </Link>

          <Link
            href="app/disclaimer"
            className="transition-colors hover:text-[#D4A017]"
          >
            Disclaimer
          </Link>

        </div>

      </div>

    </footer>
  );
}
/* =========================================================
   PAGE
========================================================= */

export default function KalyanDombivliPage() {
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

      <WhyKalyanDombivli />

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
export async function generateMetadata() {
  return withYoast("/locations/maharashtra/kalyan-dombivli", baseMetadata);
}
