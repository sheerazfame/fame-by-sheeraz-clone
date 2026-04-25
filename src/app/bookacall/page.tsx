import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Free 15-minute discovery call with Sheeraz Hasan. Personal branding, brand campaigns, AI-driven media strategy. For individuals and brands.",
  alternates: { canonical: `${SITE.url}/bookacall` },
};

export default function BookACallPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Book a Call", url: `${SITE.url}/bookacall` },
        ])}
      />

      {/* Cover */}
      <section className="bg-[#0A0606] pt-[140px] sm:pt-[160px] pb-12 sm:pb-16">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-baseline justify-between border-b border-[#F5F0E8]/15 pb-5 mb-12">
            <p className="lede italic text-[#F5F0E8]/55 text-sm">
              Fame by Sheeraz <span className="mx-2 text-[#F5F0E8]/25">·</span>
              <span className="numeral">Issue No. XXVI</span>
            </p>
            <p className="lede italic text-[#F5F0E8]/40 text-sm">A Personal Audience</p>
          </div>

          <p className="kicker kicker-fire mb-6">A Discovery Call</p>
          <h1
            className="font-display text-[#F5F0E8] mb-8 max-w-5xl"
            style={{
              fontSize: "clamp(48px, 8vw, 132px)",
              lineHeight: "0.92",
              letterSpacing: "-0.012em",
            }}
          >
            Fifteen minutes
            <br />
            with <span className="text-[#F14312]">Sheeraz</span>.
          </h1>
          <p
            className="font-serif italic text-[#F5F0E8]/85 max-w-[42ch]"
            style={{ fontSize: "clamp(18px, 2vw, 26px)", lineHeight: "1.3" }}
          >
            Free of charge. Booked through the calendar. Held in confidence.
          </p>
        </div>
      </section>

      {/* Two-tier selection */}
      <section className="bg-[#0A0606] pb-24 sm:pb-32">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <p className="kicker kicker-gold mb-5">Select one</p>
          <p className="section-mark mb-10">Chapter I &middot; Two paths</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-[#F5F0E8]/12">
            {/* Individuals */}
            <div className="p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-[#F5F0E8]/12">
              <span className="numeral text-[#C9A961] text-base">I.</span>
              <h2
                className="font-display text-[#F5F0E8] mt-3 mb-3"
                style={{
                  fontSize: "clamp(36px, 4vw, 56px)",
                  lineHeight: "0.95",
                }}
              >
                Individuals
              </h2>
              <p className="font-serif italic text-[#C9A961] mb-6 text-lg">
                For founders, creators and public figures.
              </p>
              <p className="lede text-[#F5F0E8]/65 mb-8 text-base sm:text-lg leading-relaxed max-w-md">
                Personal branding, visibility strategy and media positioning for
                entrepreneurs, creators, executives and public figures looking
                to grow their fame and influence.
              </p>
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book the Individual Call
              </a>
            </div>

            {/* Brands */}
            <div className="p-8 sm:p-12">
              <span className="numeral text-[#C9A961] text-base">II.</span>
              <h2
                className="font-display text-[#F5F0E8] mt-3 mb-3"
                style={{
                  fontSize: "clamp(36px, 4vw, 56px)",
                  lineHeight: "0.95",
                }}
              >
                Brands
              </h2>
              <p className="font-serif italic text-[#C9A961] mb-6 text-lg">
                For companies and family offices.
              </p>
              <p className="lede text-[#F5F0E8]/65 mb-8 text-base sm:text-lg leading-relaxed max-w-md">
                Brand campaigns, celebrity partnerships, media amplification
                and AI-driven strategy for companies looking to scale
                visibility and dominate their market.
              </p>
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book the Brand Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Author block */}
      <section className="bg-[#FBF7F0] text-[#0A0606] py-20 sm:py-28">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 sm:grid-cols-12 gap-x-10 gap-y-8 items-center">
          <div className="sm:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/quote-sheeraz-cutout.png"
                alt="Sheeraz Hasan"
                fill
                className="object-contain object-bottom grayscale"
                sizes="(max-width: 640px) 100vw, 33vw"
                unoptimized
              />
            </div>
          </div>
          <div className="sm:col-span-8">
            <p className="font-sans text-[#F14312] text-[11px] font-semibold tracking-[0.32em] uppercase mb-4">
              Your interlocutor
            </p>
            <h3
              className="font-display text-[#0A0606] mb-4"
              style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: "0.95" }}
            >
              Sheeraz Hasan.
            </h3>
            <p
              className="font-serif italic text-[#0A0606]/85 leading-relaxed max-w-[55ch]"
              style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
            >
              One of the most connected men in entertainment, media and AI.
              Generated $3 billion in earned media for Kim Kardashian, Logan
              Paul, Zendaya, Priyanka Chopra and 250+ others. He&apos;ll listen,
              ask, and tell you whether we are the right team for what you want.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
