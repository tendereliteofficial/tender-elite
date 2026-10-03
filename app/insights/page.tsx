"use client";

import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about-us" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
];

const footerServices = [
  { label: "Tender Submission Services", href: "/services/tender-submission" },
  { label: "GeM Catalogue Management", href: "/services/gem-catalogue-management" },
  { label: "Tender Portal Registration", href: "/services/tender-portal-registration" },
  { label: "Bid Management", href: "/services/bid-management-support" },
  { label: "Vendor Assessment", href: "/services/vendor-assessment-support" },
  {
    label: "Joint Venture Support",
    href: "/services/joint-venture-consortium-formation",
  },
];

function Header() {
  return (
    <header className="relative z-50 border-b-4 border-[#D4A017] bg-white shadow-sm">
      <div className="mx-auto flex min-h-[78px] w-full max-w-[1440px] items-center px-4 sm:min-h-[86px] sm:px-5 md:min-h-[90px] md:px-7 xl:px-10">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-2"
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

        <nav className="ml-auto hidden items-center gap-2 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-[20px] border border-slate-200 bg-[#D4A017] px-6 py-3 text-sm font-bold text-black shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-2 rounded-[20px] border border-[#D4A017] bg-[#B71432] px-7 py-3 text-sm font-bold text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#971029]"
          >
            Contact Us
          </Link>
        </nav>

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

          <div className="absolute right-0 top-[48px] w-[230px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_15px_35px_rgba(0,0,0,0.18)]">
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
              className="mt-2 block rounded-xl bg-[#B71432] px-4 py-3 text-center text-base font-bold text-white transition-colors hover:bg-[#971029]"
            >
              Contact Us
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}

function CategoryCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-[360px] flex-col justify-between rounded-[32px] bg-[#071B3B] p-8 text-white shadow-[0_12px_30px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
    >
      <div>
        <h3 className="font-serif text-4xl font-bold leading-tight text-[#D4A017] sm:text-5xl">
          {title}
        </h3>

        <div className="mt-10 font-serif text-2xl font-medium leading-relaxed sm:text-3xl">
          {description}
        </div>
      </div>

      <span className="flex h-12 w-12 items-center justify-center self-end rounded-full bg-[#D4A017] text-2xl font-bold text-[#071B3B] transition-transform duration-300 group-hover:scale-110">
        →
      </span>
    </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-[#071B3B] px-5 py-12 text-white sm:px-8 sm:py-14 md:px-10 xl:px-24">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 xl:grid-cols-4">
        <div>
          <img
            src="/images/footer.png"
            alt="Tender Elite"
            className="mb-5 w-[220px] object-contain sm:w-[250px]"
          />

          <p className="max-w-xs text-sm leading-6 tracking-wider text-white/80">
            Empowering businesses through premium tender consultancy. We
            don&apos;t just process tenders – we build opportunities for
            business growth.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-semibold tracking-wider">Quick Links</h3>

          <div className="space-y-1">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-semibold tracking-wider">Services</h3>

          <div className="space-y-1">
            {footerServices.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-semibold tracking-wider">Contact Info.</h3>

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
        <span>© 2025 Tender Elite Consultancy. All rights reserved.</span>

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
  );
}

export default function InsightsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071B3B]">
      <Header />

      {/* =========================================================
          HERO / INTRODUCTION
      ========================================================== */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-x-0 top-0 h-[5px] bg-[#D4A017]" />

        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-20">
          <h1 className="font-serif text-4xl font-bold leading-tight text-[#D4A017] sm:text-5xl md:text-6xl">
            Welcome to the Insights Section of Tender Elite
          </h1>

          <div className="mt-8 h-0.5 w-full bg-[#D4A017]" />

          <div className="mx-auto mt-12 max-w-[1063px] text-center text-base leading-8 text-white sm:text-lg md:text-xl">
            <p>
              At Tender Elite, our vision extends far beyond providing
              professional tender consultancy services.
            </p>

            <p className="mt-6">
              We believe that knowledge is one of the most valuable resources
              for growth, and it should be accessible to everyone who wishes
              to learn, innovate, and build a successful future in the tender
              and procurement industry.
            </p>

            <p className="mt-6">
              The Insights section has been created with a simple purpose - to
              educate, guide, and empower individuals and businesses through
              practical, reliable, and easy-to-understand knowledge.
            </p>

            <p className="mt-6">
              Whether you are taking your first step into government
              procurement or looking to expand your expertise, this platform is
              designed to support your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY TENDER ELITE WAS BORN
      ========================================================== */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-14 sm:px-8 md:px-12 lg:grid-cols-[1fr_0.8fr] lg:px-20 lg:py-20">
          <div>
            <h2 className="font-serif text-4xl font-bold leading-tight text-[#D4A017] sm:text-5xl md:text-6xl">
              Why Tender Elite Was Born
            </h2>

            <div className="mt-8 max-w-[688px] text-base leading-8 text-black sm:text-lg">
              <p>
                Because navigating tenders shouldn&apos;t feel complicated.
              </p>

              <p className="mt-6">
                The tender ecosystem can often seem complex. Businesses,
                entrepreneurs, and professionals spend valuable time
                understanding tender procedures, documentation, eligibility
                criteria, compliance requirements, bid preparation, and
                procurement processes.
              </p>

              <p className="mt-6 text-[#B71432]">
                “Tender Elite was born from a simple idea – to make the tender
                journey easier to understand and navigate.”
              </p>

              <p className="mt-6">
                We believe that valuable knowledge should not be scattered
                across multiple sources. Our goal is to bring practical tender
                knowledge, insights, and resources together in one place,
                making it easier for businesses, entrepreneurs, and
                professionals to understand the opportunities within the
                government procurement ecosystem.
              </p>

              <p className="mt-6">
                Instead of keeping our experience limited to ourselves, we
                believe in sharing knowledge that can help others learn,
                prepare better, and participate with greater confidence.
              </p>

              <p className="mt-6 font-bold">
                Because at Tender Elite, we believe:
                <br />
                Knowledge becomes more valuable when it is shared.
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[542px] overflow-hidden rounded-[28px] bg-[#0F172A] p-0 shadow-[0_15px_35px_rgba(7,27,59,0.2)]">
            <img
              src="/images/insightsnew.png"
              alt="Tender Elite Insights"
              className="aspect-square w-full rounded-[20px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO CAN BENEFIT
      ========================================================== */}
      <section className="bg-[#0F172A]">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 md:px-12 lg:grid-cols-[0.8fr_1fr] lg:px-20 lg:py-20">
          <div>
<h2 className="whitespace-nowrap font-serif text-4xl font-bold text-[#D4A017] sm:text-5xl md:text-6xl">
  Who Can Benefit?
</h2>

            <div className="mt-8 max-w-[575px] text-base leading-8 text-white sm:text-lg">
              <p>
                Our Insights platform has been created for everyone interested
                in the world of tenders and government procurement, including:
              </p>

              <div className="mt-5 space-y-2">
                <p>
                  • Students who want to understand the tender industry
                </p>
                <p>
                  • Startups and aspiring entrepreneurs beginning their business
                  journey
                </p>
                <p>
                  • MSMEs, contractors, suppliers, and manufacturers exploring
                  government business opportunities
                </p>
                <p>• Business owners looking to expand into public procurement</p>
                <p>• Professionals seeking practical guidance and industry knowledge</p>
                <p>• Anyone interested in learning how the tender ecosystem works</p>
                            <p>
              We are entrepreneurs ourselves, and we understand the challenges,
              risks, responsibilities, and aspirations that come with building
              a business from the ground up.
            </p>

            <p className="mt-6">
              That is why we genuinely enjoy connecting with fellow
              entrepreneurs, exchanging ideas, sharing experiences, and helping
              others move forward with confidence.
            </p>

            <p className="mt-6">
              To make learning easier, the Insights section is divided into
              three dedicated categories.
            </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[650px] overflow-hidden rounded-[28px]">
            <img
              src="/images/insights2.png"
              alt="Tender Elite learning"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          CATEGORY CARDS
      ========================================================== */}
      <section className="bg-white pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
        <div className="mx-auto grid max-w-[1240px] gap-y-10 gap-x-8 px-5 sm:px-8 md:grid-cols-2 md:gap-x-12 md:gap-y-12 md:px-12 xl:grid-cols-3 xl:gap-x-20 xl:gap-y-14">
          <CategoryCard
            href="/insights/tender-university"
            title="Tender University"
            description="Welcome to Tender University, the educational hub of Tender Elite."
          />

          <CategoryCard
            href="/insights/blogs"
            title="Blogs"
            description={
              <>
                Insights That Keep You Ahead.
                <br />
                <br />
                Knowledge evolves every day-and so do we.
              </>
            }
          />

          <CategoryCard
            href="/insights/faqs"
            title="Frequently Asked Questions"
            description="Quick Answers. Clear Guidance."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
