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
  ["City", "Panvel"],
  ["State", "Maharashtra"],
  ["Population", "20+ Lakh (Panvel Region & Influence Zone)"],
  ["Economic Importance", "Airport, Logistics & Infrastructure Hub"],
  ["Total Road Network", "1,800+ KM"],
  ["Railway Connectivity", "Major Junction on Central & Harbour Lines"],
  ["Metro Connectivity", "Navi Mumbai Metro Expansion Connectivity"],
  ["Airport Infrastructure", "Navi Mumbai International Airport Influence Zone"],
  ["Highway Connectivity", "Mumbai–Pune Expressway & Sion-Panvel Highway"],
  ["Major Industrial Ecosystem", "Taloja MIDC, NAINA, Logistics Corridors"],
  ["Logistics Importance", "JNPT & Freight Connectivity Hub"],
  ["Total Railway Stations", "12+ Major Stations"],
];

/* =========================================================
   ECONOMIC OVERVIEW
========================================================= */

const economicCards = [
  {
    title:
      "Panvel is rapidly emerging as one of India’s strongest future-ready infrastructure and logistics ecosystems with continuous investments across:",
    items: [
      "Airport Infrastructure",
      "Logistics Parks",
      "Smart Urban Development",
      "Metro Rail Connectivity",
      "Industrial Ecosystems",
      "Warehousing Infrastructure",
      "Commercial Infrastructure",
      "Utility Modernization",
      "Real Estate & Township Development",
    ],
  },
  {
    title: "Panvel contributes significantly to:",
    items: [
      "Mumbai Metropolitan infrastructure growth",
      "Logistics & freight movement",
      "Industrial connectivity",
      "Airport-linked commercial development",
      "Warehousing ecosystem expansion",
    ],
  },
  {
    title: "The region is becoming a major destination for:",
    items: [
      "Infrastructure companies",
      "Logistics operators",
      "EPC contractors",
      "Commercial developers",
      "Industrial investors",
      "Warehousing companies",
    ],
    footer:
      "Because of its strategic regional connectivity and future infrastructure pipeline.",
  },
];

/* =========================================================
   TIMELINE
========================================================= */

const timeline = [
  { year: "2020–21", growth: "Healthcare infrastructure support, logistics stabilization, civic upgrades", spending: "₹8,000+ Crore" },
  { year: "2021–22", growth: "Airport infrastructure acceleration, township expansion, road modernization", spending: "₹14,000+ Crore" },
  { year: "2022–23", growth: "Metro connectivity, warehousing ecosystem growth, utility modernization", spending: "₹22,000+ Crore" },
  { year: "2023–24", growth: "Logistics infrastructure expansion, smart city development, transport upgrades", spending: "₹32,000+ Crore" },
  { year: "2024–25", growth: "Large-scale airport ecosystem investments & integrated infrastructure projects", spending: "₹45,000+ Crore" },
  { year: "2025–26", growth: "Massive infrastructure modernization across logistics, transport & smart urban ecosystems", spending: "₹60,000+ Crore (Projected)" },
  { year: "2026 & Beyond", growth: "Airport city ecosystem, integrated mobility infrastructure & commercial expansion", spending: "₹80,000+ Crore Expected Long-Term Investment Pipeline" },
];

/* =========================================================
   MEGA PROJECTS
========================================================= */

const megaProjects = [
  {
    title: "Navi Mumbai International Airport",
    intro: "One of India’s largest aviation infrastructure projects expected to transform:",
    items: ["Logistics", "Commercial infrastructure", "Freight movement", "Warehousing", "Procurement ecosystem"],
    footer: "Across the Mumbai Metropolitan Region.",
  },
  {
    title: "NAINA Development",
    intro: "The Navi Mumbai Airport Influence Notified Area (NAINA) is creating a massive planned infrastructure ecosystem focused on:",
    items: ["Smart townships", "Commercial infrastructure", "Logistics parks", "Industrial corridors", "Integrated urban planning"],
  },
  {
    title: "Metro Rail & Regional Connectivity",
    intro: "Metro rail and transport infrastructure projects are improving:",
    items: ["Urban mobility", "Airport connectivity", "Logistics transportation", "Regional accessibility"],
    footer: "Across Panvel and surrounding regions.",
  },
  {
    title: "Logistics & Warehousing Expansion",
    intro: "Panvel’s strategic connectivity with:",
    items: ["JNPT", "Mumbai", "Pune", "Industrial belts"],
    subIntro: "Is accelerating:",
    subItems: ["Logistics investments", "Warehousing infrastructure", "Freight ecosystem development"],
  },
];

/* =========================================================
   AUTHORITIES
========================================================= */

const authorities = [
  "CIDCO",
  "Panvel Municipal Corporation (PMC)",
  "MMRDA",
  "Maharashtra PWD",
  "Navi Mumbai Airport Authorities",
  "Metro Rail Authorities",
  "MIDC",
  "NHAI",
  "Smart City Authorities",
  "Urban Development Departments",
];

const tenderCategories = [
  "Civil Construction",
  "Airport Infrastructure",
  "Metro Rail Infrastructure",
  "Logistics Infrastructure",
  "HVAC Works",
  "Electrical Engineering",
  "Fire Fighting Systems",
  "Smart City Infrastructure",
  "Water Supply & Drainage",
  "Security & Surveillance",
  "Commercial Infrastructure",
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
   SERVICE EXTRA POINTS
========================================================= */

const additionalTenderServices = [
  "Technical Bid Preparation",
  "Financial Bid Preparation",
  "Vendor Registration",
  "MSME Tender Consultancy",
  "Startup Tender Support",
  "E-Tendering Assistance",
  "DSC Assistance",
];

/* =========================================================
   WHY ULHASNAGAR
========================================================= */

const whyPanvelCards = [
  {
    title: "Massive Airport & Infrastructure Investments",
    intro: "Continuous investments in:",
    items: [
      "Airport infrastructure",
      "Metro rail",
      "Smart city projects",
      "Township development",
      "Logistics infrastructure",
      "Warehousing corridors",
    ],
    footer: "Are generating large-scale procurement opportunities.",
  },
  {
    title: "Strategic Logistics & Regional Connectivity",
    text: "Panvel acts as a major gateway connecting:",
    items: ["Mumbai", "Navi Mumbai", "Pune", "JNPT", "Industrial corridors", "Freight ecosystems"],
    footer: "Making it one of Maharashtra’s most important infrastructure growth regions.",
  },
  {
    title: "Strong Commercial & Urban Expansion",
    intro: "Rapid growth in:",
    items: ["Commercial complexes", "Integrated townships", "Logistics parks", "Warehousing ecosystems", "Transport infrastructure"],
    footer: "Continues driving tender opportunities across multiple sectors.",
  },
];

/* =========================================================
   AREAS WE SERVE
========================================================= */

const areas = [
  "New Panvel", "Old Panvel", "Kamothe", "Kalamboli", "Kharghar", "Taloja",
  "Ulwe", "Roadpali", "Pushpak Nagar", "Khanda Colony", "Rasayani", "NAINA Region",
  "Seawoods Connectivity Region", "Palaspe", "JNPT Connectivity Belt",
];

/* =========================================================
   INDUSTRIAL AREAS
========================================================= */

const industrialAreas = [
  "Taloja MIDC",
  "TTC Industrial Area",
  "NAINA Infrastructure Zone",
  "JNPT Logistics Corridor",
  "Navi Mumbai Industrial Belt",
  "Kalamboli Logistics Ecosystem",
  "Rasayani Industrial Area",
  "Airport Influence Zone",
  "Commercial Infrastructure Ecosystems",
  "Warehousing & Freight Corridors",
];

/* =========================================================
   INDUSTRIAL SECTORS
========================================================= */

const industrialSectors = [
  "Logistics & Warehousing",
  "Construction & Infrastructure",
  "Industrial Manufacturing",
  "Commercial Infrastructure",
  "HVAC Systems",
  "Electrical Equipment",
  "Industrial Automation",
  "Renewable Energy",
  "Smart Infrastructure",
  "Facility Management",
];

const tenderOpportunities = [
  "Airport Infrastructure",
  "Warehouse Construction",
  "HVAC Systems",
  "Electrical Infrastructure",
  "Fire Fighting Systems",
  "Logistics Infrastructure",
  "Solar Projects",
  "Smart Infrastructure",
  "Utility Infrastructure",
  "Facility Management Contracts",
];

/* =========================================================
   INDUSTRIES WE SERVE
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
   LOCATIONS WE SERVE
   Source file contains these visible labels.
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
  "Airport ecosystem expansion",
  "Metro rail modernization",
  "Logistics infrastructure growth",
  "Smart city development",
  "Township expansion",
  "Commercial business districts",
  "Warehousing ecosystem modernization",
  "Transport connectivity projects",
  "Utility infrastructure expansion",
];

const futureBeneficiaries = [
  "Contractors",
  "OEMs",
  "MSMEs",
  "EPC Companies",
  "Infrastructure Companies",
  "Consultants",
  "Technology Providers",
  "Logistics Operators",
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
  size = "normal",
}: {
  children: ReactNode;
  dark?: boolean;
  size?: "normal" | "large";
}) {
  return (
    <h2
      className={`
        text-center
        font-bold
        leading-tight
        ${dark ? "text-[#D4A017]" : "text-[#D4A017]"}
        ${
          size === "large"
            ? "text-4xl sm:text-5xl"
            : "text-4xl sm:text-5xl"
        }
      `}
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
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-[#071B3B]
        p-7
        shadow-[0_10px_25px_rgba(0,0,0,0.12)]
        ${className}
      `}
    >
      <h3
        className="mb-5 text-2xl font-bold leading-tight text-[#D4A017]"
        style={{ fontFamily: serifFont }}
      >
        {title}
      </h3>

      <div className="text-[16px] leading-7 text-white">
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
      <div className="mx-auto grid min-h-0 max-w-[1440px] items-center gap-8 px-5 py-10 sm:px-6 sm:py-12 md:gap-10 lg:min-h-[610px] lg:grid-cols-2 lg:px-10 lg:py-14">
        <div>
          <h1 className="text-4xl font-bold leading-[0.98] sm:text-5xl md:text-6xl" style={{ fontFamily: serifFont }}>
            Tender Consultant in
            <br />
            <span className="text-[#D4A017]">Panvel</span>
          </h1>

          <div className="my-7 h-[3px] w-full max-w-[580px] bg-[#D4A017]" />

          <p className="mb-6 max-w-[580px] text-base font-bold leading-7" style={{ fontFamily: serifFont }}>
            Maharashtra’s Emerging Airport City, Infrastructure & Logistics Growth Hub
          </p>

          <p className="max-w-[600px] text-sm leading-6 sm:text-base sm:leading-7">
            Panvel is one of Maharashtra’s fastest-growing infrastructure, logistics, transport, and urban development ecosystems. Strategically located near Navi Mumbai and within the Mumbai Metropolitan Region (MMR), Panvel is rapidly transforming into a major smart infrastructure and industrial growth corridor because of large-scale investments in Navi Mumbai International Airport, Metro Rail Expansion, Logistics Infrastructure, Industrial Corridors, Smart City Development, Township Projects, Highway Connectivity, Railway Infrastructure, and Commercial Infrastructure.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img src="/images/Panvelhero.png" alt="Panvel" className="h-[280px] w-full max-w-[660px] sm:h-[320px] md:h-[340px] lg:h-[360px] rounded-[20px] border-[3px] border-[#D4A017] object-cover shadow-[0_0_30px_rgba(0,0,0,0.75)]" />
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
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-[1100px] gap-7 px-5 md:grid-cols-2">
        <DarkBox title="Panvel — Mumbai Metropolitan Region’s Future Infrastructure Gateway">
          <p className="mb-5 text-[#D4A017]">
            Panvel is emerging as one of India’s most important future urban infrastructure and procurement ecosystems due to its strategic connectivity with:
          </p>
          <ul className="space-y-2">
            {["Mumbai", "Navi Mumbai", "Pune", "JNPT", "Mumbai–Pune Expressway", "Samruddhi Corridor", "Industrial & Logistics Belts"].map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </DarkBox>

        <DarkBox title="Government & Private Tender Ecosystem">
          <p className="mb-5 text-[#D4A017]">
            The city is witnessing continuous government and private infrastructure investments through:
          </p>
          <ul className="space-y-2">
            {authorities.slice(0, 6).map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <p className="mt-5">
            Large-scale projects including airport infrastructure, metro rail, township development, warehousing corridors, and logistics modernization continue generating significant government tender opportunities across multiple sectors. Tender Elite provides complete government tender consultancy, GeM registration, BOQ preparation, bid management, and tender submission services across Panvel.
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
    <section className="bg-[#071B3B] py-14">
      <div className="mx-auto max-w-[1120px] px-5">
        <SectionTitle dark>
          Panvel Infrastructure & Connectivity Overview
        </SectionTitle>

        <h3
          className="mt-4 text-center text-2xl font-bold text-white sm:text-3xl"
          style={{ fontFamily: serifFont }}
        >
          Panvel City Snapshot
        </h3>

        <div className="mx-auto mt-8 overflow-hidden rounded-[20px] bg-white">
          <div className="grid grid-cols-1 border-b border-slate-300 sm:grid-cols-[42%_58%]">
            <div className="border-slate-300 px-5 py-3 text-center font-bold text-[#071B3B] sm:border-r">
              Category
            </div>

            <div className="px-5 py-3 text-center font-bold text-[#071B3B]">
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
              <div className="border-slate-300 px-5 py-2.5 text-center text-sm text-[#071B3B] sm:border-r">
                {label}
              </div>

              <div className="px-5 py-2.5 text-center text-sm text-[#071B3B]">
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
   ALL 3 SAME SIZE
========================================================= */

function EconomicOverview() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>
          Panvel Economic Growth & Development Overview
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1000px] text-center text-lg font-bold leading-7 text-[#071B3B]">
          Panvel continues witnessing rapid commercial
          expansion, infrastructure modernization, and industrial
          support ecosystem growth.
        </p>

        <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {economicCards.map((card) => (
            <div
              key={card.title}
              className="
                flex
                h-auto
                min-h-[560px]
                flex-col
                overflow-hidden
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-[#071B3B]
                p-7
                shadow-[0_10px_25px_rgba(0,0,0,0.12)]
              "
            >
              <h3
                className="mb-6 text-2xl font-bold leading-tight text-[#D4A017]"
                style={{ fontFamily: serifFont }}
              >
                {card.title}
              </h3>

              <ul className="space-y-3 text-[15px] leading-6 text-white">
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              {card.footer && (
                <div className="mt-auto border-t border-[#D4A017]/40 pt-5">
                  <p className="text-[15px] leading-7 text-white/90">
                    {card.footer}
                  </p>
                </div>
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
    <section className="bg-white py-14">
      <div className="mx-auto max-w-[1340px] px-5">
        <SectionTitle>
          Panvel Economic & Development Growth Timeline
        </SectionTitle>

        <h3
          className="mt-5 text-center text-2xl font-bold text-[#071B3B]"
          style={{ fontFamily: serifFont }}
        >
          Economic Growth, Infrastructure Expansion & Public
          Investment
        </h3>

        <div className="mt-8 overflow-x-auto pb-2">
          <div className="w-full min-w-[760px] overflow-hidden rounded-[20px] border-[3px] border-[#071B3B] bg-[#071B3B]">
            <div className="grid grid-cols-[150px_minmax(0,1fr)_270px] border-b border-white/30 text-white">
              <div className="border-r border-white/30 p-5 font-semibold">
                Financial Year
              </div>

              <div className="border-r border-white/30 p-5 font-semibold">
                Major Growth & Infrastructure Highlights
              </div>

              <div className="p-5 font-semibold">
                Estimated Public Infrastructure &
                Development Spending
              </div>
            </div>

            {timeline.map((item) => (
              <div
                key={item.year}
                className="grid grid-cols-[150px_minmax(0,1fr)_270px] border-b border-white/30 text-white last:border-b-0"
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
   4 EQUAL BOXES
========================================================= */

function MegaProjects() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-[1350px] px-5">
        <SectionTitle>
          Major Mega Projects Driving Panvel’s Growth
        </SectionTitle>

        <div className="mt-10 grid items-stretch gap-5 xl:grid-cols-4">
          {megaProjects.map((project) => (
            <div
              key={project.title}
              className="
                flex
                min-h-[310px]
                flex-col
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-[#071B3B]
                p-6
                shadow-[0_10px_25px_rgba(0,0,0,0.12)]
              "
            >
              <h3
                className="text-xl font-bold leading-tight text-[#D4A017]"
                style={{ fontFamily: serifFont }}
              >
                {project.title}
              </h3>

              {project.intro && (
                <p className="mt-5 font-bold text-[#D4A017]">
                  {project.intro}
                </p>
              )}

              <ul className="mt-4 space-y-2 text-sm leading-6 text-white">
                {project.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              {"subIntro" in project && project.subIntro && (
                <>
                  <p className="mt-4 font-bold text-white">
                    {project.subIntro}
                  </p>

                  <ul className="mt-2 space-y-2 text-sm leading-6 text-white">
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
   BOTH SAME SIZE
========================================================= */

function GovernmentDevelopment() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-[1150px] px-5">
        <SectionTitle>
          Government Development Spending & Tender Ecosystem
        </SectionTitle>

        <div className="mt-10 grid items-stretch gap-7 lg:grid-cols-2">
          <div
            className="
              flex
              h-auto
              min-h-0
              flex-col lg:h-[560px]
              overflow-hidden
              rounded-[20px]
              border-[3px]
              border-[#D4A017]
              bg-[#071B3B]
              p-7
            "
          >
            <h3
              className="mb-6 text-2xl font-bold text-[#D4A017]"
              style={{ fontFamily: serifFont }}
            >
              Major Tender Generating Authorities
            </h3>

            <ul className="space-y-3 text-[15px] leading-6 text-white">
              {authorities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div
            className="
              flex
              h-auto
              min-h-0
              flex-col lg:h-[560px]
              overflow-hidden
              rounded-[20px]
              border-[3px]
              border-[#D4A017]
              bg-[#071B3B]
              p-7
            "
          >
            <h3
              className="mb-6 text-2xl font-bold text-[#D4A017]"
              style={{ fontFamily: serifFont }}
            >
              Major Tender Categories
            </h3>

            <ul className="space-y-3 text-[15px] leading-6 text-white">
              {tenderCategories.map((item) => (
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
   SERVICES
   300 X 150 PX
========================================================= */

function ServicesSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>Services Offered by Tender Elite in Panvel</SectionTitle>
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
   WHY ULHASNAGAR
   ALL 3 SAME SIZE
========================================================= */

function WhyPanvel() {
  return (
    <section className="bg-[#071B3B] py-14">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle dark>
          Why Panvel Is One of Maharashtra’s Fastest Growing
          Tender Markets
        </SectionTitle>

        <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {whyPanvelCards.map((card) => (
            <div
              key={card.title}
              className="
                flex
                h-auto
                min-h-0
                flex-col lg:h-[500px]
                overflow-hidden
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-white
                p-7
                shadow-[0_10px_25px_rgba(0,0,0,0.18)]
              "
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
        <SectionTitle>Areas We Serve in Panvel</SectionTitle>
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
          Industrial Areas & MIDC We Serve Near Panvel
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1060px] text-center text-base font-bold leading-7 text-[#071B3B]">
          Tender Elite provides consultancy services across major
          industrial ecosystems, commercial manufacturing zones,
          and logistics corridors near Panvel.
        </p>

        <div className="mx-auto mt-8 flex max-w-[1200px] flex-wrap justify-center gap-4">
          {industrialAreas.map((area) => (
            <div
              key={area}
              className="
                flex
                min-h-[100px]
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
                duration-200
                hover:-translate-y-1
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
              shadow-[0_6px_15px_rgba(0,0,0,0.15)]
              transition-all
              hover:-translate-y-1
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
   BOTH SAME SIZE
========================================================= */

function IndustrialSectors() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1150px] px-5">
        <div className="grid items-stretch gap-7 lg:grid-cols-2">
          <div
            className="
              flex
              h-auto
              min-h-0
              flex-col lg:h-[560px]
              overflow-hidden
              rounded-[20px]
              border-[3px]
              border-[#D4A017]
              bg-[#071B3B]
              p-7
            "
          >
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

          <div
            className="
              flex
              h-auto
              min-h-0
              flex-col lg:h-[560px]
              overflow-hidden
              rounded-[20px]
              border-[3px]
              border-[#D4A017]
              bg-[#071B3B]
              p-7
            "
          >
            <h3
              className="mb-5 text-2xl font-bold leading-tight text-[#D4A017]"
              style={{ fontFamily: serifFont }}
            >
              Tender Opportunities Across Infrastructure Zones
            </h3>

            <p className="mb-4 text-[15px] text-[#D4A017]">
              Major tender opportunities include:
            </p>

            <ul className="space-y-3 text-[15px] leading-6 text-white">
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
   LOCATIONS WE SERVE
   270 X 195
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
    <section className="bg-white py-14">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>
          Future Outlook of Panvel Infrastructure & Tender Market
        </SectionTitle>

        <div
          className="
            mx-auto
            mt-10
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
            Panvel is expected to witness massive future growth
            through:
          </h3>

          <div className="mt-6 grid gap-x-14 gap-y-4 md:grid-cols-2">
            {futureGrowth.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-base leading-7 text-white md:text-lg"
              >
                <span className="text-[#D4A017]">
                  •
                </span>

                <span>{item}</span>
              </div>
            ))}
          </div>

          <h3
            className="mt-9 text-2xl font-bold leading-tight text-[#D4A017] md:text-3xl"
            style={{ fontFamily: serifFont }}
          >
            This will continue generating high-value government
            tender opportunities across multiple sectors for:
          </h3>

          <div className="mt-6 grid gap-x-14 gap-y-4 md:grid-cols-2">
            {futureBeneficiaries.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-base leading-7 text-white md:text-lg"
              >
                <span className="text-[#D4A017]">
                  •
                </span>

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
        <div
          className="
            rounded-[20px]
            border-[3px]
            border-[#D4A017]
            bg-[#071B3B]
            px-6
            py-10
            text-center
          "
        >
          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              text-[#D4A017]
              sm:text-4xl
            "
            style={{ fontFamily: serifFont }}
          >
            Looking for Tender Consultant Services in
            Panvel?
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-base leading-7 text-white/85">
            Get professional tender consultancy, GeM registration,
            BOQ preparation, bid management and tender submission
            support across Panvel.
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
              duration-200
              hover:-translate-y-1
              hover:border-[#8F1027]
              hover:bg-[#8F1027]
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

export default function PanvelPage() {
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

      <WhyPanvel />

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