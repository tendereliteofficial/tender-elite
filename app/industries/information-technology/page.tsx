import { withYoast } from "@/lib/yoast-seo";
import { slugToTitle as _s } from "@/lib/seo";

const baseMetadata = {
  title: `${_s("information-technology")} Tender Support`,
  description: `Find, prepare and win ${_s("information-technology")} government tenders in India. Tender Elite offers expert bidding, documentation and compliance support.`,
  alternates: { canonical: "/industries/information-technology" },
};

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

const governmentDigitalInvestment = [
  "Digital Governance Platforms",
  "Smart City Technologies",
  "Cybersecurity Infrastructure",
  "Data Centers & Cloud Infrastructure",
  "AI & Automation Systems",
  "Digital Healthcare Systems",
  "E-Learning Platforms",
  "Surveillance & Security Systems",
  "Networking & Communication Infrastructure",
  "Public Digital Infrastructure Projects",
];

const governmentProcurement = [
  "Software Solutions",
  "ERP & Enterprise Systems",
  "Cloud Services",
  "Cybersecurity Solutions",
  "Networking Equipment",
  "IT Infrastructure Services",
  "Surveillance Systems",
  "Data Center Solutions",
  "Managed IT Services",
  "Digital Transformation Services",
  "AI & Automation Solutions",
  "Technical Consultancy Services",
];

const governmentPrograms = [
  "Digital India Mission",
  "Smart Cities Mission",
  "BharatNet Project",
  "National e-Governance Plan",
  "IndiaAI Mission",
  "Cyber Security Modernization Programs",
  "Public Digital Infrastructure Projects",
  "Digital Healthcare Initiatives",
  "E-Courts & E-Governance Projects",
  "Intelligent Transportation Systems",
  "Defence Digital Modernization",
  "Educational Technology Infrastructure Projects",
];

const procurementAuthorities = [
  "NIC",
  "RailTel",
  "BSNL",
  "Smart City Authorities",
  "State IT Departments",
  "PSU Technology Divisions",
  "Defence Organizations",
  "Municipal Corporations",
  "Educational Institutions",
  "Healthcare Institutions",
  "Banking & Financial Institutions",
  "Government Ministries & Departments",
];

const procurementAreas = [
  [
    "Software Development Projects",
    "ERP & Enterprise Solutions",
    "Cloud Infrastructure Services",
    "Cybersecurity Solutions",
    "Networking & Communication Systems",
    "Data Center Infrastructure",
  ],
  [
    "CCTV & Surveillance Systems",
    "Smart City Technology Solutions",
    "IT Hardware Procurement",
    "Managed IT Services",
    "AI & Automation Solutions",
  ],
  [
    "E-Governance Projects",
    "Digital Transformation Services",
    "Telecom Infrastructure Services",
    "Technical Consultancy Services",
    "AMC & IT Maintenance Contracts",
  ],
];

const challengeLeft = [
  "Detailed technical specifications",
  "OEM authorization requirements",
  "Product compatibility documentation",
  "Cybersecurity compliance requirements",
  "Software licensing documentation",
  "Cloud & infrastructure certifications",
];

const challengeRight = [
  "Technical manpower qualification",
  "Financial qualification criteria",
  "Similar project experience requirements",
  "GeM compliance & catalogue requirements",
  "Multi-stage technical evaluations",
  "SLA & performance compliance requirements",
];

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

const whyChooseCards = [
  "Professional IT Procurement Consultancy",
  "Strong Technical Documentation Expertise",
  "Multi-Portal Tender Participation Expertise",
  "GeM & Vendor Registration Assistance",
  "OEM & Compliance Coordination Support",
  "Structured Documentation & Verification Process",
  "Experience Supporting Complex Technology Procurement Requirements",
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

        {/* DESKTOP NAVIGATION */}

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

        {/* MOBILE + TABLET NAVIGATION */}

        <details className="relative ml-auto xl:hidden">
          <summary
            className="
              flex h-10 w-10
              cursor-pointer list-none
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
              absolute
              right-0
              top-[48px]
              w-[220px]
              overflow-hidden
              rounded-2xl
              border border-slate-200
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
                mt-2
                block
                rounded-xl
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
   MARKET CONTENT
========================================================= */

function MarketContent({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <div className="w-full">
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
          mt-4
          grid
          grid-cols-1
          gap-x-10
          gap-y-1
          text-sm
          leading-6
          sm:text-base
          lg:grid-cols-2
        "
      >
        {points.map((point) => (
          <div key={point}>
            • {point}
          </div>
        ))}
      </div>
    </div>
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
        transition-all duration-300
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

export default function InformationTechnologyPage() {
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
                Information Technology (IT) Industry
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
                  The Information Technology (IT) Industry is one of India&apos;s
                  fastest-growing and most strategically important sectors,
                  contributing significantly to the country&apos;s digital
                  transformation, economic development, innovation ecosystem,
                  and Government modernization initiatives.
                </p>

                <p>
                  The industry includes software development, cloud computing,
                  cybersecurity, networking solutions, IT infrastructure, data
                  centers, digital transformation services, AI &amp; automation
                  solutions, managed IT services, hardware supply, ERP
                  solutions, telecommunication systems, and e-governance
                  technologies.
                </p>

              </div>

            </div>

            <div
              className="
                w-full
                overflow-hidden
                rounded-[20px]
                shadow-[0_0_30px_rgba(0,0,0,0.65)]
              "
            >

              <img
                src="/images/it1.png"
                alt="Information Technology Industry"
                width={702}
                height={477}
                className="
                  block
                  h-auto
                  max-h-[477px]
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
                  src="/images/it2.png"
                  alt="IT Industry Overview"
                  width={523}
                  height={311}
                  className="
                    block
                    h-auto
                    w-full
                    rounded-[20px]
                    object-cover
                    shadow-[0_0_25px_rgba(0,0,0,0.20)]
                    lg:h-[311px]
                    lg:w-[523px]
                  "
                />

              </div>

              <div className="overflow-hidden rounded-[20px]">

                <img
                  src="/images/it3.png"
                  alt="Digital Technology Infrastructure"
                  width={523}
                  height={294}
                  className="
                    block
                    h-auto
                    w-full
                    rounded-[20px]
                    object-cover
                    shadow-[0_0_25px_rgba(0,0,0,0.20)]
                    lg:h-[294px]
                    lg:w-[523px]
                  "
                />

              </div>

            </div>

            {/* TEXT */}

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
                  India has emerged as a global technology hub with strong
                  capabilities in software services, IT consulting, digital
                  infrastructure, and technology-enabled solutions. The rapid
                  adoption of digital governance, smart infrastructure, cloud
                  technologies, cybersecurity frameworks, and automation
                  systems across Government departments and enterprises has
                  significantly increased procurement opportunities in the IT
                  sector.
                </p>

                <p>
                  Government organizations, PSUs, Smart City authorities,
                  Defence organizations, Railways, Municipal Corporations,
                  educational institutions, healthcare institutions, and
                  public sector enterprises regularly procure IT products,
                  software solutions, networking systems, cloud services,
                  cybersecurity infrastructure, surveillance systems, and
                  digital transformation services through structured
                  procurement and tendering processes.
                </p>

                <p>
                  The Government of India continues to drive digital
                  infrastructure growth through initiatives such as Digital
                  India, Smart Cities Mission, National e-Governance Plan,
                  BharatNet, cybersecurity modernization programs, AI adoption
                  initiatives, and public digital infrastructure projects.
                </p>

                <p>
                  Due to the technical complexity and compliance-driven nature
                  of IT procurement projects, businesses participating in this
                  sector are required to manage detailed technical
                  specifications, solution documentation, eligibility criteria,
                  certifications, OEM authorizations, compliance requirements,
                  and vendor registration processes professionally.
                </p>

                <p>
                  Tender Elite provides specialized tender consultancy and
                  procurement support services for IT companies, software firms,
                  system integrators, technology solution providers, hardware
                  suppliers, cybersecurity companies, cloud service providers,
                  networking solution providers, and digital infrastructure
                  companies across India.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          IT MARKET SIZE & INDUSTRY GROWTH
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

        {/* BACKGROUND STRIPES */}

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
            Information Technology (IT) Market Size{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Industry Growth
          </h2>

          {/* INTRO */}

          <div
            className="
              mx-auto
              mt-6
              max-w-[1200px]
              space-y-5
              text-sm
              leading-6
              tracking-wide
              text-white
              sm:text-base
            "
          >

            <p>
              India&apos;s Information Technology industry is one of the largest
              technology markets globally and continues to expand rapidly due
              to increasing digital transformation, Government digitization
              programs, enterprise technology adoption, cloud computing
              growth, AI integration, and cybersecurity investments.
            </p>

            <p>
              The Indian IT &amp; Business Process Management (BPM) sector is
              estimated to exceed US$ 350 billion by 2026, supported by strong
              domestic and international demand for technology services and
              digital infrastructure solutions.
            </p>

          </div>

          {/* =================================================
              COMBINED WHITE BOX 1
          ================================================== */}

          <div
            className="
              mt-8
              w-full
              rounded-[20px]
              border-[3px]
              border-[#D4A017]
              bg-white
              px-6
              py-6
              text-[#071B3B]
              shadow-[0_5px_22px_rgba(0,0,0,0.12)]
              sm:px-8
              sm:py-7
              lg:px-10
            "
          >

            <MarketContent
              title="The Government and enterprise sectors are continuously investing in:"
              points={governmentDigitalInvestment}
            />

            {/* NO GOLDEN SEPARATOR LINE */}

            <p
              className="
                mt-6
                text-center
                text-sm
                leading-6
                tracking-wide
                sm:text-base
              "
            >
              Programs such as Digital India, BharatNet, Smart Cities Mission,
              National Cyber Security initiatives, and e-Governance
              modernization have significantly increased Government procurement
              activities within the IT industry.
            </p>

            <p
              className="
                mt-5
                text-center
                text-sm
                leading-6
                tracking-wide
                sm:text-base
              "
            >
              India&apos;s growing startup ecosystem, rapid adoption of SaaS
              solutions, increasing demand for cloud migration services, and
              expansion of digital public infrastructure continue to create
              large-scale procurement and technology implementation
              opportunities across Central Government, State Government, PSU,
              Defence, Railways, and institutional procurement systems.
            </p>

          </div>

          {/* =================================================
              COMBINED WHITE BOX 2
          ================================================== */}

          <div
            className="
              mt-8
              w-full
              rounded-[20px]
              border-[3px]
              border-[#D4A017]
              bg-white
              px-6
              py-6
              text-[#071B3B]
              shadow-[0_5px_22px_rgba(0,0,0,0.12)]
              sm:px-8
              sm:py-7
              lg:px-10
            "
          >

            <MarketContent
              title="Government departments and procurement authorities regularly procure:"
              points={governmentProcurement}
            />

            {/* NO GOLDEN SEPARATOR LINE */}

            <p
              className="
                mt-6
                text-center
                text-sm
                leading-6
                tracking-wide
                sm:text-base
              "
            >
              through structured procurement and tendering processes.
            </p>

            <p
              className="
                mt-5
                text-center
                text-sm
                font-medium
                leading-6
                tracking-wide
                sm:text-base
              "
            >
              The continuous expansion of India&apos;s digital ecosystem has
              significantly increased the demand for professional tender
              consultancy, procurement documentation support, OEM coordination,
              technical bid preparation, vendor registration support, GeM
              services, and compliance management for businesses operating in
              the IT industry.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          GOVERNMENT IT PROCUREMENT
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
            Government IT Procurement{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Digital Infrastructure Initiatives
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
            The Government of India continues to prioritize digital
            infrastructure development through various national technology
            missions, e-governance programs, cybersecurity initiatives, and
            modernization projects.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            <NavyCard
              title="Major digital and IT development programs include:"
              points={governmentPrograms}
            />

            <NavyCard
              title="IT procurement activities are regularly managed by:"
              points={procurementAuthorities}
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
            These organizations regularly procure software systems, IT
            infrastructure, cybersecurity services, cloud solutions, networking
            equipment, surveillance systems, digital platforms, and managed
            technology services through structured procurement systems.
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
            Information Technology Procurement Areas We Support
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-5
              max-w-[834px]
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

          <p
            className="
              mt-6
              text-center
              text-sm
              leading-6
              sm:text-base
            "
          >
            and many other IT and digital infrastructure-related procurement
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
            Common Procurement Challenges in the IT Industry
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-5
              max-w-[982px]
              text-center
              text-sm
              leading-6
              sm:text-base
            "
          >
            IT tenders and digital infrastructure projects often involve
            highly technical and compliance-intensive requirements such as:
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
              max-w-[981px]
              text-center
              text-sm
              font-bold
              leading-6
              sm:text-base
            "
          >
            Managing these requirements accurately is critical for successful
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
            How Tender Elite Supports IT Businesses
          </h2>

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
            Tender Elite helps IT companies and technology solution providers
            manage procurement participation professionally through structured
            consultancy and documentation support services.
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
              max-w-[981px]
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
          WHY IT BUSINESSES CHOOSE TENDER ELITE
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
            Why IT Businesses Choose Tender Elite
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
              max-w-[1192px]
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
            At Tender Elite, we help IT companies and technology solution
            providers manage procurement participation professionally through
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
              Need Professional IT Tender Consultancy Support?
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
              Get expert assistance for IT tender participation, software
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

              Get IT Tender Support

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
  return withYoast("/industries/information-technology", baseMetadata);
}
