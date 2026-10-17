import { withYoast } from "@/lib/yoast-seo";
import { slugToTitle as _s } from "@/lib/seo";

const baseMetadata = {
  title: `${_s("gem-product-listing-uploading")} Services`,
  description: `Professional ${_s("gem-product-listing-uploading")} services for government tenders. Tender Elite helps you bid accurately, stay compliant and win more contracts.`,
  alternates: { canonical: "/services/gem-product-listing-uploading" },
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
   SERVICES
========================================================= */

const services = [
  {
    title: "GeM Registration & Seller Profile Support",
    intro:
      "Before product listing, businesses must complete proper seller registration and profile setup on the GeM portal.",
    label: "Our team assists with:",
    points: [
      "Seller profile setup",
      "Business information configuration",
      "Category selection",
      "OEM / reseller setup",
      "Brand approval support",
      "Compliance profile management",
    ],
    outro:
      "This helps businesses prepare a professionally structured GeM seller account before product uploads begin.",
  },

  {
    title: "Product Category Identification",
    intro:
      "Selecting the correct product category is essential for proper product visibility and procurement matching on GeM.",
    label: "Our team assists clients in:",
    points: [
      "Identifying suitable GeM categories",
      "Matching products with procurement classifications",
      "Selecting appropriate specifications",
      "Understanding category requirements",
      "Product hierarchy mapping",
    ],
    outro:
      "Correct category selection helps improve discoverability and procurement visibility on the portal.",
  },

  {
    title: "Product Listing & Catalog Creation",
    intro:
      "We provide complete support for creating and uploading professional product catalogs on the GeM portal.",
    label: "Our listing support includes:",
    points: [
      "Product title preparation",
      "Product description drafting",
      "Technical specification management",
      "Product feature structuring",
      "Compliance detail entry",
      "Pricing information updates",
      "Warranty & support details",
      "Product attribute configuration",
      "Unit & packaging details",
      "Service listing support",
    ],
    outro:
      "We ensure all listings are prepared according to GeM procurement guidelines and catalog standards.",
  },

  {
    title: "Product Specification & Compliance Management",
    intro:
      "Accurate technical specifications and compliance details are critical for approval and procurement visibility.",
    label: "Our team assists with:",
    points: [
      "Technical specification alignment",
      "Compliance verification",
      "Mandatory attribute management",
      "Product documentation coordination",
      "Certification updates",
      "OEM specification support",
      "Product comparison alignment",
      "GeM category compliance review",
    ],
    outro:
      "This helps minimize listing rejection risks and improves approval accuracy.",
  },

  {
    title: "Product Image Upload & Catalog Optimization",
    intro:
      "Professional product presentation improves visibility and buyer confidence.",
    label: "We assist clients in:",
    points: [
      "Product image uploads",
      "Catalog image optimization",
      "Product presentation structuring",
      "Product information organization",
    ],
    outro:
      "Well-organized product catalogs help improve product visibility and procurement engagement.",
  },

  {
    title: "Pricing & Commercial Information Support",
    intro:
      "Our team assists businesses in organizing proper commercial details for GeM product listings.",
    label: "This includes:",
    points: [
      "Product pricing updates",
      "Rate structuring support",
      "Unit pricing management",
      "Commercial consistency verification",
      "Price revision coordination",
      "Tax & GST information updates",
    ],
    outro:
      "Proper commercial configuration helps maintain clarity and compliance in procurement transactions.",
  },

  {
    title: "Bulk Product Upload Support",
    intro:
      "Businesses with large product portfolios often require bulk product uploading and catalog management support.",
    label: "Our team assists with:",
    points: [
      "Bulk product uploads",
      "Multi-category product management",
      "Catalog structuring",
      "Product data organization",
      "Large-scale listing coordination",
      "Listing update management",
    ],
    outro:
      "This helps businesses manage extensive product portfolios more efficiently on the GeM portal.",
  },

  {
    title: "Product Modification & Update Support",
    intro:
      "GeM listings often require regular updates due to specification changes, pricing revisions, or procurement requirements.",
    label: "We assist with:",
    points: [
      "Product modifications",
      "Specification updates",
      "Price revisions",
      "Catalog corrections",
      "Compliance updates",
      "Product status management",
      "Additional product uploads",
    ],
    outro:
      "This ensures product catalogs remain updated and procurement-ready.",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    title: "Improved Product Visibility",
    description:
      "Professionally structured listings improve product visibility across Government procurement searches and category browsing.",
  },
  {
    title: "Better Procurement Participation",
    description:
      "Proper product uploads increase the chances of participating in Government buying opportunities through GeM.",
  },
  {
    title: "Reduced Listing Errors & Rejections",
    description:
      "Our compliance verification process helps reduce errors related to incorrect specifications, missing attributes, wrong category selection, incomplete compliance details, and product formatting issues.",
  },
  {
    title: "Professional Catalog Management",
    description:
      "Structured product catalogs improve buyer understanding and enhance procurement presentation quality.",
  },
  {
    title: "Time & Resource Efficiency",
    description:
      "Businesses can save significant internal time and administrative effort by outsourcing GeM listing management to experienced professionals.",
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
              className="mt-2 block rounded-xl bg-[#B71432] px-4 py-3 text-center text-base font-bold text-white"
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
    <article className="group relative flex h-full flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-5 shadow-[0_0_28px_rgba(212,160,23,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(212,160,23,0.28)] sm:p-6">

      <h3 className="pr-8 text-center font-serif text-[19px] font-semibold leading-6 tracking-wide text-[#D4A017] sm:text-[21px]">
        {service.title}
      </h3>

      <p className="mt-5 text-[13px] leading-5 tracking-wide text-white sm:text-[14px] sm:leading-6">
        {service.intro}
      </p>

      <p className="mt-4 text-[13px] font-semibold leading-5 tracking-wide text-white sm:text-[14px] sm:leading-6">
        {service.label}
      </p>

      <div className="mt-3 grid grid-cols-1 gap-x-8 gap-y-1 text-[12px] leading-5 tracking-wide text-white sm:text-[13px] md:grid-cols-2">

        {service.points.map((point) => (
          <div key={point}>
            • {point}
          </div>
        ))}

      </div>

      <p className="mt-5 pb-5 text-[13px] leading-5 tracking-wide text-white sm:text-[14px] sm:leading-6">
        {service.outro}
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

export default function GemProductListingUploadingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071B3B]">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header />

      {/* =====================================================
          HERO
          SCREENSHOT STYLE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B3B]">


        <div className="relative mx-auto max-w-[1440px] px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:py-12 xl:px-20">

          {/* HERO TOP ROW */}

          <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">

            {/* LEFT TEXT */}

            <div className="max-w-[640px]">

              <h1 className="font-serif text-[38px] font-bold leading-[1.08] text-[#D4A017] sm:text-[45px] md:text-[51px] xl:text-[58px]">

                GeM Product Listing
                <span className="block">
                  &amp; Uploading
                </span>

              </h1>

              <div className="mt-4 h-[2px] w-full max-w-[400px] bg-[#D4A017]" />

              <div className="mt-5 text-[11px] leading-[1.35] tracking-[0.6px] text-white sm:text-[12px] sm:leading-[1.45] md:text-[13px] md:leading-[1.5] lg:text-[13px]">

                <p>
                  Tender Elite provides professional GeM Product Listing &amp;
                  Uploading services for businesses looking to sell products
                  and services through the Government e-Marketplace (GeM)
                  portal.
                </p>

                <p className="mt-4">
                  The GeM portal has become one of the most important
                  procurement platforms for Government Departments, PSUs,
                  Municipal Corporations, Railways, Defence Organizations,
                  Healthcare Institutions, Educational Bodies, and various
                  public sector buyers across India.
                </p>

                <p className="mt-4">
                  Proper product listing and catalog management on GeM play a
                  critical role in improving product visibility, procurement
                  reach, and participation in government purchasing
                  opportunities.
                </p>

                <p className="mt-4">
                  Our team assists businesses in creating accurate,
                  professional, and compliant product/service listings
                  according to GeM guidelines and procurement standards.
                </p>

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div className="w-full lg:pt-1">

              <div className="overflow-hidden rounded-[18px] border border-white/10 shadow-[0_12px_35px_rgba(0,0,0,0.55)]">

                <img
                  src="/images/gemproductlisting.png"
                  alt="GeM Product Listing and Uploading"
                  className="h-[350px] w-full object-cover object-center sm:h-[420px] md:h-[480px] lg:h-[500px]"
                />

              </div>

            </div>

          </div>

          {/* FULL WIDTH BOTTOM TEXT */}

          <div className="mt-6 max-w-[1320px] text-[11px] leading-[1.4] tracking-[0.6px] text-white sm:text-[12px] sm:leading-[1.5] md:text-[13px]">

            <p>
              We help organizations manage the complete listing process
              including product categorization, technical specifications,
              descriptions, pricing details, image uploads, compliance
              information, and catalog structuring.
            </p>

            <p className="mt-4">
              With a systematic and detail-oriented approach, we help
              businesses improve their GeM presence and participate more
              effectively in government procurement opportunities.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12 md:px-10 xl:px-16 xl:py-14">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Our GeM Listing &amp; Uploading Services
          </SectionTitle>

          <div className="mx-auto mt-8 grid max-w-[1180px] items-stretch gap-6 lg:grid-cols-2">

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
          7000+ PRODUCTS
      ====================================================== */}

      <section className="bg-white pb-12 sm:pb-14 md:pb-16">

        <div className="mx-auto max-w-[1180px] rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-7 py-9 shadow-[0_0_30px_rgba(212,160,23,0.16)] sm:px-10 sm:py-11">

          <h2 className="font-serif text-2xl font-bold tracking-[2px] text-[#D4A017] sm:text-3xl">
            7000+ Products Successfully Uploaded on GeM
          </h2>

          <p className="mt-5 text-sm leading-6 tracking-wide text-white sm:text-base sm:leading-7">
            Tender Elite has successfully assisted businesses with uploading
            and managing more than 7000+ products and service listings on the
            GeM portal across multiple industries and procurement categories.
          </p>

          <p className="mt-4 text-sm leading-6 tracking-wide text-white sm:text-base sm:leading-7">
            Our extensive experience with GeM catalog management enables us to
            understand platform requirements, category structures,
            specification standards, and listing compliance processes
            efficiently.
          </p>

          <p className="mt-5 text-sm font-semibold leading-6 tracking-wide text-white sm:text-base">
            We have supported businesses across sectors including:
          </p>

          <div className="mt-3 grid gap-x-10 gap-y-1 text-sm leading-6 tracking-wide text-white md:grid-cols-2 sm:text-base">

            <div>
              • Medical &amp; Healthcare Equipment
              <br />
              • Construction Materials
              <br />
              • Electrical Products
              <br />
              • Industrial Equipment
            </div>

            <div>
              • IT &amp; Technology Products
              <br />
              • Office Supplies
              <br />
              • Furniture &amp; Interior Products
              <br />
              • Safety &amp; Security Equipment
              <br />
              • Facility Management Services
              <br />
              • Engineering Products
            </div>

          </div>

          <p className="mt-4 text-sm leading-6 tracking-wide text-white sm:text-base">
            and many other procurement categories.
          </p>

        </div>

      </section>

      {/* =====================================================
          BENEFITS — 3 + 2
      ====================================================== */}

      <section className="bg-[#071B3B] px-5 py-14 text-white sm:px-8 sm:py-16 md:px-10 xl:px-16 xl:py-20">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Benefits of Professional GeM Listing Support
          </SectionTitle>

          {/* ROW 1 — THREE */}

          <div className="mx-auto mt-10 grid max-w-[1180px] gap-6 lg:grid-cols-3">

            {benefits.slice(0, 3).map((benefit) => (
              <article
                key={benefit.title}
                className="flex min-h-[230px] flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 text-[#071B3B] shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1"
              >

                <h3 className="font-serif text-[22px] font-bold leading-7 tracking-[1.5px] text-[#D4A017]">
                  {benefit.title}
                </h3>

                <p className="mt-5 text-[15px] leading-6 tracking-wide">
                  {benefit.description}
                </p>

              </article>
            ))}

          </div>

          {/* ROW 2 — TWO CENTERED */}

          <div className="mx-auto mt-6 grid max-w-[820px] gap-6 md:grid-cols-2">

            {benefits.slice(3).map((benefit) => (
              <article
                key={benefit.title}
                className="flex min-h-[205px] flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 text-[#071B3B] shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1"
              >

                <h3 className="font-serif text-[22px] font-bold leading-7 tracking-[1.5px] text-[#D4A017]">
                  {benefit.title}
                </h3>

                <p className="mt-5 text-[15px] leading-6 tracking-wide">
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

          <p className="mx-auto mt-10 max-w-[1190px] text-center text-sm leading-6 tracking-wider text-white sm:text-base">
            At Tender Elite, we help businesses create professional, compliant,
            and procurement-ready GeM product listings that improve visibility
            and support effective participation in Government procurement
            opportunities.
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

        <div className="mx-auto max-w-[1062px] rounded-[30px] bg-[#071B3B] px-6 py-9 text-center shadow-[0_15px_40px_rgba(7,27,59,0.18)] sm:px-10 sm:py-11">

          <h2 className="font-serif text-2xl font-semibold leading-8 tracking-[2px] text-[#D4A017] sm:text-3xl sm:leading-10">
            Get expert assistance for GeM product listing, catalog management,
            specification updates, and product uploads.
          </h2>

          <p className="mt-4 font-serif text-2xl font-semibold tracking-[2px] text-white sm:text-3xl">
            Partner with Tender Elite
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-6 flex max-w-[460px] items-center justify-center gap-3 rounded-[30px] bg-[#B71432] px-5 py-3 text-base font-semibold tracking-widest text-white shadow-md transition-all duration-300 hover:-translate-y-1 sm:text-lg"
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#071B3B]">
              →
            </span>

            Upload Products on GeM

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
  return withYoast("/services/gem-product-listing-uploading", baseMetadata);
}
