import { withYoast } from "@/lib/yoast-seo";
import { slugToTitle as _s } from "@/lib/seo";

const baseMetadata = {
  title: `${_s("hospitality-tourism")} Tender Support`,
  description: `Find, prepare and win ${_s("hospitality-tourism")} government tenders in India. Tender Elite offers expert bidding, documentation and compliance support.`,
  alternates: { canonical: "/industries/hospitality-tourism" },
};

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
   MARKET GROWTH
========================================================= */

const marketGrowth = [
  "Hotel & Resort Infrastructure",
  "Religious Tourism Projects",
  "Smart Tourism Infrastructure",
  "Healthcare Tourism Facilities",
  "Hospitality Facility Management",
  "Event & Convention Infrastructure",
  "Catering & Cafeteria Services",
  "Tourism Transportation Systems",
  "Recreational Infrastructure",
  "Digital Hospitality Systems",
];

/* =========================================================
   GOVERNMENT INVESTMENT
========================================================= */

const governmentInvestment = [
  "Incredible India Campaign",
  "Swadesh Darshan Scheme",
  "PRASHAD Scheme",
  "Smart Cities Mission",
  "Tourism Infrastructure Modernization",
  "Heritage Tourism Development",
  "Airport & Railway Tourism Infrastructure",
  "Hospitality Skill Development Programs",
  "Religious Tourism Infrastructure",
  "Public Tourism Facility Development",
];

/* =========================================================
   PROCUREMENT DEMAND
========================================================= */

const procurementDemand = [
  "Hotel & hospitality infrastructure projects",
  "Tourism facility modernization",
  "Catering & cafeteria contracts",
  "Housekeeping & facility management services",
  "Event & convention infrastructure",
  "Tourism transportation systems",
  "Hospitality IT infrastructure",
  "Smart tourism projects",
  "Public tourism utility systems",
  "Hospitality maintenance contracts",
];

/* =========================================================
   GOVERNMENT PROCUREMENT
========================================================= */

const governmentProcurement = [
  "Hospitality infrastructure systems",
  "Catering & cafeteria services",
  "Housekeeping services",
  "Facility management services",
  "Tourism infrastructure",
  "Event & convention systems",
  "Hospitality furniture & utility systems",
  "Tourism transportation services",
  "Security & surveillance systems",
  "Hospitality IT infrastructure",
  "AMC & maintenance services",
  "Manpower & operational services",
];

/* =========================================================
   GOVERNMENT INITIATIVES
========================================================= */

const governmentInitiatives = [
  "Incredible India Campaign",
  "Swadesh Darshan Scheme",
  "PRASHAD Scheme",
  "Smart Cities Mission",
  "Tourism Infrastructure Development Programs",
  "Heritage Tourism Initiatives",
  "Religious Tourism Infrastructure",
  "Hospitality Skill Development Programs",
  "Public Tourism Infrastructure Projects",
  "Tourism Digitalization Programs",
];

/* =========================================================
   PROCUREMENT AUTHORITIES
========================================================= */

const procurementAuthorities = [
  "Tourism Development Corporations",
  "Railways",
  "Airport Authorities",
  "Smart City Authorities",
  "Municipal Corporations",
  "PSU Hospitality Organizations",
  "Convention Centers",
  "Public Tourism Authorities",
  "Government Guest Houses",
  "Hospitality Institutions",
  "Urban Development Authorities",
  "Cultural & Tourism Departments",
];

/* =========================================================
   PROCUREMENT AREAS
========================================================= */

const procurementAreas = [
  [
    "Hotel & Resort Infrastructure Projects",
    "Catering & Cafeteria Services",
    "Hospitality Facility Management",
    "Housekeeping Service Contracts",
    "Tourism Infrastructure Projects",
    "Event & Convention Infrastructure",
  ],
  [
    "Hospitality IT Systems",
    "Tourism Transportation Services",
    "Security & Surveillance Systems",
    "Utility & Maintenance Infrastructure",
    "Smart Tourism Solutions",
  ],
  [
    "Guest House Management Services",
    "Hospitality Furniture & Equipment Supply",
    "AMC & Maintenance Contracts",
    "Hospitality Manpower Services",
    "Tourism Consultancy Services",
  ],
];

/* =========================================================
   CHALLENGES
========================================================= */

const challengeLeft = [
  "Service quality standards",
  "Hospitality compliance requirements",
  "Food safety & hygiene standards",
  "Manpower compliance documentation",
  "Vendor registration procedures",
  "GeM compliance & catalogue requirements",
];

const challengeRight = [
  "Facility management compliance standards",
  "Similar project experience criteria",
  "Multi-stage technical evaluations",
  "Financial qualification requirements",
  "Operational & safety compliance standards",
  "Service-level agreement (SLA) requirements",
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

const whyChooseCards = [
  "Professional Hospitality Procurement Consultancy",
  "Strong Documentation & Compliance Expertise",
  "Multi-Portal Tender Participation Expertise",
  "GeM & Vendor Registration Assistance",
  "Structured Documentation & Verification Process",
  "Experience Supporting Hospitality Infrastructure Projects",
  "Compliance & Operational Documentation Coordination",
  "End-to-End Tender & Procurement Consultancy Services",
];

/* =========================================================
   LOCATIONS
   Kept according to supplied source labels.
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

        {/* DESKTOP NAVIGATION */}

        <nav className="ml-auto hidden items-center gap-2 xl:flex">
          <Link
            href="/"
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
            Home
          </Link>

          <Link
            href="/services"
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
            Services
          </Link>

          <Link
            href="/industries"
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
            Industries
          </Link>

          <Link
            href="/insights"
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
            Insights
          </Link>

          <Link
            href="/about-us"
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
            About Us
          </Link>

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
        sm:tracking-[2px]
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

      <div
        className={`
          space-y-1.5
          text-sm
          leading-6
          tracking-wide
          sm:text-base
          ${title ? "mt-5" : ""}
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
   WHITE CARD
========================================================= */

function WhiteCard({
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
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-white
        p-5
        text-[#071B3B]
        shadow-[0_0_25px_rgba(212,160,23,0.10)]
        sm:p-8
      "
    >
      <h3
        className="
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

      <div className="mt-5 space-y-1.5 text-sm leading-6 sm:text-base">
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

export default function HospitalityTourismPage() {
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
                Hospitality{" "}
                <span className="font-sans">
                  &amp;
                </span>{" "}
                Tourism Industry
              </h1>

              <div
                className="
                  mt-6
                  h-[2px]
                  w-full
                  max-w-[390px]
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
                  The Hospitality &amp; Tourism Industry is one of India&apos;s
                  fastest-growing service and infrastructure sectors,
                  supporting hotels, tourism infrastructure, travel services,
                  event management, catering operations, recreational
                  facilities, hospitality technology, facility management, and
                  public tourism development across the country.
                </p>

                <p>
                  The sector includes hotels, resorts, tourism infrastructure,
                  hospitality services, catering operations, convention
                  centers, guest house management, travel infrastructure,
                  recreational facilities, cafeteria services, tourism
                  transportation systems, event infrastructure, facility
                  management services, housekeeping operations, hospitality IT
                  systems, and tourism support services.
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
                src="/images/hospi1.png"
                alt="Hospitality and Tourism Industry"
                width={671}
                height={514}
                className="
                  block
                  h-auto
                  max-h-[514px]
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
          TEXT CENTERED BESIDE IMAGE(S)
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

            {/* LEFT IMAGE STACK */}

            <div className="w-full space-y-5">

              <div className="w-full overflow-hidden rounded-[20px]">

                <img
                  src="/images/hospi2.png"
                  alt="Hospitality Industry Overview"
                  width={519}
                  height={346}
                  className="
                    block
                    h-auto
                    w-full
                    rounded-[20px]
                    object-cover
                    shadow-[0_0_25px_rgba(0,0,0,0.20)]
                    lg:h-[346px]
                    lg:w-[519px]
                  "
                />

              </div>

              <div className="w-full overflow-hidden rounded-[20px]">

                <img
                  src="/images/hospi3.png"
                  alt="Tourism Industry Infrastructure"
                  width={519}
                  height={321}
                  className="
                    block
                    h-auto
                    w-full
                    rounded-[20px]
                    object-cover
                    shadow-[0_0_25px_rgba(0,0,0,0.20)]
                    lg:h-[321px]
                    lg:w-[519px]
                  "
                />

              </div>

            </div>

            {/* RIGHT TEXT */}

            <div className="min-w-0 self-center">

              <h2 className="text-lg tracking-wide text-[#071B3B] sm:text-xl">
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
                  India&apos;s growing domestic travel market, increasing
                  international tourism, infrastructure modernization, smart
                  city development, religious tourism growth, healthcare
                  tourism expansion, and Government tourism initiatives have
                  significantly increased procurement opportunities within the
                  hospitality and tourism sector.
                </p>

                <p>
                  Government departments, tourism development corporations,
                  Railways, airports, smart city authorities, Municipal
                  Corporations, hospitality institutions, PSU guest houses,
                  convention centers, public tourism authorities, educational
                  institutions, healthcare tourism facilities, and
                  infrastructure agencies regularly procure hospitality
                  services, catering systems, tourism infrastructure,
                  housekeeping services, manpower solutions, transportation
                  systems, and facility management services through structured
                  procurement and tendering processes.
                </p>

                <p>
                  The Government of India continues to support the sector
                  through initiatives such as Incredible India, Swadesh Darshan
                  Scheme, PRASHAD Scheme, Smart Cities Mission, tourism
                  infrastructure modernization, heritage tourism development,
                  hospitality infrastructure expansion, and digital tourism
                  initiatives.
                </p>

                <p>
                  Due to the operational and compliance-driven nature of
                  hospitality procurement projects, businesses participating
                  in this sector are required to manage service quality
                  standards, hospitality compliance requirements, manpower
                  documentation, vendor registrations, GeM catalogue
                  requirements, facility management compliance, safety
                  standards, and procurement documentation professionally.
                </p>

                <p>
                  Tender Elite provides specialized tender consultancy and
                  procurement support services for hospitality companies, hotel
                  infrastructure providers, catering firms, facility
                  management companies, housekeeping contractors, tourism
                  infrastructure developers, event management companies, and
                  hospitality solution providers across India.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MARKET SIZE & INDUSTRY GROWTH
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-[#071B3B] text-white">

        {/* STRIPED BACKGROUND */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.16]
            bg-[repeating-linear-gradient(
              90deg,
              rgba(183,20,50,0.55)_0px,
              rgba(183,20,50,0.55)_42px,
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
          "
        >

          <SectionTitle>
            Hospitality{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Tourism Industry Market Size{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Industry Growth
          </SectionTitle>

          <div
            className="
              mt-7
              space-y-5
              text-sm
              leading-6
              tracking-wide
              text-slate-200
              sm:text-base
            "
          >

            <p>
              India&apos;s Hospitality &amp; Tourism Industry is one of the
              country&apos;s largest service sectors and contributes
              significantly to employment generation, infrastructure
              development, transportation growth, hospitality expansion, and
              economic activity.
            </p>

            <p>
              The Indian tourism and hospitality market is estimated to exceed
              US$ 250 billion and continues to grow rapidly due to increasing
              domestic travel, international tourism, religious tourism,
              healthcare tourism, business travel, and infrastructure
              modernization.
            </p>

          </div>

          {/* MARKET CARDS */}

          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            <WhiteCard
              title="The sector is witnessing strong growth across:"
              points={marketGrowth}
            />

            <WhiteCard
              title="The Government continues to invest significantly in:"
              points={governmentInvestment}
            />

          </div>

          {/* PROCUREMENT DEMAND */}

          <div className="mt-7 grid gap-6 lg:grid-cols-2">

            <WhiteCard
              title="Large-scale procurement opportunities are continuously generated through:"
              points={procurementDemand}
            />

            <WhiteCard
              title="Government organizations and procurement authorities regularly procure:"
              points={governmentProcurement}
            />

          </div>

          <p
            className="
              mx-auto
              mt-7
              max-w-[1280px]
              text-center
              text-sm
              leading-6
              tracking-wide
              text-slate-200
              sm:text-base
            "
          >
            through structured procurement and tendering systems.
          </p>

          <p
            className="
              mx-auto
              mt-6
              max-w-[1280px]
              text-center
              text-sm
              leading-6
              tracking-wide
              text-slate-200
              sm:text-base
            "
          >
            The continuous expansion of India&apos;s tourism and hospitality
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
            Government Hospitality{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Tourism Procurement Initiatives
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-5
              max-w-[1062px]
              text-center
              text-sm
              leading-6
              tracking-wide
              text-gray-600
              sm:text-base
            "
          >
            India&apos;s hospitality and tourism sector is supported by major
            Government tourism and infrastructure development initiatives.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            <NavyCard
              title="Major Government initiatives include:"
              points={governmentInitiatives}
            />

            <NavyCard
              title="Procurement activities are regularly managed by:"
              points={procurementAuthorities}
            />

          </div>

          <p
            className="
              mx-auto
              mt-7
              max-w-[1000px]
              text-center
              text-sm
              leading-6
              sm:text-base
            "
          >
            These organizations regularly procure hospitality infrastructure
            systems, catering services, tourism infrastructure, housekeeping
            services, manpower solutions, and facility management systems
            through structured procurement systems.
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
            Hospitality{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Tourism Procurement Areas We Support
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-5
              max-w-[836px]
              text-center
              text-sm
              leading-6
              sm:text-base
            "
          >
            Tender Elite provides procurement consultancy and tender support
            services for areas including:
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">

            {procurementAreas.map((column, index) => (
              <NavyCard
                key={index}
                points={column}
                className="min-h-0 lg:min-h-[240px]"
              />
            ))}

          </div>

          <p className="mt-6 text-center text-sm leading-6 sm:text-base">
            and many other hospitality and tourism-related procurement
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
            Common Procurement Challenges in the Hospitality{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Tourism Industry
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
            Hospitality and tourism tenders often involve highly detailed and
            compliance-intensive requirements such as:
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
              mt-6
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
          HOW TENDER ELITE SUPPORTS
          3 x 2
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
              max-w-[1100px]
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
            How Tender Elite Supports Hospitality Businesses
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
            Tender Elite helps hospitality companies and tourism
            infrastructure providers manage procurement participation
            professionally through structured consultancy and documentation
            support services.
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

          {/* VIEW MORE */}

          <div className="mt-7 text-center">

            <Link
              href="/services"
              className="
                inline-flex
                min-w-[160px]
                items-center
                justify-center
                rounded-2xl
                bg-[#D4A017]
                px-8
                py-3
                text-sm
                font-medium
                text-[#071B3B]
                shadow-[0_10px_20px_rgba(0,0,0,0.15)]
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
            We help businesses improve procurement readiness, documentation
            quality, compliance management, and tender participation
            efficiency.
          </p>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE
          4 x 2
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-[#071B3B] text-white">

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.07]
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
              max-w-[1100px]
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
            Why Hospitality{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Tourism Businesses Choose Tender Elite
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

            {whyChooseCards.map((title) => (
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
                  hover:-translate-y-1
                  hover:shadow-[0_14px_32px_rgba(212,160,23,0.24)]
                  sm:min-h-[220px]
                  lg:min-h-[245px]
                "
              >

                <h3
                  className="
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
            At Tender Elite, we help hospitality companies and tourism
            infrastructure providers manage procurement participation
            professionally through structured tender consultancy, technical
            documentation support, compliance coordination, and procurement
            assistance that improves participation readiness and operational
            efficiency.
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
              Need Professional Hospitality Tender Consultancy Support?
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
              Get expert assistance for hospitality tender participation,
              tourism procurement documentation, vendor registration, GeM
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

              Get Hospitality Tender Support

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
export async function generateMetadata() {
  return withYoast("/industries/hospitality-tourism", baseMetadata);
}
