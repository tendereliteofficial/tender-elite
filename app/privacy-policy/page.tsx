import type { Metadata } from "next";
import { withYoast } from "@/lib/yoast-seo";
import Link from "next/link";

const privacySections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "Welcome to Tender Elite.",
      "Tender Elite operates the website https://www.tenderelite.com/ and provides independent tender consultancy and related business support services.",
      "We respect your privacy and are committed to handling personal and business information responsibly. This Privacy Policy explains how we collect, use, store, protect and share information when you visit our Website, submit an enquiry or engage our services.",
      "By using our Website, you acknowledge that you have been provided access to this Privacy Policy. Where consent is required by applicable law, we will obtain it separately as appropriate.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "Depending on how you interact with our Website and services, we may collect the following information.",
    ],
    subsections: [
      {
        title: "2.1 Personal Information",
        intro: "When you contact us or submit an enquiry, we may collect:",
        items: [
          "Full name.",
          "Mobile number or telephone number.",
          "Email address.",
          "Business or company name.",
          "Business address, if provided.",
          "Information included in your enquiry or communication.",
        ],
      },
      {
        title: "2.2 Business and Tender-Related Information",
        intro:
          "To provide our consultancy services, we may collect information relevant to your business requirements, including:",
        items: [
          "Company registration and business details.",
          "GST and other business identification details, where required.",
          "Tender documents and tender reference numbers.",
          "Business eligibility and work experience information.",
          "Registration, vendor assessment and empanelment documents.",
          "Product details and catalogue information.",
          "Other documents reasonably required to provide the requested service.",
        ],
      },
      {
        title: "2.3 Technical Information",
        intro:
          "When you visit our Website, certain technical information may be collected by our hosting infrastructure or other tools we use, including:",
        items: [
          "IP address.",
          "Browser type and device information.",
          "Operating system.",
          "Pages visited and referring website.",
          "Date and time of access.",
          "Website usage and diagnostic information.",
        ],
      },
    ],
    closing: [
      "Please provide only information necessary for your enquiry or engagement. Do not submit passwords or unnecessary sensitive personal information through public forms or unsecured communication channels.",
      "The exact information collected depends on the technologies and services enabled on our Website.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    intro: "We may use your information for the following purposes:",
    items: [
      "To respond to enquiries and consultation requests.",
      "To understand your business and tender-related requirements.",
      "To provide tender consultancy and documentation support.",
      "To assist with registration, vendor assessment, empanelment and related processes.",
      "To prepare quotations, proposals, invoices and service records.",
      "To communicate with you about requested services.",
      "To maintain business records and meet legal obligations.",
      "To improve our Website, services and user experience.",
      "To protect our Website against fraud, misuse and security threats.",
      "To send relevant business updates or marketing communications where permitted by applicable law.",
    ],
    closing: [
      "We will handle personal information in accordance with applicable legal requirements and the purposes communicated to you.",
    ],
  },
  {
    title: "4. Legal Basis and Consent",
    paragraphs: [
      "We process personal information in accordance with applicable Indian data-protection and privacy laws.",
      "Depending on the circumstances, information may be processed based on consent, a permitted legitimate use or another lawful basis recognised by applicable law.",
      "Where consent is required, we will seek it through an appropriate process. You may withdraw consent where applicable by contacting us. Withdrawal does not affect processing lawfully completed before withdrawal and may affect our ability to provide services that depend on the relevant information.",
    ],
  },
  {
    title: "5. Sharing of Information",
    paragraphs: ["We do not sell personal information as a commercial product."],
    intro: "We may share information where reasonably necessary and legally permitted with:",
    items: [
      "Website hosting and technical service providers.",
      "Website maintenance and security providers.",
      "Analytics providers, if used.",
      "Professional advisers and service providers assisting our business.",
      "Payment service providers, where applicable.",
      "Government authorities or procurement portals where required for a requested service or authorised by you.",
      "Competent authorities where disclosure is required by law.",
    ],
    closing: [
      "We take reasonable steps to ensure that information shared with service providers is handled appropriately, subject to applicable law and relevant contractual arrangements.",
    ],
  },
  {
    title: "6. Third-Party Websites and Government Portals",
    paragraphs: [
      "Our Website may contain links to external websites, including GeM, government procurement portals and other third-party platforms.",
      "Tender Elite is an independent consultancy and is not affiliated with or endorsed by GeM or any government authority unless expressly stated and independently verified.",
      "Information submitted directly to third-party websites is governed by their respective terms and privacy policies. We do not control their data collection, security or privacy practices.",
      "Please review the relevant third-party privacy policy before submitting information to an external website.",
    ],
  },
  {
    title: "7. Cookies and Similar Technologies",
    paragraphs: [
      "Our Website or its service providers may use cookies and similar technologies to support essential Website functions, analyse traffic, improve performance or measure marketing effectiveness, depending on the tools enabled.",
      "You may manage certain cookies through your browser settings. Where required by applicable law, we will obtain appropriate consent before using non-essential cookies or tracking technologies.",
      "Disabling certain cookies may affect Website functionality.",
    ],
  },
  {
    title: "8. Data Storage and Retention",
    paragraphs: [
      "We retain personal information for as long as reasonably necessary to fulfil the purposes for which it was collected, provide our services, maintain business records, resolve disputes, protect our rights and comply with applicable legal obligations.",
      "Retention periods may vary depending on the type of information and the nature of the engagement.",
      "When information is no longer required, we will take reasonable steps to delete it, anonymise it or otherwise dispose of it in accordance with applicable law and our retention practices.",
    ],
  },
  {
    title: "9. Data Security",
    paragraphs: [
      "We take reasonable security measures appropriate to the nature of the information to protect it against unauthorised access, disclosure, alteration, loss or misuse.",
      "However, no website, electronic communication or storage system can be guaranteed to be completely secure.",
      "Clients should avoid sharing passwords or unnecessary confidential information through unsecured channels. Where a personal data breach occurs, we will take the steps required by applicable law.",
    ],
  },
  {
    title: "10. Your Privacy Rights",
    paragraphs: [
      "Subject to applicable law, you may have rights relating to your personal information, including the right to:",
    ],
    items: [
      "Request information about personal data we process.",
      "Request correction or updating of inaccurate information.",
      "Request deletion of information where applicable.",
      "Withdraw consent where processing relies on consent.",
      "Raise a privacy-related grievance.",
      "Exercise other rights available under applicable law.",
    ],
    closing: [
      "To exercise an applicable right, please contact us using the details in Section 12. We may need to verify your identity before responding. Some requests may be subject to legal exceptions or record-retention requirements.",
    ],
  },
  {
    title: "11. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy to reflect changes in our services, Website technologies, business practices or legal requirements.",
      "Any revised version will be published on this page with an updated revision date. We encourage visitors to review this page periodically.",
    ],
  },
  {
    title: "12. Contact Information and Privacy Grievances",
    paragraphs: [
      "For questions, requests or complaints relating to this Privacy Policy or the handling of your personal information, please contact:",
    ],
    contact: true,
  },
];

const refundSections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "This Refund & Cancellation Policy applies to consultancy and related services provided by Tender Elite through https://www.tenderelite.com/.",
      "Please read this policy carefully before making a payment for our services.",
    ],
  },
  {
    title: "2. Commencement of Work",
    paragraphs: [
      "Tender Elite will commence work after receiving the agreed payment, subject to receipt of the necessary information and documents from the client.",
      "By making a payment, the client acknowledges the agreed scope of services and the terms of this Refund & Cancellation Policy.",
    ],
  },
  {
    title: "3. Refund After Work Has Started",
    paragraphs: [
      "Once Tender Elite has commenced work on a client's request, the amount paid for that service will generally be non-refundable.",
      "Work may include reviewing tender documents, preparing documentation, conducting eligibility checks, assisting with registration, preparing product catalogues, providing consultancy or undertaking other activities included in the agreed scope of service.",
    ],
  },
  {
    title: "4. No Refund for Unsuccessful Tender Outcomes",
    paragraphs: [
      "Tender Elite does not guarantee the award of any tender.",
      "If a client participates in a tender and does not win the tender, is not selected, or is disqualified by the relevant authority, no refund will be provided solely because of that outcome, subject to applicable law and any separate written agreement.",
      "Tender evaluation, qualification and award decisions are made by the relevant procuring authority.",
    ],
  },
  {
    title: "5. Refund When Services Have Not Been Used",
    paragraphs: [
      "If a client has made a payment but Tender Elite has not started any work or provided any part of the agreed service, the client may request a refund.",
      "Refund requests will be reviewed and processed in accordance with the applicable agreement and law. Any refund amount will be assessed based on whether work has commenced, whether any service has been delivered, and whether any authorised or non-recoverable third-party charges have been incurred.",
      "Clients should contact us promptly to request cancellation and a refund before work begins.",
    ],
  },
  {
    title: "6. Taxes and Statutory Deductions",
    paragraphs: [
      "Taxes, statutory deductions and amounts withheld or deposited with government authorities will be handled in accordance with applicable law.",
      "Any amount that cannot legally be recovered or refunded by Tender Elite will not be refunded by Tender Elite. Where a tax adjustment, credit note or refund is legally required or available, it will be handled in accordance with the applicable tax rules.",
    ],
  },
  {
    title: "7. Government and Third-Party Charges",
    paragraphs: [
      "Government fees, tender fees, portal charges and other third-party charges are separate from Tender Elite's consultancy fees unless expressly included in the agreed quotation.",
      "Refunds of such charges are subject to the applicable authority's or service provider's rules. Tender Elite cannot guarantee a refund of amounts paid to a third party.",
    ],
  },
  {
    title: "8. How to Request a Refund",
    paragraphs: [
      "To request a refund, cancellation or clarification, contact us using the details below and provide your name, payment reference, service details and reason for the request.",
      "We will review the request and communicate the outcome in accordance with the applicable agreement and law.",
    ],
    contact: true,
  },
  {
    title: "9. Exceptions Required by Law",
    paragraphs: [
      "Nothing in this policy is intended to exclude any refund, remedy or consumer right that cannot lawfully be excluded or limited under applicable law.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    paragraphs: [
      "Tender Elite may update this policy when necessary. Any revised version will be published on this page with an updated revision date.",
    ],
  },
  {
    title: "11. Payment Safety, Invoices and Authorised Payments",
    subsections: [
      {
        title: "11.1 Invoice Required Before Payment",
        paragraphs: [
          "Clients are strictly advised not to make any payment to Tender Elite or any person claiming to represent Tender Elite without first receiving an official Pro Forma Invoice or Tax Invoice issued by Tender Elite.",
          "Before making a payment, clients must request and verify the invoice, the service description, the amount payable and the authorised payment details.",
          "If any employee or representative requests payment, the client must obtain the relevant official invoice before proceeding with the payment.",
        ],
      },
      {
        title: "11.2 Official Communication and Payment Records",
        paragraphs: [
          "Clients are advised to maintain written communication regarding the requested services, agreed fees and payment instructions through official Tender Elite email addresses or documented WhatsApp conversations with authorised company representatives.",
          "Clients should obtain written confirmation of the service scope and payment amount before transferring funds.",
          "Payments made without an invoice or without any verifiable written communication confirming the service engagement may be subject to additional verification. Refund eligibility will be assessed based on the available records, the services agreed upon, the work performed and applicable law.",
        ],
      },
      {
        title: "11.3 Payments to Employees' Personal Accounts",
        paragraphs: [
          "Clients must not transfer consultancy fees to an employee's or representative's personal bank account or personal payment account unless the payment arrangement has been expressly authorised in writing by Tender Elite through an official company communication channel.",
          "Payments made to an employee's personal account without the company's prior written authorisation may not be recognised as payments made to Tender Elite and may not qualify for a refund from Tender Elite.",
          "Clients should independently verify any unusual payment request or change in payment details with Tender Elite using the official contact information published on our Website.",
        ],
      },
      {
        title: "11.4 Responsibility for Payment Verification",
        paragraphs: [
          "Clients are responsible for checking the invoice and verifying the authorised payment instructions before making a transfer. Tender Elite will review payment disputes or refund requests based on the available invoice, transaction records, written communications and applicable agreements.",
          "Nothing in this section excludes any refund, remedy or legal right that cannot lawfully be excluded or limited. Where a payment has been received or retained by Tender Elite, the circumstances will be assessed in accordance with the applicable agreement and law.",
        ],
      },
    ],
  },
];

function ContactCard() {
  return (
    <div className="mt-6 rounded-2xl bg-[#071B3B] p-5 text-white sm:p-6">
      <p className="text-lg font-bold text-[#D4A017]">Tender Elite</p>
      <div className="mt-3 space-y-2 text-sm leading-7 text-slate-200 sm:text-base">
        <p>
          Website:{" "}
          <a href="https://www.tenderelite.com/" className="text-[#D4A017] underline">
            https://www.tenderelite.com/
          </a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:sales@tenderelite.com" className="text-[#D4A017] underline">
            sales@tenderelite.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+917045060062" className="text-[#D4A017] underline">
            +91 7045060062
          </a>
        </p>
      </div>
    </div>
  );
}

function PolicySection({ section }: { section: any }) {
  return (
    <article className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(7,27,59,0.06)] transition hover:border-[#D4A017]/70 sm:p-8 md:p-9">
      <h2 className="border-b border-[#D4A017]/50 pb-4 font-serif text-xl font-bold leading-snug text-[#071B3B] sm:text-2xl">
        {section.title}
      </h2>

      {section.intro && (
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {section.intro}
        </p>
      )}

      {section.paragraphs?.length > 0 && (
        <div className="mt-5 space-y-4">
          {section.paragraphs.map((paragraph: string, index: number) => (
            <p key={index} className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {section.items && (
        <ul className="mt-5 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {section.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {section.subsections?.map((sub: any) => (
        <div key={sub.title} className="mt-7 border-l-2 border-[#D4A017] pl-4 sm:pl-6">
          <h3 className="text-base font-bold text-[#071B3B] sm:text-lg">
            {sub.title}
          </h3>
          {sub.intro && (
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {sub.intro}
            </p>
          )}
          {sub.paragraphs?.map((paragraph: string, index: number) => (
            <p key={index} className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {paragraph}
            </p>
          ))}
          {sub.items && (
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {sub.items.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {section.closing?.map((paragraph: string, index: number) => (
        <p key={index} className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {paragraph}
        </p>
      ))}

      {section.contact && <ContactCard />}
    </article>
  );
}

function Header() {
  const links = [
    ["Home", "/"],
    ["Services", "/services"],
    ["Industries", "/industries"],
    ["Insights", "/insights"],
    ["About Us", "/about-us"],
  ];

  return (
    <header className="relative z-50 border-b-4 border-[#D4A017] bg-white shadow-sm">
      <div className="mx-auto flex min-h-[80px] max-w-[1440px] items-center px-4 sm:px-6 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <img src="/images/logo-mark.png" alt="Tender Elite mark" className="h-12 w-auto object-contain sm:h-14 md:h-16" />
          <img src="/images/logo-wordmark.png" alt="Tender Elite" className="w-[110px] object-contain sm:w-[145px] md:w-[175px]" />
        </Link>

        <nav className="ml-auto hidden items-center gap-2 xl:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-[20px] bg-[#D4A017] px-5 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:text-white">
              {label}
            </Link>
          ))}
          <Link href="/contact" className="ml-2 rounded-[20px] bg-[#B71432] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5">
            Contact Us
          </Link>
        </nav>

        <details className="relative ml-auto xl:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl bg-[#D4A017] text-[#071B3B]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <div className="absolute right-0 top-12 w-[230px] rounded-xl border bg-white p-3 shadow-xl">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="block rounded-lg px-4 py-3 font-bold text-[#071B3B] hover:bg-[#D4A017]">
                {label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 block rounded-lg bg-[#B71432] px-4 py-3 text-center font-bold text-white">
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
        <div>
          <img src="/images/footer.png" alt="Tender Elite" className="mb-5 w-[210px] object-contain sm:w-[250px]" />
          <p className="max-w-xs text-sm leading-6 tracking-wider text-white/80">
            Empowering businesses through premium tender consultancy. We don&apos;t just process tenders – we build opportunities for business growth.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-semibold tracking-wider">Quick Links</h3>
          {[["Home", "/"], ["Services", "/services"], ["Industries", "/industries"], ["Insights", "/insights"], ["About Us", "/about-us"], ["Contact Us", "/contact"]].map(([label, href]) => (
            <Link key={href} href={href} className="block py-1.5 text-sm transition hover:translate-x-1 hover:text-[#D4A017]">
              {label}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="mb-5 font-semibold tracking-wider">Services</h3>
          {[
            ["Tender Submission Services", "/services/tender-submission"],
            ["GeM Catalogue Management", "/services/gem-catalogue-management"],
            ["Tender Portal Registration", "/services/tender-portal-registration"],
            ["Bid Management", "/services/bid-management-support"],
            ["Vendor Assessment", "/services/vendor-assessment-support"],
            ["Joint Venture Support", "/services/joint-venture-consortium-formation"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="block py-1.5 text-sm transition hover:translate-x-1 hover:text-[#D4A017]">
              {label}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="mb-5 font-semibold tracking-wider">Contact Info.</h3>
          <p className="text-sm leading-8 text-white/80">
            +91 7045060062<br />
            sales@tenderelite.com<br />
            Mumbai, Maharashtra, India
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1240px] flex-col justify-between gap-4 border-t border-white/30 pt-6 text-xs text-slate-200/70 sm:flex-row">
        <span>© 2025 Tender Elite Consultancy. All rights reserved.</span>
        <div className="flex flex-wrap gap-5">
          <Link href="/privacy-policy" className="text-[#D4A017] hover:text-white">Privacy & Policies</Link>
          <Link href="/disclaimer" className="hover:text-[#D4A017]">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071B3B]">
      <Header />

      <section className="bg-[#071B3B] px-5 py-16 text-center text-white sm:py-20 md:py-24">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#D4A017] sm:text-sm">
          Tender Elite Consultancy
        </p>
        <h1 className="font-serif text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl">
          Privacy & Policies
        </h1>
        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#D4A017]" />
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
          Learn how Tender Elite handles your information and understand our refund and cancellation terms.
        </p>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1050px]">

          <div className="mb-10 flex flex-wrap gap-3">
            <a href="#privacy-policy" className="rounded-full border border-[#D4A017] bg-[#FFF9E9] px-5 py-2.5 text-sm font-bold text-[#071B3B] transition hover:bg-[#D4A017]">
              Privacy Policy
            </a>
            <a href="#refund-policy" className="rounded-full border border-[#D4A017] bg-[#FFF9E9] px-5 py-2.5 text-sm font-bold text-[#071B3B] transition hover:bg-[#D4A017]">
              Refund & Cancellation Policy
            </a>
          </div>

          <div id="privacy-policy" className="scroll-mt-24">
            <div className="mb-7 border-b-2 border-[#D4A017] pb-5">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B58A16]">Section One</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#071B3B] sm:text-4xl">
                Privacy Policy
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                How we collect, use, store, protect and share your information.
              </p>
            </div>

            <div className="space-y-6">
              {privacySections.map((section) => (
                <PolicySection key={section.title} section={section} />
              ))}
            </div>
          </div>

          <div id="refund-policy" className="mt-20 scroll-mt-24">
            <div className="mb-7 border-b-2 border-[#D4A017] pb-5">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B58A16]">Section Two</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#071B3B] sm:text-4xl">
                Refund & Cancellation Policy
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Important terms regarding payments, service commencement, refunds and cancellations.
              </p>
            </div>

            <div className="space-y-6">
              {refundSections.map((section) => (
                <PolicySection key={section.title} section={section} />
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

const baseMetadata: Metadata = {
  title: "Privacy & Refund Policy | Tender Elite",
  description:
    "Read Tender Elite's Privacy Policy and Refund & Cancellation Policy, including information handling, data security, payment safety and refund terms.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export async function generateMetadata() {
  return withYoast("/privacy-policy", baseMetadata);
}