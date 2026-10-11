import { slugToTitle as _s } from "@/lib/seo";

export const metadata = {
  title: `Tender Services in ${_s("mumbai")}, ${_s("maharashtra")}`,
  description: `Get local tender support in ${_s("mumbai")}, ${_s("maharashtra")}: tender search, GeM registration, bid preparation and submission by Tender Elite.`,
  alternates: { canonical: "/locations/maharashtra/mumbai" },
};

import Link from "next/link";

/* =========================================================
   FONTS
========================================================= */

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
   FOOTER SERVICES
========================================================= */

const footerServices = [
  "Tender Submission Services",
  "GeM Catalogue Management",
  "Tender Portal Registration",
  "Bid Management",
  "Vendor Assessment",
  "Joint Venture Support",
];

/* =========================================================
   SNAPSHOT
========================================================= */

const snapshotRows = [
  ["City", "Mumbai"],
  ["State", "Maharashtra"],
  ["Metropolitan Population", "2.1+ Crore"],
  ["Mumbai Metropolitan Region Population", "2.6+ Crore"],
  ["Economic Importance", "Financial Capital of India"],
  ["Total Road Network", "2,000+ KM"],
  ["Suburban Railway Network", "390+ KM"],
  ["Daily Railway Passengers", "70+ Lakh Daily Commuters"],
  ["Total Railway Stations", "150+ Stations"],
  ["Total Metro Stations", "68+ Operational Stations"],
  ["Metro Expansion", "300+ KM Planned & Operational"],
  ["Bullet Train Project", "Mumbai–Ahmedabad High Speed Rail"],
  ["Total Airports", "2 Major Airports"],
  [
    "Major Airports",
    "Chhatrapati Shivaji Maharaj International Airport & Navi Mumbai International Airport",
  ],
  ["Major Ports", "Mumbai Port & JNPT"],
];

/* =========================================================
   ECONOMIC HIGHLIGHTS
========================================================= */

const economicHighlights = [
  {
    title: "Mumbai contributes significantly to India’s:",
    items: [
      "Banking & Financial Services Sector",
      "Stock Market Capitalization",
      "GST & Tax Revenue",
      "International Trade",
      "Infrastructure Economy",
      "Corporate Headquarters Ecosystem",
      "Real Estate & Urban Development",
    ],
  },
  {
    title: "Mumbai contributes approximately:",
    items: [
      "6%+ of India’s GDP",
      "19%+ of Maharashtra’s GSD",
      "33% of India’s Income Tax Collection",
      "40% of India’s Foreign Trade",
      "60% of India’s Customs Duty Collection",
    ],
  },
  {
    title: "Mumbai is home to:",
    items: [
      "Reserve Bank of India",
      "Bombay Stock Exchange",
      "National Stock Exchange",
      "Major Banking Institution",
      "Fortune 500 Companies",
      "Global Financial Institutions",
    ],
    footer:
      "The city is considered one of Asia’s most important commercial and financial centers.",
  },
];

/* =========================================================
   GROWTH TIMELINE
========================================================= */

const growthTimeline = [
  {
    year: "2020–21",
    highlight:
      "Pandemic recovery, healthcare infrastructure strengthening, urban utility stabilization, emergency civic upgrades",
    spending: "₹45,000+ Crore",
  },
  {
    year: "2021–22",
    highlight:
      "Metro corridor expansion, road redevelopment, transport modernization, sewage upgrades",
    spending: "₹55,000+ Crore",
  },
  {
    year: "2022–23",
    highlight:
      "Coastal Road acceleration, Metro Line expansion, smart mobility infrastructure, drainage modernization",
    spending: "₹70,000+ Crore",
  },
  {
    year: "2023–24",
    highlight:
      "Redevelopment projects, smart infrastructure corridors, urban transport connectivity, housing projects",
    spending: "₹85,000+ Crore",
  },
  {
    year: "2024–25",
    highlight:
      "Large-scale capital expenditure in metro rail, roads, flyovers, water infrastructure & utilities",
    spending: "₹1,00,000+ Crore",
  },
  {
    year: "2025–26",
    highlight:
      "Massive transport modernization, airport expansion, Mumbai 3.0 projects, smart urban infrastructure",
    spending: "₹1,20,000+ Crore (Projected)",
  },
  {
    year: "2026 & Beyond",
    highlight:
      "Transit-oriented development, coastal infrastructure growth, logistics modernization, data center & smart city expansion",
    spending:
      "₹1,50,000+ Crore Expected Long-Term Investment Pipeline",
  },
];

/* =========================================================
   MEGA PROJECTS
========================================================= */

const megaProjects = [
  {
    title: "Mumbai Metro Expansion",
    text:
      "Mumbai is rapidly expanding its metro rail ecosystem with multiple operational and under-construction corridors aimed at improving urban mobility across the metropolitan region.",
  },
  {
    title: "Mumbai Coastal Road Project",
    text:
      "One of India’s largest urban road infrastructure projects designed to reduce congestion and improve connectivity.",
  },
  {
    title: "Mumbai–Ahmedabad Bullet Train",
    text:
      "India’s first high-speed rail project connecting Mumbai with Ahmedabad through advanced transport infrastructure investment.",
  },
  {
    title: "Navi Mumbai International Airport",
    text:
      "A mega aviation infrastructure project expected to significantly increase logistics, trade, aviation, and procurement opportunities across the Mumbai Metropolitan Region.",
  },
];

/* =========================================================
   GOVERNMENT AUTHORITIES
========================================================= */

const governmentAuthorities = [
  "Brihanmumbai Municipal Corporation (BMC)",
  "MMRDA",
  "Mumbai Metro Rail Corporation",
  "PWD Maharashtra",
  "CIDCO",
  "MHADA",
  "Railways",
  "Airport Authorities",
  "Mumbai Port Authority",
  "Public Health Departments",
];

/* =========================================================
   TENDER CATEGORIES
========================================================= */

const tenderCategories = [
  "Civil Construction",
  "Metro Rail Infrastructure",
  "HVAC Works",
  "Electrical Works",
  "Fire Fighting Systems",
  "Medical Equipment Supply",
  "Smart City Infrastructure",
  "Water Supply & Drainage",
  "Security & Surveillance",
  "IT Infrastructure",
  "Facility Management",
  "Industrial Machinery",
  "Renewable Energy Projects",
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
   AREAS
========================================================= */

const areas = [
  "Kandivali",
  "Borivali",
  "Andheri",
  "Powai",
  "Goregaon",
  "Malad",
  "Ghatkopar",
  "Dadar",
  "Kurla",
  "Mulund",
  "Vikhroli",
  "BMC",
  "Lower Parel",
  "Navi Mumbai",
  "Thane",
  "Colaba",
  "Parel",
];

/* =========================================================
   INDUSTRIAL AREAS
========================================================= */

const industrialAreas = [
  "Taloja MIDC",
  "TTC Industrial Area",
  "Andheri MIDC",
  "Chakan MIDC",
  "Ambernath MIDC",
  "Dombivli MIDC",
  "Navi Mumbai Airport Zone",
  "Mahape Industrial Area",
  "Bhiwandi Logistics Hub",
  "Navi Mumbai Industrial Belt",
  "Rabale Industrial Area",
  "Trans Thane Creek Industrial Belt",
];

/* =========================================================
   INDUSTRIAL SECTORS
========================================================= */

const industrialSectors = [
  "Engineering & Manufacturing",
  "Pharmaceuticals",
  "Chemicals",
  "Logistics & Warehousing",
  "Data Centers",
  "Construction & Infrastructure",
  "Renewable Energy",
  "Electronics & IT",
  "Industrial Machinery",
  "Food Processing",
];

/* =========================================================
   INDUSTRIAL TENDER OPPORTUNITIES
========================================================= */

const industrialTenderOpportunities = [
  "Industrial Construction",
  "HVAC Systems",
  "Fire Fighting Systems",
  "Electrical Works",
  "Warehouse Infrastructure",
  "Water Treatment Plants",
  "Security & Surveillance",
  "Industrial Automation",
  "Solar Projects",
  "Industrial Maintenance Contracts",
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
  "Metro network expansion",
  "Mumbai 3.0 infrastructure projects",
  "Coastal infrastructure development",
  "Smart city investments",
  "Data center expansion",
  "Airport & logistics modernization",
  "Public utility redevelopment",
  "Urban mobility projects",
];

const futureBeneficiaries = [
  "Contractors",
  "OEMs",
  "MSMEs",
  "Infrastructure Companies",
  "Consultants",
  "EPC Firms",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <h2
      className="
        text-center
        text-4xl
        font-bold
        leading-tight
        text-[#D4A017]
        sm:text-5xl
        md:text-[48px]
      "
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
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-[#071B3B]
        p-7
        shadow-[0_8px_20px_rgba(0,0,0,0.10)]
      "
    >
      <h3
        className="
          mb-5
          text-2xl
          font-bold
          leading-tight
          text-[#D4A017]
        "
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
      <div
        className="
          mx-auto grid min-h-[580px]
          w-full max-w-[1440px]
          items-center gap-10
          px-6 py-14
          md:grid-cols-2
          md:px-12
          lg:px-[80px]
        "
      >
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#D4A017]">
            Maharashtra
          </p>

          <h1
            className="
              text-5xl
              font-bold
              leading-[0.95]
              sm:text-6xl
              md:text-[60px]
            "
            style={{ fontFamily: serifFont }}
          >
            Tender Consultant in
            <br />
            <span className="text-[#D4A017]">
              Mumbai
            </span>
          </h1>

          <div className="my-7 h-[3px] w-[500px] max-w-full bg-[#D4A017]" />

          <p
            className="
              mb-5
              max-w-[520px]
              text-base
              font-bold
              leading-7
            "
            style={{ fontFamily: serifFont }}
          >
            India’s Financial Capital & Infrastructure Powerhouse
          </p>

          <p className="max-w-[560px] text-base leading-7 text-white/90">
            Mumbai is India’s largest financial and commercial city
            and one of the world’s most important metropolitan
            economies. Mumbai is the headquarters of India’s
            biggest financial institutions, stock exchanges,
            ports, infrastructure authorities, multinational
            corporations, and government agencies. The city
            contributes significantly to India’s GDP, tax revenue,
            logistics ecosystem, infrastructure sector, real
            estate market, and financial services industry.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/images/Mumbaihero.png"
            alt="Mumbai"
            className="
              h-[420px]
              w-full
              max-w-[700px]
              rounded-[20px]
              border-[3px]
              border-[#D4A017]
              object-cover
              shadow-[0_0_30px_rgba(0,0,0,0.45)]
            "
          />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCUREMENT INTRO
========================================================= */

function ProcurementIntro() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-[1280px] gap-7 px-5 md:grid-cols-2 md:px-10">
        <DarkCard title="Mumbai — Government Procurement Hub">
          <p>
            Mumbai is also one of India’s largest government
            procurement and infrastructure development hubs with
            continuous mega projects in:
          </p>

          <ul className="mt-5 space-y-2">
            {[
              "Metro Rail",
              "Bullet Train",
              "Coastal Roads",
              "Urban Redevelopment",
              "Smart Infrastructure",
              "Airports",
              "Ports & Logistics",
              "Water & Sewerage Systems",
              "Healthcare Infrastructure",
              "Housing Projects",
            ].map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </DarkCard>

        <DarkCard title="Major Tender Generating Authorities">
          <p>
            Thousands of government tenders are released every
            year through:
          </p>

          <ul className="mt-5 space-y-2">
            {governmentAuthorities.slice(0, 9).map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <p className="mt-5">
            Tender Elite provides complete government tender
            consultancy, GeM registration, BOQ preparation, bid
            management, and tender submission services across
            Mumbai.
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
    <section className="bg-[#071B3B] py-14">
      <div className="mx-auto w-full max-w-[1120px] px-5">
        <h2
          className="
            text-center
            text-3xl
            font-bold
            leading-tight
            text-[#D4A017]
            sm:text-4xl
            md:text-[42px]
          "
          style={{ fontFamily: serifFont }}
        >
          Mumbai Infrastructure & Connectivity Overview
        </h2>

        <h3
          className="
            mt-4
            text-center
            text-2xl
            font-bold
            text-white
            sm:text-3xl
          "
          style={{ fontFamily: serifFont }}
        >
          Mumbai City Snapshot
        </h3>

        <div className="mt-8 overflow-hidden rounded-[20px] border border-slate-300 bg-white">
          {snapshotRows.map(([label, value], index) => (
            <div
              key={label}
              className={`
                grid
                grid-cols-1
                sm:grid-cols-[42%_58%]
                ${
                  index !== snapshotRows.length - 1
                    ? "border-b border-slate-300"
                    : ""
                }
              `}
            >
              <div
                className="
                  border-slate-300
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-[#071B3B]
                  sm:border-r
                "
              >
                {label}
              </div>

              <div className="px-5 py-3 text-sm text-[#071B3B]">
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
    <section className="bg-white py-14">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
        <SectionTitle>
          Mumbai Economic Growth & Development Overview
        </SectionTitle>

        <h3
          className="
            mt-6
            text-center
            text-3xl
            font-bold
            text-[#071B3B]
          "
          style={{ fontFamily: serifFont }}
        >
          Mumbai — The Economic Engine of India
        </h3>

        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          {economicHighlights.map((card) => (
            <DarkCard
              key={card.title}
              title={card.title}
            >
              <ul className="space-y-2">
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              {card.footer && (
                <p className="mt-5">
                  {card.footer}
                </p>
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
    <section className="bg-white py-14">
      <div className="mx-auto w-full max-w-[1320px] px-5">
        <SectionTitle>
          Mumbai Economic & Development Growth Timeline
        </SectionTitle>

        <h3
          className="
            mt-6
            text-center
            text-2xl
            font-bold
            text-[#071B3B]
          "
          style={{ fontFamily: serifFont }}
        >
          Economic Growth, Infrastructure Expansion & Public
          Investment in Mumbai
        </h3>

        <div className="mt-8 overflow-x-auto">
          <div
            className="
              min-w-[950px]
              overflow-hidden
              rounded-[20px]
              border-[3px]
              border-[#071B3B]
              bg-[#071B3B]
            "
          >
            <div
              className="
                grid
                grid-cols-[170px_1fr_320px]
                border-b
                border-white/30
                bg-[#071B3B]
                text-white
              "
            >
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

            {growthTimeline.map((item) => (
              <div
                key={item.year}
                className="
                  grid
                  grid-cols-[170px_1fr_320px]
                  border-b
                  border-white/30
                  bg-[#071B3B]
                  text-white
                  last:border-b-0
                "
              >
                <div className="border-r border-white/30 p-5">
                  {item.year}
                </div>

                <div className="border-r border-white/30 p-5 leading-7">
                  {item.highlight}
                </div>

                <div className="p-5 font-semibold leading-7 text-[#D4A017]">
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
    <section className="bg-white py-14">
      <div className="mx-auto w-full max-w-[1280px] px-5">
        <SectionTitle>
          Major Mega Projects Driving Mumbai’s Growth
        </SectionTitle>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {megaProjects.map((project) => (
            <DarkCard
              key={project.title}
              title={project.title}
            >
              <p>{project.text}</p>
            </DarkCard>
          ))}
        </div>

        <div className="mt-6 rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-7">
          <h3
            className="text-2xl font-bold text-[#D4A017]"
            style={{ fontFamily: serifFont }}
          >
            Mumbai 3.0 Development Vision
          </h3>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Smart business districts",
              "Transit-oriented development",
              "Logistics modernization",
              "Urban redevelopment",
              "Integrated transport corridors",
            ].map((item) => (
              <div
                key={item}
                className="text-base leading-7 text-white"
              >
                • {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   BMC
========================================================= */

function BMCSection() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto w-full max-w-[1280px] px-5">
        <SectionTitle>
          BMC & Government Development Spending
        </SectionTitle>

        <h3
          className="
            mt-6
            text-center
            text-3xl
            font-bold
            text-[#071B3B]
          "
          style={{ fontFamily: serifFont }}
        >
          BMC — One of Asia’s Richest Municipal Corporations
        </h3>

        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          <DarkCard title="BMC Infrastructure Investment">
            <p className="mb-4">
              The Brihanmumbai Municipal Corporation (BMC)
              operates one of India’s largest civic budgets with
              continuous infrastructure investment focused on:
            </p>

            <ul className="space-y-2">
              {[
                "Metro connectivity",
                "Road concreting",
                "Bridges & Flyovers",
                "Storm Water Drainage",
                "Water Infrastructure",
                "Sewage Modernization",
                "Smart Mobility Systems",
                "Urban Redevelopment",
              ].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard title="Major Tender Generating Authorities">
            <ul className="space-y-2">
              {governmentAuthorities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard title="Major Tender Categories">
            <ul className="space-y-2">
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
   SIZE = 300 X 150 PX
========================================================= */

function ServicesSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>Services Offered by Tender Elite in Mumbai</SectionTitle>
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
   WHY MUMBAI
========================================================= */

function WhyMumbai() {
  const procurementItems = [
    "Metro Rail",
    "Bullet Trains",
    "Airports",
    "Roads & Flyovers",
    "Smart Infrastructure",
    "Housing Redevelopment",
    "Water & Sewerage Projects",
  ];

  const authorities = [
    "BMC",
    "MMRDA",
    "CIDCO",
    "MHADA",
    "Port Authorities",
    "Railways",
    "Airport Authorities",
  ];

  const ecosystem = [
    "Financial Institutions",
    "Infrastructure Companies",
    "Logistics Firms",
    "Healthcare Institutions",
    "Manufacturing Companies",
    "IT & Technology Businesses",
  ];

  return (
    <section className="bg-[#071B3B] py-14">
      <div className="mx-auto w-full max-w-[1280px] px-5">
        <SectionTitle>
          Why Mumbai Is One of India’s Emerging Tender Markets
        </SectionTitle>

        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          <div
            className="
              rounded-[20px]
              border-[3px]
              border-[#D4A017]
              bg-white
              p-7
              shadow-[0_10px_25px_rgba(0,0,0,0.15)]
            "
          >
            <h3
              className="
                mb-6
                text-2xl
                font-bold
                leading-tight
                text-[#D4A017]
              "
              style={{ fontFamily: serifFont }}
            >
              Mumbai is one of India’s most important government
              procurement hubs because of:
            </h3>

            <p className="mb-5 text-base font-semibold text-[#071B3B]">
              Continuous investments in:
            </p>

            <ul className="space-y-3">
              {procurementItems.map((item) => (
                <li
                  key={item}
                  className="text-base leading-7 text-[#071B3B]"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="
              rounded-[20px]
              border-[3px]
              border-[#D4A017]
              bg-white
              p-7
              shadow-[0_10px_25px_rgba(0,0,0,0.15)]
            "
          >
            <h3
              className="
                mb-6
                text-2xl
                font-bold
                leading-tight
                text-[#D4A017]
              "
              style={{ fontFamily: serifFont }}
            >
              Strong Government Procurement Ecosystem
            </h3>

            <p className="mb-5 text-base font-semibold text-[#071B3B]">
              Mumbai hosts:
            </p>

            <ul className="space-y-3">
              {authorities.map((item) => (
                <li
                  key={item}
                  className="text-base leading-7 text-[#071B3B]"
                >
                  • {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-7 text-[#071B3B]">
              These authorities release large-scale tenders
              throughout the year.
            </p>
          </div>

          <div
            className="
              rounded-[20px]
              border-[3px]
              border-[#D4A017]
              bg-white
              p-7
              shadow-[0_10px_25px_rgba(0,0,0,0.15)]
            "
          >
            <h3
              className="
                mb-6
                text-2xl
                font-bold
                leading-tight
                text-[#D4A017]
              "
              style={{ fontFamily: serifFont }}
            >
              Strong Industrial & Corporate Ecosystem
            </h3>

            <p className="mb-5 text-base font-semibold text-[#071B3B]">
              Mumbai is home to:
            </p>

            <ul className="space-y-3">
              {ecosystem.map((item) => (
                <li
                  key={item}
                  className="text-base leading-7 text-[#071B3B]"
                >
                  • {item}
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
   AREAS
========================================================= */

function AreasSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>Areas We Serve in Mumbai</SectionTitle>
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
    <section className="bg-white py-14">
      <div className="mx-auto w-full max-w-[1280px] px-5">
        <SectionTitle>
          Industrial Areas & MIDC We Serve Near Mumbai
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1050px] text-center text-base leading-7 text-slate-700">
          Tender Elite provides tender consultancy, GeM
          registration, BOQ preparation, and bid submission
          services across major industrial zones, MIDCs,
          logistics hubs, and manufacturing corridors near Mumbai.
        </p>

        <div
          className="
            mx-auto
            mt-8
            grid
            max-w-[1200px]
            grid-cols-2
            gap-4
            sm:grid-cols-3
            lg:grid-cols-4
          "
        >
          {industrialAreas.map((area) => (
            <div
              key={area}
              className="
                flex
                min-h-[100px]
                items-center
                justify-center
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-[#071B3B]
                px-4
                text-center
                text-[18px]
                font-semibold
                leading-6
                text-white
                shadow-[0_8px_18px_rgba(0,0,0,0.12)]
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-[0_12px_24px_rgba(0,0,0,0.18)]
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
              inline-flex
              min-w-[145px]
              items-center
              justify-center
              rounded-[20px]
              border-2
              border-[#D4A017]
              bg-[#D4A017]
              px-8
              py-3
              text-base
              font-bold
              text-[#071B3B]
              shadow-[0_6px_15px_rgba(0,0,0,0.15)]
              transition-all
              duration-200
              hover:-translate-y-1
              hover:bg-[#D4A017]
              hover:text-[#071B3B]
              hover:border-[#D4A017]
              hover:shadow-[0_8px_18px_rgba(0,0,0,0.20)]
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
      <div className="mx-auto w-full max-w-[1150px] px-5">
        <div className="grid gap-7 lg:grid-cols-2">
          <div
            className="
              rounded-[20px]
              border-[3px]
              border-[#D4A017]
              bg-[#071B3B]
              p-7
              shadow-[0_10px_25px_rgba(0,0,0,0.12)]
            "
          >
            <h3
              className="
                mb-6
                text-2xl
                font-bold
                leading-tight
                text-[#D4A017]
              "
              style={{ fontFamily: serifFont }}
            >
              Key Industrial Sectors
            </h3>

            <p className="mb-5 text-base text-white">
              These industrial ecosystems support:
            </p>

            <ul className="space-y-3">
              {industrialSectors.map((item) => (
                <li
                  key={item}
                  className="text-base leading-7 text-white"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="
              rounded-[20px]
              border-[3px]
              border-[#D4A017]
              bg-[#071B3B]
              p-7
              shadow-[0_10px_25px_rgba(0,0,0,0.12)]
            "
          >
            <h3
              className="
                mb-6
                text-2xl
                font-bold
                leading-tight
                text-[#D4A017]
              "
              style={{ fontFamily: serifFont }}
            >
              Tender Opportunities Across Industrial Zones
            </h3>

            <p className="mb-5 text-base text-white">
              Major tender opportunities include:
            </p>

            <ul className="space-y-3">
              {industrialTenderOpportunities.map((item) => (
                <li
                  key={item}
                  className="text-base leading-7 text-white"
                >
                  • {item}
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
    <section className="bg-white py-12">
      <div className="mx-auto w-full max-w-[1300px] px-5">
        <SectionTitle>
          Future Outlook of Mumbai Infrastructure & Tender Market
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
            className="
              text-2xl
              font-bold
              leading-tight
              text-[#D4A017]
              md:text-3xl
            "
            style={{ fontFamily: serifFont }}
          >
            Mumbai is expected to witness massive future growth
            through:
          </h3>

          <div className="mt-6 grid gap-x-14 gap-y-4 md:grid-cols-2">
            {futureGrowth.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-start
                  gap-3
                  text-base
                  leading-7
                  text-white
                  md:text-lg
                "
              >
                <span className="mt-1 text-[#D4A017]">
                  •
                </span>

                <span>{item}</span>
              </div>
            ))}
          </div>

          <h3
            className="
              mt-8
              text-2xl
              font-bold
              leading-tight
              text-[#D4A017]
              md:text-3xl
            "
            style={{ fontFamily: serifFont }}
          >
            This will continue generating high-value government
            tender opportunities across multiple sectors for:
          </h3>

          <div className="mt-6 grid gap-x-14 gap-y-4 md:grid-cols-2">
            {futureBeneficiaries.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-start
                  gap-3
                  text-base
                  leading-7
                  text-white
                  md:text-lg
                "
              >
                <span className="mt-1 text-[#D4A017]">
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
            border-2
            border-[#071B3B]
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
              text-[#D4A017]
              sm:text-4xl
            "
            style={{ fontFamily: serifFont }}
          >
            Looking for Tender Consultant Services in Mumbai?
          </h2>

          <p className="mx-auto mt-4 max-w-[700px] text-base leading-7 text-white/85">
            Get professional tender consultancy, GeM
            registration, BOQ preparation, bid management and
            tender submission support across Mumbai.
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
              text-base
              font-bold
              text-white
              transition-all
              duration-200
              hover:-translate-y-1
              hover:bg-[#8F1027]
              hover:border-[#8F1027]
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

export default function MumbaiPage() {
  return (
    <main
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-white
      "
      style={{ fontFamily: sansFont }}
    >
      <Header />

      <Hero />

      <ProcurementIntro />

      <SnapshotSection />

      <EconomicOverview />

      <Timeline />

      <MegaProjects />

      <BMCSection />

      <ServicesSection />

      <WhyMumbai />

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