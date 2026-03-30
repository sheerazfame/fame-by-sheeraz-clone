"use client";

import Image from "next/image";

const portraits = [
  { name: "Kim Kardashian", displayName: "KIM K", src: "/images/portrait-kim-k.jpg" },
  { name: "Zendaya", displayName: "ZENDAYA", src: "/images/portrait-zendaya.png" },
  { name: "Logan Paul", displayName: "LOGAN", src: "/images/portrait-logan-paul.png" },
  { name: "Paris Hilton", displayName: "PARIS", src: "/images/portrait-paris-hilton.jpg" },
  { name: "Priyanka Chopra", displayName: "PRIYANKA", src: "/images/portrait-priyanka-chopra.webp" },
  { name: "Miley Cyrus", displayName: "MILEY", src: "/images/portrait-miley-cyrus.jpg" },
];

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function CelebrityPortraits() {
  return (
    <section className="bg-white py-[72px]">
      <div className="max-w-[1360px] mx-auto px-4">
        <div className="grid grid-cols-3 gap-[36px]">
          {portraits.map((portrait) => (
            <div
              key={portrait.name}
              className="group relative aspect-[428/507] overflow-hidden rounded-[40px]"
            >
              <Image
                src={portrait.src}
                alt={portrait.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
                unoptimized
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-5 gap-[44px] opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out">
                {/* Name + CASE STUDY */}
                <div className="text-center leading-none">
                  <p
                    className="font-[family-name:var(--font-barlow)] font-black italic text-[#EE4223] leading-none"
                    style={{ fontSize: "50px" }}
                  >
                    {portrait.displayName}
                  </p>
                  <p
                    className="font-[family-name:var(--font-barlow)] font-black italic text-white leading-none mt-1"
                    style={{ fontSize: "30px" }}
                  >
                    CASE STUDY
                  </p>
                </div>

                {/* WATCH button */}
                <button className="flex items-center justify-center gap-2 bg-white text-black font-bold rounded-full w-[143px] h-[56px] text-sm">
                  <PlayIcon />
                  WATCH
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
