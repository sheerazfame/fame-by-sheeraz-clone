"use client";

import { useRef } from "react";
import Image from "next/image";

const photos = [
  { src: "/images/portrait-kim-k.jpg", alt: "Kim Kardashian" },
  { src: "/images/portrait-zendaya.jpg", alt: "Zendaya" },
  { src: "/images/portrait-logan-paul.jpg", alt: "Logan Paul" },
  { src: "/images/portrait-paris-hilton.jpg", alt: "Paris Hilton" },
  { src: "/images/portrait-priyanka-chopra.jpg", alt: "Priyanka Chopra" },
  { src: "/images/portrait-miley-cyrus.jpg", alt: "Miley Cyrus" },
  { src: "/images/about-sheeraz.jpg", alt: "Sheeraz Hasan" },
  { src: "/images/cs-selena.jpg", alt: "Selena Gomez" },
  { src: "/images/cs-jennifer-lopez.jpg", alt: "Jennifer Lopez" },
  { src: "/images/cs-ricky-martin.jpg", alt: "Ricky Martin" },
];

const CARD_WIDTH = 150;
const CARD_GAP = 12;
const SCROLL_AMOUNT = CARD_WIDTH + CARD_GAP;

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
      className="flex-shrink-0 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-[#F14312]/80 hover:border-[#F14312] transition-colors duration-200 z-10"
    >
      {direction === "left" ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      )}
    </button>
  );
}

export default function PhotoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
    }
  }

  function scrollRight() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    }
  }

  return (
    <section className="bg-[#01060D] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {/* Left arrow */}
          <ArrowButton direction="left" onClick={scrollLeft} />

          {/* Scrollable photo strip */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-hidden flex-1"
            style={{ scrollBehavior: "smooth" }}
          >
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="relative flex-shrink-0 rounded-lg overflow-hidden"
                style={{ width: CARD_WIDTH, height: 200 }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <ArrowButton direction="right" onClick={scrollRight} />
        </div>
      </div>
    </section>
  );
}
