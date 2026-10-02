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
   SERVICES
========================================================= */

const services = [
  "End-to-End Tender Consultancy",
  "Technical Bid Preparation",
  "Financial Bid Preparation",
  "BOQ Review & Analysis",
  "Tender Documentation Support",
  "Compliance Verification",
  "GeM Bid Consultancy",
  "Eligibility & Qualification",
  "OEM Authorization Assistance",
  "Tender Submission Support",
  "Tender Strategy & Guidance",
  "Joint Venture & Consortium Support",
  "Pre-Bid Documentation Assistance",
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
          mx-auto
          flex
          min-h-[72px]
          w-full
          max-w-[1440px]
          items-center
          px-3
          sm:min-h-[82px]
          sm:px-5
          md:px-7
          lg:min-h-[90px]
          lg:px-10
        "
      >
        {/* LOGO */}

        <Link
          href="/"
          className="
            flex
            shrink-0
            items-center
            gap-1.5
            sm:gap-2
          "
        >
          <img
            src="/images/logo-mark.png"
            alt="Tender Elite"
            className="
              h-[44px]
              w-auto
              object-contain
              sm:h-[54px]
              md:h-[62px]
              lg:h-[68px]
            "
          />

          <img
            src="/images/logo-wordmark.png"
            alt="Tender Elite"
            className="
              w-[95px]
              object-contain
              sm:w-[130px]
              md:w-[155px]
              lg:w-[195px]
            "
          />
        </Link>

        {/* DESKTOP NAV */}

        <nav className="ml-auto hidden items-center gap-2 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                rounded-[20px]
                border
                border-white
                bg-[#D4A017]
                px-6
                py-3
                text-sm
                font-bold
                text-black
                shadow-[0_8px_18px_rgba(0,0,0,0.12)]
                transition-all
                duration-200
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
              ml-2
              rounded-[20px]
              border
              border-[#D4A017]
              bg-[#B71432]
              px-7
              py-3
              text-sm
              font-bold
              text-white
              shadow-[0_8px_18px_rgba(0,0,0,0.12)]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#971029]
            "
          >
            Contact Us
          </Link>
        </nav>

        {/* MOBILE / TABLET */}

        <details className="relative ml-auto xl:hidden">
          <summary
            className="
              flex
              h-10
              w-10
              cursor-pointer
              list-none
              items-center
              justify-center
              rounded-xl
              border
              border-[#D4A017]
              bg-[#D4A017]
              text-[#071B3B]
              shadow-md
              sm:h-11
              sm:w-11
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
              absolute
              right-0
              top-[50px]
              w-[230px]
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-3
              shadow-[0_15px_35px_rgba(0,0,0,0.18)]
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  block
                  rounded-xl
                  px-4
                  py-3
                  text-base
                  font-semibold
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
                mt-2
                block
                rounded-xl
                bg-[#B71432]
                px-4
                py-3
                text-center
                text-base
                font-semibold
                text-white
                transition-colors
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

function SectionTitle({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <h2
      className={`
        mx-auto
        max-w-[1200px]
        text-center
        font-serif
        text-3xl
        font-extrabold
        leading-tight
        tracking-[1px]
        sm:text-4xl
        md:text-5xl
        ${dark ? "text-white" : "text-[#D4A017]"}
      `}
    >
      {children}
    </h2>
  );
}

/* =========================================================
   OLD STYLE CARD
========================================================= */

function OldStyleCard({
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
        mx-auto
        block
        h-[195px]
        w-[270px]
        max-w-full
        overflow-hidden
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-[#071B3B]
        shadow-[0_8px_20px_rgba(0,0,0,0.16)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-[0_15px_30px_rgba(0,0,0,0.22)]
      "
    >
      <img
        src={image}
        alt={name}
        className="
          block
          h-full
          w-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-[1.06]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-black/15
          transition-all
          duration-300
          group-hover:bg-black/5
        "
      />

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
          shadow-[0_5px_15px_rgba(0,0,0,0.25)]
          transition-all
          duration-300
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

export default function AboutUsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white text-[#071B3B]">

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Header />

      {/* =====================================================
          HERO / TRIBUTE
      ====================================================== */}

      <section className="relative overflow-hidden bg-black text-white">

        {/* STRIPED BACKGROUND */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.30]
            bg-[repeating-linear-gradient(
              90deg,
              rgba(183,20,50,0.28)_0px,
              rgba(183,20,50,0.28)_30px,
              transparent_30px,
              transparent_76px
            )]
          "
        />

        <div
          className="
            relative
            mx-auto
            grid
            min-h-[620px]
            w-full
            max-w-[1440px]
            lg:grid-cols-[1fr_0.78fr]
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div
            className="
              relative
              z-10
              flex
              flex-col
              justify-center
              px-5
              py-12
              sm:px-8
              sm:py-14
              md:px-12
              lg:px-[80px]
              lg:py-[55px]
            "
          >

            {/* NO TOP QUOTE MARK */}

            <div className="relative">

              {/* SMALL HEADING */}

              <p
                className="
                  font-serif
                  text-2xl
                  font-bold
                  sm:text-3xl
                  md:text-4xl
                "
              >
                Tribute to Our Inspiration
              </p>

              {/* MAIN HEADING */}

              <h1
                className="
                  mt-2
                  font-serif
                  text-4xl
                  font-extrabold
                  leading-[0.98]
                  tracking-tight
                  text-[#D4A017]
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Our Idol. Our Hero
              </h1>

              {/* GOLD LINE BELOW MAIN HEADING */}

              <div
                className="
                  mt-7
                  h-[2px]
                  w-full
                  max-w-[560px]
                  bg-[#D4A017]
                "
              />

              {/* QUOTE */}

              <div className="mt-6 max-w-[700px]">
                <p
                  className="
                    font-serif
                    text-sm
                    font-bold
                    leading-6
                    text-[#E11D48]
                    sm:text-base
                    md:text-lg
                  "
                >
                  “Take the stones people throw at you, and use them to build a
                  monument.”
                </p>

                <p
                  className="
                    mt-1
                    text-right
                    font-serif
                    text-xs
                    font-bold
                    text-[#D4A017]
                    sm:text-sm
                  "
                >
                  - Ratan Tata
                </p>
              </div>

              {/* BODY TEXT */}

              <div
                className="
                  mt-6
                  max-w-[760px]
                  space-y-3
                  text-[11px]
                  leading-[1.55]
                  tracking-wide
                  text-white/90
                  sm:text-xs
                  sm:leading-[1.65]
                  md:text-sm
                "
              >
                <p>
                  Sir Ratan Tata has always been more than just a business
                  leader to us.
                </p>

                <p>
                  He has been a symbol of humility, vision, integrity,
                  leadership, and humanity for millions of entrepreneurs across
                  India.
                </p>

                <p>
                  As founders, we always wished that one day we could meet him
                  personally, learn from his experiences, and thank him for
                  inspiring countless young entrepreneurs like us. Although that
                  opportunity may no longer be possible, his values, thoughts,
                  and life lessons continue to guide us every single day.
                </p>

                <p>
                  His journey taught us that true success is not only measured
                  by business growth, but also by ethics, responsibility, trust,
                  and the positive impact we create for others.
                </p>

                <p>
                  Even though he is not physically with us today, his vision,
                  principles, and inspiration will always remain alive through
                  the work we do and the values we follow at Tender Elite.
                </p>

                <p>
                  This small section on our website is our humble tribute to a
                  person who inspired an entire generation to dream bigger, work
                  harder, and build with honesty.
                </p>

                <p>
                  You will always remain our inspiration, our ideal, and our
                  hero.
                </p>

                <p>
                  May your soul rest in peace, Sir.
                </p>

                <p>
                  Thank you for inspiring millions.
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
              LEFT + RIGHT FADE
          ================================================== */}

          <div
            className="
              relative
              min-h-[430px]
              overflow-hidden
              lg:min-h-[620px]
            "
          >

            <img
              src="/images/ratan-tata.png"
              alt="Tribute to Ratan Tata"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />

            {/* MAIN TWO-SIDE FADE */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[linear-gradient(
                  to_right,
                  #000000_0%,
                  rgba(0,0,0,0.95)_6%,
                  rgba(0,0,0,0.55)_15%,
                  transparent_32%,
                  transparent_68%,
                  rgba(0,0,0,0.55)_85%,
                  rgba(0,0,0,0.95)_94%,
                  #000000_100%
                )]
              "
            />

            {/* EXTRA LEFT SOFT FADE */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                w-[20%]
                bg-gradient-to-r
                from-black
                to-transparent
              "
            />

            {/* EXTRA RIGHT SOFT FADE */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                w-[20%]
                bg-gradient-to-l
                from-black
                to-transparent
              "
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT US
      ====================================================== */}

      <section className="relative overflow-hidden bg-black text-white">

        {/* STRIPED BACKGROUND */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.34]
            bg-[repeating-linear-gradient(
              90deg,
              rgba(183,20,50,0.28)_0px,
              rgba(183,20,50,0.28)_30px,
              transparent_30px,
              transparent_74px
            )]
          "
        />

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            py-10
            sm:px-8
            sm:py-12
            md:px-12
            lg:px-[80px]
            lg:py-[58px]
          "
        >
          <div
            className="
              grid
              items-start
              gap-8
              lg:grid-cols-[1fr_280px]
              lg:gap-12
            "
          >

            {/* LEFT CONTENT */}

            <div className="min-w-0 max-w-[975px]">

              <p
                className="
                  text-[11px]
                  font-medium
                  tracking-[2px]
                  text-white/90
                  sm:text-xs
                "
              >
                ABOUT US
              </p>

              <h2
                className="
                  mt-5
                  max-w-[900px]
                  font-serif
                  text-3xl
                  font-semibold
                  leading-[1.08]
                  tracking-wide
                  text-white
                  sm:text-4xl
                  lg:text-[50px]
                "
              >
                From a Dream to a
                <br className="hidden sm:block" />
                <span className="text-[#D4A017]">
                  Trusted Tender Consulting Company
                </span>
              </h2>

              <div
                className="
                  mt-7
                  space-y-4
                  text-xs
                  leading-5
                  tracking-wide
                  text-white/90
                  sm:text-sm
                  sm:leading-6
                "
              >
                <p>
                  Tender Elite was not started in a boardroom with large
                  investments or corporate backing.
                </p>

                <p>
                  It began with a vision, determination, and the belief that
                  businesses deserve better guidance in the tender industry.
                </p>

                <p>
                  As professionals working closely in the tender sector, we
                  witnessed the real challenges faced by companies every day -
                  complex documentation, technical compliance, changing
                  requirements, submission pressure, and lack of proper
                  consultancy support. We realized that many capable businesses
                  were losing opportunities not because of their potential, but
                  because they lacked the right guidance and professional
                  expertise during the tendering process.
                </p>

                <p>
                  With years of practical experience and deep industry
                  understanding, we decided to bridge this gap.
                </p>

                <p>
                  What started as an idea between two employees gradually
                  transformed into a professional End-to-End Tender Consultancy
                  Company committed to helping businesses participate in tenders
                  with confidence, clarity, and professionalism.
                </p>

                <p>
                  Founded by{" "}
                  <span className="font-bold text-[#D4A017]">
                    Mohnish Gore
                  </span>{" "}
                  and{" "}
                  <span className="font-bold text-[#D4A017]">
                    Swapnil Chavan
                  </span>
                  , Tender Elite brings together a cumulative experience of over
                  15+ years in the tender industry.
                </p>

                <p>
                  Over the years, we have successfully supported and submitted
                  5000+ tenders across multiple platforms including:
                </p>

                <div
                  className="
                    grid
                    gap-x-10
                    gap-y-1
                    text-xs
                    sm:grid-cols-2
                    sm:text-sm
                  "
                >
                  <p>• Central Government Portals</p>
                  <p>• State Government Portals</p>
                  <p>• PSU Portals</p>
                  <p>• GeM Portal</p>
                  <p>• Semi-Government Organizations</p>
                  <p>• Private Tender Platforms</p>
                </div>

                <p>
                  Our journey has been built on trust, consistency, practical
                  expertise, and long-term client relationships.
                </p>

                <p>
                  Today, Tender Elite stands as a growing professional
                  consultancy company dedicated to simplifying tender
                  participation for businesses across India.
                </p>
              </div>
            </div>

            {/* RIGHT LOGO */}

            <div
              className="
                hidden
                items-start
                justify-end
                lg:flex
                lg:pt-[45px]
              "
            >
              <img
                src="/images/aboutus2.png"
                alt="Tender Elite"
                className="
                  w-[180px]
                  object-contain
                  xl:w-[195px]
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO ARE WE + SERVICES
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1440px]
            gap-5
            px-5
            py-10
            sm:px-8
            sm:py-12
            md:px-12
            lg:grid-cols-2
            lg:px-[80px]
          "
        >
          {/* WHO ARE WE */}

          <article
            className="
              rounded-[18px]
              border
              border-slate-300
              bg-white
              p-6
              shadow-[0_5px_18px_rgba(0,0,0,0.12)]
              sm:p-7
            "
          >
            <h2
              className="
                font-serif
                text-2xl
                font-semibold
                tracking-widest
                text-[#D4A017]
                sm:text-3xl
              "
            >
              WHO ARE WE
            </h2>

            <div
              className="
                mt-5
                space-y-3
                text-xs
                leading-5
                text-[#071B3B]
                sm:text-sm
                sm:leading-6
              "
            >
              <p>
                Tender Elite is a professional End-to-End Tender Consultancy
                Company specializing in complete tender management and bid
                consultancy services.
              </p>

              <p>
                We assist contractors, suppliers, manufacturers, startups, and
                service providers in handling the tendering process
                professionally and efficiently.
              </p>

              <p>
                Our consultancy approach focuses on accuracy, compliance,
                strategy, and timely execution.
              </p>

              <p>
                From tender understanding to technical documentation, BOQ
                analysis, eligibility verification, financial bid preparation,
                compliance support, and final submission assistance - we provide
                complete professional consultancy support under one roof.
              </p>

              <p>
                We believe tender participation is not just about submitting
                documents. It requires proper planning, technical understanding,
                strategic pricing, compliance management, and execution
                expertise.
              </p>

              <p>
                That is where Tender Elite creates value.
              </p>
            </div>
          </article>

          {/* OUR SERVICES */}

          <article
            className="
              rounded-[18px]
              bg-[#071B3B]
              p-6
              text-white
              sm:p-7
            "
          >
            <h2
              className="
                font-serif
                text-2xl
                font-semibold
                tracking-widest
                text-[#D4A017]
                sm:text-3xl
              "
            >
              OUR SERVICES
            </h2>

            <div
              className="
                mt-5
                space-y-1
                text-xs
                leading-5
                tracking-wide
                sm:text-sm
                sm:leading-6
              "
            >
              {services.map((service) => (
                <p key={service}>
                  <span className="text-[#D4A017]">•</span>{" "}
                  {service}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES WE SERVE
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            py-12
            sm:px-8
            sm:py-14
            md:px-12
            lg:px-[80px]
          "
        >
          <SectionTitle>
            Industries We Serve
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-4
              max-w-[820px]
              text-center
              text-sm
              font-semibold
              leading-6
              tracking-wide
              text-slate-500
            "
          >
            Empowering businesses across diverse sectors with expert tender
            consultancy, bid management, and strategic procurement support.
          </p>

          <div
            className="
              mx-auto
              mt-8
              grid
              max-w-[1150px]
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {industries.map((industry) => (
              <OldStyleCard
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
                px-10
                py-3
                text-sm
                font-medium
                text-[#071B3B]
                shadow-[0_5px_15px_rgba(0,0,0,0.12)]
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
          LOCATIONS WE SERVE
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            py-12
            sm:px-8
            sm:py-14
            md:px-12
            lg:px-[80px]
          "
        >
          <SectionTitle>
            Locations We Serve
          </SectionTitle>

          <div
            className="
              mx-auto
              mt-8
              grid
              max-w-[1150px]
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {locations.map((location) => (
              <OldStyleCard
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
                px-10
                py-3
                text-sm
                font-medium
                text-[#071B3B]
                shadow-[0_5px_15px_rgba(0,0,0,0.12)]
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
          OUR VISION
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1060px]
            px-5
            py-8
            sm:px-6
            sm:py-10
          "
        >
          <div
            className="
              rounded-[24px]
              bg-slate-900
              px-6
              py-8
              text-center
              sm:px-10
              sm:py-9
            "
          >
            <h2
              className="
                font-serif
                text-3xl
                font-semibold
                tracking-widest
                text-[#D4A017]
              "
            >
              OUR VISION
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[820px]
                text-sm
                leading-6
                tracking-wide
                text-white
              "
            >
              To become India&apos;s most trusted and professional Tender
              Consultancy Platform by delivering reliable, transparent, and
              End-to-End Tender Consulting Services across every industry
              sector.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY TENDER ELITE
      ====================================================== */}

      <section className="bg-slate-900 text-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            py-12
            sm:px-8
            sm:py-14
            md:px-12
            lg:px-[80px]
          "
        >
          <SectionTitle dark>
            Why Tender Elite?
          </SectionTitle>

          {/* ROW 1 */}

          <div
            className="
              mt-9
              grid
              gap-5
              lg:grid-cols-[270px_1fr]
            "
          >
            <article
              className="
                flex
                min-h-[180px]
                items-center
                justify-center
                rounded-[18px]
                border-[2px]
                border-[#D4A017]
                bg-white
                p-6
                text-center
              "
            >
              <h3
                className="
                  font-serif
                  text-2xl
                  font-semibold
                  leading-tight
                  tracking-wide
                  text-[#D4A017]
                  sm:text-3xl
                "
              >
                Practical Industry Experience
              </h3>
            </article>

            <article
              className="
                flex
                min-h-[180px]
                items-center
                justify-center
                rounded-[18px]
                border-[2px]
                border-[#D4A017]
                bg-white
                px-6
                py-7
                text-center
              "
            >
              <p className="max-w-[800px] text-base leading-7 text-[#071B3B] sm:text-lg">
                Our consultancy is built on real tender industry experience,
                not just theoretical knowledge.
              </p>
            </article>
          </div>

          {/* ROW 2 */}

          <div
            className="
              mt-5
              grid
              gap-5
              lg:grid-cols-[1fr_270px]
            "
          >
            <article
              className="
                flex
                min-h-[180px]
                items-center
                justify-center
                rounded-[18px]
                border-[2px]
                border-[#D4A017]
                bg-white
                px-6
                py-7
                text-center
              "
            >
              <p className="max-w-[800px] text-base leading-7 text-[#071B3B] sm:text-lg">
                We support businesses throughout the complete tender lifecycle
                - from understanding requirements to final submission
                assistance.
              </p>
            </article>

            <article
              className="
                flex
                min-h-[180px]
                items-center
                justify-center
                rounded-[18px]
                border-[2px]
                border-[#D4A017]
                bg-white
                p-6
                text-center
              "
            >
              <h3
                className="
                  font-serif
                  text-2xl
                  font-semibold
                  leading-tight
                  tracking-wide
                  text-[#D4A017]
                  sm:text-3xl
                "
              >
                End-to-End Professional Support
              </h3>
            </article>
          </div>

          {/* ROW 3 */}

          <div
            className="
              mt-5
              grid
              gap-5
              lg:grid-cols-[270px_1fr]
            "
          >
            <article
              className="
                flex
                min-h-[180px]
                items-center
                justify-center
                rounded-[18px]
                border-[2px]
                border-[#D4A017]
                bg-white
                p-6
                text-center
              "
            >
              <h3
                className="
                  font-serif
                  text-2xl
                  font-semibold
                  leading-tight
                  tracking-wide
                  text-[#D4A017]
                  sm:text-3xl
                "
              >
                Multi-Platform Expertise
              </h3>
            </article>

            <article
              className="
                flex
                min-h-[180px]
                items-center
                justify-center
                rounded-[18px]
                border-[2px]
                border-[#D4A017]
                bg-white
                px-6
                py-7
                text-center
              "
            >
              <p className="max-w-[800px] text-base leading-7 text-[#071B3B] sm:text-lg">
                Experience across Central Government, State Government, PSU,
                GeM, and Private Tender Platforms.
              </p>
            </article>
          </div>

          {/* ROW 4 */}

          <div
            className="
              mt-5
              grid
              gap-5
              lg:grid-cols-[1fr_270px]
            "
          >
            <article
              className="
                flex
                min-h-[180px]
                items-center
                justify-center
                rounded-[18px]
                border-[2px]
                border-[#D4A017]
                bg-white
                px-6
                py-7
                text-center
              "
            >
              <p className="max-w-[800px] text-base leading-7 text-[#071B3B] sm:text-lg">
                We focus on proper documentation, compliance verification, and
                professional bid preparation to minimize errors and improve
                efficiency.
              </p>
            </article>

            <article
              className="
                flex
                min-h-[180px]
                items-center
                justify-center
                rounded-[18px]
                border-[2px]
                border-[#D4A017]
                bg-white
                p-6
                text-center
              "
            >
              <h3
                className="
                  font-serif
                  text-2xl
                  font-semibold
                  leading-tight
                  tracking-wide
                  text-[#D4A017]
                  sm:text-3xl
                "
              >
                Accuracy{" "}
                <span className="font-sans">
                  &amp;
                </span>{" "}
                Compliance Focus
              </h3>
            </article>
          </div>

          {/* ROW 5 */}

          <div
            className="
              mt-5
              grid
              gap-5
              lg:grid-cols-[270px_1fr]
            "
          >
            <article
              className="
                flex
                min-h-[180px]
                items-center
                justify-center
                rounded-[18px]
                border-[2px]
                border-[#D4A017]
                bg-white
                p-6
                text-center
              "
            >
              <h3
                className="
                  font-serif
                  text-2xl
                  font-semibold
                  leading-tight
                  tracking-wide
                  text-[#D4A017]
                  sm:text-3xl
                "
              >
                Client-Centric Approach
              </h3>
            </article>

            <article
              className="
                flex
                min-h-[180px]
                flex-col
                justify-center
                rounded-[18px]
                border-[2px]
                border-[#D4A017]
                bg-white
                p-6
                text-center
              "
            >
              <p className="text-base leading-7 text-[#071B3B] sm:text-lg">
                Every client requirement is handled with professionalism,
                transparency, and dedicated support.
              </p>

              <div
                className="
                  mx-auto
                  mt-5
                  grid
                  w-full
                  max-w-[760px]
                  gap-2
                  text-sm
                  font-medium
                  text-[#071B3B]
                  sm:grid-cols-2
                "
              >
                <p>• 15+ Years Combined Industry Experience</p>
                <p>• 5000+ Tender Submission Experience</p>
                <p>• Multiple Industry Sectors</p>
                <p>• Professional Consultancy Approach</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION + PARTNER
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1440px]
            gap-5
            px-5
            py-10
            sm:px-8
            sm:py-12
            md:px-12
            lg:grid-cols-2
            lg:px-[80px]
          "
        >
          {/* MISSION */}

          <article
            className="
              rounded-[18px]
              bg-[#071B3B]
              px-6
              py-9
              text-center
              text-white
              sm:px-8
              sm:py-10
            "
          >
            <h2
              className="
                font-serif
                text-3xl
                font-semibold
                tracking-widest
                text-[#D4A017]
              "
            >
              OUR MISSION
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-6 tracking-wide">
              <p>
                Our mission is to simplify the tendering process and help
                businesses participate more confidently through professional
                consultancy, strategic guidance, and reliable support.
              </p>

              <p>
                At Tender Elite, we are not just consultants — we are
                professionals who understand the challenges of the tender
                industry because we have experienced them ourselves.
              </p>

              <p className="text-[#D4A017]">
                We believe every business deserves the right guidance to
                compete professionally and grow successfully.
              </p>
            </div>
          </article>

          {/* PARTNER */}

          <article
            className="
              rounded-[18px]
              border-[3px]
              border-[#D4A017]
              bg-white
              px-6
              py-9
              text-center
              shadow-[0_8px_20px_rgba(0,0,0,0.08)]
              sm:px-8
              sm:py-10
            "
          >
            <h2
              className="
                font-serif
                text-3xl
                font-semibold
                tracking-widest
                text-[#D4A017]
              "
            >
              Partner with Tender Elite
            </h2>

            <p className="mt-5 text-base tracking-widest text-slate-500">
              Reach out to our expert team today.
            </p>

            <Link
              href="/contact"
              className="
                mx-auto
                mt-7
                inline-flex
                min-w-[235px]
                items-center
                justify-center
                gap-3
                rounded-[30px]
                bg-[#B71432]
                px-7
                py-3
                text-sm
                font-semibold
                tracking-widest
                text-white
                shadow-md
                transition-all
                hover:-translate-y-1
                hover:bg-[#971029]
              "
            >
              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#071B3B]
                "
              >
                →
              </span>

              Let&apos;s Connect
            </Link>
          </article>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />
    </main>
  );
}