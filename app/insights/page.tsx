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

const benefitItems = [
  "Students who want to understand the tender industry",
  "Startups and aspiring entrepreneurs beginning their business journey",
  "MSMEs, contractors, suppliers, and manufacturers exploring government business opportunities",
  "Business owners looking to expand into public procurement",
  "Professionals seeking practical guidance and industry knowledge",
  "Anyone interested in learning how the tender ecosystem works",
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

export default function InsightsPage() {
  return (
    <main
      className="w-full overflow-x-hidden bg-white text-[#071B3B]"
      style={{ fontFamily: sansFont }}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header />

      {/* =====================================================
          HERO / WELCOME
      ====================================================== */}

      <section className="bg-black">
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
            lg:py-[45px]
          "
        >
          {/* HEADING */}

          <h1
            className="
              text-[34px]
              font-bold
              leading-[1.1]
              text-[#D4A017]
              sm:text-[42px]
              lg:text-[48px]
            "
            style={{ fontFamily: serifFont }}
          >
            Welcome to the Insights Section of Tender Elite
          </h1>

          {/* GOLD LINE */}

          <div className="mt-3 h-[2px] w-full bg-[#D4A017]" />

          {/* HERO GRID */}

          <div
            className="
              mt-2
              grid
              items-center
              gap-6
              lg:grid-cols-[minmax(0,1fr)_0.72fr]
              lg:gap-[35px]
            "
          >
            {/* LEFT CONTENT */}

            <div className="pt-3">
              <p
                className="
                  max-w-[700px]
                  text-[15px]
                  leading-[1.35]
                  text-white
                  sm:text-[16px]
                "
              >
                At Tender Elite, our vision extends far beyond providing
                professional tender consultancy services.
              </p>

              <p
                className="
                  mt-6
                  max-w-[700px]
                  text-[15px]
                  leading-[1.35]
                  text-white
                  sm:text-[16px]
                "
              >
                We believe that knowledge is one of the most valuable
                resources for growth, and it should be accessible to everyone
                who wishes to learn, innovate, and build a successful future in
                the tender and procurement industry.
              </p>

              <p
                className="
                  mt-6
                  max-w-[700px]
                  text-[15px]
                  leading-[1.35]
                  text-white
                  sm:text-[16px]
                "
              >
                The Insights section has been created with a simple purpose - to
                educate, guide, and empower individuals and businesses through
                practical, reliable, and easy-to-understand knowledge.
              </p>

              <p
                className="
                  mt-6
                  max-w-[700px]
                  text-[15px]
                  leading-[1.35]
                  text-white
                  sm:text-[16px]
                "
              >
                Whether you are taking your first step into government
                procurement or looking to expand your expertise, this platform
                is designed to support your learning journey.
              </p>
            </div>

            {/* RIGHT TE LOGO */}

            <div
              className="
                flex
                items-center
                justify-center
                lg:justify-end
              "
            >
              <img
                src="/images/insights1.png"
                alt="Tender Elite"
                className="
                  h-[240px]
                  w-[240px]
                  object-contain
                  sm:h-[280px]
                  sm:w-[280px]
                  lg:h-[330px]
                  lg:w-[330px]
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY WE CREATED THIS PLATFORM
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
            lg:py-[52px]
          "
        >
          <h2
            className="
              text-3xl
              font-bold
              leading-[1.15]
              text-[#D4A017]
              sm:text-4xl
              md:text-5xl
            "
            style={{ fontFamily: serifFont }}
          >
            Why We Created This Platform
          </h2>

          <div className="mt-7 max-w-[1280px]">
            <p className="text-[15px] leading-[1.4] text-black sm:text-base">
              The tender ecosystem can often seem complex. Individuals
              frequently spend hours searching across multiple websites to
              understand tender procedures, documentation, eligibility
              criteria, compliance requirements, bid preparation, and industry
              best practices.
            </p>

            <p className="mt-5 text-[15px] leading-[1.4] text-black sm:text-base">
              Our objective is to simplify this process by bringing valuable
              knowledge together in one place.
            </p>

            <p className="mt-5 text-[15px] leading-[1.4] text-black sm:text-base">
              Instead of keeping our experience limited to ourselves, we
              believe in sharing it so that entrepreneurs, businesses,
              students, and professionals can make informed decisions and
              confidently participate in the tender ecosystem.
            </p>

            <p className="mt-5 text-[15px] leading-[1.4] text-black sm:text-base">
              Because at{" "}
              <span className="font-semibold text-[#D4A017]">
                Tender Elite
              </span>
              , we believe:
              <br />
              <span className="font-semibold">
                Knowledge becomes more valuable when it is shared.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO CAN BENEFIT
      ====================================================== */}

      <section className="bg-[#071B3B]">
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
            lg:py-[45px]
          "
        >
          <h2
            className="
              text-3xl
              font-bold
              leading-[1.1]
              text-[#D4A017]
              sm:text-4xl
              md:text-5xl
            "
            style={{ fontFamily: serifFont }}
          >
            Who Can Benefit ?
          </h2>

          <div
            className="
              mt-7
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-start
              lg:gap-[45px]
            "
          >
            {/* LEFT */}

            <div className="flex-1 min-w-0">
              <p
                className="
                  max-w-[650px]
                  text-[15px]
                  leading-[1.35]
                  text-white
                  sm:text-base
                "
              >
                Our Insights platform has been created for everyone interested
                in the world of tenders and government procurement, including:
              </p>

              <div className="mt-5 max-w-[650px] space-y-[5px]">
                {benefitItems.map((item) => (
                  <p
                    key={item}
                    className="
                      text-[15px]
                      leading-[1.25]
                      text-white
                      sm:text-base
                    "
                  >
                    • {item}
                  </p>
                ))}
              </div>

              <div className="mt-8 max-w-[650px]">
                <p
                  className="
                    text-[15px]
                    leading-[1.35]
                    text-white
                    sm:text-base
                  "
                >
                  We are entrepreneurs ourselves, and we understand the
                  challenges, risks, responsibilities, and aspirations that
                  come with building a business from the ground up.
                </p>

                <p
                  className="
                    mt-1
                    text-[15px]
                    leading-[1.35]
                    text-white
                    sm:text-base
                  "
                >
                  That is why we genuinely enjoy connecting with fellow
                  entrepreneurs, exchanging ideas, sharing experiences, and
                  helping others move forward with confidence.
                </p>

                <p
                  className="
                    mt-5
                    text-[15px]
                    leading-[1.35]
                    text-white
                    sm:text-base
                  "
                >
                  To make learning easier, the Insights section is divided
                  into three dedicated categories
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div
              className="
                flex
                w-full
                justify-center
                lg:w-[650px]
                lg:shrink-0
                lg:justify-end
              "
            >
              <img
                src="/images/insights2.png"
                alt="Insights platform"
                width={650}
                height={433}
                className="
                  block
                  h-[433px]
                  w-[650px]
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
          THREE INSIGHTS CARDS
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1440px]
            grid-cols-1
            gap-5
            px-5
            py-12
            sm:px-8
            md:px-12
            lg:grid-cols-3
            lg:px-[80px]
            lg:py-[45px]
          "
        >
          {/* TENDER UNIVERSITY */}

          <Link
            href="/insights/tender-university"
            className="
              group
              relative
              min-h-[420px]
              overflow-hidden
              rounded-[32px]
              bg-[#071B3B]
              px-8
              py-9
              shadow-[0_10px_25px_rgba(0,0,0,0.12)]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_18px_32px_rgba(0,0,0,0.20)]
              sm:min-h-[460px]
              sm:px-10
              sm:py-10
              lg:px-[40px]
            "
          >
            <h3
              className="
                max-w-[270px]
                text-[40px]
                font-bold
                leading-[1.05]
                text-[#D4A017]
                sm:text-[44px]
              "
              style={{ fontFamily: serifFont }}
            >
              Tender
              <br />
              University
            </h3>

            <p
              className="
                mt-8
                max-w-[310px]
                text-[24px]
                font-medium
                leading-[1.35]
                text-white
                sm:text-[26px]
              "
              style={{ fontFamily: serifFont }}
            >
              Welcome to Tender University, the educational hub of Tender
              Elite.
            </p>

            <span
              className="
                absolute
                bottom-7
                right-6
                flex h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-[#D4A017]
                text-xl
                font-bold
                text-[#071B3B]
                transition-transform
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>

          {/* BLOGS */}

          <Link
            href="/insights/blogs"
            className="
              group
              relative
              min-h-[420px]
              overflow-hidden
              rounded-[32px]
              bg-[#071B3B]
              px-8
              py-9
              shadow-[0_10px_25px_rgba(0,0,0,0.12)]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_18px_32px_rgba(0,0,0,0.20)]
              sm:min-h-[460px]
              sm:px-10
              sm:py-10
              lg:px-[40px]
            "
          >
            <h3
              className="
                text-[44px]
                font-bold
                leading-[1.05]
                text-[#D4A017]
                sm:text-[48px]
              "
              style={{ fontFamily: serifFont }}
            >
              Blogs
            </h3>

            <p
              className="
                mt-8
                max-w-[310px]
                whitespace-pre-line
                text-[24px]
                font-medium
                leading-[1.42]
                text-white
                sm:text-[26px]
              "
              style={{ fontFamily: serifFont }}
            >
              {`Insights That Keep
You Ahead.

Knowledge evolves
every day-and so do
we.`}
            </p>

            <span
              className="
                absolute
                bottom-7
                right-6
                flex h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-[#D4A017]
                text-xl
                font-bold
                text-[#071B3B]
                transition-transform
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>

          {/* FAQ */}

          <Link
            href="/insights/faqs"
            className="
              group
              relative
              min-h-[420px]
              overflow-hidden
              rounded-[32px]
              bg-[#071B3B]
              px-8
              py-9
              shadow-[0_10px_25px_rgba(0,0,0,0.12)]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_18px_32px_rgba(0,0,0,0.20)]
              sm:min-h-[460px]
              sm:px-10
              sm:py-10
              lg:px-[40px]
            "
          >
            <h3
              className="
                max-w-[320px]
                text-[40px]
                font-bold
                leading-[1.05]
                text-[#D4A017]
                sm:text-[44px]
              "
              style={{ fontFamily: serifFont }}
            >
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h3>

            <p
              className="
                mt-7
                text-[24px]
                font-medium
                leading-[1.4]
                text-white
                sm:text-[26px]
              "
              style={{ fontFamily: serifFont }}
            >
              Quick Answers.
              <br />
              Clear Guidance.
            </p>

            <span
              className="
                absolute
                bottom-7
                right-6
                flex h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-[#D4A017]
                text-xl
                font-bold
                text-[#071B3B]
                transition-transform
                group-hover:translate-x-1
              "
            >
              →
            </span>
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