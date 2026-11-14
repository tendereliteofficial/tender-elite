import { withYoast } from "@/lib/yoast-seo";
import { slugToTitle as _s } from "@/lib/seo";

const baseMetadata = {
  title: `${_s("bid-management-support")} Services`,
  description: `Professional ${_s("bid-management-support")} services for government tenders. Tender Elite helps you bid accurately, stay compliant and win more contracts.`,
  alternates: { canonical: "/services/bid-management-support" },
};

import { link } from "fs";
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
   BID MANAGEMENT PROCESS
========================================================= */

const bidProcess = [
  {
    title: "Tender Identification & Requirement Understanding",
    intro:
      "The process begins once the client shares the tender details or tender opportunity in which they intend to participate.",
    label: "Our team conducts an initial discussion to understand:",
    points: [
      "Scope of work",
      "Nature of the tender",
      "Project requirements",
      "Eligibility conditions",
      "Technical qualifications",
      "Financial qualifications",
      "Submission timelines",
      "Special tender conditions",
    ],
  },

  {
    title: "Tender Document Review & Analysis",
    intro:
      "Our experts carefully review the complete tender document to identify all critical requirements and compliance conditions.",
    label: "The review generally includes:",
    points: [
      "Notice Inviting Tender (NIT)",
      "Scope of Work",
      "Technical Specifications",
      "Eligibility Criteria",
      "Financial Criteria",
      "Experience Requirements",
      "Commercial Terms & Conditions",
      "EMD / Tender Fee Requirements",
      "Mandatory Annexures",
      "Important Dates & Submission Guidelines",
    ],
    outro:
      "A detailed review allows us to identify mandatory requirements at an early stage and minimize the chances of technical disqualification.",
  },

  {
    title: "Eligibility & Compliance Assessment",
    intro:
      "After reviewing the tender documents, we conduct an eligibility and compliance assessment to determine whether the client meets the required criteria.",
    label: "This includes analysis of:",
    points: [
      "Work experience eligibility",
      "Financial turnover requirements",
      "Similar project requirements",
      "Technical qualifications",
      "Certifications & registrations",
      "OEM authorizations",
      "Statutory compliance documents",
    ],
    outro:
      "This stage helps us evaluate the complexity of the tender and prepare a structured execution plan for the bid process.",
  },

  {
    title: "Tender Checklist Preparation",
    intro:
      "To ensure proper coordination and systematic execution, we prepare a detailed Tender Checklist for the client.",
    label: "The checklist includes:",
    points: [
      "Required technical documents",
      "Commercial documents",
      "Mandatory certificates",
      "Affidavits & declarations",
      "Financial documents",
      "Experience documents",
      "Annexures & formats",
      "Submission requirements",
      "Important deadlines",
    ],
    outro:
      "This structured process helps clients organize documents efficiently and avoids missing information during submission.",
  },

  {
    title: "Client Coordination & Documentation Assistance",
    intro:
      "In many cases, clients prefer preparing certain technical or project-specific documents internally. In such situations, our team provides complete coordination and guidance support.",
    label: "We assist clients by:",
    points: [
      "Reviewing drafted documents",
      "Suggesting corrections and improvements",
      "Ensuring compliance with tender conditions",
      "Verifying technical documentation",
      "Checking commercial formats",
      "Assisting in resolving documentation gaps",
    ],
    outro:
      "This collaborative approach helps improve bid quality while reducing documentation errors.",
  },

  {
    title: "Bid Documentation & Annexure Preparation",
    intro:
      "Once participation is confirmed, our team proceeds with preparation and drafting of tender-related documents and annexures.",
    label: "Our support includes:",
    points: [
      "Drafting annexures and declarations",
      "Preparing compliance sheets",
      "Formatting technical documents",
      "Organizing supporting documents",
      "Preparing commercial formats",
      "Assisting with BOQ documentation",
      "Document compilation and indexing",
    ],
    outro:
      "All documents are prepared according to tender requirements and submission standards to maintain professionalism and compliance.",
  },

  {
    title: "Bid Scheduling & Submission Planning",
    intro:
      "Managing timelines is one of the most critical aspects of tender participation.",
    label: "Our team coordinates:",
    points: [
      "Document collection timelines",
      "Internal review schedules",
      "Submission planning",
      "Portal upload schedules",
      "Clarification tracking",
      "Final submission deadlines",
    ],
    outro:
      "This systematic scheduling process ensures timely execution and prevents last-minute submission risks.",
  },

  {
    title: "Online Tender Submission Support",
    intro:
      "Once all documentation is finalized, our team manages the final online submission process on behalf of the client.",
    label: "Our submission support includes:",
    points: [
      "Portal login coordination",
      "Document uploads",
      "Technical bid submission",
      "Commercial bid submission",
      "BOQ uploads",
      "DSC support",
      "Final submission confirmation",
      "Acknowledgment tracking",
    ],
    outro:
      "We ensure that the bid is submitted successfully within the required timeline while following all portal guidelines and tender procedures.",
  },

  {
    title: "Multi-Level Compliance Verification",
    intro:
      "Before final submission, all documents undergo a detailed compliance and quality verification process.",
    label: "Our verification process includes:",
    points: [
      "Document completeness check",
      "Mandatory annexure verification",
      "Signature & stamp verification",
      "Technical compliance review",
      "Commercial format verification",
      "File naming & portal compatibility check",
      "Cross-checking submission requirements",
    ],
    outro:
      "This stage helps significantly reduce the risk of tender rejection due to technical or documentation errors.",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    title: "Improved Bid Accuracy",
    description:
      "Our structured documentation and review process helps improve the overall quality and professionalism of tender submissions.",
  },
  {
    title: "Reduced Rejection Risks",
    description:
      "By conducting multiple compliance checks and detailed verification, we minimize the possibility of rejection due to documentation or formatting errors.",
  },
  {
    title: "Time & Resource Efficiency",
    description:
      "Our systematic process reduces internal workload and helps businesses manage complex tender requirements more efficiently.",
  },
  {
    title: "Professional Tender Coordination",
    description:
      "Our team ensures smooth communication, proper follow-ups, and systematic management throughout the tender lifecycle.",
  },
  {
    title: "Multi-Industry Tender Experience",
    description:
      "We support tender participation across various sectors and procurement environments.",
  },
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industries = [
  {
    name: "Infrastructure",
    image: "/images/infrastructure.png",
    link: "/industries/construction-infrastructure",
  },
  {
    name: "IT & Software",
    image: "/images/itsoftware.png",
    link: "/industries/information-technology",
  },
  {
    name: "Pharmaceuticals",
    image: "/images/pharmaceuticals.png",
    link: "/industries/pharmaceutical",
  },
  {
    name: "Engineering",
    image: "/images/engineering.png",
    link: "/industries/mechanical-engineering",
  },
  {
    name: "Security Services",
    image: "/images/securityservices.png",
    link: "/industries/security-surveillance",
  },
  {
    name: "Facility Management",
    image: "/images/facilitymanagement.png",
    link: "/industries/facility-management",
  },
  {
    name: "Logistics",
    image: "/images/logistics.png",
    link: "/industries/logistics",
  },
  {
    name: "Healthcare",
    image: "/images/healthcare.png",
    link: "/industries/healthcare-medical",
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
        Tenders Successfully
        <br />
        Submitted
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
    title: (
      <>
        Strong Documentation
        <br />
        &amp; Compliance Process
      </>
    ),
  },

  {
    title: (
      <>
        End-to-End Bid
        <br />
        Management Support
      </>
    ),
  },

  {
    title: (
      <>
        Professional Tender
        <br />
        Coordination
      </>
    ),
  },

  {
    title: (
      <>
        Multi-Portal Submission
        <br />
        Expertise
      </>
    ),
  },

  {
    title: (
      <>
        Timely &amp; Systematic
        <br />
        Execution
      </>
    ),
  },
];

/* =========================================================
   LOCATIONS
========================================================= */

const locations = [
  [
    "Maharashtra",
    "/images/maharashtracard.png",
    "/states/maharashtra",
  ],
  [
    "Karnataka",
    "/images/karnatakacard.png",
    "/states/karnataka",
  ],
  [
    "Kerala",
    "/images/keralacard.png",
    "/states/kerala",
  ],
  [
    "Gujarat",
    "/images/gujaratcard.png",
    "/states/gujarat",
  ],
  [
    "Tamil Nadu",
    "/images/tamilnaducard.png",
    "/states/tamil-nadu",
  ],
  [
    "Uttar Pradesh",
    "/images/uttarpradeshcard.png",
    "/states/uttar-pradesh",
  ],
  [
    "Punjab",
    "/images/punjabcard.png",
    "/states/punjab",
  ],
  [
    "Rajasthan",
    "/images/rajasthancard.png",
    "/states/rajasthan",
  ],
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
              className="rounded-[20px] border border-slate-200 bg-[#D4A017] px-6 py-3 text-sm font-bold text-black shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-2 rounded-[20px] border border-[#FFA629] bg-[#B71432] px-7 py-3 text-sm font-bold text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Us
          </Link>

        </nav>

        {/* MOBILE / TABLET MENU */}

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
    <h2 className="text-center font-serif text-4xl font-bold tracking-[2px] text-[#D4A017] sm:text-5xl md:text-6xl">
      {children}
    </h2>
  );
}

/* =========================================================
   PROCESS CARD
   NO STEP LABEL
========================================================= */

function ProcessCard({
  title,
  intro,
  label,
  points,
  outro,
}: {
  title: string;
  intro: string;
  label: string;
  points: string[];
  outro?: string;
}) {
  return (
    <article className="group relative flex h-full flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 shadow-[0_0_28px_rgba(212,160,23,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(212,160,23,0.25)] sm:p-7">

      <h3 className="text-center font-serif text-[19px] font-bold leading-6 tracking-wide text-[#D4A017] sm:text-[21px]">
        {title}
      </h3>

      <p className="mt-5 text-[13px] leading-6 tracking-wide text-white sm:text-[14px]">
        {intro}
      </p>

      <p className="mt-4 text-[13px] font-semibold leading-6 tracking-wide text-white sm:text-[14px]">
        {label}
      </p>

      <div className="mt-3 grid gap-x-8 gap-y-1 text-[12px] leading-5 tracking-wide text-white sm:text-[13px] md:grid-cols-2">

        {points.map((point) => (
          <div key={point}>
            • {point}
          </div>
        ))}

      </div>

      {outro && (
        <p className="mt-5 pb-5 text-[13px] leading-6 tracking-wide text-white sm:text-[14px]">
          {outro}
        </p>
      )}

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
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="flex min-h-[190px] flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 text-[#071B3B] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(212,160,23,0.20)]">

      <h3 className="font-serif text-[20px] font-bold leading-7 tracking-[1.2px] text-[#D4A017] sm:text-[22px]">
        {title}
      </h3>

      <p className="mt-5 text-[14px] leading-6 tracking-wide">
        {description}
      </p>

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

        {/* BRAND */}

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

        {/* CONTACT */}

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

      {/* FOOTER BOTTOM */}

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

export default function BidManagementSupportPage() {
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

              <h1 className="font-serif text-[38px] font-bold leading-[1.06] text-[#D4A017] sm:text-[46px] md:text-[53px] lg:text-[57px] xl:text-[61px]">
                Bid Management
                <span className="block">
                  Support
                </span>
              </h1>

              <div className="mt-4 h-[2px] w-full max-w-[525px] rounded-full bg-[#D4A017]" />

              <div className="mt-5 text-[12px] leading-[1.5] tracking-[0.55px] text-white sm:text-[13px] sm:leading-[1.55] md:text-[14px]">

                <p>
                  Tender Elite provides comprehensive Bid Management Support
                  services designed to simplify, organize, and professionally
                  manage the complete tender participation process for
                  businesses across India.
                </p>

                <p className="mt-4">
                  Our services are structured to help companies handle complex
                  tendering requirements efficiently while ensuring accuracy,
                  compliance, and timely submission. From initial tender
                  identification to final bid submission, our team coordinates
                  every stage of the process through a systematic and
                  detail-oriented approach.
                </p>

                <p className="mt-4">
                  We understand that successful tender participation requires
                  more than just document submission. Proper planning,
                  eligibility analysis, compliance management, document
                  coordination, and timely execution play a critical role in
                  improving bid quality and reducing rejection risks.
                </p>

                <p className="mt-4">
                  With our professional Bid Management Support services,
                  businesses can focus on their core operations while our team
                  manages the complete bidding process efficiently.
                </p>

              </div>

              <div className="mt-5 h-[2px] w-full max-w-[525px] rounded-full bg-[#D4A017]" />

            </div>

            {/* RIGHT */}

            <div className="w-full">

              <div className="overflow-hidden rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.75)]">

                <img
                  src="/images/bidmanagementsupport.png"
                  alt="Bid Management Support"
                  className="block h-[290px] w-full object-cover sm:h-[350px] md:h-[410px] lg:h-[450px] xl:h-[500px]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BID MANAGEMENT PROCESS
          6 + 1 CENTERED
      ====================================================== */}

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-14 md:px-10 xl:px-16 xl:py-16">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Our Bid Management Process
          </SectionTitle>

          {/* FIRST 6 CARDS */}

          <div className="mx-auto mt-10 grid max-w-[1180px] gap-6 lg:grid-cols-2">

            {bidProcess.slice(0, 6).map((item) => (
              <ProcessCard
                key={item.title}
                title={item.title}
                intro={item.intro}
                label={item.label}
                points={item.points}
                outro={item.outro}
              />
            ))}

          </div>

          {/* LAST CARD — CENTERED */}

          <div className="mx-auto mt-6 w-full max-w-[590px]">

            <ProcessCard
              title={bidProcess[6].title}
              intro={bidProcess[6].intro}
              label={bidProcess[6].label}
              points={bidProcess[6].points}
              outro={bidProcess[6].outro}
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}

      <section className="bg-[#071B3B] px-5 py-14 text-white sm:px-8 sm:py-16 md:px-10 xl:px-16 xl:py-20">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Benefits of Our Bid Management Services
          </SectionTitle>

          {/* FIRST ROW — 3 */}

          <div className="mx-auto mt-10 grid max-w-[1180px] gap-6 lg:grid-cols-3">

            {benefits.slice(0, 3).map((benefit) => (
              <BenefitCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
              />
            ))}

          </div>

          {/* SECOND ROW — 2 */}

          <div className="mx-auto mt-6 grid max-w-[820px] gap-6 md:grid-cols-2">

            {benefits.slice(3).map((benefit) => (
              <BenefitCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
              />
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
              className="inline-flex rounded-2xl bg-[#D4A017] px-8 py-3 text-sm font-bold text-[#071B3B] shadow-md transition-all duration-300 hover:-translate-y-1"
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
            At Tender Elite, we aim to simplify tender participation through
            professional bid management solutions that help businesses
            participate confidently, efficiently, and compliantly.
          </p>

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
              className="inline-flex rounded-2xl bg-[#D4A017] px-8 py-3 text-sm font-bold text-[#071B3B] shadow-md transition-all duration-200 hover:-translate-y-0.5"
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

        <div className="mx-auto max-w-[1090px] rounded-[30px] bg-[#071B3B] px-6 py-10 text-center shadow-[0_15px_40px_rgba(7,27,59,0.18)] sm:px-10 sm:py-12">

          <h2 className="font-serif text-2xl font-semibold leading-8 tracking-[2px] text-[#D4A017] sm:text-3xl sm:leading-10">
            Discuss Your Tender Requirement
          </h2>

          <p className="mt-5 font-serif text-2xl font-semibold tracking-[2px] text-white sm:text-3xl">
            Partner with Tender Elite
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-7 flex max-w-[320px] items-center justify-center gap-3 rounded-[30px] bg-[#B71432] px-5 py-3 text-base font-semibold tracking-widest text-white shadow-md transition-all duration-300 hover:-translate-y-1 sm:text-lg"
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#071B3B]">
              →
            </span>

            Get Consultation

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
  return withYoast("/services/bid-management-support", baseMetadata);
}
