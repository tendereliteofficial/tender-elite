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
   RFQ / EOI PROCESS
========================================================= */

const rfqEoiProcess = [
  {
    title: "Requirement Discussion & Procurement Analysis",
    intro:
      "Once the RFQ or EOI requirement is shared, our team conducts an initial discussion to understand:",
    points: [
      "Nature of the procurement",
      "Scope of work",
      "Project objectives",
      "Technical requirements",
      "Commercial expectations",
      "Vendor qualification requirements",
      "Procurement timelines",
      "Operational requirements",
      "Compliance conditions",
    ],
    outro:
      "This helps us evaluate the procurement requirements and plan the RFQ/EOI preparation process effectively.",
  },

  {
    title: "RFQ / EOI Drafting & Structuring Support",
    intro:
      "Our team assists procurement authorities and organizations in preparing professionally structured RFQ and EOI documents.",
    label: "This includes support for:",
    points: [
      "RFQ drafting",
      "EOI drafting",
      "Scope of work preparation",
      "Technical specification structuring",
      "Eligibility criteria preparation",
      "Vendor qualification requirements",
      "Commercial condition drafting",
      "Compliance condition preparation",
      "Submission formats",
      "Procurement process structuring",
    ],
    outro:
      "We help procurement authorities prepare organized and procurement-ready documentation according to project requirements.",
  },

  {
    title: "Tender Floating Consultancy Services",
    intro:
      "Tender Elite also provides consultancy support for tender floating and procurement documentation management.",
    label: "Our services include:",
    points: [
      "Tender document preparation support",
      "RFQ & EOI consultancy",
      "Procurement documentation structuring",
      "Scope finalization support",
      "Technical requirement coordination",
      "Vendor qualification planning",
      "Procurement process guidance",
      "Compliance structure preparation",
      "Bid process documentation support",
    ],
    outro:
      "We assist tender issuing authorities in managing procurement documentation professionally and systematically.",
  },

  {
    title: "RFQ / EOI Participation Support for Bidders",
    intro:
      "For businesses participating in RFQ and EOI opportunities, our team provides complete preparation and submission support.",
    label: "This includes assistance with:",
    points: [
      "Requirement analysis",
      "Eligibility verification",
      "Technical proposal preparation",
      "Commercial documentation",
      "Company profile preparation",
      "Experience documentation",
      "Compliance statements",
      "Annexures & declarations",
      "Supporting documentation",
      "Submission coordination",
    ],
    outro:
      "We help businesses prepare compliant and professionally structured RFQ/EOI responses.",
  },

  {
    title: "Documentation Review & Compliance Verification",
    intro:
      "Before finalization or submission, our team conducts detailed verification to ensure:",
    points: [
      "Proper document completeness",
      "Technical consistency",
      "Compliance alignment",
      "Correct formatting",
      "Commercial accuracy",
      "Proper file organization",
      "Submission readiness",
    ],
    outro:
      "This review process helps reduce procurement and documentation risks.",
  },

  {
    title: "Procurement Coordination & Clarification Support",
    intro:
      "Our team also assists clients and procurement authorities with:",
    points: [
      "Clarification coordination",
      "Procurement communication support",
      "Documentation review assistance",
      "Submission coordination",
      "Vendor response management support",
      "Amendment coordination if required",
    ],
    outro:
      "We help ensure smoother procurement communication and structured RFQ/EOI management.",
  },
];

/* =========================================================
   WHY CHOOSE
========================================================= */

const whyChooseCards = [
  {
    title:
      "RFQ / EOI Expertise for Both Bidders & Procurement Authorities",
    text:
      "We provide professional RFQ and EOI preparation support not only for participating businesses but also for tender issuing authorities requiring procurement drafting and tender floating consultancy services.",
  },

  {
    title: "Professional Procurement Documentation Support",
    text:
      "Our team assists in preparing structured procurement documentation aligned with project requirements, technical specifications, vendor qualification needs, compliance standards, and procurement objectives.",
  },

  {
    title: "Strong Documentation & Compliance Process",
    text:
      "Our systematic review process helps minimize risks related to:",
    points: [
      "Incomplete procurement documents",
      "Incorrect technical specifications",
      "Non-compliance issues",
      "Improper qualification structures",
      "Documentation inconsistencies",
      "Submission errors",
    ],
  },

  {
    title: "End-to-End Procurement Assistance",
    text:
      "With extensive experience in tender documentation, procurement support, vendor participation, and compliance management, Tender Elite helps businesses and procurement authorities manage RFQ and EOI processes professionally and efficiently.",
  },

  {
    title: "Multi-Industry Procurement Experience",
    text:
      "We provide RFQ and EOI consultancy support across sectors including:",
    points: [
      "Civil Construction",
      "Infrastructure Projects",
      "Industrial Manufacturing",
      "and many other industries",
    ],
  },

  {
    title: "Professional & Timely Coordination",
    text:
      "Our team ensures:",
    points: [
      "Structured documentation management",
      "Smooth communication",
      "Timely coordination",
      "Procurement compliance support",
      "Efficient RFQ/EOI preparation processes",
    ],
  },
];

/* =========================================================
   PROCUREMENT BASIS
========================================================= */

const procurementBasis = [
  "Scope of work requirements",
  "Technical specifications",
  "Project objectives",
  "Vendor qualification requirements",
  "Commercial considerations",
  "Procurement compliance requirements",
  "Industry standards",
  "Operational requirements",
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industries = [
  {
    name: "Infrastructure",
    image: "/images/infrastructure.png",
    link: "/industries/construction-infrastructure"
  },
  {
    name: "IT & Software",
    image: "/images/itsoftware.png",
    link: "/industries/information-technology"
  },
  {
    name: "Pharmaceuticals",
    image: "/images/pharmaceuticals.png",
    link: "/industries/pharmaceuticals"
  },
  {
    name: "Engineering",
    image: "/images/engineering.png",
    link: "/industries/mechanical-engineering"
  },
  {
    name: "Security Services",
    image: "/images/securityservices.png",
    link: "/industries/security-surveillance"
  },
  {
    name: "Facility Management",
    image: "/images/facilitymanagement.png",
    link: "/industries/facility-management"
  },
  {
    name: "Logistics",
    image: "/images/logistics.png",
    link: "/industries/logistics"
  },
  {
    name: "Healthcare",
    image: "/images/healthcare.png",
    link: "/industries/healthcare-medical"
  },
];

/* =========================================================
   LOCATIONS
========================================================= */

const locations = [
  ["Maharashtra", "/images/maharashtracard.png", "/states/maharashtra"],
  ["Karnataka", "/images/karnatakacard.png", "/states/karnataka"],
  ["Kerala", "/images/keralacard.png", "/states/kerala"],
  ["Gujarat", "/images/gujaratcard.png", "/states/gujarat"],
  ["Tamil Nadu", "/images/tamilnaducard.png", "/states/tamil-nadu"],
  ["Uttar Pradesh", "/images/uttarpradeshcard.png", "/states/uttar-pradesh"],
  ["Punjab", "/images/punjabcard.png", "/states/punjab"],
  ["Rajasthan", "/images/rajasthancard.png", "/states/rajasthan"],
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

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-[20px] border border-slate-200 bg-[#D4A017] px-6 py-3 text-sm font-bold text-black shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]"
            >
              {item.label}
            </Link>
          ))}

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

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-xl px-4 py-3 text-base font-bold text-[#071B3B] transition-colors hover:bg-[#D4A017] hover:text-white"
              >
                {item.label}
              </Link>
            ))}

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
    <h2 className="text-center font-serif text-4xl font-bold tracking-[3px] text-[#D4A017] sm:text-5xl md:text-6xl">
      {children}
    </h2>
  );
}

/* =========================================================
   PROCESS CARD
========================================================= */

function ProcessCard({
  service,
}: {
  service: (typeof rfqEoiProcess)[number];
}) {
  return (
    <article className="group relative flex h-full flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 shadow-[0_0_28px_rgba(212,160,23,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(212,160,23,0.28)] sm:p-7">

      <h3 className="text-center font-serif text-[19px] font-bold leading-6 tracking-wide text-[#D4A017] sm:text-[21px]">
        {service.title}
      </h3>

      <p className="mt-5 text-[13px] leading-6 tracking-wide text-white sm:text-[14px]">
        {service.intro}
      </p>

      {service.label && (
        <p className="mt-4 text-[13px] font-semibold leading-6 tracking-wide text-white sm:text-[14px]">
          {service.label}
        </p>
      )}

      <div className="mt-3 grid gap-x-8 gap-y-1 text-[12px] leading-5 tracking-wide text-white sm:text-[13px] md:grid-cols-2">

        {service.points.map((point) => (
          <div key={point}>
            • {point}
          </div>
        ))}

      </div>

      {service.outro && (
        <p className="mt-5 pb-5 text-[13px] leading-6 tracking-wide text-white sm:text-[14px]">
          {service.outro}
        </p>
      )}

      <span className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFA629] text-sm font-bold text-[#071B3B] shadow-[0_0_20px_rgba(255,166,41,0.95)] transition-transform duration-300 group-hover:scale-110">
        →
      </span>

    </article>
  );
}

/* =========================================================
   WHY CHOOSE CARD
========================================================= */

function WhyChooseCard({
  title,
  text,
  points,
}: {
  title: string;
  text: string;
  points?: string[];
}) {
  return (
    <article className="h-full min-h-[285px] rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 text-[#071B3B] shadow-[0_8px_25px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_32px_rgba(212,160,23,0.25)] sm:p-8">

      <h3 className="font-serif text-[20px] font-semibold leading-7 tracking-[1.5px] text-[#D4A017] sm:text-[22px]">
        {title}
      </h3>

      <p className="mt-6 font-serif text-[14px] leading-6 tracking-wider sm:text-[15px]">
        {text}
      </p>

      {points && points.length > 0 && (
        <div className="mt-3 font-serif text-[14px] leading-6 tracking-wider sm:text-[15px]">

          {points.map((point) => (
            <div key={point}>
              • {point}
            </div>
          ))}

        </div>
      )}

    </article>
  );
}

/* =========================================================
   INDUSTRY CARD
========================================================= */

function IndustryCard({
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
      className="group relative h-[180px] overflow-hidden rounded-[20px] border-[3px] border-[#D4A017] shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(212,160,23,0.28)] sm:h-[200px]"
    >

      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-[#D4A017] bg-[#071B3B] px-5 py-1.5 text-xs font-bold text-white shadow-lg transition-all duration-300 group-hover:bg-[#D4A017] group-hover:text-[#071B3B] sm:text-sm">
        {name}
      </span>

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
      className="group relative h-[170px] w-full max-w-[270px] overflow-hidden rounded-[20px] border-[3px] border-[#D4A017] shadow-[0_8px_20px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.28)] sm:h-[190px] md:h-[200px]"
    >

      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-[#D4A017] bg-[#071B3B] px-4 py-1 text-xs font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:bg-[#D4A017] group-hover:text-[#071B3B] sm:px-5 sm:text-sm">
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

export default function RfqEoiPreparationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071B3B]">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header />

      {/* =====================================================
          HERO
          CLEAN NAVY BACKGROUND
          IMAGE CENTERED AGAINST PARAGRAPH CONTENT
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B3B]">

        <div className="relative mx-auto max-w-[1440px] px-5 py-6 sm:px-8 sm:py-7 md:px-10 lg:py-8 xl:px-[70px]">

          <div className="grid items-start gap-7 lg:grid-cols-2 lg:gap-9">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="w-full">

              {/* TITLE */}

              <h1 className="font-serif text-[38px] font-bold leading-[1.02] text-[#D4A017] sm:text-[46px] md:text-[54px] lg:text-[58px] xl:text-[62px]">
                RFQ / EOI

                <span className="block">
                  Preparation Services
                </span>
              </h1>

              {/* GOLD LINE */}

              <div className="mt-4 h-[2px] w-full max-w-[550px] rounded-full bg-[#D4A017] shadow-[0_0_18px_rgba(212,160,23,0.65)]" />

              {/* PARAGRAPHS */}

              <div className="mt-5 text-[12px] leading-[1.5] tracking-[0.5px] text-white sm:text-[13px] md:text-[14px]">

                <p>
                  Tender Elite provides professional RFQ (Request for
                  Quotation) and EOI (Expression of Interest) Preparation
                  Services for both bidders and tender issuing authorities
                  across Government Departments, PSUs, Infrastructure
                  Companies, Municipal Corporations, Industrial Organizations,
                  and Private Sector procurement systems across India.
                </p>

                <p className="mt-3.5">
                  RFQ and EOI processes are commonly used to evaluate vendor
                  capability, technical expertise, commercial viability,
                  service offerings, project understanding, and procurement
                  suitability before final tendering or procurement decisions.
                </p>

                <p className="mt-3.5">
                  Our objective is to help businesses and procurement
                  authorities prepare professionally structured, technically
                  aligned, and compliant RFQ/EOI documentation that supports
                  efficient procurement management and better participation
                  outcomes.
                </p>

                <p className="mt-3.5">
                  In addition to assisting bidders with RFQ/EOI participation,
                  Tender Elite also provides Tender Floating Consultancy
                  Services for procurement authorities, departments,
                  organizations, institutions, and project owners requiring
                  professional support for preparation and structuring of RFQ
                  and EOI documents according to procurement objectives and
                  project requirements.
                </p>

              </div>

            </div>

            {/* =================================================
                RIGHT IMAGE
                MOVED DOWN TO PARAGRAPH CENTER
            ================================================== */}

            <div className="flex w-full items-center lg:pt-[105px]">

              <div className="w-full overflow-hidden rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.75)]">

                <img
                  src="/images/RFQEOI Preparation Services.png"
                  alt="RFQ / EOI Preparation Services"
                  className="block h-[280px] w-full object-cover sm:h-[330px] md:h-[370px] lg:h-[390px] xl:h-[420px]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROCUREMENT BASIS
          COMPACT
          NO PINK STRIPES
          NO BOTTOM GOLD LINE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B3B] px-5 py-5 text-white sm:px-8 sm:py-6 md:px-10 xl:px-16">

        <div className="relative mx-auto max-w-[1260px]">

          {/* ONLY TOP GOLD LINE */}

          <div className="h-[2px] w-full bg-[#D4A017]" />

          {/* HEADING */}

          <h2 className="mt-4 text-center font-serif text-[17px] font-semibold tracking-[1.3px] text-[#D4A017] sm:text-[19px] md:text-[21px]">
            We assist tender issuing authorities in preparing RFQ and EOI
            documents based on:
          </h2>

          {/* CONTENT */}

          <div className="mt-5 grid items-start gap-5 md:grid-cols-[300px_minmax(0,1fr)] lg:grid-cols-[330px_minmax(0,1fr)]">

            {/* LEFT WHITE BOX */}

            <div className="rounded-[15px] border-[2px] border-[#FFA629] bg-white px-5 py-4 text-[#071B3B] shadow-[0_8px_20px_rgba(0,0,0,0.18)]">

              <div className="font-serif text-[12px] leading-[1.4] tracking-wide sm:text-[13px]">

                {procurementBasis.map((item) => (
                  <div key={item}>
                    • {item}
                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT TEXT */}

            <div className="font-serif text-[12px] leading-[1.5] tracking-[0.5px] text-white sm:text-[13px] md:text-[14px]">

              <p>
                Our team helps ensure that RFQ and EOI documents are
                professionally drafted, properly structured, and aligned with
                procurement and project execution requirements.
              </p>

              <p className="mt-4">
                We understand that RFQ and EOI preparation requires accurate
                technical drafting, structured documentation, compliance
                alignment, and proper procurement planning. Improperly drafted
                procurement documents can lead to confusion, non-compliant
                responses, limited participation, or procurement delays.
                Therefore, our team carefully manages every stage of RFQ/EOI
                preparation and documentation support professionally.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          RFQ / EOI PROCESS
      ====================================================== */}

      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12 md:px-10 xl:px-16 xl:py-14">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Our RFQ / EOI Preparation Process
          </SectionTitle>

          <div className="mx-auto mt-8 grid max-w-[1180px] gap-6 lg:grid-cols-2">

            {rfqEoiProcess.map((service) => (
              <ProcessCard
                key={service.title}
                service={service}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE
          6 CARDS — 3 x 2
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B3B] px-5 py-10 text-white sm:px-8 sm:py-12 md:px-10 xl:px-16 xl:py-14">

        {/* SUBTLE STRIPES */}

        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(183,20,50,0.40) 0px, rgba(183,20,50,0.40) 28px, transparent 28px, transparent 54px)",
          }}
        />

        <div className="relative mx-auto max-w-[1280px]">

          <SectionTitle>
            Why Choose Tender Elite?
          </SectionTitle>

          <div className="mx-auto mt-8 grid max-w-[1190px] grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {whyChooseCards.map((card) => (
              <WhyChooseCard
                key={card.title}
                title={card.title}
                text={card.text}
                points={card.points}
              />
            ))}

          </div>

          <p className="mx-auto mt-8 max-w-[1260px] text-center text-sm leading-7 tracking-widest text-white sm:text-base">
            At Tender Elite, we help businesses and procurement authorities
            manage RFQ and EOI preparation through structured documentation
            support, procurement consultancy, technical drafting assistance,
            and compliance coordination that improves procurement efficiency
            and participation quality.
          </p>

        </div>

      </section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B3B] px-5 pb-8 text-white sm:px-8 sm:pb-10 md:px-10 xl:px-16 xl:pb-12">

        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(183,20,50,0.40) 0px, rgba(183,20,50,0.40) 28px, transparent 28px, transparent 54px)",
          }}
        />

        <div className="relative mx-auto max-w-[1280px]">

          <SectionTitle>
            Industries We Serve
          </SectionTitle>

          <p className="mx-auto mt-4 max-w-[869px] text-center text-sm font-bold leading-6 tracking-wider text-white sm:text-base">
            Empowering businesses across diverse sectors with expert tender
            consultancy, bid management, and strategic procurement support.
          </p>

          <div className="mx-auto mt-7 grid max-w-[1180px] gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {industries.map((industry) => (
              <IndustryCard
                key={industry.name}
                name={industry.name}
                image={industry.image}
                link={industry.link}
              />
            ))}

          </div>

          <div className="mt-5 text-center">

            <Link
              href="/industries"
              className="inline-flex rounded-2xl bg-[#D4A017] px-8 py-3 text-sm font-bold text-[#071B3B] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(212,160,23,0.30)]"
            >
              View More
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */}

      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12 md:px-10 xl:px-12 xl:py-14">

        <div className="mx-auto max-w-[1440px]">

          <SectionTitle>
            Locations We Serve
          </SectionTitle>

          <div className="mx-auto mt-8 grid max-w-[1170px] grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4">

            {locations.map(([name, image, link]) => (
              <LocationCard
                key={name}
                name={name}
                image={image}
                link={link}
              />
            ))}

          </div>

          <div className="mt-6 text-center">

            <Link
              href="/locations"
              className="inline-flex rounded-2xl bg-[#D4A017] px-8 py-3 text-sm font-bold text-[#071B3B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(212,160,23,0.30)]"
            >
              View More
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-white px-5 pt-2 pb-10 sm:px-8 sm:pt-4 sm:pb-12 md:px-10 xl:px-16">

        <div className="mx-auto max-w-[1062px] rounded-[30px] bg-[#071B3B] px-6 py-9 text-center shadow-[0_15px_40px_rgba(7,27,59,0.18)] sm:px-10 sm:py-11">

          <h2 className="font-serif text-2xl font-semibold leading-8 tracking-[2px] text-[#D4A017] sm:text-3xl sm:leading-10">
            Need Professional RFQ / EOI Preparation Support?
          </h2>

          <p className="mt-4 font-serif text-lg font-medium leading-8 tracking-widest text-white sm:text-xl">
            Get expert assistance for RFQ drafting, EOI preparation, tender
            floating consultancy, procurement documentation support, technical
            proposal preparation, and compliance coordination.
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-7 flex max-w-[320px] items-center justify-center gap-3 rounded-[30px] bg-[#B71432] px-5 py-3 text-base font-semibold tracking-widest text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#971029] hover:shadow-[0_12px_30px_rgba(183,20,50,0.32)] sm:text-lg"
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#071B3B]">
              →
            </span>

            Talk to Our Experts

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