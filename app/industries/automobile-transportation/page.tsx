import { withYoast } from "@/lib/yoast-seo";
import { slugToTitle as _s } from "@/lib/seo";

const baseMetadata = {
  title: `${_s("automobile-transportation")} Tender Support`,
  description: `Find, prepare and win ${_s("automobile-transportation")} government tenders in India. Tender Elite offers expert bidding, documentation and compliance support.`,
  alternates: { canonical: "/industries/automobile-transportation" },
};

import Link from "next/link";

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
   MARKET AREAS
========================================================= */

const leadingMarketAreas = [
  "Passenger Vehicles",
  "Commercial Vehicles",
  "Electric Vehicles (EVs)",
  "Buses & Public Transportation Systems",
  "Automotive Components",
  "Fleet Management Systems",
  "Logistics & Transportation Services",
  "Smart Mobility Solutions",
];

const governmentInvestmentAreas = [
  "EV Infrastructure Development",
  "Public Transportation Modernization",
  "Smart Mobility Programs",
  "Metro Rail Expansion Projects",
  "Logistics Infrastructure Development",
  "National Highway & Road Infrastructure",
  "Fleet Electrification Programs",
  "Automotive Manufacturing Infrastructure",
  "Intelligent Transportation Systems",
  "Public Transport Modernization",
];

const largeScaleProcurement = [
  "Government vehicle procurement",
  "Public transportation modernization",
  "EV fleet procurement",
  "Smart mobility infrastructure",
  "Logistics & transportation projects",
  "Fleet maintenance contracts",
  "Metro & railway transportation systems",
  "Airport transportation services",
  "Municipal transportation projects",
  "Defence mobility infrastructure",
];

const governmentProcurementItems = [
  "Commercial vehicles",
  "Electric vehicles",
  "Transportation systems",
  "Automotive components",
  "Fleet management services",
  "EV charging infrastructure",
  "Logistics services",
  "Vehicle maintenance systems",
  "Public transportation solutions",
  "Smart mobility technologies",
  "Automotive IT systems",
  "AMC & fleet maintenance services",
];

/* =========================================================
   GOVERNMENT INITIATIVES
========================================================= */

const governmentInitiatives = [
  "FAME India Scheme",
  "Make in India – Automotive Sector",
  "PM Gati Shakti Mission",
  "Smart Cities Mission",
  "EV Mobility Infrastructure Programs",
  "Metro Rail Expansion Projects",
  "National Logistics Policy",
  "Intelligent Transportation Systems (ITS)",
  "Public Transportation Modernization",
  "Green Mobility & Sustainability Programs",
];

const procurementAuthorities = [
  "State Transport Undertakings",
  "Indian Railways",
  "Metro Rail Corporations",
  "Municipal Corporations",
  "Defence Organizations",
  "Smart City Authorities",
  "Logistics & Transport Departments",
  "PSU Organizations",
  "Airport Authorities",
  "Urban Development Departments",
  "Public Transport Authorities",
  "Industrial Development Authorities",
];

/* =========================================================
   PROCUREMENT AREAS
========================================================= */

const procurementAreas = [
  [
    "Vehicle Supply Contracts",
    "Commercial Vehicle Procurement",
    "Electric Vehicle (EV) Projects",
    "Fleet Management Systems",
    "Transportation Infrastructure Projects",
    "Logistics & Mobility Services",
  ],
  [
    "EV Charging Infrastructure",
    "Automotive Component Supply",
    "Public Transportation Systems",
    "Smart Mobility Solutions",
    "Vehicle Maintenance Contracts",
  ],
  [
    "Transportation IT Systems",
    "Railway & Metro Transportation Support",
    "Automotive AMC Services",
    "Fleet Outsourcing Services",
    "Mobility Infrastructure Projects",
  ],
];

/* =========================================================
   COMMON CHALLENGES
========================================================= */

const challengePointsLeft = [
  "Vehicle technical specifications",
  "Automotive certification requirements",
  "OEM authorization documentation",
  "Fleet compliance standards",
  "Product testing & approval requirements",
  "Vendor registration procedures",
];

const challengePointsRight = [
  "GeM compliance & catalogue requirements",
  "Service & maintenance compliance",
  "Similar supply experience criteria",
  "Multi-stage technical evaluations",
  "Financial qualification requirements",
  "Safety & transportation compliance standards",
];

/* =========================================================
   SUPPORT SERVICES
========================================================= */

const supportServices = [
  {
    name: "GeM Registration Services",
    link: "/services/tender-portal-registration",
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
  "Professional Transportation Procurement Consultancy",
  "Strong Documentation & Compliance Expertise",
  "Multi-Portal Tender Participation Expertise",
  "GeM & Vendor Registration Assistance",
  "Structured Documentation & Verification Process",
  "Experience Supporting Transportation Infrastructure Projects",
  "Compliance & Fleet Documentation Coordination",
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
    <header className="relative z-50 border-b-[5px] border-[#D4A017] bg-white shadow-[0_10px_30px_rgba(226,232,240,0.15)]">

      <div className="mx-auto flex min-h-[90px] max-w-[1440px] items-center px-5 sm:px-7 lg:px-10">

        {/* LOGO */}

        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
        >
          <img
            src="/images/logo-mark.png"
            alt="Tender Elite Logo"
            className="h-[68px] w-auto object-contain"
          />

          <img
            src="/images/logo-wordmark.png"
            alt="Tender Elite"
            className="w-[195px] object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}

        <nav className="ml-auto hidden items-center gap-3 xl:flex">

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                flex h-12 w-32 items-center justify-center
                rounded-[20px]
                border border-slate-200
                bg-[#D4A017]
                text-xl font-normal text-black
                shadow-[0_10px_20px_rgba(0,0,0,0.15)]
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#B8860B]
                hover:text-white
              "
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="
              ml-1 flex h-12 w-48 items-center justify-center
              rounded-[20px]
              border border-amber-400
              bg-[#B71432]
              text-xl font-normal text-white
              shadow-[0_10px_20px_rgba(0,0,0,0.15)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[#971029]
            "
          >
            Contact Us
          </Link>

        </nav>

        {/* MOBILE */}

        <details className="relative ml-auto xl:hidden">

          <summary
            className="
              flex h-12 w-12 cursor-pointer list-none
              items-center justify-center
              rounded-xl bg-[#D4A017]
              text-2xl text-[#071B3B]
            "
          >
            ☰
          </summary>

          <div className="absolute right-0 top-14 w-[240px] rounded-2xl bg-white p-3 shadow-2xl">

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-xl px-4 py-3 font-semibold text-[#071B3B] hover:bg-[#D4A017]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-2 block rounded-xl bg-[#B71432] px-4 py-3 text-center font-semibold text-white"
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
        ${className}
      `}
    >

      {title && (
        <h3 className="text-center font-serif text-xl font-bold leading-7 text-[#D4A017]">
          {title}
        </h3>
      )}

      <div
        className={`
          space-y-1.5
          text-base
          leading-6
          tracking-wide
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
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-white
        p-8
        text-[#071B3B]
        shadow-[0_0_30px_rgba(212,160,23,0.10)]
      "
    >

      <h3 className="text-center font-serif text-lg font-bold leading-6 text-[#D4A017] sm:text-xl">
        {title}
      </h3>

      <div className="mt-5 space-y-1.5 text-base leading-6 tracking-wide">

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
   TEXT DOES NOT CHANGE ON HOVER
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

      <h3
        className="
          w-full
          max-w-full
          break-words
          font-serif
          text-xl
          font-semibold
          leading-7
          tracking-wide
          text-white
        "
      >
        {title}
      </h3>

    </Link>
  );
}

/* =========================================================
   WHY CARD
========================================================= */

function WhyCard({
  title,
}: {
  title: string;
}) {
  return (
    <article
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

export default function AutomobileTransportationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071B3B]">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header />

      {/* =====================================================
          HERO
          IMAGE = 665 x 487
      ====================================================== */}

      <section className="bg-[#071B3B]">

        <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-[80px]">

          <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">

            {/* LEFT */}

            <div>

              <h1 className="font-serif text-5xl font-bold leading-[1.08] text-[#D4A017] md:text-6xl">

                Automobile{" "}

                <span className="font-sans">
                  &amp;
                </span>{" "}

                Transportation Industry

              </h1>

              <div className="mt-7 h-[2px] w-96 max-w-full rounded-full bg-[#D4A017]" />

              <div className="mt-7 text-base leading-6 tracking-wide text-white">

                <p>
                  The Agriculture &amp; Agro Industry is one of India&apos;s
                  most important economic sectors, contributing significantly
                  to food security, rural development, employment generation,
                  agro-processing, supply chain infrastructure, exports, and
                  public welfare programs across the country.
                </p>

                <p className="mt-5">
                  The sector includes agriculture infrastructure, irrigation
                  systems, agro-processing units, fertilizers, seeds, farm
                  equipment, cold storage systems, food grain supply,
                  warehousing infrastructure, agricultural machinery, dairy
                  infrastructure, livestock management systems, horticulture
                  projects, food processing solutions, agro-technology systems,
                  and agricultural supply chain services.
                </p>

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div className="w-[665px] max-w-full overflow-hidden rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.75)]">

              <img
                src="/images/auto1.png"
                alt="Automobile and Transportation Industry"
                width={665}
                height={487}
                className="block h-[487px] w-[665px] max-w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INDUSTRY OVERVIEW
          BOTH IMAGES = 516 x 344
      ====================================================== */}

      <section className="bg-white px-6 py-12 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <div className="grid items-start gap-10 lg:grid-cols-[516px_1fr]">

            {/* IMAGES */}

            <div className="space-y-6">

              <div className="w-[516px] max-w-full overflow-hidden rounded-[20px]">

                <img
                  src="/images/auto2.png"
                  alt="Automobile Industry Overview"
                  width={516}
                  height={344}
                  className="block h-[344px] w-[516px] max-w-full object-cover shadow-[0_0_20px_rgba(0,0,0,0.50)]"
                />

              </div>

              <div className="w-[516px] max-w-full overflow-hidden rounded-[20px]">

                <img
                  src="/images/auto3.png"
                  alt="Transportation Industry Overview"
                  width={516}
                  height={344}
                  className="block h-[344px] w-[516px] max-w-full object-cover shadow-[0_0_20px_rgba(0,0,0,0.50)]"
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
                  India is one of the world&apos;s largest automobile
                  manufacturing markets and continues to witness rapid growth
                  in transportation infrastructure, EV adoption, logistics
                  modernization, smart mobility solutions, urban transportation
                  systems, and commercial fleet operations.
                </p>

                <p>
                  Government departments, State Transport Undertakings (STUs),
                  Railways, Metro Rail Corporations, Municipal Corporations,
                  Defence organizations, Smart City authorities, logistics
                  agencies, PSU organizations, and public transportation
                  authorities regularly procure vehicles, automotive systems,
                  EV infrastructure, transportation services, fleet
                  maintenance solutions, logistics support systems, and mobility
                  technologies through structured procurement and tendering
                  processes.
                </p>

                <p>
                  The Government of India continues to support the sector through
                  initiatives such as Make in India, FAME India Scheme, EV
                  mobility programs, smart transportation infrastructure
                  projects, logistics modernization programs, metro rail
                  expansion, public transportation electrification, and
                  automotive manufacturing incentives.
                </p>

                <p>
                  Due to the technically detailed and compliance-driven nature
                  of automobile and transportation procurement projects,
                  businesses participating in this sector are required to manage
                  vehicle specifications, automotive certifications, OEM
                  authorizations, fleet compliance, vendor registrations, GeM
                  catalogue requirements, service documentation, and procurement
                  compliance professionally.
                </p>

                <p>
                  Tender Elite provides specialized tender consultancy and
                  procurement support services for automobile manufacturers,
                  vehicle dealers, EV solution providers, transportation
                  companies, logistics operators, automotive component suppliers,
                  fleet management companies, mobility technology firms, and
                  transportation infrastructure providers across India.
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
            Automobile{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Transportation Industry Market Size{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Industry Growth
          </SectionTitle>

          <div className="mt-8 space-y-5 text-base leading-6 tracking-wide text-slate-200">

            <p>
              India&apos;s Automobile &amp; Transportation Industry is one of
              the country&apos;s largest industrial sectors and contributes
              significantly to manufacturing output, logistics infrastructure,
              exports, mobility systems, and employment generation.
            </p>

            <p>
              The Indian automobile industry is estimated to exceed US$ 300
              billion by 2026 and continues to grow rapidly due to increasing
              vehicle demand, EV adoption, logistics expansion, urban
              transportation modernization, infrastructure development, and
              Government transportation initiatives.
            </p>

          </div>

          {/* TOP TWO WHITE CARDS */}

          <div className="mt-10 grid gap-7 lg:grid-cols-2">

            <WhiteCard
              title="India is among the world’s leading markets for:"
              points={leadingMarketAreas}
            />

            <WhiteCard
              title="The Government continues to invest significantly in:"
              points={governmentInvestmentAreas}
            />

          </div>

          {/* LOWER TWO WHITE CARDS */}

          <div className="mt-7 grid gap-7 lg:grid-cols-2">

            <WhiteCard
              title="Large-scale procurement opportunities are continuously generated through:"
              points={largeScaleProcurement}
            />

            <WhiteCard
              title="Government organizations and procurement authorities regularly procure:"
              points={governmentProcurementItems}
            />

          </div>

          <p className="mt-8 text-center text-base leading-6 tracking-wide text-slate-200">
            The continuous expansion of India&apos;s transportation and
            mobility ecosystem has significantly increased the demand for
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

      <section className="bg-white px-6 py-14 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Government Automobile{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Transportation Procurement Initiatives
          </SectionTitle>

          <p className="mx-auto mt-6 max-w-[1084px] text-center text-base leading-6">
            India&apos;s automobile and transportation sector is supported by
            major Government mobility and infrastructure development
            initiatives.
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

          <p className="mt-7 text-center text-base leading-6 text-[#071B3B]">
            These organizations regularly procure vehicles, fleet systems,
            transportation technologies, EV infrastructure, logistics
            services, mobility solutions, and maintenance services through
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
            Automobile{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Transportation Procurement Areas We Support
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
                className="min-h-[260px]"
              />
            ))}

          </div>

          <p className="mt-7 text-center text-base leading-6">
            and many other automobile and transportation-related procurement
            categories.
          </p>

        </div>

      </section>

      {/* =====================================================
          COMMON PROCUREMENT CHALLENGES
          NO EXTRA CARD HEADINGS
      ====================================================== */}

      <section className="bg-white px-6 py-12 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Common Procurement Challenges in the Automobile{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Transportation Industry
          </SectionTitle>

          <p className="mx-auto mt-6 max-w-[984px] text-center text-base leading-6">
            Automobile and transportation tenders often involve highly
            detailed and compliance-intensive requirements such as:
          </p>

          <div className="mx-auto mt-8 grid max-w-[1040px] gap-7 lg:grid-cols-2">

            {/* LEFT */}

            <NavyCard
              points={challengePointsLeft}
            />

            {/* RIGHT */}

            <NavyCard
              points={challengePointsRight}
            />

          </div>

          <p className="mx-auto mt-7 max-w-[984px] text-center text-base font-bold leading-6">
            Proper management of these requirements is critical for successful
            procurement participation and vendor qualification.
          </p>

        </div>

      </section>

      {/* =====================================================
          HOW TENDER ELITE SUPPORTS
          3 x 2 SERVICE CARDS
      ====================================================== */}

      <section className="bg-white px-6 py-12 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <h2 className="text-center font-serif text-4xl font-extrabold leading-tight tracking-[2px] text-[#D4A017] md:text-5xl">
            How Tender Elite Supports Automobile Businesses
          </h2>

          <p className="mx-auto mt-6 max-w-[984px] text-center text-base leading-6">
            Tender Elite helps automobile manufacturers and transportation
            service providers manage procurement participation professionally
            through structured consultancy and documentation support services.
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
          WHY CHOOSE TENDER ELITE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B3B] px-6 py-14 text-white lg:px-[80px]">

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg,#B71432 0px,#B71432 28px,transparent 28px,transparent 54px)",
          }}
        />

        <div className="relative mx-auto max-w-[1280px]">

          <SectionTitle>
            Why Automobile{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Transportation Businesses Choose Tender Elite
          </SectionTitle>

          {/* 4 x 2 */}

          <div className="mx-auto mt-10 grid max-w-[1196px] gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {whyChooseCards.map((title) => (
              <WhyCard
                key={title}
                title={title}
              />
            ))}

          </div>

          <p className="mx-auto mt-9 max-w-[1196px] text-center font-serif text-xl font-medium leading-8 tracking-wide text-white">
            At Tender Elite, we help automobile manufacturers and
            transportation companies manage procurement participation
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
            Need Professional Automobile Tender Consultancy Support?
          </h2>

          <p className="mx-auto mt-6 max-w-[917px] font-serif text-xl font-semibold leading-7 tracking-widest text-white">
            Get expert assistance for automobile tender participation,
            transportation procurement documentation, vendor registration,
            GeM support, technical bid preparation, and procurement compliance
            management.
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

            Get Automobile Tender Support

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
  return withYoast("/industries/automobile-transportation", baseMetadata);
}
