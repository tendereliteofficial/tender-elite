import { slugToTitle as _s } from "@/lib/seo";

export const metadata = {
  title: `${_s("joint-venture-consortium-formation")} Services`,
  description: `Professional ${_s("joint-venture-consortium-formation")} services for government tenders. Tender Elite helps you bid accurately, stay compliant and win more contracts.`,
  alternates: { canonical: "/services/joint-venture-consortium-formation" },
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
   JV & CONSORTIUM SERVICES
========================================================= */

const services = [
  {
    title: "Joint Venture (JV) Formation Assistance",
    intro:
      "We help businesses establish Joint Ventures for participating in tenders requiring combined qualifications and capabilities.",
    label: "Our support includes:",
    points: [
      "JV structure planning",
      "Lead partner identification",
      "Partnership coordination",
      "Role and responsibility allocation",
      "Work share distribution",
      "Financial participation planning",
      "Compliance requirement analysis",
      "Eligibility assessment",
    ],
  },

  {
    title: "Consortium Formation Support",
    intro:
      "Tender Elite assists businesses in forming consortium arrangements for projects requiring multiple technical specializations, infrastructure capabilities, or service integration.",
    label: "We help with:",
    points: [
      "Consortium partner coordination",
      "Capability mapping",
      "Scope distribution among partners",
      "Technical collaboration planning",
      "Resource allocation structuring",
      "Documentation preparation",
      "Tender-specific consortium compliance",
    ],
  },

  {
    title: "Tender Eligibility & Compliance Support",
    intro:
      "We analyze tender conditions and assist businesses in meeting eligibility requirements through structured partnerships.",
    label: "Our services include:",
    points: [
      "Tender clause analysis",
      "Eligibility gap assessment",
      "Technical qualification mapping",
      "Experience and turnover combination analysis",
      "Credential sharing support",
      "Compliance matrix preparation",
      "Tender-specific partnership structuring",
    ],
  },

  {
    title: "Technical & Financial Coordination",
    intro:
      "We assist businesses in organizing technical and financial documentation required for joint bidding.",
    label: "Our support includes:",
    points: [
      "Combined turnover calculation",
      "Shared work experience evaluation",
      "Technical partner capability documentation",
      "Equipment and manpower allocation",
      "Resource sharing documentation",
      "Bid participation coordination",
    ],
  },

  {
    title: "JV & Consortium Agreement Preparation",
    intro:
      "Our team assists in preparing professional and tender-compliant agreements for JV and consortium participation.",
    label: "Documentation support includes:",
    points: [
      "Joint Venture Agreements",
      "Consortium Agreements",
      "Memorandum of Understanding (MOU)",
      "Partnership Declarations",
      "Power of Attorney documentation",
      "Lead partner authorization",
      "Financial responsibility clauses",
      "Risk-sharing and work-sharing terms",
    ],
  },

  {
    title: "Documentation Coordination Support",
    intro:
      "Tender Elite helps coordinate and compile all mandatory documents required for JV and consortium participation.",
    label: "This may include:",
    points: [
      "Company registration documents",
      "Financial statements",
      "Work experience certificates",
      "Technical capability documents",
      "Authorization letters",
      "Affidavits and declarations",
      "Power of Attorney documents",
      "Partner compliance certificates",
    ],
  },

  {
    title: "Online Tender Participation Assistance",
    intro:
      "Our team supports businesses throughout the online tender participation process after the partnership structure is finalized.",
    label: "We assist with:",
    points: [
      "JV / Consortium bidder registration",
      "Procurement portal onboarding",
      "E-tender documentation uploads",
      "Digital signature coordination",
      "Bid submission compliance support",
      "Pre-bid clarification assistance",
    ],
  },

  {
    title: "Bid Documentation Review & Verification",
    intro:
      "Before final submission, our team verifies JV and consortium documentation for completeness and compliance.",
    label: "We verify:",
    points: [
      "Proper document completeness",
      "Format compliance",
      "Accuracy of submitted information",
      "Signature & stamp verification",
      "Technical consistency",
      "Financial document consistency",
      "Compliance alignment",
      "Proper file organization",
    ],
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  "Access to larger and high-value tenders",
  "Improved technical and financial eligibility",
  "Combined industry expertise and resources",
  "Better project execution capability",
  "Increased bidding opportunities",
  "Shared project risk and responsibilities",
  "Enhanced procurement competitiveness",
  "Access to specialized project requirements",
];

/* =========================================================
   WHY WORK WITH TENDER ELITE
========================================================= */

const whyWorkWithUs = [
  "Professional JV & Consortium Documentation",
  "Tender Eligibility & Compliance Expertise",
  "Structured Partnership Support",
  "Technical & Financial Coordination Assistance",
  "End-to-End Tender Participation Guidance",
];

/* =========================================================
   WHY CHOOSE
========================================================= */

const whyChoose = [
  {
    value: "5000+",
    title: (
      <>
        Tenders Successfully
        <br />
        Submitted
      </>
    ),
  },

  {
    value: "10,000+",
    title: (
      <>
        Portal Registrations
        <br />
        Successfully Completed
      </>
    ),
  },

  {
    value: "15+ Years",
    title: (
      <>
        Cumulative Industry
        <br />
        Experience
      </>
    ),
  },

  {
    title: (
      <>
        Professional JV &amp;
        <br />
        Consortium Support
      </>
    ),
  },

  {
    title: (
      <>
        Strong Tender Eligibility
        <br />
        &amp; Compliance Expertise
      </>
    ),
  },

  {
    title: (
      <>
        Technical &amp; Financial
        <br />
        Coordination Support
      </>
    ),
  },

  {
    title: (
      <>
        Multi-Industry Tender
        <br />
        Experience
      </>
    ),
  },

  {
    title: (
      <>
        End-to-End Tender
        <br />
        Participation Support
      </>
    ),
  },
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
    link: "/industries/pharmaceutical"
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

        {/* MOBILE / TABLET */}

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
   SERVICE CARD
========================================================= */

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <article className="group relative flex h-full flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 shadow-[0_0_28px_rgba(212,160,23,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(212,160,23,0.28)] sm:p-7">

      <h3 className="text-center font-serif text-[19px] font-bold leading-6 tracking-wide text-[#D4A017] sm:text-[21px]">
        {service.title}
      </h3>

      <p className="mt-5 text-[13px] leading-6 tracking-wide text-white sm:text-[14px]">
        {service.intro}
      </p>

      <p className="mt-4 text-[13px] font-semibold leading-6 tracking-wide text-white sm:text-[14px]">
        {service.label}
      </p>

      <div className="mt-3 grid gap-x-8 gap-y-1 text-[12px] leading-5 tracking-wide text-white sm:text-[13px] md:grid-cols-2">

        {service.points.map((point) => (
          <div key={point}>
            • {point}
          </div>
        ))}

      </div>

      <span className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFA629] text-sm font-bold text-[#071B3B] shadow-[0_0_20px_rgba(255,166,41,0.95)] transition-transform duration-300 group-hover:scale-110">
        →
      </span>

    </article>
  );
}

/* =========================================================
   BENEFIT CARD
========================================================= */

function BenefitCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="flex min-h-[190px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-white p-6 text-center shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(212,160,23,0.20)] sm:p-7">

      <h3 className="font-serif text-[20px] font-semibold leading-8 tracking-[1.5px] text-[#D4A017] sm:text-[22px]">
        {children}
      </h3>

    </article>
  );
}

/* =========================================================
   WHY WORK CARD
========================================================= */

function WhyWorkCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="flex min-h-[220px] items-center justify-center rounded-[24px] border-[3px] border-[#D4A017] bg-white px-5 py-7 text-center shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(212,160,23,0.22)]">

      <h3 className="font-serif text-[20px] font-semibold leading-8 tracking-[1.5px] text-[#071B3B] sm:text-[22px]">
        {children}
      </h3>

    </article>
  );
}

/* =========================================================
   WHY CHOOSE CARD
========================================================= */

function WhyChooseCard({
  value,
  title,
}: {
  value?: string;
  title: React.ReactNode;
}) {
  return (
    <article className="flex min-h-[210px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-white px-5 py-7 text-center shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(212,160,23,0.20)]">

      <div className="w-full">

        {value && (
          <div className="font-serif text-[32px] font-bold leading-9 tracking-[2px] text-[#D4A017] sm:text-[38px]">
            {value}
          </div>
        )}

        <div
          className={`font-serif text-[19px] font-bold leading-[1.22] tracking-[1.7px] text-[#D4A017] sm:text-[22px] ${
            value ? "mt-5" : ""
          }`}
        >
          {title}
        </div>

      </div>

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

export default function JointVentureConsortiumFormationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071B3B]">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B3B]">


        <div className="relative mx-auto max-w-[1440px] px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:py-10 xl:px-[70px]">

          <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-9">

            {/* LEFT */}

            <div className="w-full">

              <h1 className="font-serif text-[37px] font-bold leading-[1.06] text-[#D4A017] sm:text-[44px] md:text-[51px] lg:text-[56px] xl:text-[61px]">
                Joint Venture
                <span className="block">
                  &amp; Consortium
                </span>
                <span className="block">
                  Formation Support
                </span>
              </h1>

              <div className="mt-4 h-[2px] w-full max-w-[560px] rounded-full bg-[#D4A017] shadow-[0_0_20px_rgba(212,160,23,0.8)]" />

              <div className="mt-5 text-[12px] leading-[1.5] tracking-[0.55px] text-white sm:text-[13px] sm:leading-[1.55] md:text-[14px]">

                <p>
                  Tender Elite provides professional Joint Venture (JV) and
                  Consortium Formation Support services to help businesses
                  collaborate effectively for participating in large-scale
                  projects, high-value tenders, infrastructure contracts,
                  EPC projects, and specialized procurement opportunities.
                </p>

                <p className="mt-4">
                  Many Government Departments, Public Sector Undertakings
                  (PSUs), Infrastructure Authorities, EPC Contractors, and
                  Procurement Agencies require bidders to possess combined
                  technical capability, financial strength, work experience,
                  or specialized certifications for participating in large and
                  complex tenders. In such cases, businesses often form Joint
                  Ventures (JV) or Consortiums to meet tender eligibility
                  criteria and improve project execution capabilities.
                </p>

                <p className="mt-4">
                  Our experienced team assists clients in forming structured
                  and compliant partnerships by coordinating documentation,
                  defining partnership structures and responsibilities,
                  preparing JV and consortium agreements, and ensuring
                  adherence to tender eligibility requirements related to
                  consortium participation.
                </p>

              </div>

              <div className="mt-5 h-[2px] w-full max-w-[560px] rounded-full bg-[#D4A017]" />

            </div>

            {/* RIGHT */}

            <div className="w-full">

              <div className="overflow-hidden rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.75)]">

                <img
                  src="/images/jv.png"
                  alt="Joint Venture and Consortium Formation Support"
                  className="block h-[300px] w-full object-cover sm:h-[360px] md:h-[420px] lg:h-[450px] xl:h-[500px]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-14 md:px-10 xl:px-16 xl:py-16">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Our Joint Venture &amp; Consortium Support Services
          </SectionTitle>

          <div className="mx-auto mt-10 grid max-w-[1180px] gap-6 lg:grid-cols-2">

            {services.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}

      <section className="bg-[#071B3B] px-5 py-14 text-white sm:px-8 sm:py-16 md:px-10 xl:px-16 xl:py-20">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Benefits of Joint Venture &amp; Consortium Formation
          </SectionTitle>

          {/* ROW 1 — 4 */}

          <div className="mx-auto mt-10 grid max-w-[1080px] gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.slice(0, 4).map((benefit) => (
              <BenefitCard key={benefit}>
                {benefit}
              </BenefitCard>
            ))}

          </div>

          {/* ROW 2 — 4 */}

          <div className="mx-auto mt-6 grid max-w-[1080px] gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.slice(4).map((benefit) => (
              <BenefitCard key={benefit}>
                {benefit}
              </BenefitCard>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}

      <section className="bg-[#071B3B] px-5 pb-14 text-white sm:px-8 sm:pb-16 md:px-10 xl:px-16 xl:pb-20">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Industries We Serve
          </SectionTitle>

          <p className="mx-auto mt-5 max-w-[870px] text-center text-sm font-bold leading-6 tracking-wider text-white sm:text-base">
            Empowering businesses across diverse sectors with expert tender
            consultancy, bid management, and strategic procurement support.
          </p>

          <div className="mx-auto mt-8 grid max-w-[1180px] gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {industries.map((industry) => (
              <IndustryCard
                key={industry.name}
                name={industry.name}
                image={industry.image}
                link={industry.link}
              />
            ))}

          </div>

          <div className="mt-7 text-center">

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
          WHY CHOOSE
      ====================================================== */}

      <section className="bg-[#071B3B] px-5 pb-14 text-white sm:px-8 sm:pb-16 md:px-10 xl:px-16 xl:pb-20">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Why Choose Tender Elite ?
          </SectionTitle>

          <div className="mx-auto mt-10 grid max-w-[1180px] gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {whyChoose.map((item, index) => (
              <WhyChooseCard
                key={index}
                value={item.value}
                title={item.title}
              />
            ))}

          </div>

          <p className="mx-auto mt-10 max-w-[1192px] text-center text-sm leading-6 tracking-wider text-white sm:text-base">
            Our experienced team understands tender eligibility requirements,
            procurement regulations, partnership compliance procedures, and
            documentation standards followed by Government Departments, PSUs,
            EPC Contractors, and Procurement Authorities. We help businesses
            build structured partnerships that improve eligibility,
            compliance, and tender participation success.
          </p>

        </div>

      </section>

      {/* =====================================================
          PLANNING / SUPPORT
          NAVY BACKGROUND
      ====================================================== */}

      <section className="bg-[#071B3B] px-5 py-12 text-white sm:px-8 sm:py-14 md:px-10 xl:px-16 xl:py-16">

        <div className="mx-auto max-w-[1270px]">

          <h2 className="text-center font-serif text-4xl font-bold tracking-[3px] text-[#D4A017] sm:text-5xl md:text-6xl">
            Contact Tender Elite for JV &amp;
            <span className="block">
              Consortium Formation Support
            </span>
          </h2>

          {/* INNER WHITE CARD */}

          <div className="mt-8 rounded-[26px] border-[3px] border-[#D4A017] bg-white p-7 text-[#071B3B] shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:p-10">

            <h3 className="font-serif text-xl font-semibold leading-8 tracking-[1.5px] text-[#D4A017] sm:text-2xl">

              Planning to participate in high-value tenders or large-scale
              infrastructure projects through a Joint Venture or Consortium?

            </h3>

            <p className="mt-5 font-serif text-base leading-7 tracking-wider text-[#071B3B] sm:text-lg">
              Tender Elite provides complete assistance for:
            </p>

            <div className="mt-4 grid gap-x-10 gap-y-1 font-serif text-base leading-8 tracking-wider text-[#071B3B] sm:grid-cols-2 sm:text-lg">

              <div>
                • Joint Venture Formation
                <br />
                • Consortium Structuring
                <br />
                • JV &amp; Consortium Agreements
              </div>

              <div>
                • Tender Eligibility Assessment
                <br />
                • Compliance Documentation
                <br />
                • Partner Coordination
              </div>

            </div>

            <div className="mt-5 font-serif text-base leading-8 tracking-wider text-[#071B3B] sm:text-lg">

              • Procurement Portal Registration
              <br />
              • Tender Participation Support

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY WORK WITH TENDER ELITE
          NAVY BACKGROUND
      ====================================================== */}

      <section className="bg-[#071B3B] px-5 pb-14 text-white sm:px-8 sm:pb-16 md:px-10 xl:px-16 xl:pb-20">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Why Work With Tender Elite?
          </SectionTitle>

          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-6">

            {whyWorkWithUs.map((item) => (
              <div
                key={item}
                className="w-full sm:w-[280px] xl:w-[220px]"
              >
                <WhyWorkCard>
                  {item}
                </WhyWorkCard>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */}

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-14 md:px-10 xl:px-12 xl:py-16">

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

          <div className="mt-7 text-center">

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

      <section className="bg-white px-5 pt-6 pb-10 sm:px-8 sm:pt-8 sm:pb-12 md:px-10 xl:px-16">

        <div className="mx-auto max-w-[1062px] rounded-[30px] bg-[#071B3B] px-6 py-10 text-center shadow-[0_15px_40px_rgba(7,27,59,0.18)] sm:px-10 sm:py-12">

          <h2 className="font-serif text-2xl font-semibold leading-8 tracking-[2px] text-[#D4A017] sm:text-3xl sm:leading-10">
            Contact Tender Elite today and let our experts help you form strong
            and compliant partnerships for successful tender participation.
          </h2>

          <Link
            href="/contact"
            className="mx-auto mt-7 flex max-w-[300px] items-center justify-center gap-3 rounded-[30px] bg-[#B71432] px-5 py-3 text-base font-semibold tracking-widest text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#971029] hover:shadow-[0_12px_30px_rgba(183,20,50,0.32)]"
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#071B3B]">
              →
            </span>

            Let&apos;s Connect

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