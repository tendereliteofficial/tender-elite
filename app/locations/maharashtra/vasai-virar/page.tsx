import { withYoast } from "@/lib/yoast-seo";
import { slugToTitle as _s } from "@/lib/seo";

const baseMetadata = {
  title: `Tender Services in ${_s("vasai-virar")}, ${_s("maharashtra")}`,
  description: `Get local tender support in ${_s("vasai-virar")}, ${_s("maharashtra")}: tender search, GeM registration, bid preparation and submission by Tender Elite.`,
  alternates: { canonical: "/locations/maharashtra/vasai-virar" },
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
  ["City", "Vasai-Virar"],
  ["State", "Maharashtra"],
  ["Population", "12+ Lakh"],
  ["Economic Importance", "Residential, Industrial & Logistics Growth Hub"],
  ["Total Road Network", "1,200+ KM"],
  ["Railway Connectivity", "Western Railway & Vasai-Diva Connectivity"],
  ["Metropolitan Region", "Mumbai Metropolitan Region (MMR)"],
  ["Major Railway Stations", "Vasai Road, Nallasopara, Virar, Naigaon"],
  ["Industrial Importance", "Vasai Industrial Belt & Manufacturing Clusters"],
  ["Major Connectivity", "Mumbai, Thane, Gujarat & Palghar Corridor"],
  ["Coastal Connectivity", "Western Coastal Urban Corridor"],
];

/* =========================================================
   ECONOMIC OVERVIEW
========================================================= */

const economicCards = [
  {
    title:
      "Vasai-Virar has emerged as one of Maharashtra’s fastest-growing urban and infrastructure development regions with rapid expansion across:",
    items: [
      "Residential Infrastructure",
      "Smart Utilities",
      "Industrial Manufacturing",
      "Warehousing & Logistics",
      "Transport Connectivity",
      "Public Infrastructure",
      "Township Development",
      "Commercial Infrastructure",
      "Water & Sewerage Systems",
      "Utility Modernization",
    ],
  },
  {
    title: "The city contributes significantly to:",
    items: [
      "Mumbai Metropolitan housing ecosystem",
      "Industrial support infrastructure",
      "Logistics connectivity",
      "Commercial expansion",
      "Urban infrastructure growth",
    ],
  },
  {
    title: "Vasai-Virar continues attracting:",
    items: [
      "Residential development",
      "Industrial investments",
      "Logistics infrastructure",
      "Commercial projects",
      "Warehousing ecosystems",
    ],
    footer:
      "Which continue driving infrastructure and procurement demand across the region.",
  },
];

/* =========================================================
   TIMELINE
========================================================= */

const timeline = [
  { year: "2020–21", growth: "Healthcare upgrades, civic utility modernization, commercial stabilization", spending: "₹6,000+ Crore" },
  { year: "2021–22", growth: "Road redevelopment, housing expansion, water infrastructure upgrades", spending: "₹10,000+ Crore" },
  { year: "2022–23", growth: "Industrial ecosystem growth, transport modernization, civic infrastructure expansion", spending: "₹15,000+ Crore" },
  { year: "2023–24", growth: "Township projects, logistics ecosystem growth, drainage modernization", spending: "₹22,000+ Crore" },
  { year: "2024–25", growth: "Large-scale infrastructure investments across utilities, roads & urban redevelopment", spending: "₹30,000+ Crore" },
  { year: "2025–26", growth: "Smart infrastructure modernization & integrated transport ecosystem growth", spending: "₹40,000+ Crore (Projected)" },
  { year: "2026 & Beyond", growth: "Coastal infrastructure, logistics ecosystem & smart urban expansion", spending: "₹55,000+ Crore Expected Long-Term Investment Pipeline" },
];

/* =========================================================
   MEGA PROJECTS
========================================================= */

type MegaProject = {
  title: string;
  intro?: string;
  items: string[];
  footer?: string;
  subIntro?: string;
  subItems?: string[];
};

const megaProjects: MegaProject[] = [
  {
    title: "Urban Infrastructure Modernization",
    intro: "Continuous investments in:",
    items: ["Water supply systems", "Drainage modernization", "Sewage infrastructure", "Road redevelopment", "Civic infrastructure"],
    footer: "Are driving large-scale procurement opportunities.",
  },
  {
    title: "Residential & Township Expansion",
    intro: "Rapid township and residential growth across Virar, Nallasopara, Vasai and Naigaon is creating procurement demand for:",
    items: ["HVAC systems", "Electrical infrastructure", "Fire fighting systems", "Security systems", "Facility management"],
  },
  {
    title: "Railway & Regional Connectivity",
    intro: "Continues driving regional infrastructure and economic growth through:",
    items: ["Western Railway", "Vasai-Diva rail corridor", "Mumbai suburban network", "Residential growth", "Logistics expansion", "Commercial development"],
  },
  {
    title: "Industrial Ecosystem Growth",
    intro: "Eastern Vasai industrial ecosystems support:",
    items: ["Manufacturing", "Industrial engineering", "Warehousing", "Logistics support infrastructure"],
    footer: "With thousands of industrial units operating across the region.",
  },
];

/* =========================================================
   AUTHORITIES
========================================================= */

const authorities = [
  "Vasai Virar City Municipal Corporation (VVCMC)",
  "MMRDA",
  "Maharashtra PWD",
  "MIDC",
  "Smart City Authorities",
  "Urban Development Departments",
  "Railways",
  "Water Resource Departments",
  "Infrastructure Development Agencies",
  "Housing & Township Authorities",
];

const tenderCategories = [
  "Civil Construction", "Urban Infrastructure", "Water Supply & Drainage",
  "HVAC Works", "Electrical Engineering", "Fire Fighting Systems",
  "Smart City Infrastructure", "Security & Surveillance",
  "Railway Infrastructure", "Township Infrastructure",
  "Utility Modernization", "Facility Management",
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
  "Technical Bid Preparation", "Financial Bid Preparation", "Vendor Registration",
  "MSME Tender Consultancy", "Startup Tender Support", "E-Tendering Assistance",
  "DSC Assistance",
];

/* =========================================================
   WHY VASAI-VIRAR
========================================================= */

const whyVasaiVirarCards = [
  {
    title: "Massive Urban Expansion",
    intro: "Continuous investments in:",
    items: ["Roads", "Housing", "Utilities", "Smart infrastructure", "Transport connectivity", "Township development"],
    footer: "Are generating large-scale procurement opportunities.",
  },
  {
    title: "Strategic Mumbai Metropolitan Region Location",
    text: "Vasai-Virar acts as a major urban and industrial corridor connecting:",
    items: ["Mumbai", "Palghar", "Gujarat freight corridor", "Western coastal ecosystem"],
    footer: "Making it an important infrastructure growth region.",
  },
  {
    title: "Strong Residential & Industrial Growth",
    intro: "Rapid growth in:",
    items: ["Residential townships", "Industrial infrastructure", "Warehousing", "Commercial infrastructure", "Logistics ecosystems"],
    footer: "Continues driving tender opportunities across sectors.",
  },
];

/* =========================================================
   AREAS WE SERVE
========================================================= */

const areas = [
  "Vasai East", "Vasai West", "Virar East", "Virar West",
  "Nallasopara East", "Nallasopara West", "Naigaon", "Achole",
  "Pelhar", "Waliv", "Vasai Road", "Evershine City",
  "Global City", "Manickpur", "Papdy",
];

/* =========================================================
   INDUSTRIAL AREAS
========================================================= */

const industrialAreas = [
  "Vasai Industrial Belt", "Waliv Industrial Area", "Sativali Industrial Zone",
  "Pelhar Industrial Area", "Naigaon Industrial Ecosystem",
  "Bhiwandi Logistics Corridor", "Warehousing Corridors",
  "Manufacturing Clusters", "Commercial Infrastructure Ecosystems",
  "Palghar Industrial Connectivity Belt",
];

/* =========================================================
   INDUSTRIAL SECTORS
========================================================= */

const industrialSectors = [
  "Infrastructure", "IT & Software", "Pharmaceuticals", "Engineering",
  "Security Services", "Facility Management", "Manufacturing", "Healthcare",
  "Industrial Infrastructure", "Logistics & Warehousing",
];

const tenderOpportunities = [
  "Civil Construction", "Urban Infrastructure", "HVAC Systems",
  "Electrical Infrastructure", "Fire Fighting Systems",
  "Railway Infrastructure", "Industrial Infrastructure",
  "Water Treatment Plants", "Utility Modernization",
  "Smart City Infrastructure", "Security & Surveillance",
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
  "Smart urban modernization", "Township expansion",
  "Railway infrastructure upgrades", "Logistics ecosystem growth",
  "Industrial corridor development", "Utility modernization",
  "Coastal infrastructure projects", "Warehousing ecosystem expansion",
];

const futureBeneficiaries = [
  "Contractors", "OEMs", "MSMEs", "Infrastructure Companies",
  "EPC Firms", "Consultants", "Technology Providers",
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
      <div className="
          mx-auto grid min-h-[610px] max-w-[1440px] items-center gap-10
          px-6 py-14 lg:grid-cols-2 lg:px-10
        ">
        <div>
          <h1 className="text-5xl font-bold leading-[0.98] sm:text-6xl" style={{ fontFamily: serifFont }}>
            Tender Consultant in
            <br />
            <span className="text-[#D4A017]">Vasai-Virar</span>
          </h1>

          <div className="my-7 h-[3px] w-full max-w-[580px] bg-[#D4A017]" />

          <p className="mb-6 max-w-[580px] text-base font-bold leading-7" style={{ fontFamily: serifFont }}>
            Maharashtra’s Rapidly Expanding Residential, Industrial &
            Infrastructure Growth Corridor
          </p>

          <p className="max-w-[600px] text-base leading-7">
            Vasai-Virar is one of the fastest-growing urban infrastructure,
            residential, industrial, and logistics ecosystems within the
            Mumbai Metropolitan Region (MMR). Strategically located north of
            Mumbai in the Palghar district, Vasai-Virar has rapidly
            transformed from a suburban residential region into a major
            infrastructure and urban development corridor.
          </p>

          <p className="mt-5 max-w-[600px] text-base leading-7">
            Historically known for Vasai Fort heritage, industrial
            manufacturing, fishing communities, and the coastal economy,
            Vasai-Virar has evolved into a major infrastructure and urban
            development corridor.
          </p>

          <p className="mt-5 font-bold text-[#D4A017]">
            Vasai-Virar is widely known for:
          </p>

          <p className="mt-2 max-w-[600px] text-base leading-7">
            Vasai Fort heritage, Industrial manufacturing, Fishing
            communities, Coastal economy
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img src="/images/Vasai Virarhero.png" alt="Vasai-Virar"
            className="h-[360px] w-full max-w-[660px] rounded-[20px] border-[3px] border-[#D4A017] object-cover shadow-[0_0_30px_rgba(0,0,0,0.75)]"
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
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-[1100px] gap-7 px-5 md:grid-cols-2">
        <DarkBox title="Current Infrastructure Growth">
          <p className="mb-5 text-[#D4A017]">
            Today, Vasai-Virar continues to witness rapid urbanization and
            infrastructure growth with increasing investments across:
          </p>
          <ul className="space-y-2">
            {[
              "Smart City Infrastructure", "Residential & Township Development",
              "Metro & Railway Connectivity", "Industrial Infrastructure",
              "Warehousing & Logistics", "Water Supply & Sewerage Systems",
              "Road & Flyover Expansion", "Coastal Connectivity",
              "Public Utility Modernization", "Urban Redevelopment",
            ].map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </DarkBox>

        <DarkBox title="Tender Ecosystem">
          <p className="mb-5 text-[#D4A017]">
            The city continuously generates large-scale government and
            infrastructure tender opportunities through:
          </p>
          <ul className="space-y-2">
            {authorities.map((item) => <li key={item}>• {item}</li>)}
          </ul>
          <p className="mt-5">
            Tender Elite provides complete government tender consultancy, GeM
            registration, BOQ preparation, bid management, and tender
            submission services across Vasai-Virar.
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
          Vasai-Virar Infrastructure & Connectivity Overview
        </SectionTitle>

        <h3
          className="mt-4 text-center text-2xl font-bold text-white sm:text-3xl"
          style={{ fontFamily: serifFont }}
        >
          Vasai-Virar City Snapshot
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
          Vasai-Virar Economic Growth & Development Overview
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1000px] text-center text-lg font-bold leading-7 text-[#071B3B]">
          Vasai-Virar continues witnessing rapid commercial
          expansion, infrastructure modernization, and industrial
          support ecosystem growth.
        </p>

        <div className="mt-10 grid items-stretch gap-7 lg:grid-cols-3">
          {economicCards.map((card) => (
            <div
              key={card.title}
              className="
                flex
                h-[530px]
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
          Vasai-Virar Economic & Development Growth Timeline
        </SectionTitle>

        <h3
          className="mt-5 text-center text-2xl font-bold text-[#071B3B]"
          style={{ fontFamily: serifFont }}
        >
          Economic Growth, Infrastructure Expansion & Public
          Investment
        </h3>

        <div className="mt-8 overflow-x-auto">
          <div className="min-w-[980px] overflow-hidden rounded-[20px] border-[3px] border-[#071B3B] bg-[#071B3B]">
            <div className="grid grid-cols-[170px_1fr_320px] border-b border-white/30 text-white">
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
   4 EQUAL BOXES
========================================================= */

function MegaProjects() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-[1350px] px-5">
        <SectionTitle>
          Major Mega Projects Driving Vasai-Virar’s Growth
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
              h-[560px]
              flex-col
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
              h-[560px]
              flex-col
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
        <SectionTitle>Services Offered by Tender Elite in Vasai-Virar</SectionTitle>
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
   WHY VASAI-VIRAR
   ALL 3 SAME SIZE
========================================================= */

function WhyVasaiVirar() {
  return (
    <section className="bg-[#071B3B] py-14">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle dark>
          Why Vasai-Virar Is One of Maharashtra’s Fastest Growing
          Tender Markets
        </SectionTitle>

        <div className="mt-10 grid items-stretch gap-7 lg:grid-cols-3">
          {whyVasaiVirarCards.map((card) => (
            <div
              key={card.title}
              className="
                flex
                h-[500px]
                flex-col
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
        <SectionTitle>Areas We Serve in Vasai-Virar</SectionTitle>
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
          Industrial Areas & MIDC We Serve Near Vasai-Virar
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1060px] text-center text-base font-bold leading-7 text-[#071B3B]">
          Tender Elite provides consultancy services across major
          industrial ecosystems, commercial manufacturing zones,
          and logistics corridors near Vasai-Virar.
        </p>

        <div className="mx-auto mt-8 flex max-w-[1200px] flex-wrap justify-center gap-4">
          {industrialAreas.map((area) => (
            <div
              key={area}
              className="
                flex
                h-[100px]
                w-[280px]
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

/* =========================================================
   INDUSTRIAL SECTORS
========================================================= */

function IndustrialSectors() {
  const industrialSectors = [
    "Engineering & Manufacturing",
    "Logistics & Warehousing",
    "Industrial Machinery",
    "Construction & Infrastructure",
    "HVAC Systems",
    "Electrical Equipment",
    "Commercial Infrastructure",
    "Facility Management",
    "Utility Infrastructure",
    "Industrial Automation",
  ];

  const tenderOpportunities = [
    "Industrial Construction",
    "HVAC Systems",
    "Electrical Infrastructure",
    "Fire Fighting Systems",
    "Warehouse Infrastructure",
    "Water Treatment Plants",
    "Solar Projects",
    "Utility Modernization",
    "Smart Infrastructure",
    "Facility Management Contracts",
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1250px] px-5 sm:px-8">

        <div className="grid items-stretch gap-7 lg:grid-cols-2">

          {/* KEY INDUSTRIAL SECTORS */}
          <div
            className="
              flex
              min-h-[500px]
              flex-col
              rounded-[20px]
              border-[2px]
              border-[#D4A017]
              bg-[#071B3B]
              px-7
              py-7
              shadow-[0_8px_20px_rgba(0,0,0,0.15)]
              sm:px-8
              sm:py-8
            "
          >
            <h3
              className="text-[26px] font-bold leading-tight text-[#D4A017]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Key Industrial Sectors
            </h3>

            <p className="mt-6 text-[16px] text-white">
              These ecosystems support:
            </p>

            <ul className="mt-5 space-y-2">
              {industrialSectors.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[16px] leading-6 text-white"
                >
                  <span>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TENDER OPPORTUNITIES */}
          <div
            className="
              flex
              min-h-[500px]
              flex-col
              rounded-[20px]
              border-[2px]
              border-[#D4A017]
              bg-[#071B3B]
              px-7
              py-7
              shadow-[0_8px_20px_rgba(0,0,0,0.15)]
              sm:px-8
              sm:py-8
            "
          >
            <h3
              className="text-[26px] font-bold leading-tight text-[#D4A017]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Tender Opportunities Across
              <br />
              Infrastructure Zones
            </h3>

            <p className="mt-6 text-[16px] text-white">
              Major tender opportunities include:
            </p>

            {/* SINGLE COLUMN */}
            <ul className="mt-5 space-y-2">
              {tenderOpportunities.map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    items-start
                    gap-2
                    text-[16px]
                    leading-6
                    text-white
                  "
                >
                  <span className="shrink-0">•</span>
                  <span>{item}</span>
                </li>
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
          Future Outlook of Vasai-Virar Infrastructure & Tender Market
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
            Vasai-Virar is expected to witness massive future growth
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
            Vasai-Virar?
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-base leading-7 text-white/85">
            Get professional tender consultancy, GeM registration,
            BOQ preparation, bid management and tender submission
            support across Vasai-Virar.
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

export default function VasaiVirarPage() {
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

      <WhyVasaiVirar />

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
  return withYoast("/locations/maharashtra/vasai-virar", baseMetadata);
}
