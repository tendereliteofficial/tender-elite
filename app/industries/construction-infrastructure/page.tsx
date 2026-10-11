import { slugToTitle as _s } from "@/lib/seo";

export const metadata = {
  title: `${_s("construction-infrastructure")} Tender Support`,
  description: `Find, prepare and win ${_s("construction-infrastructure")} government tenders in India. Tender Elite offers expert bidding, documentation and compliance support.`,
  alternates: { canonical: "/industries/construction-infrastructure" },
};

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
   MARKET / INFRASTRUCTURE PROGRAMS
========================================================= */

const governmentInfrastructurePrograms = [
  "PM Gati Shakti National Master Plan",
  "Bharatmala Pariyojana",
  "Smart Cities Mission",
  "AMRUT Mission",
  "Jal Jeevan Mission",
  "Pradhan Mantri Awas Yojana (PMAY)",
  "Dedicated Freight Corridor Projects",
  "Metro Rail Expansion Projects",
  "Railway Modernization Projects",
  "National Highway Development Projects",
  "Industrial Corridor Development",
  "Airport Expansion Programs",
  "Urban Infrastructure Development Schemes",
];

/* =========================================================
   PROCUREMENT AUTHORITIES
========================================================= */

const infrastructureAuthorities = [
  "CPWD",
  "PWD Departments",
  "NHAI",
  "Railways",
  "Metro Rail Corporations",
  "Municipal Corporations",
  "Smart City Authorities",
  "Irrigation Departments",
  "Defence Organizations",
  "Industrial Development Authorities",
  "Water Supply Boards",
  "PSU Infrastructure Companies",
];

/* =========================================================
   GOVERNMENT REGULAR PROCUREMENT
========================================================= */

const governmentProcurementItems = [
  "Civil construction services",
  "EPC & turnkey solutions",
  "Engineering consultancy services",
  "Infrastructure maintenance contracts",
  "Electrical & mechanical works",
  "Water supply & drainage infrastructure",
  "Industrial construction services",
  "Facility management solutions",
  "Urban infrastructure services",
];

/* =========================================================
   PROCUREMENT AREAS
========================================================= */

const procurementAreas = [
  [
    "Civil Construction Projects",
    "Road & Highway Projects",
    "Bridge Construction Works",
    "Building Construction Projects",
    "Railway Infrastructure Works",
    "Metro Rail Infrastructure",
  ],
  [
    "Water Supply & Drainage Projects",
    "Smart City Infrastructure",
    "Industrial Infrastructure Projects",
    "Interior & Renovation Works",
    "Electrical Infrastructure Works",
    "Mechanical & Engineering Projects",
  ],
  [
    "EPC & Turnkey Projects",
    "HVAC & MEP Projects",
    "Public Utility Infrastructure",
    "Urban Development Projects",
    "Infrastructure AMC & Maintenance Contracts",
  ],
];

/* =========================================================
   CHALLENGES
========================================================= */

const challengeLeft = [
  "Complex technical specifications",
  "BOQ preparation & estimation",
  "Financial qualification requirements",
  "Similar work experience criteria",
  "Machinery & equipment requirements",
  "Technical manpower qualification",
  "Joint Venture & Consortium requirements",
];

const challengeRight = [
  "EMD & Performance Security requirements",
  "Vendor registration formalities",
  "GeM compliance requirements",
  "Multi-stage technical evaluations",
  "EPC project documentation",
  "Compliance & statutory documentation",
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
  "Professional Infrastructure Procurement Consultancy",
  "Strong Technical Documentation Expertise",
  "Multi-Portal Tender Participation Expertise",
  "GeM & Vendor Registration Assistance",
  "BOQ & Compliance Support Experience",
  "Structured Documentation & Verification Process",
  "Experience Supporting Complex Infrastructure Projects",
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
          className="flex min-w-0 shrink-0 items-center gap-1.5 transition-transform duration-300 hover:scale-[1.01] sm:gap-2"
        >
          <img
            src="/images/logo-mark.png"
            alt="Tender Elite mark"
            className="h-[46px] w-auto object-contain sm:h-[56px] md:h-[62px] lg:h-[68px]"
          />

          <img
            src="/images/logo-wordmark.png"
            alt="Tender Elite"
            className="h-auto w-[105px] object-contain sm:w-[135px] md:w-[155px] lg:w-[195px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav className="ml-auto hidden items-center gap-2 xl:flex">

          <Link
            href="/"
            className="rounded-[20px] border border-slate-200 bg-[#D4A017] px-6 py-3 text-sm font-bold text-black shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="rounded-[20px] border border-slate-200 bg-[#D4A017] px-6 py-3 text-sm font-bold text-black shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]"
          >
            Services
          </Link>

          <Link
            href="/industries"
            className="rounded-[20px] border border-slate-200 bg-[#D4A017] px-6 py-3 text-sm font-bold text-black shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]"
          >
            Industries
          </Link>

          <Link
            href="/insights"
            className="rounded-[20px] border border-slate-200 bg-[#D4A017] px-6 py-3 text-sm font-bold text-black shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]"
          >
            Insights
          </Link>

          <Link
            href="/about-us"
            className="rounded-[20px] border border-slate-200 bg-[#D4A017] px-6 py-3 text-sm font-bold text-black shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="ml-2 rounded-[20px] border border-[#FFA629] bg-[#B71432] px-7 py-3 text-sm font-bold text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(183,20,50,0.22)]"
          >
            Contact Us
          </Link>

        </nav>

        {/* MOBILE + TABLET MENU */}

        <details className="relative ml-auto xl:hidden">

          <summary
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-[#D4A017] bg-[#D4A017] text-[#071B3B] shadow-md sm:h-11 sm:w-11"
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

          <div className="absolute right-0 top-[48px] w-[225px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_15px_35px_rgba(0,0,0,0.18)] sm:top-[52px] sm:w-[235px]">

            <Link
              href="/"
              className="block rounded-xl px-4 py-3 text-base font-bold text-[#071B3B] transition-colors hover:bg-[#D4A017] hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="block rounded-xl px-4 py-3 text-base font-bold text-[#071B3B] transition-colors hover:bg-[#D4A017] hover:text-white"
            >
              Services
            </Link>

            <Link
              href="/industries"
              className="block rounded-xl px-4 py-3 text-base font-bold text-[#071B3B] transition-colors hover:bg-[#D4A017] hover:text-white"
            >
              Industries
            </Link>

            <Link
              href="/insights"
              className="block rounded-xl px-4 py-3 text-base font-bold text-[#071B3B] transition-colors hover:bg-[#D4A017] hover:text-white"
            >
              Insights
            </Link>

            <Link
              href="/about-us"
              className="block rounded-xl px-4 py-3 text-base font-bold text-[#071B3B] transition-colors hover:bg-[#D4A017] hover:text-white"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="mt-2 block rounded-xl bg-[#B71432] px-4 py-3 text-center text-base font-bold text-white transition-all duration-200 hover:bg-[#971029]"
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
  className = "",
}: {
  title?: string;
  points: string[];
  className?: string;
}) {
  return (
    <article
      className={`rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-7 text-white ${className}`}
    >

      {title && (
        <h3 className="text-center font-serif text-xl font-bold leading-7 text-[#D4A017]">
          {title}
        </h3>
      )}

      <div
        className={`space-y-1.5 text-base leading-6 tracking-wide ${
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
    <article className="rounded-[20px] border-[3px] border-[#D4A017] bg-white p-8 text-[#071B3B] shadow-[0_0_30px_rgba(212,160,23,0.10)]">

      <h3 className="font-serif text-xl font-bold leading-7 text-[#D4A017]">
        {title}
      </h3>

      <div className="mt-5 space-y-1.5 text-base leading-6">

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
      href={"/services"}
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

      <h3 className="w-full max-w-full break-words font-serif text-xl font-semibold leading-7 tracking-wide text-white">
        {title}
      </h3>

    </Link>
  );
}

/* =========================================================
   LOCATION / STATE CARD
   PREMIUM HOVER EFFECT
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

export default function ConstructionInfrastructurePage() {
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

        <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-[80px]">

          <div className="grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">

            {/* LEFT */}

            <div>

              <h1 className="font-serif text-5xl font-bold leading-[1.06] text-[#D4A017] md:text-6xl">

                Construction{" "}

                <span className="font-sans">
                  &amp;
                </span>{" "}

                Infrastructure Industry

              </h1>

              <div className="mt-7 h-[2px] w-96 max-w-full rounded-[20px] bg-[#D4A017]" />

              <div className="mt-7 space-y-5 text-base leading-6 tracking-wide text-white">

                <p>
                  The Construction &amp; Infrastructure Industry is one of
                  the largest and most important sectors contributing to
                  India&apos;s economic growth, urban development, industrial
                  expansion, and public infrastructure creation. The sector
                  includes roads, highways, bridges, metro rail projects,
                  airports, railway infrastructure, smart cities, industrial
                  parks, water supply systems, drainage projects, public
                  buildings, hospitals, educational institutions, residential
                  developments, and large-scale EPC projects.
                </p>

                <p>
                  India&apos;s infrastructure sector has witnessed rapid growth
                  due to increasing Government investment, urbanization,
                  industrial development, transportation modernization, smart
                  city initiatives, renewable energy expansion, and large-scale
                  public infrastructure programs across the country.
                </p>

              </div>

            </div>

            {/* HERO IMAGE */}

            <div className="w-full overflow-hidden rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.65)]">

              <img
                src="/images/construction1.png"
                alt="Construction and Infrastructure Industry"
                width={655}
                height={476}
                className="block h-auto w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INDUSTRY OVERVIEW
      ====================================================== */}

      <section className="bg-white px-6 py-12 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <div className="grid items-start gap-10 lg:grid-cols-[521px_1fr]">

            {/* IMAGE */}

            <div className="w-[521px] max-w-full overflow-hidden rounded-[20px]">

              <img
                src="/images/construction2.png"
                alt="Construction Infrastructure Overview"
                width={521}
                height={490}
                className="block h-[490px] w-[521px] max-w-full object-cover shadow-[0_0_30px_rgba(0,0,0,0.50)]"
              />

            </div>

            {/* TEXT */}

            <div>

              <h2 className="text-xl tracking-wide text-[#071B3B]">
                INDUSTRY OVERVIEW
              </h2>

              <div className="mt-8 space-y-5 text-base leading-6 tracking-wide text-gray-600">

                <p>
                  The Government of India continues to prioritize
                  infrastructure development through national programs such as
                  Bharatmala, Smart Cities Mission, PM Gati Shakti, AMRUT
                  Mission, Jal Jeevan Mission, metro rail expansion projects,
                  railway modernization programs, industrial corridor
                  development, airport infrastructure expansion, and housing
                  initiatives.
                </p>

                <p>
                  Construction and infrastructure procurement activities are
                  regularly managed by Government departments, PSUs, Municipal
                  Corporations, Railways, Defence organizations, Infrastructure
                  Development Authorities, Smart City Missions, and Industrial
                  Development Corporations through structured tendering and
                  procurement systems.
                </p>

                <p>
                  Due to the technical complexity and high-value nature of
                  infrastructure projects, businesses participating in this
                  sector are required to manage detailed technical
                  documentation, eligibility compliance, financial
                  qualification requirements, project experience criteria, BOQ
                  management, vendor registrations, and procurement formalities
                  professionally.
                </p>

                <p>
                  Tender Elite provides specialized tender consultancy and
                  procurement support services for contractors, infrastructure
                  companies, EPC contractors, engineering firms, project
                  consultants, material suppliers, industrial service providers,
                  and infrastructure solution companies across India.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MARKET SIZE & INDUSTRY GROWTH
      ====================================================== */}

      <section className="bg-[#071B3B] px-6 py-14 text-white lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Construction{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Infrastructure Market Size{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Industry Growth
          </SectionTitle>

          <div className="mt-8 space-y-5 text-base leading-6 tracking-wide text-slate-200">

            <p>
              India&apos;s Construction &amp; Infrastructure sector is one of
              the country&apos;s largest and fastest-growing industries,
              playing a major role in economic development, employment
              generation, urbanization, transportation modernization, and
              industrial expansion.
            </p>

            <p>
              The sector contributes significantly to India&apos;s GDP and is
              supported by continuous Government investment in roads, railways,
              airports, smart cities, industrial corridors, metro rail systems,
              water infrastructure, renewable energy projects, housing
              developments, and public utility infrastructure.
            </p>

            <p>
              India&apos;s infrastructure market is estimated to exceed US$ 1.5
              trillion by 2030, driven by large-scale public infrastructure
              programs and rapid urban development across the country.
            </p>

          </div>

          {/* GOVERNMENT PROGRAMS CARD */}

          <div className="mt-10 rounded-[20px] border-[3px] border-[#D4A017] bg-white p-8 text-[#071B3B]">

            <h3 className="font-serif text-xl font-bold leading-7 text-[#D4A017]">
              The Government has also outlined long-term infrastructure
              investment plans under initiatives such as:
            </h3>

            <div className="mt-5 grid gap-x-10 gap-y-1.5 md:grid-cols-2">

              {governmentInfrastructurePrograms.map((item) => (
                <div key={item} className="text-base leading-6">
                  • {item}
                </div>
              ))}

            </div>

          </div>

          {/* PROCUREMENT CARD */}

          <div className="mt-7 rounded-[20px] border-[3px] border-[#D4A017] bg-white p-8 text-[#071B3B]">

            <h3 className="font-serif text-xl font-bold leading-7 text-[#D4A017]">
              Government departments, PSUs, Smart City authorities, Municipal
              Corporations, Railways, Defence organizations, and Industrial
              Development Corporations regularly procure:
            </h3>

            <div className="mt-5 grid gap-x-10 gap-y-1.5 md:grid-cols-2">

              {governmentProcurementItems.map((item) => (
                <div key={item} className="text-base leading-6">
                  • {item}
                </div>
              ))}

            </div>

            <p className="mt-6 text-base leading-6">
              through structured procurement and tendering processes.
            </p>

            <p className="mt-5 text-base leading-6">
              The continuous expansion of India&apos;s infrastructure sector
              has significantly increased the demand for professional tender
              consultancy, procurement documentation support, technical bid
              preparation, vendor registration services, BOQ management, GeM
              support, compliance coordination, and post-tender assistance for
              businesses operating in the construction and infrastructure
              industry.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          GOVERNMENT INFRASTRUCTURE PROCUREMENT
      ====================================================== */}

      <section className="bg-white px-6 py-14 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Government Infrastructure Procurement{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Development Programs
          </SectionTitle>

          <p className="mx-auto mt-6 max-w-[1000px] text-center text-base leading-6 text-gray-600">
            India&apos;s infrastructure sector is driven by large Government
            development programs and public procurement initiatives.
          </p>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">

            <NavyCard
              title="Major infrastructure development initiatives include:"
              points={governmentInfrastructurePrograms}
            />

            <NavyCard
              title="Infrastructure procurement activities are regularly managed by:"
              points={infrastructureAuthorities}
            />

          </div>

          <p className="mx-auto mt-7 max-w-[1050px] text-center text-base leading-6">
            These authorities regularly procure construction services,
            engineering solutions, EPC services, maintenance contracts,
            consultancy services, manpower services, industrial equipment,
            infrastructure materials, and project management solutions through
            structured procurement systems.
          </p>

        </div>

      </section>

      {/* =====================================================
          PROCUREMENT AREAS
      ====================================================== */}

      <section className="bg-white px-6 py-14 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Construction{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Infrastructure Procurement Areas We Support
          </SectionTitle>

          <p className="mx-auto mt-6 max-w-[836px] text-center text-base leading-6">
            Tender Elite provides procurement consultancy and tender support
            services for areas including:
          </p>

          <div className="mt-9 grid gap-7 lg:grid-cols-3">

            {procurementAreas.map((column, index) => (
              <NavyCard
                key={index}
                points={column}
                className="min-h-[240px]"
              />
            ))}

          </div>

          <p className="mt-7 text-center text-base leading-6">
            and many other construction and infrastructure-related procurement
            categories.
          </p>

        </div>

      </section>

      {/* =====================================================
          COMMON PROCUREMENT CHALLENGES
      ====================================================== */}

      <section className="bg-white px-6 py-12 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Common Procurement Challenges in the Construction Industry
          </SectionTitle>

          <p className="mx-auto mt-6 max-w-[984px] text-center text-base leading-6">
            Construction and infrastructure tenders often involve highly
            detailed and compliance-intensive requirements such as:
          </p>

          <div className="mx-auto mt-8 grid max-w-[1040px] gap-7 lg:grid-cols-2">

            <NavyCard points={challengeLeft} />

            <NavyCard points={challengeRight} />

          </div>

          <p className="mx-auto mt-7 max-w-[984px] text-center text-base font-bold leading-6">
            Proper management of these requirements is critical for successful
            procurement participation and project qualification.
          </p>

        </div>

      </section>

      {/* =====================================================
          HOW TENDER ELITE SUPPORTS
      ====================================================== */}

      <section className="bg-white px-6 py-12 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <h2 className="text-center font-serif text-4xl font-extrabold leading-tight tracking-[2px] text-[#D4A017] md:text-5xl">
            How Tender Elite Supports Construction Businesses
          </h2>

          <p className="mx-auto mt-6 max-w-[984px] text-center text-base leading-6">
            Tender Elite helps construction and infrastructure businesses
            manage procurement participation professionally through structured
            consultancy and documentation support services.
          </p>

          <p className="mt-4 text-center text-base font-bold">
            Our services include:
          </p>

          {/* 3 x 2 */}

          <div className="mx-auto mt-9 grid max-w-[1084px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

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
                min-w-[176px]
                items-center
                justify-center
                rounded-2xl
                bg-[#D4A017]
                px-10
                py-3
                text-base
                font-medium
                text-[#071B3B]
                shadow-[0_10px_20px_rgba(0,0,0,0.15)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_28px_rgba(212,160,23,0.28)]
              "
            >
              View More
            </Link>

          </div>

          <p className="mx-auto mt-8 max-w-[984px] text-center text-base font-bold leading-6">
            We help businesses improve procurement readiness, documentation
            quality, compliance management, and tender participation
            efficiency.
          </p>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B3B] px-6 py-14 text-white lg:px-[80px]">

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.07]
            bg-[repeating-linear-gradient(90deg,#B71432_0px,#B71432_28px,transparent_28px,transparent_54px)]
          "
        />

        <div className="relative mx-auto max-w-[1280px]">

          <h2 className="text-center font-serif text-4xl font-bold leading-tight tracking-[2px] text-[#D4A017] md:text-5xl">
            Why Construction Businesses Choose Tender Elite
          </h2>

          <div className="mx-auto mt-10 grid max-w-[1196px] gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {whyChooseCards.map((title) => (
              <article
                key={title}
                className="
                  flex
                  min-h-[245px]
                  items-center
                  justify-center
                  rounded-[20px]
                  border-2
                  border-[#D4A017]
                  bg-white
                  p-7
                  text-center
                  shadow-[0_8px_25px_rgba(0,0,0,0.14)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_14px_32px_rgba(212,160,23,0.24)]
                "
              >

                <h3 className="font-serif text-xl font-semibold leading-8 tracking-[1.2px] text-[#D4A017] sm:text-2xl">
                  {title}
                </h3>

              </article>
            ))}

          </div>

          <p className="mx-auto mt-9 max-w-[1196px] text-center font-serif text-xl font-medium leading-8 tracking-wide">
            At Tender Elite, we help construction and infrastructure
            businesses manage procurement participation professionally through
            structured tender consultancy, technical documentation support,
            compliance coordination, and procurement assistance that improves
            participation readiness and operational efficiency.
          </p>

        </div>

      </section>

      {/* =====================================================
          LOCATIONS
          PREMIUM HOVER
      ====================================================== */}

      <section className="bg-white px-6 py-14 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Locations We Serve
          </SectionTitle>

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

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
              className="
                inline-flex
                rounded-2xl
                bg-[#D4A017]
                px-10
                py-3
                text-base
                font-medium
                text-[#071B3B]
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_25px_rgba(212,160,23,0.28)]
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

      <section className="bg-white px-6 py-10 lg:px-[80px]">

        <div className="mx-auto max-w-[1059px] rounded-[30px] bg-[#071B3B] px-8 py-12 text-center">

          <h2 className="font-serif text-3xl font-semibold leading-tight tracking-[2px] text-[#D4A017]">
            Need Professional Construction{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Infrastructure Tender Consultancy Support?
          </h2>

          <p className="mx-auto mt-6 max-w-[914px] font-serif text-lg font-semibold leading-6 tracking-widest text-white">
            Get expert assistance for infrastructure tender participation, BOQ
            documentation, vendor registration, GeM support, technical bid
            preparation, and procurement compliance management.
          </p>

          <Link
            href="/contact"
            className="
              mx-auto
              mt-8
              flex
              max-w-[485px]
              items-center
              justify-center
              gap-3
              rounded-[30px]
              bg-[#B71432]
              px-6
              py-3
              text-base
              font-semibold
              tracking-widest
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#971029]
            "
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#071B3B]">
              →
            </span>

            Get Infrastructure Tender Support

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