"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const mediaLogos = [
  { name: "BBC", src: "/images/logo-bbc.png" },
  { name: "HBO Max", src: "/images/logo-hbo-max.png" },
  { name: "ABC", src: "/images/logo-abc.png" },
  { name: "Netflix", src: "/images/logo-netflix.png" },
  { name: "Fox News", src: "/images/logo-fox-news.png" },
  { name: "Daily Mail", src: "/images/logo-daily-mail.png" },
  { name: "TMZ", src: "/images/logo-tmz.png" },
  { name: "Reuters", src: "/images/logo-reuters.png" },
  { name: "Associated Press", src: "/images/logo-associated-press.png" },
  { name: "YouTube Originals", src: "/images/logo-youtube-originals.png" },
  { name: "Channel 4", src: "/images/logo-channel4.png" },
  { name: "Channel 7", src: "/images/logo-channel7.png" },
  { name: "ITV", src: "/images/logo-itv.png" },
  { name: "Zee News", src: "/images/logo-zee-news.png" },
  { name: "Binance", src: "/images/logo-binance.png" },
  { name: "STARZPLAY", src: "/images/logo-starzplay.png" },
];

export default function AsSeenOn() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      sectionRef.current?.querySelectorAll(".fade-target") ?? [];
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 bg-dark-secondary relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="fade-target text-center text-sm uppercase tracking-[0.3em] text-muted mb-12">
          As seen on
        </h2>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-dark-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-dark-secondary to-transparent z-10" />

        <div className="flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-10 sm:gap-16 shrink-0">
            {/* Double the logos for seamless loop */}
            {[...mediaLogos, ...mediaLogos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
