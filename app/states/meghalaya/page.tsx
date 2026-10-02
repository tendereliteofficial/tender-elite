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
   MAJOR CITIES
========================================================= */

const majorCities = [
  "Shillong",
  "Tura",
  "Jowai",
  "Nongpoh",
  "Williamnagar",
  "Baghmara",
  "Resubelpara",
  "Mairang",
];

/* =========================================================
   GOVERNMENT DEVELOPMENT SPENDING
========================================================= */

const developmentAreasLeft = [
  "Road & Highway Development",
  "Tourism Infrastructure",
  "Smart City Projects",
  "Healthcare Infrastructure",
  "Water Supply & Irrigation",
  "Renewable Energy Projects",
];

const developmentAreasRight = [
  "Housing & Urban Development",
  "Railway & Transport Connectivity",
  "Agriculture & Rural Development",
  "Digital Governance Initiatives",
  "Public Infrastructure Modernization",
];

/* =========================================================
   WHY MEGHALAYA
========================================================= */

const tenderImportanceLeft = [
  "Government procurement spending",
  "Tourism infrastructure projects",
  "Highway & road development",
  "Smart city projects",
  "Healthcare infrastructure",
];

const tenderImportanceRight = [
  "Renewable energy initiatives",
  "Rural development projects",
  "Water supply & irrigation schemes",
  "Construction & EPC contracts",
];

/* =========================================================
   GDP DATA
========================================================= */

const gdpData = [
  ["2020 - 21", "₹32,000–35,000 Crore"],
  ["2021 - 22", "₹37,000–40,000 Crore"],
  ["2022 - 23", "₹43,000–46,000 Crore"],
  ["2023 - 24", "₹50,000–54,000 Crore"],
  ["2024 - 25", "₹58,000–62,000 Crore"],
  ["2025–26 (Projected)", "₹66,000–72,000 Crore"],
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    name: "GeM Registration Services",
    link: "/services/tender-portal-registration",
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
  {
    name: "OEM Authorization Support",
    link: "/services/brand-approval-assistance",
  },
  {
    name: "Reverse Auction Support",
    link: "/services/reverse-auction-support",
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
    link: "/industries/pharmaceutical"
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
   FOOTER SERVICES
========================================================= */

const footerServices = [
  "Tender Submission Services",
  "GeM Catalogue Management",
  "Tender Portal Registration",
  "Bid Management",
  "Vendor Assessment",
  "Joint Venture Support",
];

/* =========================================================
   HEADER
========================================================= */

function Header() {
  return (
    <header className="relative z-[100] border-b-4 border-[#D4A017] bg-white">
      <div
        className="
          mx-auto flex min-h-[72px] w-full max-w-[1440px]
          items-center px-3
          sm:min-h-[82px] sm:px-5
          md:px-7
          lg:min-h-[90px] lg:px-10
        "
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-1.5 sm:gap-2"
        >
          <img
            src="/images/logo-mark.png"
            alt="Tender Elite"
            className="
              h-[44px] w-auto object-contain
              sm:h-[54px] md:h-[62px] lg:h-[68px]
            "
          />

          <img
            src="/images/logo-wordmark.png"
            alt="Tender Elite"
            className="
              w-[95px] object-contain
              sm:w-[130px] md:w-[155px] lg:w-[195px]
            "
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-2 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                rounded-[20px]
                border border-white
                bg-[#D4A017]
                px-6 py-3
                text-sm font-bold text-black
                shadow-[0_8px_18px_rgba(0,0,0,0.12)]
                transition-all duration-200
                hover:-translate-y-0.5
                hover:text-white
              "
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="
              ml-2 rounded-[20px]
              border border-[#D4A017]
              bg-[#B71432]
              px-7 py-3
              text-sm font-bold text-white
              shadow-[0_8px_18px_rgba(0,0,0,0.12)]
              transition-all duration-200
              hover:-translate-y-0.5
              hover:bg-[#971029]
            "
          >
            Contact Us
          </Link>
        </nav>

        <details className="relative ml-auto xl:hidden">
          <summary
            className="
              flex h-10 w-10 cursor-pointer list-none
              items-center justify-center
              rounded-xl
              border border-[#D4A017]
              bg-[#D4A017]
              text-[#071B3B]
              shadow-md
              sm:h-11 sm:w-11
            "
            aria-label="Open menu"
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
              absolute right-0 top-[50px]
              w-[230px]
              overflow-hidden rounded-2xl
              border border-slate-200
              bg-white p-3
              shadow-[0_15px_35px_rgba(0,0,0,0.18)]
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  block rounded-xl
                  px-4 py-3
                  text-base font-semibold
                  text-[#071B3B]
                  transition-colors
                  hover:bg-[#D4A017]
                  hover:text-white
                "
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="
                mt-2 block rounded-xl
                bg-[#B71432]
                px-4 py-3
                text-center text-base
                font-semibold text-white
                hover:bg-[#971029]
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

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className="
        mx-auto max-w-[1200px]
        text-center
        font-serif
        text-3xl
        font-extrabold
        leading-tight
        tracking-[1px]
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
   IMAGE CARD
========================================================= */

function ImageCard({
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
        group relative mx-auto block
        h-[195px] w-[270px] max-w-full
        overflow-hidden rounded-[20px]
        border-[3px] border-[#D4A017]
        bg-[#071B3B]
        shadow-[0_8px_20px_rgba(0,0,0,0.16)]
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-[0_15px_30px_rgba(0,0,0,0.22)]
      "
    >
      <img
        src={image}
        alt={name}
        className="
          h-full w-full object-cover
          transition-transform duration-500
          group-hover:scale-[1.06]
        "
      />

      <div className="absolute inset-0 bg-black/15" />

      <span
        className="
          absolute bottom-3 left-1/2
          -translate-x-1/2
          whitespace-nowrap
          rounded-full
          border-2 border-[#D4A017]
          bg-[#071B3B]
          px-5 py-1.5
          text-sm font-bold text-white
          shadow-[0_5px_15px_rgba(0,0,0,0.25)]
          transition-all duration-300
          group-hover:bg-[#D4A017]
          group-hover:text-[#071B3B]
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

export default function MeghalayaPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white text-[#071B3B]">

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Header />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-[#071B3B]">
        <div
          className="
            mx-auto grid w-full max-w-[1440px]
            items-center gap-8
            px-5 py-12
            sm:px-8 sm:py-14
            md:px-12
            lg:grid-cols-[0.82fr_1.18fr]
            lg:px-[80px]
            lg:py-16
          "
        >
          <div className="text-white">
            <h1 className="font-serif font-bold leading-[1.02]">
              <span
                className="
                  block text-4xl text-white
                  sm:text-5xl md:text-6xl
                "
              >
                Tender Consultants in
              </span>

              <span
                className="
                  mt-2 block text-5xl
                  text-[#D4A017]
                  sm:text-6xl md:text-7xl
                "
              >
                Meghalaya
              </span>
            </h1>

            <div
              className="
                mt-6 h-[2px]
                w-[320px] max-w-full
                bg-[#D4A017]
              "
            />

            <div
              className="
                mt-7 space-y-5
                text-sm leading-7
                tracking-wide text-white
                sm:text-base
              "
            >
              <p>
                Meghalaya is one of the most naturally beautiful and
                strategically important states in northeastern India. Known
                for its tourism potential, natural resources, agriculture and
                growing infrastructure development, Meghalaya plays an
                important role in regional connectivity and public sector
                modernization in Northeast India.
              </p>

              <p>
                The state has witnessed increasing government investment in
                roads, tourism infrastructure, healthcare, smart city projects,
                renewable energy and urban development. Continuous public
                sector spending and infrastructure expansion have created major
                opportunities for contractors, suppliers, manufacturers and
                businesses participating in government tenders and GeM
                procurement across Meghalaya.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className="
                overflow-hidden rounded-[20px]
                border-[3px] border-[#D4A017]
              "
            >
              <img
                src="/images/Meghalayahero.png"
                alt="Meghalaya"
                className="
                  h-[300px] w-full object-cover
                  sm:h-[380px]
                  lg:h-[414px]
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATE INFORMATION
          "AT A GLANCE" LABEL REMOVED
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto w-full max-w-[1440px]
            px-5 py-12
            sm:px-8 sm:py-14
            md:px-12
            lg:px-[80px]
          "
        >
          <SectionTitle>
            Meghalaya State Information
          </SectionTitle>

          <div
            className="
              mx-auto mt-10 grid max-w-[1280px]
              grid-cols-1 gap-5
              sm:grid-cols-2
              xl:grid-cols-5
            "
          >
            {/* CAPITAL */}

            <div
              className="
                flex min-h-[160px] min-w-0
                flex-col items-center justify-center
                overflow-hidden rounded-[20px]
                border-[3px] border-[#D4A017]
                bg-[#071B3B]
                px-4 py-5 text-center
              "
            >
              <p className="font-serif text-xl font-semibold text-[#D4A017]">
                Capital
              </p>

              <p
                className="
                  mt-5 w-full
                  break-words text-center
                  font-serif text-2xl
                  font-semibold leading-6
                  text-white
                "
              >
                Shillong
              </p>
            </div>

            {/* LARGEST CITY */}

            <div
              className="
                flex min-h-[160px] min-w-0
                flex-col items-center justify-center
                overflow-hidden rounded-[20px]
                border-[3px] border-[#D4A017]
                bg-[#071B3B]
                px-4 py-5 text-center
              "
            >
              <p className="font-serif text-xl font-semibold text-[#D4A017]">
                Largest City
              </p>

              <p
                className="
                  mt-5 w-full
                  text-center font-serif text-2xl
                  font-semibold leading-6
                  text-white
                "
              >
                Shillong
              </p>
            </div>

            {/* REGION */}

            <div
              className="
                flex min-h-[160px] min-w-0
                flex-col items-center justify-center
                overflow-hidden rounded-[20px]
                border-[3px] border-[#D4A017]
                bg-[#071B3B]
                px-4 py-5 text-center
              "
            >
              <p className="font-serif text-xl font-semibold text-[#D4A017]">
                Region
              </p>

              <p
                className="
                  mt-5 px-2
                  text-center font-serif text-xl
                  font-semibold leading-6
                  text-white
                "
              >
                Northeastern India
              </p>
            </div>

            {/* POPULATION */}

            <div
              className="
                flex min-h-[160px] min-w-0
                flex-col items-center justify-center
                overflow-hidden rounded-[20px]
                border-[3px] border-[#D4A017]
                bg-[#071B3B]
                px-4 py-5 text-center
              "
            >
              <p className="font-serif text-xl font-semibold text-[#D4A017]">
                Population
              </p>

              <p
                className="
                  mt-4 text-center font-serif
                  text-2xl font-semibold
                  leading-7 text-white
                "
              >
                Approx.
                <br />
                40+ Lakh
              </p>
            </div>

            {/* LANGUAGE */}

            <div
              className="
                flex min-h-[160px] min-w-0
                flex-col items-center justify-center
                overflow-hidden rounded-[20px]
                border-[3px] border-[#D4A017]
                bg-[#071B3B]
                px-4 py-5 text-center
              "
            >
              <p
                className="
                  font-serif text-xl font-semibold
                  leading-6 text-[#D4A017]
                "
              >
                Official
                <br />
                Language
              </p>

              <p
                className="
                  mt-5 text-center font-serif
                  text-xl font-semibold
                  leading-6 text-white
                "
              >
                English
              </p>
            </div>
          </div>

          {/* SECONDARY CARDS */}

          <div
            className="
              mx-auto mt-5 grid max-w-[1280px]
              grid-cols-1 gap-5
              lg:grid-cols-3
            "
          >
            <div
              className="
                rounded-[20px]
                border-[3px] border-[#D4A017]
                bg-[#071B3B]
                p-6 text-center
              "
            >
              <p
                className="
                  font-serif text-xl font-semibold
                  tracking-wide text-[#D4A017]
                  sm:text-2xl
                "
              >
                Major Economic Hubs
              </p>

              <p className="mt-4 text-center text-base leading-7 text-white">
                Shillong, Tura, Jowai, Nongpoh
              </p>
            </div>

            <div
              className="
                rounded-[20px]
                border-[3px] border-[#D4A017]
                bg-[#071B3B]
                p-6 text-center
              "
            >
              <p
                className="
                  font-serif text-xl font-semibold
                  tracking-wide text-[#D4A017]
                  sm:text-2xl
                "
              >
                Major Industries
              </p>

              <p className="mt-4 text-center text-base leading-7 text-white">
                Tourism, Agriculture, Mining, Infrastructure
              </p>
            </div>

            <div
              className="
                rounded-[20px]
                border-[3px] border-[#D4A017]
                bg-[#071B3B]
                p-6 text-center
              "
            >
              <p
                className="
                  font-serif text-xl font-semibold
                  tracking-wide text-[#D4A017]
                  sm:text-2xl
                "
              >
                Major Procurement Sectors
              </p>

              <p className="mt-4 text-center text-base leading-7 text-white">
                Roads, Construction, Healthcare, Energy, EPC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ECONOMIC GROWTH
          "ECONOMIC OVERVIEW" LABEL REMOVED
      ====================================================== */}

      <section className="bg-[#071B3B]">
        <div
          className="
            mx-auto w-full max-w-[1440px]
            px-5 py-12
            sm:px-8 sm:py-14
            md:px-12
            lg:px-[80px]
          "
        >
          <h2
            className="
              mx-auto max-w-[1200px]
              text-center
              font-serif
              text-3xl
              font-extrabold
              leading-tight
              tracking-[1px]
              text-[#D4A017]
              sm:text-4xl md:text-5xl
            "
          >
            Meghalaya Economic Growth &amp; GDP Overview
          </h2>

          <p
            className="
              mx-auto mt-7 max-w-[1180px]
              text-center text-sm
              leading-7 tracking-wide
              text-white sm:text-base
            "
          >
            Meghalaya has shown steady economic growth supported by tourism,
            infrastructure development, transportation projects, agriculture
            and public sector investment. The state economy is driven by
            sectors such as tourism, construction, logistics, mining, renewable
            energy and public infrastructure projects.
          </p>

          <p
            className="
              mx-auto mt-5 max-w-[1180px]
              text-center text-sm
              leading-7 tracking-wide
              text-white sm:text-base
            "
          >
            The Meghalaya economy has experienced gradual growth with
            increasing investments in tourism infrastructure, highways,
            healthcare, smart city development and renewable energy projects.
            Government initiatives and infrastructure modernization are
            expected to further strengthen economic growth during 2025–26.
          </p>

          <h3
            className="
              mt-10 text-center
              font-serif text-xl
              font-semibold text-white
              sm:text-2xl
            "
          >
            Meghalaya GDP Growth (Approximate GSDP)
          </h3>

          <div
            className="
              mx-auto mt-7 max-w-[620px]
              overflow-hidden rounded-[16px]
              border-[2px] border-white
            "
          >
            <div
              className="
                grid grid-cols-2 bg-white
                text-center font-serif
                font-semibold text-[#071B3B]
              "
            >
              <div className="border-r border-slate-300 p-3 sm:p-4">
                Financial Year
              </div>

              <div className="p-3 sm:p-4">
                Estimated GSDP
              </div>
            </div>

            {gdpData.map(([year, value]) => (
              <div
                key={year}
                className="
                  grid grid-cols-2
                  bg-white text-center
                  text-sm text-[#071B3B]
                  sm:text-base
                "
              >
                <div className="border-r border-t border-slate-300 p-3">
                  {year}
                </div>

                <div className="border-t border-slate-300 p-3">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          GOVERNMENT DEVELOPMENT SPENDING
          BLUE BOX
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto w-full max-w-[1440px]
            px-5 py-10
            sm:px-8 sm:py-12
            md:px-12
            lg:px-[80px]
          "
        >
          <div
            className="
              mx-auto max-w-[1280px]
              rounded-[20px]
              border-[3px] border-[#D4A017]
              bg-[#071B3B]
              px-8 py-8
              sm:px-10 sm:py-9
              lg:px-[72px] lg:py-10
            "
          >
            <h2
              className="
                font-serif text-2xl
                font-bold leading-tight
                text-[#D4A017]
                sm:text-3xl
              "
            >
              Meghalaya Government Development Spending (2025–26)
            </h2>

            <p
              className="
                mt-6 max-w-[1100px]
                text-sm leading-7
                text-white sm:text-base
              "
            >
              The Meghalaya Government continues to invest heavily in
              infrastructure and public development projects. Major investments
              are focused on:
            </p>

            <div
              className="
                mt-6 grid gap-x-14 gap-y-1
                lg:grid-cols-2
              "
            >
              <div className="space-y-1">
                {developmentAreasLeft.map((item) => (
                  <p
                    key={item}
                    className="
                      text-sm leading-7
                      text-white sm:text-base
                    "
                  >
                    • {item}
                  </p>
                ))}
              </div>

              <div className="space-y-1">
                {developmentAreasRight.map((item) => (
                  <p
                    key={item}
                    className="
                      text-sm leading-7
                      text-white sm:text-base
                    "
                  >
                    • {item}
                  </p>
                ))}
              </div>
            </div>

            <p
              className="
                mt-7 max-w-[1120px]
                text-sm leading-7
                text-white sm:text-base
              "
            >
              These development projects create major opportunities for
              contractors, suppliers, OEMs and businesses participating in
              government tenders and GeM procurement across Meghalaya.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto w-full max-w-[1440px]
            px-5 py-14
            sm:px-8 sm:py-16
            md:px-12
            lg:px-[80px]
          "
        >
          <SectionTitle>
            Services We Provide in Meghalaya
          </SectionTitle>

          <p
            className="
              mx-auto mt-5 max-w-[900px]
              text-center text-sm
              font-semibold leading-6
              text-[#071B3B]
              sm:text-base
            "
          >
            Tender Elite provides professional tender consultancy and GeM
            services for contractors, suppliers, manufacturers and service
            providers across Meghalaya.
          </p>

          <div
            className="
              mx-auto mt-10 grid max-w-[1150px]
              grid-cols-1 gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
{services.map((service) => (
  <Link
    key={service.name}
    href={service.link}
    className="
      flex min-h-[175px]
      items-center justify-center
      rounded-[20px]
      border-[3px] border-[#D4A017]
      bg-[#071B3B]
      p-6
      text-center
      font-serif
      text-xl
      font-semibold
      text-white
      transition-all duration-300
      hover:-translate-y-2
      hover:bg-[#0B234D]
      hover:shadow-[0_12px_28px_rgba(212,160,23,0.22)]
      sm:text-2xl
    "
  >
    {service.name}
  </Link>
))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="
                inline-flex rounded-[20px]
                bg-[#D4A017]
                px-10 py-3
                text-sm font-medium
                text-[#071B3B]
                shadow-md transition-all
                hover:-translate-y-1
              "
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto w-full max-w-[1440px]
            px-5 py-12
            sm:px-8 sm:py-14
            md:px-12
            lg:px-[80px]
          "
        >
          <SectionTitle>
            Major Industries in Meghalaya
          </SectionTitle>

          <p
            className="
              mx-auto mt-5 max-w-[900px]
              text-center text-sm
              font-semibold leading-6
              tracking-wide
              text-[#071B3B]
              sm:text-base
            "
          >
            Meghalaya continues to attract investments in tourism,
            transportation, healthcare and public infrastructure projects,
            creating significant tender opportunities across multiple
            industries.
          </p>

          <div
            className="
              mx-auto mt-9 grid max-w-[1150px]
              grid-cols-1 gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {industries.map((industry) => (
              <ImageCard
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
              className="
                inline-flex rounded-[20px]
                bg-[#D4A017]
                px-10 py-3
                text-sm font-medium
                text-[#071B3B]
                shadow-md transition-all
                hover:-translate-y-1
              "
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto w-full max-w-[1440px]
            px-5 py-12
            sm:px-8 sm:py-14
            md:px-12
            lg:px-[80px]
          "
        >
          <SectionTitle>
            Locations We Serve
          </SectionTitle>

          <div
            className="
              mx-auto mt-9 grid max-w-[1150px]
              grid-cols-1 gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {locations.map((location) => (
              <ImageCard
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
                inline-flex rounded-[20px]
                bg-[#D4A017]
                px-10 py-3
                text-sm font-medium
                text-[#071B3B]
                shadow-md transition-all
                hover:-translate-y-1
              "
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAJOR CITIES
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto w-full max-w-[1440px]
            px-5 py-12
            sm:px-8 sm:py-14
            md:px-12
            lg:px-[80px]
          "
        >
          <SectionTitle>
            Major Cities We Serve in Meghalaya
          </SectionTitle>

          <p
            className="
              mx-auto mt-5 max-w-[1123px]
              text-center text-sm
              font-bold leading-6
              text-[#071B3B]
              sm:text-base
            "
          >
            Tender Elite provides professional GeM and tender consultancy
            services across major cities and development regions of Meghalaya.
          </p>

          <div
            className="
              mx-auto mt-9 grid max-w-[1200px]
              grid-cols-1 gap-4
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
            "
          >
            {majorCities.map((city) => (
              <div
                key={city}
                className="
                  flex h-20
                  items-center justify-center
                  rounded-[20px]
                  border-[3px]
                  border-[#D4A017]
                  bg-[#071B3B]
                  px-4
                  text-center
                  font-serif
                  text-2xl
                  font-semibold
                  text-white
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                {city}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/locations"
              className="
                inline-flex rounded-[20px]
                bg-[#D4A017]
                px-10 py-3
                text-sm font-medium
                text-[#071B3B]
                shadow-md transition-all
                hover:-translate-y-1
              "
            >
              View More Cities
            </Link>
          </div>

          {/* =================================================
              WHY MEGHALAYA
          ================================================== */}

          <div
            className="
              mx-auto mt-14 max-w-[1280px]
              rounded-[20px]
              border-[3px] border-[#D4A017]
              bg-[#071B3B]
              px-8 py-8
              sm:px-10 sm:py-9
              lg:px-[72px]
            "
          >
            <h3
              className="
                font-serif text-2xl
                font-bold leading-tight
                text-[#D4A017]
                sm:text-3xl
              "
            >
              Why Meghalaya is Important for Government Tenders
            </h3>

            <p
              className="
                mt-5 text-base
                leading-7 text-white
                sm:text-lg
              "
            >
              Meghalaya is becoming increasingly important for:
            </p>

            <div
              className="
                mt-5 grid gap-x-16 gap-y-1
                text-sm leading-7
                text-white
                sm:text-base
                lg:grid-cols-2
              "
            >
              <div className="space-y-0.5">
                {tenderImportanceLeft.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>

              <div className="space-y-0.5">
                {tenderImportanceRight.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>
            </div>

            <p
              className="
                mt-6 max-w-[1120px]
                text-sm leading-7
                text-white
                sm:text-base
              "
            >
              Multiple departments including PWD, Tourism, Healthcare, Urban
              Development, Rural Development and Infrastructure sectors
              regularly release tenders across Meghalaya.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto w-full max-w-[1440px]
            px-5 py-12
            sm:px-8 sm:py-14
            md:px-12
            lg:px-[80px]
          "
        >
          <div
            className="
              rounded-[20px]
              border-[3px] border-[#D4A017]
              bg-[#071B3B]
              px-6 py-10
              text-center
              sm:px-10 sm:py-12
            "
          >
            <h2
              className="
                font-serif
                text-2xl
                font-bold
                leading-tight
                text-[#D4A017]
                sm:text-3xl
                md:text-4xl
              "
            >
              Ready to Grow Your Business with Government Tenders?
            </h2>

            <p
              className="
                mx-auto mt-5 max-w-[900px]
                text-sm leading-7
                text-white
                sm:text-base
              "
            >
              Partner with Tender Elite for professional GeM and tender
              consultancy services across Meghalaya.
            </p>

            <Link
              href="/contact"
              className="
                mt-7 inline-flex rounded-[20px]
                bg-[#D4A017]
                px-10 py-3
                text-sm font-semibold
                text-[#071B3B]
                shadow-md transition-all
                hover:-translate-y-1
              "
            >
              Let&apos;s Connect Today
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