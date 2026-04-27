"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";
import { SITE } from "@/lib/site";

interface Case {
  poster: string;
  name: string;
  era: string;
  note: string;
  video?: string;
}

const CASES: Case[] = [
  { poster: "/case-studies/01-kim-kardashian.webp", name: "Kim Kardashian", era: "2007 — present", note: "From a name to a household." },
  { poster: "/case-studies/02-logan-paul.webp", name: "Logan Paul", era: "2014 — present", note: "Largest meet-and-greet ever in Dubai." },
  { poster: "/case-studies/03-zendaya.webp", name: "Zendaya", era: "2011 — present", note: "Disney star to global cinema." },
  { poster: "/case-studies/04-paris-hilton.webp", name: "Paris Hilton", era: "2003 — present", note: "The blueprint for Celebrity 2.0.", video: "/videos/cases/paris-hilton.mp4" },
  { poster: "/case-studies/05-cz-binance.webp", name: "CZ · Binance", era: "Web3 era", note: "Crypto's most public founder.", video: "/videos/cases/cz-binance.mp4" },
  { poster: "/case-studies/06-sheeraz-talks-fame.webp", name: "Sheeraz on Fame", era: "Dubai Eye 103.8", note: "All things fame, on air." },
  { poster: "/case-studies/07-selena-gomez.webp", name: "Selena Gomez", era: "2010 — present", note: "Child star to billion-dollar brand.", video: "/videos/cases/selena-gomez.mp4" },
  { poster: "/case-studies/08-miley-cyrus.webp", name: "Miley Cyrus", era: "2008 — present", note: "Reinvention as a service." },
  { poster: "/case-studies/09-priyanka-chopra.webp", name: "Priyanka Chopra", era: "2015 — present", note: "Bollywood crossover, mainstream Hollywood.", video: "/videos/cases/priyanka-chopra.mp4" },
  { poster: "/case-studies/10-paris-hilton-skincare.webp", name: "Paris Hilton · Skincare", era: "Brand launch", note: "Celebrity into beauty empire.", video: "/videos/cases/paris-hilton-skincare.mp4" },
  { poster: "/case-studies/11-ricky-martin.webp", name: "Ricky Martin", era: "Selected campaigns", note: "Live-event amplification." },
  { poster: "/case-studies/12-jennifer-lopez.webp", name: "Jennifer Lopez", era: "Strategic engagements", note: "Fashion, film and music activations.", video: "/videos/cases/jennifer-lopez.mp4" },
  { poster: "/case-studies/13-bryce-hall-austin-mcbroom.webp", name: "Bryce Hall × Austin McBroom", era: "Influencer-boxing era", note: "Two creator brands, one fight night.", video: "/videos/cases/bryce-hall-austin-mcbroom.mp4" },
  { poster: "/case-studies/14-adam-waheed.webp", name: "Adam Waheed", era: "Creator growth phase", note: "Punchline to platform.", video: "/videos/cases/adam-waheed.mp4" },
  { poster: "/case-studies/15-nelk-boys.webp", name: "Nelk Boys", era: "Founders' phase", note: "Frat humour to founders' club." },
  { poster: "/case-studies/16-pamela-anderson.webp", name: "Pamela Anderson", era: "Selected projects", note: "A re-introduction to the world." },
  { poster: "/case-studies/17-angela-baby-huang-xiaoming.webp", name: "Angela Baby × Huang Xiaoming", era: "Hollywood activation", note: "Bringing Chinese cinema to LA.", video: "/videos/cases/angela-baby-huang-xiaoming.mp4" },
  { poster: "/case-studies/18-gabriel-macht.webp", name: "Gabriel Macht", era: "Suits era", note: "From television to brand power.", video: "/videos/cases/gabriel-macht.mp4" },
  { poster: "/case-studies/19-niki-and-gabi.webp", name: "Niki & Gabi", era: "Twin-creator era", note: "Sister-brand growth." },
  { poster: "/case-studies/20-lele-pons.webp", name: "Lele Pons", era: "Vine to global", note: "Vine star to mainstream icon.", video: "/videos/cases/lele-pons.mp4" },
];

export default function CaseStudiesPage() {
  const [selected, setSelected] = useState<Case | null>(null);
  const withVideo = CASES.filter((c) => c.video);

  return (
    <>
      {/* Cover */}
      <section className="bg-[#0A0606] pt-[140px] sm:pt-[160px] pb-12 sm:pb-16">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-baseline justify-between border-b border-[#F5F0E8]/15 pb-5 mb-12">
            <p className="lede italic text-[#F5F0E8]/55 text-sm">
              Fame by Sheeraz <span className="mx-2 text-[#F5F0E8]/25">·</span>
              <span className="numeral">Issue No. XXVI</span>
            </p>
            <p className="lede italic text-[#F5F0E8]/40 text-sm">The Portfolio</p>
          </div>

          <p className="kicker kicker-fire mb-6">Selected Work</p>
          <h1
            className="font-display text-[#F5F0E8] mb-6 max-w-5xl"
            style={{
              fontSize: "clamp(48px, 8vw, 132px)",
              lineHeight: "0.92",
              letterSpacing: "-0.012em",
            }}
          >
            Case <span className="text-[#F14312]">studies</span>.
          </h1>
          <p
            className="font-serif italic text-[#F5F0E8]/85 max-w-[48ch] mb-3"
            style={{ fontSize: "clamp(18px, 2vw, 26px)", lineHeight: "1.3" }}
          >
            Twenty names you already know.
          </p>
          <p className="lede italic text-[#F5F0E8]/50 text-sm">
            <span className="text-[#F14312]">{withVideo.length}</span> include video. Click the orange play button to watch.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#0A0606] pb-24 sm:pb-32">
        <div className="max-w-[1480px] mx-auto px-3 sm:px-5 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CASES.map((c) => {
              const Tile = (
                <>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#14100D]">
                    <Image
                      src={c.poster}
                      alt={c.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent"
                    />

                    {c.video && (
                      <span
                        aria-hidden="true"
                        className="absolute top-5 right-5 w-12 h-12 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-[#F14312] group-hover:border-[#F14312] transition-all"
                      >
                        <svg width="14" height="14" viewBox="0 0 9 9" fill="currentColor">
                          <path d="M0 0v9l9-4.5z" />
                        </svg>
                      </span>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="lede italic text-[#C9A961] text-xs mb-1">{c.era}</p>
                      <h3
                        className="font-display text-[#F5F0E8] mb-1"
                        style={{ fontSize: "clamp(22px, 2vw, 30px)", lineHeight: "1.05" }}
                      >
                        {c.name}
                      </h3>
                      <p className="font-serif italic text-[#F5F0E8]/70 text-sm leading-snug">
                        {c.note}
                      </p>
                    </div>
                  </div>
                </>
              );

              if (c.video) {
                return (
                  <button
                    key={c.poster}
                    type="button"
                    onClick={() => setSelected(c)}
                    className="group block text-left cursor-pointer"
                    aria-label={`Watch ${c.name} case study`}
                  >
                    {Tile}
                  </button>
                );
              }
              return (
                <article key={c.poster} className="group block">
                  {Tile}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#FBF7F0] text-[#0A0606] py-24 sm:py-32">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="font-sans text-[#F14312] text-[11px] font-semibold tracking-[0.32em] uppercase mb-5">
            What&apos;s next
          </p>
          <h2
            className="font-display text-[#0A0606] mb-8"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: "0.95" }}
          >
            Your name <em className="font-serif italic font-normal">here</em>.
          </h2>
          <p className="lede italic text-[#0A0606]/65 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            We take on a small number of new clients each season. The audit is
            how Sheeraz decides who.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/fame-ai" className="btn-primary">
              Apply for the Audit
            </Link>
            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Book a Call
            </a>
          </div>
        </div>
      </section>

      <VideoModal
        open={!!selected}
        src={selected?.video ?? ""}
        poster={selected?.poster}
        title={selected?.name ?? ""}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
