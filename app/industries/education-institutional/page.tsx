import { withYoast } from "@/lib/yoast-seo";
import { slugToTitle as _s } from "@/lib/seo";

const baseMetadata = {
  title: `${_s("education-institutional")} Tender Support`,
  description: `Find, prepare and win ${_s("education-institutional")} government tenders in India. Tender Elite offers expert bidding, documentation and compliance support.`,
  alternates: { canonical: "/industries/education-institutional" },
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
   MARKET - GROWTH AREAS
========================================================= */

const educationGrowthAreas = [
  "Digital Education Adoption",
  "Smart Classroom Infrastructure",
  "Educational Technology (EdTech) Growth",
  "Higher Education Expansion",
  "Skill Development Programs",
  "Institutional Infrastructure Modernization",
  "Campus Digitalization",
  "Research Infrastructure Development",
  "Smart Campus Systems",
  "Online Learning Infrastructure",
];

/* =========================================================
   GOVERNMENT INVESTMENT
========================================================= */

const governmentInvestment = [
  "National Education Policy (NEP)",
  "Digital India Education Initiatives",
  "PM eVIDYA Programs",
  "Smart Classroom Infrastructure",
  "Skill India Mission",
  "Educational Infrastructure Expansion",
  "Research & Innovation Infrastructure",
  "Campus Digitalization Programs",
  "Institutional IT Infrastructure",
  "Public Educational Facility Modernization",
];

/* =========================================================
   LARGE SCALE PROCUREMENT
========================================================= */

const largeScaleProcurement = [
  "School & college infrastructure projects",
  "Smart classroom implementation",
  "Laboratory infrastructure procurement",
  "Educational IT systems",
  "Institutional furniture supply",
  "Campus facility management services",
  "Hostel & cafeteria infrastructure",
  "Institutional manpower services",
  "Digital learning infrastructure",
  "Educational maintenance contracts",
];

/* =========================================================
   GOVERNMENT PROCUREMENT
========================================================= */

const governmentProcurement = [
  "Smart classroom systems",
  "Educational IT infrastructure",
  "Laboratory equipment",
  "Institutional furniture",
  "Campus networking systems",
  "Security & surveillance systems",
  "Facility management services",
  "Housekeeping & manpower services",
  "Hostel infrastructure systems",
  "Educational software solutions",
  "AMC & maintenance services",
  "Institutional utility infrastructure",
];

/* =========================================================
   GOVERNMENT INITIATIVES
========================================================= */

const governmentInitiatives = [
  "National Education Policy (NEP)",
  "Digital India Education Programs",
  "PM eVIDYA Scheme",
  "Skill India Mission",
  "Smart Classroom Initiatives",
  "Campus Digitalization Programs",
  "Research Infrastructure Development",
  "Educational Infrastructure Expansion",
  "Public School Modernization Programs",
  "Higher Education Development Initiatives",
];

/* =========================================================
   PROCUREMENT AUTHORITIES
========================================================= */

const procurementAuthorities = [
  "Ministry of Education",
  "Universities & Colleges",
  "IITs & NITs",
  "Government Schools",
  "Research Institutions",
  "Skill Development Authorities",
  "Educational Boards",
  "Municipal Educational Departments",
  "PSU Educational Institutions",
  "Smart Campus Authorities",
  "Training Institutes",
  "Public Institutional Organizations",
];

/* =========================================================
   PROCUREMENT AREAS
========================================================= */

const procurementAreas = [
  [
    "Educational Infrastructure Projects",
    "Smart Classroom Systems",
    "Laboratory Infrastructure",
    "Educational IT Systems",
    "Institutional Furniture Supply",
    "Campus Networking Infrastructure",
  ],
  [
    "Security & Surveillance Systems",
    "Hostel & Cafeteria Infrastructure",
    "Facility Management Services",
    "Housekeeping & Manpower Services",
    "Digital Learning Solutions",
  ],
  [
    "Institutional Utility Infrastructure",
    "Educational Software Systems",
    "AMC & Maintenance Contracts",
    "Smart Campus Infrastructure",
    "Institutional Consultancy Services",
  ],
];

/* =========================================================
   CHALLENGES
========================================================= */

const challengeLeft = [
  "Technical specification compliance",
  "Educational quality standards",
  "OEM authorization requirements",
  "Institutional documentation requirements",
  "Vendor registration procedures",
  "GeM compliance & catalogue requirements",
];

const challengeRight = [
  "Manpower & staffing compliance",
  "Similar project experience criteria",
  "Multi-stage technical evaluations",
  "Financial qualification requirements",
  "AMC & maintenance compliance standards",
  "Digital infrastructure compatibility requirements",
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
  "Professional Educational Procurement Consultancy",
  "Strong Documentation & Compliance Expertise",
  "Multi-Portal Tender Participation Expertise",
  "GeM & Vendor Registration Assistance",
  "Structured Documentation & Verification Process",
  "Experience Supporting Institutional Infrastructure Projects",
  "Compliance & Institutional Documentation Coordination",
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

      <div className="mx-auto flex min-h-[72px] w-full max-w-[1440px] items-center px-3 sm:min-h-[80px] sm:px-5 md:min-h-[90px] md:px-7 lg:px-10">

        {/* LOGO */}

        <Link
          href="/"
          className="
            flex
            min-w-0
            shrink
            items-center
            gap-1
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
              h-[42px]
              w-auto
              shrink-0
              object-contain
              sm:h-[52px]
              md:h-[62px]
              lg:h-[68px]
            "
          />

          <img
            src="/images/logo-wordmark.png"
            alt="Tender Elite"
            className="
              h-auto
              w-[92px]
              max-w-full
              object-contain
              sm:w-[125px]
              md:w-[150px]
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
              hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]
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
              hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]
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
              hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]
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
              hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]
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
              hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]
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
              hover:shadow-[0_10px_22px_rgba(183,20,50,0.22)]
            "
          >
            Contact Us
          </Link>

        </nav>

        {/* MOBILE MENU */}

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
              sm:top-[52px]
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
                transition-all
                duration-200
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

export default function EducationInstitutionalPage() {
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
              lg:grid-cols-[0.82fr_1.18fr]
              lg:gap-10
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
                Education{" "}
                <span className="font-sans">
                  &amp;
                </span>{" "}
                Institutional Industry
              </h1>

              <div
                className="
                  mt-6
                  h-[2px]
                  w-full
                  max-w-[400px]
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
                  The Education &amp; Institutional Industry is one of
                  India&apos;s largest and fastest-growing public
                  infrastructure and service sectors, supporting schools,
                  colleges, universities, training institutes, research
                  organizations, educational infrastructure, digital learning
                  systems, campus facility management, institutional supply
                  systems, and skill development initiatives across the country.
                </p>

                <p>
                  The sector includes educational infrastructure development,
                  smart classrooms, digital learning systems, laboratory
                  infrastructure, library systems, institutional furniture,
                  campus facility management, IT infrastructure, educational
                  equipment, security systems, hostel infrastructure, cafeteria
                  services, manpower services, training systems, and
                  institutional maintenance solutions.
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
                src="/images/edu1.png"
                alt="Education and Institutional Industry"
                width={688}
                height={457}
                className="
                  block
                  h-auto
                  min-h-[220px]
                  w-full
                  object-cover
                  sm:min-h-[300px]
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
              items-start
              gap-8
              lg:grid-cols-[519px_1fr]
              lg:gap-10
            "
          >

            {/* LEFT - TWO IMAGES */}

            <div className="w-full space-y-5 lg:space-y-6">

              {/* FIRST IMAGE 519 x 327 */}

              <div className="w-full overflow-hidden rounded-[20px]">

                <img
                  src="/images/edu2.png"
                  alt="Education Industry Overview"
                  width={519}
                  height={327}
                  className="
                    block
                    h-auto
                    w-full
                    rounded-[20px]
                    object-cover
                    shadow-[0_0_25px_rgba(0,0,0,0.20)]
                    lg:h-[327px]
                    lg:w-[519px]
                  "
                />

              </div>

              {/* SECOND IMAGE 519 x 342 */}

              <div className="w-full overflow-hidden rounded-[20px]">

                <img
                  src="/images/edu3.png"
                  alt="Educational Campus Overview"
                  width={519}
                  height={342}
                  className="
                    block
                    h-auto
                    w-full
                    rounded-[20px]
                    object-cover
                    shadow-[0_0_25px_rgba(0,0,0,0.20)]
                    lg:h-[342px]
                    lg:w-[519px]
                  "
                />

              </div>

            </div>

            {/* RIGHT TEXT */}

            <div className="min-w-0">

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
                  India&apos;s growing population, increasing literacy
                  initiatives, digital education adoption, higher education
                  expansion, skill development programs, smart campus
                  infrastructure, and Government education reforms have
                  significantly increased procurement opportunities within the
                  education and institutional sector.
                </p>

                <p>
                  Government departments, universities, schools, colleges,
                  IITs, NITs, research institutions, training centers,
                  educational boards, skill development authorities, PSU
                  educational institutions, smart campus projects, and
                  institutional organizations regularly procure educational
                  infrastructure, smart classroom systems, IT equipment,
                  laboratory systems, furniture, manpower services, facility
                  management solutions, and institutional support services
                  through structured procurement and tendering processes.
                </p>

                <p>
                  The Government of India continues to strengthen the education
                  sector through initiatives such as Digital India, National
                  Education Policy (NEP), Smart Classroom Programs, Skill India
                  Mission, PM eVIDYA, digital campus modernization,
                  institutional infrastructure expansion, and educational
                  technology development programs.
                </p>

                <p>
                  Due to the operational and compliance-driven nature of
                  educational procurement projects, businesses participating in
                  this sector are required to manage technical specifications,
                  educational compliance standards, institutional
                  documentation, vendor registrations, GeM catalogue
                  requirements, quality certifications, manpower compliance,
                  and procurement documentation professionally.
                </p>

                <p>
                  Tender Elite provides specialized tender consultancy and
                  procurement support services for educational infrastructure
                  companies, smart classroom solution providers, laboratory
                  suppliers, institutional furniture manufacturers, campus
                  facility management companies, IT solution providers,
                  manpower contractors, and institutional service providers
                  across India.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MARKET SIZE
      ====================================================== */}

      <section className="w-full bg-[#071B3B] text-white">

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
            Education{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Institutional Industry Market Size{" "}
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
              India&apos;s Education &amp; Institutional Industry is one of
              the country&apos;s largest service and infrastructure sectors
              supported by increasing Government investment in educational
              infrastructure, digital learning systems, institutional
              modernization, and skill development initiatives.
            </p>

            <p>
              India has one of the world&apos;s largest education ecosystems
              with thousands of schools, colleges, universities, training
              institutions, and research organizations requiring continuous
              infrastructure development and operational support services.
            </p>

          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            <WhiteCard
              title="The Indian education market is estimated to exceed US$ 180 billion and continues to grow rapidly due to:"
              points={educationGrowthAreas}
            />

            <WhiteCard
              title="The Government continues to invest significantly in:"
              points={governmentInvestment}
            />

          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">

            <WhiteCard
              title="Large-scale procurement opportunities are continuously generated through:"
              points={largeScaleProcurement}
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
              max-w-[1100px]
              text-center
              text-sm
              leading-6
              tracking-wide
              text-slate-200
              sm:text-base
            "
          >
            The continuous expansion of India&apos;s educational and
            institutional ecosystem has significantly increased the demand for
            professional tender consultancy, procurement documentation
            support, vendor registration assistance, GeM services, compliance
            coordination, technical bid preparation, and post-tender support
            services for businesses operating in this sector.
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
            Government Education{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Institutional Procurement Initiatives
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-5
              max-w-[1062px]
              text-center
              text-sm
              leading-6
              text-gray-600
              sm:text-base
            "
          >
            India&apos;s education sector is supported by major Government
            educational infrastructure and digital learning initiatives.
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

          <p className="mx-auto mt-7 max-w-[1000px] text-center text-sm leading-6 sm:text-base">
            These organizations regularly procure educational infrastructure
            systems, smart classroom technologies, institutional furniture,
            laboratory equipment, facility management services, manpower
            services, and digital learning infrastructure through structured
            procurement systems.
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
            Education{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Institutional Procurement Areas We Support
          </SectionTitle>

          <p className="mx-auto mt-5 max-w-[836px] text-center text-sm leading-6 sm:text-base">
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
            and many other education and institutional-related procurement
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
            Common Procurement Challenges in the Education{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Institutional Industry
          </SectionTitle>

          <p className="mx-auto mt-5 max-w-[984px] text-center text-sm leading-6 sm:text-base">
            Education and institutional tenders often involve highly detailed
            and compliance-intensive requirements such as:
          </p>

          <div className="mx-auto mt-8 grid max-w-[1040px] gap-6 lg:grid-cols-2">

            <NavyCard points={challengeLeft} />

            <NavyCard points={challengeRight} />

          </div>

          <p className="mx-auto mt-6 max-w-[984px] text-center text-sm font-bold leading-6 sm:text-base">
            Proper management of these requirements is critical for successful
            procurement participation and project qualification.
          </p>

        </div>

      </section>

      {/* =====================================================
          HOW TENDER ELITE SUPPORTS
          3 x 2 DESKTOP / RESPONSIVE
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
              sm:tracking-[2px]
              md:text-5xl
            "
          >
            How Tender Elite Supports Educational Businesses
          </h2>

          <p className="mx-auto mt-5 max-w-[984px] text-center text-sm leading-6 sm:text-base">
            Tender Elite helps educational infrastructure companies and
            institutional service providers manage procurement participation
            professionally through structured consultancy and documentation
            support services.
          </p>

          <p className="mt-4 text-center text-sm font-bold sm:text-base">
            Our services include:
          </p>

          {/* 1 MOBILE / 2 TABLET / 3 DESKTOP */}

          <div className="mx-auto mt-8 grid w-full max-w-[1084px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

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
            We help businesses improve procurement readiness, technical
            documentation quality, compliance management, and tender
            participation efficiency.
          </p>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-[#071B3B] text-white">

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.07]
            bg-[repeating-linear-gradient(90deg,#B71432_0px,#B71432_28px,transparent_28px,transparent_54px)]
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
              sm:tracking-[2px]
              md:text-5xl
            "
          >
            Why Education{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Institutional Businesses Choose Tender Elite
          </h2>

          {/* 1 / 2 / 4 GRID */}

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
                  min-h-[190px]
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
            At Tender Elite, we help educational institutions,
            infrastructure companies, and institutional service providers
            manage procurement participation professionally through structured
            tender consultancy, technical documentation support, compliance
            coordination, and procurement assistance that improves
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
            max-w-[1167px]
            px-5
            py-8
            sm:px-6
            sm:py-10
            lg:px-0
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
              Need Professional Education{" "}
              <span className="font-sans">
                &amp;
              </span>{" "}
              Institutional Tender Consultancy Support?
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
              Get expert assistance for educational tender participation,
              institutional procurement documentation, vendor registration,
              GeM support, technical bid preparation, and procurement
              compliance management.
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

              Education Tender Support

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
  return withYoast("/industries/education-institutional", baseMetadata);
}
