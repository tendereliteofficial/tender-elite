import { withYoast } from "@/lib/yoast-seo";
import { slugToTitle as _s } from "@/lib/seo";

const baseMetadata = {
  title: `${_s("defence-security")} Tender Support`,
  description: `Find, prepare and win ${_s("defence-security")} government tenders in India. Tender Elite offers expert bidding, documentation and compliance support.`,
  alternates: { canonical: "/industries/defence-security" },
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
   GOVERNMENT INVESTMENT
========================================================= */

const governmentInvestment = [
  "Defence Manufacturing",
  "Military Infrastructure",
  "Border Security Infrastructure",
  "Surveillance & Monitoring Systems",
  "Cybersecurity Infrastructure",
  "Aerospace & Defence Electronics",
  "Smart Security Technologies",
  "Defence Communication Systems",
  "Tactical Equipment & Mobility Systems",
  "Homeland Security Infrastructure",
  "Naval & Air Defence Systems",
  "Smart Policing Infrastructure",
];

/* =========================================================
   GOVERNMENT PROCUREMENT
========================================================= */

const governmentProcurement = [
  "Surveillance systems",
  "Security infrastructure solutions",
  "Defence electronics",
  "Communication systems",
  "Engineering & infrastructure services",
  "Cybersecurity solutions",
  "Security manpower services",
  "Border infrastructure systems",
  "Tactical equipment",
  "Facility management services",
  "Smart monitoring systems",
  "IT & networking infrastructure",
];

/* =========================================================
   GOVERNMENT INITIATIVES
========================================================= */

const governmentInitiatives = [
  "Atmanirbhar Bharat for Defence",
  "Make in India – Defence Manufacturing",
  "Defence Industrial Corridor Projects",
  "Border Infrastructure Development",
  "Smart Surveillance Initiatives",
  "Cybersecurity Modernization Programs",
  "Military Infrastructure Modernization",
  "Smart Policing Infrastructure",
  "Defence Electronics Manufacturing",
  "Aerospace Infrastructure Development",
  "Homeland Security Strengthening Programs",
];

/* =========================================================
   PROCUREMENT AUTHORITIES
========================================================= */

const procurementAuthorities = [
  "Ministry of Defence (MoD)",
  "Indian Army",
  "Indian Navy",
  "Indian Air Force",
  "DRDO",
  "Homeland Security Agencies",
  "Border Security Force (BSF)",
  "CRPF",
  "CISF",
  "Defence PSUs",
  "Ordnance Factories",
  "State Police Departments",
];

/* =========================================================
   PROCUREMENT AREAS
========================================================= */

const procurementAreas = [
  [
    "Defence Infrastructure Projects",
    "Surveillance & Monitoring Systems",
    "Security Infrastructure Solutions",
    "Defence Electronics",
    "Communication & Networking Systems",
    "Cybersecurity Solutions",
  ],
  [
    "Border Infrastructure Projects",
    "Facility Management Services",
    "Security Manpower Services",
    "Engineering & Fabrication Works",
    "Tactical Equipment Supply",
  ],
  [
    "Smart Security Technologies",
    "Defence IT Infrastructure",
    "HVAC & Utility Systems",
    "AMC & Maintenance Contracts",
    "Aerospace & Defence Support Services",
  ],
];

/* =========================================================
   CHALLENGES
========================================================= */

const challengeLeft = [
  "Strict technical specifications",
  "Security clearance requirements",
  "Defence vendor registration procedures",
  "OEM authorization requirements",
  "Product testing & certification requirements",
  "Defence quality compliance standards",
];

const challengeRight = [
  "Similar work experience criteria",
  "Confidentiality & compliance obligations",
  "Technical manpower qualification",
  "Multi-stage technical evaluations",
  "Financial qualification requirements",
  "GeM compliance & catalogue requirements",
];

/* =========================================================
   SERVICES
========================================================= */

const supportServices = [
  {
    name: "GeM Registration Services",
    link: "/services/gem-catalogue-management",
  },
  {
    name: "Tender Submission Services",
    link: "/services/tender-submission",
  },
  {
    name: "Tender Portal Registration",
    link: "/services/tender-portal-registration",
  },
  {
    name: "BOQ Preparation & Verification",
    link: "/services/boq-preparation-cost-estimation",
  },
  {
    name: "Bid Documentation Support",
    link: "/services/bid-management-support",
  },
  {
    name: "Technical Tender Assistance",
    link: "/services/tender-documentation-compliance",
  },
];

/* =========================================================
   WHY CHOOSE
========================================================= */

const whyChooseCards = [
  "Professional Defence Procurement Consultancy",
  "Strong Technical Documentation Expertise",
  "Multi-Portal Tender Participation Expertise",
  "GeM & Vendor Registration Assistance",
  "OEM & Compliance Coordination Support",
  "Structured Documentation & Verification Process",
  "Experience Supporting Defence Infrastructure Projects",
  "End-to-End Tender & Procurement Consultancy Services",
];

/* =========================================================
   LOCATIONS
========================================================= */

const locations = [
  {
    name: "Maharashtra",
    image: "/images/maharashtracard.png",
    link: "/states/maharashtra",
  },
  {
    name: "Karnataka",
    image: "/images/karnatakacard.png",
    link: "/states/karnataka",
  },
  {
    name: "Kerala",
    image: "/images/keralacard.png",
    link: "/states/kerala",
  },
  {
    name: "Gujarat",
    image: "/images/gujaratcard.png",
    link: "/states/gujarat",
  },
  {
    name: "Tamil Nadu",
    image: "/images/tamilnaducard.png",
    link: "/states/tamil-nadu",
  },
  {
    name: "Uttar Pradesh",
    image: "/images/uttarpradeshcard.png",
    link: "/states/uttar-pradesh",
  },
  {
    name: "Punjab",
    image: "/images/punjabcard.png",
    link: "/states/punjab",
  },
  {
    name: "Rajasthan",
    image: "/images/rajasthancard.png",
    link: "/states/rajasthan",
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
    <h2
      className="
        text-center
        font-serif
        text-3xl
        font-extrabold
        leading-tight
        tracking-[2px]
        text-[#D4A017]
        sm:text-4xl
        md:text-5xl
      "
    >
      {children}
    </h2>
  );
}

/* =========================================================
   NAVY CARD
========================================================= */

function NavyCard({
  title,
  points,
  className = "",
}: {
  title?: string;
  points: string[];
  className?: string;
}) {
  return (
    <article
      className={`
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-[#071B3B]
        p-7
        text-white
        ${className}
      `}
    >

      {title && (
        <h3 className="text-center font-serif text-xl font-bold leading-7 text-[#D4A017]">
          {title}
        </h3>
      )}

      <div
        className={`
          space-y-1.5
          text-base
          leading-6
          tracking-wide
          ${title ? "mt-5" : ""}
        `}
      >

        {points.map((point) => (
          <div key={point}>
            • {point}
          </div>
        ))}

      </div>

    </article>
  );
}

/* =========================================================
   WHITE CARD
========================================================= */

function WhiteCard({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <article
      className="
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-white
        p-8
        text-[#071B3B]
        shadow-[0_0_30px_rgba(212,160,23,0.10)]
      "
    >

      <h3 className="font-serif text-xl font-bold leading-7 text-[#D4A017]">
        {title}
      </h3>

      <div className="mt-5 space-y-1.5 text-base leading-6">

        {points.map((point) => (
          <div key={point}>
            • {point}
          </div>
        ))}

      </div>

    </article>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  title,
}: {
  title: string;
}) {
  return (
    <Link
      href="/services"
      className="
        group
        flex
        min-h-[150px]
        w-full
        items-center
        justify-center
        overflow-hidden
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-[#071B3B]
        px-6
        py-7
        text-center
        shadow-[0_0_22px_rgba(212,160,23,0.14)]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-2
        hover:border-[#F1C75B]
        hover:shadow-[0_14px_35px_rgba(212,160,23,0.30)]
      "
    >

      <h3
        className="
          w-full
          max-w-full
          break-words
          font-serif
          text-xl
          font-semibold
          leading-7
          tracking-wide
          text-white
        "
      >
        {title}
      </h3>

    </Link>
  );
}

/* =========================================================
   LOCATION / STATE CARD
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
      className="
        group
        relative
        h-[195px]
        w-full
        overflow-hidden
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-[#071B3B]
        shadow-[0_8px_20px_rgba(0,0,0,0.16)]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-2
        hover:border-[#F1C75B]
        hover:shadow-[0_16px_35px_rgba(212,160,23,0.32)]
      "
    >

      {/* IMAGE */}

      <img
        src={image}
        alt={name}
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-500
          ease-out
          group-hover:scale-[1.08]
        "
      />

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-black/20
          transition-all
          duration-300
          group-hover:bg-black/10
        "
      />

      {/* STATE LABEL */}

      <span
        className="
          absolute
          bottom-3
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          rounded-full
          border-2
          border-[#D4A017]
          bg-[#071B3B]
          px-5
          py-1.5
          text-sm
          font-bold
          text-white
          shadow-[0_4px_12px_rgba(0,0,0,0.25)]
          transition-all
          duration-300
          group-hover:border-[#F1C75B]
          group-hover:bg-[#D4A017]
          group-hover:text-[#071B3B]
          group-hover:shadow-[0_5px_16px_rgba(212,160,23,0.35)]
        "
      >
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

export default function DefenceSecurityPage() {
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

        <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-[80px]">

          <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">

            {/* LEFT */}

            <div>

              <h1 className="font-serif text-5xl font-bold leading-[1.06] text-[#D4A017] md:text-6xl">

                Defence{" "}

                <span className="font-sans">
                  &amp;
                </span>{" "}

                Security Industry

              </h1>

              <div className="mt-7 h-[2px] w-96 max-w-full rounded-[20px] bg-[#D4A017]" />

              <div className="mt-7 space-y-5 text-base leading-6 tracking-wide text-white">

                <p>
                  The Defence &amp; Security Industry is one of India&apos;s
                  most strategically important sectors, supporting national
                  security, defence infrastructure, military modernization,
                  homeland security, surveillance systems, border protection,
                  aerospace development, cybersecurity, and critical public
                  safety infrastructure.
                </p>

                <p>
                  The sector includes defence equipment manufacturing,
                  surveillance systems, security infrastructure, defence
                  electronics, communication systems, cybersecurity solutions,
                  military engineering projects, border infrastructure, smart
                  security technologies, tactical systems, facility security
                  services, defence IT systems, and homeland security solutions.
                </p>

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div className="w-full overflow-hidden rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.65)]">

              <img
                src="/images/defence1.png"
                alt="Defence and Security Industry"
                width={666}
                height={468}
                className="block h-auto w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INDUSTRY OVERVIEW
          FIRST = 521 x 346
          SECOND = 521 x 271
      ====================================================== */}

      <section className="bg-white px-6 py-12 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <div className="grid items-start gap-10 lg:grid-cols-[521px_1fr]">

            {/* IMAGES */}

            <div className="space-y-6">

              {/* FIRST PHOTO */}

              <div className="w-[521px] max-w-full overflow-hidden rounded-[20px]">

                <img
                  src="/images/defence2.png"
                  alt="Defence Industry Overview"
                  width={521}
                  height={346}
                  className="
                    block
                    h-[346px]
                    w-[521px]
                    max-w-full
                    rounded-[20px]
                    object-cover
                    shadow-[0_0_30px_rgba(0,0,0,0.35)]
                  "
                />

              </div>

              {/* SECOND PHOTO */}

              <div className="w-[521px] max-w-full overflow-hidden rounded-[20px]">

                <img
                  src="/images/defence3.png"
                  alt="Defence Security Operations"
                  width={521}
                  height={271}
                  className="
                    block
                    h-[271px]
                    w-[521px]
                    max-w-full
                    rounded-[20px]
                    object-cover
                    shadow-[0_0_30px_rgba(0,0,0,0.35)]
                  "
                />

              </div>

            </div>

            {/* TEXT */}

            <div>

              <h2 className="text-xl tracking-wide text-[#071B3B]">
                INDUSTRY OVERVIEW
              </h2>

              <div className="mt-8 space-y-5 text-base leading-6 tracking-wide text-gray-600">

                <p>
                  India&apos;s growing focus on defence modernization,
                  indigenous manufacturing, infrastructure strengthening,
                  strategic security systems, and technology-driven defence
                  capabilities has significantly increased procurement
                  opportunities within the defence and security sector.
                </p>

                <p>
                  Government organizations such as the Ministry of Defence
                  (MoD), Indian Army, Indian Navy, Indian Air Force, DRDO,
                  Border Security Forces, Defence PSUs, Ordnance Factories,
                  Defence Infrastructure Organizations, paramilitary forces,
                  police departments, homeland security agencies, and public
                  safety authorities regularly procure defence systems,
                  security technologies, surveillance infrastructure,
                  engineering services, communication systems, facility
                  management services, and specialized security solutions
                  through structured procurement and tendering processes.
                </p>

                <p>
                  The Government of India continues to strengthen the sector
                  through initiatives such as Atmanirbhar Bharat, Make in India
                  for Defence, Defence Industrial Corridors, military
                  modernization programs, border infrastructure projects,
                  smart surveillance initiatives, cybersecurity programs, and
                  indigenous defence manufacturing policies.
                </p>

                <p>
                  Due to the highly sensitive and technically complex nature of
                  defence procurement projects, businesses participating in this
                  sector are required to manage strict technical
                  specifications, security clearances, compliance standards,
                  quality certifications, OEM authorizations, defence vendor
                  registrations, and detailed procurement documentation
                  professionally.
                </p>

                <p>
                  Tender Elite provides specialized tender consultancy and
                  procurement support services for defence contractors,
                  security solution providers, surveillance system companies,
                  engineering firms, defence equipment suppliers,
                  infrastructure companies, cybersecurity firms, facility
                  management companies, and technology solution providers
                  across India.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MARKET SIZE & GROWTH
      ====================================================== */}

      <section className="bg-[#071B3B] px-6 py-14 text-white lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Defence{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Security Industry Market Size{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Industry Growth
          </SectionTitle>

          <div className="mt-8 space-y-5 text-base leading-6 tracking-wide text-slate-200">

            <p>
              India&apos;s Defence &amp; Security Industry is one of the
              fastest-growing strategic procurement sectors supported by
              continuous Government investment in military modernization,
              defence infrastructure, border security, surveillance
              technologies, cybersecurity systems, and indigenous manufacturing
              capabilities.
            </p>

            <p>
              India&apos;s defence budget continues to increase annually, with
              total defence expenditure exceeding approximately Rs. 6 lakh crore
              in recent Union Budgets, making it one of the largest Government
              procurement sectors in the country.
            </p>

          </div>

          {/* GOVERNMENT INVESTMENT */}

          <div className="mt-10 rounded-[20px] border-[3px] border-[#D4A017] bg-white p-8 text-[#071B3B]">

            <h3 className="font-serif text-xl font-bold leading-7 text-[#D4A017]">
              The Government is continuously investing in:
            </h3>

            <div className="mt-5 grid gap-x-10 gap-y-1.5 md:grid-cols-2">

              {governmentInvestment.map((item) => (
                <div key={item}>
                  • {item}
                </div>
              ))}

            </div>

            <p className="mt-6 text-base leading-6">
              India&apos;s defence manufacturing market is expected to exceed
              US$ 25 billion in the coming years, supported by indigenous
              manufacturing initiatives, FDI reforms, private sector
              participation, and strategic defence infrastructure investments.
            </p>

            <p className="mt-5 text-base leading-6">
              The Defence Industrial Corridors in Uttar Pradesh and Tamil
              Nadu, along with the Make in India initiative, are creating
              significant procurement and industrial participation opportunities
              for engineering companies, manufacturers, technology providers,
              infrastructure firms, and security solution companies.
            </p>

          </div>

          {/* PROCUREMENT */}

          <div className="mt-7 rounded-[20px] border-[3px] border-[#D4A017] bg-white p-8 text-[#071B3B]">

            <h3 className="font-serif text-xl font-bold leading-7 text-[#D4A017]">
              Government organizations and procurement authorities regularly
              procure:
            </h3>

            <div className="mt-5 grid gap-x-10 gap-y-1.5 md:grid-cols-2">

              {governmentProcurement.map((item) => (
                <div key={item}>
                  • {item}
                </div>
              ))}

            </div>

            <p className="mt-6 font-semibold">
              through structured procurement and tendering systems.
            </p>

            <p className="mt-5 text-base leading-6">
              The continuous expansion of India&apos;s defence and security
              ecosystem has significantly increased the demand for professional
              tender consultancy, technical documentation support, vendor
              registration assistance, OEM coordination, compliance management,
              GeM services, procurement documentation support, and post-tender
              consultancy services for businesses operating in this sector.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          GOVERNMENT INITIATIVES
      ====================================================== */}

      <section className="bg-white px-6 py-14 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Government Defence{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Security Procurement Initiatives
          </SectionTitle>

          <p className="mx-auto mt-6 max-w-[1046px] text-center text-base leading-6 text-gray-600">
            India&apos;s defence and security sector is supported by major
            Government modernization and infrastructure development programs.
          </p>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">

            <NavyCard
              title="Major Government initiatives include:"
              points={governmentInitiatives}
            />

            <NavyCard
              title="Defence procurement activities are regularly managed by:"
              points={procurementAuthorities}
            />

          </div>

          <p className="mx-auto mt-7 max-w-[1000px] text-center text-base leading-6">
            These organizations regularly procure defence systems,
            surveillance technologies, engineering infrastructure,
            communication systems, cybersecurity solutions, facility
            management services, and specialized security systems through
            structured procurement systems.
          </p>

        </div>

      </section>

      {/* =====================================================
          PROCUREMENT AREAS
      ====================================================== */}

      <section className="bg-white px-6 py-14 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Defence{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Security Procurement Areas We Support
          </SectionTitle>

          <p className="mx-auto mt-6 max-w-[836px] text-center text-base leading-6">
            Tender Elite provides procurement consultancy and tender support
            services for areas including:
          </p>

          <div className="mt-9 grid gap-7 lg:grid-cols-3">

            {procurementAreas.map((column, index) => (
              <NavyCard
                key={index}
                points={column}
                className="min-h-[240px]"
              />
            ))}

          </div>

          <p className="mt-7 text-center text-base leading-6">
            and many other defence and security-related procurement categories.
          </p>

        </div>

      </section>

      {/* =====================================================
          COMMON PROCUREMENT CHALLENGES
      ====================================================== */}

      <section className="bg-white px-6 py-12 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Common Procurement Challenges in the Defence{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Security Industry
          </SectionTitle>

          <p className="mx-auto mt-6 max-w-[984px] text-center text-base leading-6">
            Defence and security tenders often involve highly technical and
            compliance-intensive requirements such as:
          </p>

          <div className="mx-auto mt-8 grid max-w-[1040px] gap-7 lg:grid-cols-2">

            <NavyCard points={challengeLeft} />

            <NavyCard points={challengeRight} />

          </div>

          <p className="mx-auto mt-7 max-w-[984px] text-center text-base font-bold leading-6">
            Proper management of these requirements is critical for successful
            procurement participation and technical qualification.
          </p>

        </div>

      </section>

      {/* =====================================================
          HOW TENDER ELITE SUPPORTS
          3 x 2
      ====================================================== */}

      <section className="bg-white px-6 py-12 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <h2 className="text-center font-serif text-4xl font-extrabold leading-tight tracking-[2px] text-[#D4A017] md:text-5xl">
            How Tender Elite Supports Defence{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Security Businesses
          </h2>

          <p className="mx-auto mt-6 max-w-[984px] text-center text-base leading-6">
            Tender Elite helps defence contractors, infrastructure companies,
            and security solution providers manage procurement participation
            professionally through structured consultancy and documentation
            support services.
          </p>

          <p className="mt-4 text-center text-base font-bold">
            Our services include:
          </p>

          <div className="mx-auto mt-9 grid max-w-[1084px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

{supportServices.map((service) => (
  <Link
    key={service.name}
    href={service.link}
                className="
                  group
                  flex
                  min-h-[150px]
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[20px]
                  border-[3px]
                  border-[#D4A017]
                  bg-[#071B3B]
                  px-6
                  py-7
                  text-center
                  shadow-[0_0_22px_rgba(212,160,23,0.14)]
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-2
                  hover:border-[#F1C75B]
                  hover:shadow-[0_14px_35px_rgba(212,160,23,0.30)]
                "
              >

                <h3
                  className="
                    w-full
                    max-w-full
                    break-words
                    font-serif
                    text-[20px]
                    font-semibold
                    leading-7
                    tracking-wide
                    text-white
                    sm:text-[21px]
                  "
                >
                  {service.name}
                </h3>

              </Link>
            ))}

          </div>

          <div className="mt-7 text-center">

            <Link
              href="/services"
              className="
                inline-flex
                min-w-[176px]
                items-center
                justify-center
                rounded-2xl
                bg-[#D4A017]
                px-10
                py-3
                text-base
                font-medium
                text-[#071B3B]
                shadow-[0_10px_20px_rgba(0,0,0,0.15)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_28px_rgba(212,160,23,0.28)]
              "
            >
              View More
            </Link>

          </div>

          <p className="mx-auto mt-8 max-w-[984px] text-center text-base font-bold leading-6">
            We help businesses improve procurement readiness, technical
            documentation quality, compliance management, and tender
            participation efficiency.
          </p>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B3B] px-6 py-14 text-white lg:px-[80px]">

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.07]
            bg-[repeating-linear-gradient(90deg,#B71432_0px,#B71432_28px,transparent_28px,transparent_54px)]
          "
        />

        <div className="relative mx-auto max-w-[1280px]">

          <h2 className="text-center font-serif text-4xl font-bold leading-tight tracking-[2px] text-[#D4A017] md:text-5xl">
            Why Defence Businesses Choose Tender Elite
          </h2>

          <div className="mx-auto mt-10 grid max-w-[1196px] gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {whyChooseCards.map((title) => (
              <article
                key={title}
                className="
                  flex
                  min-h-[245px]
                  items-center
                  justify-center
                  rounded-[20px]
                  border-2
                  border-[#D4A017]
                  bg-white
                  p-7
                  text-center
                  shadow-[0_8px_25px_rgba(0,0,0,0.14)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_14px_32px_rgba(212,160,23,0.24)]
                "
              >

                <h3 className="font-serif text-xl font-semibold leading-8 tracking-[1.2px] text-[#D4A017] sm:text-2xl">
                  {title}
                </h3>

              </article>
            ))}

          </div>

          <p className="mx-auto mt-9 max-w-[1196px] text-center font-serif text-xl font-medium leading-8 tracking-wide text-white">
            At Tender Elite, we help defence and security businesses manage
            procurement participation professionally through structured tender
            consultancy, technical documentation support, compliance
            coordination, and procurement assistance that improves
            participation readiness and operational efficiency.
          </p>

        </div>

      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */}

      <section className="bg-white px-6 py-14 lg:px-[80px]">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Locations We Serve
          </SectionTitle>

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {locations.map((location) => (
              <LocationCard
                key={location.name}
                name={location.name}
                image={location.image}
                link={location.link}
              />
            ))}

          </div>

          <div className="mt-8 text-center">

            <Link
              href="/locations"
              className="
                inline-flex
                rounded-2xl
                bg-[#D4A017]
                px-10
                py-3
                text-base
                font-medium
                text-[#071B3B]
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_25px_rgba(212,160,23,0.28)]
              "
            >
              View More
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-white px-6 py-10 lg:px-[80px]">

        <div className="mx-auto max-w-[1167px] rounded-[30px] bg-[#071B3B] px-8 py-12 text-center">

          <h2 className="font-serif text-3xl font-semibold leading-tight tracking-[2px] text-[#D4A017]">

            Need Professional Defence{" "}

            <span className="font-sans">
              &amp;
            </span>{" "}

            Security Tender Consultancy Support?

          </h2>

          <p className="mx-auto mt-6 max-w-[1035px] font-serif text-lg font-semibold leading-6 tracking-widest text-white">
            Get expert assistance for defence tender participation, security
            procurement documentation, vendor registration, GeM support,
            technical bid preparation, and procurement compliance management.
          </p>

          <Link
            href="/contact"
            className="
              mx-auto
              mt-8
              flex
              max-w-[455px]
              items-center
              justify-center
              gap-3
              rounded-[30px]
              bg-[#B71432]
              px-6
              py-3
              text-base
              font-semibold
              tracking-widest
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#971029]
            "
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#071B3B]">
              →
            </span>

            Get Defence Tender Support

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
  return withYoast("/industries/defence-security", baseMetadata);
}
