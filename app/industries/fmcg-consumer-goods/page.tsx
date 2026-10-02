import Link from "next/link";
import type { ReactNode } from "react";

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
   SECTOR CONTRIBUTIONS
========================================================= */

const sectorContributions = [
  "Manufacturing Growth",
  "Employment Generation",
  "Retail Expansion",
  "Food Processing Infrastructure",
  "Supply Chain Development",
  "Consumer Product Distribution",
  "Institutional Procurement",
  "Hospitality & Healthcare Supply Systems",
];

/* =========================================================
   GOVERNMENT INVESTMENT
========================================================= */

const governmentInvestment = [
  "Food Processing Infrastructure",
  "Nutritional Supply Programs",
  "Public Distribution Systems",
  "Mid-Day Meal Programs",
  "Healthcare & Hygiene Infrastructure",
  "Institutional Supply Networks",
  "Digital Procurement Systems",
  "Consumer Goods Manufacturing Expansion",
];

/* =========================================================
   GOVERNMENT PROCUREMENT
========================================================= */

const governmentProcurement = [
  "Food & Beverage Products",
  "Hygiene & Sanitation Supplies",
  "Cleaning Products",
  "Kitchen & Cafeteria Consumables",
  "Packaged Food Products",
  "Office & Housekeeping Consumables",
  "Personal Care Products",
  "Hospitality Consumables",
  "Institutional Supply Materials",
  "Healthcare Consumables",
  "Packaged Drinking Water",
  "Facility-related Consumables",
];

/* =========================================================
   GOVERNMENT INITIATIVES
========================================================= */

const governmentInitiatives = [
  "Make in India",
  "Food Processing Development Programs",
  "Public Distribution System (PDS)",
  "Mid-Day Meal Schemes",
  "Nutrition & Welfare Supply Programs",
  "Swachh Bharat Mission",
  "Healthcare Hygiene Programs",
  "Smart City Infrastructure Programs",
  "Institutional Procurement Modernization",
  "Digital Procurement Initiatives",
];

/* =========================================================
   PROCUREMENT AUTHORITIES
========================================================= */

const procurementAuthorities = [
  "Railways",
  "Defence Organizations",
  "Municipal Corporations",
  "Government Hospitals",
  "Educational Institutions",
  "PSU Organizations",
  "Smart City Authorities",
  "Public Distribution Agencies",
  "Hospitality & Tourism Departments",
  "Healthcare Institutions",
  "State Procurement Departments",
];

/* =========================================================
   PROCUREMENT AREAS
========================================================= */

const procurementAreas = [
  [
    "Food & Beverage Supply Contracts",
    "Hygiene & Cleaning Product Procurement",
    "Housekeeping Consumables",
    "Institutional Supply Contracts",
    "Packaged Food Supply",
  ],
  [
    "Kitchen & Cafeteria Consumables",
    "Personal Care Product Supply",
    "Hospitality Consumables",
    "Office Consumables & Stationery",
    "Packaged Drinking Water Supply",
  ],
  [
    "Healthcare Consumables",
    "Facility Management Consumables",
    "Public Distribution Supply Contracts",
    "Retail & Institutional Supply Systems",
    "AMC & Supply Maintenance Contracts",
  ],
];

/* =========================================================
   CHALLENGES
========================================================= */

const challengeLeft = [
  "Product quality certifications",
  "Food safety compliance requirements",
  "Packaging & labeling standards",
  "Product specification documentation",
  "Pricing consistency requirements",
  "Vendor registration procedures",
];

const challengeRight = [
  "GeM compliance & catalogue requirements",
  "Supply chain & delivery compliance",
  "Product testing & approval requirements",
  "Similar supply experience criteria",
  "Multi-stage technical evaluations",
  "Institutional supply standards",
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
  "Professional FMCG Procurement Consultancy",
  "Strong Documentation & Compliance Expertise",
  "Multi-Portal Tender Participation Expertise",
  "GeM & Vendor Registration Assistance",
  "Structured Documentation & Verification Process",
  "Experience Supporting Institutional Projects",
  "Compliance & Supply Documentation Coordination",
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

      <div
        className="
          mx-auto flex min-h-[72px] w-full max-w-[1440px]
          items-center px-3
          sm:min-h-[82px] sm:px-5
          md:min-h-[90px] md:px-7
          lg:px-10
        "
      >

        {/* LOGO */}

        <Link
          href="/"
          className="
            flex min-w-0 shrink items-center gap-1.5
            transition-transform duration-300 hover:scale-[1.01]
            sm:gap-2
          "
        >
          <img
            src="/images/logo-mark.png"
            alt="Tender Elite mark"
            className="
              h-[44px] w-auto shrink-0 object-contain
              sm:h-[54px] md:h-[64px] lg:h-[68px]
            "
          />

          <img
            src="/images/logo-wordmark.png"
            alt="Tender Elite"
            className="
              h-auto w-[95px] max-w-full object-contain
              sm:w-[130px] md:w-[155px] lg:w-[195px]
            "
          />
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav className="ml-auto hidden items-center gap-2 xl:flex">

          <Link
            href="/"
            className="
              rounded-[20px] border border-slate-200
              bg-[#D4A017] px-6 py-3
              text-sm font-bold text-black
              shadow-[0_8px_18px_rgba(0,0,0,0.12)]
              transition-all duration-200
              hover:-translate-y-0.5 hover:text-white
            "
          >
            Home
          </Link>

          <Link
            href="/services"
            className="
              rounded-[20px] border border-slate-200
              bg-[#D4A017] px-6 py-3
              text-sm font-bold text-black
              shadow-[0_8px_18px_rgba(0,0,0,0.12)]
              transition-all duration-200
              hover:-translate-y-0.5 hover:text-white
            "
          >
            Services
          </Link>

          <Link
            href="/industries"
            className="
              rounded-[20px] border border-slate-200
              bg-[#D4A017] px-6 py-3
              text-sm font-bold text-black
              shadow-[0_8px_18px_rgba(0,0,0,0.12)]
              transition-all duration-200
              hover:-translate-y-0.5 hover:text-white
            "
          >
            Industries
          </Link>

          <Link
            href="/insights"
            className="
              rounded-[20px] border border-slate-200
              bg-[#D4A017] px-6 py-3
              text-sm font-bold text-black
              shadow-[0_8px_18px_rgba(0,0,0,0.12)]
              transition-all duration-200
              hover:-translate-y-0.5 hover:text-white
            "
          >
            Insights
          </Link>

          <Link
            href="/about-us"
            className="
              rounded-[20px] border border-slate-200
              bg-[#D4A017] px-6 py-3
              text-sm font-bold text-black
              shadow-[0_8px_18px_rgba(0,0,0,0.12)]
              transition-all duration-200
              hover:-translate-y-0.5 hover:text-white
            "
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="
              ml-2 rounded-[20px]
              border border-[#FFA629]
              bg-[#B71432]
              px-7 py-3
              text-sm font-bold text-white
              shadow-[0_8px_18px_rgba(0,0,0,0.12)]
              transition-all duration-200
              hover:-translate-y-0.5
            "
          >
            Contact Us
          </Link>

        </nav>

        {/* MOBILE / TABLET NAVIGATION */}

        <details className="relative ml-auto xl:hidden">

          <summary
            className="
              flex h-10 w-10 cursor-pointer list-none
              items-center justify-center rounded-xl
              border border-[#D4A017]
              bg-[#D4A017] text-[#071B3B] shadow-md
              sm:h-11 sm:w-11
            "
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

          <div
            className="
              absolute right-0 top-[48px]
              w-[220px] overflow-hidden rounded-2xl
              border border-slate-200 bg-white p-3
              shadow-[0_15px_35px_rgba(0,0,0,0.18)]
              sm:w-[235px]
            "
          >

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  block rounded-xl px-4 py-3
                  text-base font-bold text-[#071B3B]
                  transition-colors
                  hover:bg-[#D4A017] hover:text-white
                "
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="
                mt-2 block rounded-xl
                bg-[#B71432] px-4 py-3
                text-center text-base font-bold text-white
                transition-colors hover:bg-[#971029]
              "
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
  children: ReactNode;
}) {
  return (
    <h2
      className="
        mx-auto max-w-[1200px]
        text-center font-serif
        text-3xl font-extrabold
        leading-tight tracking-[1px]
        text-[#D4A017]
        sm:text-4xl sm:tracking-[2px]
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
        w-full rounded-[20px]
        border-[3px] border-[#D4A017]
        bg-[#071B3B] p-5 text-white
        sm:p-7
        ${className}
      `}
    >

      {title && (
        <h3
          className="
            text-center font-serif
            text-lg font-bold
            leading-7 text-[#D4A017]
            sm:text-xl
          "
        >
          {title}
        </h3>
      )}

      <div
        className={`
          space-y-1.5 text-sm
          leading-6 tracking-wide
          sm:text-base
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
        w-full rounded-[20px]
        border-[3px] border-[#D4A017]
        bg-white p-5 text-[#071B3B]
        shadow-[0_0_25px_rgba(212,160,23,0.10)]
        sm:p-8
      "
    >

      <h3
        className="
          font-serif text-lg font-bold
          leading-7 text-[#D4A017]
          sm:text-xl
        "
      >
        {title}
      </h3>

      <div className="mt-5 space-y-1.5 text-sm leading-6 sm:text-base">

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
        group flex min-h-[130px] w-full
        items-center justify-center
        overflow-hidden rounded-[20px]
        border-[3px] border-[#D4A017]
        bg-[#071B3B] px-5 py-6
        text-center
        shadow-[0_0_22px_rgba(212,160,23,0.14)]
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-[#F1C75B]
        hover:shadow-[0_14px_35px_rgba(212,160,23,0.30)]
        sm:min-h-[150px]
        sm:px-6 sm:py-7
      "
    >

      <h3
        className="
          w-full max-w-full break-words
          font-serif text-lg font-semibold
          leading-7 tracking-wide
          text-white sm:text-xl
        "
      >
        {title}
      </h3>

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
      className="
        group relative h-[175px] w-full
        overflow-hidden rounded-[20px]
        border-[3px] border-[#D4A017]
        bg-[#071B3B]
        shadow-[0_8px_20px_rgba(0,0,0,0.16)]
        transition-all duration-300
        hover:-translate-y-2
        hover:border-[#F1C75B]
        hover:shadow-[0_16px_35px_rgba(212,160,23,0.32)]
        sm:h-[195px]
      "
    >

      <img
        src={image}
        alt={name}
        className="
          h-full w-full object-cover
          transition-transform duration-500 ease-out
          group-hover:scale-[1.08]
        "
      />

      <div
        className="
          absolute inset-0 bg-black/20
          transition-all duration-300
          group-hover:bg-black/10
        "
      />

      <span
        className="
          absolute bottom-3 left-1/2
          -translate-x-1/2 whitespace-nowrap
          rounded-full border-2 border-[#D4A017]
          bg-[#071B3B] px-4 py-1.5
          text-xs font-bold text-white
          shadow-[0_4px_12px_rgba(0,0,0,0.25)]
          transition-all duration-300
          group-hover:bg-[#D4A017]
          group-hover:text-[#071B3B]
          sm:px-5 sm:text-sm
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

export default function FmcgConsumerGoodsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#071B3B]">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="w-full bg-[#071B3B]">

        <div
          className="
            mx-auto w-full max-w-[1440px]
            px-5 py-10
            sm:px-6 sm:py-12
            lg:px-[80px]
          "
        >

          <div
            className="
              grid items-center gap-8
              lg:grid-cols-[0.82fr_1.18fr]
              lg:gap-12
            "
          >

            {/* LEFT */}

            <div className="min-w-0">

              <h1
                className="
                  font-serif text-4xl font-bold
                  leading-[1.05] text-[#D4A017]
                  sm:text-5xl md:text-6xl
                "
              >
                FMCG{" "}
                <span className="font-sans">
                  &amp;
                </span>{" "}
                Consumer Goods Industry
              </h1>

              <div
                className="
                  mt-6 h-[2px] w-full max-w-[390px]
                  rounded-full bg-[#D4A017]
                "
              />

              <div
                className="
                  mt-6 space-y-5
                  text-sm leading-6
                  tracking-wide text-white
                  sm:text-base
                "
              >

                <p>
                  The FMCG (Fast-Moving Consumer Goods) &amp; Consumer Goods
                  Industry is one of India&apos;s largest and fastest-growing
                  sectors, playing a major role in manufacturing, retail supply
                  chains, public distribution systems, institutional
                  procurement, healthcare supply, food distribution, hygiene
                  management, and consumer product availability across the
                  country.
                </p>

                <p>
                  The industry includes packaged food products, beverages,
                  personal care products, cleaning products, hygiene supplies,
                  household goods, office consumables, stationery products,
                  packaged drinking water, hospitality consumables, kitchen
                  products, dairy products, processed food items, retail
                  consumables, and institutional supply solutions.
                </p>

              </div>

            </div>

            {/* HERO IMAGE */}

            <div
              className="
                w-full overflow-hidden rounded-[20px]
                shadow-[0_0_30px_rgba(0,0,0,0.65)]
              "
            >

              <img
                src="/images/fmcg1.png"
                alt="FMCG and Consumer Goods Industry"
                width={650}
                height={457}
                className="
                  block h-auto max-h-[457px]
                  w-full object-cover
                "
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INDUSTRY OVERVIEW
          TEXT CENTERED BESIDE BOTH IMAGES
      ====================================================== */}

      <section className="w-full bg-white">

        <div
          className="
            mx-auto w-full max-w-[1280px]
            px-5 py-10
            sm:px-6 sm:py-12
            lg:px-[80px]
          "
        >

          <div
            className="
              grid items-center gap-8
              lg:grid-cols-[519px_1fr]
              lg:gap-10
            "
          >

            {/* LEFT - TWO IMAGES */}

            <div className="w-full space-y-5">

              {/* FIRST IMAGE */}

              <div className="w-full overflow-hidden rounded-[20px]">

                <img
                  src="/images/fmcg2.png"
                  alt="FMCG Industry Overview"
                  width={519}
                  height={338}
                  className="
                    block h-auto w-full
                    rounded-[20px] object-cover
                    shadow-[0_0_25px_rgba(0,0,0,0.20)]
                    lg:h-[338px]
                    lg:w-[519px]
                  "
                />

              </div>

              {/* SECOND IMAGE */}

              <div className="w-full overflow-hidden rounded-[20px]">

                <img
                  src="/images/fmcg3.png"
                  alt="Consumer Goods Infrastructure"
                  width={519}
                  height={325}
                  className="
                    block h-auto w-full
                    rounded-[20px] object-cover
                    shadow-[0_0_25px_rgba(0,0,0,0.20)]
                    lg:h-[325px]
                    lg:w-[519px]
                  "
                />

              </div>

            </div>

            {/* RIGHT TEXT */}

            <div className="min-w-0 self-center">

              <h2 className="text-lg tracking-wide text-[#071B3B] sm:text-xl">
                INDUSTRY OVERVIEW
              </h2>

              <div
                className="
                  mt-6 space-y-5
                  text-sm leading-6 tracking-wide
                  text-gray-600 sm:text-base
                "
              >

                <p>
                  India&apos;s growing population, urbanization, increasing
                  consumption patterns, retail expansion, e-commerce growth,
                  healthcare infrastructure development, hospitality sector
                  growth, and Government welfare programs have significantly
                  increased procurement opportunities within the FMCG and
                  consumer goods sector.
                </p>

                <p>
                  Government departments, PSUs, Railways, Defence
                  organizations, Municipal Corporations, hospitals,
                  educational institutions, public distribution agencies,
                  hospitality organizations, smart city authorities, and
                  institutional buyers regularly procure consumer products,
                  food supplies, hygiene products, office consumables,
                  housekeeping materials, packaged goods, and facility-related
                  consumables through structured procurement and tendering
                  processes.
                </p>

                <p>
                  The Government of India continues to support manufacturing
                  and supply chain development through initiatives such as Make
                  in India, food processing infrastructure programs, public
                  healthcare schemes, nutritional supply programs, retail
                  modernization, digital procurement systems, and institutional
                  procurement expansion.
                </p>

                <p>
                  Due to the large-scale and compliance-driven nature of FMCG
                  procurement projects, businesses participating in this sector
                  are required to manage product documentation, quality
                  certifications, food safety compliance, packaging standards,
                  vendor registrations, GeM catalogue requirements, pricing
                  structures, and procurement documentation professionally.
                </p>

                <p>
                  Tender Elite provides specialized tender consultancy and
                  procurement support services for FMCG manufacturers, packaged
                  goods suppliers, hygiene product companies, food processing
                  businesses, institutional suppliers, hospitality consumable
                  providers, consumer goods distributors, and retail supply
                  solution companies across India.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MARKET SIZE & INDUSTRY GROWTH
      ====================================================== */}

      <section className="w-full bg-[#071B3B] text-white">

        <div
          className="
            mx-auto w-full max-w-[1280px]
            px-5 py-12
            sm:px-6 sm:py-14
            lg:px-[80px]
          "
        >

          <SectionTitle>
            FMCG{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Consumer Goods Market Size{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Industry Growth
          </SectionTitle>

          <div
            className="
              mt-7 space-y-5
              text-sm leading-6
              tracking-wide text-slate-200
              sm:text-base
            "
          >

            <p>
              India&apos;s FMCG &amp; Consumer Goods Industry is one of the
              largest sectors in the country&apos;s economy and continues to
              witness strong growth due to increasing consumer demand,
              urbanization, rising disposable income, digital retail
              expansion, institutional procurement growth, and public welfare
              distribution programs.
            </p>

            <p>
              The Indian FMCG market is estimated to exceed US$ 220 billion by
              2027 and continues to expand rapidly across food products,
              personal care products, hygiene products, household consumables,
              and institutional supply categories.
            </p>

          </div>

          {/* TWO MARKET CARDS */}

          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            <WhiteCard
              title="The sector contributes significantly to:"
              points={sectorContributions}
            />

            <WhiteCard
              title="The Government continues to invest in:"
              points={governmentInvestment}
            />

          </div>

          {/* PROCUREMENT DEMAND */}

          <div
            className="
              mx-auto mt-7 w-full max-w-[1000px]
              rounded-[20px]
              border-[3px] border-[#D4A017]
              bg-white p-5 text-[#071B3B]
              sm:p-8
            "
          >

            <h3
              className="
                text-center font-serif
                text-lg font-bold
                leading-7 text-[#D4A017]
                sm:text-xl
              "
            >
              Government and institutional procurement activities continue to
              generate large-scale demand for:
            </h3>

            <div className="mt-6 grid gap-2 md:grid-cols-2">

              {governmentProcurement.slice(0, 6).map((item) => (
                <div
                  key={item}
                  className="text-sm leading-6 sm:text-base"
                >
                  • {item}
                </div>
              ))}

            </div>

          </div>

          <p
            className="
              mx-auto mt-7 max-w-[1280px]
              text-center text-sm leading-6
              tracking-wide text-slate-200
              sm:text-base
            "
          >
            Large procurement opportunities are regularly generated through
            hospitals, Railways, Defence canteens, educational institutions,
            Government welfare schemes, municipal operations, smart city
            infrastructure, and public institutional supply contracts.
          </p>

          <p
            className="
              mx-auto mt-5 max-w-[1280px]
              text-center text-sm leading-6
              tracking-wide text-slate-200
              sm:text-base
            "
          >
            The continuous expansion of India&apos;s FMCG and institutional
            procurement ecosystem has significantly increased the demand for
            professional tender consultancy, vendor registration support, GeM
            catalogue management, compliance coordination, procurement
            documentation assistance, and technical bid preparation services
            for businesses operating in this sector.
          </p>

        </div>

      </section>

      {/* =====================================================
          GOVERNMENT PROCUREMENT INITIATIVES
      ====================================================== */}

      <section className="w-full bg-white">

        <div
          className="
            mx-auto w-full max-w-[1280px]
            px-5 py-12
            sm:px-6 sm:py-14
            lg:px-[80px]
          "
        >

          <SectionTitle>
            Government FMCG{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Consumer Goods Procurement Initiatives
          </SectionTitle>

          <p
            className="
              mx-auto mt-5 max-w-[1028px]
              text-center text-sm leading-6
              tracking-wide text-gray-600
              sm:text-base
            "
          >
            India&apos;s FMCG and consumer goods sector is supported by major
            Government procurement and public distribution initiatives.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            <NavyCard
              title="Major Government initiatives include:"
              points={governmentInitiatives}
            />

            <NavyCard
              title="Procurement activities are regularly managed by:"
              points={procurementAuthorities}
            />

          </div>

          <p
            className="
              mx-auto mt-7 max-w-[1000px]
              text-center text-sm leading-6
              sm:text-base
            "
          >
            These organizations regularly procure consumer products, food
            supplies, hygiene materials, housekeeping consumables, packaged
            products, and institutional supply solutions through structured
            procurement systems.
          </p>

        </div>

      </section>

      {/* =====================================================
          PROCUREMENT AREAS
      ====================================================== */}

      <section className="w-full bg-white">

        <div
          className="
            mx-auto w-full max-w-[1280px]
            px-5 py-12
            sm:px-6 sm:py-14
            lg:px-[80px]
          "
        >

          <SectionTitle>
            FMCG{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Consumer Goods Procurement Areas We Support
          </SectionTitle>

          <p
            className="
              mx-auto mt-5 max-w-[836px]
              text-center text-sm leading-6 sm:text-base
            "
          >
            Tender Elite provides procurement consultancy and tender support
            services for areas including:
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">

            {procurementAreas.map((column, index) => (
              <NavyCard
                key={index}
                points={column}
                className="min-h-0 lg:min-h-[240px]"
              />
            ))}

          </div>

          <p className="mt-6 text-center text-sm leading-6 sm:text-base">
            and many other FMCG and consumer goods-related procurement
            categories.
          </p>

        </div>

      </section>

      {/* =====================================================
          CHALLENGES
      ====================================================== */}

      <section className="w-full bg-white">

        <div
          className="
            mx-auto w-full max-w-[1280px]
            px-5 py-10
            sm:px-6 sm:py-12
            lg:px-[80px]
          "
        >

          <SectionTitle>
            Common Procurement Challenges in the FMCG{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Consumer Goods Industry
          </SectionTitle>

          <p
            className="
              mx-auto mt-5 max-w-[1000px]
              text-center text-sm leading-6
              sm:text-base
            "
          >
            FMCG and consumer goods tenders often involve highly detailed and
            compliance-intensive requirements such as:
          </p>

          <div
            className="
              mx-auto mt-8 grid max-w-[1040px]
              gap-6 lg:grid-cols-2
            "
          >

            <NavyCard points={challengeLeft} />

            <NavyCard points={challengeRight} />

          </div>

          <p
            className="
              mx-auto mt-6 max-w-[984px]
              text-center text-sm font-bold
              leading-6 sm:text-base
            "
          >
            Proper management of these requirements is critical for successful
            procurement participation and vendor qualification.
          </p>

        </div>

      </section>

      {/* =====================================================
          HOW TENDER ELITE SUPPORTS
          3 x 2
      ====================================================== */}

      <section className="w-full bg-white">

        <div
          className="
            mx-auto w-full max-w-[1280px]
            px-5 py-10
            sm:px-6 sm:py-12
            lg:px-[80px]
          "
        >

          <h2
            className="
              mx-auto max-w-[1100px]
              text-center font-serif
              text-3xl font-extrabold
              leading-tight tracking-[1px]
              text-[#D4A017]
              sm:text-4xl md:text-5xl
            "
          >
            How Tender Elite Supports FMCG Businesses
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-[984px]
              text-center text-sm leading-6
              sm:text-base
            "
          >
            Tender Elite helps FMCG manufacturers and consumer goods suppliers
            manage procurement participation professionally through structured
            consultancy and documentation support services.
          </p>

          <p className="mt-4 text-center text-sm font-bold sm:text-base">
            Our services include:
          </p>

          <div
            className="
              mx-auto mt-8 grid w-full max-w-[1084px]
              grid-cols-1 gap-5
              sm:grid-cols-2 lg:grid-cols-3
            "
          >

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

          {/* VIEW MORE */}

          <div className="mt-7 text-center">

            <Link
              href="/services"
              className="
                inline-flex min-w-[160px]
                items-center justify-center
                rounded-2xl
                bg-[#D4A017]
                px-8 py-3
                text-sm font-medium
                text-[#071B3B]
                shadow-[0_10px_20px_rgba(0,0,0,0.15)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_28px_rgba(212,160,23,0.28)]
                sm:text-base
              "
            >
              View More
            </Link>

          </div>

          <p
            className="
              mx-auto mt-7 max-w-[984px]
              text-center text-sm font-bold
              leading-6 sm:text-base
            "
          >
            We help businesses improve procurement readiness, documentation
            quality, compliance management, and tender participation
            efficiency.
          </p>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE
          4 x 2
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-[#071B3B] text-white">

        <div
          className="
            pointer-events-none absolute inset-0
            opacity-[0.07]
            bg-[repeating-linear-gradient(90deg,#B71432_0px,#B71432_28px,transparent_28px,transparent_54px)]
          "
        />

        <div
          className="
            relative mx-auto w-full max-w-[1280px]
            px-5 py-12
            sm:px-6 sm:py-14
            lg:px-[80px]
          "
        >

          <h2
            className="
              mx-auto max-w-[1100px]
              text-center font-serif
              text-3xl font-bold
              leading-tight tracking-[1px]
              text-[#D4A017]
              sm:text-4xl md:text-5xl
            "
          >
            Why FMCG{" "}
            <span className="font-sans">
              &amp;
            </span>{" "}
            Consumer Goods Businesses Choose Tender Elite
          </h2>

          <div
            className="
              mx-auto mt-8 grid w-full max-w-[1196px]
              grid-cols-1 gap-5
              sm:grid-cols-2 lg:grid-cols-4
            "
          >

            {whyChooseCards.map((title) => (
              <article
                key={title}
                className="
                  flex min-h-[195px]
                  items-center justify-center
                  rounded-[20px]
                  border-2 border-[#D4A017]
                  bg-white p-6 text-center
                  shadow-[0_8px_25px_rgba(0,0,0,0.14)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_14px_32px_rgba(212,160,23,0.24)]
                  sm:min-h-[220px]
                  lg:min-h-[245px]
                "
              >

                <h3
                  className="
                    font-serif text-lg font-semibold
                    leading-7 tracking-[1px]
                    text-[#D4A017]
                    sm:text-xl sm:leading-8
                    md:text-2xl
                  "
                >
                  {title}
                </h3>

              </article>
            ))}

          </div>

          <p
            className="
              mx-auto mt-8 max-w-[1196px]
              text-center font-serif
              text-base font-medium leading-7
              tracking-wide text-white
              sm:text-lg md:text-xl md:leading-8
            "
          >
            At Tender Elite, we help FMCG manufacturers and consumer goods
            suppliers manage procurement participation professionally through
            structured tender consultancy, documentation support, compliance
            coordination, and procurement assistance that improves
            participation readiness and operational efficiency.
          </p>

        </div>

      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */}

      <section className="w-full bg-white">

        <div
          className="
            mx-auto w-full max-w-[1280px]
            px-5 py-12
            sm:px-6 sm:py-14
            lg:px-[80px]
          "
        >

          <SectionTitle>
            Locations We Serve
          </SectionTitle>

          <div
            className="
              mt-8 grid grid-cols-1 gap-5
              sm:grid-cols-2 lg:grid-cols-4
            "
          >

            {locations.map((location) => (
              <LocationCard
                key={location.name}
                name={location.name}
                image={location.image}
                link={location.link}
              />
            ))}

          </div>

          <div className="mt-7 text-center">

            <Link
              href="/locations"
              className="
                inline-flex rounded-2xl
                bg-[#D4A017]
                px-8 py-3
                text-sm font-medium
                text-[#071B3B] shadow-md
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_25px_rgba(212,160,23,0.28)]
                sm:px-10 sm:text-base
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

      <section className="w-full bg-white">

        <div
          className="
            mx-auto w-full max-w-[1167px]
            px-5 py-8
            sm:px-6 sm:py-10
          "
        >

          <div
            className="
              rounded-[25px]
              bg-[#071B3B]
              px-5 py-9
              text-center
              sm:rounded-[30px]
              sm:px-8 sm:py-12
            "
          >

            <h2
              className="
                font-serif text-2xl font-semibold
                leading-tight tracking-[1px]
                text-[#D4A017]
                sm:text-3xl sm:tracking-[2px]
              "
            >
              Need Professional FMCG{" "}
              <span className="font-sans">
                &amp;
              </span>{" "}
              Consumer Goods Tender Consultancy Support?
            </h2>

            <p
              className="
                mx-auto mt-5 max-w-[1035px]
                font-serif text-sm font-semibold
                leading-6 tracking-widest text-white
                sm:text-lg
              "
            >
              Get expert assistance for FMCG tender participation, consumer
              goods procurement documentation, vendor registration, GeM
              support, technical bid preparation, and procurement compliance
              management.
            </p>

            <Link
              href="/contact"
              className="
                mx-auto mt-7 flex w-full max-w-[455px]
                items-center justify-center gap-3
                rounded-[30px]
                bg-[#B71432]
                px-5 py-3
                text-sm font-semibold
                tracking-widest text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#971029]
                sm:text-base
              "
            >

              <span
                className="
                  flex h-7 w-7 shrink-0
                  items-center justify-center
                  rounded-full bg-white
                  text-[#071B3B]
                "
              >
                →
              </span>

              Get FMCG Tender Support

            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

    </main>
  );
}