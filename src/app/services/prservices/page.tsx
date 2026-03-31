import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PR Services | famebysheeraz.com",
};

const narrativeControlItems = [
  "You control the storyline",
  "You control the headline",
  "You control the keywords",
  "You control the timing",
  "You control the digital footprint",
];

const guaranteedItems = [
  "Guaranteed publication",
  "No editorial uncertainty",
  "No journalist risk",
  "No rejection",
  "No dilution of message",
];

const audienceCards = [
  {
    title: "HNW Individuals",
    description:
      "Ultra-high-net-worth individuals who need press coverage that reflects their stature and protects their reputation.",
  },
  {
    title: "Founders & CEOs",
    description:
      "Entrepreneurs and executives who need media authority to attract investment, talent, and strategic partnerships.",
  },
  {
    title: "Investors & Family Offices",
    description:
      "Capital allocators who want to control their public narrative and build trust through credible media coverage.",
  },
  {
    title: "Public Figures",
    description:
      "Celebrities, influencers, and public personalities who need strategic press to shape perception at scale.",
  },
  {
    title: "Luxury Brands",
    description:
      "Premium brands that require high-end editorial placements in publications their audience actually reads.",
  },
  {
    title: "Real Estate Developers",
    description:
      "Developers launching mega-projects who need media coverage to attract buyers, investors, and global attention.",
  },
  {
    title: "Web3 / AI / Tech Leaders",
    description:
      "Technology founders and innovators who need credibility in mainstream press beyond the crypto and tech echo chamber.",
  },
];

export default function PRServicesPage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="bg-[#01060D] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1
            className="font-[family-name:var(--font-barlow)] font-black italic text-white leading-[1.1] mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            PRESS &amp; MEDIA PLACEMENT SERVICES
          </h1>

          <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE] text-lg leading-relaxed max-w-3xl">
            Strategic press placements that build authority, control your
            narrative, and position you as a recognized leader — powered by 25+
            years of direct media relationships with the world&apos;s top
            publications.
          </p>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="bg-[#EE4223] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-white leading-tight mb-6"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Don&apos;t chase publicity. Control it.
          </h2>

          <p className="font-[family-name:var(--font-inter)] text-white/90 text-lg leading-relaxed">
            Most PR firms pitch journalists and hope for the best. We operate
            differently. With 25+ years of direct media relationships, we offer
            a strategic, guaranteed placement infrastructure — not a
            pay-to-play gamble. Every placement is intentional, every headline is
            controlled, and every article serves your long-term narrative.
          </p>
        </div>
      </section>

      {/* ── What We Do Section ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-bold text-[#EEEEEE] leading-tight mb-6"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            What We Do
          </h2>

          <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE] text-lg leading-relaxed">
            Strategic placements in top-tier global media publications through
            direct relationships, sponsored editorial access, and guaranteed
            placements. We don&apos;t pitch and pray. We plan, place, and
            control every aspect of your media coverage.
          </p>
        </div>
      </section>

      {/* ── Narrative Control Section ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden">
          {/* Left panel */}
          <div className="bg-[#0A0F1A] p-10 md:p-14 flex items-center">
            <h2
              className="font-[family-name:var(--font-barlow)] font-black italic text-[#EEEEEE] leading-tight"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              Narrative Control, Not Exposure
            </h2>
          </div>

          {/* Right panel */}
          <div className="bg-[#0F1520] p-10 md:p-14">
            <ul className="space-y-5">
              {narrativeControlItems.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#EE4223]" />
                  <span className="font-[family-name:var(--font-inter)] text-[#EEEEEE] text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Guaranteed Placement Section ── */}
      <section className="bg-[#EE4223] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-white leading-tight mb-10"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            GUARANTEED MEDIA PLACEMENT
          </h2>

          <ul className="space-y-4">
            {guaranteedItems.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-[#EE4223]"
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
                <span className="font-[family-name:var(--font-inter)] text-white text-lg font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why FAME Section ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-[#EEEEEE] text-center leading-tight mb-14"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            Who We Work With
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audienceCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#0A0F1A] border border-[#1a2235] rounded-xl p-6 hover:border-[#EE4223]/40 transition-colors"
              >
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-white text-lg mb-2">
                  {card.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
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
