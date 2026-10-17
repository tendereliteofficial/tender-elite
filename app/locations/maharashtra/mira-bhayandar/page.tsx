import { withYoast } from "@/lib/yoast-seo";
import { slugToTitle as _s } from "@/lib/seo";

const baseMetadata = {
  title: `Tender Services in ${_s("mira-bhayandar")}, ${_s("maharashtra")}`,
  description: `Get local tender support in ${_s("mira-bhayandar")}, ${_s("maharashtra")}: tender search, GeM registration, bid preparation and submission by Tender Elite.`,
  alternates: { canonical: "/locations/maharashtra/mira-bhayandar" },
};

import Link from "next/link";
import type { ReactNode } from "react";

const NAVY = "#071B3B";
const GOLD = "#D4A017";
const RED = "#B71432";
const serif = "Georgia, 'Times New Roman', serif";

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Insights", "/insights"],
  ["About Us", "/about-us"],
];

const snapshotRows = [
  ["City", "Mira-Bhayandar"],
  ["State", "Maharashtra"],
  ["Population", "15+ Lakh"],
  ["Economic Importance", "Urban Infrastructure & Residential Growth Hub"],
  ["Total Road Network", "1,500+ KM"],
  ["Railway Connectivity", "Western Railway Connectivity"],
  ["Total Railway Stations", "8+ Major Stations"],
  ["Metro Connectivity", "Metro Expansion Under Development"],
  ["Coastal Connectivity", "Mumbai Coastal Connectivity Region"],
  ["Major Connectivity", "Western Express Highway & Mumbai Connectivity"],
  ["Major Development Ecosystem", "Residential, Commercial & Utility Infrastructure"],
  ["Logistics Importance", "Mumbai Metropolitan Regional Connectivity Corridor"],
];

const economicCards = [
  {
    title: "Rapid Urban Infrastructure Growth",
    intro:
      "Mira-Bhayandar is rapidly emerging as one of the strongest urban infrastructure and residential development ecosystems within the Mumbai Metropolitan Region.",
    items: [
      "Smart Infrastructure",
      "Township Development",
      "Urban Mobility",
      "Commercial Expansion",
      "Water & Utility Infrastructure",
      "Road Redevelopment",
      "Coastal Connectivity",
      "Logistics Support Infrastructure",
      "Public Utility Modernization",
    ],
  },
  {
    title: "Strong Regional Economic Contribution",
    intro: "Mira-Bhayandar contributes significantly to:",
    items: [
      "Mumbai Metropolitan housing ecosystem",
      "Commercial expansion",
      "Urban infrastructure development",
      "Regional logistics connectivity",
      "Township ecosystem growth",
    ],
    footerTitle: "Because of its strategic connectivity with:",
    footerItems: [
      "Mumbai",
      "Thane",
      "Vasai-Virar",
      "Western Corridor",
      "Industrial & Commercial Belts",
    ],
  },
];

const timeline = [
  [
    "2020–21",
    "Healthcare upgrades, civic infrastructure stabilization, utility modernization",
    "₹5,000+ Crore",
  ],
  [
    "2021–22",
    "Road redevelopment, housing ecosystem growth, smart utility expansion",
    "₹8,000+ Crore",
  ],
  [
    "2022–23",
    "Urban redevelopment projects, drainage modernization, infrastructure upgrades",
    "₹12,000+ Crore",
  ],
  [
    "2023–24",
    "Metro connectivity planning, township growth, transport modernization",
    "₹17,000+ Crore",
  ],
  [
    "2024–25",
    "Large-scale investments in roads, housing, utilities & mobility infrastructure",
    "₹24,000+ Crore",
  ],
  [
    "2025–26",
    "Major smart infrastructure modernization & regional connectivity expansion",
    "₹32,000+ Crore (Projected)",
  ],
  [
    "2026 & Beyond",
    "Integrated urban ecosystem & coastal infrastructure growth",
    "₹45,000+ Crore Expected Long-Term Investment Pipeline",
  ],
];

const megaProjects = [
  {
    title: "Metro Rail Connectivity",
    intro:
      "Upcoming metro expansion projects are expected to significantly improve:",
    items: [
      "Urban mobility",
      "Regional transportation",
      "Commercial connectivity",
      "Infrastructure development",
    ],
    footer: "Across Mira-Bhayandar and nearby MMR regions.",
  },
  {
    title: "Urban Redevelopment & Township Expansion",
    intro:
      "Large-scale residential and commercial development projects are driving demand for:",
    items: [
      "HVAC systems",
      "Electrical infrastructure",
      "Fire fighting systems",
      "Security systems",
      "Facility management",
    ],
  },
  {
    title: "Smart Infrastructure Modernization",
    intro: "Continuous investments in:",
    items: [
      "Smart surveillance",
      "Utility modernization",
      "Drainage infrastructure",
      "Traffic management",
      "Digital governance",
    ],
    footer: "Are generating major procurement opportunities.",
  },
  {
    title: "Coastal & Highway Connectivity",
    intro: "Strategic connectivity with:",
    items: [
      "Western Express Highway",
      "Mumbai region",
      "Coastal corridors",
      "MMR infrastructure network",
    ],
    footer:
      "Is accelerating commercial and logistics ecosystem growth.",
  },
];

const authorities = [
  "Mira Bhayandar Municipal Corporation",
  "MMRDA",
  "Maharashtra PWD",
  "Metro Rail Authorities",
  "Smart City Authorities",
  "Urban Development Departments",
  "Housing Authorities",
  "Water Resource Departments",
  "Public Health Departments",
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

const whyCards = [
  {
    title: "Massive Urban Infrastructure Expansion",
    intro: "Continuous investments in:",
    items: [
      "Roads",
      "Metro connectivity",
      "Township development",
      "Public utilities",
      "Smart infrastructure",
      "Coastal connectivity",
    ],
    footer:
      "Are generating large-scale procurement opportunities.",
  },
  {
    title: "Strategic Mumbai Metropolitan Region Location",
    intro:
      "Mira-Bhayandar acts as a major urban growth corridor connecting:",
    items: [
      "Mumbai",
      "Thane",
      "Vasai-Virar",
      "Western suburban ecosystem",
    ],
    footer:
      "Making it an important infrastructure development region.",
  },
  {
    title: "Strong Residential & Commercial Development",
    intro: "Rapid growth in:",
    items: [
      "Residential townships",
      "Commercial complexes",
      "Hospitality infrastructure",
      "Logistics support services",
      "Utility infrastructure",
    ],
    footer:
      "Continues driving tender opportunities across multiple sectors.",
  },
];

const areas = [
  "Mira Road",
  "Bhayandar East",
  "Bhayandar West",
  "Kashimira",
  "Golden Nest",
  "Shanti Park",
  "Beverly Park",
  "Kanakia",
  "Uttan",
  "Dongri",
  "Poonam Sagar",
  "Jesal Park",
  "Maxus Mall Region",
  "Penkarpada",
  "Western Express Corridor",
];

const industrialAreas = [
  "Mira-Bhayandar Municipal Corporation",
  "MMRDA",
  "Maharashtra PWD",
  "Metro Rail Authorities",
  "Smart City Authorities",
  "Urban Development Departments",
  "Housing Authorities",
  "Water Resource Departments",
  "Public Health Departments",
];

const industrialSectors = [
  "Construction & Infrastructure",
  "Logistics & Warehousing",
  "Commercial Infrastructure",
  "HVAC Systems",
  "Electrical Equipment",
  "Facility Management",
  "Security Infrastructure",
  "Industrial Support Services",
  "Real Estate Development",
  "Utility Infrastructure",
];

const tenderOpportunities = [
  "Urban Construction",
  "HVAC Systems",
  "Electrical Infrastructure",
  "Fire Fighting Systems",
  "Water Infrastructure",
  "Smart Surveillance",
  "Solar Projects",
  "Utility Modernization",
  "Facility Management Contracts",
  "Smart Infrastructure Projects",
];

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

const futureGrowth = [
  "Metro connectivity expansion",
  "Smart urban modernization",
  "Township development",
  "Coastal infrastructure projects",
  "Logistics ecosystem growth",
  "Utility modernization",
  "Transport connectivity projects",
  "Commercial infrastructure expansion",
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

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-[5px] border-[#D4A017] bg-white">
      <div className="mx-auto flex min-h-[90px] max-w-[1440px] items-center gap-4 px-5 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <img src="/images/logo-mark.png" alt="Tender Elite Logo" className="h-16 w-20 object-contain" />
          <img src="/images/logo-wordmark.png" alt="Tender Elite" className="hidden w-44 object-contain sm:block md:w-48" />
        </Link>

        <nav className="ml-auto hidden items-center gap-3 lg:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="rounded-[20px] border border-white bg-[#D4A017] px-5 py-3 text-sm font-semibold text-black shadow-[0_6px_14px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_12px_22px_rgba(7,27,59,0.20)]"
            >
              {label}
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
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="block rounded-xl px-4 py-3 font-semibold text-[#071B3B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4A017] hover:text-white"
              >
                {label}
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
      style={{ fontFamily: serif }}
    >
      {children}
    </h2>
  );
}

function DarkCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="relative z-10 flex h-full flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 sm:p-7">
      <h3
        className="mb-5 text-2xl font-bold leading-tight text-[#D4A017]"
        style={{ fontFamily: serif }}
      >
        {title}
      </h3>

      <div className="text-[15px] leading-7 text-white sm:text-base">
        {children}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-[#071B3B] text-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div>
          <h1
            className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: serif }}
          >
            Tender Consultant in
            <br />
            <span className="text-[#D4A017]">Mira-Bhayandar</span>
          </h1>

          <div className="my-6 h-[3px] w-full max-w-[581px] bg-[#D4A017]" />

          <p
            className="max-w-[590px] font-bold leading-7"
            style={{ fontFamily: serif }}
          >
            Maharashtra’s Rapidly Growing Coastal Urban Infrastructure &
            Residential Development Hub
          </p>

          <p className="mt-5 max-w-[620px] text-[15px] leading-7 sm:text-base">
            Mira-Bhayandar is one of the fastest-growing urban infrastructure
            and residential development regions within the Mumbai Metropolitan
            Region (MMR). Strategically located near Mumbai, Thane, and
            Vasai-Virar, Mira-Bhayandar has rapidly evolved into a major center
            for residential expansion, urban infrastructure modernization,
            commercial development, logistics connectivity, and smart city
            growth.
          </p>

          <p className="mt-5 max-w-[620px] text-[15px] leading-7 sm:text-base">
            Historically developed as a major suburban growth region, the city
            continues to witness rapid expansion through metro connectivity,
            township development, commercial infrastructure, utility
            modernization, and regional transport projects.
          </p>

          <p className="mt-5 font-bold text-[#D4A017]">
            Mira-Bhayandar is widely known for:
          </p>

          <p className="mt-2 max-w-[620px] text-[15px] leading-7 sm:text-base">
            Residential townships, Commercial development, Urban
            infrastructure, Smart infrastructure, Coastal connectivity,
            Logistics support, Public utility modernization
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/Mira Bhayanderhero.png"
            alt="Mira-Bhayandar"
            className="h-[280px] w-full max-w-[664px] rounded-[20px] border-[3px] border-[#D4A017] object-cover shadow-[0_0_30px_rgba(0,0,0,0.75)] sm:h-[350px]"
          />
        </div>
      </div>
    </section>
  );
}

function DevelopmentIntro() {
  return (
    <section
      style={{ backgroundColor: "#ffffff", backgroundImage: "none" }}
      className="bg-white py-12 sm:py-14"
    >
      <div className="mx-auto grid max-w-[1100px] gap-7 px-5 md:grid-cols-2">
        <DarkCard title="Current Infrastructure Growth">
          <p className="mb-5 text-[#D4A017]">
            Today, the region continues to witness rapid urbanization and
            infrastructure growth with increasing investments across:
          </p>

          <ul className="space-y-2">
            {[
              "Urban Infrastructure Modernization",
              "Commercial Redevelopment",
              "Road & Utility Infrastructure",
              "Water Supply & Sewerage Systems",
              "Smart City Infrastructure",
              "Industrial Support Infrastructure",
              "Residential Redevelopment",
              "Logistics Connectivity",
              "Coastal Connectivity",
              "Public Utility Upgrades",
            ].map((x) => (
              <li key={x}>• {x}</li>
            ))}
          </ul>
        </DarkCard>

        <DarkCard title="Tender Ecosystem">
          <p className="mb-5 text-[#D4A017]">
            The city continuously generates large-scale government and
            infrastructure tender opportunities through:
          </p>

          <ul className="space-y-2">
            {authorities.map((x) => (
              <li key={x}>• {x}</li>
            ))}
          </ul>

          <p className="mt-5">
            Tender Elite provides complete government tender consultancy, GeM
            registration, BOQ preparation, bid management, and tender
            submission services across Mira-Bhayandar.
          </p>
        </DarkCard>
      </div>
    </section>
  );
}

function Snapshot() {
  return (
    <section className="bg-[#071B3B] py-12 sm:py-14">
      <div className="mx-auto max-w-[1160px] px-5">
        <SectionTitle dark>
          Mira-Bhayandar Infrastructure & Connectivity Overview
        </SectionTitle>

        <h3
          className="mt-5 text-center text-2xl font-bold text-white sm:text-3xl"
          style={{ fontFamily: serif }}
        >
          Mira-Bhayandar City Snapshot
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

          {snapshotRows.map(([a, b]) => (
            <div
              key={a}
              className="grid grid-cols-1 border-b border-slate-300 last:border-b-0 sm:grid-cols-[42%_58%]"
            >
              <div className="border-slate-300 px-4 py-3 text-center text-sm text-[#071B3B] sm:border-r">
                {a}
              </div>

              <div className="px-4 py-3 text-center text-sm text-[#071B3B]">
                {b}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EconomicOverview() {
  return (
    <section
      style={{ backgroundColor: "#ffffff", backgroundImage: "none" }}
      className="bg-white py-12 sm:py-14"
    >
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>
          Mira-Bhayandar Economic Growth & Development Overview
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1000px] text-center font-bold leading-7 text-[#071B3B]">
          Mira-Bhayandar continues to witness rapid urbanization,
          infrastructure modernization, and large-scale township growth.
        </p>

        <div className="mx-auto mt-9 grid max-w-[1100px] items-stretch gap-7 md:grid-cols-2">
          {economicCards.map((card) => (
            <DarkCard key={card.title} title={card.title}>
              <p className="mb-4 text-[#D4A017]">{card.intro}</p>

              <ul className="space-y-2.5">
                {card.items.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>

              {card.footerTitle && (
                <>
                  <p className="mt-6 text-[#D4A017]">
                    {card.footerTitle}
                  </p>

                  <ul className="mt-3 space-y-2">
                    {card.footerItems?.map((x) => (
                      <li key={x}>• {x}</li>
                    ))}
                  </ul>
                </>
              )}

              {card.footerTitle && (
                <>
                  <p className="mt-6 text-[#D4A017]">
                    {card.footerTitle}
                  </p>

                  <ul className="mt-3 space-y-2">
                    {card.footerItems?.map((x) => (
                      <li key={x}>• {x}</li>
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

function Timeline() {
  return (
    <section
      style={{ backgroundColor: "#ffffff", backgroundImage: "none" }}
      className="bg-white py-12"
    >
      <div className="mx-auto max-w-[1340px] px-5">
        <SectionTitle>
          Mira-Bhayandar Economic & Development Growth Timeline
        </SectionTitle>

        <h3
          className="mt-5 text-center text-2xl font-bold text-[#071B3B]"
          style={{ fontFamily: serif }}
        >
          Economic Growth, Infrastructure Expansion & Public Investment
        </h3>

        <div className="mt-8 overflow-x-auto pb-2">
          <div className="min-w-[950px] overflow-hidden rounded-[20px] bg-[#071B3B]">
            <div className="grid grid-cols-[170px_1fr_320px] border-b border-white/30 font-semibold text-white">
              <div className="border-r border-white/30 p-5">
                Financial Year
              </div>

              <div className="border-r border-white/30 p-5">
                Major Growth & Infrastructure Highlights
              </div>

              <div className="p-5">
                Estimated Public Infrastructure & Development Spending
              </div>
            </div>

            {timeline.map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-[170px_1fr_320px] border-b border-white/30 text-white last:border-0"
              >
                <div className="border-r border-white/30 p-5">
                  {row[0]}
                </div>

                <div className="border-r border-white/30 p-5 leading-7">
                  {row[1]}
                </div>

                <div className="p-5 font-bold text-[#D4A017]">
                  {row[2]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MegaProjects() {
  return (
    <section
      style={{ backgroundColor: "#ffffff", backgroundImage: "none" }}
      className="bg-white py-12"
    >
      <div className="mx-auto max-w-[1350px] px-5">
        <SectionTitle>
          Major Mega Projects Driving Mira-Bhayandar’s Growth
        </SectionTitle>

        <div className="mt-9 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {megaProjects.map((p) => (
            <DarkCard key={p.title} title={p.title}>
              <p className="text-[#D4A017]">{p.intro}</p>

              <ul className="mt-4 space-y-2">
                {p.items.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>

              {p.footer && (
                <p className="mt-6 border-t border-white/20 pt-4">
                  {p.footer}
                </p>
              )}
            </DarkCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function GovernmentDevelopment() {
  return (
    <section
      style={{ backgroundColor: "#ffffff", backgroundImage: "none" }}
      className="bg-white py-12"
    >
      <div className="mx-auto max-w-[1150px] px-5">
        <SectionTitle>
          Government Development Spending & Tender Ecosystem
        </SectionTitle>

        <div className="mt-9 grid items-stretch gap-7 lg:grid-cols-2">
          <DarkCard title="Major Tender Generating Authorities">
            <ul className="space-y-3">
              {authorities.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard title="Major Tender Categories">
            <ul className="space-y-3">
              {tenderCategories.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </DarkCard>
        </div>
      </div>
    </section>
  );
}

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
    style={{ fontFamily: serif }}
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

function WhyMiraBhayandar() {
  return (
    <section className="bg-[#071B3B] py-12 sm:py-14">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle dark>
          Why Mira-Bhayandar Is One of Maharashtra’s Fastest Growing Tender
          Markets
        </SectionTitle>

        <div className="mt-9 grid items-stretch gap-7 lg:grid-cols-3">
          {whyCards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[430px] flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-white p-6 sm:p-7"
            >
              <h3
                className="mb-5 text-2xl font-bold leading-tight text-[#D4A017]"
                style={{ fontFamily: serif }}
              >
                {card.title}
              </h3>

              <p className="mb-4 font-bold text-[#D4A017]">
                {card.intro}
              </p>

              <ul className="space-y-3 text-[15px] leading-6 text-[#071B3B]">
                {card.items.map((x) => (
                  <li key={x}>• {x}</li>
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
              style={{ fontFamily: serif }}
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

function IndustrialAreasSection() {
  return (
    <section
      style={{ backgroundColor: "#ffffff", backgroundImage: "none" }}
      className="bg-white py-12"
    >
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>
          Industrial Areas & MIDC We Serve Near Mira-Bhayandar
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1065px] text-center text-base font-bold leading-7 text-[#071B3B]">
          Tender Elite provides consultancy services across major industrial
          support ecosystems, commercial zones, and logistics corridors near
          Mira-Bhayandar.
        </p>

        <div className="mx-auto mt-8 flex max-w-[1200px] flex-wrap justify-center gap-5">
          {industrialAreas.map((x) => (
            <div
              key={x}
              className="flex min-h-[110px] w-full max-w-[280px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-5 py-5 text-center text-[17px] font-semibold leading-6 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(7,27,59,0.25)]"
            >
              {x}
            </div>
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <Link
            href="/locations"
            className="rounded-[20px] bg-[#D4A017] px-9 py-3 font-bold text-[#071B3B]"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

function IndustrialSectors() {
  return (
    <section
      style={{ backgroundColor: "#ffffff", backgroundImage: "none" }}
      className="bg-white py-12"
    >
      <div className="mx-auto max-w-[1150px] px-5">
        <div className="grid items-stretch gap-7 lg:grid-cols-2">
          <DarkCard title="Key Industrial Sectors">
            <p className="mb-4 text-[#D4A017]">
              These ecosystems support:
            </p>

            <ul className="space-y-3">
              {industrialSectors.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard title="Tender Opportunities Across Infrastructure Zones">
            <p className="mb-4 text-[#D4A017]">
              Major tender opportunities include:
            </p>

            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {tenderOpportunities.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </DarkCard>
        </div>
      </div>
    </section>
  );
}

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
      style={{ fontFamily: serif }}
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
function FutureOutlook() {
  return (
    <section
      style={{ backgroundColor: "#ffffff", backgroundImage: "none" }}
      className="bg-white py-12 sm:py-14"
    >
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>
          Future Outlook of Mira-Bhayandar Infrastructure & Tender Market
        </SectionTitle>

        <div className="mx-auto mt-9 max-w-[1280px] rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 sm:p-8 lg:p-10">
          <h3
            className="text-2xl font-bold text-[#D4A017] sm:text-3xl"
            style={{ fontFamily: serif }}
          >
            Mira-Bhayandar is expected to witness massive future growth
            through:
          </h3>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {futureGrowth.map((x) => (
              <div
                key={x}
                className="text-base leading-7 text-white sm:text-lg"
              >
                • {x}
              </div>
            ))}
          </div>

          <h3
            className="mt-9 text-2xl font-bold text-[#D4A017] sm:text-3xl"
            style={{ fontFamily: serif }}
          >
            This will continue generating high-value government tender
            opportunities across multiple sectors for:
          </h3>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {futureBeneficiaries.map((x) => (
              <div
                key={x}
                className="text-base leading-7 text-white sm:text-lg"
              >
                • {x}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      style={{ backgroundColor: "#ffffff", backgroundImage: "none" }}
      className="bg-white py-12"
    >
      <div className="mx-auto max-w-[900px] px-5">
        <div className="rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-6 py-10 text-center">
          <h2
            className="text-3xl font-bold leading-tight text-[#D4A017] sm:text-4xl"
            style={{ fontFamily: serif }}
          >
            Looking for Tender Consultant Services in Mira-Bhayandar?
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] leading-7 text-white/85">
            Get professional tender consultancy, GeM registration, BOQ
            preparation, bid management and tender submission support across
            Mira-Bhayandar.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-[20px] bg-[#B71432] px-10 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-[#8F0F29] hover:shadow-[0_14px_28px_rgba(143,15,41,0.38)] focus-visible:-translate-y-2 focus-visible:outline-none"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

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

export default function MiraBhayandarPage() {
  return (
    <main className="mira-page relative isolate min-h-screen w-full overflow-x-hidden bg-white">
      <Header />
      <Hero />
      <DevelopmentIntro />
      <Snapshot />
      <EconomicOverview />
      <Timeline />
      <MegaProjects />
      <GovernmentDevelopment />
      <ServicesSection />
      <WhyMiraBhayandar />
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
  return withYoast("/locations/maharashtra/mira-bhayandar", baseMetadata);
}
