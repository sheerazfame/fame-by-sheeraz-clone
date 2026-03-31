import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Attention | Sheeraz Hasan | FAME by Sheeraz",
};

const problems = [
  "No Google Knowledge Panel",
  "No consistent biography",
  "No press references",
  "No centralized website",
  "No AI search visibility",
  "Outdated information across all platforms",
];

const services = [
  {
    num: "01",
    title: "Strategy Calls",
    description:
      "One-on-one calls with our team to map out your visibility strategy and define your online narrative.",
  },
  {
    num: "02",
    title: "Full Online Presence Audit & Rebuild",
    description:
      "We audit every digital touchpoint and rebuild your presence from scratch with accuracy and authority.",
  },
  {
    num: "03",
    title: "Google Knowledge Panel Build",
    description:
      "We build, verify, and optimize your Google Knowledge Panel so you show up with credibility.",
  },
  {
    num: "04",
    title: "Search & AI Visibility",
    description:
      "Ensure you appear accurately in Google, ChatGPT, Perplexity, and all emerging AI search tools.",
  },
  {
    num: "05",
    title: "Press & Media Placements",
    description:
      "Guaranteed placements in top-tier global publications that establish your authority.",
  },
  {
    num: "06",
    title: "Founder Website Design",
    description:
      "A premium personal website that serves as your centralized digital hub and credibility anchor.",
  },
  {
    num: "07",
    title: "LinkedIn Optimization",
    description:
      "Full profile rewrite, content strategy, and positioning to attract the right connections.",
  },
  {
    num: "08",
    title: "Autobiography Development",
    description:
      "We craft your founder story — from origin to vision — into a compelling narrative asset.",
  },
];

export default function EntrepreneursPage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <p className="text-[#EE4223] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest font-semibold mb-4">
              FOUNDERS, CEOS AND ENTREPRENEURS
            </p>

            <h1
              className="font-[family-name:var(--font-barlow)] font-bold italic text-[#01060D] leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              We Build Your Complete Founder Online Presence
            </h1>

            <p className="font-[family-name:var(--font-inter)] text-[#333] text-base leading-relaxed mb-8">
              Your Google Knowledge Panel. Your press articles. Your AI
              visibility. Your digital footprint defines whether investors,
              partners, and the world take you seriously. We build, fix, and
              optimize every layer of your online presence so you look as
              credible online as you are in person.
            </p>

            <Link
              href="/bookacall"
              className="btn-orange text-base"
            >
              Book a Call
            </Link>
          </div>

          {/* Right image */}
          <div className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
            <Image
              src="/images/quote-sheeraz-cutout.png"
              alt="Sheeraz Hasan"
              width={500}
              height={600}
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ── Problem Section ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-bold text-[#EEEEEE] leading-tight mb-10"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            The Problem Most Founders Face
          </h2>

          <ul className="space-y-4 mb-10">
            {problems.map((problem) => (
              <li key={problem} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#EE4223]" />
                <span className="font-[family-name:var(--font-inter)] text-[#EEEEEE] text-lg">
                  {problem}
                </span>
              </li>
            ))}
          </ul>

          <p className="font-[family-name:var(--font-barlow)] font-bold text-[#EE4223] text-2xl">
            We fix every part of this.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-bold text-[#EEEEEE] text-center leading-tight mb-14"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            What We Build For You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <div
                key={service.num}
                className="bg-[#0A0F1A] border border-[#1a2235] rounded-xl p-6 hover:border-[#EE4223]/40 transition-colors"
              >
                <span className="font-[family-name:var(--font-barlow)] font-bold text-[#EE4223] text-3xl block mb-3">
                  {service.num}
                </span>
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-white text-lg mb-2">
                  {service.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0A0F1A] border border-[#1a2235] rounded-xl p-10 text-center">
            <span
              className="font-[family-name:var(--font-barlow)] font-black text-[#EE4223] block mb-4"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
            >
              80%
            </span>
            <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE] text-lg leading-relaxed">
              of investors will reject you if they can&apos;t verify you online
            </p>
          </div>

          <div className="bg-[#0A0F1A] border border-[#1a2235] rounded-xl p-10 text-center">
            <span
              className="font-[family-name:var(--font-barlow)] font-black text-[#EE4223] block mb-4"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
            >
              70%
            </span>
            <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE] text-lg leading-relaxed">
              of investor meetings never happen because the founder&apos;s
              online presence raises doubts
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-[#EE4223] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-white leading-tight mb-8"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            BOOK A FREE CONSULTATION CALL
          </h2>

          <Link
            href="https://wa.me/971585131664"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#01060D] font-[family-name:var(--font-barlow)] font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            LET&apos;S TALK
          </Link>
        </div>
      </section>
    </>
  );
}
