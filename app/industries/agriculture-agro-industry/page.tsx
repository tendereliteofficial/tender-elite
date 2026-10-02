import Link from "next/link";

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
   PROCUREMENT AREAS
========================================================= */

const procurementAreas = [
  {
    title: "Agricultural Equipment & Infrastructure",
    points: [
      "Agricultural Equipment Supply",
      "Irrigation Infrastructure Projects",
      "Agro-Processing Infrastructure",
      "Fertilizer & Agro Input Supply",
      "Cold Storage Infrastructure",
      "Engineering & Utility Infrastructure",
    ],
  },
  {
    title: "Warehousing & Food Supply",
    points: [
      "Warehousing & Logistics Systems",
      "Dairy Infrastructure Projects",
      "Food Supply Contracts",
      "Farm Mechanization Systems",
      "Water Management Projects",
    ],
  },
  {
    title: "Smart & Rural Agriculture",
    points: [
      "Smart Agriculture Technologies",
      "Rural Infrastructure Projects",
      "Agro IT & Automation Solutions",
      "Agricultural AMC & Maintenance Contracts",
      "Food Processing Equipment Supply",
    ],
  },
];

/* =========================================================
   COMMON PROCUREMENT CHALLENGES
========================================================= */

const procurementChallengesLeft = [
  "Product quality certifications",
  "Agricultural compliance documentation",
  "Technical specifications & standards",
  "OEM authorization requirements",
  "Supply & delivery compliance",
  "Vendor registration procedures",
];

const procurementChallengesRight = [
  "GeM compliance & catalogue requirements",
  "Product testing & approval requirements",
  "Similar supply experience criteria",
  "Multi-stage technical evaluations",
  "Storage & logistics compliance",
  "Financial qualification requirements",
];

/* =========================================================
   GOVERNMENT INITIATIVES
========================================================= */

const governmentInitiatives = [
  "PM-KISAN Scheme",
  "PM Krishi Sinchai Yojana",
  "Agriculture Infrastructure Fund (AIF)",
  "National Food Security Mission",
  "e-NAM Platform",
  "Cold Chain Development Programs",
  "Food Processing Infrastructure Schemes",
  "Dairy Infrastructure Development Fund",
  "Rural Infrastructure Development Programs",
  "Smart Agriculture Initiatives",
  "Irrigation Modernization Projects",
];

/* =========================================================
   PROCUREMENT AUTHORITIES
========================================================= */

const procurementAuthorities = [
  "Ministry of Agriculture",
  "FCI",
  "NAFED",
  "State Agriculture Departments",
  "Irrigation Departments",
  "Warehousing Corporations",
  "Dairy Development Authorities",
  "Rural Development Agencies",
  "Food Processing Departments",
  "Agricultural Universities",
  "PSU Agro Organizations",
  "Cooperative Federations",
];

/* =========================================================
   GOVERNMENT AGRICULTURE INVESTMENT
========================================================= */

const agricultureInvestmentPoints = [
  "Agriculture Infrastructure Fund (AIF)",
  "PM Krishi Sinchai Yojana",
  "National Food Security Programs",
  "Rural Infrastructure Projects",
  "Irrigation & Water Management Systems",
  "Agro-Processing Infrastructure",
  "Cold Chain Development Programs",
  "Warehousing Infrastructure",
  "Dairy & Livestock Development",
  "Digital Agriculture Initiatives",
];

/* =========================================================
   MARKET GROWTH AREAS
========================================================= */

const marketGrowthAreas = [
  "Irrigation Infrastructure",
  "Cold Storage Systems",
  "Agro Warehousing",
  "Food Processing Units",
  "Agricultural Mechanization",
  "Dairy Infrastructure",
  "Smart Farming Technologies",
  "Agro Supply Chain Systems",
  "Precision Agriculture Solutions",
  "Rural Infrastructure Development",
];

/* =========================================================
   GOVERNMENT PROCUREMENT ITEMS
========================================================= */

const agricultureProcurementItems = [
  "Agricultural machinery",
  "Dairy infrastructure systems",
  "Irrigation systems",
  "Warehousing infrastructure",
  "Fertilizers & agro inputs",
  "Farm automation technologies",
  "Food grain supply systems",
  "Agricultural IT systems",
  "Cold storage infrastructure",
  "Rural infrastructure services",
  "Agro-processing equipment",
  "AMC & maintenance services",
];

/* =========================================================
   SUPPORT SERVICES
   6 CARDS = 3 x 2
========================================================= */

const supportServices = [
  {
    name: "GeM Registration Services",
    link: "/services/gem-catalogue-management",
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
];

/* =========================================================
   WHY CHOOSE
========================================================= */

const whyChooseCards = [
  "Professional Agro Procurement Consultancy",
  "Strong Documentation & Compliance Expertise",
  "Multi-Portal Tender Participation Expertise",
  "GeM & Vendor Registration Assistance",
  "Structured Documentation & Verification Process",
  "Experience Supporting Agricultural Infrastructure Projects",
  "Compliance & Supply Documentation Coordination",
  "End-to-End Tender & Procurement Consultancy Services",
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
   HEADER
========================================================= */

function Header() {
  return (
    <header className="relative z-50 border-b-4 border-[#D4A017] bg-white shadow-sm">

      <div className="mx-auto flex min-h-[78px] max-w-[1440px] items-center px-4 sm:min-h-[86px] sm:px-5 md:min-h-[90px] md:px-7 xl:px-10">

        {/* LOGO */}

        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-2"
        >
          <img
            src="/images/logo-mark.png"
            alt="Tender Elite mark"
            className="h-[48px] w-auto object-contain sm:h-[58px] md:h-[64px] lg:h-[68px]"
          />

          <img
            src="/images/logo-wordmark.png"
            alt="Tender Elite"
            className="h-auto w-[110px] object-contain sm:w-[140px] md:w-[160px] lg:w-[195px]"
          />
        </Link>

        {/* DESKTOP NAVBAR */}

        <nav className="ml-auto hidden items-center gap-2 xl:flex">

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-[20px] bg-[#D4A017] px-6 py-3 text-sm font-bold text-black shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#B8860B] hover:text-white hover:shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-2 rounded-[20px] bg-[#B71432] px-7 py-3 text-sm font-bold text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#971029]"
          >
            Contact Us
          </Link>

        </nav>

        {/* MOBILE / TABLET */}

        <details className="relative ml-auto xl:hidden">

          <summary
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl bg-[#D4A017] text-[#071B3B] shadow-md"
            aria-label="Open navigation menu"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

          </summary>

          <div className="absolute right-0 top-[52px] w-[230px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_15px_35px_rgba(0,0,0,0.18)]">

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-xl px-4 py-3 text-base font-bold text-[#071B3B] transition-colors hover:bg-[#D4A017] hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-2 block rounded-xl bg-[#B71432] px-4 py-3 text-center text-base font-bold text-white transition-colors hover:bg-[#971029]"
            >
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
    <h2 className="text-center font-serif text-3xl font-extrabold leading-tight tracking-[2px] text-[#D4A017] sm:text-4xl md:text-5xl">
      {children}
    </h2>
  );
}

/* =========================================================
   NAVY CARD
========================================================= */

function NavyCard({
  title,
  points,
}: {
  title?: string;
  points: string[];
}) {
  return (
    <article className="rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-7 text-white shadow-[0_0_28px_rgba(212,160,23,0.12)]">

      {title && (
        <h3 className="text-center font-serif text-lg font-bold leading-6 tracking-wide text-[#D4A017] sm:text-xl">
          {title}
        </h3>
      )}

      <div
        className={`space-y-1.5 text-sm leading-6 tracking-wide text-white ${
          title ? "mt-5" : ""
        }`}
      >

        {points.map((point) => (
          <div key={point}>
            • {point}
          </div>
        ))}

      </div>

    </article>
  );
}

/* =========================================================
   WHITE MARKET CARD
========================================================= */

function WhiteMarketCard({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <article className="rounded-[20px] border-[3px] border-[#D4A017] bg-white p-8 text-[#071B3B] shadow-[0_0_28px_rgba(212,160,23,0.14)]">

      <h3 className="text-center font-serif text-lg font-bold leading-6 tracking-wide text-[#D4A017] sm:text-xl">
        {title}
      </h3>

      <div className="mt-5 space-y-1.5 text-base leading-6 tracking-wide text-[#071B3B]">

        {points.map((point) => (
          <div key={point}>
            • {point}
          </div>
        ))}

      </div>

    </article>
  );
}

/* =========================================================
   WHY CARD
========================================================= */

function WhyCard({
  title,
}: {
  title: string;
}) {
  return (
    <article className="flex min-h-[220px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 text-center shadow-[0_8px_25px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(212,160,23,0.24)]">

      <h3 className="font-serif text-xl font-semibold leading-8 tracking-[1.2px] text-[#D4A017] sm:text-2xl">
        {title}
      </h3>

    </article>
  );
}

/* =========================================================
   LOCATION CARD
========================================================= */

function LocationCard({
  name,
  image,
  link,
}: {
  name: string;
  image: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="
        group
        relative
        h-[195px]
        w-full
        overflow-hidden
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-[#071B3B]
        shadow-[0_8px_20px_rgba(0,0,0,0.16)]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-2
        hover:border-[#F1C75B]
        hover:shadow-[0_16px_35px_rgba(212,160,23,0.32)]
      "
    >
      <img
        src={image}
        alt={name}
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-500
          ease-out
          group-hover:scale-[1.08]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-black/20
          transition-all
          duration-300
          group-hover:bg-black/10
        "
      />

      <span
        className="
          absolute
          bottom-3
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          rounded-full
          border-2
          border-[#D4A017]
          bg-[#071B3B]
          px-5
          py-1.5
          text-sm
          font-bold
          text-white
          shadow-[0_4px_12px_rgba(0,0,0,0.25)]
          transition-all
          duration-300
          group-hover:border-[#F1C75B]
          group-hover:bg-[#D4A017]
          group-hover:text-[#071B3B]
          group-hover:shadow-[0_5px_16px_rgba(212,160,23,0.35)]
        "
      >
        {name}
      </span>
    </Link>
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

export default function AgricultureAgroIndustryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071B3B]">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-[#071B3B]">

        <div className="mx-auto max-w-[1440px] px-6 py-9 sm:px-8 md:px-10 lg:py-11 xl:px-[80px]">

          <div className="grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr]">

            <div>

              <h1 className="font-serif text-4xl font-bold leading-[1.02] text-[#D4A017] sm:text-5xl md:text-6xl">
                Agriculture{" "}
                <span className="font-sans">
                  &amp;
                </span>{" "}
                Agro Industry
              </h1>

              <div className="mt-6 h-[2px] w-[385px] max-w-full rounded-full bg-[#D4A017]" />

              <div className="mt-7 text-base leading-6 tracking-wide text-white">

                <p>
                  The Agriculture &amp; Agro Industry is one of India&apos;s
                  most important economic sectors, contributing significantly
                  to food security, rural development, employment generation,
                  agro-processing, supply chain infrastructure, exports, and
                  public welfare programs across the country.
                </p>

                <p className="mt-5">
                  The sector includes agriculture infrastructure, irrigation
                  systems, agro-processing units, fertilizers, seeds, farm
                  equipment, cold storage systems, food grain supply,
                  warehousing infrastructure, agricultural machinery, dairy
                  infrastructure, livestock management systems, horticulture
                  projects, food processing solutions, agro-technology systems,
                  and agricultural supply chain services.
                </p>

              </div>

            </div>

            <div className="overflow-hidden rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.55)]">

              <img
                src="/images/agro1.png"
                alt="Agriculture and Agro Industry"
                className="h-[300px] w-full object-cover sm:h-[390px] md:h-[450px] lg:h-[490px]"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INDUSTRY OVERVIEW
          BOTH IMAGES = 516 x 344 PX
      ====================================================== */}

      <section className="bg-white px-6 py-12 sm:px-8 md:px-10 xl:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <div className="grid items-start gap-8 lg:grid-cols-[516px_minmax(0,1fr)]">

            {/* IMAGE COLUMN */}

            <div className="space-y-6">

              {/* FIRST IMAGE */}

              <div className="w-[516px] max-w-full overflow-hidden rounded-[20px]">

                <img
                  src="/images/agro2.png"
                  alt="Agriculture Industry Overview"
                  width={516}
                  height={344}
                  className="block h-[344px] w-[516px] max-w-full object-cover shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                />

              </div>

              {/* SECOND IMAGE */}

              <div className="w-[516px] max-w-full overflow-hidden rounded-[20px]">

                <img
                  src="/images/agro3.png"
                  alt="Agriculture and Agro Industry"
                  width={516}
                  height={344}
                  className="block h-[344px] w-[516px] max-w-full object-cover shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                />

              </div>

            </div>

            {/* TEXT */}

            <div>

              <h2 className="text-xl font-normal tracking-wide text-[#071B3B]">
                INDUSTRY OVERVIEW
              </h2>

              <div className="mt-7 text-base leading-6 tracking-wide text-gray-600">

                <p>
                  India has one of the world&apos;s largest agricultural
                  ecosystems supported by extensive Government investment in
                  irrigation infrastructure, rural development programs, food
                  security initiatives, warehousing systems, agricultural
                  modernization, farm mechanization, digital agriculture, and
                  agro-processing infrastructure.
                </p>

                <p className="mt-5">
                  Government departments, agriculture ministries, food
                  procurement agencies, irrigation departments, warehousing
                  corporations, dairy development authorities, rural
                  development agencies, cooperative societies, PSU
                  organizations, and agricultural universities regularly
                  procure agricultural equipment, irrigation systems,
                  agro-processing solutions, warehouse infrastructure,
                  fertilizers, food supply systems, farm machinery, and related
                  services through structured procurement and tendering
                  processes.
                </p>

                <p className="mt-5">
                  The Government of India continues to strengthen the
                  agriculture and agro sector through initiatives such as
                  PM-KISAN, PM Krishi Sinchai Yojana, National Food Security
                  Mission, Agriculture Infrastructure Fund (AIF), e-NAM, food
                  processing infrastructure schemes, cold chain development
                  programs, and rural infrastructure modernization initiatives.
                </p>

                <p className="mt-5">
                  Due to the large-scale and compliance-driven nature of agro
                  procurement projects, businesses participating in this sector
                  are required to manage technical specifications, agricultural
                  certifications, quality standards, product documentation,
                  vendor registrations, GeM catalogue requirements, supply
                  compliance, and procurement documentation professionally.
                </p>

                <p className="mt-5">
                  Tender Elite provides specialized tender consultancy and
                  procurement support services for agricultural equipment
                  manufacturers, agro-processing companies, irrigation solution
                  providers, food supply contractors, fertilizer suppliers,
                  warehousing companies, dairy infrastructure providers, farm
                  technology companies, and agro-industrial solution providers
                  across India.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MARKET SIZE & INDUSTRY GROWTH
          WHITE TOP CARDS
      ====================================================== */}

      <section className="bg-[#071B3B] px-6 py-12 text-white sm:px-8 md:px-10 xl:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Agriculture{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Agro Industry Market Size{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Industry Growth
          </SectionTitle>

          <p className="mx-auto mt-6 max-w-[1260px] text-base leading-6 tracking-wide">
            India&apos;s Agriculture &amp; Agro Industry is one of the
            country&apos;s largest sectors and contributes significantly to
            GDP, employment generation, food production, exports, and rural
            economic development.
          </p>

          <p className="mx-auto mt-5 max-w-[1260px] text-base leading-6 tracking-wide">
            Agriculture supports more than 40% of India&apos;s population
            directly or indirectly and continues to witness strong
            modernization through mechanization, irrigation expansion,
            agro-processing development, food supply infrastructure, digital
            agriculture, and rural infrastructure investments.
          </p>

          <p className="mx-auto mt-5 max-w-[1260px] text-base leading-6 tracking-wide">
            India&apos;s agriculture and allied sectors are estimated to
            contribute approximately 18% of the country&apos;s GDP, while the
            Indian food processing market is projected to exceed US$ 700
            billion by 2030.
          </p>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">

            <WhiteMarketCard
              title="The agriculture equipment and farm mechanization market is also expanding rapidly due to increasing investments in:"
              points={marketGrowthAreas}
            />

            <WhiteMarketCard
              title="The Government continues to invest significantly in:"
              points={agricultureInvestmentPoints}
            />

          </div>

          {/* FULL WIDTH LAST CARD */}

          <div className="mt-7 w-full rounded-[20px] border-[3px] border-[#D4A017] bg-white p-8 text-[#071B3B] shadow-[0_0_28px_rgba(212,160,23,0.12)]">

            <h3 className="font-serif text-lg font-bold leading-6 tracking-wide text-[#D4A017] sm:text-xl">
              Government organizations and procurement authorities regularly
              procure:
            </h3>

            <div className="mt-5 grid gap-x-10 gap-y-1.5 text-base leading-6 md:grid-cols-2">

              {agricultureProcurementItems.map((item) => (
                <div key={item}>
                  • {item}
                </div>
              ))}

            </div>

            <p className="mt-6 text-base leading-6">
              through structured procurement and tendering systems.
            </p>

          </div>

          <p className="mt-8 text-center text-base leading-6 tracking-wide text-white">
            The continuous expansion of India&apos;s agriculture and agro
            ecosystem has significantly increased the demand for professional
            tender consultancy, procurement documentation support, vendor
            registration assistance, GeM services, compliance coordination,
            technical bid preparation, and post-tender support services for
            businesses operating in this sector.
          </p>

        </div>

      </section>

      {/* =====================================================
          GOVERNMENT INITIATIVES
      ====================================================== */}

      <section className="bg-white px-6 py-12 sm:px-8 md:px-10 xl:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <h2 className="text-center font-serif text-3xl font-extrabold leading-tight tracking-[2px] text-[#D4A017] sm:text-4xl md:text-5xl">
            Government Agriculture{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Agro Procurement Initiatives
          </h2>

          <p className="mx-auto mt-6 max-w-[896px] text-center text-base font-bold leading-6 text-[#071B3B]">
            India&apos;s agriculture sector is supported by major Government
            rural development and food security initiatives.
          </p>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">

            <NavyCard
              title="Major Government initiatives include:"
              points={governmentInitiatives}
            />

            <NavyCard
              title="Procurement activities are regularly managed by:"
              points={procurementAuthorities}
            />

          </div>

          <p className="mt-7 text-center text-base leading-6 text-[#071B3B]">
            These organizations regularly procure agricultural equipment,
            irrigation systems, agro-processing solutions, food storage
            infrastructure, fertilizers, warehousing systems, and rural
            infrastructure services through structured procurement systems.
          </p>

        </div>

      </section>

      {/* =====================================================
          PROCUREMENT AREAS
      ====================================================== */}

      <section className="bg-white px-6 py-12 sm:px-8 md:px-10 xl:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Agriculture{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Agro Procurement Areas We Support
          </SectionTitle>

          <p className="mx-auto mt-5 max-w-[836px] text-center text-base font-bold leading-6 text-[#071B3B]">
            Tender Elite provides procurement consultancy and tender support
            services for areas including:
          </p>

          <div className="mt-8 grid gap-7 lg:grid-cols-3">

            {procurementAreas.map((area) => (
              <NavyCard
                key={area.title}
                title={area.title}
                points={area.points}
              />
            ))}

          </div>

          <p className="mt-6 text-center text-base font-bold text-[#071B3B]">
            and many other agriculture and agro-related procurement categories.
          </p>

        </div>

      </section>

      {/* =====================================================
          COMMON PROCUREMENT CHALLENGES
          GOLDEN HEADING
          NO CARD HEADINGS
          NO HOVER EFFECT
      ====================================================== */}

      <section className="bg-white px-6 py-10 sm:px-8 md:px-10 xl:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <h2 className="text-center font-serif text-3xl font-extrabold leading-tight tracking-[2px] text-[#D4A017] sm:text-4xl md:text-5xl">
            Common Procurement Challenges in the Agriculture{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Agro Industry
          </h2>

          <p className="mx-auto mt-6 max-w-[1050px] text-center text-base font-bold leading-6 text-[#071B3B]">
            Agriculture and agro tenders often involve highly detailed and
            compliance-intensive requirements such as:
          </p>

          <div className="mx-auto mt-7 grid max-w-[1180px] gap-7 lg:grid-cols-2">

            {/* LEFT */}

            <div className="rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-7 py-8 text-white shadow-[0_0_25px_rgba(212,160,23,0.12)]">

              <div className="space-y-1.5 font-serif text-base leading-6 tracking-wide">

                {procurementChallengesLeft.map((item) => (
                  <div key={item}>
                    • {item}
                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div className="rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-7 py-8 text-white shadow-[0_0_25px_rgba(212,160,23,0.12)]">

              <div className="space-y-1.5 font-serif text-base leading-6 tracking-wide">

                {procurementChallengesRight.map((item) => (
                  <div key={item}>
                    • {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

          <p className="mx-auto mt-7 max-w-[1100px] text-center text-base font-bold leading-6 text-[#071B3B]">
            Proper management of these requirements is critical for successful
            procurement participation and vendor qualification.
          </p>

        </div>

      </section>

      {/* =====================================================
          HOW TENDER ELITE SUPPORTS
          3 x 2 CARDS
          SUBTLE HOVER
          TEXT DOES NOT CHANGE
      ====================================================== */}

      <section className="bg-white px-6 py-10 sm:px-8 md:px-10 xl:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <h2 className="text-center font-serif text-3xl font-extrabold leading-tight tracking-[2px] text-[#D4A017] sm:text-4xl md:text-5xl">
            How Tender Elite Supports Agriculture Businesses
          </h2>

          <p className="mx-auto mt-6 max-w-[1000px] text-center text-base font-bold leading-6 text-[#071B3B]">
            Tender Elite helps agro companies and agricultural solution
            providers manage procurement participation professionally through
            structured consultancy and documentation support services.
          </p>

          <p className="mx-auto mt-3 text-center text-base font-bold text-[#071B3B]">
            Our services include:
          </p>

          {/* 3 x 2 */}

          <div className="mx-auto mt-8 grid max-w-[1080px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

{supportServices.map((service) => (
  <Link
    key={service.name}
    href={service.link}
                className="
                  group
                  flex
                  min-h-[150px]
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[20px]
                  border-[3px]
                  border-[#D4A017]
                  bg-[#071B3B]
                  px-6
                  py-7
                  text-center
                  shadow-[0_0_22px_rgba(212,160,23,0.14)]
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-2
                  hover:border-[#F1C75B]
                  hover:shadow-[0_14px_35px_rgba(212,160,23,0.30)]
                "
              >

                <h3
                  className="
                    w-full
                    max-w-full
                    break-words
                    font-serif
                    text-[20px]
                    font-semibold
                    leading-7
                    tracking-wide
                    text-white
                    sm:text-[21px]
                  "
                >
                  {service.name}
                </h3>

              </Link>
            ))}

          </div>

          {/* VIEW MORE */}

          <div className="mt-7 text-center">

            <Link
              href="/services"
              className="inline-flex rounded-2xl bg-[#D4A017] px-9 py-3 text-sm font-bold text-[#071B3B] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#C49210] hover:shadow-[0_10px_24px_rgba(212,160,23,0.32)]"
            >
              View More
            </Link>

          </div>

          {/* BOTTOM TEXT */}

          <p className="mx-auto mt-8 max-w-[1050px] text-center text-base font-bold leading-6 text-[#071B3B]">
            We help businesses improve procurement readiness, documentation
            quality, compliance management, and tender participation
            efficiency.
          </p>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B3B] px-6 py-12 text-white sm:px-8 md:px-10 xl:px-[80px]">

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg,#B71432 0px,#B71432 28px,transparent 28px,transparent 54px)",
          }}
        />

        <div className="relative mx-auto max-w-[1280px]">

          <SectionTitle>
            Why Agriculture{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Agro Businesses Choose Tender Elite
          </SectionTitle>

          <div className="mx-auto mt-9 grid max-w-[1190px] gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {whyChooseCards.map((title) => (
              <WhyCard
                key={title}
                title={title}
              />
            ))}

          </div>

          <p className="mx-auto mt-9 max-w-[1196px] text-center text-base font-medium leading-8 tracking-wide text-white">
            At Tender Elite, we help agriculture and agro businesses manage
            procurement participation professionally through structured tender
            consultancy, technical documentation support, compliance
            coordination, and procurement assistance that improves participation
            readiness and operational efficiency.
          </p>

        </div>

      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */}

      <section className="bg-white px-6 py-12 sm:px-8 md:px-10 xl:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Locations We Serve
          </SectionTitle>

          <div className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

{locations.map((location) => (
  <LocationCard
    key={location.name}
    name={location.name}
    image={location.image}
    link={location.link}
  />
))}

          </div>

          <div className="mt-8 text-center">

            <Link
              href="/locations"
              className="inline-flex rounded-2xl bg-[#D4A017] px-8 py-3 font-semibold text-[#071B3B] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(212,160,23,0.28)]"
            >
              View More
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-white px-6 py-7 sm:px-8 md:px-10 xl:px-[80px]">

        <div className="mx-auto max-w-[1062px] rounded-[30px] bg-[#071B3B] px-7 py-10 text-center sm:px-10">

          <h2 className="font-serif text-2xl font-semibold tracking-[2px] text-[#D4A017] sm:text-3xl">
            Need Professional Agriculture Tender Consultancy Support?
          </h2>

          <p className="mx-auto mt-5 max-w-[920px] font-serif text-lg font-semibold leading-7 tracking-widest text-white sm:text-xl">
            Get expert assistance for agriculture tender participation, agro
            procurement documentation, vendor registration, GeM support,
            technical bid preparation, and procurement compliance management.
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-7 flex max-w-[380px] items-center justify-center gap-3 rounded-[30px] bg-[#B71432] px-6 py-3 text-base font-semibold tracking-widest text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#971029]"
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#071B3B]">
              →
            </span>

            Get Agriculture Tender Support

          </Link>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

    </main>
  );
}