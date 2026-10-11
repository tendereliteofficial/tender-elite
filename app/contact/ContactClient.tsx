'use client';

import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Tender Elite for tender search, GeM registration, bid management and documentation support. Call or write to us for a free consultation.",
  alternates: { canonical: "/contact" },
};

const serif = "Georgia, 'Times New Roman', serif";
const sans = "Arial, Helvetica, sans-serif";

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Insights", "/insights"],
  ["About Us", "/about-us"],
] as const;

const services = [
  ["Tender Submission Services", "/services"],
  ["GeM Catalogue Management", "/services"],
  ["Tender Portal Registration", "/services"],
  ["Bid Management", "/services"],
  ["Vendor Assessment", "/services"],
  ["Joint Venture Support", "/services"],
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-[5px] border-[#D4A017] bg-white">
      <div className="mx-auto flex min-h-[90px] max-w-[1440px] items-center gap-4 px-5 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <img src="/images/logo-mark.png" alt="Tender Elite Logo" className="h-16 w-20 object-contain" />
          <img src="/images/logo-wordmark.png" alt="Tender Elite" className="hidden w-44 object-contain sm:block md:w-48" />
        </Link>

        <nav className="ml-auto hidden items-center gap-3 lg:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="rounded-[20px] border border-white bg-[#D4A017] px-5 py-3 text-sm font-semibold text-black shadow-[0_6px_14px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_12px_22px_rgba(7,27,59,0.20)]"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-[20px] border border-[#D4A017] bg-[#B71432] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#8F0F29]"
          >
            Contact Us
          </Link>
        </nav>

        <details className="relative ml-auto lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl bg-[#D4A017] text-xl font-bold text-[#071B3B]">
            ☰
          </summary>
          <div className="absolute right-0 top-14 w-56 rounded-2xl border bg-white p-3 shadow-2xl">
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="block rounded-xl px-4 py-3 font-semibold text-[#071B3B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4A017] hover:text-white"
              >
                {label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 block rounded-xl bg-[#B71432] px-4 py-3 text-center font-semibold text-white">
              Contact Us
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}



function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const fullName = String(formData.get("fullName") || "").trim();
    const companyName = String(formData.get("companyName") || "").trim();
    const phoneNumber = String(formData.get("phoneNumber") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!fullName || !phoneNumber || !email || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          companyName,
          mobile: phoneNumber,
          email,
          message,
        }),
      });

      let data: { message?: string } = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        setError(data.message || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Contact form error:", err);
      setError("Unable to submit your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="full-name" className="mb-2 block text-sm font-semibold tracking-wider text-[#071B3B]">
            Full Name
          </label>
          <input
            id="full-name"
            name="fullName"
            type="text"
            required
            className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-[#071B3B] outline-none transition-all duration-300 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/30"
          />
        </div>

        <div>
          <label htmlFor="company-name" className="mb-2 block text-sm font-semibold tracking-wider text-[#071B3B]">
            Company Name
          </label>
          <input
            id="company-name"
            name="companyName"
            type="text"
            className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-[#071B3B] outline-none transition-all duration-300 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/30"
          />
        </div>

        <div>
          <label htmlFor="phone-number" className="mb-2 block text-sm font-semibold tracking-wider text-[#071B3B]">
            Phone Number
          </label>
          <input
            id="phone-number"
            name="phoneNumber"
            type="tel"
            required
            className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-[#071B3B] outline-none transition-all duration-300 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/30"
          />
        </div>

        <div>
          <label htmlFor="email-address" className="mb-2 block text-sm font-semibold tracking-wider text-[#071B3B]">
            Email Address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-[#071B3B] outline-none transition-all duration-300 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/30"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold tracking-wider text-[#071B3B]">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[#071B3B] outline-none transition-all duration-300 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/30"
        />
      </div>

      {error && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-semibold text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="h-14 w-full rounded-2xl bg-[#D4A017] font-semibold tracking-widest text-white shadow-[0_10px_30px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {submitted && (
        <p className="rounded-xl border border-[#D4A017] bg-[#071B3B] px-4 py-3 text-center text-sm font-semibold text-white">
          Thank you! Your message has been received.
        </p>
      )}
    </form>
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


export default function ContactPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white" style={{ fontFamily: sans }}>
      <Header />

      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1280px] px-5">
          <h1
            className="text-center text-4xl font-bold leading-tight tracking-[2px] text-[#071B3B] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: serif }}
          >
            Let&apos;s Secure Your Next Big Win
          </h1>

          <div className="mx-auto mt-5 h-[3px] w-full max-w-[520px] bg-[#D4A017]" />

          <p className="mx-auto mt-6 max-w-[1050px] text-center text-base leading-7 tracking-wide text-slate-500 sm:text-lg">
            Have a specific tender in mind? Or want to discuss how we can support your bidding strategy?
            Reach out to our expert team today.
          </p>

          <div className="mx-auto mt-9 max-w-[922px] rounded-[20px] border-[3px] border-[#D4A017] bg-slate-50 p-6 shadow-[0_0_30px_rgba(0,0,0,0.18)] sm:p-8 lg:p-[54px_68px_30px]">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
