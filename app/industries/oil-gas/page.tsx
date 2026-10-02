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
   MARKET SIZE
========================================================= */

const marketSegments = [
  "Upstream Exploration",
  "Oil & Gas Refining",
  "Petrochemical Industry",
  "LNG Infrastructure",
  "Pipeline Infrastructure",
  "City Gas Distribution",
  "Fuel Storage Systems",
  "Drilling Operations",
  "Industrial Fabrication",
  "Engineering Services",
  "Instrumentation Systems",
  "Utility Infrastructure",
];

const governmentInvestments = [
  "Refinery Expansion Projects",
  "LNG Terminal Infrastructure",
  "Pipeline Infrastructure Development",
  "City Gas Distribution (CGD) Networks",
  "Petrochemical Infrastructure",
  "Strategic Petroleum Reserves",
  "Gas-Based Energy Infrastructure",
  "Industrial Utility Systems",
  "Energy Transportation Infrastructure",
  "Clean Energy Transition Programs",
];

const procurementOpportunities = [
  "Refinery modernization projects",
  "Pipeline infrastructure development",
  "LNG & storage infrastructure",
  "Industrial utility systems",
  "Petrochemical plant expansion",
  "Oil & gas EPC projects",
  "Engineering & fabrication works",
  "Industrial automation systems",
  "Safety & surveillance infrastructure",
  "Maintenance & shutdown contracts",
  "Industrial machinery & equipment",
  "Instrumentation systems",
  "Mechanical & electrical systems",
  "HVAC & facility infrastructure",
  "Industrial manpower services",
  "AMC & maintenance contracts",
];

/* =========================================================
   GOVERNMENT PROCUREMENT
========================================================= */

const governmentInitiatives = [
  "National Gas Grid Expansion",
  "City Gas Distribution (CGD) Programs",
  "LNG Infrastructure Development",
  "Refinery Expansion Projects",
  "Petrochemical Development Programs",
  "Strategic Petroleum Reserve Projects",
  "Energy Infrastructure Modernization",
  "Clean Energy Transition Programs",
  "Industrial Corridor Development",
  "Pipeline Infrastructure Expansion",
];

const procurementAuthorities = [
  "ONGC",
  "IOCL",
  "BPCL",
  "HPCL",
  "GAIL",
  "Oil India Limited (OIL)",
  "Petronet LNG",
  "Refineries & Petrochemical Units",
  "Energy Infrastructure PSUs",
  "Pipeline Infrastructure Companies",
  "Industrial Development Authorities",
  "Power & Energy Organizations",
];

/* =========================================================
   PROCUREMENT AREAS
========================================================= */

const procurementAreas = [
  [
    "Oil & Gas EPC Projects",
    "Pipeline Infrastructure Projects",
    "Refinery Infrastructure Works",
    "Industrial Fabrication Services",
    "Instrumentation & Automation Systems",
    "Utility Infrastructure Projects",
  ],
  [
    "Mechanical & Electrical Works",
    "LNG Infrastructure Projects",
    "Petrochemical Infrastructure",
    "HVAC & Utility Systems",
    "Industrial Safety Systems",
  ],
  [
    "Engineering Consultancy Services",
    "Industrial Maintenance Contracts",
    "AMC & Shutdown Services",
    "Facility Management Services",
    "Industrial Manpower Services",
  ],
];

/* =========================================================
   CHALLENGES
========================================================= */

const challengesLeft = [
  "Industrial safety compliance standards",
  "Engineering & technical specifications",
  "OEM authorization requirements",
  "Product testing & certification requirements",
  "Quality assurance documentation",
  "Vendor registration procedures",
];

const challengesRight = [
  "GeM compliance & catalogue requirements",
  "Similar project experience criteria",
  "Industrial manpower qualification",
  "Multi-stage technical evaluations",
  "Financial qualification requirements",
  "Shutdown & maintenance compliance standards",
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
  "Professional Oil & Gas Procurement Consultancy",
  "Strong Technical Documentation Expertise",
  "Multi-Portal Tender Participation Expertise",
  "GeM & Vendor Registration Assistance",
  "OEM & Compliance Coordination Support",
  "Experience Supporting Industrial Infrastructure Projects",
  "Structured Documentation & Verification Process",
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

        {/* DESKTOP NAVIGATION */}

        <nav className="ml-auto hidden items-center gap-2 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                rounded-[20px]
                border
                border-slate-200
                bg-[#D4A017]
                px-6
                py-3
                text-sm
                font-bold
                text-black
                shadow-[0_8px_18px_rgba(0,0,0,0.12)]
                transition-all
                duration-200
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
              ml-2
              rounded-[20px]
              border
              border-[#FFA629]
              bg-[#B71432]
              px-7
              py-3
              text-sm
              font-bold
              text-white
              shadow-[0_8px_18px_rgba(0,0,0,0.12)]
              transition-all
              duration-200
              hover:-translate-y-0.5
            "
          >
            Contact Us
          </Link>
        </nav>

        {/* MOBILE / TABLET NAVIGATION */}

        <details className="relative ml-auto xl:hidden">
          <summary
            className="
              flex
              h-10
              w-10
              cursor-pointer
              list-none
              items-center
              justify-center
              rounded-xl
              border
              border-[#D4A017]
              bg-[#D4A017]
              text-[#071B3B]
              shadow-md
              sm:h-11
              sm:w-11
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
              absolute
              right-0
              top-[48px]
              w-[220px]
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-3
              shadow-[0_15px_35px_rgba(0,0,0,0.18)]
              sm:w-[235px]
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  block
                  rounded-xl
                  px-4
                  py-3
                  text-base
                  font-bold
                  text-[#071B3B]
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
                mt-2
                block
                rounded-xl
                bg-[#B71432]
                px-4
                py-3
                text-center
                text-base
                font-bold
                text-white
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
  twoColumns = false,
  className = "",
}: {
  title?: string;
  points: string[];
  twoColumns?: boolean;
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

      <div
        className={`
          mt-5
          ${
            twoColumns
              ? "grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2"
              : "space-y-1.5"
          }
          text-sm
          leading-6
          tracking-wide
          sm:text-base
        `}
      >
        {points.map((point) => (
          <div key={point}>• {point}</div>
        ))}
      </div>
    </article>
  );
}

/* =========================================================
   WHITE MARKET CARD
========================================================= */

function MarketCard({
  title,
  points,
  children,
}: {
  title: string;
  points?: string[];
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

      {points && points.length > 0 && (
        <div
          className="
            mt-5
            space-y-1.5
            text-sm
            leading-6
            sm:text-base
          "
        >
          {points.map((point) => (
            <div key={point}>• {point}</div>
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
            text-[#071B3B]
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
        ease-out
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
        h-[175px]
        w-full
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
        sm:h-[195px]
      "
    >
      <img
        src={image}
        alt={name}
        width={270}
        height={195}
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

export default function OilGasPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#071B3B]">

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
                Oil{" "}
                <span className="font-sans">
                  &amp;
                </span>{" "}
                Gas Industry
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
                  The Oil &amp; Gas Industry is one of India&apos;s most
                  strategically important infrastructure and energy sectors,
                  supporting fuel supply, energy security, industrial
                  production, transportation systems, petrochemical operations,
                  pipeline infrastructure, refinery operations, and large-scale
                  industrial development across the country.
                </p>

                <p>
                  The sector includes oil exploration, refining,
                  petrochemicals, LNG infrastructure, gas distribution systems,
                  pipeline infrastructure, storage facilities, drilling
                  operations, engineering services, industrial fabrication,
                  utility systems, fuel transportation, energy infrastructure,
                  safety systems, instrumentation, maintenance services, and
                  EPC projects.
                </p>

              </div>

            </div>

            <div
              className="
                w-full
                overflow-hidden
                rounded-[20px]
                shadow-[0_0_30px_rgba(0,0,0,0.55)]
              "
            >
              <img
                src="/images/oil1.png"
                alt="Oil and Gas Industry"
                width={674}
                height={450}
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

            <div className="w-full space-y-5">

              <img
                src="/images/oil2.png"
                alt="Oil and Gas Industry Overview"
                width={519}
                height={350}
                className="
                  block
                  h-auto
                  w-full
                  rounded-[20px]
                  object-cover
                  shadow-[0_0_20px_rgba(0,0,0,0.16)]
                  lg:h-[350px]
                "
              />

              <img
                src="/images/oil3.png"
                alt="Oil and Gas Infrastructure"
                width={519}
                height={288}
                className="
                  block
                  h-auto
                  w-full
                  rounded-[20px]
                  object-cover
                  shadow-[0_0_20px_rgba(0,0,0,0.16)]
                  lg:h-[288px]
                "
              />

            </div>

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
                  India&apos;s growing energy demand, industrial expansion,
                  transportation growth, urbanization, and infrastructure
                  modernization have significantly increased procurement
                  opportunities within the oil and gas sector.
                </p>

                <p>
                  Government organizations, Oil PSUs, refineries, pipeline
                  corporations, LNG terminals, petrochemical companies, city
                  gas distribution networks, power plants, industrial
                  infrastructure authorities, and energy organizations
                  regularly procure engineering services, industrial equipment,
                  safety systems, fabrication works, EPC services, maintenance
                  contracts, instrumentation systems, utility infrastructure,
                  and facility management services through structured
                  procurement and tendering processes.
                </p>

                <p>
                  The Government of India continues to strengthen the sector
                  through initiatives related to energy security, refinery
                  expansion, natural gas infrastructure development, LNG
                  terminals, strategic petroleum reserves, pipeline
                  infrastructure expansion, city gas distribution (CGD),
                  petrochemical infrastructure growth, and clean energy
                  transition programs.
                </p>

                <p>
                  Due to the highly technical and compliance-intensive nature
                  of oil and gas procurement projects, businesses participating
                  in this sector are required to manage engineering standards,
                  safety certifications, technical specifications, vendor
                  registrations, OEM approvals, industrial compliance
                  requirements, quality standards, and procurement documentation
                  professionally.
                </p>

                <p>
                  Tender Elite provides specialized tender consultancy and
                  procurement support services for oil &amp; gas contractors,
                  engineering companies, fabrication firms, industrial
                  equipment suppliers, EPC contractors, instrumentation
                  companies, utility infrastructure providers, pipeline
                  contractors, and industrial service companies across India.
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
            lg:px-[72px]
            lg:py-14
          "
        >

          <SectionTitle>
            Oil{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Gas Industry Market Size{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Industry Growth
          </SectionTitle>

          <div
            className="
              mx-auto
              mt-6
              max-w-[1270px]
              space-y-5
              text-sm
              leading-6
              tracking-wide
              text-white
              sm:text-base
            "
          >

            <p>
              India&apos;s Oil &amp; Gas Industry is one of the country&apos;s
              largest industrial and energy sectors and contributes
              significantly to industrial development, infrastructure growth,
              manufacturing, transportation, and energy security.
            </p>

            <p>
              India is among the world&apos;s largest consumers of crude oil
              and natural gas, and the sector continues to witness rapid
              expansion due to increasing fuel demand, refinery modernization,
              petrochemical growth, LNG infrastructure development, and city gas
              distribution expansion.
            </p>

            <p>
              The Indian oil and gas market is estimated to exceed US$ 150
              billion and continues to grow strongly across upstream, midstream,
              and downstream segments.
            </p>

          </div>

          {/* =================================================
              MARKET CARD 1
          ================================================== */}

          <div className="mt-7">

            <MarketCard
              title="The Government continues to invest significantly in:"
              points={governmentInvestments}
            />

          </div>

          {/* =================================================
              MARKET CARD 2
          ================================================== */}

          <div className="mt-5">

            <MarketCard
              title="Large-scale procurement opportunities are continuously generated through:"
              points={[
                "Refinery modernization projects",
                "Pipeline infrastructure development",
                "LNG & storage infrastructure",
                "Industrial utility systems",
                "Petrochemical plant expansion",
                "Oil & gas EPC projects",
                "Engineering & fabrication works",
                "Industrial automation systems",
                "Safety & surveillance infrastructure",
                "Maintenance & shutdown contracts",
              ]}
            />

          </div>

          {/* =================================================
              MARKET CARD 3
          ================================================== */}

          <div className="mt-5">

            <MarketCard
              title="Government organizations and procurement authorities regularly procure:"
              points={procurementOpportunities}
            />

          </div>

          <p
            className="
              mx-auto
              mt-8
              max-w-[1200px]
              text-center
              text-sm
              leading-6
              tracking-wide
              text-white
              sm:text-base
            "
          >
            The continuous expansion of India&apos;s oil and gas infrastructure
            ecosystem has significantly increased the demand for professional
            tender consultancy, procurement documentation support, vendor
            registration assistance, GeM services, compliance coordination,
            technical bid preparation, OEM coordination, and post-tender
            support services for businesses operating in this sector.
          </p>

        </div>

      </section>

      {/* =====================================================
          GOVERNMENT PROCUREMENT INITIATIVES
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
            Government Oil{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Gas Procurement Initiatives
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-5
              max-w-[1028px]
              text-center
              text-sm
              leading-6
              tracking-wide
              text-gray-600
              sm:text-base
            "
          >
            India&apos;s oil and gas sector is supported by major Government
            energy and industrial infrastructure development initiatives.
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
              title="Major Government initiatives include:"
              points={governmentInitiatives}
              className="min-h-[420px]"
            />

            {/* 2ND CARD — ALL POINTS IN ONE COLUMN */}

            <DarkCard
              title="Procurement activities are regularly managed by:"
              points={procurementAuthorities}
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
            These organizations regularly procure industrial systems,
            engineering services, fabrication solutions, instrumentation
            infrastructure, safety systems, utility infrastructure, and
            maintenance services through structured procurement systems.
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
            Oil{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Gas Procurement Areas We Support
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-5
              max-w-[836px]
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
                  hover:-translate-y-1
                "
              />
            ))}

          </div>

          <p
            className="
              mx-auto
              mt-6
              max-w-[628px]
              text-center
              text-sm
              leading-6
              sm:text-base
            "
          >
            and many other oil and gas-related procurement categories.
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
            Common Procurement Challenges in the Oil{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Gas Industry
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-5
              max-w-[984px]
              text-center
              text-sm
              leading-6
              sm:text-base
            "
          >
            Oil and gas tenders often involve highly technical and
            compliance-intensive requirements such as:
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
              points={challengesLeft}
              className="min-h-[250px]"
            />

            <DarkCard
              points={challengesRight}
              className="min-h-[250px]"
            />

          </div>

          <p
            className="
              mx-auto
              mt-7
              max-w-[984px]
              text-center
              text-sm
              leading-6
              sm:text-base
            "
          >
            Proper management of these requirements is critical for successful
            procurement participation and project qualification.
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
            How Tender Elite Supports Oil{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Gas Businesses
          </h2>

          <div
            className="
              mx-auto
              mt-5
              max-w-[984px]
              text-center
              text-sm
              leading-6
              sm:text-base
            "
          >

            <p>
              Tender Elite helps oil &amp; gas contractors and industrial
              solution providers manage procurement participation professionally
              through structured consultancy and documentation support
              services.
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
              max-w-[984px]
              text-center
              text-sm
              font-bold
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
          WHY CHOOSE
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

          <h2
            className="
              mx-auto
              max-w-[1150px]
              text-center
              font-serif
              text-3xl
              font-bold
              leading-tight
              tracking-[1px]
              text-[#D4A017]
              sm:text-4xl
              md:text-5xl
            "
          >
            Why Oil{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Gas Businesses Choose Tender Elite
          </h2>

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
              max-w-[1196px]
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
            At Tender Elite, we help oil &amp; gas companies and industrial
            contractors manage procurement participation professionally through
            structured tender consultancy, technical documentation support,
            compliance coordination, and procurement assistance that improves
            participation readiness and operational efficiency.
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
            max-w-[1062px]
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
              Need Professional Oil{" "}
              <span className="font-sans">
                &amp;
              </span>{" "}
              Gas Tender Consultancy Support?
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[917px]
                font-serif
                text-sm
                font-semibold
                leading-6
                tracking-widest
                text-white
                sm:text-lg
              "
            >
              Get expert assistance for oil &amp; gas tender participation,
              industrial procurement documentation, vendor registration, GeM
              support, technical bid preparation, and procurement compliance
              management.
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

              Get Oil{" "}
              <span className="font-sans">
                &amp;
              </span>{" "}
              Gas Tender Support

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