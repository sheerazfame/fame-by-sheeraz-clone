"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const CALENDLY_URL =
  "https://calendly.com/free15-mindiscoverycall/fameauditcall";

const celebrities = [
  { name: "Kim Kardashian", src: "/images/kim-kardashian.jpg" },
  { name: "Miley Cyrus", src: "/images/miley-cyrus.jpg" },
  { name: "Zendaya", src: "/images/zendaya.png" },
  { name: "Logan Paul", src: "/images/logan-paul.png" },
  { name: "Priyanka Chopra", src: "/images/priyanka-chopra.webp" },
];

export default function HeroSection() {
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
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Sheeraz Hasan"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="fade-target text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-tight">
            Over 25 Years in the{" "}
            <span className="text-gold-gradient">Business of Attention</span>
          </h1>

          <p className="fade-target delay-200 mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Celebrity PR, media strategy, and amplification. From Hollywood to
            Dubai, we turn names into global brands.
          </p>

          <div className="fade-target delay-300 mt-10">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gold text-black font-semibold text-sm uppercase tracking-widest hover:bg-gold-light transition-all duration-300 hover:scale-105 btn-glow"
            >
              Book Free 15min Call
            </a>
          </div>
        </div>

        {/* Celebrity Thumbnails */}
        <div className="fade-target delay-500 mt-16 sm:mt-24 flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
          {celebrities.map((celeb) => (
            <div
              key={celeb.name}
              className="relative w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/20 hover:border-gold transition-all duration-300 hover:scale-110"
            >
              <Image
                src={celeb.src}
                alt={celeb.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
