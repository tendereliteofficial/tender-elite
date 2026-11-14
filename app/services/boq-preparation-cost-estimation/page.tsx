import { withYoast } from "@/lib/yoast-seo";
import { slugToTitle as _s } from "@/lib/seo";

const baseMetadata = {
  title: `${_s("boq-preparation-cost-estimation")} Services`,
  description: `Professional ${_s("boq-preparation-cost-estimation")} services for government tenders. Tender Elite helps you bid accurately, stay compliant and win more contracts.`,
  alternates: { canonical: "/services/boq-preparation-cost-estimation" },
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
   SERVICES
========================================================= */

const services = [
  {
    title: "Tender Scope & BOQ Requirement Analysis",
    intro:
      "Our process begins with a detailed review of the tender document, project scope, drawings, specifications, and BOQ formats provided by the procurement authority.",
    label: "We analyze:",
    points: [
      "Scope of Work",
      "Technical Specifications",
      "BOQ Formats",
      "Quantity Requirements",
      "Tender Conditions",
      "Commercial Terms",
      "Measurement Standards",
      "Project Execution Requirements",
      "Supply & Installation Scope",
      "Compliance Requirements",
    ],
    outro:
      "This helps us understand the complete commercial structure of the project before preparing the estimation.",
  },

  {
    title: "BOQ Preparation Support",
    intro:
      "Our team assists clients in preparing structured and professional BOQ documents according to tender requirements.",
    label: "BOQ preparation support includes:",
    points: [
      "Item-wise BOQ preparation",
      "Quantity structuring",
      "BOQ formatting",
      "Unit analysis",
      "Schedule of quantities preparation",
      "Rate inclusion support",
      "Commercial format preparation",
      "Tender-specific BOQ alignment",
      "Technical BOQ coordination",
    ],
    outro:
      "We ensure that the BOQ is prepared clearly and systematically to improve bid accuracy and presentation quality.",
  },

  {
    title: "Quantity Analysis & Verification",
    intro:
      "Accurate quantity assessment is essential for proper estimation and financial planning.",
    label: "Our team supports clients in:",
    points: [
      "Quantity calculations",
      "Measurement verification",
      "Scope matching",
      "Drawing-based quantity assessment",
      "Item quantity reconciliation",
      "Material quantity analysis",
      "Execution quantity review",
    ],
    outro:
      "This process helps reduce quantity-related errors and improves overall cost estimation accuracy.",
  },

  {
    title: "Cost Estimation & Financial Structuring",
    intro:
      "We assist clients in preparing detailed cost estimations based on project scope, material requirements, labor involvement, execution methodology, and market conditions.",
    label: "Our cost estimation support includes:",
    points: [
      "Item-wise pricing support",
      "Material cost estimation",
      "Labor cost estimation",
      "Equipment cost analysis",
      "Vendor quotation coordination",
      "Execution cost planning",
      "Financial structuring support",
      "Commercial analysis",
      "Cost comparison review",
    ],
    outro:
      "Proper preparation of commercial documentation helps maintain consistency and avoid pricing-related submission errors.",
  },

  {
    title: "Rate Analysis Support",
    intro:
      "Proper rate analysis is critical for maintaining pricing accuracy and commercial competitiveness.",
    label: "Our team assists in:",
    points: [
      "Market rate analysis",
      "Material pricing review",
      "Labor rate evaluation",
      "Vendor quotation comparison",
      "BOQ item rate verification",
      "Schedule rate comparison",
      "Commercial benchmarking",
    ],
    outro:
      "This helps businesses understand realistic project costing and avoid underpricing or overpricing risks.",
  },

  {
    title: "Market Trend & Previous Tender Analysis",
    intro:
      "Based on our industry experience, we strongly recommend clients review previous similar tenders, awarded contracts, and historical procurement patterns before finalizing commercial bids.",
    label: "This analysis helps clients understand:",
    points: [
      "Prevailing market pricing trends",
      "Typical awarded contract values",
      "Competitive pricing ranges",
      "Department procurement patterns",
      "Industry-level commercial benchmarks",
      "Estimated project execution costs",
      "Bid competitiveness in the market",
    ],
    outro:
      "Reviewing past awarded tenders and similar procurement projects provides valuable market insights and helps businesses make more informed commercial decisions.",
  },

  {
    title: "Commercial Bid Planning Support",
    intro:
      "Our team assists clients in organizing commercial submissions professionally by ensuring the pricing structure is aligned with tender requirements.",
    label: "We support:",
    points: [
      "Proper BOQ structuring",
      "Correct commercial formatting",
      "Financial consistency",
      "Tender-specific pricing compliance",
      "Alignment with procurement conditions",
      "Clear item descriptions",
      "Organized pricing presentation",
    ],
    outro:
      "A professionally structured commercial submission improves bid clarity and overall presentation quality.",
  },

  {
    title: "Documentation & Compliance Coordination",
    intro:
      "BOQ and estimation documents must comply with tender requirements and procurement guidelines.",
    label: "We assist in:",
    points: [
      "BOQ format verification",
      "Financial document coordination",
      "Commercial annexure preparation",
      "Tender compliance review",
      "Submission format alignment",
      "Multi-level document verification",
    ],
    outro:
      "This helps reduce commercial bid rejection risks caused by incorrect formats or pricing inconsistencies.",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    title: "Improved Pricing Accuracy",
    description:
      "Proper quantity analysis and structured estimation reduce the possibility of pricing errors and commercial inconsistencies.",
  },
  {
    title: "Professional Commercial Presentation",
    description:
      "Well-structured BOQs and organized pricing formats improve the overall quality and professionalism of the bid submission.",
  },
  {
    title: "Better Tender Planning",
    description:
      "Accurate BOQ preparation helps businesses plan procurement, execution, manpower, and project budgeting more effectively.",
  },
  {
    title: "Better Commercial Competitiveness",
    description:
      "Market-based pricing analysis helps businesses prepare commercially competitive bids aligned with current procurement trends.",
  },
  {
    title: "Reduced Financial Risks",
    description:
      "Systematic cost planning helps businesses avoid underestimation, overestimation, and unexpected execution cost issues.",
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
        Professional BOQ
        <br />
        &amp; Estimation
        <br />
        Support
      </>
    ),
  },

  {
    title: (
      <>
        Strong Commercial
        <br />
        Documentation
        <br />
        Expertise
      </>
    ),
  },

  {
    title: (
      <>
        Multi-Industry
        <br />
        Tender
        <br />
        Experience
      </>
    ),
  },

  {
    title: (
      <>
        Systematic Review
        <br />
        &amp; Verification
        <br />
        Process
      </>
    ),
  },

  {
    title: (
      <>
        End-to-End Tender
        <br />
        Support
        <br />
        Services
      </>
    ),
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

        {/* DESKTOP NAV */}

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

      <h3 className="pr-8 text-center font-serif text-[20px] font-semibold leading-6 tracking-wide text-[#D4A017] sm:text-[22px]">
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

      <p className="mt-5 pb-6 text-[13px] leading-6 tracking-wide text-white sm:text-[14px]">
        {service.outro}
      </p>

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
  benefit,
}: {
  benefit: (typeof benefits)[number];
}) {
  return (
    <article className="flex min-h-[205px] flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 text-[#071B3B] shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(212,160,23,0.20)]">

      <h3 className="font-serif text-[20px] font-bold leading-7 tracking-[1.2px] text-[#D4A017] sm:text-[22px]">
        {benefit.title}
      </h3>

      <p className="mt-5 text-[14px] leading-6 tracking-wide">
        {benefit.description}
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

export default function BOQPreparationCostEstimationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071B3B]">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header />

      {/* =====================================================
          HERO
          ALL TEXT ON LEFT
          IMAGE ON RIGHT
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B3B]">


        <div className="relative mx-auto max-w-[1440px] px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:py-12 xl:px-[70px]">

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">

            {/* =================================================
                LEFT — ALL TEXT
            ================================================= */}

            <div className="w-full">

              <h1 className="font-serif text-[37px] font-bold leading-[1.08] text-[#D4A017] sm:text-[44px] md:text-[50px] lg:text-[54px] xl:text-[60px]">

                BOQ Preparation
                <span className="block">
                  &amp; Cost Estimation
                </span>

              </h1>

              <div className="mt-4 h-[2px] w-full max-w-[540px] rounded-full bg-[#D4A017]" />

              <div className="mt-5 text-[11px] leading-[1.42] tracking-[0.45px] text-white sm:text-[12px] sm:leading-[1.5] md:text-[13px] md:leading-[1.55]">

                <p>
                  Tender Elite provides professional BOQ Preparation &amp; Cost
                  Estimation services for Government, PSU, Municipal
                  Corporation, Railway, Infrastructure, Healthcare, Industrial,
                  and Private Sector tenders across India.
                </p>

                <p className="mt-4">
                  Preparing an accurate BOQ (Bill of Quantities) and competitive
                  cost estimation is one of the most critical aspects of
                  successful tender participation. Proper quantity analysis,
                  item structuring, market pricing evaluation, and financial
                  planning directly impact the competitiveness and profitability
                  of a tender bid.
                </p>

                <p className="mt-4">
                  Our team assists clients in preparing professionally
                  structured BOQs and commercial estimations based on tender
                  specifications, project scope, technical requirements, and
                  prevailing market conditions.
                </p>

                <p className="mt-4">
                  We focus on accuracy, clarity, compliance, and strategic
                  pricing to help businesses submit commercially strong and
                  well-organized bids. With our systematic approach to quantity
                  analysis and estimation planning, we help businesses reduce
                  pricing errors, improve financial structuring, and participate
                  in tenders more confidently.
                </p>

              </div>

              {/* GOLD BOTTOM LINE */}

              <div className="mt-5 h-[2px] w-full max-w-[540px] bg-[#D4A017]" />

            </div>

            {/* =================================================
                RIGHT — IMAGE
            ================================================= */}

            <div className="w-full">

              <div className="overflow-hidden rounded-[18px] shadow-[0_0_30px_rgba(0,0,0,0.65)]">

                <img
                  src="/images/boqcostestimation.png"
                  alt="BOQ Preparation and Cost Estimation"
                  className="block h-[290px] w-full object-cover sm:h-[340px] md:h-[390px] lg:h-[430px] xl:h-[470px]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12 md:px-10 xl:px-16 xl:py-14">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Our BOQ Preparation &amp; Cost Estimation Services
          </SectionTitle>

          <div className="mx-auto mt-8 grid max-w-[1180px] gap-6 lg:grid-cols-2">

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
            Benefits of Professional BOQ &amp; Cost Estimation Support
          </SectionTitle>

          {/* ROW 1 — 3 */}

          <div className="mx-auto mt-10 grid max-w-[1180px] gap-6 lg:grid-cols-3">

            {benefits.slice(0, 3).map((benefit) => (
              <BenefitCard
                key={benefit.title}
                benefit={benefit}
              />
            ))}

          </div>

          {/* ROW 2 — 2 */}

          <div className="mx-auto mt-6 grid max-w-[820px] gap-6 md:grid-cols-2">

            {benefits.slice(3).map((benefit) => (
              <BenefitCard
                key={benefit.title}
                benefit={benefit}
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
            At Tender Elite, we help businesses prepare accurate, competitive,
            and professionally structured BOQs and commercial estimations that
            support better tender participation and informed financial
            decision-making.
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

        <div className="mx-auto max-w-[1062px] rounded-[30px] bg-[#071B3B] px-6 py-10 text-center shadow-[0_15px_40px_rgba(7,27,59,0.18)] sm:px-10 sm:py-12">

          <h2 className="font-serif text-2xl font-semibold leading-8 tracking-[2px] text-[#D4A017] sm:text-3xl sm:leading-10">
            Get accurate BOQ preparation, rate analysis, and commercial
            estimation assistance for your upcoming tenders.
          </h2>

          <p className="mt-5 font-serif text-2xl font-semibold tracking-[2px] text-white sm:text-3xl">
            Partner with Tender Elite
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-6 flex max-w-[460px] items-center justify-center gap-3 rounded-[30px] bg-[#B71432] px-5 py-3 text-base font-semibold tracking-widest text-white shadow-md transition-all duration-300 hover:-translate-y-1 sm:text-lg"
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#071B3B]">
              →
            </span>

            Get BOQ Preparation Support

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
  return withYoast("/services/boq-preparation-cost-estimation", baseMetadata);
}
