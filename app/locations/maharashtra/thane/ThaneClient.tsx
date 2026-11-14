"use client";

import Link from "next/link";
import type { ReactNode } from "react";

const GOLD = "#D4A017";
const NAVY = "#071B3B";
const RED = "#B71432";
const SERIF = "Georgia, 'Times New Roman', serif";

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Insights", "/insights"],
  ["About Us", "/about-us"],
];

const snapshotRows = [
  ["City", "Thane"],
  ["State", "Maharashtra"],
  ["Population", "25+ Lakh"],
  ["Economic Importance", "Smart Infrastructure & Urban Growth Hub"],
  ["Total Road Network", "2,200+ KM"],
  ["Railway Connectivity", "Central Railway & Trans-Harbour Connectivity"],
  ["Total Railway Stations", "20+ Major Stations"],
  ["Metro Connectivity", "Multiple Metro Corridors Under Development"],
  ["Major Airport Project", "Navi Mumbai International Airport"],
  ["Major Connectivity", "Eastern Express Highway & Mumbai Connectivity"],
  ["Major Industrial Ecosystem", "Wagle Estate, TTC Belt, Rabale, Mahape"],
  ["Smart City Status", "Smart Urban Infrastructure Expansion"],
];

const timeline = [
  [
    "2020–21",
    "Healthcare infrastructure upgrades, utility stabilization, civic modernization",
    "₹12,000+ Crore",
  ],
  [
    "2021–22",
    "Road redevelopment, smart mobility projects, metro planning expansion",
    "₹18,000+ Crore",
  ],
  [
    "2022–23",
    "Metro corridor development, urban redevelopment & drainage modernization",
    "₹26,000+ Crore",
  ],
  [
    "2023–24",
    "Smart infrastructure projects, logistics ecosystem growth, township expansion",
    "₹34,000+ Crore",
  ],
  [
    "2024–25",
    "Large-scale investments in metro, roads, utilities & transport modernization",
    "₹45,000+ Crore",
  ],
  [
    "2025–26",
    "Massive urban infrastructure modernization & regional connectivity expansion",
    "₹58,000+ Crore (Projected)",
  ],
  [
    "2026 & Beyond",
    "Smart urban ecosystem expansion & integrated mobility infrastructure growth",
    "₹75,000+ Crore Expected Long-Term Investment Pipeline",
  ],
];

const megaProjects = [
  {
    title: "Thane Metro Expansion",
    text: "Multiple metro connectivity projects are transforming urban mobility and infrastructure development across Thane and the Mumbai Metropolitan Region.",
  },
  {
    title: "Road & Flyover Infrastructure",
    text: "Major road widening, flyover construction, and urban connectivity projects are improving regional transportation infrastructure.",
  },
  {
    title: "Smart City & Urban Mobility Projects",
    intro: "Large-scale investments in:",
    items: [
      "Intelligent traffic systems",
      "Smart surveillance",
      "Digital governance",
      "Mobility infrastructure",
      "Utility modernization",
    ],
    footer: "Are driving procurement opportunities.",
  },
  {
    title: "Real Estate & Township Expansion",
    intro: "Large-scale township and commercial development projects are driving:",
    items: [
      "HVAC tenders",
      "Electrical works",
      "Fire fighting systems",
      "Facility management",
      "Smart infrastructure procurement",
    ],
  },
  {
    title: "Logistics & Warehousing Ecosystem",
    intro: "Thane’s proximity to:",
    items: [
      "Mumbai",
      "Navi Mumbai",
      "JNPT",
      "Industrial corridors",
    ],
    footer:
      "Is accelerating warehousing and logistics infrastructure investments.",
  },
];

const authorities = [
  "Thane Municipal Corporation (TMC)",
  "MMRDA",
  "Maharashtra PWD",
  "CIDCO",
  "Metro Rail Authorities",
  "MIDC",
  "Smart City Authorities",
  "Urban Development Departments",
  "Water Resource Departments",
  "Public Health Departments",
];

const tenderCategories = [
  "Civil Construction",
  "Metro Rail Infrastructure",
  "HVAC Works",
  "Electrical Engineering",
  "Fire Fighting Systems",
  "Smart City Infrastructure",
  "Water Supply & Drainage",
  "Security & Surveillance",
  "IT Infrastructure",
  "Facility Management",
  "Urban Mobility Projects",
  "Renewable Energy Infrastructure",
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

const areas = [
  "Ghodbunder Road",
  "Wagle Estate",
  "Majiwada",
  "Vartak Nagar",
  "Pokhran Road",
  "Kasarvadavali",
  "Hiranandani Estate",
  "Kolshet",
  "Kalwa",
  "Mumbra",
  "Balkum",
  "Manpada",
  "Thane West",
  "Thane East",
  "Teen Hath Naka",
];

const industrialAreas = [
  "Thane Municipal Corporation (TMC)",
  "MMRDA",
  "Maharashtra PWD",
  "Metro Rail Authorities",
  "Urban Development Departments",
  "Public Health Departments",
  "Smart City Authorities",
  "MIDC",
  "CIDCO",
  "Water Resource Departments",
];

const industrialSectors = [
  "Engineering & Manufacturing",
  "Logistics & Warehousing",
  "Data Centers",
  "Industrial Machinery",
  "Construction & Infrastructure",
  "Electrical Equipment",
  "HVAC Systems",
  "Industrial Automation",
  "Renewable Energy",
  "Commercial Infrastructure",
];

const industrialOpportunities = [
  "Industrial Construction",
  "HVAC Systems",
  "Electrical Infrastructure",
  "Warehouse Infrastructure",
  "Fire Fighting Systems",
  "Water Treatment Plants",
  "Solar Projects",
  "Industrial Automation",
  "Smart Infrastructure",
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
  "Metro rail expansion",
  "Integrated urban mobility",
  "Township development",
  "Logistics infrastructure growth",
  "Smart city modernization",
  "Warehousing ecosystem expansion",
  "Commercial infrastructure development",
  "Utility modernization",
  "Transport connectivity projects",
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

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-center text-3xl font-bold leading-tight text-[#D4A017] sm:text-4xl lg:text-[42px]"
      style={{ fontFamily: SERIF }}
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
    <div className="flex h-full flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 shadow-[0_10px_25px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.25)] sm:p-7">
      <h3
        className="mb-5 text-xl font-bold leading-tight text-[#D4A017] sm:text-2xl"
        style={{ fontFamily: SERIF }}
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


function Hero() {
  return (
    <section className="bg-[#071B3B] text-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 lg:min-h-[595px] lg:grid-cols-2 lg:px-20">
        <div>
          <h1
            className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[52px]"
            style={{ fontFamily: SERIF }}
          >
            Tender Consultant in
            <br />
            <span className="text-[#D4A017]">Thane</span>
          </h1>

          <div className="my-5 h-[2px] w-full max-w-[581px] bg-[#D4A017]" />

          <p
            className="max-w-[590px] font-bold leading-7"
            style={{ fontFamily: SERIF }}
          >
            Maharashtra’s Rapidly Growing Smart Infrastructure & Urban
            Development Hub
          </p>

          <p className="mt-5 max-w-[620px] text-[15px] leading-7">
            Thane is one of Maharashtra’s fastest-growing metropolitan cities
            and one of the most important urban infrastructure, real estate,
            logistics, and smart mobility ecosystems within the Mumbai
            Metropolitan Region (MMR). Strategically located near Mumbai,
            Thane has rapidly evolved from a residential satellite city into a
            major commercial, industrial, and infrastructure development
            center.
          </p>

          <p className="mt-5 max-w-[620px] text-[15px] leading-7">
            <span className="font-bold text-[#D4A017]">
              Popularly known as the “City of Lakes,”
            </span>
            Thane has become an important destination for infrastructure,
            commercial, logistics, urban mobility and smart-city development.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/Thanehero.png"
            alt="Thane"
            className="h-auto w-full max-w-[665px] rounded-[20px] border-[3px] border-[#D4A017] object-cover shadow-[0_0_30px_rgba(0,0,0,0.75)]"
          />
        </div>
      </div>
    </section>
  );
}

function DevelopmentIntro() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto grid max-w-[1280px] gap-7 px-5 lg:grid-cols-2">
        <DarkCard title="Current Infrastructure Growth">
          <p className="mb-5 text-[#D4A017]">
            Thane today is witnessing large-scale investments across:
          </p>

          <ul className="space-y-2">
            {[
              "Metro Rail Infrastructure",
              "Smart City Development",
              "Urban Mobility Projects",
              "Real Estate & Township Development",
              "Logistics & Warehousing",
              "Water Infrastructure",
              "Road & Flyover Expansion",
              "Industrial Development",
              "Commercial Infrastructure",
              "Public Utility Modernization",
            ].map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </DarkCard>

        <DarkCard title="Tender Ecosystem">
          <p className="mb-5 text-[#D4A017]">
            Thane has become one of the strongest emerging government
            procurement and infrastructure ecosystems in the Mumbai
            Metropolitan Region because of continuous investments by:
          </p>

          <ul className="grid gap-2 sm:grid-cols-2">
            {authorities.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <p className="mt-5">
            Major infrastructure projects including metro connectivity, coastal
            connectivity, road modernization, urban redevelopment, and
            logistics expansion continue generating large-scale government
            tender opportunities across multiple sectors.
          </p>
        </DarkCard>
      </div>
    </section>
  );
}

function SnapshotSection() {
  return (
    <section className="bg-[#071B3B] py-12 sm:py-14">
      <div className="mx-auto max-w-[1160px] px-5">
        <SectionTitle>Thane City Snapshot</SectionTitle>

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

function EconomicOverview() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>
          Thane Economic Growth & Development Overview
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1000px] text-center font-bold leading-7 text-[#071B3B]">
          Thane continues to witness rapid infrastructure modernization, metro
          expansion, smart city development, and logistics ecosystem growth.
        </p>

        <div className="mt-9 grid items-stretch gap-7 lg:grid-cols-3">
          <DarkCard title="Rapid Urban & Infrastructure Growth">
            <p className="mb-4 text-[#D4A017]">
              Thane has emerged as one of Maharashtra’s most rapidly developing
              urban economies with continuous investments across:
            </p>

            <ul className="space-y-2.5">
              {[
                "Smart Infrastructure",
                "Real Estate Development",
                "Metro Rail Expansion",
                "Urban Mobility",
                "Commercial Development",
                "Logistics & Warehousing",
                "Industrial Ecosystems",
                "Public Utility Infrastructure",
                "Water & Sewage Modernization",
              ].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard title="Regional Economic Contribution">
            <p className="mb-4 text-[#D4A017]">
              The city contributes significantly to the Mumbai Metropolitan
              Region’s:
            </p>

            <ul className="space-y-2.5">
              {[
                "Infrastructure economy",
                "Real estate sector",
                "Logistics ecosystem",
                "Commercial development",
                "Industrial ecosystem",
              ].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard title="Emerging Business Destination">
            <p className="mb-4 text-[#D4A017]">
              Thane is also becoming a major destination for:
            </p>

            <ul className="space-y-2.5">
              {[
                "IT parks",
                "Business centers",
                "Warehousing",
                "Data centers",
                "Industrial support services",
              ].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <p className="mt-5">
              Because of its strategic proximity to Mumbai and Navi Mumbai.
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
        <SectionTitle>Thane Economic & Development Growth Timeline</SectionTitle>

        <h3
          className="mt-5 text-center text-2xl font-bold text-[#071B3B]"
          style={{ fontFamily: SERIF }}
        >
          Economic Growth, Infrastructure Expansion & Public Investment in
          Thane
        </h3>

        <div className="mt-8 overflow-x-auto pb-2">
          <div className="min-w-[1050px] overflow-hidden rounded-[20px] bg-[#071B3B]">
            <div className="grid grid-cols-[180px_minmax(0,1fr)_320px] border-b border-white/30 font-semibold text-white">
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

            {timeline.map(([year, growth, spending]) => (
              <div
                key={year}
                className="grid grid-cols-[180px_minmax(0,1fr)_320px] border-b border-white/30 text-white last:border-0"
              >
                <div className="border-r border-white/30 p-5">{year}</div>
                <div className="border-r border-white/30 p-5 leading-7">
                  {growth}
                </div>
                <div className="p-5 font-bold leading-7 text-[#D4A017]">
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
        <SectionTitle>Major Mega Projects Driving Thane’s Growth</SectionTitle>

        <div className="mt-9 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {megaProjects.map((project) => (
            <DarkCard key={project.title} title={project.title}>
              {"intro" in project && project.intro && (
                <p className="text-[#D4A017]">{project.intro}</p>
              )}

              {project.items ? (
                <ul className="mt-4 space-y-2">
                  {project.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              ) : (
                <p className="leading-7">{project.text}</p>
              )}

              {project.footer && (
                <p className="mt-6 border-t border-white/20 pt-4">
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
          Government Development Spending & Tender Ecosystem
        </SectionTitle>

        <div className="mt-9 grid items-stretch gap-7 lg:grid-cols-2">
          <DarkCard title="Major Tender Generating Authorities">
            <ul className="space-y-2.5">
              {authorities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard title="Major Tender Categories">
            <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
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

function ServicesSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>Services Offered by Tender Elite in Thane</SectionTitle>
        <div className="mx-auto mt-8 grid max-w-[1160px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
{services.map((service) => (
  <Link
    key={service.name}
    href={service.link}
    className="flex min-h-[145px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-5 py-6 text-center text-lg font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(7,27,59,0.28)]"
    style={{ fontFamily: SERIF }}
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

function WhyThane() {
  const cards = [
    {
      title: "Massive Infrastructure Investments",
      intro: "Continuous investments in:",
      items: [
        "Metro rail",
        "Roads & flyovers",
        "Urban redevelopment",
        "Logistics infrastructure",
        "Smart mobility",
        "Public utilities",
      ],
      footer: "Are generating large-scale tender opportunities.",
    },
    {
      title: "Strategic Mumbai Metropolitan Region Location",
      intro: "Thane’s connectivity with:",
      items: [
        "Mumbai",
        "Navi Mumbai",
        "Industrial corridors",
        "Logistics ecosystems",
      ],
      footer:
        "Makes it one of Maharashtra’s most important procurement regions.",
    },
    {
      title: "Strong Commercial & Industrial Growth",
      intro: "Rapid growth in:",
      items: [
        "Commercial infrastructure",
        "Warehousing",
        "Industrial support services",
        "Township development",
        "Smart infrastructure",
      ],
      footer:
        "Continues driving government and private procurement activities.",
    },
  ];

  return (
    <section className="bg-[#071B3B] py-12 sm:py-14">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>
          Why Thane Is One of Maharashtra’s Fastest Growing Tender Markets
        </SectionTitle>

        <div className="mt-9 grid items-stretch gap-7 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[430px] flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.28)]"
            >
              <h3
                className="text-2xl font-bold leading-tight text-[#D4A017]"
                style={{ fontFamily: SERIF }}
              >
                {card.title}
              </h3>

              <p className="mt-5 font-bold text-[#D4A017]">
                {card.intro}
              </p>

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
        <SectionTitle>Areas We Serve in Thane</SectionTitle>
        <p className="mt-5 text-center text-lg font-bold text-[#071B3B]">Tender Elite provides services across:</p>
        <div className="mx-auto mt-9 flex max-w-[1250px] flex-wrap justify-center gap-4">
          {areas.map((area) => (
            <Link
              key={area}
              href="/locations/maharashtra/"
              className="flex min-h-[80px] w-full max-w-[260px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-4 py-3 text-center font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2"
              style={{ fontFamily: SERIF }}
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
          Industrial Areas & Industrial Ecosystems We Serve Near Thane
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1065px] text-center font-bold leading-7 text-[#071B3B]">
          Tender Elite provides consultancy services across major industrial
          zones, logistics ecosystems, and business corridors near Thane.
        </p>

        <h3
          className="mt-10 text-center text-3xl font-semibold text-[#D4A017]"
          style={{ fontFamily: SERIF }}
        >
          Major Industrial Areas & Industrial Ecosystems
        </h3>

        <div className="mx-auto mt-8 flex max-w-[1200px] flex-wrap justify-center gap-5">
          {industrialAreas.map((area) => (
            <div
              key={area}
              className="flex min-h-[105px] w-full max-w-[280px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-5 text-center text-lg font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_30px_rgba(7,27,59,0.24)]"
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
        <div className="grid items-stretch gap-7 lg:grid-cols-2">
          <DarkCard title="Key Industrial Sectors">
            <p className="mb-4 text-[#D4A017]">
              These industrial ecosystems support:
            </p>

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

            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
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
      style={{ fontFamily: SERIF }}
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
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>
          Future Outlook of Thane Infrastructure & Tender Market
        </SectionTitle>

        <div className="mt-9 rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-7 sm:p-10">
          <h3
            className="text-2xl font-bold text-[#D4A017] sm:text-3xl"
            style={{ fontFamily: SERIF }}
          >
            Thane is expected to witness massive future growth through:
          </h3>

          <ul className="mt-6 grid gap-x-10 gap-y-3 text-base leading-7 text-white md:grid-cols-2">
            {futureGrowth.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <h3
            className="mt-9 text-2xl font-bold text-[#D4A017] sm:text-3xl"
            style={{ fontFamily: SERIF }}
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
        <div className="rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-6 py-10 text-center">
          <h2
            className="text-3xl font-bold text-[#D4A017] sm:text-4xl"
            style={{ fontFamily: SERIF }}
          >
            Looking for Tender Consultant Services in Thane?
          </h2>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-[20px] border border-[#D4A017] bg-[#B71432] px-12 py-4 font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#8F0F29] hover:shadow-[0_15px_28px_rgba(183,20,50,0.35)]"
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

export default function ThanePage() {
  return (
    <main
      className="min-h-screen w-full overflow-x-hidden bg-white"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <Header />
      <Hero />
      <DevelopmentIntro />
      <SnapshotSection />
      <EconomicOverview />
      <TimelineSection />
      <MegaProjectsSection />
      <GovernmentSection />
      <ServicesSection />
      <WhyThane />
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