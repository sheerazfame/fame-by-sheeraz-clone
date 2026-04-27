import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-[#0A0606] text-[#F5F0E8] overflow-hidden min-h-[100vh] flex items-center"
    >
      {/* Background photograph */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-50"
          sizes="100vw"
          priority
          unoptimized
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,6,6,0.4) 0%, rgba(10,6,6,0.85) 100%)",
          }}
        />
      </div>

      {/* Subject collage — anchored bottom-right */}
      <div
        className="absolute pointer-events-none"
        style={{ bottom: 0, right: 0, width: "min(54%, 880px)", height: "92%" }}
      >
        <Image
          src="/images/hero-celebs.webp"
          alt="Sheeraz Hasan with Kim Kardashian, Logan Paul, Zendaya, Priyanka Chopra and other clients"
          fill
          className="object-contain object-bottom-right"
          sizes="55vw"
          priority
          unoptimized
        />
      </div>

      {/* Content — minimal */}
      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 w-full">
        <div className="max-w-3xl">
          <p className="kicker kicker-fire mb-8">Fame by Sheeraz</p>

          <h1
            className="font-display text-[#F5F0E8] mb-8"
            style={{
              fontSize: "clamp(56px, 9.5vw, 156px)",
              lineHeight: "0.92",
              letterSpacing: "-0.012em",
            }}
          >
            <span className="block text-[#F14312]">Sheeraz</span>
            <span className="block">Hasan.</span>
          </h1>

          <p
            className="font-serif italic text-[#F5F0E8]/85 mb-12 max-w-[36ch]"
            style={{ fontSize: "clamp(22px, 2.6vw, 34px)", lineHeight: "1.25" }}
          >
            The world&apos;s #1 fame &amp; AI strategist.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Call
            </a>
            <Link href="#what" className="btn-ghost">
              What we do
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
