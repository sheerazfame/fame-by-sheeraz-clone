"use client";

import Image from "next/image";

interface VideoCase {
  name: string;
  image: string;
  href: string;
}

const videos: VideoCase[] = [
  {
    name: "KIM K CASE STUDY",
    image: "/images/kardashians-part1.jpg",
    href: "https://www.youtube.com/watch?v=MsmvKU3xqpA",
  },
  {
    name: "ZENDAYA CASE STUDY",
    image: "/images/cs-zendaya.jpg",
    href: "#",
  },
  {
    name: "LOGAN CASE STUDY",
    image: "/images/cs-logan-paul.jpg",
    href: "#",
  },
  {
    name: "PARIS CASE STUDY",
    image: "/images/cs-paris-hilton.jpg",
    href: "#",
  },
  {
    name: "PRIYANKA CASE STUDY",
    image: "/images/cs-priyanka.jpg",
    href: "#",
  },
  {
    name: "MILEY CASE STUDY",
    image: "/images/cs-miley.jpg",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => {
          const isExternal = video.href !== "#";
          return (
            <a
              key={video.name}
              href={video.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-[#050a14]">
                <Image
                  src={video.image}
                  alt={video.name}
                  fill
                  className="object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayButton />
                </div>
              </div>

              {/* Label */}
              <h3 className="font-[family-name:var(--font-barlow)] font-extrabold italic text-[#EEEEEE] text-sm sm:text-base text-center uppercase py-3 leading-tight bg-[#01060D]">
                {video.name}
              </h3>
            </a>
          );
        })}
      </div>
    </section>
  );
}
