import { slugToTitle as _s } from "@/lib/seo";

export const metadata = {
  title: `Government Tender Services in ${_s("bihar")}`,
  description: `Tender search, bidding and documentation support for businesses in ${_s("bihar")}. Track live ${_s("bihar")} government tenders with Tender Elite.`,
  alternates: { canonical: "/states/bihar" },
};

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
  "Patna",
  "Gaya",
  "Muzaffarpur",
  "Bhagalpur",
  "Darbhanga",
  "Purnia",
  "Bihar Sharif",
  "Ara",
];

/* =========================================================
   DEVELOPMENT SPENDING
========================================================= */

const developmentAreasLeft = [
  "Highway & Road Development",
  "Railway Infrastructure",
  "Smart City Projects",
  "Water Supply & Irrigation",
  "Healthcare Infrastructure",
  "Housing & Urban Development",
];

const developmentAreasRight = [
  "Renewable Energy Projects",
  "Agriculture & Rural Development",
  "Education Infrastructure",
  "Industrial Corridor Development",
  "Digital Governance Initiatives",
];

/* =========================================================
   WHY BIHAR
========================================================= */

const tenderImportanceLeft = [
  "Government procurement spending",
  "Public infrastructure projects",
  "Highway & bridge construction",
  "Railway infrastructure development",
  "Smart city projects",
];

const tenderImportanceRight = [
  "Water supply & irrigation schemes",
  "Healthcare infrastructure",
  "Housing development projects",
  "Construction & EPC contracts",
];

/* =========================================================
   GDP DATA
========================================================= */

const gdpData = [
  ["2020 - 21", "₹5.5–6 Lakh Crore"],
  ["2021 - 22", "₹6.5–7 Lakh Crore"],
  ["2022 - 23", "₹7.5–8 Lakh Crore"],
  ["2023 - 24", "₹8.5–9 Lakh Crore"],
  ["2024 - 25", "₹9.5–10 Lakh Crore"],
  ["2025–26 (Projected)", "₹11–12 Lakh Crore"],
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
              sm:h-[54px]
              md:h-[62px]
              lg:h-[68px]
            "
          />

          <img
            src="/images/logo-wordmark.png"
            alt="Tender Elite"
            className="
              w-[95px] object-contain
              sm:w-[130px]
              md:w-[155px]
              lg:w-[195px]
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
              flex h-10 w-10 cursor-pointer
              list-none items-center justify-center
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
        h-[195px]
        w-[270px]
        max-w-full
        overflow-hidden
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
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
    <footer className="bg-[#071B3B] text-white">
      <div
        className="
          mx-auto grid
          w-full max-w-[1280px]
          gap-10 px-5 py-12
          sm:px-7
          lg:grid-cols-[1.4fr_1fr_1fr_1fr]
          lg:px-[80px]
        "
      >
        <div>
          <img
            src="/images/footer.png"
            alt="Tender Elite"
            className="mb-5 w-[190px] sm:w-[225px]"
          />

          <p
            className="
              max-w-xs text-sm
              leading-6 tracking-wider
              text-white/80
            "
          >
            Empowering businesses through premium tender consultancy. We
            don&apos;t just process tenders – we build opportunities for
            business growth.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-base font-semibold tracking-wider">
            Quick Links
          </h3>

          {[
            ["Home", "/"],
            ["Services", "/services"],
            ["Industries", "/industries"],
            ["Insights", "/insights"],
            ["About Us", "/about-us"],
            ["Contact Us", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="
                block py-1.5
                text-sm tracking-wider
                transition-all duration-200
                hover:translate-x-1
                hover:text-[#D4A017]
              "
            >
              {label}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="mb-5 text-base font-semibold tracking-wider">
            Services
          </h3>

          {footerServices.map((service) => (
            <Link
              key={service}
              href="/services"
              className="
                block py-1.5
                text-sm tracking-wider
                transition-all duration-200
                hover:translate-x-1
                hover:text-[#D4A017]
              "
            >
              {service}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="mb-5 text-base font-semibold tracking-wider">
            Contact Info.
          </h3>

          <p
            className="
              text-sm leading-8
              tracking-wider text-white/80
            "
          >
            +91 1234567890
            <br />
            abc@tenderelite.com
            <br />
            Mumbai, Maharashtra, India
          </p>
        </div>
      </div>

      <div
        className="
          mx-auto flex w-full max-w-[1240px]
          flex-col gap-4
          border-t border-white/15
          px-5 py-6
          text-xs tracking-wider
          text-white/60
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:px-7
          lg:px-[80px]
        "
      >
        <span>
          © 2025 Tender Elite Consultancy. All rights reserved.
        </span>

        <div className="flex flex-wrap gap-5">
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

export default function BiharPage() {
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
                  block
                  text-4xl
                  text-white
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Tender Consultants in
              </span>

              <span
                className="
                  mt-2 block
                  text-5xl
                  text-[#D4A017]
                  sm:text-6xl
                  md:text-7xl
                "
              >
                Bihar
              </span>
            </h1>

            <div
              className="
                mt-6 h-[2px]
                w-[140px]
                max-w-full
                bg-[#D4A017]
              "
            />

            <div
              className="
                mt-7 space-y-5
                text-sm
                leading-7
                tracking-wide
                text-white
                sm:text-base
              "
            >
              <p>
                Bihar is one of the fastest developing states in eastern India
                with growing investments in infrastructure, transportation,
                urban development, healthcare, agriculture and industrial
                expansion. Known for its historical importance, large
                population and strategic location, Bihar is witnessing rapid
                growth in public infrastructure and government development
                projects.
              </p>

              <p>
                The state has emerged as a major center for road construction,
                railway expansion, smart city projects, water supply schemes,
                housing development and public infrastructure modernization.
                Continuous government spending and development initiatives have
                created significant opportunities for contractors, suppliers,
                manufacturers and businesses participating in government
                tenders and GeM procurement across Bihar.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className="
                overflow-hidden
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
              "
            >
              <img
                src="/images/Biharhero.png"
                alt="Bihar"
                className="
                  h-[300px]
                  w-full
                  object-cover
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
          AT A GLANCE REMOVED
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
            Bihar State Information
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
                flex min-h-[160px]
                flex-col items-center justify-center
                overflow-hidden
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-[#071B3B]
                px-4 py-5
                text-center
              "
            >
              <p
                className="
                  font-serif text-xl
                  font-semibold
                  text-[#D4A017]
                "
              >
                Capital
              </p>

              <p
                className="
                  mt-5 w-full
                  break-words
                  text-center
                  font-serif text-2xl
                  font-semibold
                  leading-6
                  text-white
                "
              >
                Patna
              </p>
            </div>

            {/* LARGEST CITY */}

            <div
              className="
                flex min-h-[160px]
                flex-col items-center justify-center
                overflow-hidden
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-[#071B3B]
                px-4 py-5
                text-center
              "
            >
              <p
                className="
                  font-serif text-xl
                  font-semibold
                  text-[#D4A017]
                "
              >
                Largest City
              </p>

              <p
                className="
                  mt-5 w-full
                  break-words
                  text-center
                  font-serif text-2xl
                  font-semibold
                  leading-6
                  text-white
                "
              >
                Patna
              </p>
            </div>

            {/* REGION */}

            <div
              className="
                flex min-h-[160px]
                flex-col items-center justify-center
                overflow-hidden
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-[#071B3B]
                px-4 py-5
                text-center
              "
            >
              <p
                className="
                  font-serif text-xl
                  font-semibold
                  text-[#D4A017]
                "
              >
                Region
              </p>

              <p
                className="
                  mt-5 px-2
                  text-center
                  font-serif text-xl
                  font-semibold
                  leading-6
                  text-white
                "
              >
                Eastern India
              </p>
            </div>

            {/* POPULATION */}

            <div
              className="
                flex min-h-[160px]
                flex-col items-center justify-center
                overflow-hidden
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-[#071B3B]
                px-4 py-5
                text-center
              "
            >
              <p
                className="
                  font-serif text-xl
                  font-semibold
                  text-[#D4A017]
                "
              >
                Population
              </p>

              <p
                className="
                  mt-4
                  text-center
                  font-serif text-2xl
                  font-semibold
                  leading-7
                  text-white
                "
              >
                Approx.
                <br />
                13+ Crore
              </p>
            </div>

            {/* LANGUAGE */}

            <div
              className="
                flex min-h-[160px]
                flex-col items-center justify-center
                overflow-hidden
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-[#071B3B]
                px-4 py-5
                text-center
              "
            >
              <p
                className="
                  font-serif text-xl
                  font-semibold
                  leading-6
                  text-[#D4A017]
                "
              >
                Official
                <br />
                Language
              </p>

              <p
                className="
                  mt-5
                  text-center
                  font-serif text-xl
                  font-semibold
                  leading-6
                  text-white
                "
              >
                Hindi
              </p>
            </div>
          </div>

          {/* SECONDARY CARDS */}

          <div
            className="
              mx-auto mt-5 grid
              max-w-[1280px]
              grid-cols-1 gap-5
              lg:grid-cols-3
            "
          >
            <div
              className="
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-[#071B3B]
                p-6
                text-center
              "
            >
              <p
                className="
                  font-serif text-xl
                  font-semibold
                  tracking-wide
                  text-[#D4A017]
                  sm:text-2xl
                "
              >
                Major Economic Hubs
              </p>

              <p
                className="
                  mt-4 text-center
                  text-base leading-7
                  text-white
                "
              >
                Patna, Gaya, Muzaffarpur, Bhagalpur
              </p>
            </div>

            <div
              className="
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-[#071B3B]
                p-6
                text-center
              "
            >
              <p
                className="
                  font-serif text-xl
                  font-semibold
                  tracking-wide
                  text-[#D4A017]
                  sm:text-2xl
                "
              >
                Major Industries
              </p>

              <p
                className="
                  mt-4 text-center
                  text-base leading-7
                  text-white
                "
              >
                Agriculture, Infrastructure, Manufacturing, Food Processing
              </p>
            </div>

            <div
              className="
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-[#071B3B]
                p-6
                text-center
              "
            >
              <p
                className="
                  font-serif text-xl
                  font-semibold
                  tracking-wide
                  text-[#D4A017]
                  sm:text-2xl
                "
              >
                Major Procurement Sectors
              </p>

              <p
                className="
                  mt-4 text-center
                  text-base leading-7
                  text-white
                "
              >
                Construction, Railways, Water Supply, Healthcare, EPC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ECONOMIC GROWTH
          ECONOMIC OVERVIEW REMOVED
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
              sm:text-4xl
              md:text-5xl
            "
          >
            Bihar Economic Growth &amp; GDP Overview
          </h2>

          <p
            className="
              mx-auto mt-7
              max-w-[1180px]
              text-center
              text-sm
              leading-7
              tracking-wide
              text-white
              sm:text-base
            "
          >
            Bihar has shown consistent economic growth driven by
            infrastructure development, public sector investment,
            transportation projects, agriculture and urban development
            initiatives. The state economy is supported by sectors such as
            construction, agriculture, manufacturing, food processing,
            logistics and government infrastructure projects.
          </p>

          <p
            className="
              mx-auto mt-5
              max-w-[1180px]
              text-center
              text-sm
              leading-7
              tracking-wide
              text-white
              sm:text-base
            "
          >
            The Bihar economy has experienced strong growth with increasing
            investments in highways, bridges, railway projects, housing
            schemes, healthcare infrastructure and smart city development.
            Government initiatives and infrastructure expansion are expected to
            further accelerate economic growth during 2025–26.
          </p>

          <h3
            className="
              mt-10
              text-center
              font-serif
              text-xl
              font-semibold
              text-white
              sm:text-2xl
            "
          >
            Bihar GDP Growth (Approximate GSDP)
          </h3>

          {/* GDP TABLE */}

          <div
            className="
              mx-auto mt-7
              max-w-[620px]
              overflow-hidden
              rounded-[16px]
              border-[2px]
              border-white
            "
          >
            <div
              className="
                grid grid-cols-2
                bg-white
                text-center
                font-serif
                font-semibold
                text-[#071B3B]
              "
            >
              <div
                className="
                  border-r
                  border-slate-300
                  p-3
                  sm:p-4
                "
              >
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
                  bg-white
                  text-center
                  text-sm
                  text-[#071B3B]
                  sm:text-base
                "
              >
                <div
                  className="
                    border-r
                    border-t
                    border-slate-300
                    p-3
                  "
                >
                  {year}
                </div>

                <div
                  className="
                    border-t
                    border-slate-300
                    p-3
                  "
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DEVELOPMENT SPENDING
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
              border-[3px]
              border-[#D4A017]
              bg-[#071B3B]
              px-8 py-8
              sm:px-10 sm:py-9
              lg:px-[72px]
              lg:py-10
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
              "
            >
              Bihar Government Development Spending (2025–26)
            </h2>

            <p
              className="
                mt-6
                max-w-[1100px]
                text-sm
                leading-7
                text-white
                sm:text-base
              "
            >
              The Bihar Government continues to invest heavily in
              infrastructure and public development projects. Major
              investments are focused on:
            </p>

            <div
              className="
                mt-6 grid
                gap-x-14 gap-y-1
                lg:grid-cols-2
              "
            >
              <div className="space-y-1">
                {developmentAreasLeft.map((item) => (
                  <p
                    key={item}
                    className="
                      text-sm
                      leading-7
                      text-white
                      sm:text-base
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
                      text-sm
                      leading-7
                      text-white
                      sm:text-base
                    "
                  >
                    • {item}
                  </p>
                ))}
              </div>
            </div>

            <p
              className="
                mt-7
                max-w-[1120px]
                text-sm
                leading-7
                text-white
                sm:text-base
              "
            >
              These large-scale development projects generate major
              opportunities for contractors, suppliers, OEMs and businesses
              participating in government tenders and GeM procurement across
              Bihar.
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
            Services We Provide in Bihar
          </SectionTitle>

          <p
            className="
              mx-auto mt-5
              max-w-[900px]
              text-center
              text-sm
              font-semibold
              leading-6
              text-[#071B3B]
              sm:text-base
            "
          >
            Tender Elite provides professional tender consultancy and GeM
            services for contractors, suppliers, manufacturers and service
            providers across Bihar.
          </p>

          <div
            className="
              mx-auto mt-10 grid
              max-w-[1150px]
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
                inline-flex
                rounded-[20px]
                bg-[#D4A017]
                px-10 py-3
                text-sm font-medium
                text-[#071B3B]
                shadow-md
                transition-all
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
            Major Industries in Bihar
          </SectionTitle>

          <p
            className="
              mx-auto mt-5
              max-w-[900px]
              text-center
              text-sm
              font-semibold
              leading-6
              tracking-wide
              text-[#071B3B]
              sm:text-base
            "
          >
            Bihar continues to attract investments in transportation,
            infrastructure, agriculture and urban development projects,
            creating significant tender opportunities across multiple
            industries.
          </p>

          <div
            className="
              mx-auto mt-9
              grid
              max-w-[1150px]
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
                inline-flex
                rounded-[20px]
                bg-[#D4A017]
                px-10 py-3
                text-sm font-medium
                text-[#071B3B]
                shadow-md
                transition-all
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
              mx-auto mt-9
              grid
              max-w-[1150px]
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
                inline-flex
                rounded-[20px]
                bg-[#D4A017]
                px-10 py-3
                text-sm font-medium
                text-[#071B3B]
                shadow-md
                transition-all
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
            Major Cities We Serve in Bihar
          </SectionTitle>

          <p
            className="
              mx-auto mt-5
              max-w-[1123px]
              text-center
              text-sm
              font-bold
              leading-6
              text-[#071B3B]
              sm:text-base
            "
          >
            Tender Elite provides professional GeM and tender consultancy
            services across major cities and industrial regions of Bihar.
          </p>

          <div
            className="
              mx-auto mt-9
              grid max-w-[1200px]
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
                  border-[#071B3B]
                  bg-[#071B3B]
                  px-4
                  text-center
                  font-serif
                  text-2xl
                  font-semibold
                  text-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#D4A017]
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
                inline-flex
                rounded-[20px]
                bg-[#D4A017]
                px-10 py-3
                text-sm font-medium
                text-[#071B3B]
                shadow-md
                transition-all
                hover:-translate-y-1
              "
            >
              View More Cities
            </Link>
          </div>

          {/* =================================================
              WHY BIHAR
          ================================================== */}

          <div
            className="
              mx-auto mt-14
              max-w-[1280px]
              rounded-[20px]
              border-[3px]
              border-[#D4A017]
              bg-[#071B3B]
              px-8 py-8
              sm:px-10 sm:py-9
              lg:px-[72px]
            "
          >
            <h3
              className="
                font-serif
                text-2xl
                font-bold
                leading-tight
                text-[#D4A017]
                sm:text-3xl
              "
            >
              Why Bihar is Important for Government Tenders
            </h3>

            <p
              className="
                mt-5
                text-base
                leading-7
                text-white
                sm:text-lg
              "
            >
              Bihar is becoming increasingly important for:
            </p>

            <div
              className="
                mt-5
                grid
                gap-x-16
                gap-y-1
                text-sm
                leading-7
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
                mt-6
                max-w-[1120px]
                text-sm
                leading-7
                text-white
                sm:text-base
              "
            >
              Multiple departments including PWD, Railways, Urban
              Development, Rural Development, Healthcare and Water Resources
              sectors regularly release tenders across Bihar.
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
              border-[3px]
              border-[#D4A017]
              bg-[#071B3B]
              px-6 py-10
              text-center
              sm:px-10
              sm:py-12
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
                mx-auto mt-5
                max-w-[900px]
                text-sm
                leading-7
                text-white
                sm:text-base
              "
            >
              Partner with Tender Elite for professional GeM and tender
              consultancy services across Bihar.
            </p>

            <Link
              href="/contact"
              className="
                mt-7
                inline-flex
                rounded-[20px]
                bg-[#D4A017]
                px-10 py-3
                text-sm
                font-semibold
                text-[#071B3B]
                shadow-md
                transition-all
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