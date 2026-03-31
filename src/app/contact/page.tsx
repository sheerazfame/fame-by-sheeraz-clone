"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

// Metadata must be in a separate file for client components, or we set it via
// the <title> tag. We use a <title> element here since this is a client page.

const AREAS_OF_INTEREST = [
  "Media & Communications",
  "Digital Presence & Visibility",
  "Strategic Advisory",
  "Partnerships",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <>
      <title>Contact Us | famebysheeraz.com</title>

      {/* ── Top Section — Orange Background ── */}
      <section className="bg-[#EE4223]">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column — Logo + Contact Info + Photo */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* FAME 3D Logo */}
              <div className="relative w-[180px] h-[70px] mb-8">
                <Image
                  src="/images/logo-3d.png"
                  alt="FAME by Sheeraz"
                  fill
                  className="object-contain"
                  sizes="180px"
                  unoptimized
                />
              </div>

              {/* Contact details */}
              <div className="font-[family-name:var(--font-inter)] text-white space-y-3 text-base mb-10">
                <p>
                  <a
                    href="mailto:info@fame.me"
                    className="hover:underline"
                  >
                    info@fame.me
                  </a>
                </p>
                <p>
                  <span className="text-white/70 text-sm">(US)</span>{" "}
                  <a href="tel:+13109251667" className="hover:underline">
                    +1 (310) 925-1667
                  </a>
                </p>
                <p>
                  <span className="text-white/70 text-sm">(UAE)</span>{" "}
                  <a href="tel:+971567868338" className="hover:underline">
                    +971 56 786 8338
                  </a>
                </p>
              </div>

              {/* Sheeraz circular photo */}
              <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden">
                <Image
                  src="/images/about-sheeraz.jpg"
                  alt="Sheeraz Hasan"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "58% 26%" }}
                  sizes="200px"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column — Heading + Form */}
            <div>
              <h1
                className="font-[family-name:var(--font-barlow)] font-black italic text-white uppercase leading-none mb-3"
                style={{ fontSize: "clamp(36px, 4.2vw, 60px)" }}
              >
                Contact Us
              </h1>
              <p className="font-[family-name:var(--font-inter)] text-white text-base mb-10">
                Send an inquiry today and let&apos;s work together
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full name */}
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name *"
                  required
                  className="w-full bg-transparent border-b border-white text-white placeholder:text-white/50 font-[family-name:var(--font-inter)] text-base py-3 outline-none focus:border-white/80 transition-colors"
                />

                {/* Phone number */}
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  className="w-full bg-transparent border-b border-white text-white placeholder:text-white/50 font-[family-name:var(--font-inter)] text-base py-3 outline-none focus:border-white/80 transition-colors"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  className="w-full bg-transparent border-b border-white text-white placeholder:text-white/50 font-[family-name:var(--font-inter)] text-base py-3 outline-none focus:border-white/80 transition-colors"
                />

                {/* WhatsApp checkbox */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="whatsapp"
                    className="w-5 h-5 accent-white"
                  />
                  <span className="font-[family-name:var(--font-inter)] text-white text-sm">
                    Please contact me via WhatsApp
                  </span>
                </label>

                {/* Company */}
                <input
                  type="text"
                  name="company"
                  placeholder="Company or organization"
                  className="w-full bg-transparent border-b border-white text-white placeholder:text-white/50 font-[family-name:var(--font-inter)] text-base py-3 outline-none focus:border-white/80 transition-colors"
                />

                {/* Website */}
                <input
                  type="url"
                  name="website"
                  placeholder="Website"
                  className="w-full bg-transparent border-b border-white text-white placeholder:text-white/50 font-[family-name:var(--font-inter)] text-base py-3 outline-none focus:border-white/80 transition-colors"
                />

                {/* Subject */}
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  required
                  className="w-full bg-transparent border-b border-white text-white placeholder:text-white/50 font-[family-name:var(--font-inter)] text-base py-3 outline-none focus:border-white/80 transition-colors"
                />

                {/* Area of Interest */}
                <select
                  name="areaOfInterest"
                  defaultValue=""
                  className="w-full bg-transparent border-b border-white text-white font-[family-name:var(--font-inter)] text-base py-3 outline-none appearance-none cursor-pointer [&>option]:bg-[#01060D] [&>option]:text-white"
                >
                  <option value="" disabled className="text-white/50">
                    Area of Interest
                  </option>
                  {AREAS_OF_INTEREST.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message *"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white text-white placeholder:text-white/50 font-[family-name:var(--font-inter)] text-base py-3 outline-none focus:border-white/80 transition-colors resize-none"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="bg-white text-[#01060D] font-[family-name:var(--font-barlow)] font-bold text-base px-10 py-3 rounded-full hover:bg-white/90 transition-colors duration-300"
                >
                  {submitted ? "Sent!" : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom Section — Location Cards ── */}
      <section className="bg-[#01060D] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Los Angeles */}
            <div className="bg-[#0a1018] border border-white/10 rounded-xl p-8">
              <h3 className="font-[family-name:var(--font-barlow)] font-bold text-[#F14312] text-2xl mb-3">
                Los Angeles
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE] text-base leading-relaxed">
                8367 Sunset Blvd, West Hollywood, CA 90069
              </p>
            </div>

            {/* Dubai */}
            <div className="bg-[#0a1018] border border-white/10 rounded-xl p-8">
              <h3 className="font-[family-name:var(--font-barlow)] font-bold text-[#F14312] text-2xl mb-3">
                Dubai
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE] text-base leading-relaxed">
                Business Bay, Dubai, UAE
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
