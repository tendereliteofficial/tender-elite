import Link from "next/link";
import type { ReactNode } from "react";

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
   MARKET SIZE / GROWTH
========================================================= */

const railwayInvestmentAreas = [
  "Railway Electrification Projects",
  "Station Redevelopment Projects",
  "Dedicated Freight Corridors",
  "Metro Rail Expansion",
  "High-Speed Rail Infrastructure",
  "Railway Track Modernization",
  "Signalling & Telecommunication Systems",
  "Smart Railway Technologies",
  "Railway Bridges & Tunnels",
  "Rolling Stock Manufacturing",
  "Railway IT & Surveillance Systems",
  "Logistics & Cargo Infrastructure",
];

/* =========================================================
   PROCUREMENT AUTHORITIES / PROCUREMENT PRODUCTS
========================================================= */

const railwayProcurementProducts = [
  "Railway construction services",
  "Track infrastructure systems",
  "Electrical & signalling systems",
  "Surveillance & security systems",
  "Facility management services",
  "Engineering consultancy services",
  "Railway IT solutions",
  "Maintenance contracts",
  "Mechanical & fabrication services",
  "HVAC systems",
  "Communication systems",
  "Railway equipment & components",
];

/* =========================================================
   GOVERNMENT INITIATIVES
========================================================= */

const governmentInitiatives = [
  "Railway Electrification Programs",
  "Vande Bharat Expansion Projects",
  "Dedicated Freight Corridor (DFC) Projects",
  "Station Redevelopment Projects",
  "High-Speed Rail Projects",
  "PM Gati Shakti Mission",
  "Smart Railway Modernization Programs",
  "Metro Rail Expansion Projects",
  "Digital Railway Infrastructure Development",
  "Railway Safety & Surveillance Modernization",
  "Logistics Infrastructure Expansion",
];

/* =========================================================
   PROCUREMENT ORGANIZATIONS
========================================================= */

const procurementOrganizations = [
  "Indian Railways",
  "Railway Zones",
  "RDSO",
  "RailTel",
  "DFCCIL",
  "Metro Rail Corporations",
  "IRCON",
  "RVNL",
  "Rail Infrastructure PSUs",
  "Railway Production Units",
  "Railway Electrification Authorities",
];

/* =========================================================
   PROCUREMENT AREAS
========================================================= */

const procurementAreas = [
  [
    "Railway Infrastructure Projects",
    "Railway Electrification Works",
    "Track & Civil Construction Works",
    "Station Redevelopment Projects",
    "Railway Signalling Systems",
    "Railway Electrical Systems",
  ],
  [
    "Surveillance & Security Infrastructure",
    "Railway IT & Networking Solutions",
    "Mechanical & Fabrication Works",
    "HVAC & Utility Systems",
    "Facility Management Services",
  ],
  [
    "Railway Equipment Supply",
    "Engineering Consultancy Services",
    "AMC & Maintenance Contracts",
    "Metro Rail Infrastructure Projects",
    "Railway Manpower Services",
  ],
];

/* =========================================================
   CHALLENGES
========================================================= */

const railwayChallengesLeft = [
  "RDSO compliance requirements",
  "Detailed technical specifications",
  "Vendor approval procedures",
  "OEM authorization requirements",
  "Product testing & certification requirements",
  "Railway safety compliance standards",
];

const railwayChallengesRight = [
  "Similar work experience criteria",
  "Technical manpower qualification",
  "Financial qualification requirements",
  "Multi-stage technical evaluations",
  "GeM compliance & catalogue requirements",
  "Performance testing & inspection procedures",
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
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

const whyChoose = [
  "Professional Railway Procurement Consultancy",
  "Strong Technical Documentation Expertise",
  "Multi-Portal Tender Participation Expertise",
  "GeM & Vendor Registration Assistance",
  "RDSO & Compliance Coordination Support",
  "Structured Documentation & Verification Process",
  "Experience Supporting Complex Railway Infrastructure Projects",
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
      <div
        className="
          mx-auto
          flex
          min-h-[72px]
          w-full
          max-w-[1440px]
          items-center
          px-3
          sm:min-h-[82px]
          sm:px-5
          md:min-h-[90px]
          md:px-7
          lg:px-10
        "
      >
        {/* LOGO */}

        <Link
          href="/"
          className="
            flex
            min-w-0
            shrink
            items-center
            gap-1.5
            transition-transform
            duration-300
            hover:scale-[1.01]
            sm:gap-2
          "
        >
          <img
            src="/images/logo-mark.png"
            alt="Tender Elite mark"
            className="
              h-[44px]
              w-auto
              shrink-0
              object-contain
              sm:h-[54px]
              md:h-[64px]
              lg:h-[68px]
            "
          />

          <img
            src="/images/logo-wordmark.png"
            alt="Tender Elite"
            className="
              h-auto
              w-[95px]
              max-w-full
              object-contain
              sm:w-[130px]
              md:w-[155px]
              lg:w-[195px]
            "
          />
        </Link>

        {/* DESKTOP NAV */}

        <nav className="ml-auto hidden items-center gap-2 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                rounded-[20px]
                border border-slate-200
                bg-[#D4A017]
                px-6 py-3
                text-sm font-bold text-black
                shadow-[0_8px_18px_rgba(0,0,0,0.12)]
                transition-all duration-200
                hover:-translate-y-0.5
                hover:text-white
              "
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="
              ml-2 rounded-[20px]
              border border-[#FFA629]
              bg-[#B71432]
              px-7 py-3
              text-sm font-bold text-white
              shadow-[0_8px_18px_rgba(0,0,0,0.12)]
              transition-all duration-200
              hover:-translate-y-0.5
            "
          >
            Contact Us
          </Link>
        </nav>

        {/* MOBILE + TABLET MENU */}

        <details className="relative ml-auto xl:hidden">
          <summary
            className="
              flex h-10 w-10 cursor-pointer list-none
              items-center justify-center
              rounded-xl
              border border-[#D4A017]
              bg-[#D4A017]
              text-[#071B3B]
              shadow-md
              sm:h-11 sm:w-11
            "
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
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

          <div
            className="
              absolute right-0 top-[48px]
              w-[220px]
              overflow-hidden
              rounded-2xl
              border border-slate-200
              bg-white p-3
              shadow-[0_15px_35px_rgba(0,0,0,0.18)]
              sm:w-[235px]
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  block rounded-xl
                  px-4 py-3
                  text-base font-bold text-[#071B3B]
                  transition-colors
                  hover:bg-[#D4A017]
                  hover:text-white
                "
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="
                mt-2 block rounded-xl
                bg-[#B71432]
                px-4 py-3
                text-center
                text-base font-bold text-white
                transition-colors
                hover:bg-[#971029]
              "
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
  children: ReactNode;
}) {
  return (
    <h2
      className="
        mx-auto
        max-w-[1200px]
        text-center
        font-serif
        text-3xl
        font-extrabold
        leading-tight
        tracking-[1px]
        text-[#D4A017]
        sm:text-4xl
        md:text-5xl
      "
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
  points,
  className = "",
}: {
  title?: string;
  points: string[];
  className?: string;
}) {
  return (
    <article
      className={`
        w-full
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-[#071B3B]
        p-5
        text-white
        sm:p-7
        ${className}
      `}
    >
      {title && (
        <h3
          className="
            text-center
            font-serif
            text-lg
            font-bold
            leading-7
            text-[#D4A017]
            sm:text-xl
          "
        >
          {title}
        </h3>
      )}

      <div className="mt-5 space-y-2 text-sm leading-6 tracking-wide sm:text-base">
        {points.map((point) => (
          <div key={point}>• {point}</div>
        ))}
      </div>
    </article>
  );
}

/* =========================================================
   MARKET CARD
========================================================= */

function MarketCard({
  title,
  points,
  twoColumns = false,
  children,
}: {
  title: string;
  points?: string[];
  twoColumns?: boolean;
  children?: ReactNode;
}) {
  return (
    <article
      className="
        w-full
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-white
        px-6
        py-6
        text-[#071B3B]
        sm:px-7
        sm:py-7
        lg:px-8
      "
    >
      <h3
        className="
          font-sans
          text-sm
          font-bold
          leading-6
          tracking-wide
          text-[#D4A017]
          sm:text-base
        "
      >
        {title}
      </h3>

      {points && (
        <div
          className={`
            mt-5
            ${
              twoColumns
                ? "grid grid-cols-1 gap-x-10 gap-y-1.5 sm:grid-cols-2"
                : "space-y-1.5"
            }
            text-sm leading-6
            sm:text-base
          `}
        >
          {points.map((point) => (
            <div key={point}>* {point}</div>
          ))}
        </div>
      )}

      {children && (
        <div
          className="
            mt-6
            space-y-4
            text-sm
            leading-6
            tracking-wide
            sm:text-base
          "
        >
          {children}
        </div>
      )}
    </article>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  title,
}: {
  title: string;
}) {
  return (
    <Link
      href="/services"
      className="
        group
        flex
        min-h-[130px]
        w-full
        items-center
        justify-center
        overflow-hidden
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-[#071B3B]
        px-5
        py-6
        text-center
        shadow-[0_0_22px_rgba(212,160,23,0.14)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#F1C75B]
        hover:shadow-[0_14px_35px_rgba(212,160,23,0.30)]
        sm:min-h-[150px]
        sm:px-6
        sm:py-7
      "
    >
      <h3
        className="
          w-full
          max-w-full
          break-words
          font-serif
          text-lg
          font-semibold
          leading-7
          tracking-wide
          text-white
          sm:text-xl
        "
      >
        {title}
      </h3>
    </Link>
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
        mx-auto
        h-[195px]
        w-[270px]
        max-w-full
        overflow-hidden
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-[#071B3B]
        shadow-[0_8px_20px_rgba(0,0,0,0.16)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#F1C75B]
        hover:shadow-[0_16px_35px_rgba(212,160,23,0.32)]
      "
    >
      <img
        src={image}
        alt={name}
        width={270}
        height={195}
        className="
          block
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
          absolute inset-0
          bg-black/20
          transition-all duration-300
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
          px-4
          py-1.5
          text-xs
          font-bold
          text-white
          shadow-[0_4px_12px_rgba(0,0,0,0.25)]
          transition-all
          duration-300
          group-hover:bg-[#D4A017]
          group-hover:text-[#071B3B]
          sm:px-5
          sm:text-sm
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

export default function RailwayPage() {
  return (
    <main
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-white
        text-[#071B3B]
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="w-full bg-[#071B3B]">
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            py-10
            sm:px-6
            sm:py-12
            lg:px-[80px]
          "
        >
          <div
            className="
              grid
              items-center
              gap-8
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-12
            "
          >
            {/* LEFT */}

            <div className="min-w-0">
              <h1
                className="
                  max-w-[620px]
                  font-serif
                  text-4xl
                  font-bold
                  leading-[1.05]
                  text-[#D4A017]
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Railway Industry
              </h1>

              <div
                className="
                  mt-6
                  h-[2px]
                  w-full
                  max-w-[543px]
                  rounded-full
                  bg-[#D4A017]
                "
              />

              <div
                className="
                  mt-6
                  space-y-5
                  text-sm
                  leading-6
                  tracking-wide
                  text-white
                  sm:text-base
                "
              >
                <p>
                  The Railway Industry is one of India&apos;s largest and most
                  strategically important infrastructure sectors, playing a
                  critical role in transportation, logistics, industrial
                  connectivity, passenger mobility, freight movement, urban
                  transit, and national economic development.
                </p>

                <p>
                  Indian Railways is among the world&apos;s largest railway
                  networks and continues to witness large-scale modernization,
                  electrification, digital transformation, infrastructure
                  expansion, station redevelopment, freight corridor
                  development, metro rail integration, and high-speed rail
                  initiatives across the country.
                </p>
              </div>
            </div>

            {/* HERO IMAGE */}

            <div
              className="
                w-full
                overflow-hidden
                rounded-[20px]
                shadow-[0_0_30px_rgba(0,0,0,0.55)]
              "
            >
              <img
                src="/images/railway1.png"
                alt="Railway Industry"
                width={644}
                height={437}
                className="
                  block
                  h-auto
                  w-full
                  object-cover
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRY OVERVIEW
      ====================================================== */}

      <section className="w-full bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1280px]
            px-5
            py-10
            sm:px-6
            sm:py-12
            lg:px-[80px]
          "
        >
          <div
            className="
              grid
              items-center
              gap-8
              lg:grid-cols-[519px_1fr]
              lg:gap-10
            "
          >
            {/* IMAGES */}

            <div className="w-full space-y-5">
              <img
                src="/images/railway2.png"
                alt="Railway Infrastructure"
                width={519}
                height={301}
                className="
                  block
                  h-auto
                  w-full
                  rounded-[20px]
                  object-cover
                "
              />

              <img
                src="/images/railway3.png"
                alt="Railway Modernization"
                width={519}
                height={289}
                className="
                  block
                  h-auto
                  w-full
                  rounded-[20px]
                  object-cover
                "
              />
            </div>

            {/* TEXT */}

            <div className="min-w-0 self-center">
              <h2
                className="
                  text-lg
                  tracking-wide
                  text-[#071B3B]
                  sm:text-xl
                "
              >
                INDUSTRY OVERVIEW
              </h2>

              <div
                className="
                  mt-6
                  space-y-5
                  text-sm
                  leading-6
                  tracking-wide
                  text-gray-600
                  sm:text-base
                "
              >
                <p>
                  The railway sector includes railway infrastructure
                  construction, track works, signalling systems, electrification,
                  rolling stock, station redevelopment, bridges, tunnels,
                  communication systems, surveillance systems, facility
                  management services, railway equipment supply, engineering
                  services, maintenance contracts, and smart railway
                  technologies.
                </p>

                <p>
                  Government organizations such as Indian Railways, Railway
                  Zones, Metro Rail Corporations, RailTel, Dedicated Freight
                  Corridor Corporation (DFCCIL), Railway PSU units, and
                  transportation authorities regularly procure engineering
                  solutions, railway equipment, electrical systems, signalling
                  infrastructure, IT systems, construction services, facility
                  management services, manpower services, and maintenance
                  solutions through structured procurement and tendering
                  processes.
                </p>

                <p>
                  The Government of India continues to prioritize railway
                  modernization and transportation infrastructure growth through
                  initiatives such as railway electrification, Vande Bharat
                  expansion, station redevelopment projects, freight corridor
                  development, smart railway systems, dedicated logistics
                  infrastructure, metro rail projects, and digital railway
                  transformation programs.
                </p>

                <p>
                  Due to the technical complexity and compliance-driven nature
                  of railway procurement projects, businesses participating in
                  this sector are required to manage strict technical
                  specifications, vendor approvals, RDSO compliance
                  requirements, quality certifications, OEM authorizations,
                  financial qualification criteria, and detailed procurement
                  documentation professionally.
                </p>

                <p>
                  Tender Elite provides specialized tender consultancy and
                  procurement support services for railway contractors,
                  infrastructure companies, engineering firms, equipment
                  manufacturers, system integrators, electrical contractors,
                  signalling solution providers, facility management companies,
                  and railway service providers across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MARKET SIZE & INDUSTRY GROWTH
      ====================================================== */}

      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-[#071B3B]
          text-white
        "
      >
        {/* STRIPED BACKGROUND */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.20]
            bg-[repeating-linear-gradient(
              90deg,
              rgba(183,20,50,0.48)_0px,
              rgba(183,20,50,0.48)_42px,
              transparent_42px,
              transparent_86px
            )]
          "
        />

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1280px]
            px-5
            py-10
            sm:px-6
            sm:py-12
            lg:px-[80px]
            lg:py-14
          "
        >
          <SectionTitle>
            Railway Industry Market Size{" "}
            <span className="font-sans">&amp;</span>{" "}
            Industry Growth
          </SectionTitle>

          <div
            className="
              mx-auto
              mt-6
              max-w-[1269px]
              space-y-5
              text-sm
              leading-6
              tracking-wide
              text-white
              sm:text-base
            "
          >
            <p>
              India&apos;s Railway Industry is one of the country&apos;s largest
              infrastructure and procurement-driven sectors, supported by
              continuous Government investment in transportation modernization,
              freight infrastructure, passenger mobility, railway
              electrification, and smart railway systems.
            </p>

            <p>
              Indian Railways operates one of the world&apos;s largest rail
              networks with thousands of ongoing infrastructure, modernization,
              maintenance, electrification, and station redevelopment projects
              across the country.
            </p>

            <p>
              The Government of India has significantly increased railway
              infrastructure spending over the past decade, supporting
              large-scale procurement and infrastructure expansion projects.
            </p>
          </div>

          {/* MAIN MARKET CARD */}

          <div className="mt-7">
            <MarketCard
              title="Major railway investment areas include:"
              points={railwayInvestmentAreas}
              twoColumns={true}
            >
              <p>
                The Dedicated Freight Corridor (DFC) projects, Vande Bharat
                train expansion, station modernization programs, and smart
                transportation initiatives continue to generate significant
                procurement opportunities for contractors, manufacturers,
                engineering firms, consultants, and service providers.
              </p>
            </MarketCard>
          </div>

          {/* SECOND MARKET CARD */}

          <div className="mt-5">
            <MarketCard
              title="Government organizations and railway procurement authorities regularly procure:"
              points={railwayProcurementProducts}
              twoColumns={false}
            >
              <p>
                through structured procurement and tendering systems.
              </p>

              <p>
                The continuous expansion and modernization of India&apos;s
                railway ecosystem has significantly increased the demand for
                professional tender consultancy, technical bid preparation,
                vendor registration support, GeM services, compliance
                management, RDSO documentation assistance, OEM coordination,
                and procurement consultancy services for businesses operating
                in the railway sector.
              </p>
            </MarketCard>
          </div>
        </div>
      </section>

      {/* =====================================================
          GOVERNMENT RAILWAY INFRASTRUCTURE & PROCUREMENT
      ====================================================== */}

      <section className="w-full bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1280px]
            px-5
            py-12
            sm:px-6
            sm:py-14
            lg:px-[80px]
          "
        >
          <SectionTitle>
            Government Railway Infrastructure{" "}
            <span className="font-sans">&amp;</span>{" "}
            Procurement Initiatives
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-5
              max-w-[1046px]
              text-center
              text-sm
              leading-6
              tracking-wide
              text-gray-600
              sm:text-base
            "
          >
            India&apos;s railway sector is supported by major transportation
            and infrastructure development programs.
          </p>

          <div
            className="
              mt-8
              grid
              gap-6
              lg:grid-cols-2
            "
          >
            <DarkCard
              title="Major Government railway initiatives include:"
              points={governmentInitiatives}
              className="min-h-[420px]"
            />

            <DarkCard
              title="Railway procurement activities are regularly managed by:"
              points={procurementOrganizations}
              className="min-h-[420px]"
            />
          </div>

          <p
            className="
              mx-auto
              mt-7
              max-w-[1050px]
              text-center
              text-sm
              leading-6
              sm:text-base
            "
          >
            These organizations regularly procure infrastructure services,
            engineering systems, signalling equipment, electrical
            infrastructure, IT systems, facility management services,
            surveillance solutions, and railway maintenance services through
            structured procurement systems.
          </p>
        </div>
      </section>

      {/* =====================================================
          PROCUREMENT AREAS
      ====================================================== */}

      <section className="w-full bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1280px]
            px-5
            py-12
            sm:px-6
            sm:py-14
            lg:px-[80px]
          "
        >
          <SectionTitle>
            Railway Procurement Areas We Support
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-5
              max-w-[834px]
              text-center
              text-sm
              leading-6
              tracking-wide
              text-gray-600
              sm:text-base
            "
          >
            Tender Elite provides procurement consultancy and tender support
            services for areas including:
          </p>

          <div
            className="
              mt-8
              grid
              gap-6
              lg:grid-cols-3
            "
          >
            {procurementAreas.map((items, index) => (
              <DarkCard
                key={index}
                points={items}
                className="
                  min-h-[240px]
                "
              />
            ))}
          </div>

          <p
            className="
              mx-auto
              mt-6
              max-w-[744px]
              text-center
              text-sm
              leading-6
              sm:text-base
            "
          >
            and many other railway-related procurement categories.
          </p>
        </div>
      </section>

      {/* =====================================================
          CHALLENGES
      ====================================================== */}

      <section className="w-full bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1280px]
            px-5
            py-10
            sm:px-6
            sm:py-12
            lg:px-[80px]
          "
        >
          <SectionTitle>
            Common Procurement Challenges in the Railway Industry
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-5
              max-w-[981px]
              text-center
              text-sm
              leading-6
              sm:text-base
            "
          >
            Railway tenders and procurement projects often involve highly
            technical and compliance-intensive requirements such as:
          </p>

          <div
            className="
              mx-auto
              mt-8
              grid
              max-w-[1060px]
              gap-6
              lg:grid-cols-2
            "
          >
            <DarkCard
              points={railwayChallengesLeft}
              className="min-h-[250px]"
            />

            <DarkCard
              points={railwayChallengesRight}
              className="min-h-[250px]"
            />
          </div>

          <p
            className="
              mx-auto
              mt-7
              max-w-[981px]
              text-center
              text-sm
              leading-6
              sm:text-base
            "
          >
            Proper management of these requirements is critical for successful
            procurement participation and technical qualification.
          </p>
        </div>
      </section>

      {/* =====================================================
          HOW TENDER ELITE SUPPORTS
      ====================================================== */}

      <section className="w-full bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1280px]
            px-5
            py-10
            sm:px-6
            sm:py-12
            lg:px-[80px]
          "
        >
          <h2
            className="
              mx-auto
              max-w-[1050px]
              text-center
              font-serif
              text-3xl
              font-extrabold
              leading-tight
              tracking-[1px]
              text-[#D4A017]
              sm:text-4xl
              md:text-5xl
            "
          >
            How Tender Elite Supports Railway Businesses
          </h2>

          <div
            className="
              mx-auto
              mt-5
              max-w-[981px]
              text-center
              text-sm
              leading-6
              sm:text-base
            "
          >
            <p>
              Tender Elite helps railway contractors, infrastructure companies,
              and engineering firms manage procurement participation
              professionally through structured consultancy and documentation
              support services.
            </p>

            <p className="mt-3 font-bold">
              Our services include:
            </p>
          </div>

          <div
            className="
              mx-auto
              mt-8
              grid
              w-full
              max-w-[1084px]
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
{services.map((service) => (
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

          <div className="mt-7 text-center">
            <Link
              href="/services"
              className="
                inline-flex
                min-w-[170px]
                items-center
                justify-center
                rounded-2xl
                bg-[#D4A017]
                px-8
                py-3
                text-sm
                font-medium
                text-[#071B3B]
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_28px_rgba(212,160,23,0.28)]
                sm:text-base
              "
            >
              View More
            </Link>
          </div>

          <p
            className="
              mx-auto
              mt-7
              max-w-[981px]
              text-center
              text-sm
              leading-6
              sm:text-base
            "
          >
            We help businesses improve procurement readiness, technical
            documentation quality, compliance management, and tender
            participation efficiency.
          </p>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE TENDER ELITE
      ====================================================== */}

      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-[#071B3B]
          text-white
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.08]
            bg-[repeating-linear-gradient(
              90deg,
              #B71432_0px,
              #B71432_28px,
              transparent_28px,
              transparent_54px
            )]
          "
        />

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1280px]
            px-5
            py-12
            sm:px-6
            sm:py-14
            lg:px-[80px]
          "
        >
          <SectionTitle>
            Why Railway Businesses Choose Tender Elite
          </SectionTitle>

          <div
            className="
              mx-auto
              mt-8
              grid
              w-full
              max-w-[1196px]
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {whyChoose.map((title) => (
              <article
                key={title}
                className="
                  flex
                  min-h-[210px]
                  items-center
                  justify-center
                  rounded-[20px]
                  border-2
                  border-[#D4A017]
                  bg-white
                  p-6
                  text-center
                  shadow-[0_8px_25px_rgba(0,0,0,0.14)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_16px_32px_rgba(212,160,23,0.26)]
                  sm:min-h-[230px]
                  lg:min-h-[250px]
                "
              >
                <h3
                  className="
                    w-full
                    font-serif
                    text-lg
                    font-semibold
                    leading-7
                    tracking-[1px]
                    text-[#D4A017]
                    sm:text-xl
                    sm:leading-8
                    md:text-2xl
                  "
                >
                  {title}
                </h3>
              </article>
            ))}
          </div>

          <p
            className="
              mx-auto
              mt-8
              max-w-[1193px]
              text-center
              font-serif
              text-base
              font-medium
              leading-7
              tracking-wide
              text-white
              sm:text-lg
              md:text-xl
              md:leading-8
            "
          >
            At Tender Elite, we help railway businesses manage procurement
            participation professionally through structured tender consultancy,
            technical documentation support, compliance coordination, and
            procurement assistance that improves participation readiness and
            operational efficiency.
          </p>
        </div>
      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */}

      <section className="w-full bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1280px]
            px-5
            py-12
            sm:px-6
            sm:py-14
            lg:px-[80px]
          "
        >
          <SectionTitle>
            Locations We Serve
          </SectionTitle>

          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
              lg:gap-6
            "
          >
            {locations.map((location) => (
              <LocationCard
                key={location.name}
                name={location.name}
                image={location.image}
                link={location.link}
              />
            ))}
          </div>

          <div className="mt-7 text-center">
            <Link
              href="/locations"
              className="
                inline-flex
                rounded-2xl
                bg-[#D4A017]
                px-8
                py-3
                text-sm
                font-medium
                text-[#071B3B]
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_25px_rgba(212,160,23,0.28)]
                sm:px-10
                sm:text-base
              "
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="w-full bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1060px]
            px-5
            py-8
            sm:px-6
            sm:py-10
          "
        >
          <div
            className="
              rounded-[30px]
              bg-[#071B3B]
              px-5
              py-10
              text-center
              sm:px-8
              sm:py-12
            "
          >
            <h2
              className="
                font-serif
                text-2xl
                font-semibold
                leading-tight
                tracking-[2px]
                text-[#D4A017]
                sm:text-3xl
              "
            >
              Need Professional Railway Tender Consultancy Support?
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[915px]
                font-serif
                text-sm
                font-semibold
                leading-6
                tracking-widest
                text-white
                sm:text-lg
              "
            >
              Get expert assistance for railway tender participation, RDSO
              documentation, vendor registration, GeM support, technical bid
              preparation, and procurement compliance management.
            </p>

            <Link
              href="/contact"
              className="
                mx-auto
                mt-7
                flex
                w-full
                max-w-[384px]
                items-center
                justify-center
                gap-3
                rounded-[30px]
                bg-[#B71432]
                px-5
                py-3
                text-sm
                font-semibold
                tracking-widest
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#971029]
                sm:text-base
              "
            >
              <span
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#071B3B]
                "
              >
                →
              </span>

              Get Railway Tender Support
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />
    </main>
  );
}