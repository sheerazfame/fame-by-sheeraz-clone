import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-[#0A0606] text-[#F5F0E8] overflow-hidden"
    >
      {/* Editorial background photograph */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-55"
          sizes="100vw"
          priority
          unoptimized
        />
        {/* Warm cinematic grade */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 30% 30%, rgba(241,67,18,0.25) 0%, transparent 60%), linear-gradient(180deg, rgba(10,6,6,0.5) 0%, rgba(10,6,6,0.85) 100%)",
          }}
        />
      </div>

      {/* Subject (collage) — anchored bottom right of hero */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0",
          right: "0",
          width: "min(58%, 920px)",
          height: "100%",
        }}
      >
        <Image
          src="/images/hero-celebs.webp"
          alt="Sheeraz Hasan with Kim Kardashian, Logan Paul, Zendaya, Priyanka Chopra and other clients"
          fill
          className="object-contain object-bottom-right"
          sizes="58vw"
          priority
          unoptimized
        />
      </div>

      {/* Editorial frame */}
      <div className="relative max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-10 pt-[140px] sm:pt-[160px] pb-16 sm:pb-24 min-h-[760px] sm:min-h-[860px] flex flex-col">
        {/* Top masthead row */}
        <div className="flex items-baseline justify-between border-b border-[#F5F0E8]/15 pb-5 mb-12 sm:mb-16">
          <p className="lede text-[#F5F0E8]/55 text-sm">
            Fame by Sheeraz <span className="mx-2 text-[#F5F0E8]/25">·</span>{" "}
            <span className="numeral">Issue No. XXVI</span>
          </p>
          <p className="lede text-[#F5F0E8]/40 text-xs sm:text-sm hidden sm:block">
            Hollywood &nbsp;·&nbsp; Dubai &nbsp;·&nbsp; Mumbai &nbsp;·&nbsp; London
          </p>
          <p className="lede text-[#F5F0E8]/40 text-sm">April 2026</p>
        </div>

        {/* Headline block */}
        <div className="max-w-3xl flex-1">
          <p className="kicker kicker-fire mb-6">A Profile</p>

          <h1
            className="font-display text-[#F5F0E8] mb-8"
            style={{
              fontSize: "clamp(54px, 9vw, 144px)",
              lineHeight: "0.92",
              letterSpacing: "-0.012em",
            }}
          >
            <span className="block text-[#F14312]">Sheeraz</span>
            <span className="block">Hasan.</span>
          </h1>

          <p
            className="font-serif italic text-[#F5F0E8]/85 max-w-[42ch] mb-8 sm:mb-10"
            style={{
              fontSize: "clamp(20px, 2.4vw, 30px)",
              lineHeight: "1.28",
            }}
          >
            The man who made Kim, Logan, Zendaya and 250 others
            household names — now writes the playbook with every
            AI ever built.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
            <Link href="/fame-ai" className="btn-primary">
              Apply for an Audit
            </Link>
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Book a 15-min Call
            </a>
          </div>
        </div>

        {/* Bottom credit strip */}
        <div className="border-t border-[#F5F0E8]/12 pt-5 mt-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
          <p className="lede text-[#F5F0E8]/45 text-sm max-w-md">
            <span className="text-[#C9A961]">$3 billion</span> in earned media.
            <span className="mx-2 text-[#F5F0E8]/20">·</span>
            <span className="text-[#C9A961]">25 years</span> behind the lens.
            <span className="mx-2 text-[#F5F0E8]/20">·</span>
            <span className="text-[#C9A961]">250 stars</span> launched.
          </p>
          <p className="lede text-[#F5F0E8]/40 text-xs">
            Photography &amp; archive: Hollywood.TV
          </p>
        </div>
      </div>
    </section>
  );
}
