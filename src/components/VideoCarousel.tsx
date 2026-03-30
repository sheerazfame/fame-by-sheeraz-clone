"use client";

import Image from "next/image";

const videos = [
  {
    part: 1,
    image: "/images/kardashians-part1.jpg",
    href: "https://www.youtube.com/watch?v=MsmvKU3xqpA",
  },
  {
    part: 2,
    image: "/images/kardashians-part2.jpg",
    href: "#",
  },
  {
    part: 3,
    image: "/images/kardashians-part3.jpg",
    href: "#",
  },
];

function PlayButton() {
  return (
    <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center group-hover:border-[#F14312] transition-colors duration-300 bg-black/30">
      <svg
        className="w-5 h-5 text-white ml-1"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

export default function VideoCarousel() {
  return (
    <section
      className="bg-[#01060D] py-0"
      style={{ borderTop: "2px solid #F14312" }}
    >
      <div className="flex flex-col sm:flex-row">
        {videos.map((video) => {
          const isExternal = video.href !== "#";
          return (
            <a
              key={video.part}
              href={video.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group relative flex-1 overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-[#050a14]">
                <Image
                  src={video.image}
                  alt={`KIM K CASE STUDY Part ${video.part}`}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  unoptimized
                />

                {/* Part badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-[#F14312] text-white font-[family-name:var(--font-barlow)] font-extrabold italic text-xs px-2 py-0.5 uppercase tracking-wider">
                    PART {video.part}
                  </span>
                </div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayButton />
                </div>
              </div>

              {/* Label */}
              <p className="font-[family-name:var(--font-barlow)] font-extrabold italic text-[#EEEEEE] text-sm sm:text-base text-center uppercase py-3 leading-tight bg-[#01060D]">
                KIM K CASE STUDY
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
