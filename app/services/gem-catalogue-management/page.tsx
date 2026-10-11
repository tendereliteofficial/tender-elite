import { slugToTitle as _s } from "@/lib/seo";

export const metadata = {
  title: `${_s("gem-catalogue-management")} Services`,
  description: `Professional ${_s("gem-catalogue-management")} services for government tenders. Tender Elite helps you bid accurately, stay compliant and win more contracts.`,
  alternates: { canonical: "/services/gem-catalogue-management" },
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

const services = [
  {
    title: "GeM Catalogue Creation Support",
    intro:
      "We assist businesses in creating professionally structured GeM catalogues according to portal guidelines and category requirements.",
    label: "Our catalogue creation services include:",
    points: [
      "Product catalogue creation",
      "Service catalogue setup",
      "Category selection support",
      "Product specification management",
      "Product attribute configuration",
      "Product description drafting",
      "Pricing information setup",
      "Compliance detail entry",
      "Product image management",
      "Stock update support",
    ],
    outro:
      "We ensure all catalogues are prepared systematically to improve approval accuracy and procurement visibility.",
  },

  {
    title: "Product Specification Management",
    intro:
      "Accurate product specifications are critical for GeM approvals and procurement participation.",
    label: "Our team assists with:",
    points: [
      "Technical specification updates",
      "Specification corrections",
      "Mandatory attribute management",
      "Product parameter configuration",
      "Technical compliance alignment",
      "Product feature optimization",
      "Category-specific requirement management",
    ],
    outro:
      "This helps businesses maintain accurate and procurement-ready product information on the GeM portal.",
  },

  {
    title: "Catalogue Modification & Updates",
    intro:
      "GeM catalogues often require regular updates due to changes in product specifications, pricing, certifications, or procurement guidelines.",
    label: "We provide support for:",
    points: [
      "Catalogue modifications",
      "Product information updates",
      "Feature revisions",
      "Product detail corrections",
      "Product replacement coordination",
      "Compliance information updates",
      "Product activation & deactivation support",
    ],
    outro:
      "Regular catalogue management helps businesses maintain accurate and updated procurement listings.",
  },

  {
    title: "Pricing Update & Commercial Management",
    intro:
      "Our team assists businesses in managing commercial information and pricing updates across GeM catalogues.",
    label: "This includes:",
    points: [
      "Product price revisions",
      "Commercial information updates",
      "GST & tax information management",
      "Pricing consistency verification",
      "Market-based pricing review",
      "Product commercial alignment",
    ],
    outro:
      "Maintaining updated pricing helps businesses remain competitive and procurement-ready.",
  },

  {
    title: "Compliance & Documentation Management",
    intro:
      "GeM catalogues must comply with portal standards and procurement regulations.",
    label: "Our compliance management support includes:",
    points: [
      "Compliance detail verification",
      "Certification management",
      "OEM authorization coordination",
      "Brand approval support",
      "Product document verification",
      "Mandatory document alignment",
      "Procurement guideline compliance review",
    ],
    outro:
      "This helps businesses maintain proper compliance across their GeM listings.",
  },

  {
    title: "Product Approval & Rejection Resolution Support",
    intro:
      "Many businesses face challenges related to GeM product approvals and listing rejections.",
    label: "Our team assists in:",
    points: [
      "Product approval coordination",
      "Rejection analysis",
      "Specification correction support",
      "Compliance issue resolution",
      "Product re-submission management",
      "Documentation corrections",
      "Category mismatch resolution",
    ],
    outro:
      "We help businesses identify and resolve common GeM catalogue issues to improve approval success rates.",
  },

  {
    title: "Bulk Catalogue Management Support",
    intro:
      "Businesses with large product portfolios often require structured catalogue management support.",
    label: "We assist with:",
    points: [
      "Bulk catalogue updates",
      "Multi-category product management",
      "Large-scale product modifications",
      "Bulk pricing updates",
      "Product database organization",
      "Mass product upload coordination",
      "Catalogue optimization support",
    ],
    outro:
      "This allows businesses to manage extensive product portfolios more efficiently.",
  },

  {
    title: "Catalogue Monitoring & Maintenance",
    intro:
      "Continuous catalogue maintenance is essential for smooth procurement participation.",
    label: "Our team supports businesses with:",
    points: [
      "Regular catalogue review",
      "Product status monitoring",
      "Compliance update coordination",
      "Product visibility management",
      "Procurement readiness checks",
      "Listing maintenance support",
    ],
    outro:
      "This helps businesses maintain active and updated procurement catalogues on the GeM platform.",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    title: "Improved Product Visibility",
    description:
      "Professionally managed catalogues improve product visibility and procurement reach on the GeM portal.",
  },
  {
    title: "Better Procurement Participation",
    description:
      "Accurate and updated catalogues help businesses participate more effectively in Government procurement opportunities.",
  },
  {
    title: "Reduced Listing Errors & Rejections",
    description:
      "Our systematic review process helps reduce common issues related to incorrect specifications, missing compliance details, pricing inconsistencies, category mismatches, and incomplete product attributes.",
  },
  {
    title: "Professional Catalogue Structuring",
    description:
      "Well-organized catalogues improve buyer understanding and procurement presentation quality.",
  },
  {
    title: "Time & Resource Savings",
    description:
      "Businesses can reduce internal workload and administrative effort by outsourcing catalogue management to experienced professionals.",
  },
  {
    title: "Continuous Catalogue Readiness",
    description:
      "Regular updates and monitoring help businesses maintain procurement-ready catalogues aligned with GeM standards.",
  },
];

/* =========================================================
   WHY CHOOSE
========================================================= */

const whyChoose = [
  {
    value: "7000+",
    title: (
      <>
        Products Successfully
        <br />
        Managed on GeM
      </>
    ),
  },

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
        Professional GeM
        <br />
        Catalogue Management
        <br />
        Expertise
      </>
    ),
  },

  {
    title: (
      <>
        Strong Compliance
        <br />
        &amp; Documentation
        <br />
        Support
      </>
    ),
  },

  {
    title: (
      <>
        Multi-Industry
        <br />
        Procurement
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
        &amp; GeM Support
        <br />
        Services
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
    <h2 className="text-center font-serif text-4xl font-bold tracking-[3px] text-[#D4A017] sm:text-5xl md:text-6xl">
      {children}
    </h2>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
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
  outro: string;
}) {
  return (
    <article className="group relative flex h-full flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-5 shadow-[0_0_28px_rgba(212,160,23,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(212,160,23,0.28)] sm:p-6">

      <h3 className="pr-8 text-center font-serif text-[19px] font-semibold leading-6 tracking-wide text-[#D4A017] sm:text-[21px]">
        {title}
      </h3>

      <p className="mt-5 text-[13px] leading-5 tracking-wide text-white sm:text-[14px] sm:leading-6">
        {intro}
      </p>

      <p className="mt-4 text-[13px] font-semibold leading-5 tracking-wide text-white sm:text-[14px] sm:leading-6">
        {label}
      </p>

      <div className="mt-3 grid grid-cols-1 gap-x-7 gap-y-1 text-[12px] leading-5 tracking-wide text-white sm:text-[13px] md:grid-cols-2">

        {points.map((point) => (
          <div key={point}>
            • {point}
          </div>
        ))}

      </div>

      <p className="mt-5 pb-5 text-[13px] leading-5 tracking-wide text-white sm:text-[14px] sm:leading-6">
        {outro}
      </p>

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

export default function GemCatalogueManagementPage() {
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

        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:min-h-[590px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:px-20">

          <div className="max-w-[610px]">

            <h1 className="font-serif text-[43px] font-bold leading-[1.05] text-[#D4A017] sm:text-[52px] md:text-[58px] xl:text-[62px]">
              GeM Catalogue
              <span className="block">
                Management Services
              </span>
            </h1>

            <div className="my-7 h-0.5 w-full max-w-[543px] rounded-full bg-[#D4A017] shadow-[0_0_25px_rgba(212,160,23,1)]" />

            <div className="text-sm leading-6 tracking-wider text-white sm:text-base sm:leading-7">

              Tender Elite offers dedicated GeM Catalogue Management solutions
              designed to help businesses maintain professionally organized and
              procurement-ready product catalogues on the Government
              e-Marketplace platform.

              <br />
              <br />

              Our services focus on catalogue accuracy, compliance management,
              product visibility, and smooth procurement participation across
              various Government buying categories.

            </div>

          </div>

          <div className="w-full">

            <div className="overflow-hidden rounded-[20px] shadow-[0_0_35px_rgba(0,0,0,0.75)]">

              <img
                src="/images/gemcatalogue.png"
                alt="GeM Catalogue Management Services"
                className="h-[350px] w-full object-cover sm:h-[420px] md:h-[480px] lg:h-[500px]"
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
            Our GeM Catalogue Management Services
          </SectionTitle>

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">

            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                intro={service.intro}
                label={service.label}
                points={service.points}
                outro={service.outro}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          7000+ PRODUCTS
      ====================================================== */}

      <section className="bg-white px-5 pb-16 sm:px-8 sm:pb-20 md:px-10 xl:px-16 xl:pb-24">

        <div className="mx-auto max-w-[1280px] rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-7 py-10 shadow-[0_0_30px_rgba(212,160,23,0.16)] sm:px-10 sm:py-12">

          <h2 className="font-serif text-2xl font-bold tracking-[2px] text-[#D4A017] sm:text-3xl">
            7000+ Products Successfully Managed on GeM
          </h2>

          <div className="mt-6 text-sm leading-6 tracking-wide text-white sm:text-base sm:leading-7">

            Tender Elite has successfully assisted businesses with uploading,
            managing, updating, and maintaining more than 7000+ products and
            service listings on the GeM portal across multiple procurement
            categories.

            <br />
            <br />

            Our extensive GeM catalogue management experience allows us to
            efficiently handle:

          </div>

          <div className="mt-6 grid gap-x-10 gap-y-2 text-sm leading-6 tracking-wide text-white md:grid-cols-2 sm:text-base">

            <div>
              • Product listings
              <br />
              • Specification management
              <br />
              • Pricing updates
              <br />
              • Catalogue corrections
            </div>

            <div>
              • Product approval coordination
              <br />
              • Compliance modifications
              <br />
              • Multi-category catalogue management
            </div>

          </div>

          <p className="mt-7 text-sm leading-6 tracking-wide text-white sm:text-base sm:leading-7">
            We have supported businesses across sectors including healthcare,
            infrastructure, industrial equipment, electrical products, IT
            products, office supplies, engineering products, facility
            management services, and many other procurement industries.
          </p>

        </div>

      </section>

      {/* =====================================================
          BENEFITS — 3 × 2
      ====================================================== */}

      <section className="bg-[#071B3B] px-5 py-16 text-white sm:px-8 sm:py-20 md:px-10 xl:px-16 xl:py-24">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Benefits of Professional GeM Catalogue Management
          </SectionTitle>

          {/* EXACTLY 3 CARDS PER ROW ON DESKTOP */}

          <div className="mx-auto mt-12 grid max-w-[1180px] gap-6 md:grid-cols-2 lg:grid-cols-3">

            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="flex min-h-[235px] flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 text-[#071B3B] shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(212,160,23,0.20)]"
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
            At Tender Elite, we help businesses maintain professional,
            compliant, and procurement-ready GeM catalogues that improve
            product visibility and support effective participation in
            Government procurement opportunities.
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
            Need Professional GeM Catalogue Management Support?
          </h2>

          <p className="mt-3 font-serif text-2xl font-semibold tracking-[2px] text-white sm:text-3xl">
            Partner with Tender Elite
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-6 flex max-w-[460px] items-center justify-center gap-3 rounded-[30px] bg-[#B71432] px-5 py-3 text-base font-semibold tracking-widest text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(183,20,50,0.32)] sm:text-lg"
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#071B3B]">
              →
            </span>

            Get GeM Catalogue Support

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