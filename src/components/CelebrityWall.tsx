"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import VideoModal from "./VideoModal";

interface Star {
  poster: string;
  name: string;
  video?: string;
}

const STARS: Star[] = [
  { poster: "/case-studies/01-kim-kardashian.webp", name: "Kim Kardashian" },
  { poster: "/case-studies/02-logan-paul.webp", name: "Logan Paul" },
  { poster: "/case-studies/03-zendaya.webp", name: "Zendaya" },
  { poster: "/case-studies/04-paris-hilton.webp", name: "Paris Hilton", video: "/videos/cases/paris-hilton.mp4" },
  { poster: "/case-studies/05-cz-binance.webp", name: "CZ · Binance", video: "/videos/cases/cz-binance.mp4" },
  { poster: "/case-studies/06-sheeraz-talks-fame.webp", name: "Sheeraz on Fame" },
  { poster: "/case-studies/07-selena-gomez.webp", name: "Selena Gomez", video: "/videos/cases/selena-gomez.mp4" },
  { poster: "/case-studies/08-miley-cyrus.webp", name: "Miley Cyrus" },
  { poster: "/case-studies/09-priyanka-chopra.webp", name: "Priyanka Chopra", video: "/videos/cases/priyanka-chopra.mp4" },
  { poster: "/case-studies/10-paris-hilton-skincare.webp", name: "Paris Hilton · Skincare", video: "/videos/cases/paris-hilton-skincare.mp4" },
  { poster: "/case-studies/11-ricky-martin.webp", name: "Ricky Martin" },
  { poster: "/case-studies/12-jennifer-lopez.webp", name: "Jennifer Lopez", video: "/videos/cases/jennifer-lopez.mp4" },
  { poster: "/case-studies/13-bryce-hall-austin-mcbroom.webp", name: "Bryce Hall × McBroom", video: "/videos/cases/bryce-hall-austin-mcbroom.mp4" },
  { poster: "/case-studies/14-adam-waheed.webp", name: "Adam Waheed", video: "/videos/cases/adam-waheed.mp4" },
  { poster: "/case-studies/15-nelk-boys.webp", name: "Nelk Boys" },
  { poster: "/case-studies/16-pamela-anderson.webp", name: "Pamela Anderson" },
  { poster: "/case-studies/17-angela-baby-huang-xiaoming.webp", name: "Angela Baby × Huang Xiaoming", video: "/videos/cases/angela-baby-huang-xiaoming.mp4" },
  { poster: "/case-studies/18-gabriel-macht.webp", name: "Gabriel Macht", video: "/videos/cases/gabriel-macht.mp4" },
  { poster: "/case-studies/19-niki-and-gabi.webp", name: "Niki & Gabi" },
  { poster: "/case-studies/20-lele-pons.webp", name: "Lele Pons", video: "/videos/cases/lele-pons.mp4" },
];

export default function CelebrityWall() {
  const [selected, setSelected] = useState<Star | null>(null);

  const handleClick = (star: Star) => {
    if (star.video) setSelected(star);
  };

  return (
    <>
      <section className="bg-[#0A0606] py-16 sm:py-24 border-t border-[#F5F0E8]/8">
        <div className="max-w-[1480px] mx-auto px-3 sm:px-5 lg:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <p className="kicker kicker-fire mb-3">The clients</p>
            <h2
              className="font-display text-[#F5F0E8]"
              style={{
                fontSize: "clamp(36px, 5vw, 80px)",
                lineHeight: "0.95",
                letterSpacing: "-0.012em",
              }}
            >
              Names you <em className="font-serif italic font-normal text-[#F14312]">already know</em>.
            </h2>
            <p className="lede italic text-[#F5F0E8]/45 mt-4 text-sm sm:text-base">
              Tap any tile with a play button to watch the case study.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-px bg-[#F5F0E8]/8">
            {STARS.map((s) => {
              const Tile = (
                <>
                  <Image
                    src={s.poster}
                    alt={s.name}
                    fill
                    className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"
                  />

                  {/* Play indicator only if video */}
                  {s.video && (
                    <span
                      aria-hidden="true"
                      className="absolute top-4 right-4 flex-shrink-0 w-9 h-9 rounded-full border border-white/40 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-[#F14312] group-hover:border-[#F14312] transition-all"
                    >
                      <svg width="11" height="11" viewBox="0 0 9 9" fill="currentColor"><path d="M0 0v9l9-4.5z" /></svg>
                    </span>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <h3
                      className="font-display text-[#F5F0E8] leading-[1] tracking-tight"
                      style={{ fontSize: "clamp(15px, 1.3vw, 20px)" }}
                    >
                      {s.name}
                    </h3>
                  </div>
                </>
              );

              if (s.video) {
                return (
                  <button
                    key={s.poster}
                    type="button"
                    onClick={() => handleClick(s)}
                    className="group relative block aspect-[3/4] overflow-hidden bg-[#14100D] cursor-pointer text-left"
                    aria-label={`Watch ${s.name} case study`}
                  >
                    {Tile}
                  </button>
                );
              }
              return (
                <Link
                  key={s.poster}
                  href="/casestudies"
                  className="group relative block aspect-[3/4] overflow-hidden bg-[#14100D]"
                  aria-label={`${s.name} — case study`}
                >
                  {Tile}
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/casestudies"
              className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.22em] text-[#F5F0E8]/65 hover:text-[#F14312] transition-colors"
            >
              See all case studies
              <span aria-hidden="true">→</span>
            </Link>
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
