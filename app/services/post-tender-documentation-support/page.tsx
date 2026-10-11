import { slugToTitle as _s } from "@/lib/seo";

export const metadata = {
  title: `${_s("post-tender-documentation-support")} Services`,
  description: `Professional ${_s("post-tender-documentation-support")} services for government tenders. Tender Elite helps you bid accurately, stay compliant and win more contracts.`,
  alternates: { canonical: "/services/post-tender-documentation-support" },
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
   POST-TENDER SUPPORT PROCESS
========================================================= */

const postTenderServices = [
  {
    title: "Post-Tender Requirement Discussion",
    intro:
      "Once the tender submission or award-related communication is received, our team conducts an initial discussion to understand:",
    points: [
      "Nature of procurement requirements",
      "Clarification requests issued by the authority",
      "Additional document requirements",
      "Agreement formalities",
      "Compliance obligations",
      "Performance security requirements",
      "Submission timelines",
      "Project commencement conditions",
      "Procurement authority instructions",
    ],
    outro:
      "This helps us evaluate the post-tender requirements and plan the documentation process effectively.",
  },

  {
    title: "Clarification Response Support",
    intro:
      "Procurement authorities may seek technical, commercial, or compliance-related clarifications after tender submission.",
    label: "Our team assists clients with:",
    points: [
      "Clarification response drafting",
      "Technical clarification support",
      "Commercial clarification coordination",
      "Compliance response preparation",
      "Supporting document organization",
      "Procurement communication support",
      "Additional information submissions",
    ],
    outro:
      "We help businesses respond professionally and accurately within required timelines.",
  },

  {
    title: "Additional Documentation Support",
    intro:
      "Many tenders require submission of additional documents after technical evaluation or award recommendation.",
    label: "Our team assists in preparing and organizing:",
    points: [
      "Additional compliance documents",
      "Supporting certificates",
      "Financial documents",
      "Technical documents",
      "Eligibility proof documents",
      "Annexures & declarations",
      "Project-related documentation",
      "Vendor onboarding documents",
    ],
    outro:
      "We ensure all required documents are properly arranged and submitted according to procurement requirements.",
  },

  {
    title: "Performance Security & Agreement Support",
    intro:
      "After award recommendation or work order issuance, businesses may need to complete multiple contractual formalities.",
    label: "Our services include assistance with:",
    points: [
      "Performance Security (PBG/SD) coordination",
      "Agreement documentation support",
      "Contract-related document preparation",
      "Stamp paper & agreement formalities guidance",
      "Compliance submissions",
      "Security deposit documentation",
      "Procurement authority coordination",
    ],
    outro:
      "We help businesses complete post-award formalities professionally and efficiently.",
  },

  {
    title: "Final Verification & Submission Coordination",
    intro:
      "Before submission of post-tender documents, our team conducts detailed verification to ensure:",
    points: [
      "Proper document completeness",
      "Compliance alignment",
      "Signature & stamp verification",
      "Accuracy of submitted information",
      "Technical consistency",
      "Financial document verification",
      "Proper file organization",
      "Timely submission readiness",
    ],
    outro:
      "This process helps reduce risks associated with incomplete or incorrect documentation.",
  },

  {
    title: "Compliance & Project Documentation Support",
    intro:
      "Our team assists businesses in managing procurement-related compliance documentation required during the post-tender stage.",
    label: "This includes support for:",
    points: [
      "Compliance declarations",
      "Statutory documentation",
      "Registration certificates",
      "Insurance documentation",
      "Project-related compliance records",
      "Vendor onboarding requirements",
      "Procurement authority documentation",
    ],
    outro:
      "This helps businesses maintain proper compliance during the award and execution process.",
  },

  {
    title: "Procurement Coordination & Follow-Up Support",
    intro:
      "Post-tender processes often require continuous coordination with procurement authorities.",
    label: "Our team assists clients with:",
    points: [
      "Procurement communication support",
      "Submission coordination",
      "Clarification follow-ups",
      "Additional document coordination",
      "Vendor onboarding support",
      "Agreement execution coordination",
      "Project initiation support",
    ],
    outro:
      "We help businesses manage post-tender procedures professionally and smoothly.",
  },
];

/* =========================================================
   WHY CHOOSE TENDER ELITE
========================================================= */

const whyChooseCards = [
  {
    title: "Support Beyond Tender Submission",
    text:
      "At Tender Elite, we do not just assist businesses with tender submission — we continue supporting clients even after submission through complete post-tender documentation, compliance coordination, and procurement assistance services.",
  },

  {
    title: "Professional Post-Tender Documentation Expertise",
    text:
      "We provide structured support for clarification management, agreement formalities, compliance documentation, performance security coordination, and procurement communication.",
  },

  {
    title: "Strong Documentation & Compliance Process",
    text:
      "Our systematic verification process helps minimize risks related to missing documents, incorrect compliance submissions, clarification response errors, agreement documentation issues, delayed submissions, and procurement coordination gaps.",
  },

  {
    title: "Multi-Portal Procurement Experience",
    text:
      "We provide support across various Government and procurement systems including GeM Portal, CPP Portal, PSU Procurement Portals, and many other portals.",
  },

  {
    title: "Professional & Timely Coordination",
    text:
      "Our team ensures timely document submissions, proper compliance management, smooth communication, efficient procurement coordination, and structured follow-up support.",
  },

  {
    title: "Industry-Wide Tender Experience",
    text:
      "We have experience supporting post-tender processes related to Civil Construction, Infrastructure Projects, Electrical & Mechanical Works, and many other sectors.",
  },
];

/* =========================================================
   PORTALS
========================================================= */

const portalColumns = [
  [
    "GeM Portal",
    "CPP Portal",
    "PSU Procurement Portals",
    "Municipal Corporation Portals",
  ],
  [
    "Railways & Infrastructure Portals",
    "State Government Procurement Systems",
    "Private Procurement Platforms",
  ],
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
   SERVICE CARD
========================================================= */

function ServiceCard({
  service,
}: {
  service: (typeof postTenderServices)[number];
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
}: {
  title: string;
  text: string;
}) {
  return (
    <article className="h-full min-h-[290px] rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 text-[#071B3B] shadow-[0_8px_25px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_32px_rgba(212,160,23,0.25)] sm:p-8">

      <h3 className="font-serif text-[20px] font-semibold leading-7 tracking-[1.5px] text-[#D4A017] sm:text-[22px]">
        {title}
      </h3>

      <p className="mt-6 font-serif text-[14px] leading-6 tracking-wider sm:text-[15px]">
        {text}
      </p>

    </article>
  );
}

/* =========================================================
   PORTAL CARD
========================================================= */

function PortalCard({
  items,
}: {
  items: string[];
}) {
  return (
    <article className="rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 text-[#071B3B] shadow-[0_8px_24px_rgba(0,0,0,0.10)] sm:p-9">

      <div className="font-serif text-[17px] leading-8 tracking-wider sm:text-[19px]">

        {items.map((item) => (
          <div key={item}>
            • {item}
          </div>
        ))}

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

export default function PostTenderDocumentationSupportPage() {
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

            {/* LEFT TEXT */}

            <div className="w-full">

              <h1 className="font-serif text-[38px] font-bold leading-[1.06] text-[#D4A017] sm:text-[46px] md:text-[54px] lg:text-[58px] xl:text-[62px]">

                Post-Tender

                <span className="block">
                  Documentation
                </span>

                <span className="block">
                  Support Services
                </span>

              </h1>

              <div className="mt-4 h-[2px] w-full max-w-[550px] rounded-full bg-[#D4A017] shadow-[0_0_20px_rgba(212,160,23,0.8)]" />

              <div className="mt-5 text-[12px] leading-[1.55] tracking-[0.55px] text-white sm:text-[13px] md:text-[14px]">

                {/* PARAGRAPH 1 */}

                <p>
                  Tender Elite provides professional Post-Tender Documentation
                  Support services to help businesses manage important
                  documentation, compliance, and coordination requirements
                  after tender submission and award processes.
                </p>

                {/* PARAGRAPH 2 */}

                <p className="mt-4">
                  At Tender Elite, our services do not end with tender
                  submission. We continue supporting clients throughout the
                  post-tender stage by assisting with clarification responses,
                  additional documentation requirements, agreement formalities,
                  compliance submissions, performance security documentation,
                  and project-related coordination support.
                </p>

                {/* PARAGRAPH 3 */}

                <p className="mt-4">
                  Government departments, PSUs, procurement authorities,
                  infrastructure companies, and institutional buyers often
                  require multiple post-tender formalities before issuing work
                  orders, purchase orders, agreements, or project commencement
                  approvals. Proper handling of these requirements is critical
                  to avoid delays, compliance issues, or award-related
                  complications.
                </p>

                {/* PARAGRAPH 4 */}

                <p className="mt-4">
                  Our objective is to help businesses manage post-tender
                  processes professionally and efficiently through structured
                  documentation support, compliance coordination, and
                  procurement communication assistance.
                </p>

                {/* PARAGRAPH 5 — MISSING PARAGRAPH ADDED */}

                <p className="mt-4">
                  We understand that post-tender procedures often involve
                  strict timelines, detailed documentation requirements, and
                  continuous coordination with procurement authorities.
                  Therefore, our team carefully assists clients throughout the
                  complete post-tender process to ensure smooth execution and
                  compliance management.
                </p>

              </div>

              <div className="mt-5 h-[2px] w-full max-w-[550px] rounded-full bg-[#D4A017]" />

            </div>

            {/* RIGHT IMAGE */}

            <div className="w-full">

              <div className="overflow-hidden rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.75)]">

                <img
                  src="/images/posttenderdocumentation.png"
                  alt="Post-Tender Documentation Support"
                  className="block h-[300px] w-full object-cover sm:h-[360px] md:h-[420px] lg:h-[450px] xl:h-[500px]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          POST-TENDER SUPPORT PROCESS
      ====================================================== */}

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-14 md:px-10 xl:px-16 xl:py-16">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Our Post-Tender Documentation Support Process
          </SectionTitle>

          {/* 6 CARDS */}

          <div className="mx-auto mt-10 grid max-w-[1180px] gap-6 lg:grid-cols-2">

            {postTenderServices.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
              />
            ))}

          </div>

          {/* 7TH CARD CENTER */}

          <div className="mx-auto mt-6 max-w-[590px]">

            <ServiceCard
              service={postTenderServices[6]}
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B3B] px-5 py-12 text-white sm:px-8 sm:py-14 md:px-10 xl:px-16 xl:py-16">

        {/* STRIPES */}

        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(183,20,50,0.42) 0px, rgba(183,20,50,0.42) 28px, transparent 28px, transparent 54px)",
          }}
        />

        <div className="relative mx-auto max-w-[1280px]">

          <SectionTitle>
            Why Choose Tender Elite?
          </SectionTitle>

          <div className="mx-auto mt-8 grid max-w-[1190px] items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {whyChooseCards.map((card) => (
              <WhyChooseCard
                key={card.title}
                title={card.title}
                text={card.text}
              />
            ))}

          </div>

          <p className="mx-auto mt-8 max-w-[1192px] text-center text-sm leading-7 tracking-widest text-white sm:text-base">
            At Tender Elite, we help businesses manage post-tender processes
            professionally through structured documentation support,
            compliance coordination, clarification management, and procurement
            assistance that improves execution readiness and procurement
            compliance.
          </p>

        </div>

      </section>

      {/* =====================================================
          PORTALS
      ====================================================== */}

      <section className="bg-[#071B3B] px-5 pb-12 text-white sm:px-8 sm:pb-14 md:px-10 xl:px-16 xl:pb-16">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Portals We Support
          </SectionTitle>

          <p className="mx-auto mt-4 max-w-[966px] text-center font-serif text-base leading-7 tracking-widest text-white sm:text-lg">
            We provide support across various Government and procurement
            systems including:
          </p>

          <div className="mx-auto mt-8 grid max-w-[1100px] gap-6 md:grid-cols-2">

            {portalColumns.map((items, index) => (
              <PortalCard
                key={index}
                items={items}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B3B] px-5 pb-8 text-white sm:px-8 sm:pb-10 md:px-10 xl:px-16 xl:pb-12">

        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(183,20,50,0.42) 0px, rgba(183,20,50,0.42) 28px, transparent 28px, transparent 54px)",
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

      <section className="bg-white px-5 pt-4 pb-10 sm:px-8 sm:pt-6 sm:pb-12 md:px-10 xl:px-16">

        <div className="mx-auto max-w-[1062px] rounded-[30px] bg-[#071B3B] px-6 py-10 text-center shadow-[0_15px_40px_rgba(7,27,59,0.18)] sm:px-10 sm:py-12">

          <h2 className="font-serif text-2xl font-semibold leading-8 tracking-[2px] text-[#D4A017] sm:text-3xl sm:leading-10">
            Need Professional Post-Tender Documentation Support?
          </h2>

          <p className="mt-4 font-serif text-lg font-medium leading-8 tracking-widest text-white sm:text-xl">
            Get expert assistance for clarification responses, compliance
            submissions, agreement formalities, performance security
            coordination, and post-award procurement support.
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-7 flex max-w-[360px] items-center justify-center gap-3 rounded-[30px] bg-[#B71432] px-5 py-3 text-base font-semibold tracking-widest text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#971029] hover:shadow-[0_12px_30px_rgba(183,20,50,0.32)] sm:text-lg"
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