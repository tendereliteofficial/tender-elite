import { withYoast } from "@/lib/yoast-seo";
import { slugToTitle as _s } from "@/lib/seo";

const baseMetadata = {
  title: `${_s("forward-auction-support")} Services`,
  description: `Professional ${_s("forward-auction-support")} services for government tenders. Tender Elite helps you bid accurately, stay compliant and win more contracts.`,
  alternates: { canonical: "/services/forward-auction-support" },
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
   FORWARD AUCTION PROCESS
========================================================= */

const auctionServices = [
  {
    title: "Forward Auction Requirement Discussion",
    intro:
      "Once the auction details are shared by the client, our team conducts an initial discussion to understand:",
    points: [
      "Nature of the auction",
      "Product or asset details",
      "Scope of sale or procurement",
      "Auction terms & conditions",
      "Technical and commercial requirements",
      "Client eligibility status",
      "Auction timelines",
      "Pricing structure",
      "Portal-specific conditions",
    ],
    outro:
      "This helps us evaluate the overall auction requirements and plan the participation process effectively.",
  },

  {
    title: "Auction Document Review",
    intro:
      "Our experts carefully review the complete auction documentation including:",
    points: [
      "Auction notices",
      "Eligibility criteria",
      "Technical specifications",
      "Commercial conditions",
      "Scope of work or supply",
      "Pricing structures",
      "EMD & security requirements",
      "Auction participation procedures",
      "Important clauses & timelines",
      "Compliance requirements",
    ],
    outro:
      "This detailed review helps identify all mandatory requirements and reduces risks related to non-compliance or procedural errors.",
  },

  {
    title: "Auction Participation Strategy Support",
    intro:
      "Proper bidding strategy plays an important role during forward auction participation.",
    label: "Our team assists clients with:",
    points: [
      "Auction process understanding",
      "Pricing strategy support",
      "Bid planning coordination",
      "Commercial evaluation",
      "Competitive bidding guidance",
      "Increment value understanding",
      "Auction timing coordination",
      "Participation planning",
    ],
    outro:
      "We help businesses participate in forward auctions with better preparation and professional bidding strategies.",
  },

  {
    title: "Technical & Documentation Support",
    intro:
      "Before participating in the forward auction, our team assists clients in preparing and verifying all required documentation.",
    label: "This includes support for:",
    points: [
      "Technical document preparation",
      "Eligibility document verification",
      "Commercial documentation",
      "Product specifications",
      "Annexures & declarations",
      "Compliance documents",
      "Financial documentation",
      "Portal documentation requirements",
      "Digital Signature Certificate (DSC) support",
    ],
    outro:
      "We ensure that all documents are properly prepared and aligned with auction requirements before participation.",
  },

  {
    title: "Final Verification & Compliance Check",
    intro:
      "Before and during auction participation, we conduct detailed verification to ensure:",
    points: [
      "Proper document completeness",
      "Technical compliance",
      "Commercial bid accuracy",
      "Correct participation procedures",
      "Portal readiness",
      "Compliance with auction conditions",
      "Proper bid submission process",
    ],
    outro:
      "This process helps reduce risks associated with non-compliance or bidding mistakes.",
  },

  {
    title: "Portal Coordination & Auction Participation Support",
    intro:
      "Our team provides operational assistance during the forward auction process.",
    label: "This includes:",
    points: [
      "Auction support",
      "E-auction portal coordination",
      "Auction login & participation guidance",
      "Technical portal assistance",
      "Live auction coordination support",
      "Bid submission assistance",
      "Auction monitoring support",
      "Compliance verification during participation",
    ],
    outro:
      "We help businesses handle forward auction participation professionally and efficiently.",
  },

  {
    title: "Post-Auction Coordination Support",
    intro:
      "After completion of the forward auction, our team assists clients with:",
    points: [
      "Auction result coordination",
      "Clarification response support",
      "Procurement communication assistance",
      "Documentation follow-up",
      "Additional submission support if required",
      "Procurement authority coordination",
    ],
    outro:
      "This helps businesses manage post-auction procedures professionally and efficiently.",
  },
];

/* =========================================================
   WHY CHOOSE
========================================================= */

const whyChooseCards = [
  {
    title: "5000+ Tenders Successfully Submitted",
    text:
      "Our team has extensive experience handling Government, PSU, GeM, Infrastructure, and private procurement processes across multiple industries and procurement platforms.",
  },
  {
    title: "Professional Auction Participation Expertise",
    text:
      "We provide structured support for forward auction participation including documentation coordination, pricing guidance, compliance review, and portal management.",
  },
  {
    title: "Strong Documentation & Compliance Process",
    text:
      "Our systematic verification process helps minimize risks related to missing documents, technical non-compliance, incorrect bid submissions, portal participation errors, and commercial inconsistencies.",
  },
  {
    title: "Multi-Portal Procurement Experience",
    text:
      "We provide support across various procurement and auction platforms including GeM Portal, MSTC E-Auction Portal, Metal Junction, and other relevant procurement systems.",
  },
  {
    title: "Professional & Timely Coordination",
    text:
      "Our team maintains proper coordination throughout the auction process to ensure timely participation, proper compliance, smooth communication, accurate documentation, and efficient auction management.",
  },
  {
    title: "Industry-Wide Procurement Experience",
    text:
      "We have experience supporting businesses across sectors including Civil Construction, Industrial Manufacturing, and many other sectors.",
  },
];

/* =========================================================
   PORTALS
========================================================= */

const portalColumns = [
  [
    "GeM Portal",
    "MSTC E-Auction Portal",
    "Metal Junction",
    "CPP Portal",
    "PSU Procurement Portals",
    "State Government Portals",
  ],
  [
    "Railways & Infrastructure Portals",
    "Municipal Corporation Portals",
    "Industrial Procurement Platforms",
    "Private E-Auction Systems",
    "Bank Auction Portals",
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
   SERVICE CARD
========================================================= */

function ServiceCard({
  service,
}: {
  service: (typeof auctionServices)[number];
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
}: {
  title: string;
  text: string;
}) {
  return (
    <article className="min-h-[300px] rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 text-[#071B3B] shadow-[0_8px_25px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_32px_rgba(212,160,23,0.25)] sm:p-8">

      <h3 className="font-serif text-[20px] font-semibold leading-7 tracking-[1.5px] text-[#D4A017] sm:text-[22px]">
        {title}
      </h3>

      <p className="mt-6 font-serif text-[14px] leading-6 tracking-wider sm:text-[15px]">
        {text}
      </p>

    </article>
  );
}

/* =========================================================
   BENEFIT / PORTAL CARD
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

export default function ForwardAuctionSupportPage() {
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
                Forward Auction
                <span className="block">
                  Support Services
                </span>
              </h1>

              <div className="mt-4 h-[2px] w-full max-w-[550px] rounded-full bg-[#D4A017] shadow-[0_0_20px_rgba(212,160,23,0.8)]" />

              <div className="mt-5 text-[12px] leading-[1.55] tracking-[0.55px] text-white sm:text-[13px] md:text-[14px]">

                <p>
                  Tender Elite provides professional Forward Auction Support
                  services for businesses participating in forward auctions
                  conducted through Government Departments, PSU Procurement
                  Systems, GeM, Infrastructure Portals, Industrial Procurement
                  Platforms, and Private Sector e-auction systems across India.
                </p>

                <p className="mt-4">
                  A Forward Auction is a competitive bidding process where
                  sellers submit increasing price offers for the sale of goods,
                  services, assets, or projects based on buyer requirements and
                  auction terms. These auctions are commonly used for asset
                  sales, disposal auctions, procurement opportunities,
                  industrial sales, and project-based bidding processes.
                </p>

                <p className="mt-4">
                  Our objective is to help businesses participate in forward
                  auctions professionally, strategically, and efficiently by
                  providing complete support throughout the auction process.
                  With strong understanding of procurement systems, auction
                  procedures, compliance requirements, and online bidding
                  environments, we assist clients in managing forward auction
                  participation smoothly and accurately.
                </p>

              </div>

              <div className="mt-5 h-[2px] w-full max-w-[550px] rounded-full bg-[#D4A017]" />

            </div>

            {/* RIGHT IMAGE */}

            <div className="w-full">

              <div className="overflow-hidden rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.75)]">

                <img
                  src="/images/forwardauction.png"
                  alt="Forward Auction Support Services"
                  className="block h-[300px] w-full object-cover sm:h-[360px] md:h-[420px] lg:h-[450px] xl:h-[500px]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FORWARD AUCTION PROCESS
      ====================================================== */}

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-14 md:px-10 xl:px-16 xl:py-16">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Our Forward Auction Support Process
          </SectionTitle>

          <div className="mx-auto mt-10 grid max-w-[1180px] gap-6 lg:grid-cols-2">

            {auctionServices.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
              />
            ))}

          </div>

          {/* LAST CARD CENTER */}

          <div className="mx-auto mt-6 max-w-[590px]">

            <ServiceCard
              service={auctionServices[6]}
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071B3B] px-5 py-12 text-white sm:px-8 sm:py-14 md:px-10 xl:px-16 xl:py-16">

        {/* STRIPES */}

        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(183,20,50,0.42) 0px, rgba(183,20,50,0.42) 28px, transparent 28px, transparent 54px)",
          }}
        />

        <div className="relative mx-auto max-w-[1280px]">

          <SectionTitle>
            Why Choose Tender Elite?
          </SectionTitle>

          <div className="mx-auto mt-8 grid max-w-[1190px] gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {whyChooseCards.map((card) => (
              <WhyChooseCard
                key={card.title}
                title={card.title}
                text={card.text}
              />
            ))}

          </div>

          <p className="mx-auto mt-8 max-w-[1192px] text-center text-sm leading-7 tracking-widest text-white sm:text-base">
            At Tender Elite, we help businesses participate in forward
            auctions professionally through structured guidance, documentation
            support, compliance coordination, and procurement assistance that
            improves participation readiness and bidding efficiency.
          </p>

        </div>

      </section>

      {/* =====================================================
          PORTALS WE SUPPORT
      ====================================================== */}

      <section className="bg-[#071B3B] px-5 pb-12 text-white sm:px-8 sm:pb-14 md:px-10 xl:px-16 xl:pb-16">

        <div className="mx-auto max-w-[1280px]">

          <SectionTitle>
            Portals We Support
          </SectionTitle>

          <p className="mx-auto mt-4 max-w-[966px] text-center font-serif text-base leading-7 tracking-widest text-white sm:text-lg">
            We provide support across various procurement and auction
            platforms including:
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

      <section className="relative overflow-hidden bg-[#071B3B] px-5 pb-10 text-white sm:px-8 sm:pb-12 md:px-10 xl:px-16 xl:pb-14">

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

          <div className="mt-6 text-center">

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

            {locations.map(([name, image,link]) => (
              <LocationCard
                key={name}
                name={name}
                image={image}
                link={link}
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
            Need Professional Forward Auction Support?
          </h2>

          <p className="mt-4 font-serif text-lg font-medium leading-8 tracking-widest text-white sm:text-xl">
            Get expert assistance for GeM forward auctions, e-auction
            participation, pricing coordination, compliance management, and
            live auction support services.
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-7 flex max-w-[460px] items-center justify-center gap-3 rounded-[30px] bg-[#B71432] px-5 py-3 text-base font-semibold tracking-widest text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#971029] hover:shadow-[0_12px_30px_rgba(183,20,50,0.32)] sm:text-lg"
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#071B3B]">
              →
            </span>

            Get Forward Auction Support

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
  return withYoast("/services/forward-auction-support", baseMetadata);
}
