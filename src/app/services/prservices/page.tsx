import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PR Services | famebysheeraz.com",
  description:
    "Strategic, pay-to-play press and media placement. Don't chase publicity. Control it.",
};

const narrativeControls = [
  "Controls the storyline",
  "Controls the headline",
  "Controls the keywords",
  "Controls the timing",
  "Controls the digital footprint",
];

const guarantees = [
  "Guaranteed publication",
  "No editorial uncertainty",
  "No journalist risk",
  "No rejection",
  "No dilution of message",
];

const indexedAuthority = [
  "Indexed in Google News",
  "Structured to appear in ChatGPT and AI-driven search results",
  "Designed to build a permanent digital authority footprint",
];

const whoNeeds = [
  "High-net-worth individuals",
  "Founders & CEOs",
  "Investors & family offices",
  "Public figures & influencers",
  "Luxury brands",
  "Real estate developers",
  "Web3, AI & tech leaders",
];

const advantagePillars = [
  "Media power",
  "Search dominance",
  "AI visibility",
  "Reputation Architecture",
];

export default function PrServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#01060D] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#EE4223] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest font-semibold mb-5">
            Press & Media Placement Services
          </p>
          <h1
            className="font-[family-name:var(--font-barlow)] font-black italic text-white leading-[1.05] mb-7"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Don&apos;t chase publicity. Control it.
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE]/90 text-lg leading-relaxed mb-8 max-w-3xl">
            Our Press &amp; Media Placement service is a strategic, pay-to-play
            media infrastructure designed for founders, CEOs, public figures,
            investors, and brands who understand one truth:{" "}
            <span className="text-[#EE4223] font-semibold">
              Perception is reality — and narrative control is power.
            </span>
          </p>
          <Link
            href="https://wa.me/971585131664"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange text-base"
          >
            FREE 15 MIN CALL
          </Link>
        </div>
      </section>

      {/* ── What we do ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#EE4223] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest font-semibold mb-4">
            What We Do
          </p>
          <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE] text-lg leading-relaxed">
            We strategically place our clients in top-tier global media
            publications through direct media relationships, sponsored
            editorial access, and guaranteed placements. Every story is
            professionally written, positioned, and placed to shape authority,
            credibility, and dominance in your industry.
          </p>
        </div>
      </section>

      {/* ── Narrative Control ── */}
      <section className="bg-[#EE4223] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-white text-center leading-tight mb-3"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            NARRATIVE CONTROL, NOT EXPOSURE
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-white/90 text-base text-center mb-12 max-w-2xl mx-auto">
            Unlike traditional PR agencies that &quot;pitch and pray,&quot;
            FAME by Sheeraz:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {narrativeControls.map((item) => (
              <div
                key={item}
                className="bg-[#01060D] rounded-xl p-6 flex items-center justify-center text-center min-h-[100px]"
              >
                <p className="font-[family-name:var(--font-barlow)] font-bold text-white text-sm leading-tight">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guaranteed Placement ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-bold text-[#EEEEEE] leading-tight mb-3"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            Guaranteed Media Placement (Pay-to-Play)
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-base mb-10">
            All placements operate on a pay-to-play basis, ensuring:
          </p>
          <ul className="space-y-3">
            {guarantees.map((g) => (
              <li
                key={g}
                className="flex items-center gap-3 bg-[#0A0F1A] border border-[#1a2235] rounded-lg px-6 py-4"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EE4223] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="font-[family-name:var(--font-inter)] text-white text-base font-medium">
                  {g}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Indexed Authority ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-bold text-[#EEEEEE] leading-tight mb-3"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            Indexed Authority Across Google &amp; AI
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-base mb-10 max-w-3xl">
            Every placement designed to ensure your name, brand, or company
            becomes the default narrative when investors, media, partners, or
            the public search for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {indexedAuthority.map((a) => (
              <div
                key={a}
                className="bg-[#0A0F1A] border border-[#1a2235] rounded-xl p-6"
              >
                <p className="font-[family-name:var(--font-inter)] text-white text-base leading-relaxed">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why you need FAME ── */}
      <section className="bg-[#EE4223] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-white leading-tight mb-3"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Why you need FAME
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-white/90 text-lg mb-10">
            Boost your valuation, reputation and leverage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whoNeeds.map((w) => (
              <div
                key={w}
                className="bg-[#01060D] rounded-xl px-6 py-5"
              >
                <p className="font-[family-name:var(--font-barlow)] font-bold text-white text-lg">
                  {w}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAME Advantage ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#EE4223] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest font-semibold mb-3">
            The FAME Advantage
          </p>
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-[#EEEEEE] leading-tight mb-5"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            25+ Years in the business of attention
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-base mb-12 max-w-3xl mx-auto">
            With over two decades of global media strategy experience, FAME by
            Sheeraz operates at the intersection of:
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {advantagePillars.map((p) => (
              <div
                key={p}
                className="bg-[#0A0F1A] border border-[#1a2235] rounded-xl p-6"
              >
                <p className="font-[family-name:var(--font-barlow)] font-bold text-[#EE4223] text-base">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
