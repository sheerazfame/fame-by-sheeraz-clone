import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Book a Call | famebysheeraz.com",
};

const CALENDLY_URL =
  "https://calendly.com/free15-mindiscoverycall/fameauditcall";

export default function BookACallPage() {
  return (
    <section className="bg-[#01060D] min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center">
          {/* ── Left Column ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* FAME 3D Logo */}
            <div className="relative w-[200px] h-[80px] mb-6">
              <Image
                src="/images/logo-3d.png"
                alt="FAME by Sheeraz"
                fill
                className="object-contain"
                sizes="200px"
                unoptimized
              />
            </div>

            <p className="font-[family-name:var(--font-inter)] text-gray-400 text-sm mb-6">
              Consultation for brands and individuals
            </p>

            <h1
              className="font-[family-name:var(--font-barlow)] font-black italic text-[#F14312] leading-none mb-6"
              style={{ fontSize: "clamp(32px, 3.2vw, 48px)" }}
            >
              Discovery Call
            </h1>

            <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE] text-base leading-relaxed max-w-md mb-4">
              Fill a simple form and schedule a free 15-minute discovery call
              with Sheeraz Hasan, one of the most connected men in
              entertainment, media, and AI.
            </p>

            <p className="font-[family-name:var(--font-inter)] text-gray-500 text-sm italic">
              *Free of charge.
            </p>
          </div>

          {/* ── Center Column — Sheeraz Photo ── */}
          <div className="flex justify-center">
            <div
              className="relative mx-auto"
              style={{
                width: "clamp(240px, 24vw, 360px)",
                aspectRatio: "557/835",
              }}
            >
              <Image
                src="/images/quote-sheeraz-cutout.png"
                alt="Sheeraz Hasan"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 50vw, 24vw"
                unoptimized
              />
            </div>
          </div>

          {/* ── Right Column — Option Cards ── */}
          <div>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-[#EEEEEE] text-xl mb-6 text-center lg:text-left">
              Select one option:
            </h2>

            <div className="space-y-5">
              {/* Individuals Card */}
              <div
                className="rounded-xl p-6"
                style={{
                  background:
                    "linear-gradient(135deg, #0d1520 0%, #131f30 100%)",
                  border: "1px solid rgba(241,67,18,0.25)",
                }}
              >
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-[#EEEEEE] text-2xl mb-3">
                  Individuals
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-gray-400 text-sm leading-relaxed mb-5">
                  Personal branding, visibility strategy, and media positioning
                  for entrepreneurs, creators, executives, and public figures
                  looking to grow their fame and influence.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-[family-name:var(--font-barlow)] font-bold text-white bg-[#F14312] hover:bg-[#EE4223] px-8 py-3 rounded-lg text-base transition-colors duration-300"
                >
                  Select
                </a>
              </div>

              {/* Brands Card */}
              <div
                className="rounded-xl p-6"
                style={{
                  background:
                    "linear-gradient(135deg, #141e2c 0%, #1a2940 100%)",
                  border: "1px solid rgba(238,238,238,0.12)",
                }}
              >
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-[#EEEEEE] text-2xl mb-3">
                  Brands
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-gray-400 text-sm leading-relaxed mb-5">
                  Brand campaigns, celebrity partnerships, media amplification,
                  and AI-driven strategies for companies looking to scale
                  visibility and dominate their market.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-[family-name:var(--font-barlow)] font-bold text-white bg-[#F14312] hover:bg-[#EE4223] px-8 py-3 rounded-lg text-base transition-colors duration-300"
                >
                  Select
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
