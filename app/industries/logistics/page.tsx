import Link from "next/link";
import type { ReactNode } from "react";

/* =========================================================
   DATA
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

const governmentInvestment = [
  "PM Gati Shakti Mission",
  "National Logistics Policy",
  "Bharatmala Project",
  "Sagarmala Programme",
  "Dedicated Freight Corridors",
  "Multimodal Logistics Parks",
  "Industrial Corridor Development",
  "Warehouse Modernization Programs",
  "Smart Transportation Infrastructure",
  "Port & Cargo Infrastructure",
];

const sectorGrowth = [
  "Warehousing Infrastructure",
  "Freight Transportation Systems",
  "Cold Chain Infrastructure",
  "Multimodal Logistics Networks",
  "Supply Chain Automation",
  "Port & Cargo Infrastructure",
  "Railway Freight Systems",
  "E-commerce Logistics",
  "Industrial Distribution Infrastructure",
  "Fleet Management Systems",
];

const procurementOpportunities = [
  "Transportation & fleet contracts",
  "Warehousing infrastructure projects",
  "Cold chain logistics systems",
  "Cargo & freight management services",
  "Material handling infrastructure",
  "Supply chain digitization projects",
  "Industrial storage infrastructure",
  "Logistics automation systems",
  "Utility transportation services",
  "Logistics maintenance contracts",
];

const governmentProcurement = [
  "Transportation services",
  "Warehousing systems",
  "Fleet management infrastructure",
  "Material handling systems",
  "Cargo handling solutions",
  "Cold chain infrastructure",
  "Logistics manpower services",
  "Supply chain IT systems",
  "Industrial storage systems",
  "Utility transportation services",
  "AMC & maintenance contracts",
  "Integrated logistics solutions",
];

/* =========================================================
   GOVERNMENT PROCUREMENT AUTHORITIES
========================================================= */

const procurementAuthorities = [
  "Railways",
  "Port Authorities",
  "Airport Authorities",
  "Defence Organizations",
  "Warehousing Corporations",
  "PSU Organizations",
  "Municipal Corporations",
  "Smart City Authorities",
  "Industrial Development Authorities",
  "Food Distribution Agencies",
  "Public Utility Organizations",
  "Transportation Departments",
];

/* =========================================================
   PROCUREMENT AREAS
========================================================= */

const supportAreas = [
  [
    "Transportation Service Contracts",
    "Warehousing Infrastructure Projects",
    "Freight & Cargo Management Services",
    "Cold Chain Infrastructure",
    "Fleet Management Systems",
    "Material Handling Infrastructure",
  ],
  [
    "Logistics Automation Systems",
    "Industrial Storage Infrastructure",
    "Port & Railway Logistics Services",
    "Supply Chain IT Systems",
    "Logistics Manpower Services",
  ],
  [
    "Utility Transportation Services",
    "Integrated Logistics Solutions",
    "AMC & Maintenance Contracts",
    "Distribution Infrastructure Projects",
    "Logistics Consultancy Services",
  ],
];

/* =========================================================
   CHALLENGES
========================================================= */

const challengeLeft = [
  "Transportation compliance standards",
  "Fleet documentation requirements",
  "Warehousing compliance standards",
  "Vendor registration procedures",
  "GeM compliance & catalogue requirements",
  "Manpower & labour compliance",
];

const challengeRight = [
  "Similar project experience criteria",
  "Multi-stage technical evaluations",
  "Financial qualification requirements",
  "Safety & operational compliance standards",
  "Service-level agreement (SLA) requirements",
  "Utility & cargo handling compliance standards",
];

/* =========================================================
   SERVICES
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

const whyChoose = [
  "Professional Logistics Procurement Consultancy",
  "Strong Documentation & Compliance Expertise",
  "Multi-Portal Tender Participation Expertise",
  "GeM & Vendor Registration Assistance",
  "Structured Documentation & Verification Process",
  "Experience Supporting Logistics Infrastructure Projects",
  "Compliance & Operational Documentation Coordination",
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
          mx-auto flex min-h-[72px] w-full max-w-[1440px]
          items-center px-3
          sm:min-h-[82px] sm:px-5
          md:min-h-[90px] md:px-7
          lg:px-10
        "
      >
        {/* LOGO */}

        <Link
          href="/"
          className="
            flex min-w-0 shrink items-center gap-1.5
            transition-transform duration-300 hover:scale-[1.01]
            sm:gap-2
          "
        >
          <img
            src="/images/logo-mark.png"
            alt="Tender Elite mark"
            className="
              h-[44px] w-auto shrink-0 object-contain
              sm:h-[54px]
              md:h-[64px]
              lg:h-[68px]
            "
          />

          <img
            src="/images/logo-wordmark.png"
            alt="Tender Elite"
            className="
              h-auto w-[95px] max-w-full object-contain
              sm:w-[130px]
              md:w-[155px]
              lg:w-[195px]
            "
          />
        </Link>

        {/* DESKTOP NAV */}

        <nav className="ml-auto hidden items-center gap-2 xl:flex">
          <Link
            href="/"
            className="
              rounded-[20px]
              border border-slate-200
              bg-[#D4A017]
              px-6 py-3
              text-sm font-bold text-black
              shadow-[0_8px_18px_rgba(0,0,0,0.12)]
              transition-all duration-200
              hover:-translate-y-0.5 hover:text-white
            "
          >
            Home
          </Link>

          <Link
            href="/services"
            className="
              rounded-[20px]
              border border-slate-200
              bg-[#D4A017]
              px-6 py-3
              text-sm font-bold text-black
              shadow-[0_8px_18px_rgba(0,0,0,0.12)]
              transition-all duration-200
              hover:-translate-y-0.5 hover:text-white
            "
          >
            Services
          </Link>

          <Link
            href="/industries"
            className="
              rounded-[20px]
              border border-slate-200
              bg-[#D4A017]
              px-6 py-3
              text-sm font-bold text-black
              shadow-[0_8px_18px_rgba(0,0,0,0.12)]
              transition-all duration-200
              hover:-translate-y-0.5 hover:text-white
            "
          >
            Industries
          </Link>

          <Link
            href="/insights"
            className="
              rounded-[20px]
              border border-slate-200
              bg-[#D4A017]
              px-6 py-3
              text-sm font-bold text-black
              shadow-[0_8px_18px_rgba(0,0,0,0.12)]
              transition-all duration-200
              hover:-translate-y-0.5 hover:text-white
            "
          >
            Insights
          </Link>

          <Link
            href="/about-us"
            className="
              rounded-[20px]
              border border-slate-200
              bg-[#D4A017]
              px-6 py-3
              text-sm font-bold text-black
              shadow-[0_8px_18px_rgba(0,0,0,0.12)]
              transition-all duration-200
              hover:-translate-y-0.5 hover:text-white
            "
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="
              ml-2
              rounded-[20px]
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

        {/* MOBILE / TABLET */}

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
              overflow-hidden rounded-2xl
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
                  text-base font-bold
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
                mt-2 block rounded-xl
                bg-[#B71432]
                px-4 py-3
                text-center
                text-base font-bold
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
   NAVY CARD
========================================================= */

function NavyCard({
  title,
  points,
  className = "",
  twoColumns = false,
}: {
  title?: string;
  points: string[];
  className?: string;
  twoColumns?: boolean;
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
          <div key={point}>
            • {point}
          </div>
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
}: {
  title: string;
  points: string[];
}) {
  return (
    <article
      className="
        w-full
        min-h-[330px]
        rounded-[18px]
        border-[3px]
        border-[#D4A017]
        bg-white
        px-6
        py-6
        text-[#071B3B]
        shadow-[0_4px_18px_rgba(0,0,0,0.10)]
        sm:min-h-[350px]
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
          <div key={point}>
            • {point}
          </div>
        ))}
      </div>
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
        px-5 py-6
        text-center
        shadow-[0_0_22px_rgba(212,160,23,0.14)]
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-[#F1C75B]
        hover:shadow-[0_14px_35px_rgba(212,160,23,0.30)]
        sm:min-h-[150px]
        sm:px-6 sm:py-7
      "
    >
      <h3
        className="
          w-full max-w-full break-words
          font-serif
          text-lg font-semibold
          leading-7 tracking-wide
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

export default function LogisticsSupplyChainPage() {
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
              lg:grid-cols-[0.82fr_1.18fr]
              lg:gap-12
            "
          >

            {/* LEFT */}

            <div className="min-w-0">

              <h1
                className="
                  font-serif
                  text-4xl
                  font-bold
                  leading-[1.05]
                  text-[#D4A017]
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Logistics{" "}
                <span className="font-sans">
                  &amp;
                </span>{" "}
                Supply Chain Industry
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
                  The Logistics &amp; Supply Chain Industry is one of India&apos;s
                  fastest-growing infrastructure and service sectors,
                  supporting transportation networks, warehousing systems,
                  freight movement, industrial distribution, e-commerce
                  operations, inventory management, public utility supply
                  chains, and nationwide goods movement across multiple
                  industries.
                </p>

                <p>
                  The sector includes transportation services, warehousing
                  infrastructure, freight forwarding, cargo handling systems,
                  fleet management, cold chain logistics, inventory management
                  systems, distribution infrastructure, supply chain
                  automation, material handling systems, port logistics,
                  railway logistics, industrial storage infrastructure,
                  packaging systems, and integrated logistics solutions.
                </p>

              </div>

            </div>

            {/* HERO IMAGE */}

            <div
              className="
                w-full
                overflow-hidden
                rounded-[20px]
                shadow-[0_0_30px_rgba(0,0,0,0.65)]
              "
            >
              <img
                src="/images/logi1.png"
                alt="Logistics and Supply Chain Industry"
                width={705}
                height={450}
                className="
                  block
                  h-auto
                  max-h-[450px]
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
              lg:grid-cols-[523px_1fr]
              lg:gap-10
            "
          >

            {/* IMAGES */}

            <div className="w-full space-y-5">

              <div className="overflow-hidden rounded-[20px]">
                <img
                  src="/images/logi2.png"
                  alt="Logistics Industry Overview"
                  width={517}
                  height={347}
                  className="
                    block
                    h-auto
                    w-full
                    rounded-[20px]
                    object-cover
                    shadow-[0_0_25px_rgba(0,0,0,0.20)]
                    lg:h-[347px]
                  "
                />
              </div>

              <div className="overflow-hidden rounded-[20px]">
                <img
                  src="/images/logi3.png"
                  alt="Supply Chain Infrastructure"
                  width={519}
                  height={311}
                  className="
                    block
                    h-auto
                    w-full
                    rounded-[20px]
                    object-cover
                    shadow-[0_0_25px_rgba(0,0,0,0.20)]
                    lg:h-[311px]
                  "
                />
              </div>

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
                  India&apos;s rapid industrialization, infrastructure
                  modernization, manufacturing growth, e-commerce expansion,
                  smart city development, public utility infrastructure, and
                  transportation network expansion have significantly
                  increased procurement opportunities within the logistics and
                  supply chain sector.
                </p>

                <p>
                  Government departments, Railways, Defence organizations,
                  ports, airports, PSU organizations, Municipal Corporations,
                  industrial development authorities, warehousing corporations,
                  food distribution agencies, healthcare infrastructure
                  authorities, smart city projects, and public utility
                  organizations regularly procure logistics services,
                  transportation infrastructure, warehousing systems, fleet
                  management solutions, manpower services, material handling
                  systems, and supply chain technologies through structured
                  procurement and tendering processes.
                </p>

                <p>
                  The Government of India continues to strengthen the sector
                  through initiatives such as PM Gati Shakti Mission, National
                  Logistics Policy, Dedicated Freight Corridors, Bharatmala
                  Project, Sagarmala Programme, multimodal logistics
                  infrastructure development, industrial corridor expansion,
                  and warehouse modernization programs.
                </p>

                <p>
                  Due to the operationally intensive and compliance-driven
                  nature of logistics procurement projects, businesses
                  participating in this sector are required to manage
                  transportation compliance standards, fleet documentation,
                  warehousing compliance, vendor registrations, GeM catalogue
                  requirements, manpower compliance, safety standards, and
                  procurement documentation professionally.
                </p>

                <p>
                  Tender Elite provides specialized tender consultancy and
                  procurement support services for logistics companies,
                  transportation contractors, warehousing service providers,
                  freight forwarding companies, fleet operators, cold chain
                  solution providers, supply chain infrastructure companies,
                  and integrated logistics service providers across India.
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

          {/* HEADING */}

          <h2
            className="
              text-center
              font-serif
              text-2xl
              font-bold
              leading-tight
              tracking-[1px]
              text-[#D4A017]
              sm:text-3xl
              md:text-4xl
            "
          >
            Logistics{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Supply Chain Industry Market Size{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Industry Growth
          </h2>

          {/* INTRO TEXT */}

          <div
            className="
              mx-auto
              mt-6
              max-w-[1240px]
              space-y-5
              text-sm
              leading-6
              tracking-wide
              text-white
              sm:text-base
            "
          >

            <p>
              India&apos;s Logistics &amp; Supply Chain Industry is one of the
              country&apos;s largest infrastructure and operational sectors and
              contributes significantly to industrial growth, manufacturing
              efficiency, transportation infrastructure, and economic
              development.
            </p>

            <p>
              The Indian logistics market is estimated to exceed US$ 300
              billion and continues to grow rapidly due to increasing
              manufacturing output, e-commerce growth, transportation
              modernization, infrastructure expansion, and supply chain
              digitization.
            </p>

          </div>

          {/* =================================================
              2 × 2 MARKET CARDS
          ================================================== */}

          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
            "
          >

            <MarketCard
              title="The sector is witnessing strong growth across:"
              points={sectorGrowth}
            />

            <MarketCard
              title="The Government continues to invest significantly in:"
              points={governmentInvestment}
            />

            <MarketCard
              title="Large-scale procurement opportunities are continuously generated through:"
              points={procurementOpportunities}
            />

            <MarketCard
              title="Government organizations and procurement authorities regularly procure:"
              points={governmentProcurement}
            />

          </div>

          {/* BOTTOM TEXT */}

          <p
            className="
              mx-auto
              mt-8
              max-w-[1240px]
              text-center
              text-sm
              leading-6
              tracking-wide
              text-white
              sm:text-base
            "
          >
            The continuous expansion of India&apos;s logistics and
            transportation ecosystem has significantly increased the demand for
            professional tender consultancy, procurement documentation
            support, vendor registration assistance, GeM services, compliance
            coordination, technical bid preparation, and post-tender support
            services for businesses operating in this sector.
          </p>

        </div>

      </section>

      {/* =====================================================
          GOVERNMENT LOGISTICS PROCUREMENT INITIATIVES
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
            Government Logistics{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Supply Chain Procurement Initiatives
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-5
              max-w-[1068px]
              text-center
              text-sm
              leading-6
              tracking-wide
              text-gray-600
              sm:text-base
            "
          >
            India&apos;s logistics and supply chain sector is supported by major
            Government infrastructure and transportation development
            initiatives.
          </p>

          {/* =================================================
              BOTH CARDS
              POINTS = 2 COLUMNS
          ================================================== */}

          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            <NavyCard
              title="Major Government initiatives include:"
              points={governmentInvestment}
              twoColumns
              className="
                min-h-[360px]
              "
            />

            <NavyCard
              title="Procurement activities are regularly managed by:"
              points={procurementAuthorities}
              twoColumns
              className="
                min-h-[360px]
              "
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
            These organizations regularly procure transportation systems,
            warehousing infrastructure, logistics services, cargo handling
            systems, fleet management solutions, and supply chain
            infrastructure through structured procurement systems.
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
            Logistics{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Supply Chain Procurement Areas We Support
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

            {supportAreas.map((items, index) => (
              <NavyCard
                key={index}
                points={items}
                className="
                  min-h-[240px]
                  shadow-[0_0_30px_rgba(212,160,23,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_10px_30px_rgba(212,160,23,0.30)]
                "
              />
            ))}

          </div>

          <p
            className="
              mx-auto
              mt-6
              max-w-[650px]
              text-center
              text-sm
              leading-6
              sm:text-base
            "
          >
            and many other logistics and supply chain-related procurement
            categories.
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
            Common Procurement Challenges in the Logistics{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Supply Chain Industry
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
            Logistics and supply chain tenders often involve highly detailed
            and compliance-intensive requirements such as:
          </p>

          <div
            className="
              mx-auto
              mt-8
              grid
              max-w-[1040px]
              gap-6
              lg:grid-cols-2
            "
          >

            <NavyCard points={challengeLeft} />

            <NavyCard points={challengeRight} />

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
            Proper management of these requirements is critical for successful
            procurement participation and project qualification.
          </p>

        </div>

      </section>

      {/* =====================================================
          HOW TENDER ELITE SUPPORTS LOGISTICS BUSINESSES
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
              max-w-[1000px]
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
            How Tender Elite Supports Logistics Businesses
          </h2>

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
            Tender Elite helps logistics companies and supply chain service
            providers manage procurement participation professionally through
            structured consultancy and documentation support services.
          </p>

          <p className="mt-4 text-center text-sm font-bold sm:text-base">
            Our services include:
          </p>

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
                transition-all duration-300
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
            We help businesses improve procurement readiness, documentation
            quality, compliance management, and tender participation
            efficiency.
          </p>

        </div>

      </section>

      {/* =====================================================
          WHY LOGISTICS BUSINESSES CHOOSE TENDER ELITE
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
            Why Logistics{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Supply Chain Businesses Choose Tender Elite
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
                  min-h-[195px]
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
                  sm:min-h-[220px]
                  lg:min-h-[245px]
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
              max-w-[1225px]
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
            At Tender Elite, we help logistics companies and supply chain
            service providers manage procurement participation professionally
            through structured tender consultancy, technical documentation
            support, compliance coordination, and procurement assistance that
            improves participation readiness and operational efficiency.
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
            max-w-[1167px]
            px-5
            py-8
            sm:px-6
            sm:py-10
          "
        >

          <div
            className="
              rounded-[25px]
              bg-[#071B3B]
              px-5
              py-9
              text-center
              sm:rounded-[30px]
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
                tracking-[1px]
                text-[#D4A017]
                sm:text-3xl
                sm:tracking-[2px]
              "
            >
              Need Professional Logistics Tender Consultancy Support?
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[1035px]
                font-serif
                text-sm
                font-semibold
                leading-6
                tracking-widest
                text-white
                sm:text-lg
              "
            >
              Get expert assistance for logistics tender participation,
              procurement documentation, GeM support, vendor registration,
              technical bid preparation, and procurement compliance management.
            </p>

            <Link
              href="/contact"
              className="
                mx-auto
                mt-7
                flex
                w-full
                max-w-[455px]
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

              Get Logistics Tender Support

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