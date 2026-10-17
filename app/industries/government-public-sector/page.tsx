import { withYoast } from "@/lib/yoast-seo";
import { slugToTitle as _s } from "@/lib/seo";

const baseMetadata = {
  title: `${_s("government-public-sector")} Tender Support`,
  description: `Find, prepare and win ${_s("government-public-sector")} government tenders in India. Tender Elite offers expert bidding, documentation and compliance support.`,
  alternates: { canonical: "/industries/government-public-sector" },
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

const sectorGrowth = [
  "EPC & Infrastructure Projects",
  "Government IT Infrastructure",
  "Utility & Public Service Systems",
  "Industrial & Manufacturing Infrastructure",
  "Transportation & Mobility Infrastructure",
  "Facility Management Services",
  "Security & Surveillance Infrastructure",
  "Healthcare & Institutional Projects",
  "Manpower & Operational Services",
  "Smart Governance Infrastructure",
];

const governmentProcurement = [
  "Engineering & infrastructure services",
  "Industrial equipment & machinery",
  "IT & digital systems",
  "Facility management services",
  "Transportation infrastructure",
  "Healthcare systems",
  "Security & surveillance solutions",
  "Utility infrastructure",
  "Manpower & staffing services",
  "AMC & maintenance contracts",
  "Smart city infrastructure",
  "Institutional supply systems",
];

const governmentInitiatives = [
  "PM Gati Shakti Mission",
  "National Infrastructure Pipeline (NIP)",
  "Smart Cities Mission",
  "Digital India Mission",
  "Make in India",
  "Jal Jeevan Mission",
  "AMRUT Mission",
  "Bharatmala Project",
  "Sagarmala Programme",
  "Renewable Energy & Sustainability Programs",
  "Healthcare Infrastructure Expansion",
  "Industrial Corridor Development",
  "Defence Modernization Programs",
  "Urban Development Initiatives",
];

const procurementAuthorities = [
  "Central Government Departments",
  "State Government Departments",
  "PSUs",
  "Railways",
  "Defence Organizations",
  "Smart City Authorities",
  "Metro Rail Corporations",
  "Municipal Corporations",
  "Public Utility Organizations",
  "Healthcare Institutions",
  "Educational Authorities",
  "Industrial Development Agencies",
];

const procurementAreas = [
  [
    "Infrastructure Development Projects",
    "EPC & Engineering Projects",
    "Government IT Infrastructure",
    "Facility Management Services",
    "Manpower & Staffing Contracts",
    "Security & Surveillance Infrastructure",
  ],
  [
    "Healthcare Infrastructure Projects",
    "Educational Infrastructure Systems",
    "Water Supply & Utility Projects",
    "Transportation Infrastructure",
    "Renewable Energy Projects",
  ],
  [
    "Industrial Utility Infrastructure",
    "Smart City Infrastructure",
    "AMC & Maintenance Contracts",
    "Institutional Supply Systems",
    "Public Utility Consultancy Services",
  ],
];

const challengesLeft = [
  "Eligibility & technical qualification criteria",
  "Financial qualification requirements",
  "OEM authorization requirements",
  "Tender compliance documentation",
  "Vendor registration procedures",
  "GeM compliance & catalogue requirements",
];

const challengesRight = [
  "Statutory & legal compliance standards",
  "Similar project experience criteria",
  "Multi-stage technical evaluations",
  "EMD/BG compliance requirements",
  "Joint Venture & consortium compliance",
  "Contractual & operational compliance standards",
];

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

const whyChoose = [
  "Professional Government Procurement Consultancy",
  "Strong Documentation & Compliance Expertise",
  "Multi-Portal Tender Participation Expertise",
  "GeM & Vendor Registration Assistance",
  "Structured Documentation & Verification Process",
  "Experience Supporting Multi-Industry Government Projects",
  "OEM & Compliance Coordination Support",
  "End-to-End Tender & Procurement Consultancy Services",
];

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
              hover:bg-[#971029]
            "
          >
            Contact Us
          </Link>
        </nav>

        {/* MOBILE + TABLET MENU */}

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
   BULLET CARD
========================================================= */

function BulletCard({
  title,
  points,
  dark = false,
  twoColumns = false,
  className = "",
}: {
  title?: string;
  points: string[];
  dark?: boolean;
  twoColumns?: boolean;
  className?: string;
}) {
  return (
    <article
      className={`
        w-full
        rounded-[18px]
        border-[3px]
        border-[#D4A017]
        p-5
        sm:p-6
        ${
          dark
            ? "bg-[#071B3B] text-white"
            : "bg-white text-[#071B3B]"
        }
        ${className}
      `}
    >
      {title && (
        <h3
          className="
            text-base
            font-bold
            leading-6
            tracking-wide
            text-[#D4A017]
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
              ? "grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2"
              : "space-y-2"
          }
          text-sm
          leading-6
          tracking-wide
          ${
            dark
              ? "text-white"
              : "text-[#071B3B]"
          }
          sm:text-base
        `}
      >
        {points.map((point) => (
          <div
            key={point}
            className="flex items-start"
          >
            <span className="mr-2 shrink-0 font-bold">
              •
            </span>

            <span>
              {point}
            </span>
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
        min-h-[128px]
        w-full
        items-center
        justify-center
        rounded-[18px]
        border-[3px]
        border-[#D4A017]
        bg-[#071B3B]
        px-5
        py-6
        text-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_12px_25px_rgba(212,160,23,0.24)]
      "
    >
      <h3
        className="
          font-serif
          text-lg
          font-semibold
          leading-7
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
        hover:shadow-[0_16px_35px_rgba(212,160,23,0.28)]
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
          group-hover:scale-[1.06]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-black/15
          transition-all
          duration-300
          group-hover:bg-black/5
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

export default function GovernmentPublicSectorPage() {
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

      <section className="bg-[#071B3B]">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1440px]
            items-center
            gap-8
            px-5
            py-10
            sm:px-6
            sm:py-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:px-[80px]
          "
        >
          <div className="min-w-0">
            <h1
              className="
                max-w-[650px]
                font-serif
                text-4xl
                font-bold
                leading-[1.04]
                text-[#D4A017]
                sm:text-5xl
                md:text-6xl
              "
            >
              Government{" "}
              <span className="font-sans">
                &amp;
              </span>{" "}
              Public Sector Projects
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
                Government &amp; Public Sector Projects form one of India&apos;s
                largest procurement and infrastructure ecosystems, covering
                public infrastructure development, utility services, healthcare
                systems, transportation infrastructure, smart city development,
                defence projects, digital governance systems, industrial
                modernization, and public welfare initiatives across the
                country.
              </p>

              <p>
                The sector includes Government infrastructure projects, PSU
                procurement, public utility systems, healthcare infrastructure,
                smart city projects, railway infrastructure, defence
                procurement, educational infrastructure, IT &amp; digital
                governance systems, water supply projects, sanitation
                infrastructure, public facility management, manpower services,
                transportation systems, engineering projects, and institutional
                supply systems.
              </p>
            </div>
          </div>

          <div className="w-full overflow-hidden rounded-[20px]">
            <img
              src="/images/gov1.png"
              alt="Government and Public Sector Projects"
              width={654}
              height={503}
              className="
                block
                h-auto
                w-full
                object-cover
              "
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRY OVERVIEW
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1280px]
            items-center
            gap-8
            px-5
            py-10
            sm:px-6
            sm:py-12
            lg:grid-cols-[519px_1fr]
            lg:px-[80px]
          "
        >
          {/* IMAGES */}

          <div className="space-y-5">
            <img
              src="/images/gov2.png"
              alt="Government infrastructure"
              width={519}
              height={318}
              className="
                block
                h-auto
                w-full
                max-w-[519px]
                rounded-[20px]
                object-cover
              "
            />

            <img
              src="/images/gov3.png"
              alt="Public sector infrastructure"
              width={519}
              height={311}
              className="
                block
                h-auto
                w-full
                max-w-[519px]
                rounded-[20px]
                object-cover
              "
            />
          </div>

          {/* TEXT */}

          <div className="self-center">
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
                India&apos;s continuous investment in national infrastructure
                development, urban modernization, industrial growth, digital
                governance, transportation expansion, healthcare
                infrastructure, renewable energy projects, and public utility
                systems has significantly increased procurement opportunities
                across Government departments and Public Sector Undertakings
                (PSUs).
              </p>

              <p>
                Central Government departments, State Government departments,
                Municipal Corporations, PSUs, Railways, Defence organizations,
                Smart City authorities, Metro Rail Corporations, healthcare
                institutions, educational authorities, public utility
                organizations, industrial infrastructure agencies, and
                Government procurement bodies regularly procure infrastructure
                systems, engineering services, manpower solutions, IT systems,
                utility infrastructure, industrial equipment, facility
                management services, and operational support services through
                structured procurement and tendering processes.
              </p>

              <p>
                The Government of India continues to strengthen public
                infrastructure and procurement systems through initiatives such
                as PM Gati Shakti Mission, Smart Cities Mission, Digital India,
                Make in India, Jal Jeevan Mission, AMRUT Mission, National
                Infrastructure Pipeline (NIP), renewable energy initiatives,
                healthcare modernization programs, and industrial corridor
                development projects.
              </p>

              <p>
                Due to the highly structured and compliance-driven nature of
                Government procurement projects, businesses participating in
                this sector are required to manage eligibility criteria,
                technical documentation, financial qualifications, compliance
                standards, OEM authorizations, vendor registrations, GeM
                catalogue requirements, statutory documentation, and procurement
                procedures professionally.
              </p>

              <p>
                Tender Elite provides specialized tender consultancy and
                procurement support services for contractors, infrastructure
                companies, service providers, OEMs, manufacturers, manpower
                companies, engineering firms, IT solution providers, and
                industrial suppliers participating in Government and Public
                Sector procurement projects across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MARKET SIZE
      ====================================================== */}

      <section
        className="
          relative
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
            opacity-[0.18]
            bg-[repeating-linear-gradient(
              90deg,
              rgba(183,20,50,0.45)_0px,
              rgba(183,20,50,0.45)_42px,
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
            max-w-[1120px]
            px-4
            py-10
            sm:px-6
            sm:py-12
          "
        >
          <SectionTitle>
            Government{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Public Sector Market Size{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Industry Growth
          </SectionTitle>

          <div
            className="
              mx-auto
              mt-6
              max-w-[1040px]
              space-y-5
              text-sm
              leading-6
              tracking-wide
              text-white
              sm:text-base
            "
          >
            <p>
              India&apos;s Government and Public Sector procurement ecosystem is
              one of the largest procurement and infrastructure markets in the
              world, supported by continuous investments in infrastructure,
              transportation, healthcare, defence, utilities, smart cities,
              industrial development, and digital transformation projects.
            </p>

            <p>
              The Government of India has committed massive investments through
              national infrastructure and development programs.
            </p>
          </div>

          {/* INVESTMENT CARD */}

          <article
            className="
              mt-7
              rounded-[18px]
              border-[3px]
              border-[#D4A017]
              bg-white
              px-5
              py-6
              text-[#071B3B]
              sm:px-7
            "
          >
            <h3
              className="
                text-base
                font-bold
                leading-6
                tracking-wide
                text-[#D4A017]
                sm:text-lg
              "
            >
              Key Market Size &amp; Investment Figures
            </h3>

            <div
              className="
                mt-5
                space-y-3
                text-sm
                leading-6
                tracking-wide
                text-[#071B3B]
                sm:text-base
              "
            >
              <p>
                • India&apos;s National Infrastructure Pipeline (NIP) currently
                includes over 14,500+ infrastructure projects with an estimated
                investment value exceeding Rs. 213 trillion (Rs. 213 lakh crore
                / US$ 2.2+ trillion) across multiple sectors.
              </p>

              <p>
                • The original National Infrastructure Pipeline announced
                investments of approximately Rs. 111 lakh crore (US$ 1.4
                trillion) focused on roads, railways, energy, urban
                infrastructure, water, and digital infrastructure.
              </p>

              <p>
                • India&apos;s infrastructure sector is projected to receive
                more than US$ 1.4 trillion in planned investments through
                Government infrastructure programs and public sector projects.
              </p>

              <p>
                • The Government of India increased infrastructure capital
                expenditure to a record Rs. 12.2 lakh crore for FY 2026-27,
                highlighting continued large-scale public procurement and
                infrastructure development.
              </p>

              <p>
                • Infrastructure sectors such as transportation, railways,
                urban development, utilities, defence, digital infrastructure,
                and public services continue to generate large-scale procurement
                opportunities for contractors, manufacturers, service
                providers, and infrastructure companies.
              </p>
            </div>
          </article>

          {/* TWO CARDS */}

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <BulletCard
              title="The sector is witnessing strong growth across:"
              points={sectorGrowth}
            />

            <BulletCard
              title="Government organizations and procurement authorities regularly procure:"
              points={governmentProcurement}
              twoColumns
            />
          </div>

          <p
            className="
              mx-auto
              mt-7
              max-w-[1040px]
              text-center
              text-sm
              leading-6
              tracking-wide
              text-white
              sm:text-base
            "
          >
            The continuous expansion of India&apos;s Government and public
            infrastructure ecosystem has significantly increased the demand for
            professional tender consultancy, procurement documentation support,
            vendor registration assistance, GeM services, compliance
            coordination, technical bid preparation, OEM coordination, and
            post-tender support services for businesses operating in this
            sector.
          </p>
        </div>
      </section>

      {/* =====================================================
          MAJOR GOVERNMENT PROCUREMENT INITIATIVES
      ====================================================== */}

      <section
        className="
          bg-white
          text-[#071B3B]
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1120px]
            px-4
            py-10
            sm:px-6
            sm:py-12
          "
        >
          <SectionTitle>
            Major Government Procurement Initiatives
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-4
              max-w-[900px]
              text-center
              text-sm
              leading-6
              text-gray-600
              sm:text-base
            "
          >
            India&apos;s Government and Public Sector procurement ecosystem is
            supported by major national infrastructure and development
            initiatives.
          </p>

          {/* TWO DARK CARDS */}

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <BulletCard
              dark
              title="Major Government initiatives include:"
              points={governmentInitiatives}
              className="min-h-[355px]"
            />

            <BulletCard
              dark
              title="Procurement activities are regularly managed by:"
              points={procurementAuthorities}
              className="min-h-[355px]"
            />
          </div>

          <p
            className="
              mx-auto
              mt-6
              max-w-[1000px]
              text-center
              text-sm
              leading-6
              text-[#071B3B]
              sm:text-base
            "
          >
            These organizations regularly procure infrastructure systems,
            industrial services, engineering solutions, utility systems,
            digital technologies, manpower services, and operational support
            infrastructure through structured procurement systems.
          </p>
        </div>
      </section>

      {/* =====================================================
          PROCUREMENT AREAS
      ====================================================== */}

      <section
        className="
          bg-white
          text-[#071B3B]
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1120px]
            px-4
            py-10
            sm:px-6
            sm:py-12
          "
        >
          <SectionTitle>
            Government{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Public Sector Procurement Areas We Support
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-4
              max-w-[836px]
              text-center
              text-sm
              leading-6
              text-gray-600
              sm:text-base
            "
          >
            Tender Elite provides procurement consultancy and tender support
            services for areas including:
          </p>

          {/* THREE CARDS */}

          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {procurementAreas.map((items, index) => (
              <BulletCard
                key={index}
                dark
                points={items}
                className="min-h-[220px]"
              />
            ))}
          </div>

          <p
            className="
              mt-5
              text-center
              text-sm
              leading-6
              text-[#071B3B]
              sm:text-base
            "
          >
            and many other Government and PSU-related procurement categories.
          </p>
        </div>
      </section>

      {/* =====================================================
          CHALLENGES
      ====================================================== */}

      <section
        className="
          bg-white
          text-[#071B3B]
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1120px]
            px-4
            py-10
            sm:px-6
            sm:py-12
          "
        >
          <SectionTitle>
            Common Procurement Challenges in Government Projects
          </SectionTitle>

          {/* THIS TEXT IS NOW EXPLICITLY DARK */}

          <p
            className="
              mx-auto
              mt-4
              max-w-[984px]
              text-center
              text-sm
              leading-6
              text-[#071B3B]
              sm:text-base
            "
          >
            Government and PSU tenders often involve highly detailed and
            compliance-intensive requirements such as:
          </p>

          {/* TWO CHALLENGE CARDS */}

          <div
            className="
              mx-auto
              mt-7
              grid
              max-w-[1060px]
              gap-5
              lg:grid-cols-2
            "
          >
            <BulletCard
              dark
              points={challengesLeft}
              className="min-h-[210px]"
            />

            <BulletCard
              dark
              points={challengesRight}
              className="min-h-[210px]"
            />
          </div>

          {/* THIS TEXT IS NOW EXPLICITLY DARK */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[984px]
              text-center
              text-sm
              leading-6
              text-[#071B3B]
              sm:text-base
            "
          >
            Proper management of these requirements is critical for successful
            procurement participation and project qualification.
          </p>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        className="
          bg-white
          text-[#071B3B]
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1120px]
            px-4
            py-10
            sm:px-6
            sm:py-12
          "
        >
          <SectionTitle>
            How Tender Elite Supports Government Procurement Participation
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-4
              max-w-[984px]
              text-center
              text-sm
              leading-6
              text-[#071B3B]
              sm:text-base
            "
          >
            Tender Elite helps contractors, service providers, OEMs, and
            industrial suppliers manage Government procurement participation
            professionally through structured consultancy and documentation
            support services.
          </p>

          <p
            className="
              mt-3
              text-center
              text-sm
              font-bold
              text-[#071B3B]
              sm:text-base
            "
          >
            Our services include:
          </p>

          <div
            className="
              mx-auto
              mt-7
              grid
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

          <div className="mt-6 text-center">
            <Link
              href="/services"
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
                sm:text-base
              "
            >
              View More
            </Link>
          </div>

          <p
            className="
              mx-auto
              mt-6
              max-w-[984px]
              text-center
              text-sm
              leading-6
              text-[#071B3B]
              sm:text-base
            "
          >
            We help businesses improve procurement readiness, documentation
            quality, compliance management, and tender participation efficiency.
          </p>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE
      ====================================================== */}

      <section
        className="
          relative
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
            opacity-[0.10]
            bg-[repeating-linear-gradient(
              90deg,
              rgba(183,20,50,0.48)_0px,
              rgba(183,20,50,0.48)_32px,
              transparent_32px,
              transparent_62px
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
            Why Businesses Choose Tender Elite for Government Projects
          </SectionTitle>

          <div
            className="
              mx-auto
              mt-7
              grid
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
                  min-h-[220px]
                  items-center
                  justify-center
                  rounded-[18px]
                  border-2
                  border-[#D4A017]
                  bg-white
                  p-5
                  text-center
                  shadow-[0_8px_25px_rgba(0,0,0,0.14)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_14px_28px_rgba(212,160,23,0.22)]
                  sm:min-h-[235px]
                "
              >
                <h3
                  className="
                    font-serif
                    text-lg
                    font-semibold
                    leading-7
                    tracking-wide
                    text-[#D4A017]
                    sm:text-xl
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
              mt-7
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
            "
          >
            At Tender Elite, we help businesses participate in Government and
            Public Sector procurement projects professionally through structured
            tender consultancy, technical documentation support, compliance
            coordination, and procurement assistance that improves
            participation readiness and operational efficiency.
          </p>
        </div>
      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */}

      <section
        className="
          bg-white
          text-[#071B3B]
        "
      >
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
              mt-7
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

      <section className="bg-white">
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
              Need Professional Government Tender Consultancy Support?
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
              Get expert assistance for Government tender participation, PSU
              procurement documentation, vendor registration, GeM support,
              technical bid preparation, and procurement compliance management.
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

              Get Tender Support
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
  return withYoast("/industries/government-public-sector", baseMetadata);
}
