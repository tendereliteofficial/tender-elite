import { slugToTitle as _s } from "@/lib/seo";

export const metadata = {
  title: `${_s("tender-portal-registration")} Services`,
  description: `Professional ${_s("tender-portal-registration")} services for government tenders. Tender Elite helps you bid accurately, stay compliant and win more contracts.`,
  alternates: { canonical: "/services/tender-portal-registration" },
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
   5 STEP PROCESS
========================================================= */

const processSteps = [
  {
    title: "Requirement Discussion & Portal Identification",
    content: (
      <>
        Our process begins with understanding the client&apos;s business
        profile, industry category, products/services, and target tender
        opportunities.
        <br />
        <br />
        Based on the business requirements, we identify the relevant
        procurement portals where registration is necessary.
        <br />
        <br />
        This helps businesses register on the most suitable platforms
        according to their industry and tender participation goals.
      </>
    ),
  },

  {
    title: "Documentation Requirement Analysis",
    content: (
      <>
        Each tender portal has specific registration and compliance
        requirements.
        <br />
        <br />
        Our team reviews and guides clients regarding required documents such
        as:
        <br />
        <br />

        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
          <div>
            • Company Registration Documents
            <br />
            • PAN Card
            <br />
            • GST Registration
            <br />
            • MSME / Udyam Registration
            <br />
            • Address Proof
            <br />
            • Bank Details
          </div>

          <div>
            • Experience Documents
            <br />
            • Authorization Letters
            <br />
            • Digital Signature Certificate (DSC)
            <br />
            • Product / Service Details
            <br />
            • OEM Certificates
            <br />
            • Technical Certifications
          </div>
        </div>

        <br />

        We help organize the required information systematically to avoid
        delays during registration.
      </>
    ),
  },

  {
    title: "Portal Registration & Profile Setup",
    content: (
      <>
        Our team assists clients throughout the portal registration process
        including:
        <br />
        <br />
        • Vendor Registration
        <br />
        • User Creation
        <br />
        • Profile Setup
        <br />
        • Category Selection
        <br />
        • Product &amp; Service Listing
        <br />
        • Organization Details Upload
        <br />
        • Compliance Information Submission
        <br />
        • Bank &amp; Payment Information Updates
        <br />
        • Digital Signature Integration
        <br />
        <br />
        We ensure that the registration is completed according to portal
        requirements and procurement guidelines.
      </>
    ),
  },

  {
    title: "Document Verification & Compliance Support",
    content: (
      <>
        Before final submission, we verify all uploaded information and
        documents to ensure:
        <br />
        <br />
        • Proper document formatting
        <br />
        • Correct information submission
        <br />
        • Compliance with portal requirements
        <br />
        • Accurate business details
        <br />
        • Valid certifications and registrations
        <br />
        • Proper category selection
        <br />
        <br />
        This verification process helps minimize registration errors and
        approval delays.
      </>
    ),
  },

  {
    title: "Portal Activation & Submission Support",
    content: (
      <>
        Once registration is completed, our team assists clients with:
        <br />
        <br />
        • Portal activation support
        <br />
        • Login and credential management
        <br />
        • Initial portal understanding
        <br />
        • Navigation assistance
        <br />
        • Bid participation guidance
        <br />
        • Tender access support
        <br />
        <br />
        This ensures businesses are fully prepared for future tender
        participation.
      </>
    ),
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    title: "Access to Government & Private Tender Opportunities",
    description:
      "Portal registration enables businesses to participate in procurement opportunities.",
  },

  {
    title: "Increased Business Opportunities",
    description:
      "By registering on multiple tender portals, businesses gain access to a larger number of tender opportunities across different sectors and regions.",
  },

  {
    title: "Better Procurement Access",
    description:
      "Portal registration allows businesses to receive tender notifications, procurement updates, and bidding opportunities relevant to their industry category.",
  },

  {
    title: "Improved Market Visibility",
    description:
      "Many procurement portals allow vendors to showcase their products and services, helping improve visibility among buyers and procurement agencies.",
  },

  {
    title: "Digital Procurement Readiness",
    description:
      "With e-procurement becoming standard across industries, portal registration helps businesses stay prepared for digital procurement systems and online tender participation.",
  },
];

/* =========================================================
   PORTALS
========================================================= */

const portals = [
  {
    title: "Government Procurement Portals",
    items: [
      "GeM Portal",
      "CPP Portal",
      "State e-Tender Portals",
      "Municipal Corporation Portals",
      "Smart City Procurement Portals",
      "Departmental Tender Portals",
    ],
  },

  {
    title: "PSU & Infrastructure Procurement Portals",
    items: [
      "Railway Procurement Systems",
      "Oil & Gas PSU Portals",
      "Power & Energy Procurement Portals",
      "Infrastructure Authority Portals",
      "Engineering Procurement Systems",
    ],
  },

  {
    title: "Specialized Procurement Platforms",
    items: [
      "Defence Procurement Portals",
      "Healthcare Procurement Platforms",
      "Medical Equipment Procurement Systems",
      "Educational Institution Procurement Portals",
      "Utility & Engineering Portals",
    ],
  },
];

/* =========================================================
   WHY CHOOSE
========================================================= */

const whyChoose = [
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
        Multi-Portal
        <br />
        Registration
        <br />
        Expertise
      </>
    ),
  },

  {
    title: (
      <>
        Professional
        <br />
        Documentation
        <br />
        Support
      </>
    ),
  },

  {
    title: (
      <>
        End-to-End
        <br />
        Registration
        <br />
        Assistance
      </>
    ),
  },

  {
    title: (
      <>
        Strong
        <br />
        Compliance &amp;
        <br />
        Verification
        <br />
        Process
      </>
    ),
  },
];

/* =========================================================
   HEADER
========================================================= */

function Header() {
  return (
    <header className="relative z-50 border-b-[5px] border-[#D4A017] bg-white shadow-sm">
      <div className="mx-auto flex min-h-[90px] max-w-[1440px] items-center px-4 sm:px-6 md:px-8 xl:px-10">

        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 transition-transform duration-300 hover:scale-[1.01]"
        >
          <img
            src="/images/logo-mark.png"
            alt="Tender Elite"
            className="h-[56px] w-auto object-contain sm:h-[64px] md:h-[70px]"
          />

          <img
            src="/images/logo-wordmark.png"
            alt="Tender Elite"
            className="w-[130px] object-contain sm:w-[155px] md:w-[180px]"
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-2 xl:flex">

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex h-12 min-w-[128px] items-center justify-center rounded-[20px] border border-white bg-[#D4A017] px-5 text-sm font-bold text-black shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_14px_28px_rgba(0,0,0,0.18)]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-2 flex h-12 min-w-[160px] items-center justify-center rounded-[20px] border border-[#FFA629] bg-[#B71432] px-6 text-sm font-bold text-white shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(183,20,50,0.30)]"
          >
            Contact Us
          </Link>

        </nav>

        <details className="relative ml-auto xl:hidden">

          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl bg-[#D4A017] text-[#071B3B] shadow-md">
            <svg
              className="h-6 w-6"
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

          <div className="absolute right-0 top-14 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-xl px-4 py-3 font-bold text-[#071B3B] transition-colors hover:bg-[#D4A017] hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-2 block rounded-xl bg-[#B71432] px-4 py-3 text-center font-bold text-white"
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
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative min-h-[340px] rounded-[18px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 shadow-[0_0_25px_rgba(212,160,23,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(212,160,23,0.28)] sm:min-h-[360px] sm:p-7">

      <h3 className="pr-8 text-center font-serif text-[19px] font-semibold leading-6 tracking-wide text-[#D4A017] sm:text-[21px]">
        {title}
      </h3>

      <div className="mt-6 text-[13px] leading-5 tracking-wide text-white sm:text-[14px] sm:leading-6">
        {children}
      </div>

      <span className="absolute bottom-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#FFA629] text-[15px] font-bold text-[#071B3B] shadow-[0_0_20px_rgba(255,166,41,0.95)] transition-all duration-300 group-hover:scale-110">
        →
      </span>

    </div>
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
    <div className="rounded-[20px] border-[3px] border-[#D4A017] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(212,160,23,0.18)]">

      <h3 className="font-serif text-lg font-semibold leading-6 tracking-wider text-[#D4A017] sm:text-xl">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-6 tracking-wide text-[#071B3B] sm:text-base">
        {description}
      </p>

    </div>
  );
}

/* =========================================================
   PORTAL CARD
========================================================= */

function PortalCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="overflow-hidden rounded-[20px] border-[3px] border-[#D4A017] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(212,160,23,0.18)]">

      <div className="flex min-h-[64px] items-center justify-center border-b-[3px] border-[#D4A017] px-5 text-center">

        <h3 className="font-serif text-lg font-bold leading-6 tracking-wider text-[#071B3B] sm:text-xl">
          {title}
        </h3>

      </div>

      <div className="min-h-[235px] p-7 text-sm leading-6 tracking-wide text-[#071B3B] sm:text-base">

        {items.map((item) => (
          <div
            key={item}
            className="mb-1"
          >
            • {item}
          </div>
        ))}

      </div>

      <div className="pb-5 text-center">

        <Link
          href="/contact"
          className="inline-flex h-10 w-44 items-center justify-center rounded-[20px] bg-[#D4A017] text-sm font-medium text-[#071B3B] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(212,160,23,0.30)]"
        >
          View More
        </Link>

      </div>

    </div>
  );
}

/* =========================================================
   WHY CHOOSE BOX
========================================================= */

function WhyBox({
  value,
  title,
}: {
  value?: string;
  title: React.ReactNode;
}) {
  return (
    <div className="flex h-[224px] w-full items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-white px-5 py-6 text-center shadow-[0_8px_24px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(212,160,23,0.18)]">

      <div className="w-full">

        {value && (
          <div className="font-serif text-[36px] font-extrabold leading-9 tracking-[2px] text-[#D4A017] sm:text-[40px]">
            {value}
          </div>
        )}

        <div
          className={`font-serif text-[23px] font-semibold leading-[1.2] tracking-[2px] text-[#D4A017] sm:text-[25px] ${
            value ? "mt-5" : ""
          }`}
        >
          {title}
        </div>

      </div>

    </div>
  );
}

/* =========================================================
   LOCATIONS
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

export default function TenderPortalRegistrationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071B3B]">

      {/* =========================================================
          HEADER
      ========================================================== */}
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

          {/* MOBILE + TABLET */}
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

      {/* =====================================================
          HERO + SERVICE INTRO
      ====================================================== */}

      <section className="bg-[#071B3B]">

        {/* HERO */}

        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:min-h-[675px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:px-20">

          <div className="max-w-[600px]">

            <h1 className="font-serif text-[46px] font-bold leading-[1.05] text-[#D4A017] sm:text-[54px] md:text-[60px] xl:text-[64px]">
              Tender Portal
              <span className="block">
                Registration
              </span>
            </h1>

            <div className="my-7 h-0.5 w-full max-w-[415px] rounded-full bg-[#D4A017] shadow-[0_0_25px_rgba(212,160,23,1)]" />

            <p className="text-sm leading-7 tracking-wider text-white sm:text-base">
              Tender Elite provides professional Tender Portal Registration
              services for businesses participating in Government,
              Semi-Government, PSU, Municipal Corporation, Railway, Defence,
              Healthcare, and Private Sector tenders across India.
              <br />
              <br />
              We assist companies in completing registrations on various
              e-procurement and tendering portals efficiently and professionally.
              Our team helps businesses understand portal requirements,
              complete documentation, prepare registration forms, and
              coordinate the overall registration process to ensure smooth
              participation in future tenders.
              <br />
              <br />
              With increasing digitization in public procurement, portal
              registration has become an essential requirement for businesses
              looking to participate in e-tenders and online procurement
              opportunities.
              <br />
              <br />
              Our services simplify the complete registration process and help
              organizations become tender-ready across multiple procurement
              platforms.
            </p>

          </div>

          <div className="w-full">

            <div className="overflow-hidden rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.80)]">

              <img
                src="/images/tenderportalregistration.png"
                alt="Tender Portal Registration"
                className="h-[360px] w-full object-cover transition-transform duration-500 hover:scale-[1.02] sm:h-[470px] md:h-[520px] lg:h-[551px]"
              />

            </div>

          </div>

        </div>

        {/* SERVICE INTRO */}

        <div className="mx-auto max-w-[1440px] px-5 pb-14 sm:px-8 sm:pb-16 md:px-10 xl:px-20">

          <div className="border-t-2 border-[#D4A017] pt-9">

            <h2 className="font-serif text-2xl font-bold tracking-[2px] text-[#D4A017] sm:text-3xl">
              Our Tender Portal Registration Services
            </h2>

            <div className="mt-7 rounded-[20px] border-[3px] border-[#D4A017] bg-white p-5 shadow-[0_0_30px_rgba(212,160,23,0.14)] sm:p-7">

              <p className="text-sm font-bold leading-6 tracking-wide text-[#071B3B] sm:text-base">
                Tender Elite assists businesses with registration on various
                Government and Private Tender Portals across India including:
              </p>

              <div className="mt-6 grid gap-x-10 gap-y-2 md:grid-cols-2">

                <div className="text-sm leading-6 tracking-wide text-[#071B3B] sm:text-base">
                  • GeM (Government e-Marketplace)
                  <br />
                  • CPP Portal (Central Public Procurement Portal)
                  <br />
                  • State Government e-Tender Portals
                  <br />
                  • PSU Procurement Portals
                  <br />
                  • Railway Procurement Portals
                  <br />
                  • Defence Procurement Systems
                  <br />
                  • Municipal Corporation Portals
                </div>

                <div className="text-sm leading-6 tracking-wide text-[#071B3B] sm:text-base">
                  • Healthcare Procurement Platforms
                  <br />
                  • Departmental Procurement Systems
                  <br />
                  • Infrastructure Procurement Portals
                  <br />
                  • Smart City Tender Portals
                  <br />
                  • Engineering &amp; Utility Portals
                  <br />
                  • Private Procurement Platforms
                  <br />
                  • Industry-Specific E-Procurement Portals
                </div>

              </div>

            </div>

            <p className="mt-5 text-sm tracking-wide text-white sm:text-base">
              View more other online procurement systems.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          OUR PORTAL REGISTRATION PROCESS
      ====================================================== */}

      <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 md:px-10 xl:px-16 xl:py-20">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Our Portal Registration Process
          </SectionTitle>

          <div className="mx-auto mt-10 max-w-[1180px]">

            {/* ROW 1 */}

            <div className="grid gap-6 md:grid-cols-2">

              <ProcessCard title={processSteps[0].title}>
                {processSteps[0].content}
              </ProcessCard>

              <ProcessCard title={processSteps[1].title}>
                {processSteps[1].content}
              </ProcessCard>

            </div>

            {/* ROW 2 */}

            <div className="mt-6 grid gap-6 md:grid-cols-2">

              <ProcessCard title={processSteps[2].title}>
                {processSteps[2].content}
              </ProcessCard>

              <ProcessCard title={processSteps[3].title}>
                {processSteps[3].content}
              </ProcessCard>

            </div>

            {/* ROW 3 — CENTER */}

            <div className="mx-auto mt-6 max-w-[590px]">

              <ProcessCard title={processSteps[4].title}>
                {processSteps[4].content}
              </ProcessCard>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}

      <section className="bg-[#071B3B] px-5 py-16 text-white sm:px-8 sm:py-20 md:px-10 xl:px-16 xl:py-24">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Benefits of Tender Portal Registration
          </SectionTitle>

          <div className="mx-auto mt-12 grid max-w-[1180px] gap-6 md:grid-cols-2 xl:grid-cols-3">

            {benefits.slice(0, 3).map((benefit) => (
              <BenefitCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
              />
            ))}

          </div>

          <div className="mx-auto mt-6 grid max-w-[900px] gap-6 md:grid-cols-2">

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
          PORTALS WE SUPPORT
      ====================================================== */}

      <section className="bg-[#071B3B] px-5 pb-16 text-white sm:px-8 sm:pb-20 md:px-10 xl:px-16 xl:pb-24">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Portals We Support
          </SectionTitle>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">

            {portals.map((portal) => (
              <PortalCard
                key={portal.title}
                title={portal.title}
                items={portal.items}
              />
            ))}

          </div>

          <p className="mx-auto mt-12 max-w-[1260px] text-center text-base leading-7 tracking-widest text-white sm:text-lg">
            At Tender Elite, we help businesses complete tender portal
            registrations professionally so they can access procurement
            opportunities confidently and participate in tenders efficiently
            across multiple sectors and platforms.
          </p>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE TENDER ELITE
      ====================================================== */}

      <section className="bg-[#071B3B] px-5 pb-14 text-white sm:px-8 sm:pb-16 md:px-10 xl:px-16 xl:pb-20">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Why Choose Tender Elite ?
          </SectionTitle>

          <div className="mx-auto mt-10 grid max-w-[1080px] gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {whyChoose.map((item, index) => (
              <WhyBox
                key={`why-${index}`}
                value={item.value}
                title={item.title}
              />
            ))}

          </div>

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
            Ready To Submit Your Next Tender ?
          </h2>

          <p className="mt-3 font-serif text-2xl font-semibold tracking-[2px] text-white sm:text-3xl">
            Partner with Tender Elite
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-6 flex max-w-[539px] items-center justify-center gap-3 rounded-[30px] bg-[#B71432] px-5 py-3 text-base font-semibold tracking-widest text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(183,20,50,0.32)] sm:text-xl"
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#071B3B]">
              →
            </span>

            Start Your Portal Registration Process

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