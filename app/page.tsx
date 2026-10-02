import Link from "next/link";

const services = [
  [
    "Tender Submission Services",
    "End-to-end support for accurate and timely tender submissions.",
    "/services/tender-submission",
  ],
  [
    "Bid Management Support",
    "Strategic bid planning and management to maximize winning opportunities.",
    "/services/bid-management-support",
  ],
  [
    "Tender Portal Registration",
    "Complete registration assistance across government, private, and PSU procurement portals.",
    "/services/tender-portal-registration",
  ],
  [
    "Tender Documentation & Compliance",
    "Preparation and verification of tender documents to ensure full compliance.",
    "/services/tender-documentation-compliance",
  ],
  [
    "GeM Product Listing & Uploading",
    "Professional product listing and catalog upload services on the GeM portal.",
    "/services/gem-product-listing-uploading",
  ],
  [
    "GeM Catalogue Management Services",
    "Efficient management and optimization of GeM product catalogs for better visibility.",
    "/services/gem-catalogue-management",
  ],
  [
    "Vendor Assessment Support",
    "Expert guidance for successful vendor evaluations and qualification processes.",
    "/services/vendor-assessment-support",
  ],
  [
    "Joint Venture (JV) Support",
    "Comprehensive assistance in forming and managing strategic joint venture partnerships.",
    "/services/joint-venture-consortium-formation",
  ],
];

const industries = [
  ["Infrastructure", "/images/infrastructure.png", "/industries/construction-infrastructure"],
  ["IT & Software", "/images/itsoftware.png", "/industries/information-technology"],
  ["Pharmaceuticals", "/images/pharmaceuticals.png", "/industries/pharmaceutical"],
  ["Engineering", "/images/engineering.png", "/industries/mechanical-engineering"],
  ["Security Services", "/images/securityservices.png", "/industries/security-surveillance"],
  ["Facility Management", "/images/facilitymanagement.png", "/industries/facility-management"],
  ["Logistics", "/images/logistics.png", "/industries/logistics-supply-chain"],
  ["Healthcare", "/images/healthcare.png", "/industries/healthcare-medical"],
];

const advantages = [
  [
    "Professional Support",
    "Experienced experts from industry veterans who understand the bidding landscape.",
  ],
  [
    "Accurate Documentation",
    "Precision in every document and estimate to ensure compliance risks are minimized.",
  ],
  [
    "End-to-End Handling",
    "We take care of the entire process from search to final submission.",
  ],
  [
    "Timely Submission",
    "Strict adherence to deadlines to ensure your bids are always filed on time.",
  ],
  [
    "Industry Expertise",
    "Deep knowledge across IT, Healthcare and Infrastructure sectors.",
  ],
  [
    "Reliable Process",
    "Transparent and standardized procedures that you can trust completely.",
  ],
  [
    "Personalized Assistance",
    "Tailored strategies that align with your specific business goals and scale.",
  ],
  [
    "Quality Commitment",
    "Dedicated to delivering excellence in documentation and strategy.",
  ],
];

const locations = [
  ["Maharashtra", "/images/maharashtracard.png", "/states/maharashtra"],
  ["Karnataka", "/images/karnatakacard.png", "/states/karnataka"],
  ["Kerala", "/images/keralacard.png", "/states/kerala"],
  ["Gujarat", "/images/gujaratcard.png", "/states/gujarat"],
  ["Uttar Pradesh", "/images/uttarpradeshcard.png", "/states/uttar-pradesh"],
  ["Punjab", "/images/punjabcard.png", "/states/punjab"],
  ["Rajasthan", "/images/rajasthancard.png", "/states/rajasthan"],
  ["Tamil Nadu", "/images/tamilnaducard.png", "/states/tamil-nadu"],
];

function ArrowButton() {
  return (
    <span className="absolute bottom-4 right-4 flex size-8 items-center justify-center rounded-full bg-[#D4A017] text-base text-[#071B3B] shadow-md transition-all duration-200 group-hover:translate-x-0.5 group-hover:shadow-[0_0_12px_rgba(212,160,23,0.35)] sm:size-9 sm:text-lg">
      →
    </span>
  );
}

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-4xl px-2 text-center">
      <h2 className="font-serif text-3xl font-bold tracking-[2px] text-[#D4A017] sm:text-4xl sm:tracking-[3px] md:text-5xl lg:text-[56px]">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-6 tracking-wide text-slate-500 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
        {description}
      </p>
    </div>
  );
}

const viewMoreClass =
  "inline-flex rounded-2xl bg-[#D4A017] px-7 py-3 text-sm font-bold text-[#071B3B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(212,160,23,0.3)] sm:px-8 sm:text-base";

const locationViewMoreClass =
  "inline-flex h-11 w-[150px] items-center justify-center rounded-2xl bg-[#D4A017] text-sm font-bold text-[#071B3B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(212,160,23,0.3)] sm:w-[160px] sm:text-base";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071B3B]">

      {/* =========================================================
          HEADER
      ========================================================== */}
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

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="bg-[#071B3B] text-white">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 sm:py-14 md:gap-12 md:px-10 md:py-16 xl:min-h-[620px] xl:grid-cols-[1.05fr_.95fr] xl:px-20 xl:py-20">

          <div>
            <h1 className="font-serif text-[42px] font-bold leading-[1.05] sm:text-5xl md:text-6xl xl:text-[64px]">
              YOUR TRUSTED
              <span className="mt-2 block text-[#D4A017]">
                TENDER PARTNER
              </span>
            </h1>

            <div className="my-6 h-0.5 w-full max-w-[575px] rounded-full bg-[#D4A017] sm:my-7" />

            <p className="max-w-[644px] font-serif text-base leading-7 text-slate-200 sm:text-lg sm:leading-8 md:text-xl">
              Navigate the complexities of bidding with confidence. We provide
              expert-led consultancy and end-to-end support to help you secure
              high-value opportunities across government and private sectors.
            </p>
          </div>

          <div className="group mx-auto w-full max-w-[620px] overflow-hidden rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
            <img
              src="/images/hero.png"
              alt="Tender consultancy"
              className="aspect-[623/416] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 px-5 pb-8 sm:grid-cols-2 sm:px-8 md:px-10 xl:grid-cols-4 xl:px-16 xl:pb-10">
          {[
            "Professional Support",
            "Accurate Documentation",
            "End-To-End Handling",
            "Timely Submission",
          ].map((item) => (
            <div
              key={item}
              className="flex min-h-[92px] items-center justify-center rounded-[20px] border border-transparent bg-white px-4 text-center text-lg font-bold text-[#D4A017] shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-200 hover:-translate-y-1 hover:border-[#D4A017] hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] sm:min-h-[110px] sm:text-xl xl:min-h-[120px]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 md:px-10 xl:px-12 xl:py-24">
        <SectionTitle
          title="Our Services"
          description="We provide a full spectrum of tender consultancy services designed to maximize your win probability and streamline the submission process."
        />

        <div className="mx-auto mt-10 grid max-w-[1215px] grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 md:mt-12">
          {services.map(([title, description, link]) => (
            <Link
              href={link}
              key={title}
              className="group relative flex min-h-[180px] flex-col rounded-2xl border border-transparent bg-[#071B3B] p-5 text-white transition-all duration-200 hover:-translate-y-1 hover:border-[#D4A017] hover:shadow-[0_12px_28px_rgba(7,27,59,0.25)] sm:min-h-[195px] sm:p-6 xl:min-h-[205px] xl:p-7"
            >
              <h3 className="pr-7 font-sans text-base font-semibold leading-6 text-[#D4A017] transition-colors duration-200 group-hover:text-[#F1C84B] sm:text-lg sm:leading-7">
                {title}
              </h3>

              <p className="mt-4 pr-7 text-[13px] leading-5 text-white/90 sm:mt-5 sm:text-sm sm:leading-6">
                {description}
              </p>

              <ArrowButton />
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <Link
            href="/services"
            className={viewMoreClass}
          >
            View More
          </Link>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================== */}
      <section className="bg-[#071B3B] px-5 py-16 sm:px-8 sm:py-20 md:px-10 xl:px-12 xl:py-24">
        <SectionTitle
          title="Industries We Serve"
          description="Empowering businesses across diverse sectors with expert tender consultancy, bid management, and strategic procurement support."
        />

        <div className="mx-auto mt-10 grid max-w-[1170px] grid-cols-1 justify-items-center gap-y-6 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-7 xl:grid-cols-4 xl:gap-x-[45px] xl:gap-y-[50px] md:mt-12">
          {industries.map(([name, image, link]) => (
            <Link
              href={link}
              key={name}
              className="group relative h-[190px] w-full max-w-[270px] overflow-hidden rounded-[20px] border-[3px] border-[#D4A017] shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(0,0,0,0.3)] sm:h-[200px]"
            >
              <img
                src={image}
                alt={name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              <span className="absolute bottom-3 left-1/2 flex min-h-[28px] -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-full border-2 border-[#D4A017] bg-[#071B3B] px-4 py-1 text-[13px] font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,0.45)] transition-all duration-200 group-hover:bg-[#D4A017] group-hover:text-[#071B3B] sm:px-5 sm:text-[15px]">
                {name}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <Link
            href="/industries"
            className={viewMoreClass}
          >
            View More
          </Link>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================== */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 md:px-10 xl:px-12 xl:py-24">
        <SectionTitle
          title="Why Businesses Choose Tender Elite"
          description="We provide the edge you need to succeed in competitive bidding environments."
        />

        <div className="mx-auto mt-10 grid max-w-[1215px] grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 md:mt-12">
          {advantages.map(([title, description]) => (
            <div
              key={title}
              className="group min-h-[170px] rounded-[20px] border border-transparent bg-[#071B3B] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-[#D4A017] hover:shadow-[0_12px_28px_rgba(7,27,59,0.22)] sm:min-h-[180px] sm:p-7 xl:p-8"
            >
              <h3 className="font-sans text-base font-semibold leading-6 text-[#D4A017] transition-colors duration-200 group-hover:text-[#F1C84B] sm:text-lg sm:leading-7">
                {title}
              </h3>

              <p className="mt-2 text-[13px] leading-5 text-white sm:text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          LOCATIONS
      ========================================================== */}
      <section className="bg-[#071B3B] px-5 py-16 sm:px-8 sm:py-20 md:px-10 xl:px-12 xl:py-24">
        <SectionTitle
          title="Locations We Serve"
          description="Expanding our tender consultancy and procurement support across major business regions in India."
        />

        <div className="mx-auto mt-10 grid max-w-[1170px] grid-cols-1 justify-items-center gap-y-6 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-7 xl:grid-cols-4 xl:gap-x-[45px] xl:gap-y-[50px] md:mt-12">
          {locations.map(([name, image, link]) => (
            <Link
              href={link}
              key={name}
              className="group relative h-[190px] w-full max-w-[270px] overflow-hidden rounded-[20px] border-[3px] border-[#D4A017] shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(0,0,0,0.3)] sm:h-[200px]"
            >
              <img
                src={image}
                alt={name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <span className="absolute bottom-3 left-1/2 flex min-h-[28px] -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-full border-2 border-[#D4A017] bg-[#071B3B] px-4 py-1 text-[13px] font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,0.45)] transition-all duration-200 group-hover:bg-[#D4A017] group-hover:text-[#071B3B] sm:px-5 sm:text-[15px]">
                {name}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <Link
            href="/contact"
            className={locationViewMoreClass}
          >
            View More
          </Link>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================== */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 md:px-10 xl:px-20 xl:py-24">
        <div className="mx-auto max-w-[1280px]">

          <h2 className="font-serif text-3xl font-bold tracking-[2px] text-[#071B3B] sm:text-4xl sm:tracking-[3px] lg:text-5xl">
            Let&apos;s Secure Your Next Big Win
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 tracking-wide text-slate-500 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
            Have a specific tender in mind? Or want to discuss how we can
            support your bidding strategy? Reach out to our expert team today.
          </p>

          <div className="mt-10 grid gap-8 xl:mt-12 xl:grid-cols-[280px_1fr] xl:gap-10">

            {/* CONTACT INFO */}
            <div className="space-y-6 sm:space-y-7">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-[18px] bg-[#071B3B] text-xl text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#D4A017] hover:text-[#071B3B] hover:shadow-lg sm:size-16 sm:text-2xl">
                  ☎
                </div>

                <div>
                  <p className="text-sm font-semibold tracking-wider text-[#071B3B]">
                    CALL US
                  </p>

                  <p className="mt-1 text-sm text-slate-500 sm:text-base">
                    +91 7045060062
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-[18px] bg-[#071B3B] text-xl text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#D4A017] hover:text-[#071B3B] hover:shadow-lg sm:size-16 sm:text-2xl">
                  ✉
                </div>

                <div>
                  <p className="text-sm font-semibold tracking-wider text-[#071B3B]">
                    EMAIL US
                  </p>

                  <p className="mt-1 text-sm text-slate-500 sm:text-base">
                    sales@tenderelite.com
                  </p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form className="rounded-[20px] border border-slate-200 bg-slate-50 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.15)] sm:p-7 md:p-8 xl:p-10">

              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 md:gap-7">

                <label className="block">
                  <span className="text-sm font-semibold tracking-wider text-[#071B3B]">
                    Full Name
                  </span>

                  <input
                    type="text"
                    name="fullName"
                    className="mt-2 h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition-all duration-200 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold tracking-wider text-[#071B3B]">
                    Company Name
                  </span>

                  <input
                    type="text"
                    name="companyName"
                    className="mt-2 h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition-all duration-200 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold tracking-wider text-[#071B3B]">
                    Phone Number
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    className="mt-2 h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition-all duration-200 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold tracking-wider text-[#071B3B]">
                    Email Address
                  </span>

                  <input
                    type="email"
                    name="email"
                    className="mt-2 h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition-all duration-200 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20"
                  />
                </label>
              </div>

              <label className="mt-5 block sm:mt-7">
                <span className="text-sm font-semibold tracking-wider text-[#071B3B]">
                  Your Message
                </span>

                <textarea
                  name="message"
                  className="mt-2 min-h-28 w-full resize-y rounded-2xl border border-slate-200 bg-white p-4 outline-none focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20"
                />
              </label>

              <button
                type="submit"
                className="mt-5 h-13 w-full rounded-2xl bg-[#D4A017] px-4 py-3 text-base font-semibold tracking-widest text-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E2AF21] sm:mt-7 sm:h-14 sm:text-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

{/* =========================================================
    FOOTER
========================================================= */}
<footer className="bg-[#071B3B] px-5 py-12 text-white sm:px-8 sm:py-14 md:px-10 xl:px-24">

  <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 xl:grid-cols-4">

    {/* BRAND */}
    <div>
      <img
        src="/images/footer.png"
        alt="Tender Elite"
        className="mb-5 w-[210px] object-contain sm:mb-6 sm:w-[250px]"
      />

      <p className="max-w-xs text-sm leading-6 tracking-wider text-white/80">
        Empowering businesses through premium tender consultancy. We don&apos;t
        just process tenders – we build opportunities for business growth.
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

    {/* CONTACT INFO */}
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

  {/* COPYRIGHT */}
  <div className="mx-auto mt-10 flex max-w-[1240px] flex-col justify-between gap-4 border-t border-slate-200/50 pt-6 text-xs tracking-wider text-slate-200/60 sm:flex-row sm:items-center">

    <span>
      © 2025 Tender Elite Consultancy. All rights reserved.
    </span>

    <div className="flex flex-wrap gap-5 sm:gap-6">
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
    </main>
  );
}