import { slugToTitle as _s } from "@/lib/seo";

export const metadata = {
  title: `${_s("vendor-assessment-support")} Services`,
  description: `Professional ${_s("vendor-assessment-support")} services for government tenders. Tender Elite helps you bid accurately, stay compliant and win more contracts.`,
  alternates: { canonical: "/services/vendor-assessment-support" },
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
   VENDOR ASSESSMENT SERVICES
========================================================= */

const assessmentServices = [
  {
    title: "GeM Vendor Assessment Support",
    intro:
      "We provide complete assistance for Vendor Assessment processes required on the GeM Portal for OEM and Deemed OEM sellers.",
    label: "Our support includes:",
    points: [
      "Vendor assessment documentation",
      "OEM qualification support",
      "Deemed OEM documentation",
      "Product capability documentation",
      "Manufacturing capability details",
      "Quality compliance support",
      "Infrastructure documentation",
      "Technical specification preparation",
      "Factory & operational information",
      "Compliance declarations",
      "Compliance documentation",
      "Supporting certificate preparation",
      "Submission coordination",
    ],
    outro:
      "We help businesses improve assessment readiness for successful GeM vendor approval.",
  },

  {
    title: "RITES Vendor Registration & Assessment Support",
    intro:
      "Tender Elite provides professional support for vendor registration and vendor assessment processes on the RITES Portal.",
    label: "Our services include:",
    points: [
      "RITES vendor registration support",
      "Vendor assessment documentation",
      "Technical qualification support",
      "Product approval documentation",
      "Experience documentation",
      "Financial documentation",
      "Manufacturing capability records",
      "Compliance documentation",
      "Supporting certificate preparation",
      "Submission coordination",
    ],
    outro:
      "We help businesses organize and prepare documentation according to procurement authority requirements.",
  },

  {
    title: "OEM Registration Support",
    intro:
      "Businesses applying as OEMs often need to demonstrate manufacturing capability, infrastructure, quality systems, and operational capacity.",
    label: "We assist with:",
    points: [
      "OEM documentation preparation",
      "Manufacturing setup documentation",
      "Factory details",
      "Machinery & equipment details",
      "Production capability records",
      "Product catalogues",
      "Technical specifications",
      "Quality certifications",
      "Brand authorization support",
      "Compliance declarations",
    ],
    outro:
      "Our team helps businesses professionally present their manufacturing and operational capabilities during vendor assessments.",
  },

  {
    title: "Deemed OEM Registration Support",
    intro:
      "We provide complete support for businesses applying under Deemed OEM categories on GeM and procurement portals.",
    label: "This includes assistance with:",
    points: [
      "Deemed OEM eligibility documentation",
      "Authorization documentation",
      "Supply chain documentation",
      "Product sourcing records",
      "Technical compliance documentation",
      "Brand association support",
      "Commercial documentation",
      "Vendor assessment coordination",
      "Experience documents",
      "Authorization letters",
      "Digital Signature Certificate (DSC)",
      "Product / Service Details",
      "OEM Certificates",
      "Technical Certifications",
    ],
    outro:
      "We help businesses organize and prepare documentation according to procurement authority requirements.",
  },

  {
    title: "Technical & Compliance Documentation Support",
    intro:
      "Vendor assessments often require detailed technical and compliance verification.",
    label: "We assist businesses in preparing:",
    points: [
      "Technical capability statements",
      "Product specifications",
      "Quality process documentation",
      "ISO certifications",
      "Compliance declarations",
      "Regulatory certificates",
      "Testing certificates",
      "Product approvals",
      "Safety certifications",
      "Industry-specific compliance records",
    ],
    outro:
      "Proper technical and compliance documentation improves procurement credibility and approval readiness.",
  },

  {
    title: "Documentation Preparation & Organization",
    intro:
      "Our team assists businesses in preparing and organizing all required vendor assessment documents professionally.",
    label: "This includes support for:",
    points: [
      "Company profile preparation",
      "PAN & GST documentation",
      "Business registration certificates",
      "Financial statements",
      "Turnover certificates",
      "Banker certificates",
      "Experience certificates",
      "Work order documentation",
      "Completion certificates",
      "Infrastructure details",
      "Manpower information",
      "Machinery details",
      "Product catalogues",
      "Technical documents",
      "OEM authorizations",
      "Compliance declarations",
    ],
    outro:
      "We ensure all documents are properly arranged, verified, and aligned with vendor assessment requirements.",
  },

  {
    title: "Financial Documentation Support",
    intro:
      "Many vendor assessments involve financial evaluation and capability review.",
    label: "We assist clients in preparing:",
    points: [
      "Audited financial statements",
      "Turnover certificates",
      "Net worth certificates",
      "CA certifications",
      "Bank solvency certificates",
      "Financial capability declarations",
    ],
    outro:
      "Proper financial documentation supports vendor qualification and procurement eligibility.",
  },

  {
    title: "Documentation Review & Verification",
    intro:
      "Before final submission, our team conducts detailed verification of all documents.",
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
    outro:
      "This process helps reduce rejection risks caused by incomplete or incorrect documentation.",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    title: "Improved Approval Readiness",
    description:
      "Structured documentation and compliance support improve preparedness for GeM and RITES vendor assessments.",
  },
  {
    title: "Reduced Documentation Errors",
    description:
      "Our systematic review process helps minimize errors related to missing documents, incorrect information, incomplete compliance records, technical documentation gaps, and financial inconsistencies.",
  },
  {
    title: "Better Procurement Opportunities",
    description:
      "Successful vendor approvals help businesses become eligible for Government procurement opportunities, PSU tenders, approved vendor lists, long-term procurement participation, supply contracts, and rate contracts.",
  },
  {
    title: "Professional Documentation Presentation",
    description:
      "Well-organized vendor assessment documentation improves procurement credibility and evaluation quality.",
  },
  {
    title: "Time & Resource Efficiency",
    description:
      "Businesses can reduce internal administrative workload by outsourcing vendor assessment coordination and documentation support to experienced professionals.",
  },
];

/* =========================================================
   WHY CHOOSE
========================================================= */

const whyChoose = [
  {
    value: "200+",
    title: (
      <>
        Vendor Assessments
        <br />
        Successfully Completed
      </>
    ),
  },

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
    title: (
      <>
        Specialized GeM
        <br />
        Vendor Assessment Support
      </>
    ),
  },

  {
    title: (
      <>
        RITES Vendor Registration
        <br />
        Expertise
      </>
    ),
  },

  {
    title: (
      <>
        OEM &amp; Deemed OEM
        <br />
        Documentation Support
      </>
    ),
  },

  {
    title: (
      <>
        Professional Documentation
        <br />
        &amp; Compliance Expertise
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

function AssessmentCard({
  service,
}: {
  service: (typeof assessmentServices)[number];
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
   BENEFIT CARD
========================================================= */

function BenefitCard({
  benefit,
}: {
  benefit: (typeof benefits)[number];
}) {
  return (
    <article className="flex min-h-[205px] flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 text-[#071B3B] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(212,160,23,0.20)]">

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
    <article className="flex min-h-[220px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-white px-5 py-7 text-center shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(212,160,23,0.20)]">

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

export default function VendorAssessmentSupportPage() {
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
                Vendor Assessment
                <span className="block">
                  Support Services
                </span>
              </h1>

              <div className="mt-4 h-[2px] w-full max-w-[525px] rounded-full bg-[#D4A017]" />

              <div className="mt-5 text-[12px] leading-[1.5] tracking-[0.55px] text-white sm:text-[13px] sm:leading-[1.55] md:text-[14px]">

                <p>
                  Tender Elite provides professional Vendor Assessment Support
                  services for businesses seeking vendor approval, OEM
                  registration, and Deemed OEM qualification on the GeM Portal
                  and RITES Vendor Registration Portal.
                </p>

                <p className="mt-4">
                  Vendor assessment processes on GeM and RITES are essential for
                  businesses looking to participate in Government procurement
                  opportunities, PSU tenders, rate contracts, supply contracts,
                  and approved vendor registrations. These assessments involve
                  evaluation of a company&apos;s manufacturing capability,
                  infrastructure, technical expertise, financial strength,
                  certifications, product quality, compliance status, and
                  operational capacity.
                </p>

                <p className="mt-4">
                  Our team assists businesses in preparing, organizing,
                  reviewing, and managing the complete vendor assessment and
                  registration process professionally and systematically. We
                  help clients compile required documentation, coordinate
                  compliance requirements, prepare technical submissions, and
                  improve assessment readiness for successful vendor approval.
                </p>

              </div>

              <div className="mt-5 h-[2px] w-full max-w-[525px] rounded-full bg-[#D4A017]" />

            </div>

            {/* RIGHT IMAGE */}

            <div className="w-full">

              <div className="overflow-hidden rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.75)]">

                <img
                  src="/images/Vendor Assesment.png"
                  alt="Vendor Assessment Support Services"
                  className="block h-[290px] w-full object-cover sm:h-[350px] md:h-[410px] lg:h-[450px] xl:h-[500px]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          VENDOR ASSESSMENT SERVICES
      ====================================================== */}

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-14 md:px-10 xl:px-16 xl:py-16">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Our Vendor Assessment Support Services
          </SectionTitle>

          <div className="mx-auto mt-10 grid max-w-[1180px] gap-6 lg:grid-cols-2">

            {assessmentServices.map((service) => (
              <AssessmentCard
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
            Benefits of Professional Vendor Assessment Support
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

          {/* ROW 2 — 2 CENTERED */}

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
            At Tender Elite, we help businesses complete GeM and RITES vendor
            assessments professionally through structured documentation
            support, compliance coordination, and procurement assistance that
            improves approval readiness and procurement participation
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
            Need Professional Vendor Assessment Support?
          </h2>

          <p className="mt-5 font-serif text-xl font-semibold leading-8 tracking-[2px] text-white sm:text-2xl">
            Get expert assistance for GeM Vendor Assessment, RITES Vendor
            Registration, OEM Registration, and Deemed OEM documentation
            support.
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-7 flex max-w-[460px] items-center justify-center gap-3 rounded-[30px] bg-[#B71432] px-5 py-3 text-base font-semibold tracking-widest text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#971029] hover:shadow-[0_12px_30px_rgba(183,20,50,0.32)] sm:text-lg"
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#071B3B]">
              →
            </span>

            Get Vendor Assessment Support

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