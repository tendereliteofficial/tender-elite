"use client";

import Link from "next/link";
import { ReactNode } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about-us" },
];

const snapshotRows = [
  ["City", "Navi Mumbai"],
  ["State", "Maharashtra"],
  ["Population", "18+ Lakh"],
  ["Economic Importance", "Smart City, Logistics & Infrastructure Hub"],
  ["Total Road Network", "2,500+ KM"],
  ["Railway Connectivity", "Harbour Line & Trans-Harbour Connectivity"],
  ["Total Railway Stations", "50+ Major Stations"],
  ["Metro Connectivity", "Navi Mumbai Metro Operational & Expanding"],
  [
    "Total Airports",
    "1 Existing Regional Connectivity + Navi Mumbai International Airport",
  ],
  ["Major Airport Project", "Navi Mumbai International Airport"],
  ["Major Port Connectivity", "JNPT & Mumbai Port Connectivity"],
  [
    "Major Industrial Ecosystem",
    "TTC Industrial Area, Taloja MIDC, Rabale, Mahape",
  ],
  ["Logistics Importance", "India's Major Logistics & Warehousing Corridor"],
];

const timeline = [
  [
    "2020–21",
    "Healthcare infrastructure support, logistics stabilization, utility upgrades",
    "₹15,000+ Crore",
  ],
  [
    "2021–22",
    "Metro rail expansion, commercial infrastructure growth, road modernization",
    "₹24,000+ Crore",
  ],
  [
    "2022–23",
    "Airport development acceleration, warehousing ecosystem growth, industrial expansion",
    "₹36,000+ Crore",
  ],
  [
    "2023–24",
    "Smart city projects, transport modernization, logistics infrastructure upgrades",
    "₹48,000+ Crore",
  ],
  [
    "2024–25",
    "Large-scale airport ecosystem investments, metro expansion & utility modernization",
    "₹65,000+ Crore",
  ],
  [
    "2025–26",
    "Massive infrastructure growth across airport, metro, industrial & logistics ecosystems",
    "₹82,000+ Crore (Projected)",
  ],
  [
    "2026 & Beyond",
    "Smart business districts, airport influence zone growth & integrated infrastructure ecosystem",
    "₹1,00,000+ Crore Expected Long-Term Investment Pipeline",
  ],
];

const megaProjects = [
  {
    title: "Navi Mumbai International Airport",
    intro:
      "One of India’s largest airport infrastructure projects expected to transform:",
    items: [
      "Logistics",
      "Aviation",
      "Warehousing",
      "Commercial development",
      "Procurement ecosystem",
    ],
    footer: "Across the Mumbai Metropolitan Region.",
  },
  {
    title: "Navi Mumbai Metro",
    intro: "Metro expansion is improving:",
    items: [
      "Urban mobility",
      "Connectivity",
      "Smart infrastructure",
      "Regional transportation",
    ],
  },
  {
    title: "Airport Influence Notified Area (NAINA)",
    intro:
      "Large-scale planned urban infrastructure ecosystem focused on:",
    items: [
      "Integrated townships",
      "Logistics",
      "Commercial infrastructure",
      "Industrial growth",
      "Smart urban planning",
    ],
  },
  {
    title: "JNPT Logistics & Port Connectivity",
    intro: "Navi Mumbai benefits significantly from:",
    items: [
      "JNPT connectivity",
      "Freight movement",
      "Warehousing ecosystem",
      "Logistics infrastructure",
      "Industrial transportation",
    ],
  },
  {
    title: "Data Center & Commercial Infrastructure Growth",
    intro: "Navi Mumbai is becoming one of India’s emerging:",
    items: [
      "Data center ecosystems",
      "IT infrastructure hubs",
      "Digital infrastructure corridors",
    ],
  },
];

const tenderAuthorities = [
  "CIDCO",
  "Navi Mumbai Municipal Corporation (NMMC)",
  "MMRDA",
  "Maharashtra PWD",
  "MIDC",
  "Navi Mumbai Metro Authorities",
  "Airport Authorities",
  "Port Authorities",
  "Smart City Authorities",
  "Water Resource Departments",
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
  "Security & Surveillance",
  "IT Infrastructure",
  "Data Center Infrastructure",
  "Water Supply & Drainage",
];

/* 8 SERVICES */
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

const areas = [
  "Vashi",
  "Nerul",
  "Belapur",
  "Airoli",
  "Ghansoli",
  "Koparkhairane",
  "Sanpada",
  "Juinagar",
  "Turbhe",
  "Seawoods",
  "Kharghar",
  "Panvel",
  "Taloja",
  "Kamothe",
  "Ulwe",
];

const industrialAreas = [
  "Navi Mumbai Municipal Corporation (NMMC)",
  "MMRDA",
  "Maharashtra PWD",
  "Navi Mumbai Metro Authorities",
  "Airport Authorities",
  "Port Authorities",
  "Smart City Authorities",
  "CIDCO",
  "MIDC",
  "Water Resource Departments",
];

const industrialSectors = [
  "Logistics & Warehousing",
  "Data Centers",
  "Engineering & Manufacturing",
  "IT Infrastructure",
  "Commercial Infrastructure",
  "Industrial Automation",
  "Electrical Equipment",
  "Construction & Infrastructure",
  "Renewable Energy",
  "Smart Infrastructure",
];

const industrialOpportunities = [
  "Industrial Construction",
  "Logistics Infrastructure",
  "HVAC Systems",
  "Electrical Infrastructure",
  "Fire Fighting Systems",
  "Smart Warehousing",
  "Solar Projects",
  "Data Center Infrastructure",
  "Water Treatment Plants",
  "Facility Management Contracts",
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
  "Airport ecosystem expansion",
  "Metro rail modernization",
  "Smart city development",
  "Logistics infrastructure growth",
  "Warehousing expansion",
  "Commercial business districts",
  "Industrial corridor development",
  "Data center investments",
  "Integrated township development",
];

const futureBeneficiaries = [
  "Contractors",
  "OEMs",
  "MSMEs",
  "EPC Companies",
  "Consultants",
  "Infrastructure Companies",
  "Technology Providers",
  "Logistics Operators",
];

function SectionTitle({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <h2
      className={`text-center text-3xl font-bold leading-tight sm:text-4xl lg:text-[42px] ${
        dark ? "text-[#D4A017]" : "text-[#D4A017]"
      }`}
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
    >
      {children}
    </h2>
  );
}

function DarkCard({
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
      className={`rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 shadow-[0_10px_25px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.25)] sm:p-7 ${className}`}
    >
      <h3
        className="mb-5 text-xl font-bold leading-tight text-[#D4A017] sm:text-2xl"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        {title}
      </h3>

      <div className="text-[15px] leading-7 text-white">{children}</div>
    </div>
  );
}

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

function Hero() {
  return (
    <section className="bg-[#071B3B] text-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 lg:min-h-[595px] lg:grid-cols-2 lg:px-20">
        <div>
          <h1
            className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[52px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Tender Consultant in
            <br />
            <span className="text-[#D4A017]">Navi Mumbai</span>
          </h1>

          <div className="my-5 h-[2px] w-full max-w-[581px] bg-[#D4A017]" />

          <p
            className="max-w-[590px] font-bold leading-7"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Maharashtra&apos;s Planned Smart City, Logistics &amp;
            Infrastructure Growth Hub
          </p>

          <p className="mt-5 max-w-[590px] text-[15px] leading-7">
            Navi Mumbai is one of India&apos;s most strategically planned urban
            infrastructure and industrial development cities. Developed by
            CIDCO as a planned satellite city for Mumbai, Navi Mumbai has
            rapidly evolved into a major center for logistics, infrastructure,
            industrial development, IT parks, commercial hubs, warehousing,
            and smart urban expansion.
          </p>

          <p className="mt-5 max-w-[590px] text-[15px] leading-7">
            <span className="text-[#D4A017]">
              Located within the Mumbai Metropolitan Region (MMR), Navi Mumbai
              plays a critical role in Maharashtra&apos;s:
            </span>
            <br />
            <br />
            Logistics &amp; Warehousing Ecosystem, Port Connectivity, Industrial
            Infrastructure, Smart City Development, Urban Mobility, Data
            Center Investments, Commercial Infrastructure, Transport &amp;
            Freight Movement, Industrial Manufacturing, Real Estate
            Development.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/Navi Mumbaihero.png"
            alt="Navi Mumbai"
            className="h-auto w-full max-w-[654px] rounded-[20px] border-[3px] border-[#D4A017] object-cover shadow-[0_0_30px_rgba(0,0,0,0.75)]"
          />
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto grid max-w-[1100px] gap-7 px-5 md:grid-cols-2">
        <DarkCard title="Navi Mumbai — India’s Emerging Smart Infrastructure & Logistics Powerhouse">
          <p className="mb-5 text-[#D4A017]">
            Navi Mumbai is witnessing large-scale public and private
            investments across:
          </p>

          <ul className="space-y-2">
            {[
              "Navi Mumbai International Airport",
              "Metro Rail Expansion",
              "Coastal & Highway Connectivity",
              "Smart Infrastructure",
              "Warehousing & Logistics Parks",
              "Data Center Ecosystem",
              "Industrial Corridors",
              "Water & Utility Infrastructure",
              "Commercial Business Districts",
              "Integrated Township Development",
            ].map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </DarkCard>

        <DarkCard title="Infrastructure Growth & Tender Ecosystem">
          <p className="mb-5 text-[#D4A017]">
            The city has become one of India&apos;s fastest-growing procurement
            and infrastructure ecosystems with continuous tender opportunities
            generated through:
          </p>

          <ul className="space-y-2">
            {tenderAuthorities.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <p className="mt-5">
            Tender Elite provides complete government tender consultancy, GeM
            registration, BOQ preparation, bid management, and tender
            submission services across Navi Mumbai.
          </p>
        </DarkCard>
      </div>
    </section>
  );
}

function SnapshotSection() {
  return (
    <section className="bg-[#071B3B] py-12 sm:py-14">
      <div className="mx-auto max-w-[1100px] px-5">
        <SectionTitle dark>Navi Mumbai City Snapshot</SectionTitle>

        <div className="mt-8 overflow-hidden rounded-[20px] border-2 border-white bg-white">
          <div className="grid grid-cols-1 bg-white font-bold text-[#071B3B] sm:grid-cols-[42%_58%]">
            <div className="border-b border-slate-400 px-4 py-4 text-center sm:border-b-0 sm:border-r">
              Category
            </div>

            <div className="px-4 py-4 text-center">Details</div>
          </div>

          {snapshotRows.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-1 border-t border-slate-400 bg-white text-[#071B3B] sm:grid-cols-[42%_58%]"
            >
              <div className="border-b border-slate-400 px-4 py-3 text-center text-sm sm:border-b-0 sm:border-r">
                {label}
              </div>

              <div className="px-4 py-3 text-center text-sm">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EconomicOverview() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>
          Navi Mumbai Economic Growth &amp; Development Overview
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1250px] text-center font-bold leading-7 text-[#071B3B]">
          Navi Mumbai continues to witness massive infrastructure investments,
          logistics ecosystem expansion, airport development, and smart city
          modernization.
        </p>

        <div className="mt-9 grid gap-7 lg:grid-cols-3">
          <DarkCard title="Rapid Infrastructure & Logistics Growth">
            <p className="mb-4 text-[#D4A017]">
              Navi Mumbai is rapidly emerging as one of India&apos;s most
              important:
            </p>

            <ul className="space-y-2.5">
              {[
                "Smart Infrastructure Ecosystems",
                "Logistics Corridors",
                "Commercial Business Districts",
                "Industrial Development Regions",
                "Warehousing Hubs",
                "Data Center Markets",
                "Urban Mobility Networks",
              ].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard title="Strong Regional Economic Contribution">
            <p className="mb-4 text-[#D4A017]">
              The city contributes significantly to:
            </p>

            <ul className="space-y-2.5">
              {[
                "Mumbai Metropolitan logistics ecosystem",
                "Maharashtra’s infrastructure economy",
                "Industrial manufacturing",
                "Commercial real estate",
                "Freight transportation",
                "Warehousing & distribution",
              ].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard title="Large-Scale Investment Ecosystem">
            <p className="mb-4 text-[#D4A017]">
              Navi Mumbai is attracting large-scale investments in:
            </p>

            <ul className="space-y-2.5">
              {[
                "Logistics infrastructure",
                "Data centers",
                "IT parks",
                "Commercial complexes",
                "Airport-linked development",
                "Industrial manufacturing",
                "Transport infrastructure",
              ].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <p className="mt-5 text-[#D4A017]">
              Because of its strategic connectivity with:
            </p>

            <p className="mt-2">
              Mumbai
              <br />
              JNPT
              <br />
              Industrial belts
              <br />
              National highways
              <br />
              Freight corridors
            </p>
          </DarkCard>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1340px] px-5">
        <SectionTitle>
          Navi Mumbai Economic &amp; Development Growth Timeline
        </SectionTitle>

        <h3
          className="mt-5 text-center text-2xl font-bold text-[#071B3B]"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Economic Growth, Infrastructure Expansion &amp; Public Investment in
          Navi Mumbai
        </h3>

        <div className="mt-8 overflow-x-auto">
          <div className="min-w-[1000px] overflow-hidden rounded-[20px] border-[3px] border-[#071B3B] bg-[#071B3B]">
            <div className="grid grid-cols-[180px_minmax(0,1fr)_320px] border-b border-white/40 text-white">
              <div className="border-r border-white/40 p-5 font-semibold">
                Financial Year
              </div>

              <div className="border-r border-white/40 p-5 font-semibold">
                Major Growth &amp; Infrastructure Highlights
              </div>

              <div className="p-5 text-center font-semibold">
                Estimated Public Infrastructure &amp; Development Spending
              </div>
            </div>

            {timeline.map(([year, growth, spending]) => (
              <div
                key={year}
                className="grid grid-cols-[180px_minmax(0,1fr)_320px] border-b border-white/40 text-white last:border-b-0"
              >
                <div className="border-r border-white/40 p-5">{year}</div>

                <div className="border-r border-white/40 p-5 text-center leading-7">
                  {growth}
                </div>

                <div className="p-5 text-center font-bold leading-7 text-[#D4A017]">
                  {spending}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MegaProjectsSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1350px] px-5">
        <SectionTitle>
          Major Mega Projects Driving Navi-Mumbai&apos;s Growth
        </SectionTitle>

        <div className="mt-9 grid gap-5 xl:grid-cols-5">
          {megaProjects.map((project) => (
            <DarkCard
              key={project.title}
              title={project.title}
              className="min-h-[370px]"
            >
              <p className="mb-4 text-[#D4A017]">{project.intro}</p>

              <ul className="space-y-2">
                {project.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              {project.footer && (
                <p className="mt-5 border-t border-white/20 pt-4">
                  {project.footer}
                </p>
              )}
            </DarkCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function GovernmentSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1150px] px-5">
        <SectionTitle>
          Government Development Spending &amp; Tender Ecosystem
        </SectionTitle>

        <div className="mt-9 grid gap-7 lg:grid-cols-2">
          <DarkCard title="Major Tender Generating Authorities">
            <ul className="space-y-2.5">
              {tenderAuthorities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard title="Major Tender Categories">
            <ul className="space-y-2.5">
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

/* UPDATED SERVICES SECTION */
function ServicesSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>Services Offered by Tender Elite in Navi Mumbai</SectionTitle>
        <div className="mx-auto mt-8 grid max-w-[1160px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
{services.map((service) => (
  <Link
    key={service.name}
    href={service.link}
    className="flex min-h-[145px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-5 py-6 text-center text-lg font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(7,27,59,0.28)]"
    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
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

function WhyNaviMumbai() {
  const cards = [
    {
      title: "Massive Urban Infrastructure Expansion",
      intro: "Continuous investments in:",
      items: [
        "Airport infrastructure",
        "Metro rail",
        "Smart city projects",
        "Industrial corridors",
        "Logistics parks",
        "Commercial business districts",
      ],
      footer: "Are generating large-scale procurement opportunities.",
    },
    {
      title: "Strategic Logistics & Port Connectivity",
      intro: "Navi Mumbai’s connectivity with:",
      items: [
        "JNPT",
        "Mumbai",
        "Industrial belts",
        "National freight corridors",
      ],
      footer:
        "Makes it one of India’s most important logistics ecosystems.",
    },
    {
      title: "Strong Commercial & Industrial Growth",
      intro: "Rapid expansion of:",
      items: [
        "Data centers",
        "Warehousing",
        "Industrial manufacturing",
        "Commercial infrastructure",
        "Integrated townships",
      ],
      footer: "Continues driving high-value tender opportunities.",
    },
  ];

  return (
    <section className="bg-[#071B3B] py-12 sm:py-14">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle dark>
          Why Navi Mumbai Is One of India&apos;s Fastest Growing Tender Markets
        </SectionTitle>

        <div className="mt-9 grid gap-7 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[450px] flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.28)]"
            >
              <h3
                className="text-2xl font-bold leading-tight text-[#D4A017]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {card.title}
              </h3>

              <p className="mt-5 font-bold text-[#D4A017]">{card.intro}</p>

              <ul className="mt-4 space-y-3 text-[15px] leading-6 text-[#071B3B]">
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

function AreasSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>Areas We Serve in Navi Mumbai</SectionTitle>
        <p className="mt-5 text-center text-lg font-bold text-[#071B3B]">Tender Elite provides services across:</p>
        <div className="mx-auto mt-9 flex max-w-[1250px] flex-wrap justify-center gap-4">
          {areas.map((area) => (
            <Link
              key={area}
              href="/locations/maharashtra/"
              className="flex min-h-[80px] w-full max-w-[260px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-4 py-3 text-center font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
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
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>
          Industrial Areas &amp; MIDCs We Serve Near Navi Mumbai
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1065px] text-center font-bold leading-7 text-[#071B3B]">
          Tender Elite provides consultancy services across major industrial
          ecosystems, logistics corridors, and MIDCs near Navi Mumbai.
        </p>

        <h3
          className="mt-10 text-center text-3xl font-semibold text-[#D4A017]"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Major Industrial Areas &amp; Industrial Ecosystems
        </h3>

        <div className="mt-8 flex flex-wrap justify-center gap-5">
          {industrialAreas.map((area) => (
            <div
              key={area}
              className="group flex min-h-[105px] w-full max-w-[280px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-5 text-center text-lg font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 hover:text-white hover:shadow-[0_18px_30px_rgba(7,27,59,0.24)]"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustrialSectorsSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1150px] px-5">
        <div className="grid gap-7 lg:grid-cols-2">
          <DarkCard title="Key Industrial Sectors">
            <ul className="space-y-3">
              {industrialSectors.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard title="Tender Opportunities Across Industrial Zones">
            <p className="mb-4 text-[#D4A017]">
              Major tender opportunities include:
            </p>

            <ul className="space-y-3">
              {industrialOpportunities.map((item) => (
                <li key={item}>• {item}</li>
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
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
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
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>
          Future Outlook of Navi Mumbai Infrastructure &amp; Tender Market
        </SectionTitle>

        <div className="mt-9 rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-7 sm:p-10">
          <h3
            className="text-2xl font-bold text-[#D4A017] sm:text-3xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Navi Mumbai is expected to witness massive future growth through:
          </h3>

          <ul className="mt-6 grid gap-x-10 gap-y-3 text-base leading-7 text-white md:grid-cols-2">
            {futureGrowth.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <h3
            className="mt-9 text-2xl font-bold text-[#D4A017] sm:text-3xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            This will continue generating high-value government tender
            opportunities across multiple sectors for:
          </h3>

          <ul className="mt-6 grid gap-x-10 gap-y-3 text-base leading-7 text-white md:grid-cols-2">
            {futureBeneficiaries.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[900px] px-5">
        <div className="rounded-[20px] border-2 border-[#D4A017] bg-[#071B3B] px-6 py-10 text-center">
          <h2
            className="text-3xl font-bold text-[#D4A017] sm:text-4xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Looking for Tender Consultant Services in Navi Mumbai?
          </h2>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-[20px] border border-[#D4A017] bg-[#B71432] px-12 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-2 hover:text-white hover:shadow-[0_15px_28px_rgba(183,20,50,0.35)]"
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

export default function NaviMumbaiPage() {
  return (
    <main
      className="min-h-screen w-full overflow-x-hidden bg-white"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <Header />

      <Hero />

      <IntroSection />

      <SnapshotSection />

      <EconomicOverview />

      <TimelineSection />

      <MegaProjectsSection />

      <GovernmentSection />

      <ServicesSection />

      <WhyNaviMumbai />

      <AreasSection />

      <IndustrialAreasSection />

      <IndustrialSectorsSection />

      <IndustriesSection />

      <LocationsSection />

      <FutureOutlook />

      <CTA />

      <Footer />
    </main>
  );
}