import type { Metadata } from "next";
import { withYoast } from "@/lib/yoast-seo";
import Link from "next/link";

const sections = [
  {
    title: "1. Independent Consultancy",
    paragraphs: [
      "Tender Elite is an independent tender consultancy and service provider. We are not affiliated with, associated with, endorsed by, or an authorised representative of any government department, government agency, public sector undertaking (PSU), private-sector company, or procurement authority.",
      "Tender Elite operates independently and provides consultancy and support services to businesses seeking assistance with tender participation, government portal registration, GeM registration, vendor assessment, vendor empanelment, tender documentation, bid preparation and related services.",
    ],
  },
  {
    title: "2. No Government or Official Affiliation",
    paragraphs: [
      "References to the Government e-Marketplace (GeM), government departments, public sector undertakings, private companies, procurement portals or other organisations on this Website are made solely for informational purposes or to describe the services we provide.",
      "All names, logos, trademarks and other intellectual property belong to their respective owners. Their use or mention does not imply any official affiliation, partnership, endorsement or authorisation.",
    ],
  },
  {
    title: "3. No Guarantee of Approval or Tender Award",
    paragraphs: [
      "Tender Elite provides consultancy, documentation and administrative support. We do not guarantee tender awards, registration approvals, vendor assessment results, empanelment, technical qualification, financial qualification or any specific business outcome.",
      "All final decisions regarding registrations, applications, eligibility, assessments, approvals, tender evaluations and contract awards rest solely with the relevant authority or organisation.",
    ],
  },
  {
    title: "4. Accuracy of Information",
    paragraphs: [
      "We make reasonable efforts to provide accurate and up-to-date information on our Website. However, tender conditions, eligibility criteria, portal procedures, fees, deadlines and government policies may change.",
      "Visitors and clients should independently verify the latest official requirements before making decisions or submitting applications.",
    ],
  },
  {
    title: "5. Limitation of Responsibility",
    paragraphs: [
      "Tender Elite shall not be responsible for decisions made by government authorities, private organisations, procurement agencies or third-party portals. To the extent permitted by applicable law, we are not liable for losses arising from changes in tender requirements, third-party portal downtime, application rejection or circumstances beyond our reasonable control.",
      "Nothing in this Disclaimer excludes or limits any liability that cannot lawfully be excluded or limited.",
    ],
  },
];

const navLinks: [string, string][] = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Insights", "/insights"],
  ["About Us", "/about-us"],
];

const footerQuickLinks: [string, string][] = [
  ...navLinks,
  ["Contact Us", "/contact"],
];

const footerServices: [string, string][] = [
  ["Tender Submission Services", "/services/tender-submission"],
  ["GeM Catalogue Management", "/services/gem-catalogue-management"],
  ["Tender Portal Registration", "/services/tender-portal-registration"],
  ["Bid Management", "/services/bid-management-support"],
  ["Vendor Assessment", "/services/vendor-assessment-support"],
  ["Joint Venture Support", "/services/joint-venture-consortium-formation"],
];

function Header() {
  return (
    <header className="relative z-50 border-b-4 border-[#D4A017] bg-white shadow-sm">
      <div className="mx-auto flex min-h-[78px] max-w-[1440px] items-center px-4 sm:min-h-[86px] sm:px-5 md:min-h-[90px] md:px-7 xl:px-10">

        <Link href="/" className="flex shrink-0 items-center gap-2">
          <img
            src="/images/logo-mark.png"
            alt="Tender Elite mark"
            className="h-[46px] w-auto object-contain sm:h-[56px] md:h-[62px] lg:h-[68px]"
          />

          <img
            src="/images/logo-wordmark.png"
            alt="Tender Elite"
            className="w-[105px] object-contain sm:w-[135px] md:w-[155px] lg:w-[195px]"
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-2 xl:flex">
          {navLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-[20px] border border-slate-200 bg-[#D4A017] px-6 py-3 text-sm font-bold text-black shadow-md transition hover:-translate-y-0.5 hover:text-white"
            >
              {label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-2 rounded-[20px] border border-[#FFA629] bg-[#B71432] px-7 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </nav>

        <details className="relative ml-auto xl:hidden">
          <summary
            aria-label="Open navigation menu"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-[#D4A017] bg-[#D4A017] text-[#071B3B] shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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

          <div className="absolute right-0 top-12 w-[235px] rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
            {navLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="block rounded-xl px-4 py-3 font-bold text-[#071B3B] hover:bg-[#D4A017] hover:text-white"
              >
                {label}
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

function Footer() {
  return (
    <footer className="bg-[#071B3B] px-5 py-12 text-white sm:px-8 md:px-10 xl:px-24">

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">

        {/* BRAND */}
        <div>
          <img
            src="/images/footer.png"
            alt="Tender Elite"
            className="mb-5 w-[210px] object-contain sm:w-[250px]"
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

          {footerQuickLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="block py-1.5 text-sm tracking-wider transition hover:translate-x-1 hover:text-[#D4A017]"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="mb-5 font-semibold tracking-wider">
            Services
          </h3>

          {footerServices.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="block py-1.5 text-sm tracking-wider transition hover:translate-x-1 hover:text-[#D4A017]"
            >
              {label}
            </Link>
          ))}
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
            className="transition hover:text-[#D4A017]"
          >
            Privacy Policy
          </Link>

          <Link
            href="/disclaimer"
            className="text-[#D4A017] transition hover:text-[#F1C84B]"
          >
            Disclaimer
          </Link>

        </div>

      </div>
    </footer>
  );
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071B3B]">

      <Header />

      {/* HERO */}
      <section className="bg-[#071B3B] px-5 py-16 text-center text-white sm:px-8 sm:py-20 md:py-24">
        <div className="mx-auto max-w-[1000px]">

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#D4A017] sm:text-sm">
            Tender Elite Consultancy
          </p>

          <h1 className="font-serif text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl">
            Disclaimer
          </h1>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#D4A017]" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
            Important information about our independent consultancy services
            and the use of this website.
          </p>

        </div>
      </section>

      {/* DISCLAIMER CONTENT */}
      <section className="px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1050px]">

          <div className="mb-8 rounded-2xl border border-[#D4A017]/40 bg-[#FFF9E9] p-5 sm:p-6">
            <p className="text-sm leading-7 text-[#071B3B] sm:text-base">
              Please read this Disclaimer carefully before using the Tender
              Elite website or relying on information published on it.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-7">

            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(7,27,59,0.06)] transition hover:-translate-y-0.5 hover:border-[#D4A017]/70 hover:shadow-[0_12px_28px_rgba(7,27,59,0.10)] sm:p-8 md:p-9"
              >
                <h2 className="border-b border-[#D4A017]/50 pb-4 font-serif text-xl font-bold leading-snug text-[#071B3B] sm:text-2xl">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}

          </div>

          {/* CONTACT INFORMATION */}
          <article className="mt-6 rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(7,27,59,0.06)] sm:p-8 md:p-9">

            <h2 className="border-b border-[#D4A017]/50 pb-4 font-serif text-xl font-bold text-[#071B3B] sm:text-2xl">
              6. Contact Information
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              For questions regarding this Disclaimer, please contact:
            </p>

            <div className="mt-5 rounded-2xl bg-[#071B3B] p-5 text-white sm:p-6">

              <p className="text-lg font-bold text-[#D4A017]">
                Tender Elite
              </p>

              <div className="mt-3 space-y-2 text-sm leading-7 text-slate-200 sm:text-base">

                <p>
                  Website:{" "}
                  <a
                    href="https://www.tenderelite.com/"
                    className="font-semibold text-[#D4A017] underline underline-offset-4"
                  >
                    https://www.tenderelite.com/
                  </a>
                </p>

                <p>
                  Email:{" "}
                  <a
                    href="mailto:sales@tenderelite.com"
                    className="font-semibold text-[#D4A017] underline underline-offset-4"
                  >
                    sales@tenderelite.com
                  </a>
                </p>

                <p>
                  Phone:{" "}
                  <a
                    href="tel:+917045060062"
                    className="font-semibold text-[#D4A017] underline underline-offset-4"
                  >
                    +91 7045060062
                  </a>
                </p>

              </div>
            </div>
          </article>

        </div>
      </section>

      <Footer />

    </main>
  );
}

const baseMetadata: Metadata = {
  title: "Disclaimer | Tender Elite",
  description:
    "Read the Tender Elite Disclaimer covering independent consultancy, official affiliations, service outcomes, website information and limitations of responsibility.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export async function generateMetadata() {
  return withYoast("/disclaimer", baseMetadata);
}