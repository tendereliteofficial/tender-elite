import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about-us" },
];

const processCards = [
  {
    title: "Tender Requirement Discussion",
    content: (
      <>
        Once we receive the tender details from the client, our team conducts
        an initial discussion to understand:
        <br />
        <br />
        • The nature of the tender
        <br />
        • Scope of work
        <br />
        • Client eligibility status
        <br />
        • Technical and financial requirements
        <br />
        • Submission timelines
        <br />
        • Special conditions and compliance requirements
        <br />
        <br />
        This helps us evaluate the overall tender requirements and plan the
        submission process effectively.
      </>
    ),
  },
  {
    title: "Detailed Tender Document Review",
    content: (
      <>
        After the initial discussion, our experts thoroughly review the
        complete tender document including:
        <br />
        <br />
        • Notice Inviting Tender (NIT)
        <br />
        • Eligibility Criteria
        <br />
        • Technical Specifications
        <br />
        • Scope of Work
        <br />
        • Commercial Terms
        <br />
        • Important Clauses & Conditions
        <br />
        • EMD / Tender Fee Requirements
        <br />
        • Annexures & Mandatory Formats
        <br />
        • Experience & Financial Requirements
        <br />
        <br />
        Our detailed review helps identify all mandatory requirements and
        minimizes the risk of rejection due to non-compliance.
      </>
    ),
  },
  {
    title: "Tender Checklist Preparation",
    content: (
      <>
        After reviewing the tender documents, we prepare and share a
        comprehensive Tender Checklist with the client.
        <br />
        <br />
        The checklist generally includes:
        <br />
        <br />
        • Eligibility Criteria
        <br />
        • Technical Qualification Requirements
        <br />
        • Financial Qualification Requirements
        <br />
        • Experience Criteria
        <br />
        • Required Certificates
        <br />
        • Mandatory Documents
        <br />
        • Affidavits & Undertakings
        <br />
        • Annexures & Formats
        <br />
        • EMD / BG Requirements
        <br />
        • Important Submission Dates
        <br />
        <br />
        This structured checklist helps the client organize all required
        documents systematically.
      </>
    ),
  },
  {
    title: "Preparation & Drafting of Tender Documents",
    content: (
      <>
        Once the client confirms participation, our team starts preparing the
        required tender documents and annexures.
        <br />
        <br />
        Our services include:
        <br />
        <br />
        • Drafting tender annexures
        <br />
        • Preparing declarations and undertakings
        <br />
        • Formatting technical documents
        <br />
        • Organizing eligibility documents
        <br />
        • Preparing compliance statements
        <br />
        • Assisting with BOQ and commercial formats
        <br />
        • Document compilation and verification
        <br />
        <br />
        We ensure that all documents are drafted professionally and in
        accordance with tender requirements to avoid technical rejection.
      </>
    ),
  },
  {
    title: "Client Assistance & Documentation Support",
    content: (
      <>
        In cases where clients prefer preparing certain documents internally,
        our team provides complete guidance and support during the drafting
        process.
        <br />
        <br />
        We assist clients by:
        <br />
        <br />
        • Reviewing drafted documents
        <br />
        • Suggesting corrections and improvements
        <br />
        • Ensuring compliance with tender conditions
        <br />
        • Verifying formatting and documentation requirements
        <br />
        • Helping avoid common tender submission mistakes
        <br />
        <br />
        Our goal is to support the client throughout the process and ensure
        the final submission remains compliant and professionally prepared.
      </>
    ),
  },
  {
    title: "Final Verification & Quality Check",
    content: (
      <>
        Before submission, we conduct a complete review of all documents and
        annexures to ensure:
        <br />
        <br />
        • All mandatory documents are attached
        <br />
        • Proper signatures and stamps are completed
        <br />
        • Formats are correctly followed
        <br />
        • Technical compliance is maintained
        <br />
        • No important document is missing
        <br />
        • File naming and portal requirements are properly followed
        <br />
        <br />
        This final verification process significantly reduces the chances of
        tender rejection.
      </>
    ),
  },
  {
    title: "Online Tender Submission",
    content: (
      <>
        Once all documents are finalized, our team proceeds with the online
        tender participation process on behalf of the client.
        <br />
        <br />
        Our submission support includes:
        <br />
        <br />
        • Uploading documents on e-tender portals
        <br />
        • BOQ submission
        <br />
        • Digital Signature Certificate (DSC) support
        <br />
        • Final technical and commercial bid submission
        <br />
        • Portal coordination
        <br />
        • Submission confirmation and acknowledgment
        <br />
        <br />
        We ensure that the tender is submitted successfully within the deadline
        while following all portal guidelines and submission procedures.
      </>
    ),
  },
];

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

const portalLeft = [
  "GeM Portal",
  "CPP Portal",
  "State Government Portals",
  "Municipal Corporation Portals",
];

const portalRight = [
  "PSU Portals",
  "Railways & Infrastructure Portals",
  "Private Procurement Portals",
];

const industryLeft = [
  "Civil Construction",
  "Electrical Works",
  "Healthcare & Medical Equipment",
  "Interior & Infrastructure",
];

const industryRight = [
  "Manpower Services",
  "IT & Software",
  "Supply & Procurement",
  "Mechanical & Engineering Service",
];

function Arrow() {
  return (
    <span className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFA629] text-[17px] font-bold text-[#071B3B] shadow-[0_0_25px_rgba(255,166,41,0.95)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_32px_rgba(255,166,41,1)]">
      →
    </span>
  );
}

function Header() {
  return (
    <header className="relative z-50 border-b-[5px] border-[#D4A017] bg-white shadow-sm">
      <div className="mx-auto flex min-h-[78px] max-w-[1440px] items-center px-4 sm:min-h-[86px] sm:px-5 md:min-h-[90px] md:px-7 xl:px-10">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-2 transition-transform duration-300 hover:scale-[1.01]"
        >
          <img
            src="/images/logo-mark.png"
            alt="Tender Elite mark"
            className="h-[52px] w-auto object-contain sm:h-[60px] md:h-[68px]"
          />

          <img
            src="/images/logo-wordmark.png"
            alt="Tender Elite"
            className="w-[125px] object-contain sm:w-[150px] md:w-[175px]"
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-2 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-[20px] border border-white bg-[#D4A017] px-6 py-3 text-sm font-bold text-black shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_14px_28px_rgba(0,0,0,0.18)]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-2 rounded-[20px] border border-[#FFA629] bg-[#B71432] px-7 py-3 text-sm font-bold text-white shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(183,20,50,0.3)]"
          >
            Contact Us
          </Link>
        </nav>

        <details className="relative ml-auto xl:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl bg-[#D4A017] text-[#071B3B] shadow-md">
            <svg
              className="h-6 w-6"
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

          <div className="absolute right-0 top-14 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-xl px-4 py-3 font-bold text-[#071B3B] transition-colors hover:bg-[#D4A017] hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-2 block rounded-xl bg-[#B71432] px-4 py-3 text-center font-bold text-white"
            >
              Contact Us
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}

function ProcessCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative min-h-[360px] rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 shadow-[0_0_30px_rgba(212,160,23,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(212,160,23,0.28)] sm:min-h-[380px] sm:p-7 lg:p-8">
      <h3 className="pr-12 font-serif text-xl font-semibold leading-7 tracking-wide text-[#D4A017] sm:text-2xl">
        {title}
      </h3>

      <div className="mt-6 text-sm leading-6 tracking-wide text-white sm:text-[15px]">
        {children}
      </div>

      <Arrow />
    </div>
  );
}

/* =========================================================
   ALL HIGHLIGHT BOXES USE EXACTLY THE SAME SIZE
   Desktop: 288px × 250px
   Mobile: 100% width × 250px
========================================================= */

function HighlightCard({
  value,
  children,
}: {
  value?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group flex h-[250px] w-full shrink-0 items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-white p-6 text-center shadow-[0_8px_22px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.15)] lg:w-[288px]">
      <div className="w-full">
        {value && (
          <div className="font-serif text-4xl font-bold tracking-[3px] text-[#D4A017] sm:text-[42px]">
            {value}
          </div>
        )}

        <h3
          className={`font-serif font-bold leading-8 tracking-[2px] text-[#D4A017] ${
            value ? "mt-5" : ""
          } text-[25px]`}
        >
          {children}
        </h3>
      </div>
    </div>
  );
}

function InfoPanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[250px] w-full rounded-[20px] border-[3px] border-[#D4A017] bg-white p-6 text-sm leading-6 tracking-wide text-[#071B3B] shadow-[0_8px_25px_rgba(0,0,0,0.08)] sm:p-7 sm:text-base">
      {children}
    </div>
  );
}

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

export default function TenderSubmissionPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071B3B]">

      <Header />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="bg-[#071B3B]">
        <div className="mx-auto grid min-h-[678px] max-w-[1440px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:px-20">

          <div className="max-w-[610px]">

            <h1 className="font-serif text-[44px] font-bold leading-[1.05] text-[#D4A017] sm:text-[52px] md:text-[58px] xl:text-[64px]">
              Tender Submission
              <span className="block">
                Services
              </span>
            </h1>

            <div className="my-7 h-0.5 w-full max-w-[415px] rounded-full bg-[#D4A017] shadow-[0_0_25px_rgba(212,160,23,1)]" />

            <p className="text-sm leading-7 tracking-wider text-white sm:text-base">
              Tender Elite offers complete Tender Submission Services for
              Government, Semi-Government, PSU, Municipal Corporation, and
              Private Sector tenders across India.
              <br />
              <br />
              Our objective is to simplify the tender participation process for
              businesses by providing professional support at every stage —
              from tender analysis to final online submission. With a
              structured approach, experienced team, and strong understanding
              of tendering procedures, we help clients submit compliant and
              error-free bids within the required timelines.
              <br />
              <br />
              We understand that even minor documentation mistakes or compliance
              issues can lead to tender rejection. Therefore, our team carefully
              manages every stage of the tender submission process to ensure
              smooth participation and maximum accuracy.
            </p>

          </div>

          <div className="w-full">
            <div className="overflow-hidden rounded-[20px] shadow-[0_0_35px_rgba(0,0,0,0.75)]">
              <img
                src="/images/tendersubmission.png"
                alt="Tender submission consultation"
                className="h-[360px] w-full object-cover transition-transform duration-500 hover:scale-[1.02] sm:h-[440px] md:h-[500px] xl:h-[551px]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================== */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 md:px-10 xl:px-16 xl:py-24">

        <div className="mx-auto max-w-[1360px]">

          <h2 className="text-center font-serif text-4xl font-bold tracking-[3px] text-[#D4A017] sm:text-5xl md:text-6xl">
            Our Tender Submission Process
          </h2>

          <div className="mx-auto mt-12 grid max-w-[1280px] gap-6 lg:grid-cols-2">

            {processCards.slice(0, 6).map((card) => (
              <ProcessCard
                key={card.title}
                title={card.title}
              >
                {card.content}
              </ProcessCard>
            ))}

          </div>

          <div className="mx-auto mt-6 max-w-[628px]">
            <ProcessCard title={processCards[6].title}>
              {processCards[6].content}
            </ProcessCard>
          </div>

        </div>

      </section>

      {/* =========================================================
          WHY CHOOSE TENDER ELITE
      ========================================================== */}
      <section className="bg-[#071B3B] px-5 py-16 text-white sm:px-8 sm:py-20 md:px-10 xl:px-16 xl:py-24">

        <div className="mx-auto max-w-[1280px]">

          <h2 className="text-center font-serif text-4xl font-bold tracking-[4px] text-[#D4A017] sm:text-5xl md:text-6xl">
            Why Choose Tender Elite ?
          </h2>

          <div className="mx-auto mt-12 max-w-[1200px] space-y-8">

            {/* =====================================================
                01 — LEFT BOX
            ====================================================== */}
            <div className="grid items-center gap-6 lg:grid-cols-[288px_minmax(0,1fr)]">

              <div className="order-1">
                <HighlightCard value="5000+">
                  Tenders
                  <br />
                  Successfully
                  <br />
                  Submitted
                </HighlightCard>
              </div>

              <div className="order-2">
                <InfoPanel>
                  With extensive experience across Government, PSU,
                  Semi-Government, Municipal Corporation, and Private Sector
                  tenders, our team has successfully assisted clients in
                  submitting more than 5000 tenders across multiple industries
                  and departments.
                  <br />
                  <br />
                  Our experience enables us to understand complex tender
                  requirements, compliance standards, and portal submission
                  procedures efficiently.
                </InfoPanel>
              </div>

            </div>

            {/* =====================================================
                02 — RIGHT BOX
            ====================================================== */}
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_288px]">

              <div className="order-2 lg:order-1">
                <InfoPanel>
                  Our team brings together more than 15 years of cumulative
                  experience in tender management, bid documentation,
                  compliance review, and e-tender participation.
                  <br />
                  <br />
                  We understand the practical challenges businesses face
                  during tender participation and provide professional support
                  to simplify the complete process.
                </InfoPanel>
              </div>

              <div className="order-1 lg:order-2">
                <HighlightCard value="15+ Years">
                  Cumulative
                  <br />
                  Industry
                  <br />
                  Experience
                </HighlightCard>
              </div>

            </div>

            {/* =====================================================
                03 — LEFT BOX
            ====================================================== */}
            <div className="grid items-center gap-6 lg:grid-cols-[288px_minmax(0,1fr)]">

              <div className="order-1">
                <HighlightCard>
                  End-to-End
                  <br />
                  Tender
                  <br />
                  Submission
                  <br />
                  Support
                </HighlightCard>
              </div>

              <div className="order-2">
                <InfoPanel>
                  We manage the complete tender submission process including:
                  <br />
                  <br />
                  • Tender document review
                  <br />
                  • Eligibility analysis
                  <br />
                  • Checklist preparation
                  <br />
                  • Drafting annexures & declarations
                  <br />
                  • Technical documentation support
                  <br />
                  • Commercial bid assistance
                  <br />
                  • Final verification & compliance review
                  <br />
                  • Online tender submission
                </InfoPanel>
              </div>

            </div>

            {/* =====================================================
                04 — RIGHT BOX
            ====================================================== */}
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_288px]">

              <div className="order-2 lg:order-1">
                <InfoPanel>
                  Our systematic review process helps reduce the chances of
                  technical rejection due to:
                  <br />
                  <br />
                  • Missing documents
                  <br />
                  • Incorrect formats
                  <br />
                  • Non-compliance issues
                  <br />
                  • Improper annexures
                  <br />
                  • Portal submission errors
                  <br />
                  <br />
                  Every tender submission goes through multiple verification
                  stages before final submission.
                </InfoPanel>
              </div>

              <div className="order-1 lg:order-2">
                <HighlightCard>
                  Strong
                  <br />
                  Documentation
                  <br />
                  and
                  <br />
                  Compliance
                  <br />
                  Process
                </HighlightCard>
              </div>

            </div>

            {/* =====================================================
                05 — LEFT BOX
            ====================================================== */}
            <div className="grid items-center gap-6 lg:grid-cols-[288px_minmax(0,1fr)]">

              <div className="order-1">
                <HighlightCard>
                  Multi-Portal
                  <br />
                  Tender
                  <br />
                  Submission
                  <br />
                  Expertise
                </HighlightCard>
              </div>

              <div className="order-2">
                <InfoPanel>

                  <p>
                    We provide tender submission assistance across various
                    government and private e-tender portals including:
                  </p>

                  <div className="mt-5 grid gap-6 sm:grid-cols-2">

                    <div>
                      {portalLeft.map((item) => (
                        <div
                          key={item}
                          className="mb-1"
                        >
                          • {item}
                        </div>
                      ))}
                    </div>

                    <div>
                      {portalRight.map((item) => (
                        <div
                          key={item}
                          className="mb-1"
                        >
                          • {item}
                        </div>
                      ))}
                    </div>

                  </div>

                </InfoPanel>
              </div>

            </div>

            {/* =====================================================
                06 — RIGHT BOX
            ====================================================== */}
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_288px]">

              <div className="order-2 lg:order-1">
                <InfoPanel>
                  Our team maintains proper coordination with clients
                  throughout the tender process to ensure:
                  <br />
                  <br />
                  • Timely documentation
                  <br />
                  • Proper compliance
                  <br />
                  • Deadline management
                  <br />
                  • Smooth communication
                  <br />
                  • Accurate submission process
                </InfoPanel>
              </div>

              <div className="order-1 lg:order-2">
                <HighlightCard>
                  Professional
                  <br />
                  and
                  <br />
                  Timely
                  <br />
                  Coordination
                </HighlightCard>
              </div>

            </div>

            {/* =====================================================
                07 — LEFT BOX
            ====================================================== */}
            <div className="grid items-center gap-6 lg:grid-cols-[288px_minmax(0,1fr)]">

              <div className="order-1">
                <HighlightCard>
                  Industry-Wide
                  <br />
                  Tender
                  <br />
                  Experience
                </HighlightCard>
              </div>

              <div className="order-2">
                <InfoPanel>

                  <p>
                    We have experience handling tenders related to:
                  </p>

                  <div className="mt-5 grid gap-6 sm:grid-cols-2">

                    <div>
                      {industryLeft.map((item) => (
                        <div
                          key={item}
                          className="mb-1"
                        >
                          • {item}
                        </div>
                      ))}
                    </div>

                    <div>
                      {industryRight.map((item) => (
                        <div
                          key={item}
                          className="mb-1"
                        >
                          • {item}
                        </div>
                      ))}
                    </div>

                  </div>

                </InfoPanel>
              </div>

            </div>

          </div>

          {/* FINAL STATEMENT */}
          <p className="mx-auto mt-12 max-w-[1198px] text-center text-lg font-medium leading-8 tracking-widest text-white sm:text-xl md:text-2xl">
            At Tender Elite, we focus on delivering reliable, accurate, and
            professional tender submission support so businesses can
            participate in tenders confidently and efficiently.
          </p>

        </div>

      </section>

      {/* =========================================================
          LOCATIONS — SAME STYLE AS HOME PAGE
      ========================================================== */}
      <section className="bg-[#071B3B] px-5 py-16 text-white sm:px-8 sm:py-20 md:px-10 xl:px-12 xl:py-24">

        <div className="mx-auto max-w-[1440px]">

          <h2 className="text-center font-serif text-4xl font-bold tracking-[3px] text-[#D4A017] sm:text-5xl md:text-6xl">
            Locations We Serve
          </h2>

          <div className="mx-auto mt-12 grid max-w-[1170px] grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4">

            {locations.map(([name, image, link]) => (
              <Link
                href={link}
                key={name}
                className="group relative h-[200px] w-full max-w-[270px] overflow-hidden rounded-[20px] border-[3px] border-[#D4A017] shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.30)]"
              >
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-[#D4A017] bg-[#071B3B] px-5 py-1 text-sm font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:bg-[#D4A017] group-hover:text-[#071B3B]">
                  {name}
                </span>
              </Link>
            ))}

          </div>

          <div className="mt-10 text-center">
            <Link
              href="/locations"
              className="inline-flex rounded-2xl bg-[#D4A017] px-7 py-3 text-sm font-bold text-[#071B3B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(212,160,23,0.30)] sm:px-8 sm:text-base"
            >
              View More
            </Link>
          </div>

        </div>

      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 md:px-10 xl:px-16 xl:py-24">

        <div className="mx-auto max-w-[1062px] rounded-[30px] bg-[#071B3B] px-6 py-12 text-center shadow-[0_15px_40px_rgba(7,27,59,0.18)] sm:px-10 sm:py-14">

          <h2 className="font-serif text-2xl font-semibold tracking-[2px] text-[#D4A017] sm:text-3xl">
            Ready To Submit Your Next Tender ?
          </h2>

          <p className="mt-4 font-serif text-2xl font-semibold tracking-[2px] text-white sm:text-3xl">
            Partner with Tender Elite
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-7 flex max-w-[503px] items-center justify-center gap-3 rounded-[30px] bg-[#B71432] px-5 py-3 text-base font-semibold tracking-widest text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(183,20,50,0.32)] sm:text-xl"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#071B3B]">
              →
            </span>

            Get Professional Tender Assistance
          </Link>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <Footer />

    </main>
  );
}