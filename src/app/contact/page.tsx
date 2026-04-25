"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/site";

const AREAS = [
  "Media & Communications",
  "Digital Presence & Visibility",
  "Strategic Advisory",
  "Partnerships",
  "Press &amp; Editorial",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <>
      <title>Contact &middot; Fame by Sheeraz</title>

      {/* Cover */}
      <section className="bg-[#0A0606] pt-[140px] sm:pt-[160px] pb-16 sm:pb-20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-baseline justify-between border-b border-[#F5F0E8]/15 pb-5 mb-12">
            <p className="lede italic text-[#F5F0E8]/55 text-sm">
              Fame by Sheeraz <span className="mx-2 text-[#F5F0E8]/25">·</span>
              <span className="numeral">Issue No. XXVI</span>
            </p>
            <p className="lede italic text-[#F5F0E8]/40 text-sm">The Editorial Office</p>
          </div>

          <p className="kicker kicker-fire mb-6">Get in touch</p>
          <h1
            className="font-display text-[#F5F0E8] mb-8 max-w-5xl"
            style={{
              fontSize: "clamp(48px, 8vw, 132px)",
              lineHeight: "0.92",
              letterSpacing: "-0.012em",
            }}
          >
            Write to <span className="text-[#F14312]">us</span>.
          </h1>
          <p
            className="font-serif italic text-[#F5F0E8]/85 max-w-[42ch]"
            style={{ fontSize: "clamp(18px, 2vw, 26px)", lineHeight: "1.3" }}
          >
            Sheeraz reads what comes through. Choose the channel you prefer.
          </p>
        </div>
      </section>

      {/* Two-column spread: contact details left, form right */}
      <section className="bg-[#FBF7F0] text-[#0A0606] py-20 sm:py-28">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">
          {/* Left: contact details */}
          <div className="lg:col-span-5">
            <p className="font-sans text-[#F14312] text-[11px] font-semibold tracking-[0.32em] uppercase mb-5">
              Direct Lines
            </p>
            <p className="numeral italic text-[#0A0606]/40 text-sm mb-10">
              Chapter I &middot; Reach Sheeraz
            </p>

            <ul className="border-t border-[#0A0606]/15 divide-y divide-[#0A0606]/10">
              <li className="py-6">
                <p className="kicker mb-2" style={{ color: "#0A0606", opacity: 0.6 }}>
                  Editorial Office
                </p>
                <p className="font-serif italic text-[#0A0606] text-lg sm:text-xl leading-relaxed">
                  8367 Sunset Boulevard
                  <br />
                  West Hollywood, CA 90069
                </p>
              </li>

              <li className="py-6">
                <p className="kicker mb-2" style={{ color: "#0A0606", opacity: 0.6 }}>
                  Email
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-serif italic text-[#0A0606] hover:text-[#F14312] transition-colors text-lg sm:text-xl"
                >
                  {SITE.email}
                </a>
              </li>

              <li className="py-6">
                <p className="kicker mb-2" style={{ color: "#0A0606", opacity: 0.6 }}>
                  WhatsApp &middot; United States
                </p>
                <a
                  href={`https://wa.me/${SITE.whatsappUS.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif italic text-[#0A0606] hover:text-[#F14312] transition-colors text-lg sm:text-xl"
                >
                  {SITE.whatsappUS}
                </a>
              </li>

              <li className="py-6">
                <p className="kicker mb-2" style={{ color: "#0A0606", opacity: 0.6 }}>
                  WhatsApp &middot; United Arab Emirates
                </p>
                <a
                  href={`https://wa.me/${SITE.whatsappUAE.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif italic text-[#0A0606] hover:text-[#F14312] transition-colors text-lg sm:text-xl"
                >
                  {SITE.whatsappUAE}
                </a>
              </li>

              <li className="py-6">
                <p className="kicker mb-2" style={{ color: "#0A0606", opacity: 0.6 }}>
                  Calendar
                </p>
                <a
                  href={SITE.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif italic text-[#0A0606] hover:text-[#F14312] transition-colors text-lg sm:text-xl"
                >
                  Book a 15-minute discovery call
                </a>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <p className="font-sans text-[#C9A961] text-[11px] font-semibold tracking-[0.32em] uppercase mb-5">
              Or write a note
            </p>
            <p className="numeral italic text-[#0A0606]/40 text-sm mb-10">
              Chapter II &middot; The Letter
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white border border-[#0A0606]/15 p-6 sm:p-9 space-y-7"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <label className="block">
                  <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#0A0606]/55 font-semibold">
                    Full name
                  </span>
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Your name"
                    className="mt-2 w-full bg-transparent border-b border-[#0A0606]/25 focus:border-[#F14312] outline-none py-2 text-[#0A0606] placeholder:text-[#0A0606]/30 font-serif italic text-lg"
                  />
                </label>
                <label className="block">
                  <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#0A0606]/55 font-semibold">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="you@brand.com"
                    className="mt-2 w-full bg-transparent border-b border-[#0A0606]/25 focus:border-[#F14312] outline-none py-2 text-[#0A0606] placeholder:text-[#0A0606]/30 font-serif italic text-lg"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#0A0606]/55 font-semibold">
                    Brand or organization
                  </span>
                  <input
                    type="text"
                    name="org"
                    placeholder="The name behind you"
                    className="mt-2 w-full bg-transparent border-b border-[#0A0606]/25 focus:border-[#F14312] outline-none py-2 text-[#0A0606] placeholder:text-[#0A0606]/30 font-serif italic text-lg"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#0A0606]/55 font-semibold">
                    Area of interest
                  </span>
                  <select
                    name="area"
                    defaultValue=""
                    className="mt-2 w-full bg-transparent border-b border-[#0A0606]/25 focus:border-[#F14312] outline-none py-2 text-[#0A0606] font-serif italic text-lg"
                  >
                    <option value="" disabled>Select…</option>
                    {AREAS.map((a) => (
                      <option key={a} value={a}>{a.replace(/&amp;/g, "&")}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#0A0606]/55 font-semibold">
                  Your message
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell Sheeraz what you have in mind."
                  className="mt-2 w-full bg-transparent border-b border-[#0A0606]/25 focus:border-[#F14312] outline-none py-2 text-[#0A0606] placeholder:text-[#0A0606]/30 resize-none font-serif italic text-lg"
                />
              </label>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <p className="lede italic text-[#0A0606]/50 text-sm">
                  Replies typically arrive within 24 hours.
                </p>
                <button type="submit" className="btn-primary">
                  Send
                </button>
              </div>

              {submitted && (
                <p className="font-serif italic text-[#F14312] text-base">
                  Thank you — your note has reached the editor&apos;s desk.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
