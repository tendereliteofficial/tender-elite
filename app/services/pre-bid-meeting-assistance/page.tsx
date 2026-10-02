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
   PRE-BID SERVICES
   EXACT ORDER
========================================================= */

const preBidServices = [
  {
    title: "Tender Requirement Discussion",
    intro:
      "Once the tender details are shared by the client, our team conducts an initial discussion to understand:",
    points: [
      "Nature of the tender",
      "Scope of work",
      "Technical requirements",
      "Commercial conditions",
      "Eligibility criteria",
      "Special compliance requirements",
      "Project execution conditions",
      "Submission timelines",
      "Client concerns or clarification requirements",
    ],
    outro:
      "This helps us evaluate the tender requirements and prepare for the pre-bid meeting process effectively.",
  },

  {
    title: "Detailed Tender Document Review",
    intro:
      "Our experts carefully review the complete tender document including:",
    points: [
      "Notice Inviting Tender (NIT)",
      "Eligibility criteria",
      "Technical specifications",
      "Scope of work",
      "Commercial terms",
      "Important clauses & conditions",
      "Compliance requirements",
      "EMD & security requirements",
      "Annexures & mandatory formats",
      "Project execution conditions",
    ],
    outro:
      "This detailed review helps identify areas requiring clarification before final bid submission.",
  },

  {
    title: "Pre-Bid Query Preparation Support",
    intro:
      "Our team assists clients in preparing structured queries and clarification points for discussion during the pre-bid meeting.",
    label: "This includes support for:",
    points: [
      "Technical clarification points",
      "Scope-related queries",
      "Commercial condition clarification",
      "Eligibility-related discussions",
      "Compliance-related questions",
      "Specification clarification requests",
      "BOQ-related clarification support",
      "Execution condition discussions",
      "Amendment request identification",
    ],
    outro:
      "We help businesses prepare professional and properly structured clarification points before attending the meeting.",
  },

  {
    title: "Pre-Bid Meeting Coordination Support",
    intro:
      "Our team provides assistance during the pre-bid meeting process.",
    label: "This includes:",
    points: [
      "Meeting preparation support",
      "Clarification discussion guidance",
      "Technical discussion coordination",
      "Tender interpretation assistance",
      "Procurement communication support",
      "Query tracking support",
      "Amendment understanding assistance",
      "Compliance discussion support",
    ],
    outro:
      "We help businesses manage pre-bid discussions professionally and efficiently.",
  },

  {
    title: "Tender Clarification & Amendment Analysis",
    intro:
      "After the pre-bid meeting, procurement authorities may issue clarifications, corrigendums, or amendments to the tender.",
    label: "Our team assists clients in reviewing:",
    points: [
      "Pre-bid clarification responses",
      "Corrigendums & amendments",
      "Revised technical conditions",
      "Updated commercial terms",
      "Modified eligibility criteria",
      "Additional compliance requirements",
      "BOQ revisions",
      "Revised submission conditions",
    ],
    outro:
      "This helps businesses understand the impact of amendments on tender participation and bid preparation.",
  },

  {
    title: "Compliance & Submission Readiness Support",
    intro:
      "Based on the clarifications and amendments issued during the pre-bid process, our team assists clients in updating and aligning tender documentation.",
    label: "This includes support for:",
    points: [
      "Technical compliance alignment",
      "Documentation updates",
      "Revised eligibility verification",
      "Amendment incorporation",
      "Compliance review",
      "Tender preparation coordination",
    ],
    outro:
      "We help businesses improve bid accuracy and compliance readiness before final submission.",
  },

  {
    title: "Final Tender Preparation Guidance",
    intro:
      "After completion of the pre-bid process, our team assists clients with:",
    points: [
      "Final clarification interpretation",
      "Tender strategy coordination",
      "Compliance verification",
      "Documentation planning",
      "Submission readiness support",
      "Procurement communication assistance",
    ],
    outro:
      "This helps businesses proceed toward final tender submission with better clarity and preparation.",
  },
];

/* =========================================================
   WHY CHOOSE
   EXACTLY 6 CARDS
========================================================= */

const whyChooseCards = [
  {
    title: "Professional Tender Clarification Support",
    text:
      "We provide structured assistance for pre-bid meetings including clarification preparation, technical discussion support, amendment analysis, and compliance coordination.",
  },

  {
    title: "Strong Tender Documentation Expertise",
    text:
      "Our systematic review process helps businesses better understand:",
    points: [
      "Technical specifications",
      "Commercial conditions",
      "Scope requirements",
      "Eligibility conditions",
      "Procurement expectations",
      "Compliance obligations",
    ],
  },

  {
    title: "Experienced Procurement Coordination Support",
    text:
      "We assist businesses in managing communication and clarification processes professionally during Government and PSU procurement procedures.",
  },

  {
    title: "Multi-Portal & Multi-Industry Tender Experience",
    text:
      "We provide support for tenders across:",
    points: [
      "GeM Portal",
      "CPP Portal",
      "PSU Procurement Portals",
      "and many other portals",
    ],
  },

  {
    title: "Professional & Timely Coordination",
    text:
      "Our team ensures:",
    points: [
      "Proper clarification management",
      "Timely query preparation",
      "Efficient communication support",
      "Accurate amendment interpretation",
      "Smooth coordination throughout the process",
    ],
  },

  {
    title: "Industry-Wide Procurement Experience",
    text:
      "We have experience supporting tenders related to:",
    points: [
      "Civil Construction",
      "Infrastructure Projects",
      "Electrical & Mechanical Works",
      "and many other sectors",
    ],
  },
];

/* =========================================================
   PORTALS
========================================================= */

const portalColumns = [
  [
    "GeM Portal",
    "CPP Portal",
    "PSU Procurement Portals",
    "Municipal Corporation Tenders",
  ],
  [
    "Railways & Infrastructure Portals",
    "State Government Procurement Systems",
    "Private Procurement Platforms",
  ],
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
   PROCESS CARD
========================================================= */

function ProcessCard({
  service,
}: {
  service: (typeof preBidServices)[number];
}) {
  return (
    <article className="group relative flex h-full flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 shadow-[0_0_28px_rgba(212,160,23,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(212,160,23,0.28)] sm:p-7">

      <h3 className="text-center font-serif text-[19px] font-bold leading-6 tracking-wide text-[#D4A017] sm:text-[21px]">
        {service.title}
      </h3>

      <p className="mt-5 text-[13px] leading-6 tracking-wide text-white sm:text-[14px]">
        {service.intro}
      </p>

      {service.label && (
        <p className="mt-4 text-[13px] font-semibold leading-6 tracking-wide text-white sm:text-[14px]">
          {service.label}
        </p>
      )}

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
   WHY CHOOSE CARD
========================================================= */

function WhyChooseCard({
  title,
  text,
  points,
}: {
  title: string;
  text: string;
  points?: string[];
}) {
  return (
    <article className="h-full min-h-[300px] rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 text-[#071B3B] shadow-[0_8px_25px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_32px_rgba(212,160,23,0.25)] sm:p-8">

      <h3 className="font-serif text-[20px] font-semibold leading-7 tracking-[1.5px] text-[#D4A017] sm:text-[22px]">
        {title}
      </h3>

      <p className="mt-6 font-serif text-[14px] leading-6 tracking-wider sm:text-[15px]">
        {text}
      </p>

      {points && points.length > 0 && (
        <div className="mt-3 font-serif text-[14px] leading-6 tracking-wider sm:text-[15px]">

          {points.map((point) => (
            <div key={point}>
              • {point}
            </div>
          ))}

        </div>
      )}

    </article>
  );
}

/* =========================================================
   PORTAL CARD
========================================================= */

function PortalCard({
  items,
}: {
  items: string[];
}) {
  return (
    <article className="rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 text-[#071B3B] shadow-[0_8px_24px_rgba(0,0,0,0.10)] sm:p-9">

      <div className="font-serif text-[17px] leading-8 tracking-wider sm:text-[19px]">

        {items.map((item) => (
          <div key={item}>
            • {item}
          </div>
        ))}

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
}: {
  name: string;
  image: string;
}) {
  return (
    <Link
      href="/contact"
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

export default function PreBidMeetingAssistancePage() {
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

              <h1 className="font-serif text-[38px] font-bold leading-[1.06] text-[#D4A017] sm:text-[46px] md:text-[54px] lg:text-[58px] xl:text-[62px]">
                Pre-Bid Meeting
                <span className="block">
                  Assistance Services
                </span>
              </h1>

              <div className="mt-4 h-[2px] w-full max-w-[545px] rounded-full bg-[#D4A017] shadow-[0_0_18px_rgba(212,160,23,0.75)]" />

              <div className="mt-5 text-[12px] leading-[1.55] tracking-[0.55px] text-white sm:text-[13px] md:text-[14px]">

                <p>
                  Tender Elite provides professional Pre-Bid Meeting Assistance
                  services for businesses participating in Government, PSU,
                  Infrastructure, Municipal Corporation, and Private Sector
                  tenders across India.
                </p>

                <p className="mt-4">
                  Pre-bid meetings are conducted by procurement authorities
                  before final tender submission to clarify technical
                  specifications, commercial conditions, scope of work,
                  eligibility criteria, project execution requirements, and
                  other important tender-related matters. These meetings help
                  bidders understand procurement expectations and resolve doubts
                  before participating in the tender process.
                </p>

                <p className="mt-4">
                  Our objective is to help businesses participate in pre-bid
                  meetings professionally and effectively by providing complete
                  support for tender clarification management, technical
                  discussion preparation, query handling, and amendment
                  understanding.
                </p>

                <p className="mt-4">
                  We understand that proper interpretation of tender conditions
                  and clarifications is critical for successful tender
                  participation. Missing important clarifications or
                  misunderstanding tender requirements can lead to compliance
                  issues, technical rejection, or commercial risks during final
                  bid submission. Therefore, our team assists clients
                  throughout the pre-bid meeting process to improve tender
                  understanding and submission readiness.
                </p>

              </div>

              <div className="mt-5 h-[2px] w-full max-w-[545px] rounded-full bg-[#D4A017]" />

            </div>

            {/* RIGHT IMAGE */}

            <div className="w-full">

              <div className="overflow-hidden rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.75)]">

                <img
                  src="/images/Pre-Bid Meeting Assistance.png"
                  alt="Pre-Bid Meeting Assistance Services"
                  className="block h-[300px] w-full object-cover sm:h-[360px] md:h-[420px] lg:h-[450px] xl:h-[500px]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PRE-BID PROCESS
          6 CARDS + 1 CENTERED CARD
      ====================================================== */}

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-14 md:px-10 xl:px-16 xl:py-16">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Our Pre-Bid Meeting Assistance Process
          </SectionTitle>

          {/* CARDS 1 - 6 */}

          <div className="mx-auto mt-10 grid max-w-[1180px] gap-6 lg:grid-cols-2">

            {preBidServices.slice(0, 6).map((service) => (
              <ProcessCard
                key={service.title}
                service={service}
              />
            ))}

          </div>

          {/* CARD 7 — CENTERED */}

          <div className="mx-auto mt-6 max-w-[590px]">

            <ProcessCard
              service={preBidServices[6]}
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE
          EXACTLY 6 CARDS — 3 x 2
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B3B] px-5 py-12 text-white sm:px-8 sm:py-14 md:px-10 xl:px-16 xl:py-16">

        <div className="relative mx-auto max-w-[1280px]">

          <SectionTitle>
            Why Choose Tender Elite?
          </SectionTitle>

          {/* 3 × 2 GRID */}

          <div className="mx-auto mt-8 grid max-w-[1190px] grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {whyChooseCards.map((card) => (
              <WhyChooseCard
                key={card.title}
                title={card.title}
                text={card.text}
                points={card.points}
              />
            ))}

          </div>

          <p className="mx-auto mt-8 max-w-[1192px] text-center text-sm leading-7 tracking-widest text-white sm:text-base">
            At Tender Elite, we help businesses participate in pre-bid meetings
            professionally through structured clarification support, tender
            interpretation assistance, amendment analysis, and procurement
            coordination that improves bid preparation and submission readiness.
          </p>

        </div>

      </section>

      {/* =====================================================
          PORTALS
      ====================================================== */}

      <section className="bg-[#071B3B] px-5 pb-12 text-white sm:px-8 sm:pb-14 md:px-10 xl:px-16 xl:pb-16">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Portals We Support
          </SectionTitle>

          <p className="mx-auto mt-4 max-w-[966px] text-center font-serif text-base leading-7 tracking-widest text-white sm:text-lg">
            We provide support for tenders across:
          </p>

          <div className="mx-auto mt-8 grid max-w-[1100px] gap-6 md:grid-cols-2">

            {portalColumns.map((items, index) => (
              <PortalCard
                key={index}
                items={items}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B3B] px-5 pb-6 text-white sm:px-8 sm:pb-8 md:px-10 xl:px-16 xl:pb-8">

        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(183,20,50,0.42) 0px, rgba(183,20,50,0.42) 28px, transparent 28px, transparent 54px)",
          }}
        />

        <div className="relative mx-auto max-w-[1280px]">

          <SectionTitle>
            Industries We Serve
          </SectionTitle>

          <p className="mx-auto mt-4 max-w-[869px] text-center text-sm font-bold leading-6 tracking-wider text-white sm:text-base">
            Empowering businesses across diverse sectors with expert tender
            consultancy, bid management, and strategic procurement support.
          </p>

          <div className="mx-auto mt-7 grid max-w-[1180px] gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {industries.map((industry) => (
              <IndustryCard
                key={industry.name}
                name={industry.name}
                image={industry.image}
                link={industry.link}
              />
            ))}

          </div>

          <div className="mt-5 text-center">

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
          LOCATIONS
      ====================================================== */}

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-14 md:px-10 xl:px-12 xl:py-16">

        <div className="mx-auto max-w-[1440px]">

          <SectionTitle>
            Locations We Serve
          </SectionTitle>

          <div className="mx-auto mt-8 grid max-w-[1170px] grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4">

            {locations.map(([name, image]) => (
              <LocationCard
                key={name}
                name={name}
                image={image}
              />
            ))}

          </div>

          <div className="mt-6 text-center">

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

      <section className="bg-white px-5 pt-4 pb-10 sm:px-8 sm:pt-6 sm:pb-12 md:px-10 xl:px-16">

        <div className="mx-auto max-w-[1062px] rounded-[30px] bg-[#071B3B] px-6 py-10 text-center shadow-[0_15px_40px_rgba(7,27,59,0.18)] sm:px-10 sm:py-12">

          <h2 className="font-serif text-2xl font-semibold leading-8 tracking-[2px] text-[#D4A017] sm:text-3xl sm:leading-10">
            Need Professional Pre-Bid Meeting Assistance?
          </h2>

          <p className="mt-4 font-serif text-lg font-medium leading-8 tracking-widest text-white sm:text-xl">
            Get expert support for tender clarification management, technical
            discussion coordination, amendment analysis, and procurement
            communication assistance.
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-7 flex max-w-[360px] items-center justify-center gap-3 rounded-[30px] bg-[#B71432] px-5 py-3 text-base font-semibold tracking-widest text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#971029] hover:shadow-[0_12px_30px_rgba(183,20,50,0.32)] sm:text-lg"
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#071B3B]">
              →
            </span>

            Request Consultation

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