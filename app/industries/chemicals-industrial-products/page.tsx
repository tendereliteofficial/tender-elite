import { withYoast } from "@/lib/yoast-seo";
import { slugToTitle as _s } from "@/lib/seo";

const baseMetadata = {
  title: `${_s("chemicals-industrial-products")} Tender Support`,
  description: `Find, prepare and win ${_s("chemicals-industrial-products")} government tenders in India. Tender Elite offers expert bidding, documentation and compliance support.`,
  alternates: { canonical: "/industries/chemicals-industrial-products" },
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
   MARKET DATA
========================================================= */

const majorProducers = [
  "Specialty Chemicals",
  "Industrial Chemicals",
  "Petrochemicals",
  "Agro Chemicals",
  "Industrial Gases",
  "Water Treatment Chemicals",
  "Process Chemicals",
  "Industrial Consumables",
  "Laboratory Chemicals",
  "Industrial Utility Products",
];

const growthAreas = [
  "Industrial Manufacturing Infrastructure",
  "Petrochemical Infrastructure",
  "Specialty Chemical Production",
  "Water Treatment Infrastructure",
  "Industrial Utility Systems",
  "Process Industry Expansion",
  "Industrial Automation Infrastructure",
  "Smart Manufacturing Systems",
  "Industrial Safety Infrastructure",
  "Laboratory & Research Infrastructure",
];

const governmentInvestment = [
  "Make in India Programs",
  "Petrochemical Infrastructure Projects",
  "Industrial Corridor Development",
  "Manufacturing Modernization Programs",
  "Specialty Chemical Expansion",
  "Industrial Utility Infrastructure",
  "Smart Manufacturing Initiatives",
  "Process Industry Infrastructure",
  "Industrial Research & Development",
  "Environmental Infrastructure Projects",
];

const largeScaleProcurement = [
  "Industrial manufacturing projects",
  "Water treatment infrastructure",
  "Process industry expansion",
  "Industrial utility infrastructure",
  "Laboratory infrastructure systems",
  "Industrial safety projects",
  "Manufacturing automation systems",
  "Industrial maintenance contracts",
  "Petrochemical infrastructure",
  "Environmental engineering projects",
];

const governmentProcurement = [
  "Industrial chemicals",
  "Process materials",
  "Laboratory systems",
  "Industrial consumables",
  "Utility infrastructure products",
  "Industrial safety systems",
  "Water treatment chemicals",
  "Industrial automation systems",
  "Mechanical & utility infrastructure",
  "Industrial maintenance services",
  "AMC & maintenance contracts",
  "Engineering consultancy services",
];

/* =========================================================
   GOVERNMENT INITIATIVES
========================================================= */

const governmentInitiatives = [
  "Make in India",
  "Production Linked Incentive (PLI) Schemes",
  "Industrial Corridor Development",
  "Petrochemical Infrastructure Programs",
  "Manufacturing Modernization Projects",
  "Smart Manufacturing Initiatives",
  "Industrial Safety Infrastructure",
  "Environmental Sustainability Programs",
  "Specialty Chemical Development",
  "Industrial Utility Infrastructure Projects",
];

const procurementAuthorities = [
  "PSUs",
  "Oil & Gas Companies",
  "Manufacturing Units",
  "Water Treatment Authorities",
  "Railways",
  "Defence Organizations",
  "Municipal Corporations",
  "Industrial Development Authorities",
  "Power Plants",
  "Process Industry Companies",
  "Public Utility Organizations",
  "Environmental Infrastructure Agencies",
];

/* =========================================================
   PROCUREMENT AREAS
========================================================= */

const procurementAreas = [
  [
    "Industrial Chemical Supply Contracts",
    "Specialty Chemical Projects",
    "Water Treatment Infrastructure",
    "Industrial Utility Systems",
    "Laboratory Infrastructure Projects",
    "Process Industry Infrastructure",
  ],
  [
    "Industrial Safety Systems",
    "Petrochemical Infrastructure",
    "Manufacturing Utility Infrastructure",
    "Industrial Automation Systems",
    "Industrial Consumable Supply",
  ],
  [
    "Mechanical & Utility Infrastructure",
    "Environmental Engineering Projects",
    "AMC & Industrial Maintenance Contracts",
    "Industrial Manpower Services",
    "Engineering Consultancy Services",
  ],
];

/* =========================================================
   CHALLENGES
========================================================= */

const challengeLeft = [
  "Product safety compliance standards",
  "Industrial quality certifications",
  "Environmental compliance documentation",
  "OEM authorization requirements",
  "Product testing & certification requirements",
  "Vendor registration procedures",
];

const challengeRight = [
  "GeM compliance & catalogue requirements",
  "Similar project experience criteria",
  "Multi-stage technical evaluations",
  "Financial qualification requirements",
  "Industrial utility compliance standards",
  "Hazardous material handling requirements",
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
  "Professional Industrial Procurement Consultancy",
  "Strong Technical Documentation Expertise",
  "Multi-Portal Tender Participation Expertise",
  "GeM & Vendor Registration Assistance",
  "OEM & Compliance Coordination Support",
  "Structured Documentation & Verification Process",
  "Experience Supporting Industrial Infrastructure Projects",
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
      className={`
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-[#071B3B]
        p-7
        text-white
        shadow-[0_0_25px_rgba(212,160,23,0.12)]
        ${className}
      `}
    >
      {title && (
        <h3 className="text-center font-serif text-xl font-bold leading-7 text-[#D4A017]">
          {title}
        </h3>
      )}

      <div
        className={`${
          title ? "mt-5" : ""
        } space-y-1.5 text-base leading-6 tracking-wide`}
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
      href="/services"
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

export default function ChemicalsIndustrialProductsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071B3B]">

      <Header />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-[#071B3B]">

        <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-[80px]">

          <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">

            <div>

              <h1 className="font-serif text-5xl font-bold leading-[1.06] text-[#D4A017] md:text-6xl">
                Chemicals{" "}
                <span className="font-sans">
                  &amp;
                </span>{" "}
                Industrial Products Industry
              </h1>

              <div className="mt-7 h-[2px] w-96 max-w-full rounded-full bg-[#D4A017]" />

              <div className="mt-7 space-y-5 text-base leading-6 tracking-wide text-white">

                <p>
                  The Chemicals &amp; Industrial Products Industry is one of
                  India&apos;s most important manufacturing and industrial
                  sectors, supporting industrial production, infrastructure
                  development, pharmaceuticals, agriculture, textiles,
                  construction, water treatment, manufacturing operations,
                  energy systems, and large-scale industrial supply chains
                  across the country.
                </p>

                <p>
                  The sector includes industrial chemicals, specialty
                  chemicals, petrochemicals, industrial gases, water treatment
                  chemicals, industrial consumables, coatings, adhesives,
                  lubricants, cleaning chemicals, process chemicals, industrial
                  raw materials, chemical storage systems, industrial safety
                  products, laboratory chemicals, and industrial utility
                  solutions.
                </p>

              </div>

            </div>

            <div className="w-full overflow-hidden rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.65)]">

              <img
                src="/images/chem1.png"
                alt="Chemicals and Industrial Products Industry"
                width={688}
                height={469}
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

          <div className="grid items-start gap-10 lg:grid-cols-[516px_1fr]">

            {/* IMAGES */}

            <div className="space-y-6">

              <div className="w-[516px] max-w-full overflow-hidden rounded-[20px]">

                <img
                  src="/images/chem2.png"
                  alt="Chemicals Industry Overview"
                  width={516}
                  height={344}
                  className="block h-[344px] w-[516px] max-w-full object-cover shadow-[0_0_30px_rgba(0,0,0,0.35)]"
                />

              </div>

              <div className="w-[516px] max-w-full overflow-hidden rounded-[20px]">

                <img
                  src="/images/chem3.png"
                  alt="Industrial Products Overview"
                  width={516}
                  height={344}
                  className="block h-[344px] w-[516px] max-w-full object-cover shadow-[0_0_30px_rgba(0,0,0,0.35)]"
                />

              </div>

            </div>

            {/* TEXT */}

            <div>

              <h2 className="text-xl tracking-wide text-[#071B3B]">
                INDUSTRY OVERVIEW
              </h2>

              <div className="mt-8 space-y-5 text-base leading-6 tracking-wide text-gray-600">

                <p>
                  India is one of the world&apos;s fastest-growing chemical
                  manufacturing markets and continues to witness rapid
                  expansion due to industrialization, manufacturing growth,
                  infrastructure development, export demand, process industry
                  expansion, and increasing domestic consumption.
                </p>

                <p>
                  Government departments, PSUs, manufacturing units, oil &amp;
                  gas companies, power plants, water treatment authorities,
                  Railways, Defence organizations, Municipal Corporations,
                  industrial infrastructure authorities, and public utility
                  organizations regularly procure industrial chemicals,
                  process materials, utility products, laboratory systems,
                  industrial consumables, engineering solutions, and
                  maintenance services through structured procurement and
                  tendering processes.
                </p>

                <p>
                  The Government of India continues to support the sector
                  through initiatives such as Make in India, Production Linked
                  Incentive (PLI) schemes, petrochemical infrastructure
                  development, industrial corridor programs, manufacturing
                  modernization, specialty chemical expansion, and industrial
                  infrastructure development initiatives.
                </p>

                <p>
                  Due to the highly technical and compliance-intensive nature
                  of chemical and industrial procurement projects, businesses
                  participating in this sector are required to manage product
                  safety standards, technical specifications, quality
                  certifications, environmental compliance documentation, OEM
                  authorizations, vendor registrations, GeM catalogue
                  requirements, and procurement documentation professionally.
                </p>

                <p>
                  Tender Elite provides specialized tender consultancy and
                  procurement support services for chemical manufacturers,
                  industrial product suppliers, process industry companies,
                  laboratory solution providers, industrial consumable
                  suppliers, utility infrastructure companies, specialty
                  chemical manufacturers, and industrial service providers
                  across India.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MARKET SIZE & GROWTH
      ====================================================== */}

      <section className="bg-[#071B3B] px-6 py-14 text-white lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Chemicals{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Industrial Products Industry Market Size{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Industry Growth
          </SectionTitle>

          <div className="mt-8 space-y-5 text-base leading-6 tracking-wide text-slate-200">

            <p>
              India&apos;s Chemicals &amp; Industrial Products Industry is one
              of the country&apos;s largest manufacturing sectors and
              contributes significantly to industrial production, exports,
              infrastructure development, and manufacturing growth.
            </p>

            <p>
              The Indian chemical industry is estimated to exceed US$ 300
              billion by 2025 and continues to grow rapidly due to increasing
              industrialization, manufacturing expansion, infrastructure
              growth, specialty chemical demand, and export opportunities.
            </p>

          </div>

          {/* TOP TWO */}

          <div className="mt-10 grid gap-7 lg:grid-cols-2">

            <WhiteCard
              title="India is among the world’s major producers of:"
              points={majorProducers}
            />

            <WhiteCard
              title="The sector is witnessing strong growth across:"
              points={growthAreas}
            />

          </div>

          {/* SECOND ROW */}

          <div className="mt-7 grid gap-7 lg:grid-cols-2">

            <WhiteCard
              title="The Government continues to invest significantly in:"
              points={governmentInvestment}
            />

            <WhiteCard
              title="Large-scale procurement opportunities are continuously generated through:"
              points={largeScaleProcurement}
            />

          </div>

          {/* CENTER CARD */}

          <div className="mx-auto mt-7 max-w-[628px] rounded-[20px] border-[3px] border-[#D4A017] bg-white p-8 text-[#071B3B]">

            <h3 className="font-serif text-xl font-bold leading-7 text-[#D4A017]">
              Government organizations and procurement authorities regularly
              procure:
            </h3>

            <div className="mt-5 grid gap-x-8 gap-y-1.5 text-base leading-6 sm:grid-cols-2">

              {governmentProcurement.map((item) => (
                <div key={item}>
                  • {item}
                </div>
              ))}

            </div>

            <p className="mt-6 font-semibold">
              through structured procurement and tendering systems.
            </p>

          </div>

          <p className="mx-auto mt-8 max-w-[1280px] text-center text-base leading-6 tracking-wide text-slate-200">
            The continuous expansion of India&apos;s manufacturing and
            industrial ecosystem has significantly increased the demand for
            professional tender consultancy, procurement documentation
            support, vendor registration assistance, GeM services, compliance
            coordination, technical bid preparation, OEM coordination, and
            post-tender support services for businesses operating in this
            sector.
          </p>

        </div>

      </section>

      {/* =====================================================
          GOVERNMENT INITIATIVES
      ====================================================== */}

      <section className="bg-white px-6 py-14 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Government Chemicals{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Industrial Procurement Initiatives
          </SectionTitle>

          <p className="mx-auto mt-6 max-w-[1223px] text-center text-base leading-6 text-gray-600">
            India&apos;s chemicals and industrial products sector is supported
            by major Government industrial development and manufacturing
            infrastructure initiatives.
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

          <p className="mx-auto mt-7 max-w-[1000px] text-center text-base leading-6 text-[#071B3B]">
            These organizations regularly procure industrial chemicals,
            utility products, process materials, laboratory systems,
            industrial infrastructure solutions, and maintenance services
            through structured procurement systems.
          </p>

        </div>

      </section>

      {/* =====================================================
          PROCUREMENT AREAS
      ====================================================== */}

      <section className="bg-white px-6 py-14 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Chemicals{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Industrial Procurement Areas We Support
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

          <p className="mt-7 text-center text-base leading-6 text-[#071B3B]">
            and many other chemicals and industrial product-related
            procurement categories.
          </p>

        </div>

      </section>

      {/* =====================================================
          COMMON PROCUREMENT CHALLENGES
      ====================================================== */}

      <section className="bg-white px-6 py-12 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Common Procurement Challenges in the Chemicals{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Industrial Products Industry
          </SectionTitle>

          <p className="mx-auto mt-6 max-w-[984px] text-center text-base leading-6">
            Chemical and industrial product tenders often involve highly
            technical and compliance-intensive requirements such as:
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
          3 x 2
      ====================================================== */}

      <section className="bg-white px-6 py-12 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <h2 className="text-center font-serif text-4xl font-extrabold leading-tight tracking-[2px] text-[#D4A017] md:text-5xl">
            How Tender Elite Supports Chemical Businesses
          </h2>

          <p className="mx-auto mt-6 max-w-[984px] text-center text-base leading-6">
            Tender Elite helps chemical manufacturers and industrial solution
            providers manage procurement participation professionally through
            structured consultancy and documentation support services.
          </p>

          <p className="mt-4 text-center text-base font-bold">
            Our services include:
          </p>

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
            We help businesses improve procurement readiness, technical
            documentation quality, compliance management, and tender
            participation efficiency.
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
            Why Chemical Businesses Choose Tender Elite
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
            At Tender Elite, we help chemical manufacturers and industrial
            suppliers manage procurement participation professionally through
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

        <div className="mx-auto max-w-[1062px] rounded-[30px] bg-[#071B3B] px-8 py-12 text-center">

          <h2 className="font-serif text-3xl font-semibold leading-tight tracking-[2px] text-[#D4A017]">
            Need Professional Industrial Tender Consultancy Support?
          </h2>

          <p className="mx-auto mt-6 max-w-[917px] font-serif text-xl font-semibold leading-7 tracking-widest text-white">
            Get expert assistance for chemical tender participation, industrial
            procurement documentation, vendor registration, GeM support,
            technical bid preparation, and procurement compliance management.
          </p>

          <Link
            href="/contact"
            className="
              mx-auto
              mt-8
              flex
              max-w-[390px]
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

            Get Industrial Tender Support

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
export async function generateMetadata() {
  return withYoast("/industries/chemicals-industrial-products", baseMetadata);
}
