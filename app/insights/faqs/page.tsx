import Link from "next/link";

/* =========================================================
   DATA
========================================================= */

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about-us" },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
];

const footerServices = [
  "Tender Submission Services",
  "GeM Catalogue Management",
  "Tender Portal Registration",
  "Bid Management",
  "Vendor Assessment",
  "Joint Venture Support",
];

const serifFont = "Georgia, 'Times New Roman', serif";
const sansFont = "Arial, Helvetica, sans-serif";

/* =========================================================
   HEADER
========================================================= */

function Header() {
  return (
    <header className="relative z-[100] border-b-4 border-[#D4A017] bg-white">
      <div
        className="
          mx-auto flex min-h-[72px]
          w-full max-w-[1440px]
          items-center px-3
          sm:min-h-[82px] sm:px-5
          md:px-7
          lg:min-h-[90px] lg:px-10
        "
      >
        {/* LOGO */}

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

        {/* DESKTOP NAV */}

        <nav className="ml-auto hidden items-center gap-2 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                rounded-[20px]
                border border-slate-200
                bg-[#D4A017]
                px-6 py-3
                text-sm
                font-bold
                text-black
                shadow-[0_8px_18px_rgba(0,0,0,0.12)]
                transition-all duration-200
                hover:-translate-y-0.5
                hover:text-white
              "
              style={{ fontFamily: sansFont }}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="
              ml-2
              rounded-[20px]
              border border-[#D4A017]
              bg-[#B71432]
              px-7 py-3
              text-sm
              font-bold
              text-white
              shadow-[0_8px_18px_rgba(0,0,0,0.12)]
              transition-all duration-200
              hover:-translate-y-0.5
              hover:bg-[#971029]
            "
            style={{ fontFamily: sansFont }}
          >
            Contact Us
          </Link>
        </nav>

        {/* MOBILE NAV */}

        <details className="relative ml-auto xl:hidden">
          <summary
            className="
              flex h-10 w-10
              cursor-pointer
              list-none
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
              overflow-hidden
              rounded-2xl
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
                  text-base
                  font-semibold
                  text-[#071B3B]
                  transition-colors
                  hover:bg-[#D4A017]
                  hover:text-white
                "
                style={{ fontFamily: sansFont }}
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
                text-center
                text-base
                font-semibold
                text-white
                hover:bg-[#971029]
              "
              style={{ fontFamily: sansFont }}
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

export default function FAQsPage() {
  return (
    <main
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-white
        text-[#071B3B]
      "
      style={{ fontFamily: sansFont }}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header />

      {/* =====================================================
          FAQ MAIN SECTION
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            py-10
            sm:px-8
            sm:py-12
            md:px-12
            lg:px-[80px]
            lg:py-[38px]
          "
        >
          {/* =================================================
              TITLE
          ================================================== */}

          <h1
            className="
              text-center
              text-4xl
              font-bold
              leading-[1.05]
              text-[#D4A017]
              sm:text-5xl
              lg:text-[50px]
            "
            style={{ fontFamily: serifFont }}
          >
            Frequently Asked Questions
          </h1>

          {/* =================================================
              SUBTITLE
          ================================================== */}

          <h2
            className="
              mx-auto
              mt-3
              max-w-[1000px]
              text-center
              text-2xl
              font-bold
              leading-[1.2]
              text-black
              sm:text-3xl
              lg:text-[32px]
            "
            style={{ fontFamily: serifFont }}
          >
            Quick Answers. Clear Guidance.
          </h2>

          {/* =================================================
              CONTENT + IMAGE
          ================================================== */}

          <div
            className="
              mt-10
              grid
              items-start
              gap-8
              lg:grid-cols-[minmax(0,1fr)_625px]
              lg:gap-[45px]
            "
          >
            {/* LEFT CONTENT */}

            <div>
              <p
                className="
                  text-[15px]
                  font-semibold
                  leading-[1.45]
                  text-black
                  sm:text-[16px]
                "
                style={{ fontFamily: serifFont }}
              >
                The Frequently Asked Questions (FAQs) section has been
                developed to provide simple, accurate, and practical answers
                to the questions most commonly asked about government tenders
                and procurement.
              </p>

              <p
                className="
                  mt-6
                  text-[15px]
                  font-semibold
                  leading-[1.45]
                  text-black
                  sm:text-[16px]
                "
                style={{ fontFamily: serifFont }}
              >
                Whether your queries relate to eligibility criteria, tender
                documents, EMD, GeM registration, bid submission, BOQ
                preparation, compliance requirements, technical qualifications,
                financial documents, or the tender evaluation process, you&apos;ll
                find reliable guidance here.
              </p>

              <p
                className="
                  mt-6
                  text-[15px]
                  font-semibold
                  leading-[1.45]
                  text-black
                  sm:text-[16px]
                "
                style={{ fontFamily: serifFont }}
              >
                Our goal is to save your time, eliminate confusion, and help you
                find the information you need quickly and confidently.
              </p>

              <p
                className="
                  mt-6
                  text-[15px]
                  font-semibold
                  leading-[1.45]
                  text-black
                  sm:text-[16px]
                "
                style={{ fontFamily: serifFont }}
              >
                If you cannot find the answer you&apos;re looking for, our team
                is always happy to assist you.
              </p>
            </div>

            {/* RIGHT IMAGE — 625 × 328 PX */}

            <div
              className="
                flex
                w-full
                justify-center
                lg:justify-end
              "
            >
              <img
                src="/images/faqs.png"
                alt="Frequently Asked Questions"
                width={625}
                height={328}
                className="
                  block
                  h-[328px]
                  w-[625px]
                  max-w-full
                  rounded-[20px]
                  object-cover
                "
              />
            </div>
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