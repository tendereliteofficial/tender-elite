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
   MARKET SIZE DATA
========================================================= */

const engineeringSectors = [
  "Manufacturing",
  "Construction & Infrastructure",
  "Railways & Metro Projects",
  "Oil & Gas",
  "Defence Manufacturing",
  "Power & Energy",
  "Industrial Automation",
  "HVAC & Utility Infrastructure",
  "Process Industries",
  "Heavy Engineering",
];

const manufacturingInitiatives = [
  "Make in India",
  "PM Gati Shakti",
  "National Infrastructure Pipeline",
  "Industrial Corridor Development",
  "Defence Manufacturing Programs",
  "Smart Manufacturing Initiatives",
  "Renewable Energy Expansion",
  "Railway Modernization Programs",
];

const engineeringProcurement = [
  "Industrial machinery",
  "Mechanical infrastructure systems",
  "Fabrication services",
  "HVAC systems",
  "Industrial automation solutions",
  "Engineering consultancy services",
  "Process equipment",
  "EPC & turnkey engineering solutions",
  "Utility infrastructure systems",
  "AMC & industrial maintenance services",
];

/* =========================================================
   GOVERNMENT PROCUREMENT
========================================================= */

const governmentDevelopmentPrograms = [
  "Make in India Mission",
  "PM Gati Shakti Mission",
  "National Infrastructure Pipeline (NIP)",
  "Industrial Corridor Development Projects",
  "Railway Modernization Programs",
  "Smart Manufacturing Initiatives",
  "Defence Manufacturing Programs",
  "Oil & Gas Infrastructure Expansion",
  "Industrial Automation Projects",
  "Power Infrastructure Modernization",
  "Smart City Infrastructure Projects",
  "Renewable Energy Infrastructure Development",
];

const procurementManagedBy = [
  "BHEL",
  "NTPC",
  "ONGC",
  "Indian Railways",
  "Metro Rail Corporations",
  "Defence Organizations",
  "Municipal Corporations",
  "Industrial Development Authorities",
  "PSU Engineering Companies",
  "Smart City Authorities",
  "Public Works Departments",
  "Manufacturing & Process Industry Units",
];

/* =========================================================
   PROCUREMENT AREAS
========================================================= */

const procurementAreas = [
  [
    "Industrial Machinery Supply",
    "Mechanical Infrastructure Projects",
    "Fabrication Works",
    "HVAC Systems & Infrastructure",
    "Industrial Piping Systems",
    "Plant & Equipment Installation",
  ],
  [
    "Utility Infrastructure Projects",
    "EPC & Turnkey Engineering Projects",
    "Industrial Automation Systems",
    "Mechanical Maintenance Contracts",
    "Process Equipment Supply",
  ],
  [
    "Water Treatment Plant Infrastructure",
    "Oil & Gas Mechanical Systems",
    "Manufacturing Plant Infrastructure",
    "AMC & Industrial Maintenance Services",
    "Engineering Consultancy Projects",
  ],
];

/* =========================================================
   CHALLENGES
========================================================= */

const engineeringChallengesLeft = [
  "Detailed technical specifications",
  "Engineering drawings & datasheets",
  "OEM authorization requirements",
  "Product quality certifications",
  "Fabrication standards compliance",
  "Similar work experience criteria",
];

const engineeringChallengesRight = [
  "Technical manpower qualification",
  "Industrial safety compliance",
  "Vendor registration requirements",
  "GeM compliance & catalogue requirements",
  "Performance testing requirements",
  "Multi-stage technical evaluations",
  "Financial qualification requirements",
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
  "Professional Engineering Procurement Consultancy",
  "Strong Technical Documentation Expertise",
  "Multi-Portal Tender Participation Expertise",
  "GeM & Vendor Registration Assistance",
  "Structured Documentation & Verification Process",
  "Experience Supporting Complex Industrial Projects",
  "OEM & Compliance Coordination Support",
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

        {/* MOBILE / TABLET MENU */}

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
  children,
}: {
  title: string;
  points: string[];
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
        shadow-[0_4px_18px_rgba(0,0,0,0.10)]
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
          grid
          grid-cols-1
          gap-x-10
          gap-y-1
          text-sm
          leading-6
          sm:grid-cols-2
          sm:text-base
        "
      >
        {points.map((point) => (
          <div key={point}>• {point}</div>
        ))}
      </div>

      {children && (
        <div
          className="
            mt-6
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

export default function MechanicalEngineeringPage() {
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
                  max-w-[650px]
                  font-serif
                  text-4xl
                  font-bold
                  leading-[1.05]
                  text-[#D4A017]
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Mechanical{" "}
                <span className="font-sans">
                  &amp;
                </span>{" "}
                Engineering Industry
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
                  The Mechanical &amp; Engineering Industry is one of India&apos;s
                  core industrial sectors, playing a vital role in
                  manufacturing, industrial infrastructure, energy systems,
                  transportation, process industries, construction, public
                  utilities, heavy engineering, and industrial modernization
                  projects across the country.
                </p>

                <p>
                  The industry includes industrial machinery, fabrication
                  works, heavy engineering equipment, mechanical infrastructure
                  systems, manufacturing plants, process equipment, piping
                  systems, HVAC systems, industrial automation, maintenance
                  services, engineering consultancy, industrial maintenance
                  contracts, turnkey engineering projects, and EPC solutions.
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
                src="/images/engg1.png"
                alt="Mechanical and Engineering Industry"
                width={650}
                height={505}
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
                src="/images/engg2.png"
                alt="Mechanical Industry Overview"
                width={519}
                height={299}
                className="
                  block
                  h-auto
                  w-full
                  rounded-[20px]
                  object-cover
                  shadow-[0_0_20px_rgba(0,0,0,0.16)]
                  lg:h-[299px]
                "
              />

              <img
                src="/images/engg3.png"
                alt="Engineering Infrastructure"
                width={519}
                height={291}
                className="
                  block
                  h-auto
                  w-full
                  rounded-[20px]
                  object-cover
                  shadow-[0_0_20px_rgba(0,0,0,0.16)]
                  lg:h-[291px]
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
                  India&apos;s rapid industrialization, infrastructure
                  expansion, manufacturing growth, energy development, smart
                  infrastructure initiatives, railway modernization, oil &amp;
                  gas expansion, and public utility development programs have
                  significantly increased procurement opportunities within the
                  mechanical and engineering sector.
                </p>

                <p>
                  Government departments, PSUs, Railways, Defence organizations,
                  Oil &amp; Gas companies, Power Plants, Municipal Corporations,
                  Smart City authorities, Industrial Development Corporations,
                  and manufacturing organizations regularly procure mechanical
                  systems, engineering services, fabrication works, industrial
                  equipment, maintenance contracts, HVAC systems, process
                  equipment, and EPC solutions through structured procurement
                  and tendering processes.
                </p>

                <p>
                  The Government of India continues to support industrial and
                  engineering growth through initiatives such as Make in India,
                  National Infrastructure Pipeline (NIP), PM Gati Shakti,
                  Industrial Corridor Development, railway modernization
                  programs, energy infrastructure expansion, manufacturing
                  incentives, and smart infrastructure development projects.
                </p>

                <p>
                  Due to the technical complexity and industrial nature of
                  mechanical and engineering procurement projects, businesses
                  participating in this sector are required to manage detailed
                  technical specifications, engineering drawings, quality
                  certifications, fabrication standards, vendor registrations,
                  OEM requirements, and compliance documentation professionally.
                </p>

                <p>
                  Tender Elite provides specialized tender consultancy and
                  procurement support services for engineering companies,
                  fabrication contractors, industrial equipment suppliers, EPC
                  contractors, HVAC companies, industrial maintenance firms,
                  manufacturing companies, mechanical contractors, and
                  infrastructure solution providers across India.
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
            lg:px-[52px]
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
            Mechanical{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Engineering Market Size{" "}
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
              India&apos;s Mechanical &amp; Engineering Industry is one of the
              country&apos;s largest industrial and procurement-driven sectors,
              contributing significantly to manufacturing, infrastructure
              development, industrial automation, exports, transportation
              systems, power infrastructure, and heavy engineering growth.
            </p>

            <p>
              The Indian engineering sector continues to expand rapidly due to
              increasing Government infrastructure investments, industrial
              modernization, manufacturing growth, smart infrastructure
              projects, railway modernization, renewable energy expansion, oil
              &amp; gas projects, and industrial automation initiatives.
            </p>

          </div>

          {/* =================================================
              CARD 1
          ================================================== */}

          <div className="mt-7">

            <MarketCard
              title="India’s engineering and capital goods sector represents a major portion of the country’s industrial economy and supports sectors such as:"
              points={engineeringSectors}
            >
              <p>
                The India Engineering Research &amp; Development (ER&amp;D)
                services market is estimated at approximately US$ 133.71
                billion in 2025 and is projected to reach around US$ 217.90
                billion by 2030, growing at a CAGR of approximately 10.3%.
              </p>

              <p className="mt-4">
                India&apos;s engineering services market generated an estimated
                revenue of approximately US$ 160 billion in 2024 and is
                expected to reach nearly US$ 254 billion by 2030.
              </p>

              <p className="mt-4">
                The Engineering Procurement &amp; Construction (EPC) market in
                India is also witnessing strong growth. The India EPC market
                size is estimated at approximately US$ 75.04 billion in 2026
                and is projected to grow significantly over the coming years
                due to continuous infrastructure and industrial investments.
              </p>
            </MarketCard>

          </div>

          {/* =================================================
              CARD 2
          ================================================== */}

          <div className="mt-5">

            <MarketCard
              title="India’s manufacturing sector continues to remain strong with continuous expansion under initiatives such as:"
              points={manufacturingInitiatives}
            >
              <p>
                The Government&apos;s National Infrastructure Pipeline (NIP)
                includes projects worth over Rs. 111 lakh crore across sectors
                such as transportation, industrial infrastructure, energy
                systems, urban development, logistics, and utilities, creating
                large-scale opportunities for mechanical and engineering
                companies.
              </p>
            </MarketCard>

          </div>

          {/* =================================================
              CARD 3
          ================================================== */}

          <div className="mt-5">

            <MarketCard
              title="Government departments, PSUs, Railways, Metro Rail Corporations, Defence organizations, Industrial Development Authorities, Oil & Gas companies, and manufacturing units regularly procure:"
              points={engineeringProcurement}
            >
              <p>
                The continuous expansion of India&apos;s industrial and
                engineering ecosystem has significantly increased the demand
                for professional tender consultancy, procurement documentation
                support, technical bid preparation, vendor registration
                assistance, GeM support, OEM coordination, BOQ assistance,
                compliance management, and post-tender support services for
                businesses operating in the mechanical and engineering
                industry.
              </p>
            </MarketCard>

          </div>

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
            Government Mechanical{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Engineering Procurement Initiatives
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
            India&apos;s mechanical and engineering sector is supported by
            major industrial and infrastructure development initiatives.
          </p>

          <div
            className="
              mt-8
              grid
              gap-6
              lg:grid-cols-2
            "
          >

            <NavyCard
              title="Major Government development programs include:"
              points={governmentDevelopmentPrograms}
              className="min-h-[420px]"
            />

            <NavyCard
              title="Procurement activities are regularly managed by:"
              points={procurementManagedBy}
              twoColumns
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
            These organizations regularly procure engineering solutions,
            industrial machinery, fabrication services, mechanical systems,
            maintenance contracts, utility infrastructure solutions, and
            industrial automation systems through structured procurement
            systems.
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
            Mechanical{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Engineering Procurement Areas We Support
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

          {/* =================================================
              PROCUREMENT CARDS
              GOLDEN GLOW REMOVED
          ================================================== */}

          <div
            className="
              mt-8
              grid
              gap-6
              lg:grid-cols-3
            "
          >

            {procurementAreas.map((items, index) => (
              <NavyCard
                key={index}
                points={items}
                className="
                  min-h-[245px]
                  transition-transform
                  duration-300
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
            and many other mechanical and engineering-related procurement
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
            Common Procurement Challenges in the Mechanical{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Engineering Industry
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
            Mechanical and engineering tenders often involve highly technical
            and compliance-intensive requirements such as:
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

            <NavyCard
              points={engineeringChallengesLeft}
              className="min-h-[260px]"
            />

            <NavyCard
              points={engineeringChallengesRight}
              className="min-h-[260px]"
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
            How Tender Elite Supports Mechanical{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Engineering Businesses
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
              Tender Elite helps engineering companies and industrial solution
              providers manage procurement participation professionally through
              structured consultancy and documentation support services.
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
            Why Mechanical{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Engineering Businesses Choose Tender Elite
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
            At Tender Elite, we help mechanical and engineering businesses
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
            max-w-[1122px]
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
                tracking-[1px]
                text-[#D4A017]
                sm:text-3xl
              "
            >
              Need Professional Mechanical{" "}
              <span className="font-sans">
                &amp;
              </span>{" "}
              Engineering Tender Consultancy Support?
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[970px]
                font-serif
                text-sm
                font-semibold
                leading-6
                tracking-widest
                text-white
                sm:text-lg
              "
            >
              Get expert assistance for engineering tender participation,
              industrial procurement documentation, GeM support, vendor
              registration, technical bid preparation, and procurement
              compliance management.
            </p>

            <Link
              href="/contact"
              className="
                mx-auto
                mt-7
                flex
                w-full
                max-w-[470px]
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

              Get Engineering Tender Support

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