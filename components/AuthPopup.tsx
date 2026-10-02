"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  ShieldCheck,
  User,
  X,
} from "lucide-react";

export default function AuthPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Open after 50 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setError("");
    setSuccess("");

    setTimeout(() => {
      setIsOpen(true);
    }, 30000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const form = e.currentTarget;

    const name =
      (
        form.elements.namedItem(
          "contact_full_name"
        ) as HTMLInputElement
      )?.value.trim() || "";

    const mobile =
      (
        form.elements.namedItem(
          "contact_mobile"
        ) as HTMLInputElement
      )?.value.trim() || "";

    const email =
      (
        form.elements.namedItem(
          "contact_email"
        ) as HTMLInputElement
      )?.value.trim() || "";

    if (!name || !mobile || !email) {
      setError("Please fill in all the fields.");
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
          name,
          mobile,
          email,
        }),
      });

      let data: { message?: string } = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        setError(
          data.message || "Something went wrong. Please try again."
        );
        return;
      }

      setSuccess(
        "Thank you! Our team will get in touch with you."
      );

      form.reset();

      setTimeout(() => {
        setIsOpen(false);
      }, 2500);
    } catch {
      setError(
        "Unable to submit your request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999998] flex items-center justify-center bg-black/60 px-4 py-4 backdrop-blur-md">
      <div className="relative h-[calc(100vh-32px)] max-h-[700px] w-full max-w-[760px] overflow-hidden rounded-[26px] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.35)]">

        {/* Close */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute right-4 top-4 z-[100] flex h-11 w-11 items-center justify-center rounded-full bg-[#f2f2f2] text-[#273243] shadow-sm transition hover:scale-105 hover:bg-[#e7e7e7]"
        >
          <X size={27} strokeWidth={2.5} />
        </button>

        <div className="relative flex h-full w-full flex-col px-6 pb-[95px] pt-5 sm:px-9 sm:pt-6 md:px-11">

          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="/images/logo-mark.png"
              alt="Tender Elite"
              className="h-[55px] w-auto object-contain sm:h-[62px] md:h-[68px]"
            />
          </div>

          {/* Heading */}
          <div className="mt-1 text-center">
            <h2
              className="text-[30px] font-bold leading-tight text-[#700019] sm:text-[38px] md:text-[43px]"
              style={{
                fontFamily:
                  "Georgia, 'Times New Roman', serif",
              }}
            >
              Let&apos;s Work Together
            </h2>

            <div className="mx-auto mt-2.5 h-[4px] w-[105px] rounded-full bg-[#a60020]" />

            <p className="mx-auto mt-3 max-w-[600px] text-[14px] leading-5 text-[#475364] sm:text-[16px]">
              Tell us about your tender requirements
              <br />
              and our team will get in touch with you.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="mx-auto mt-5 flex w-full max-w-[650px] flex-col gap-3"
          >

            {/* Hidden dummy fields to discourage Chrome autofill */}
            <input
              type="text"
              name="fake_username"
              autoComplete="username"
              tabIndex={-1}
              className="hidden"
            />

            <input
              type="password"
              name="fake_password"
              autoComplete="current-password"
              tabIndex={-1}
              className="hidden"
            />

            {/* Name */}
            <div className="flex h-[76px] items-center gap-4 rounded-[16px] border-2 border-[#d9dce1] bg-white px-5 transition-all duration-200 focus-within:border-[#a90021] sm:h-[82px] sm:px-6">
              <User
                size={30}
                strokeWidth={1.8}
                className="shrink-0 text-[#424b59]"
              />

              <div className="min-w-0 flex-1">
                <label
                  htmlFor="contact-full-name"
                  className="block text-[15px] font-bold text-[#344052] sm:text-[17px]"
                >
                  Name
                </label>

                <input
                  id="contact-full-name"
                  name="contact_full_name"
                  type="text"
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="Enter your full name"
                  className="mt-0.5 w-full bg-transparent text-[14px] text-[#344052] outline-none placeholder:text-[#8c95a2] sm:text-[16px]"
                />
              </div>
            </div>

            {/* Mobile */}
            <div className="flex h-[76px] items-center gap-4 rounded-[16px] border-2 border-[#d9dce1] bg-white px-5 transition-all duration-200 focus-within:border-[#a90021] sm:h-[82px] sm:px-6">
              <Phone
                size={30}
                strokeWidth={1.8}
                className="shrink-0 text-[#424b59]"
              />

              <div className="min-w-0 flex-1">
                <label
                  htmlFor="contact-mobile-number"
                  className="block text-[15px] font-bold text-[#344052] sm:text-[17px]"
                >
                  Mobile Number
                </label>

                <input
                  id="contact-mobile-number"
                  name="contact_mobile"
                  type="tel"
                  autoComplete="off"
                  inputMode="tel"
                  spellCheck={false}
                  placeholder="Enter your mobile number"
                  maxLength={15}
                  className="mt-0.5 w-full bg-transparent text-[14px] text-[#344052] outline-none placeholder:text-[#8c95a2] sm:text-[16px]"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex h-[76px] items-center gap-4 rounded-[16px] border-2 border-[#d9dce1] bg-white px-5 transition-all duration-200 focus-within:border-[#a90021] sm:h-[82px] sm:px-6">
              <Mail
                size={30}
                strokeWidth={1.8}
                className="shrink-0 text-[#424b59]"
              />

              <div className="min-w-0 flex-1">
                <label
                  htmlFor="contact-email-address"
                  className="block text-[15px] font-bold text-[#344052] sm:text-[17px]"
                >
                  Email Address
                </label>

                <input
                  id="contact-email-address"
                  name="contact_email"
                  type="email"
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="Enter your email address"
                  className="mt-0.5 w-full bg-transparent text-[14px] text-[#344052] outline-none placeholder:text-[#8c95a2] sm:text-[16px]"
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-center text-xs font-medium text-red-600">
                {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-2 text-center text-xs font-medium text-green-600">
                {success}
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="mx-auto mt-1 flex h-[62px] w-full max-w-[560px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#9c001d] to-[#c30028] px-6 text-[18px] font-bold text-white shadow-[0_10px_22px_rgba(155,0,30,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(155,0,30,0.32)] disabled:cursor-not-allowed disabled:opacity-60 sm:h-[66px] sm:text-[20px]"
            >
              {loading ? "Sending..." : "Get in Touch"}

              {!loading && (
                <ArrowRight
                  size={26}
                  strokeWidth={2.5}
                />
              )}
            </button>

            {/* Security */}
            <div className="flex items-center justify-center gap-2 pt-1 text-center text-[#4b5665]">
              <ShieldCheck
                size={23}
                strokeWidth={1.8}
              />

              <span className="text-[12px] font-medium sm:text-[14px]">
                Your information is safe with us.
              </span>
            </div>
          </form>

          {/* Bottom decoration */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[70px] overflow-hidden sm:h-[80px]">

            <div
              className="absolute bottom-[-45px] left-[-12%] h-[90px] w-[124%] bg-[#f7efdb]"
              style={{
                borderRadius: "50% 50% 0 0",
                transform: "rotate(-4deg)",
              }}
            />

            <div
              className="absolute bottom-[-57px] left-[-10%] h-[82px] w-[122%] border-t-[5px] border-[#d4a72c]"
              style={{
                borderRadius: "50% 50% 0 0",
                transform: "rotate(3deg)",
              }}
            />

            <div
              className="absolute bottom-[-70px] left-[-10%] h-[92px] w-[122%] bg-gradient-to-r from-[#780017] via-[#ad0024] to-[#820019]"
              style={{
                borderRadius: "50% 50% 0 0",
                transform: "rotate(-3deg)",
              }}
            />

            <div
              className="absolute bottom-[-80px] left-[-12%] h-[80px] w-[125%] bg-[#6f0015]"
              style={{
                borderRadius: "50% 50% 0 0",
                transform: "rotate(5deg)",
                opacity: 0.85,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}