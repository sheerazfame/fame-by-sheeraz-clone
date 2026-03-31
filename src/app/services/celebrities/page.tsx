import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Celebrities | famebysheeraz.com",
};

const checklistItems = [
  "Luxury and premium brands",
  "Real estate developers and mega-projects",
  "Tech, AI & Web3 companies",
  "Family offices, funds, and global investors",
];

const starPowerCards = [
  {
    title: "Global Brand Launches",
    description:
      "Major product and brand launches backed by A-list celebrity power and global media coverage.",
  },
  {
    title: "Luxury Real Estate Unveilings",
    description:
      "High-profile property reveals with celebrity presence that command premium positioning.",
  },
  {
    title: "Major Sporting Events",
    description:
      "Celebrity appearances and activations at the world's biggest sporting stages.",
  },
  {
    title: "Fashion / Film / Music Activations",
    description:
      "Red carpet, premiere, and festival activations with cultural icons.",
  },
  {
    title: "Private VIP Events",
    description:
      "Exclusive, invitation-only gatherings with elite celebrity appearances.",
  },
];

export default function CelebritiesPage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative w-full min-h-[600px] flex flex-col md:flex-row">
        {/* Left panel - orange */}
        <div className="w-full md:w-[45%] bg-[#EE4223] flex items-center px-8 py-16 md:px-12 lg:px-16">
          <div className="max-w-lg">
            <h1
              className="font-[family-name:var(--font-barlow)] font-black italic text-white leading-[1.1] mb-8"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)" }}
            >
              CELEBRITY, INFLUENCER &amp; SPORTS STAR BOOKING
            </h1>

            <ul className="space-y-4">
              {checklistItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  {/* Teal/green checkmark circle */}
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-500 flex items-center justify-center">
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
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right panel - image */}
        <div className="w-full md:w-[55%] relative min-h-[400px] md:min-h-[600px]">
          <Image
            src="/images/cs-logan-paul.jpg"
            alt="Celebrity booking by FAME by Sheeraz"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
            priority
            unoptimized
          />
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#EE4223] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest font-semibold mb-6">
            Powered by FAME by Sheeraz
          </p>

          <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE] text-lg leading-relaxed mb-6">
            When a brand needs instant credibility, global attention, and
            cultural dominance, there is one proven amplifier:
          </p>

          <p
            className="font-[family-name:var(--font-barlow)] font-bold text-[#EE4223] text-xl md:text-2xl leading-snug mb-6"
          >
            THE RIGHT STAR — AT THE RIGHT MOMENT — ON THE RIGHT STAGE.
          </p>

          <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE] text-lg leading-relaxed">
            At FAME by Sheeraz, we specialize in securing Hollywood celebrities,
            Bollywood superstars, global influencers, and elite sports icons for
            brand appearances, endorsements, campaigns, launches, and
            high-profile events worldwide.
          </p>
        </div>
      </section>

      {/* ── Two Decades Section ── */}
      <section className="bg-[#EE4223] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-white text-center leading-tight mb-14"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            TWO DECADES OF GLOBAL STAR POWER
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {starPowerCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#01060D] rounded-xl p-6 flex flex-col"
              >
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-white text-lg mb-3">
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
