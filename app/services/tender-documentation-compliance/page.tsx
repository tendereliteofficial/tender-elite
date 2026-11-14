import { withYoast } from "@/lib/yoast-seo";
import { slugToTitle as _s } from "@/lib/seo";

const baseMetadata = {
  title: `${_s("tender-documentation-compliance")} Services`,
  description: `Professional ${_s("tender-documentation-compliance")} services for government tenders. Tender Elite helps you bid accurately, stay compliant and win more contracts.`,
  alternates: { canonical: "/services/tender-documentation-compliance" },
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
   SERVICE DATA
========================================================= */

const serviceData = [
  {
    title: "Tender Document Review & Requirement Analysis",
    intro:
      "Our process begins with a detailed review of the complete tender document to identify all mandatory documentation and compliance requirements.",
    label: "We analyze:",
    points: [
      "Eligibility Criteria",
      "Technical Requirements",
      "Financial Qualification Criteria",
      "Experience Requirements",
      "Scope of Work",
      "Commercial Conditions",
      "Compliance Clauses",
      "Mandatory Annexures",
      "Affidavits & Undertakings",
      "Certifications & Registrations",
      "EMD / BG Requirements",
      "Submission Instructions",
    ],
    outro:
      "This detailed analysis helps ensure that all tender requirements are properly understood before document preparation begins.",
  },

  {
    title: "Eligibility & Compliance Assessment",
    intro:
      "Our team evaluates whether the client meets the required tender eligibility conditions.",
    label: "This includes verification:",
    points: [
      "Company eligibility",
      "Similar work experience",
      "Turnover requirements",
      "Technical capability",
      "OEM authorization requirements",
      "Registration & certification requirements",
      "Statutory compliance documents",
      "Financial qualification requirements",
    ],
    outro:
      "Based on this assessment, we guide clients regarding documentation gaps and required supporting documents.",
  },

  {
    title: "Technical Documentation Support",
    intro:
      "We assist clients in preparing and organizing all technical bid documents according to tender specifications and procurement standards.",
    label: "Technical documentation support includes:",
    points: [
      "Technical compliance sheets",
      "Product specifications",
      "Experience documents",
      "Work completion certificates",
      "Project references",
      "Technical declarations",
      "Method statements",
      "Organization profiles",
      "Team & manpower details",
      "Equipment details",
      "OEM authorizations",
      "Technical presentations",
    ],
    outro:
      "We ensure all technical documents are properly formatted, organized, and aligned with tender conditions.",
  },

  {
    title: "Commercial & Financial Documentation",
    intro:
      "Our team also supports preparation and verification of commercial and financial documents required for tender participation.",
    label: "This includes:",
    points: [
      "Commercial bid formats",
      "BOQ documentation",
      "Financial statements",
      "CA certificates",
      "Payment compliance documents",
      "Turnover certificates",
      "Pricing formats",
      "Commercial declarations",
      "Cost sheets",
    ],
    outro:
      "Proper preparation of commercial documentation helps maintain consistency and avoid pricing-related submission errors.",
  },

  {
    title: "Annexure & Declaration Drafting",
    intro:
      "Many tenders require multiple annexures, declarations, undertakings, affidavits, and compliance formats.",
    label: "We assist in:",
    points: [
      "Drafting tender annexures",
      "Preparing declarations & undertakings",
      "Affidavit preparation support",
      "Compliance statements",
      "Authorization letters",
      "Bid forms",
      "Integrity pact formats",
      "Tender-specific documentation",
    ],
    outro:
      "Proper preparation of corresponding documentation helps ensure smooth submission and minimizes compliance-related issues.",
  },

  {
    title: "Documentation Verification & Quality Check",
    intro:
      "Before final submission, our team conducts a detailed multi-level verification process to ensure document accuracy and completeness.",
    label: "Our review process includes:",
    points: [
      "Mandatory document verification",
      "Signature & stamp checks",
      "Format compliance review",
      "Annexure verification",
      "Cross-checking technical compliance",
      "Financial document verification",
      "File naming & portal compatibility checks",
      "Submission checklist verification",
    ],
    outro:
      "This quality control process helps reduce the risk of rejection due to documentation mistakes or missing information.",
  },

  {
    title: "Compliance Management Support",
    intro:
      "Tender compliance involves strict adherence to procurement guidelines, tender conditions, and submission standards.",
    label: "Our compliance management support helps businesses:",
    points: [
      "Understand tender conditions",
      "Maintain submission accuracy",
      "Follow procurement standards",
      "Avoid non-compliance issues",
      "Manage tender documentation systematically",
      "Reduce technical rejection risks",
    ],
    outro:
      "We ensure that all documentation aligns with the requirements specified by the procurement authority.",
  },

  {
    title: "Multi-Portal Documentation Support",
    intro:
      "Different procurement portals often have different submission standards and upload requirements.",
    label: "Our team provides documentation support for:",
    points: [
      "GeM Portal",
      "CPP Portal",
      "State e-Tender Portals",
      "PSU Procurement Systems",
      "Railway Procurement Portals",
      "Defence Procurement Platforms",
      "Municipal Corporation Portals",
      "Healthcare Procurement Systems",
      "Infrastructure Procurement Portals",
      "Private Procurement Platforms",
    ],
    outro:
      "We help ensure that documents are prepared according to portal-specific submission requirements.",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    title: "Reduced Risk of Tender Rejection",
    description:
      "Our systematic documentation and verification process helps minimize rejection risks caused by missing documents, incorrect formats, compliance issues, and incomplete annexures.",
  },

  {
    title: "Improved Bid Quality",
    description:
      "Professionally organized and compliant documentation improves the overall quality, presentation, and credibility of the bid submission.",
  },

  {
    title: "Better Tender Coordination",
    description:
      "Structured documentation management allows businesses to handle complex tenders more efficiently and systematically.",
  },

  {
    title: "Strong Compliance Management",
    description:
      "Our detailed review process helps businesses maintain proper compliance with procurement guidelines and tender conditions.",
  },

  {
    title: "Time & Resource Savings",
    description:
      "Businesses can save significant internal effort and administrative workload by outsourcing documentation management to experienced professionals.",
  },
];

/* =========================================================
   WHY CHOOSE
========================================================= */

const whyChoose = [
  {
    value: "5000+",
    title: (
      <>
        Tenders
        <br />
        Successfully
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
        Successfully
        <br />
        Completed
      </>
    ),
  },

  {
    value: "15+ Years",
    title: (
      <>
        Cumulative
        <br />
        Industry
        <br />
        Experience
      </>
    ),
  },

  {
    title: (
      <>
        Strong
        <br />
        Documentation &amp;
        <br />
        Compliance Expertise
      </>
    ),
  },

  {
    title: (
      <>
        Professional
        <br />
        Tender Coordination
        <br />
        Team
      </>
    ),
  },

  {
    title: (
      <>
        End-to-End
        <br />
        Tender Support
        <br />
        Services
      </>
    ),
  },

  {
    title: (
      <>
        Multi-Portal
        <br />
        Submission
        <br />
        Experience
      </>
    ),
  },

  {
    title: (
      <>
        Systematic
        <br />
        Verification &amp;
        <br />
        Quality Process
      </>
    ),
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
  service: (typeof serviceData)[number];
}) {
  return (
    <article className="group relative flex h-full flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-5 shadow-[0_0_28px_rgba(212,160,23,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(212,160,23,0.28)] sm:p-6">

      {/* TITLE */}

      <h3 className="pr-8 text-center font-serif text-[19px] font-semibold leading-6 tracking-wide text-[#D4A017] sm:text-[21px]">

        {service.title}

      </h3>

      {/* INTRO */}

      <p className="mt-5 text-[13px] leading-5 tracking-wide text-white sm:text-[14px] sm:leading-6">

        {service.intro}

      </p>

      {/* LABEL */}

      <p className="mt-4 text-[13px] font-semibold leading-5 tracking-wide text-white sm:text-[14px] sm:leading-6">

        {service.label}

      </p>

      {/* TWO COLUMN POINTS */}

      <div className="mt-3 grid grid-cols-1 gap-x-7 gap-y-1 text-[12px] leading-5 tracking-wide text-white sm:text-[13px] sm:leading-5 md:grid-cols-2">

        {service.points.map((point) => (
          <div
            key={point}
            className="break-words"
          >
            • {point}
          </div>
        ))}

      </div>

      {/* OUTRO */}

      <p className="mt-4 pb-5 text-[13px] leading-5 tracking-wide text-white sm:text-[14px] sm:leading-6">

        {service.outro}

      </p>

      {/* ARROW */}

      <span className="absolute bottom-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#FFA629] text-[15px] font-bold text-[#071B3B] shadow-[0_0_20px_rgba(255,166,41,0.95)] transition-transform duration-300 group-hover:scale-110">

        →

      </span>

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
    <article className="flex min-h-[225px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-white px-4 py-6 text-center shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(212,160,23,0.20)]">

      <div className="w-full">

        {value && (
          <div className="font-serif text-[32px] font-bold leading-9 tracking-[2px] text-[#D4A017] sm:text-[38px]">
            {value}
          </div>
        )}

        <div
          className={`font-serif text-[20px] font-bold leading-[1.2] tracking-[2px] text-[#D4A017] sm:text-[23px] ${
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
   LOCATIONS SECTION
========================================================= */

function LocationsSection() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 md:px-10 xl:px-12 xl:py-20">

      <div className="mx-auto max-w-[1440px]">

        <SectionTitle>
          Locations We Serve
        </SectionTitle>

        <div className="mx-auto mt-10 grid max-w-[1170px] grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4">

          {locations.map(([name, image, link]) => (
            <Link
              key={name}
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
          ))}

        </div>

        <div className="mt-8 text-center">

          <Link
            href="/locations"
            className="inline-flex rounded-2xl bg-[#D4A017] px-8 py-3 text-sm font-bold text-[#071B3B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(212,160,23,0.30)]"
          >
            View More
          </Link>

        </div>

      </div>

    </section>
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
            href="app/privacy-policy"
            className="transition-colors hover:text-[#D4A017]"
          >
            Privacy Policy
          </Link>

          <Link
            href="app/disclaimer"
            className="transition-colors hover:text-[#D4A017]"
          >
            Disclaimer
          </Link>

        </div>

      </div>

    </footer>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function TenderDocumentationCompliancePage() {
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

        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:min-h-[675px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:px-20">

          <div className="max-w-[610px]">

            <h1 className="font-serif text-[43px] font-bold leading-[1.05] text-[#D4A017] sm:text-[52px] md:text-[58px] xl:text-[62px]">
              Tender Documentation
              <span className="block">
                &amp; Compliance
              </span>
            </h1>

            <div className="my-7 h-0.5 w-full max-w-[543px] rounded-full bg-[#D4A017] shadow-[0_0_25px_rgba(212,160,23,1)]" />

            <div className="text-sm leading-6 tracking-wider text-white sm:text-base sm:leading-7">

              Tender Elite provides professional Tender Documentation &amp;
              Compliance Support services for Government, PSU, Municipal
              Corporation, Railway, Defence, Healthcare, Infrastructure, and
              Private Sector tenders across India.

              <br />
              <br />

              Tender documentation is one of the most critical aspects of
              successful tender participation. Even minor errors, incomplete
              information, non-compliance issues, or incorrect document formats
              can result in technical rejection or disqualification.

              <br />
              <br />

              Our team provides complete support for preparing, organizing,
              reviewing, and managing tender documentation in accordance with
              tender conditions, procurement guidelines, and submission
              requirements.

              <br />
              <br />

              We ensure that all technical, commercial, legal, financial, and
              compliance-related documents are properly prepared and verified
              before submission.

              <br />
              <br />

              Through a systematic and detail-oriented approach, we help
              businesses reduce documentation risks, improve bid quality, and
              participate in tenders with greater confidence and compliance
              accuracy.

            </div>

          </div>

          <div className="w-full">

            <div className="overflow-hidden rounded-[20px] shadow-[0_0_35px_rgba(0,0,0,0.75)]">

              <img
                src="/images/Tender Documentation and Compliance.png"
                alt="Tender Documentation and Compliance"
                className="h-[360px] w-full object-cover sm:h-[470px] md:h-[540px] lg:h-[637px]"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 md:px-10 xl:px-16 xl:py-20">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Our Tender Documentation &amp; Compliance Services
          </SectionTitle>

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">

            {serviceData.map((service) => (
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

      <section className="bg-[#071B3B] px-5 py-16 text-white sm:px-8 sm:py-20 md:px-10 xl:px-16 xl:py-24">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Benefits of Professional Documentation &amp; Compliance Support
          </SectionTitle>

          <div className="mx-auto mt-12 grid max-w-[1180px] gap-6 md:grid-cols-2 xl:grid-cols-3">

            {benefits.slice(0, 3).map((benefit) => (
              <article
                key={benefit.title}
                className="min-h-[230px] rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 text-[#071B3B] shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(212,160,23,0.20)]"
              >

                <h3 className="font-serif text-xl font-semibold leading-7 tracking-wider text-[#D4A017]">
                  {benefit.title}
                </h3>

                <p className="mt-5 text-sm leading-6 tracking-wide">
                  {benefit.description}
                </p>

              </article>
            ))}

          </div>

          <div className="mx-auto mt-6 grid max-w-[900px] gap-6 md:grid-cols-2">

            {benefits.slice(3).map((benefit) => (
              <article
                key={benefit.title}
                className="min-h-[190px] rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 text-[#071B3B] shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(212,160,23,0.20)]"
              >

                <h3 className="font-serif text-xl font-semibold leading-7 tracking-wider text-[#D4A017]">
                  {benefit.title}
                </h3>

                <p className="mt-5 text-sm leading-6 tracking-wide">
                  {benefit.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}

      <section className="bg-[#071B3B] px-5 pb-16 text-white sm:px-8 sm:pb-20 md:px-10 xl:px-16 xl:pb-24">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Industries We Serve
          </SectionTitle>

          <p className="mx-auto mt-5 max-w-[870px] text-center text-sm font-bold leading-6 tracking-wider text-white sm:text-base">
            Empowering businesses across diverse sectors with expert tender
            consultancy, bid management, and strategic procurement support.
          </p>

          <div className="mx-auto mt-10 grid max-w-[1180px] gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {industries.map((industry) => (
              <IndustryCard
                key={industry.name}
                name={industry.name}
                image={industry.image}
                link={industry.link}
              />
            ))}

          </div>

          <div className="mt-8 text-center">

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

          <p className="mx-auto mt-12 max-w-[1190px] text-center text-sm leading-6 tracking-wider text-white sm:text-base">
            At Tender Elite, we focus on delivering professionally managed
            Tender Documentation &amp; Compliance services that help businesses
            participate in tenders accurately, confidently, and compliantly.
          </p>

        </div>

      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */}

      <LocationsSection />

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-white px-5 pt-8 pb-12 sm:px-8 sm:pt-10 sm:pb-14 md:px-10 xl:px-16 xl:pt-10 xl:pb-16">

        <div className="mx-auto max-w-[1062px] rounded-[30px] bg-[#071B3B] px-6 py-10 text-center shadow-[0_15px_40px_rgba(7,27,59,0.18)] sm:px-10 sm:py-12">

          <h2 className="font-serif text-2xl font-semibold tracking-[2px] text-[#D4A017] sm:text-3xl">
            Need Professional Tender Documentation Support?
          </h2>

          <p className="mt-3 font-serif text-2xl font-semibold tracking-[2px] text-white sm:text-3xl">
            Partner with Tender Elite
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-6 flex max-w-[420px] items-center justify-center gap-3 rounded-[30px] bg-[#B71432] px-5 py-3 text-base font-semibold tracking-widest text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(183,20,50,0.32)] sm:text-lg"
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#071B3B]">
              →
            </span>

            Get Documentation Support

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
  return withYoast("/services/tender-documentation-compliance", baseMetadata);
}
