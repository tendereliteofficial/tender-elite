import Link from "next/link";

const serifFont = "Georgia, 'Times New Roman', serifFont";
const sansFont = "Arial, Helvetica, sans-serifFont";

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
   FOOTER
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
  ["City", "Kolhapur"],
  ["State", "Maharashtra"],
  ["Population", "7+ Lakh Urban Population"],
  [
    "Economic Importance",
    "Engineering, Foundry & Manufacturing Hub",
  ],
  ["Total Road Network", "1,500+ KM"],
  [
    "Railway Connectivity",
    "Central Railway & South-West Connectivity",
  ],
  ["Major Railway Stations", "Kolhapur Railway Station"],
  ["Airport", "Kolhapur Airport"],
  [
    "Smart City Development",
    "Urban Infrastructure Modernization",
  ],
  [
    "Major Industrial Ecosystem",
    "Kagal MIDC, Gokul Shirgaon MIDC, Shiroli MIDC",
  ],
  [
    "Highway Connectivity",
    "NH-48 & Bengaluru–Mumbai Corridor",
  ],
  [
    "Tourism Importance",
    "Mahalaxmi Temple & Heritage Tourism",
  ],
];

/* =========================================================
   PROCUREMENT INTRO
========================================================= */

const kolhapurIndustrialGrowth = [
  "Industrial Manufacturing",
  "Foundry & Casting Industries",
  "Smart City Infrastructure",
  "IT Park Development",
  "Highway Infrastructure",
  "Industrial Corridors",
  "Logistics Connectivity",
  "Urban Redevelopment",
  "Water & Utility Infrastructure",
  "Tourism Infrastructure",
];

const kolhapurAuthorities = [
  "Kolhapur Municipal Corporation (KMC)",
  "MIDC",
  "Maharashtra PWD",
  "Smart City Authorities",
  "Industrial Development Departments",
  "Water Resource Departments",
  "Infrastructure Agencies",
  "Tourism Infrastructure Authorities",
  "Public Health Departments",
];

/* =========================================================
   ECONOMIC OVERVIEW
========================================================= */

const economicCards = [
  {
    title:
      "Kolhapur has emerged as one of Maharashtra’s strongest industrial manufacturing ecosystems with continuous investments across:",
    items: [
      "Engineering Industries",
      "Foundry & Casting",
      "Industrial Machinery",
      "Automobile Ancillary Manufacturing",
      "Smart Infrastructure",
      "Textile Manufacturing",
      "Sugar Processing",
      "Logistics Infrastructure",
      "Commercial Development",
      "Tourism Infrastructure",
    ],
  },
  {
    title: "Kolhapur contributes significantly to:",
    items: [
      "Maharashtra’s engineering ecosystem",
      "Foundry manufacturing sector",
      "Automobile ancillary industry",
      "Western Maharashtra industrial economy",
      "Export-oriented manufacturing ecosystem",
    ],
  },
  {
    title: "Kolhapur is also becoming an emerging:",
    items: [
      "IT ecosystem",
      "Smart infrastructure city",
      "Logistics corridor",
      "Industrial support ecosystem",
    ],
    footer:
      "With increasing public and private investments.",
  },
];

/* =========================================================
   TIMELINE
========================================================= */

const growthTimeline = [
  {
    year: "2020–21",
    highlight:
      "Healthcare infrastructure support, industrial recovery, civic modernization",
    spending: "₹5,000+ Crore",
  },
  {
    year: "2021–22",
    highlight:
      "Industrial infrastructure upgrades, road redevelopment, utility modernization",
    spending: "₹8,000+ Crore",
  },
  {
    year: "2022–23",
    highlight:
      "Smart city infrastructure, foundry ecosystem expansion, logistics upgrades",
    spending: "₹12,000+ Crore",
  },
  {
    year: "2023–24",
    highlight:
      "Industrial corridor development, transport infrastructure modernization",
    spending: "₹18,000+ Crore",
  },
  {
    year: "2024–25",
    highlight:
      "Large-scale investments in highways, utilities & industrial ecosystems",
    spending: "₹26,000+ Crore",
  },
  {
    year: "2025–26",
    highlight:
      "Smart infrastructure modernization & manufacturing ecosystem expansion",
    spending: "₹35,000+ Crore (Projected)",
  },
  {
    year: "2026 & Beyond",
    highlight:
      "IT ecosystem growth, industrial modernization & logistics corridor expansion",
    spending:
      "₹50,000+ Crore Expected Long-Term Investment Pipeline",
  },
];

/* =========================================================
   MEGA PROJECTS
========================================================= */

const megaProjects = [
  {
    title: "Kagal MIDC Industrial Expansion",
    text:
      "Kagal MIDC is one of western Maharashtra’s major industrial ecosystems supporting engineering industries, manufacturing, automobile ancillary industries and industrial exports.",
  },
  {
    title: "Kolhapur IT Park Development",
    text:
      "A major IT Park project in Kolhapur through MIDC is expected to significantly boost the city’s technology and commercial infrastructure ecosystem.",
  },
  {
    title: "NH-48 Elevated Corridor Project",
    text:
      "A major six-lane elevated corridor project at Kagal on NH-48 has been approved to improve freight movement, logistics efficiency, industrial transportation and highway infrastructure.",
  },
  {
    title: "Tourism & Temple Infrastructure Growth",
    text:
      "Kolhapur continues to witness tourism infrastructure development around Mahalaxmi Temple, Rankala Lake, Panhala Fort and the heritage tourism ecosystem.",
  },
];

/* =========================================================
   SMART CITY
========================================================= */

const smartCityItems = [
  "Smart CCTV systems",
  "GIS-based planning",
  "AI-based surveillance",
  "Smart water management",
  "Traffic management",
  "Integrated Command & Control Centre",
];

/* =========================================================
   TENDER ECOSYSTEM
========================================================= */

const tenderCategories = [
  "Civil Construction",
  "Industrial Infrastructure",
  "Smart City Infrastructure",
  "HVAC Works",
  "Electrical Engineering",
  "Fire Fighting Systems",
  "Water Supply & Drainage",
  "Industrial Automation",
  "Security & Surveillance",
  "Tourism Infrastructure",
  "Utility Modernization",
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
   AREAS
========================================================= */

const areas = [
  "Rajarampuri",
  "Shahupuri",
  "Tarabai Park",
  "Ruikar Colony",
  "Sambhaji Nagar",
  "Shivaji Udyam Nagar",
  "Mangalwar Peth",
  "Ujalaiwadi",
  "Shiroli",
  "Kagal",
  "Gokul Shirgaon",
  "Rankala Region",
  "Kasba Bawda",
  "Kalamba",
  "Kadamwadi",
];

/* =========================================================
   INDUSTRIAL AREAS
========================================================= */

const industrialAreas = [
  "Kagal MIDC",
  "Five Star MIDC Kagal",
  "Gokul Shirgaon MIDC",
  "Shiroli MIDC",
  "Shivaji Udyamnagar Industrial Area",
  "Textile Manufacturing Clusters",
  "Engineering Manufacturing Zones",
  "Foundry Ecosystems",
  "Logistics Corridors",
  "Industrial Warehousing Ecosystems",
];

/* =========================================================
   INDUSTRIAL SECTORS
========================================================= */

const industrialSectors = [
  "Foundry & Casting",
  "Engineering Manufacturing",
  "Automobile Components",
  "Industrial Machinery",
  "Textile Manufacturing",
  "Sugar Processing",
  "Logistics & Warehousing",
  "Industrial Automation",
  "Commercial Infrastructure",
  "Renewable Energy",
];

const industrialTenderOpportunities = [
  "Industrial Construction",
  "HVAC Systems",
  "Electrical Infrastructure",
  "Fire Fighting Systems",
  "Industrial Automation",
  "Water Treatment Plants",
  "Smart Infrastructure",
  "Solar Projects",
  "Utility Modernization",
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
  "Industrial modernization",
  "Smart infrastructure expansion",
  "IT park ecosystem growth",
  "Logistics infrastructure upgrades",
  "Tourism infrastructure projects",
  "Industrial corridor expansion",
  "Manufacturing ecosystem modernization",
  "Utility infrastructure development",
];

const futureBeneficiaries = [
  "Contractors",
  "OEMs",
  "MSMEs",
  "Infrastructure Companies",
  "EPC Firms",
  "Consultants",
  "Technology Providers",
  "Industrial Manufacturers",
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
              text-5xl font-bold leading-[0.95]
              sm:text-6xl
              md:text-[60px]
            "
            style={{ fontFamily: serifFont }}
          >
            Tender Consultant in
            <br />
            <span className="text-[#D4A017]">
              Kolhapur
            </span>
          </h1>

          <div className="my-7 h-[3px] w-[500px] max-w-full bg-[#D4A017]" />

          <p
            className="
              mb-5
              max-w-[560px]
              text-base
              font-bold
              leading-7
            "
            style={{ fontFamily: serifFont }}
          >
            Maharashtra’s Engineering, Foundry & Industrial
            Manufacturing Powerhouse
          </p>

          <p className="max-w-[580px] text-base leading-7 text-white/90">
            Kolhapur is one of Maharashtra’s fastest-growing
            industrial, engineering, foundry, textile, and smart
            infrastructure ecosystems. Located in western
            Maharashtra near the Karnataka border, Kolhapur is
            widely recognized for its strong manufacturing base,
            automobile ancillary industries, foundry ecosystem,
            sugar economy, textile sector, and rapidly expanding
            industrial infrastructure.
          </p>

          <p className="mt-5 max-w-[580px] text-base leading-7 text-white/90">
            Historically known for Kolhapuri Chappal, textile
            trade, sugar industries, engineering industries,
            foundry manufacturing and agricultural economy,
            Kolhapur is now evolving into a major industrial and
            infrastructure growth corridor.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/images/Kolhapurhero.png"
            alt="Kolhapur"
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
        <DarkCard title="Kolhapur’s Industrial Growth Corridor">
          <p>
            Kolhapur has now evolved into one of Maharashtra’s
            major industrial and infrastructure growth corridors.
            The city hosts hundreds of engineering and foundry
            units and acts as a strong support ecosystem for Pune
            and Bengaluru manufacturing industries.
          </p>

          <p className="mt-5">
            Kolhapur is witnessing continuous investments across:
          </p>

          <ul className="mt-5 space-y-2">
            {kolhapurIndustrialGrowth.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </DarkCard>

        <DarkCard title="Major Tender Generating Authorities">
          <p>
            The city continuously generates government and
            industrial tender opportunities through:
          </p>

          <ul className="mt-5 space-y-2">
            {kolhapurAuthorities.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <p className="mt-5">
            Tender Elite provides complete government tender
            consultancy, GeM registration, BOQ preparation, bid
            management, and tender submission services across
            Kolhapur.
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
        <SectionTitle>
          Kolhapur Infrastructure & Connectivity Overview
        </SectionTitle>

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
          Kolhapur City Snapshot
        </h3>

        <div className="mx-auto mt-8 overflow-hidden rounded-[20px] bg-white">
          <div
            className="
              grid
              grid-cols-1
              border-b border-slate-300
              sm:grid-cols-[42%_58%]
            "
          >
            <div
              className="
                border-slate-300
                px-5
                py-3
                text-center
                text-sm
                font-bold
                text-[#071B3B]
                sm:border-r
              "
            >
              Category
            </div>

            <div className="px-5 py-3 text-center text-sm font-bold text-[#071B3B]">
              Details
            </div>
          </div>

          {snapshotRows.map(([label, value]) => (
            <div
              key={label}
              className="
                grid
                grid-cols-1
                border-b border-slate-300
                last:border-b-0
                sm:grid-cols-[42%_58%]
              "
            >
              <div
                className="
                  border-slate-300
                  px-5
                  py-2.5
                  text-center
                  text-sm
                  text-[#071B3B]
                  sm:border-r
                "
              >
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
========================================================= */

function EconomicOverview() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
        <SectionTitle>
          Kolhapur Economic Growth & Development Overview
        </SectionTitle>

        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          {economicCards.map((card) => (
            <DarkCard
              key={card.title}
              title={card.title}
            >
              <ul className="space-y-3">
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
          Kolhapur Economic & Development Growth Timeline
        </SectionTitle>

        <h3
          className="
            mt-5
            text-center
            text-2xl
            font-bold
            text-[#071B3B]
          "
          style={{ fontFamily: serifFont }}
        >
          Economic Growth, Infrastructure Expansion & Public
          Investment in Kolhapur
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
          Major Mega Projects Driving Kolhapur’s Growth
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
            Smart City Infrastructure Modernization
          </h3>

          <p className="mt-4 text-base leading-7 text-white">
            Kolhapur Municipal Corporation has initiated smart
            city modernization initiatives including:
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {smartCityItems.map((item) => (
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
   GOVERNMENT DEVELOPMENT
========================================================= */

function GovernmentDevelopment() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto w-full max-w-[1150px] px-5">
        <SectionTitle>
          Government Development Spending & Tender Ecosystem
        </SectionTitle>

        <div className="mt-10 grid gap-7 lg:grid-cols-2">
          <DarkCard title="Major Tender Generating Authorities">
            <ul className="space-y-3">
              {kolhapurAuthorities.map((item) => (
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
   300 X 150 PX
========================================================= */

function ServicesSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>Services Offered by Tender Elite in Kolhapur</SectionTitle>
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
   WHY KOLHAPUR
========================================================= */

function WhyKolhapur() {
  const cards = [
    {
      title: "Strong Engineering & Foundry Ecosystem",
      intro: "Kolhapur hosts:",
      items: [
        "Foundry industries",
        "Casting units",
        "Engineering manufacturers",
        "Industrial machinery ecosystem",
        "Automobile ancillary industries",
      ],
      footer:
        "Creating large-scale industrial procurement demand.",
    },
    {
      title: "Massive Infrastructure Investments",
      intro: "Continuous investments in:",
      items: [
        "Highways",
        "Industrial corridors",
        "Smart infrastructure",
        "Logistics modernization",
        "Tourism infrastructure",
        "Utility upgrades",
      ],
      footer:
        "Are generating large-scale tender opportunities.",
    },
    {
      title: "Strategic Industrial Connectivity",
      intro: "Kolhapur’s connectivity with:",
      items: [
        "Pune",
        "Bengaluru",
        "NH-48 corridor",
        "Western Maharashtra industrial ecosystem",
      ],
      footer:
        "Makes it an important logistics and manufacturing region.",
    },
  ];

  return (
    <section className="bg-[#071B3B] py-14">
      <div className="mx-auto w-full max-w-[1280px] px-5">
        <SectionTitle>
          Why Kolhapur Is One of Maharashtra’s Emerging Tender
          Markets
        </SectionTitle>

        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
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
                {card.title}
              </h3>

              <p className="text-base font-semibold text-[#071B3B]">
                {card.intro}
              </p>

              <ul className="mt-5 space-y-3">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="text-base leading-7 text-[#071B3B]"
                  >
                    • {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-base leading-7 text-[#071B3B]">
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
        <SectionTitle>Areas We Serve in Kolhapur</SectionTitle>
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
    <section className="bg-white py-14">
      <div className="mx-auto w-full max-w-[1280px] px-5">
        <SectionTitle>
          Industrial Areas & MIDC We Serve Near Kolhapur
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1050px] text-center text-base leading-7 text-slate-700">
          Tender Elite provides consultancy services across
          major industrial ecosystems and manufacturing corridors
          near Kolhapur.
        </p>

        {/* FLEX IS USED SO THE LAST ROW AUTOMATICALLY CENTERS */}

        <div
          className="
            mx-auto
            mt-8
            flex
            max-w-[1200px]
            flex-wrap
            justify-center
            gap-4
          "
        >
          {industrialAreas.map((area) => (
            <div
              key={area}
              className="
                flex
                h-[100px]
                w-[280px]
                shrink-0
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
              These ecosystems support:
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
              Tender Opportunities Across Infrastructure Zones
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
   LOCATIONS
   270 X 195 PX
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
          Future Outlook of Kolhapur Infrastructure & Tender
          Market
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
            Kolhapur is expected to witness massive future growth
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
            Looking for Tender Consultant Services in Kolhapur?
          </h2>

          <p className="mx-auto mt-4 max-w-[700px] text-base leading-7 text-white/85">
            Get professional tender consultancy, GeM
            registration, BOQ preparation, bid management and
            tender submission support across Kolhapur.
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

export default function KolhapurPage() {
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

      <GovernmentDevelopment />

      <ServicesSection />

      <WhyKolhapur />

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