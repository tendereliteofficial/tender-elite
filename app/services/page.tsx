import Link from "next/link";

export const metadata = {
  title: "Our Tender Services",
  description:
    "Tender Elite offers end-to-end tender services: portal registration, GeM support, documentation, bid management and submission for Indian government tenders.",
  alternates: { canonical: "/services" },
};

type Service = {
  title: string;
  description: string;
  link: string;
};

type ServiceGroup = {
  image: string;
  side: "left" | "right";
  cards: [Service, Service];
};

const serviceGroups: ServiceGroup[] = [
  {
    side: "left",
    image: "/images/services1.png",
    cards: [
      {
        title: "Tender Submission Services",
        description:
          "Tender Elite provides complete tender submission services for government, semi-government, PSU, and private sector tenders across India. Our team manages the entire submission process professionally, ensuring all tender requirements, documents, formats, and deadlines are properly followed. We assist clients in preparing accurate bids, organizing mandatory documentation, and completing online submissions through various e-tender portals.",
          link: "/services/tender-submission",
      },
      {
        title: "Bid Management Support",
        description:
          "Our bid management services are designed to simplify and streamline the complete bidding process for businesses of all sizes. We coordinate tender tracking, eligibility analysis, document preparation, bid scheduling, compliance verification, and final submission under one professional system. By managing every stage efficiently, we reduce the burden on clients and improve the quality, consistency, and professionalism of tender participation.",
          link : "/services/bid-management-support",
      },
    ],
  },

  {
    side: "right",
    image: "/images/services2.png",
    cards: [
      {
        title: "Tender Portal Registration",
        description:
          "Tender Elite assists businesses with registration on various government and private tender portals across India, including GeM, CPP Portal, state e-tender portals, PSU procurement portals, railway procurement systems, defence procurement portals, municipal corporation portals, healthcare procurement platforms, departmental procurement systems, and many other industry-specific e-procurement platforms.",
          link : "/services/tender-portal-registration",
        },
      {
        title: "Tender Documentation & Compliance",
        description:
          "We provide complete support for preparing and managing tender documentation in accordance with tender conditions and procurement guidelines. Our team carefully reviews eligibility criteria and compliance requirements to ensure all technical, commercial, legal, and financial documents are properly prepared and submitted. This helps reduce documentation errors, avoid rejection risks, and improve bid quality.",
          link : "/services/tender-documentation-compliance",
        },
    ],
  },

  {
    side: "left",
    image: "/images/services3.png",
    cards: [
      {
        title: "BOQ Preparation & Cost Estimation",
        description:
          "Tender Elite assists clients in preparing accurate BOQs (Bill of Quantities) and cost estimations based on tender specifications and project requirements. Our team helps organize item-wise pricing, calculations, rate analysis, and financial structuring to ensure professional and competitive commercial submissions. We focus on clarity, accuracy, and compliance while preparing BOQ documents.",
          link : "/services/boq-preparation-cost-estimation",     
        },
      {
        title: "GEM Product Listing & Uploading",
        description:
          "Tender Elite assists clients in preparing accurate product listings and uploading products on the GeM portal. We help organize product information, specifications, pricing, documentation, and other required details to ensure professional and compliant product listings.",
          link : "/services/gem-product-listing-uploading",        
        },
    ],
  },

  {
    side: "right",
    image: "/images/services4.png",
    cards: [
      {
        title: "GEM Catalogue Management Services",
        description:
          "Tender Elite offers complete GeM catalogue management services to help businesses maintain accurate and updated product catalogues on the GeM portal. We manage catalogue creation, modifications, updates, product approvals, specification corrections, pricing updates, and compliance-related changes to ensure smooth operations and improved procurement participation.",
          link : "/services/gem-catalogue-management", 
        },
      {
        title: "Vendor Assessment Support",
        description:
          "We assist businesses in completing vendor assessments required by government departments, PSUs, and procurement agencies. Our team helps clients prepare the required documents, certifications, financial details, technical information, and compliance records necessary for successful vendor evaluation and approval processes.",
          link : "/services/vendor-assessment-support", 
        },
    ],
  },

  {
    side: "left",
    image: "/images/services5.png",
    cards: [
      {
        title: "Brand Approval Assistance",
        description:
          "Tender Elite provides support for obtaining brand approvals required for participation in various tenders and procurement processes. We help businesses prepare technical documents, authorization letters, certifications, product specifications, and supporting documentation necessary for brand registration and approval with procurement authorities and departments.",
          link : "/services/brand-approval-assistance", 
        },
      {
        title: "Vendor Empanelment",
        description:
          "Our team assists manufacturers and suppliers with OEM registration and empanelment procedures for government departments, procurement agencies, and public sector organizations. We guide clients through documentation requirements, compliance procedures, product approvals, and registration formalities to ensure smooth empanelment and procurement eligibility.",
          link : "", 
        },
    ],
  },

  {
    side: "right",
    image: "/images/services6.png",
    cards: [
      {
        title: "Forward Auction Support",
        description:
          "Tender Elite provides professional support for Forward Auction participation across various government, PSU, and private procurement platforms. A Forward Auction is a competitive bidding process where sellers submit increasing price offers for the sale of goods, services, assets, or projects based on buyer requirements and auction terms.",
          link : "/services/forward-auction-support", 
        },
      {
        title: "Reverse Auction Support",
        description:
          "Tender Elite provides complete assistance during reverse auction processes conducted through GeM and other e-procurement portals. We guide clients regarding auction procedures, pricing strategies, technical requirements, and participation methods to help them handle reverse auctions professionally and competitively.",
          link : "/services/reverse-auction-support", 
        },
    ],
  },

  {
    side: "left",
    image: "/images/services7.png",
    cards: [
      {
        title: "Joint Venture & Consortium Formation Support",
        description:
          "Tender Elite provides professional Joint Venture (JV) and Consortium Formation Support services to help businesses collaborate effectively for participating in large-scale projects, high-value tenders, infrastructure contracts, and specialized procurement opportunities. We assist clients in forming structured partnerships by coordinating documentation, defining partnership roles, preparing JV and consortium agreements, and ensuring compliance with tender eligibility requirements related to consortium or partnership participation.",
          link : "/services/joint-venture-consortium-formation", 
        },
      {
        title: "MSME / UDYAM Assistance",
        description:
          "Tender Elite supports businesses in obtaining MSME / UDYAM registration to help them avail benefits offered by government procurement policies and schemes. We guide clients through registration procedures, documentation requirements, classification processes, and compliance formalities for successful MSME recognition.",
          link : "/services/msme-udyam-registration-assistance", 
        },
    ],
  },

  {
    side: "right",
    image: "/images/services8.png",
    cards: [
      {
        title: "Startup India Registration Support",
        description:
          "We assist startups with Startup India registration and recognition processes to help them access government benefits, procurement advantages, and business growth opportunities. Our team guides clients through eligibility requirements, documentation, profile creation, and registration formalities professionally.",
          link : "/services/startup-india-registration-assistance", 
        },
      {
        title: "Pre-Bid Meeting Assistance",
        description:
          "Tender Elite provides professional support for pre-bid meetings conducted by government departments and procurement agencies. We help clients understand tender clarifications, technical discussions, scope-related queries, and amendment updates to ensure better preparation before final bid submission.",
          link : "/services/pre-bid-meeting-assistance", 
        },
    ],
  },

  {
    side: "left",
    image: "/images/services9.png",
    cards: [
      {
        title: "RFQ/EOI Preparation",
        description:
          "Our team assists clients in analyzing RFQ/EOI requirements, understanding eligibility conditions, preparing technical and commercial documentation, and managing the submission process professionally. We help businesses improve participation readiness, reduce documentation errors, and respond to procurement opportunities with properly structured and compliant submissions.",
          link : "/services/rfq-eoi-preparation-services", 
        },
      {
        title: "Post-Tender Documentation Support",
        description:
          "Our services continue even after tender submission and award processes. We assist clients with post-tender requirements such as clarification responses, additional documentation, performance security submissions, agreement formalities, compliance records, and project-related documentation support.",
          link : "/services/post-tender-documentation-support", 
        },
    ],
  },
];

function ArrowButton() {
  return (
    <span className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFA629] text-[17px] font-bold text-[#071B3B] shadow-[0_0_24px_rgba(255,166,41,0.85)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_32px_rgba(255,166,41,1)]">
      →
    </span>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.link}
      className="
        group relative flex h-[205px] w-full flex-col justify-center
        overflow-hidden rounded-[20px]
        border-[3px] border-[#D4A017]
        bg-[#071B3B]
        px-7 py-6 pr-16
        shadow-[0_8px_24px_rgba(0,0,0,0.12)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#F1C84B]
        hover:shadow-[0_14px_34px_rgba(7,27,59,0.30)]
        max-lg:h-auto max-lg:min-h-[205px]
      "
    >
      <h3 className="font-serif text-[20px] font-medium leading-6 tracking-wide text-[#D4A017] transition-colors duration-300 group-hover:text-[#F1C84B] sm:text-[21px]">
        {service.title}
      </h3>

      <p className="mt-5 text-[13px] font-normal leading-[1.55] tracking-wide text-white sm:text-sm">
        {service.description}
      </p>

      <ArrowButton />
    </Link>
  );
}

function ServiceImage({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div
      className="
        group relative w-full overflow-hidden rounded-[20px]
        shadow-[0_0_30px_rgba(0,0,0,0.30)]
        lg:h-[430px]
      "
    >
      <img
        src={image}
        alt={title}
        className="
          h-[320px] w-full object-cover
          transition-transform duration-500
          group-hover:scale-[1.04]
          sm:h-[380px]
          lg:h-full
        "
      />
    </div>
  );
}

function ServiceGroup({
  group,
}: {
  group: ServiceGroup;
}) {
  const imageOnLeft = group.side === "left";

  return (
    <div
      className={`
        grid w-full gap-6
        lg:grid-cols-[334px_minmax(0,1fr)]
        lg:items-stretch
        lg:gap-7
        ${!imageOnLeft ? "lg:grid-cols-[minmax(0,1fr)_334px]" : ""}
      `}
    >
      {/* IMAGE */}
      <div
        className={`
          order-1
          ${imageOnLeft ? "lg:order-1" : "lg:order-2"}
        `}
      >
        <ServiceImage
          image={group.image}
          title={group.cards[0].title}
        />
      </div>

      {/* TWO SERVICE CARDS */}
      <div
        className={`
          order-2 flex flex-col gap-5
          ${imageOnLeft ? "lg:order-2" : "lg:order-1"}
        `}
      >
        <ServiceCard service={group.cards[0]} />
        <ServiceCard service={group.cards[1]} />
      </div>
    </div>
  );
}

export default function ServicesPage() {
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

          {/* DESKTOP NAV */}
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
          PAGE TITLE
      ========================================================== */}
      <section className="bg-white px-5 pb-10 pt-14 sm:px-8 sm:pb-12 sm:pt-16 md:px-10 md:pt-20 xl:px-12">
        <div className="mx-auto max-w-[1440px] text-center">

          <h1 className="font-serif text-4xl font-bold tracking-[2px] text-[#071B3B] sm:text-5xl md:text-6xl">
            Our Services
          </h1>

          <p className="mx-auto mt-5 max-w-[805px] text-sm leading-6 tracking-wider text-slate-500 sm:text-base sm:leading-7 md:text-lg">
            We provide a full spectrum of tender consultancy services designed
            to maximize your win probability and streamline the submission
            process.
          </p>

        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 md:px-10 xl:px-12 xl:pb-28">
        <div className="mx-auto max-w-[1240px]">

          {serviceGroups.map((group, index) => (
            <div
              key={`${group.cards[0].title}-${index}`}
              className={index === 0 ? "" : "mt-8 sm:mt-10 lg:mt-12"}
            >
              <ServiceGroup group={group} />
            </div>
          ))}

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
        href="/services"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Tender Submission Services
      </Link>

      <Link
        href="/services"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        GeM Catalogue Management
      </Link>

      <Link
        href="/services"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Tender Portal Registration
      </Link>

      <Link
        href="/services"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Bid Management
      </Link>

      <Link
        href="/services"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Vendor Assessment
      </Link>

      <Link
        href="/services"
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
        +91 1234567890
        <br />
        abc@tenderelite.com
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